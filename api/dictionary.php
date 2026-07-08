<?php
// ==================== API DICTIONNAIRE V2 ====================
// Fichier: api/dictionary_v2.php
// CORRECTION : Exemples EN KIVIRA avec traductions

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$db_path = __DIR__ . '/../database/dictionary.db';

// Connexion
try {
    $db = new SQLite3($db_path);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur de connexion à la base de données']);
    exit;
}

$action = $_GET['action'] ?? 'search';
$word = $_GET['word'] ?? '';
$lang = $_GET['lang'] ?? 'fr';  // fr, en, sw

// ========== RECHERCHER UN MOT ==========
if ($action === 'search') {
    $word = SQLite3::escapeString($word);
    
    if (empty($word)) {
        echo json_encode(['error' => 'Paramètre word requis', 'results' => []]);
        exit;
    }
    
    // Rechercher dans toutes les colonnes
    $query = "
        SELECT 
            id,
            kivira,
            french,
            english,
            swahili,
            category,
            type,
            example_kivira,
            example_translation_fr,
            example_translation_en,
            example_translation_sw
        FROM dictionary
        WHERE 
            kivira LIKE '%{$word}%' OR
            french LIKE '%{$word}%' OR
            english LIKE '%{$word}%' OR
            swahili LIKE '%{$word}%'
        LIMIT 20
    ";
    
    $result = $db->query($query);
    
    if (!$result) {
        echo json_encode(['error' => 'Erreur de requête', 'results' => []]);
        exit;
    }
    
    $results = [];
    
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        // Déterminer la traduction selon la langue
        $translation = '';
        switch ($lang) {
            case 'fr':
                $translation = $row['french'];
                $example_translation = $row['example_translation_fr'];
                break;
            case 'en':
                $translation = $row['english'];
                $example_translation = $row['example_translation_en'];
                break;
            case 'sw':
                $translation = $row['swahili'];
                $example_translation = $row['example_translation_sw'];
                break;
            default:
                $translation = $row['french'];
                $example_translation = $row['example_translation_fr'];
        }
        
        $results[] = [
            'id' => $row['id'],
            'kivira' => $row['kivira'],
            'translation' => $translation,
            'category' => $row['category'],
            'type' => $row['type'],
            // ========== EXEMPLE EN KIVIRA ==========
            'example' => [
                'kivira' => $row['example_kivira'],           // Phrase en KIVIRA
                'translation' => $example_translation          // Traduction dans langue utilisateur
            ]
        ];
    }
    
    echo json_encode([
        'results' => $results,
        'count' => count($results),
        'lang' => $lang
    ], JSON_UNESCAPED_UNICODE);
}

// ========== MOT ALÉATOIRE ==========
elseif ($action === 'random') {
    $query = "
        SELECT 
            kivira,
            french,
            english,
            swahili,
            category,
            type,
            example_kivira,
            example_translation_fr,
            example_translation_en,
            example_translation_sw
        FROM dictionary
        ORDER BY RANDOM()
        LIMIT 1
    ";
    
    $result = $db->query($query);
    $row = $result->fetchArray(SQLITE3_ASSOC);
    
    if (!$row) {
        echo json_encode(['error' => 'Aucun mot trouvé']);
        exit;
    }
    
    $translation = '';
    $example_translation = '';
    
    switch ($lang) {
        case 'fr':
            $translation = $row['french'];
            $example_translation = $row['example_translation_fr'];
            break;
        case 'en':
            $translation = $row['english'];
            $example_translation = $row['example_translation_en'];
            break;
        case 'sw':
            $translation = $row['swahili'];
            $example_translation = $row['example_translation_sw'];
            break;
    }
    
    echo json_encode([
        'kivira' => $row['kivira'],
        'translation' => $translation,
        'category' => $row['category'],
        'example' => [
            'kivira' => $row['example_kivira'],
            'translation' => $example_translation
        ]
    ], JSON_UNESCAPED_UNICODE);
}

// ========== PAR CATÉGORIE ==========
elseif ($action === 'category') {
    $category = SQLite3::escapeString($_GET['category'] ?? '');
    
    $query = "
        SELECT 
            kivira,
            french,
            english,
            swahili,
            category,
            type,
            example_kivira,
            example_translation_fr,
            example_translation_en,
            example_translation_sw
        FROM dictionary
        WHERE category = '{$category}'
        ORDER BY kivira ASC
    ";
    
    $result = $db->query($query);
    $results = [];
    
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
        $translation = '';
        $example_translation = '';
        
        switch ($lang) {
            case 'fr':
                $translation = $row['french'];
                $example_translation = $row['example_translation_fr'];
                break;
            case 'en':
                $translation = $row['english'];
                $example_translation = $row['example_translation_en'];
                break;
            case 'sw':
                $translation = $row['swahili'];
                $example_translation = $row['example_translation_sw'];
                break;
        }
        
        $results[] = [
            'kivira' => $row['kivira'],
            'translation' => $translation,
            'category' => $row['category'],
            'type' => $row['type'],
            'example' => [
                'kivira' => $row['example_kivira'],
                'translation' => $example_translation
            ]
        ];
    }
    
    echo json_encode([
        'results' => $results,
        'count' => count($results),
        'category' => $category
    ], JSON_UNESCAPED_UNICODE);
}

// ========== STATISTIQUES ==========
elseif ($action === 'stats') {
    $total_query = "SELECT COUNT(*) as total FROM dictionary";
    $total_result = $db->query($total_query);
    $total = $total_result->fetchArray(SQLITE3_ASSOC)['total'];
    
    $stats_result = $db->query("SELECT * FROM dictionary_stats");
    $by_category = [];
    
    while ($row = $stats_result->fetchArray(SQLITE3_ASSOC)) {
        $by_category[] = $row;
    }
    
    echo json_encode([
        'total' => $total,
        'by_category' => $by_category
    ]);
}

else {
    echo json_encode(['error' => 'Action non reconnue']);
}

$db->close();
?>
