<?php
/**
 * API ADMIN DICTIONNAIRE - Adapté à votre structure
 * Base: database/dictionary.db
 * Table: dictionary (kivira, french, english, swahili + exemples)
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Chemin vers votre base de données
$DB_PATH = '../database/dictionary.db';

// Connexion à SQLite
try {
    $db = new PDO('sqlite:' . $DB_PATH);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Connexion impossible: ' . $e->getMessage()]);
    exit;
}

$action = $_GET['action'] ?? '';

// ============================================
// ACTION : RÉCUPÉRER TOUS LES MOTS
// ============================================
if ($action === 'get_all') {
    try {
        $stmt = $db->query("SELECT * FROM dictionary ORDER BY kivira ASC");
        $words = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'words' => $words,
            'count' => count($words)
        ]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// ACTION : RÉCUPÉRER UN MOT PAR ID
// ============================================
if ($action === 'get_by_id') {
    $id = $_GET['id'] ?? 0;
    
    if (!$id) {
        echo json_encode(['success' => false, 'error' => 'ID manquant']);
        exit;
    }
    
    try {
        $stmt = $db->prepare("SELECT * FROM dictionary WHERE id = ?");
        $stmt->execute([$id]);
        $word = $stmt->fetch(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'word' => $word
        ]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// ACTION : AJOUTER UN MOT
// ============================================
if ($action === 'add') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $kivira = $data['kivira'] ?? '';
    $french = $data['french'] ?? '';
    $english = $data['english'] ?? '';
    $swahili = $data['swahili'] ?? '';
    $category = $data['category'] ?? '';
    $type = $data['type'] ?? '';
    $example_kivira = $data['example_kivira'] ?? '';
    $example_translation_fr = $data['example_translation_fr'] ?? '';
    $example_translation_en = $data['example_translation_en'] ?? '';
    $example_translation_sw = $data['example_translation_sw'] ?? '';
    
    if (!$kivira || !$french || !$english || !$swahili) {
        echo json_encode(['success' => false, 'error' => 'Les champs Kivira, Français, Anglais et Swahili sont requis']);
        exit;
    }
    
    try {
        $stmt = $db->prepare("
            INSERT INTO dictionary (
                kivira, french, english, swahili, category, type,
                example_kivira, example_translation_fr, example_translation_en, example_translation_sw,
                created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
        ");
        
        $stmt->execute([
            $kivira, $french, $english, $swahili, $category, $type,
            $example_kivira, $example_translation_fr, $example_translation_en, $example_translation_sw
        ]);
        
        echo json_encode(['success' => true, 'id' => $db->lastInsertId()]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// ACTION : MODIFIER UN MOT
// ============================================
if ($action === 'update') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $id = $data['id'] ?? 0;
    $kivira = $data['kivira'] ?? '';
    $french = $data['french'] ?? '';
    $english = $data['english'] ?? '';
    $swahili = $data['swahili'] ?? '';
    $category = $data['category'] ?? '';
    $type = $data['type'] ?? '';
    $example_kivira = $data['example_kivira'] ?? '';
    $example_translation_fr = $data['example_translation_fr'] ?? '';
    $example_translation_en = $data['example_translation_en'] ?? '';
    $example_translation_sw = $data['example_translation_sw'] ?? '';
    
    if (!$id || !$kivira || !$french || !$english || !$swahili) {
        echo json_encode(['success' => false, 'error' => 'Champs requis manquants']);
        exit;
    }
    
    try {
        $stmt = $db->prepare("
            UPDATE dictionary SET
                kivira = ?, french = ?, english = ?, swahili = ?,
                category = ?, type = ?,
                example_kivira = ?, example_translation_fr = ?, example_translation_en = ?, example_translation_sw = ?,
                updated_at = datetime('now')
            WHERE id = ?
        ");
        
        $stmt->execute([
            $kivira, $french, $english, $swahili, $category, $type,
            $example_kivira, $example_translation_fr, $example_translation_en, $example_translation_sw,
            $id
        ]);
        
        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// ACTION : SUPPRIMER UN MOT
// ============================================
if ($action === 'delete') {
    $id = $_GET['id'] ?? 0;
    
    if (!$id) {
        echo json_encode(['success' => false, 'error' => 'ID manquant']);
        exit;
    }
    
    try {
        $stmt = $db->prepare("DELETE FROM dictionary WHERE id = ?");
        $stmt->execute([$id]);
        
        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// ACTION : RECHERCHER
// ============================================
if ($action === 'search') {
    $query = $_GET['q'] ?? '';
    
    if (!$query) {
        echo json_encode(['success' => true, 'results' => []]);
        exit;
    }
    
    try {
        $stmt = $db->prepare("
            SELECT * FROM dictionary 
            WHERE kivira LIKE ? OR french LIKE ? OR english LIKE ? OR swahili LIKE ?
            ORDER BY kivira ASC 
            LIMIT 50
        ");
        
        $searchTerm = "%$query%";
        $stmt->execute([$searchTerm, $searchTerm, $searchTerm, $searchTerm]);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode(['success' => true, 'results' => $results]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// ACTION : STATISTIQUES
// ============================================
if ($action === 'stats') {
    try {
        // Total
        $stmt = $db->query("SELECT COUNT(*) as total FROM dictionary");
        $total = $stmt->fetch(PDO::FETCH_ASSOC)['total'];
        
        // Par catégorie
        $stmt = $db->query("SELECT category, COUNT(*) as count FROM dictionary WHERE category IS NOT NULL AND category != '' GROUP BY category ORDER BY count DESC");
        $by_category = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Par type
        $stmt = $db->query("SELECT type, COUNT(*) as count FROM dictionary WHERE type IS NOT NULL AND type != '' GROUP BY type ORDER BY count DESC");
        $by_type = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'total' => $total,
            'by_category' => $by_category,
            'by_type' => $by_type
        ]);
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    exit;
}

// ============================================
// ACTION : FILTRER PAR CATÉGORIE
// ============================================
if ($action === 'filter_category') {
    $category = $_GET['category'] ?? '';
    
    try {
        if ($category) {
            $stmt = $db->prepare("SELECT * FROM dictionary WHERE category = ? ORDER BY kivira ASC");
            $stmt->execute([$category]);
        } else {
            $stmt = $db->query("SELECT * FROM dictionary ORDER BY kivira ASC");
        }
        
        $words = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'success' => true,
            'words' => $words,
            'count' => count($words)
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
