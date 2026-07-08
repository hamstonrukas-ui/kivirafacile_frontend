<?php
/**
 * API BIBLIOTHÈQUE - STRUCTURE 3 NIVEAUX
 * Categories → Titles → Articles
 * Support de 4 langues : FR, EN, SW, KI
 * 
 * Fichier : api/library_api.php
 */

// Configuration CORS
header('Access-Control-Allow-Origin: http://localhost:8000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Gestion des requêtes OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Configuration base de données
$host = 'localhost';
$dbname = 'library';  // ← MODIFIER ICI
$username = 'root'; // ← MODIFIER ICI
$password = ''; // ← MODIFIER ICI

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Erreur de connexion: ' . $e->getMessage()]);
    exit;
}

$action = $_GET['action'] ?? '';

// ============================================
// CATÉGORIES (NIVEAU 1)
// ============================================

if ($action === 'categories') {
    try {
        $stmt = $pdo->query("SELECT id, name_fr, name_en, name_sw, name_ki, slug FROM categories ORDER BY display_order");
        $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'categories' => $categories
        ]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// RÉCUPÉRER TOUTE LA STRUCTURE (pour frontend)
// ============================================

if ($action === 'get_library') {
    try {
        // Récupérer toutes les catégories
        $stmt = $pdo->query("SELECT * FROM categories ORDER BY display_order");
        $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Pour chaque catégorie, récupérer ses titres
        foreach ($categories as &$category) {
            $stmt = $pdo->prepare("SELECT * FROM titles WHERE category_id = ? ORDER BY display_order");
            $stmt->execute([$category['id']]);
            $titles = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Pour chaque titre, récupérer ses articles
            foreach ($titles as &$title) {
                $stmt = $pdo->prepare("SELECT * FROM articles WHERE title_id = ? ORDER BY display_order");
                $stmt->execute([$title['id']]);
                $title['articles'] = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            
            $category['titles'] = $titles;
        }
        
        echo json_encode([
            'success' => true,
            'library' => $categories
        ]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// TITRES (NIVEAU 2)
// ============================================

// Récupérer les titres d'une catégorie
if ($action === 'titles') {
    $category_id = $_GET['category_id'] ?? 0;
    
    try {
        $stmt = $pdo->prepare("SELECT * FROM titles WHERE category_id = ? ORDER BY display_order");
        $stmt->execute([$category_id]);
        $titles = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'titles' => $titles
        ]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// Ajouter un titre
if ($action === 'add_title') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $sql = "INSERT INTO titles (category_id, title_fr, title_en, title_sw, title_ki, slug, display_order) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";
    
    $params = [
        $data['category_id'] ?? null,
        $data['title_fr'] ?? null,
        $data['title_en'] ?? null,
        $data['title_sw'] ?? null,
        $data['title_ki'] ?? null,
        $data['slug'] ?? null,
        $data['display_order'] ?? 0
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

// Modifier un titre
if ($action === 'update_title') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $sql = "UPDATE titles SET 
            category_id = ?,
            title_fr = ?,
            title_en = ?,
            title_sw = ?,
            title_ki = ?,
            slug = ?,
            display_order = ?
            WHERE id = ?";
    
    $params = [
        $data['category_id'] ?? null,
        $data['title_fr'] ?? null,
        $data['title_en'] ?? null,
        $data['title_sw'] ?? null,
        $data['title_ki'] ?? null,
        $data['slug'] ?? null,
        $data['display_order'] ?? 0,
        $data['id']
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

// Supprimer un titre
if ($action === 'delete_title') {
    $id = $_GET['id'] ?? 0;
    
    try {
        $stmt = $pdo->prepare("DELETE FROM titles WHERE id = ?");
        $stmt->execute([$id]);
        
        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// ARTICLES (NIVEAU 3)
// ============================================

// Récupérer les articles d'un titre
if ($action === 'articles') {
    $title_id = $_GET['title_id'] ?? 0;
    
    try {
        $stmt = $pdo->prepare("SELECT * FROM articles WHERE title_id = ? ORDER BY display_order");
        $stmt->execute([$title_id]);
        $articles = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'articles' => $articles
        ]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// Récupérer un article par ID
if ($action === 'get_article') {
    $id = $_GET['id'] ?? 0;
    
    try {
        $stmt = $pdo->prepare("SELECT * FROM articles WHERE id = ?");
        $stmt->execute([$id]);
        $article = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($article) {
            echo json_encode(['success' => true, 'article' => $article]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Article introuvable']);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// Ajouter un article
if ($action === 'add_article') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $sql = "INSERT INTO articles (title_id, content_fr, content_en, content_sw, content_ki, image, display_order, is_featured) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    $params = [
        $data['title_id'] ?? null,
        $data['content_fr'] ?? null,
        $data['content_en'] ?? null,
        $data['content_sw'] ?? null,
        $data['content_ki'] ?? null,
        $data['image'] ?? null,
        $data['display_order'] ?? 0,
        $data['is_featured'] ?? 0
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

// Modifier un article
if ($action === 'update_article') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $sql = "UPDATE articles SET 
            title_id = ?,
            content_fr = ?,
            content_en = ?,
            content_sw = ?,
            content_ki = ?,
            image = ?,
            display_order = ?,
            is_featured = ?
            WHERE id = ?";
    
    $params = [
        $data['title_id'] ?? null,
        $data['content_fr'] ?? null,
        $data['content_en'] ?? null,
        $data['content_sw'] ?? null,
        $data['content_ki'] ?? null,
        $data['image'] ?? null,
        $data['display_order'] ?? 0,
        $data['is_featured'] ?? 0,
        $data['id']
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

// Supprimer un article
if ($action === 'delete_article') {
    $id = $_GET['id'] ?? 0;
    
    try {
        $stmt = $pdo->prepare("DELETE FROM articles WHERE id = ?");
        $stmt->execute([$id]);
        
        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// RECHERCHE
// ============================================

if ($action === 'search') {
    $query = $_GET['q'] ?? '';
    
    if (!$query) {
        echo json_encode(['success' => true, 'results' => []]);
        exit;
    }
    
    try {
        // Recherche dans les 4 langues
        $sql = "SELECT a.*, t.title_fr, t.title_en, t.title_sw, t.title_ki, c.name_fr as category_name
                FROM articles a
                JOIN titles t ON a.title_id = t.id
                JOIN categories c ON t.category_id = c.id
                WHERE a.content_fr LIKE ? 
                   OR a.content_en LIKE ? 
                   OR a.content_sw LIKE ? 
                   OR a.content_ki LIKE ?
                   OR t.title_fr LIKE ?
                   OR t.title_en LIKE ?
                   OR t.title_sw LIKE ?
                   OR t.title_ki LIKE ?
                ORDER BY a.created_at DESC 
                LIMIT 50";
        
        $searchTerm = "%$query%";
        $params = array_fill(0, 8, $searchTerm);
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode(['success' => true, 'results' => $results]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// STATISTIQUES
// ============================================

if ($action === 'stats') {
    try {
        // Total articles
        $stmt = $pdo->query("SELECT COUNT(*) as total FROM articles");
        $total_articles = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
        
        // Total titres
        $stmt = $pdo->query("SELECT COUNT(*) as total FROM titles");
        $total_titles = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
        
        // Par catégorie
        $stmt = $pdo->query("
            SELECT c.id, c.name_fr, COUNT(t.id) as title_count
            FROM categories c
            LEFT JOIN titles t ON c.id = t.category_id
            GROUP BY c.id
        ");
        $by_category = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'total_articles' => $total_articles,
            'total_titles' => $total_titles,
            'total_categories' => 7,
            'by_category' => $by_category
        ]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// ACTION NON RECONNUE
// ============================================
echo json_encode(['success' => false, 'error' => 'Action non reconnue: ' . $action]);
?>
