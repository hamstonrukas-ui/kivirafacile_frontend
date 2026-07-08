<?php
// ==================== API BIBLIOTHÈQUE À 3 NIVEAUX ====================
// Fichier: api/library.php
// Navigation : Catégories → Titres → Articles

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

// ========== CONFIGURATION ==========
$db_path = __DIR__ . '/../database/library.db';

// ========== CONNEXION SQLite ==========
try {
    $db = new SQLite3($db_path);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur de connexion à la base de données']);
    exit;
}

// ========== RÉCUPÉRER PARAMÈTRES ==========
$action = $_GET['action'] ?? 'categories';
$lang = $_GET['lang'] ?? 'fr';  // fr, en, sw
$category_slug = $_GET['category'] ?? '';
$book_slug = $_GET['book'] ?? '';
$book_id = $_GET['id'] ?? 0;

// ========== NIVEAU 1 : OBTENIR LES CATÉGORIES ==========
function getCategories($db, $lang) {
    $query = "
        SELECT 
            id,
            slug,
            name_{$lang} as name,
            description_{$lang} as description,
            icon,
            display_order
        FROM library_categories
        ORDER BY display_order ASC
    ";
    
    $result = $db->query($query);
    
    if (!$result) {
        return ['error' => 'Erreur de requête'];
    }
    
    $categories = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        // Compter les livres dans cette catégorie
        $count_query = "SELECT COUNT(*) as count FROM library_books WHERE category_id = {$row['id']}";
        $count_result = $db->query($count_query);
        $count = $count_result->fetchArray(SQLITE3_ASSOC)['count'];
        
        $row['book_count'] = $count;
        $categories[] = $row;
    }
    
    return [
        'level' => 1,
        'type' => 'categories',
        'data' => $categories,
        'count' => count($categories)
    ];
}

// ========== NIVEAU 2 : OBTENIR LES LIVRES D'UNE CATÉGORIE ==========
function getBooksByCategory($db, $lang, $category_slug) {
    // Obtenir l'ID de la catégorie
    $slug = SQLite3::escapeString($category_slug);
    
    $category_query = "
        SELECT 
            id,
            name_{$lang} as name,
            description_{$lang} as description
        FROM library_categories 
        WHERE slug = '{$slug}'
    ";
    
    $category_result = $db->query($category_query);
    $category = $category_result->fetchArray(SQLITE3_ASSOC);
    
    if (!$category) {
        return ['error' => 'Catégorie introuvable'];
    }
    
    // Obtenir les livres
    $books_query = "
        SELECT 
            id,
            slug,
            title_{$lang} as title,
            author_{$lang} as author,
            excerpt_{$lang} as excerpt,
            pages,
            year,
            cover_image,
            difficulty
        FROM library_books
        WHERE category_id = {$category['id']}
        ORDER BY title_{$lang} ASC
    ";
    
    $result = $db->query($books_query);
    
    $books = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $books[] = $row;
    }
    
    return [
        'level' => 2,
        'type' => 'books',
        'category' => [
            'name' => $category['name'],
            'description' => $category['description'],
            'slug' => $category_slug
        ],
        'data' => $books,
        'count' => count($books)
    ];
}

// ========== NIVEAU 3 : OBTENIR LE CONTENU COMPLET D'UN LIVRE ==========
function getBookContent($db, $lang, $book_slug = null, $book_id = 0) {
    // Recherche par slug ou ID
    if ($book_slug) {
        $slug = SQLite3::escapeString($book_slug);
        $where = "slug = '{$slug}'";
    } else {
        $where = "id = " . intval($book_id);
    }
    
    $query = "
        SELECT 
            lb.id,
            lb.slug,
            lb.title_{$lang} as title,
            lb.author_{$lang} as author,
            lb.excerpt_{$lang} as excerpt,
            lb.content_{$lang} as content,
            lb.pages,
            lb.year,
            lb.cover_image,
            lb.difficulty,
            lc.slug as category_slug,
            lc.name_{$lang} as category_name
        FROM library_books lb
        JOIN library_categories lc ON lb.category_id = lc.id
        WHERE lb.{$where}
    ";
    
    $result = $db->query($query);
    $book = $result->fetchArray(SQLITE3_ASSOC);
    
    if (!$book) {
        return ['error' => 'Livre introuvable'];
    }
    
    // Obtenir les livres connexes de la même catégorie
    $related_query = "
        SELECT 
            id,
            slug,
            title_{$lang} as title,
            author_{$lang} as author
        FROM library_books
        WHERE category_id = (
            SELECT category_id FROM library_books WHERE {$where}
        )
        AND {$where} = 0
        LIMIT 3
    ";
    
    $related_result = $db->query($related_query);
    $related = [];
    while ($row = $related_result->fetchArray(SQLITE3_ASSOC)) {
        $related[] = $row;
    }
    
    $book['related_books'] = $related;
    
    return [
        'level' => 3,
        'type' => 'book_content',
        'data' => $book
    ];
}

// ========== RECHERCHE DANS TOUTE LA BIBLIOTHÈQUE ==========
function searchLibrary($db, $lang, $search_term) {
    $term = SQLite3::escapeString($search_term);
    
    $query = "
        SELECT 
            lb.id,
            lb.slug,
            lb.title_{$lang} as title,
            lb.author_{$lang} as author,
            lb.excerpt_{$lang} as excerpt,
            lc.name_{$lang} as category_name,
            lc.slug as category_slug
        FROM library_books lb
        JOIN library_categories lc ON lb.category_id = lc.id
        WHERE 
            lb.title_{$lang} LIKE '%{$term}%' OR
            lb.author_{$lang} LIKE '%{$term}%' OR
            lb.content_{$lang} LIKE '%{$term}%'
        LIMIT 20
    ";
    
    $result = $db->query($query);
    
    $results = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $results[] = $row;
    }
    
    return [
        'type' => 'search_results',
        'query' => $search_term,
        'data' => $results,
        'count' => count($results)
    ];
}

// ========== STATISTIQUES ==========
function getLibraryStats($db) {
    $query = "SELECT * FROM library_stats";
    $result = $db->query($query);
    
    $stats = [];
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $stats[] = $row;
    }
    
    // Total de livres
    $total_query = "SELECT COUNT(*) as total FROM library_books";
    $total_result = $db->query($total_query);
    $total = $total_result->fetchArray(SQLITE3_ASSOC)['total'];
    
    return [
        'total_books' => $total,
        'by_category' => $stats
    ];
}

// ========== ROUTER ==========
$response = [];

switch ($action) {
    case 'categories':
        // NIVEAU 1
        $response = getCategories($db, $lang);
        break;
        
    case 'books':
        // NIVEAU 2
        if (empty($category_slug)) {
            http_response_code(400);
            $response = ['error' => 'Paramètre category requis'];
        } else {
            $response = getBooksByCategory($db, $lang, $category_slug);
        }
        break;
        
    case 'book':
        // NIVEAU 3
        if (empty($book_slug) && empty($book_id)) {
            http_response_code(400);
            $response = ['error' => 'Paramètre book ou id requis'];
        } else {
            $response = getBookContent($db, $lang, $book_slug, $book_id);
        }
        break;
        
    case 'search':
        $search = $_GET['q'] ?? '';
        if (empty($search)) {
            http_response_code(400);
            $response = ['error' => 'Paramètre q requis'];
        } else {
            $response = searchLibrary($db, $lang, $search);
        }
        break;
        
    case 'stats':
        $response = getLibraryStats($db);
        break;
        
    default:
        http_response_code(400);
        $response = ['error' => 'Action non reconnue'];
}

// ========== RETOUR JSON ==========
echo json_encode($response, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

$db->close();
?>
