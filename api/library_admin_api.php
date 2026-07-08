<?php
// ==================== API ADMIN BIBLIOTHÈQUE ====================
// Fichier: api/library_admin_api.php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');

$db_path = __DIR__ . '/../database/library.db';

// Connexion
try {
    $db = new SQLite3($db_path);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur de connexion à la base']);
    exit;
}

$action = $_GET['action'] ?? '';

// ========== AJOUTER UN LIVRE ==========
if ($action === 'add') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $category_id = intval($input['category_id'] ?? 0);
    $slug = SQLite3::escapeString($input['slug'] ?? '');
    
    // Titres
    $title_fr = SQLite3::escapeString($input['title_fr'] ?? '');
    $title_en = SQLite3::escapeString($input['title_en'] ?? '');
    $title_sw = SQLite3::escapeString($input['title_sw'] ?? '');
    
    // Auteurs
    $author_fr = SQLite3::escapeString($input['author_fr'] ?? '');
    $author_en = SQLite3::escapeString($input['author_en'] ?? '');
    $author_sw = SQLite3::escapeString($input['author_sw'] ?? '');
    
    // Extraits
    $excerpt_fr = SQLite3::escapeString($input['excerpt_fr'] ?? '');
    $excerpt_en = SQLite3::escapeString($input['excerpt_en'] ?? '');
    $excerpt_sw = SQLite3::escapeString($input['excerpt_sw'] ?? '');
    
    // Contenu complet
    $content_fr = SQLite3::escapeString($input['content_fr'] ?? '');
    $content_en = SQLite3::escapeString($input['content_en'] ?? '');
    $content_sw = SQLite3::escapeString($input['content_sw'] ?? '');
    
    // Métadonnées
    $pages = intval($input['pages'] ?? 0);
    $year = intval($input['year'] ?? 0);
    $cover_image = SQLite3::escapeString($input['cover_image'] ?? '');
    
    // Validation
    if (empty($slug) || empty($title_fr) || empty($title_en) || empty($title_sw)) {
        echo json_encode(['success' => false, 'error' => 'Champs obligatoires manquants']);
        exit;
    }
    
    if ($category_id < 1 || $category_id > 6) {
        echo json_encode(['success' => false, 'error' => 'Catégorie invalide']);
        exit;
    }
    
    $query = "
        INSERT INTO library_books (
            category_id, slug,
            title_fr, title_en, title_sw,
            author_fr, author_en, author_sw,
            excerpt_fr, excerpt_en, excerpt_sw,
            content_fr, content_en, content_sw,
            pages, year, cover_image
        ) VALUES (
            {$category_id}, '{$slug}',
            '{$title_fr}', '{$title_en}', '{$title_sw}',
            '{$author_fr}', '{$author_en}', '{$author_sw}',
            '{$excerpt_fr}', '{$excerpt_en}', '{$excerpt_sw}',
            '{$content_fr}', '{$content_en}', '{$content_sw}',
            {$pages}, {$year}, '{$cover_image}'
        )
    ";
    
    try {
        $db->exec($query);
        echo json_encode(['success' => true, 'message' => 'Livre ajouté avec succès']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}

// ========== RECHERCHER ==========
elseif ($action === 'search') {
    $q = SQLite3::escapeString($_GET['q'] ?? '');
    
    $query = "
        SELECT 
            id, category_id, slug,
            title_fr, title_en, title_sw,
            author_fr, author_en, author_sw,
            pages, year, cover_image
        FROM library_books
        WHERE 
            title_fr LIKE '%{$q}%' OR
            title_en LIKE '%{$q}%' OR
            title_sw LIKE '%{$q}%' OR
            author_fr LIKE '%{$q}%' OR
            author_en LIKE '%{$q}%' OR
            author_sw LIKE '%{$q}%'
        ORDER BY title_fr ASC
        LIMIT 50
    ";
    
    $result = $db->query($query);
    $results = [];
    
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $results[] = $row;
    }
    
    echo json_encode(['results' => $results]);
}

// ========== SUPPRIMER ==========
elseif ($action === 'delete') {
    $id = intval($_GET['id'] ?? 0);
    
    $query = "DELETE FROM library_books WHERE id = {$id}";
    
    try {
        $db->exec($query);
        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}

// ========== STATISTIQUES ==========
elseif ($action === 'stats') {
    // Total de livres
    $total_query = "SELECT COUNT(*) as total FROM library_books";
    $total_result = $db->query($total_query);
    $total = $total_result->fetchArray(SQLITE3_ASSOC)['total'];
    
    // Total de pages
    $pages_query = "SELECT SUM(pages) as total_pages FROM library_books";
    $pages_result = $db->query($pages_query);
    $total_pages = $pages_result->fetchArray(SQLITE3_ASSOC)['total_pages'];
    
    // Par catégorie
    $category_query = "
        SELECT category_id, COUNT(*) as count
        FROM library_books
        GROUP BY category_id
        ORDER BY count DESC
    ";
    
    $category_result = $db->query($category_query);
    $by_category = [];
    
    while ($row = $category_result->fetchArray(SQLITE3_ASSOC)) {
        $by_category[] = $row;
    }
    
    echo json_encode([
        'total' => $total,
        'total_pages' => $total_pages,
        'by_category' => $by_category
    ]);
}

// ========== OBTENIR UN LIVRE PAR ID ==========
elseif ($action === 'get') {
    $id = intval($_GET['id'] ?? 0);
    
    $query = "SELECT * FROM library_books WHERE id = {$id}";
    $result = $db->query($query);
    $book = $result->fetchArray(SQLITE3_ASSOC);
    
    if ($book) {
        echo json_encode(['success' => true, 'book' => $book]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Livre introuvable']);
    }
}

// ========== METTRE À JOUR UN LIVRE ==========
elseif ($action === 'update') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $id = intval($input['id'] ?? 0);
    
    if ($id === 0) {
        echo json_encode(['success' => false, 'error' => 'ID manquant']);
        exit;
    }
    
    // Construire la requête UPDATE
    $updates = [];
    
    if (isset($input['title_fr'])) $updates[] = "title_fr = '" . SQLite3::escapeString($input['title_fr']) . "'";
    if (isset($input['title_en'])) $updates[] = "title_en = '" . SQLite3::escapeString($input['title_en']) . "'";
    if (isset($input['title_sw'])) $updates[] = "title_sw = '" . SQLite3::escapeString($input['title_sw']) . "'";
    if (isset($input['author_fr'])) $updates[] = "author_fr = '" . SQLite3::escapeString($input['author_fr']) . "'";
    if (isset($input['author_en'])) $updates[] = "author_en = '" . SQLite3::escapeString($input['author_en']) . "'";
    if (isset($input['author_sw'])) $updates[] = "author_sw = '" . SQLite3::escapeString($input['author_sw']) . "'";
    if (isset($input['content_fr'])) $updates[] = "content_fr = '" . SQLite3::escapeString($input['content_fr']) . "'";
    if (isset($input['content_en'])) $updates[] = "content_en = '" . SQLite3::escapeString($input['content_en']) . "'";
    if (isset($input['content_sw'])) $updates[] = "content_sw = '" . SQLite3::escapeString($input['content_sw']) . "'";
    if (isset($input['pages'])) $updates[] = "pages = " . intval($input['pages']);
    if (isset($input['year'])) $updates[] = "year = " . intval($input['year']);
    
    if (empty($updates)) {
        echo json_encode(['success' => false, 'error' => 'Aucune modification']);
        exit;
    }
    
    $query = "UPDATE library_books SET " . implode(', ', $updates) . " WHERE id = {$id}";
    
    try {
        $db->exec($query);
        echo json_encode(['success' => true, 'message' => 'Livre mis à jour']);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}

else {
    echo json_encode(['error' => 'Action non reconnue']);
}
// ============================================
// FONCTION 1 : Récupérer un livre par ID
// ============================================
// Ajouter cette fonction dans votre switch($action)

if ($action === 'get') {
    $id = $_GET['id'] ?? 0;
    
    if (!$id) {
        echo json_encode(['success' => false, 'error' => 'ID manquant']);
        exit;
    }
    
    $stmt = $pdo->prepare("SELECT * FROM books WHERE id = ?");
    $stmt->execute([$id]);
    $book = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if ($book) {
        echo json_encode(['success' => true, 'book' => $book]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Livre introuvable']);
    }
    exit;
}

// ============================================
// FONCTION 2 : Mettre à jour un livre
// ============================================
// Ajouter cette fonction dans votre switch($action)

if ($action === 'update') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $id = $data['id'] ?? 0;
    
    if (!$id) {
        echo json_encode(['success' => false, 'error' => 'ID manquant']);
        exit;
    }
    
    // Construire la requête UPDATE avec TOUTES les colonnes (4 langues)
    $sql = "UPDATE books SET 
        category_id = ?,
        slug = ?,
        title_fr = ?,
        title_en = ?,
        title_sw = ?,
        title_ki = ?,
        author_fr = ?,
        author_en = ?,
        author_sw = ?,
        author_ki = ?,
        excerpt_fr = ?,
        excerpt_en = ?,
        excerpt_sw = ?,
        excerpt_ki = ?,
        content_fr = ?,
        content_en = ?,
        content_sw = ?,
        content_ki = ?,
        pages = ?,
        year = ?,
        cover_image = ?
    WHERE id = ?";
    
    $params = [
        $data['category_id'] ?? null,
        $data['slug'] ?? null,
        $data['title_fr'] ?? null,
        $data['title_en'] ?? null,
        $data['title_sw'] ?? null,
        $data['title_ki'] ?? null,
        $data['author_fr'] ?? null,
        $data['author_en'] ?? null,
        $data['author_sw'] ?? null,
        $data['author_ki'] ?? null,
        $data['excerpt_fr'] ?? null,
        $data['excerpt_en'] ?? null,
        $data['excerpt_sw'] ?? null,
        $data['excerpt_ki'] ?? null,
        $data['content_fr'] ?? null,
        $data['content_en'] ?? null,
        $data['content_sw'] ?? null,
        $data['content_ki'] ?? null,
        $data['pages'] ?? null,
        $data['year'] ?? null,
        $data['cover_image'] ?? null,
        $id
    ];
    
    try {
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        
        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// MISE À JOUR DE LA FONCTION ADD
// ============================================
// REMPLACER votre fonction 'add' existante par celle-ci pour supporter le Kivira

if ($action === 'add') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $sql = "INSERT INTO books (
        category_id, slug,
        title_fr, title_en, title_sw, title_ki,
        author_fr, author_en, author_sw, author_ki,
        excerpt_fr, excerpt_en, excerpt_sw, excerpt_ki,
        content_fr, content_en, content_sw, content_ki,
        pages, year, cover_image
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    $params = [
        $data['category_id'] ?? null,
        $data['slug'] ?? null,
        $data['title_fr'] ?? null,
        $data['title_en'] ?? null,
        $data['title_sw'] ?? null,
        $data['title_ki'] ?? null,  // NOUVEAU
        $data['author_fr'] ?? null,
        $data['author_en'] ?? null,
        $data['author_sw'] ?? null,
        $data['author_ki'] ?? null,  // NOUVEAU
        $data['excerpt_fr'] ?? null,
        $data['excerpt_en'] ?? null,
        $data['excerpt_sw'] ?? null,
        $data['excerpt_ki'] ?? null,  // NOUVEAU
        $data['content_fr'] ?? null,
        $data['content_en'] ?? null,
        $data['content_sw'] ?? null,
        $data['content_ki'] ?? null,  // NOUVEAU
        $data['pages'] ?? null,
        $data['year'] ?? null,
        $data['cover_image'] ?? null
    ];
    
    try {
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        
        echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

$db->close();
?>
