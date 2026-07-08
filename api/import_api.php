<?php
/**
 * API IMPORT MASSIF - Dictionnaire
 * Importe des mots depuis CSV ou Excel
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$DB_PATH = '../database/dictionary.db';

// Connexion SQLite
try {
    $db = new PDO('sqlite:' . $DB_PATH);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Connexion impossible: ' . $e->getMessage()]);
    exit;
}

$action = $_GET['action'] ?? '';

// ============================================
// ACTION : IMPORT CSV
// ============================================
if ($action === 'import_csv') {
    if (!isset($_FILES['file'])) {
        echo json_encode(['success' => false, 'error' => 'Aucun fichier uploadé']);
        exit;
    }
    
    $file = $_FILES['file'];
    
    if ($file['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(['success' => false, 'error' => 'Erreur lors de l\'upload']);
        exit;
    }
    
    $imported = 0;
    $errors = 0;
    $error_details = [];
    
    try {
        $handle = fopen($file['tmp_name'], 'r');
        
        if (!$handle) {
            echo json_encode(['success' => false, 'error' => 'Impossible de lire le fichier']);
            exit;
        }
        
        // Lire l'en-tête
        $headers = fgetcsv($handle);
        
        if (!$headers) {
            echo json_encode(['success' => false, 'error' => 'Fichier vide ou format invalide']);
            exit;
        }
        
        // Vérifier les colonnes requises
        $required = ['kivira', 'french', 'english', 'swahili'];
        foreach ($required as $col) {
            if (!in_array($col, $headers)) {
                echo json_encode(['success' => false, 'error' => "Colonne '$col' manquante"]);
                exit;
            }
        }
        
        // Mapper les indices
        $col_map = array_flip($headers);
        
        // Préparer la requête
        $stmt = $db->prepare("
            INSERT INTO dictionary (
                kivira, french, english, swahili,
                category, type,
                example_kivira, example_translation_fr, example_translation_en, example_translation_sw,
                created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
        ");
        
        $line_num = 1;
        
        while (($data = fgetcsv($handle)) !== false) {
            $line_num++;
            
            // Extraire les valeurs
            $kivira = isset($col_map['kivira']) ? trim($data[$col_map['kivira']] ?? '') : '';
            $french = isset($col_map['french']) ? trim($data[$col_map['french']] ?? '') : '';
            $english = isset($col_map['english']) ? trim($data[$col_map['english']] ?? '') : '';
            $swahili = isset($col_map['swahili']) ? trim($data[$col_map['swahili']] ?? '') : '';
            
            // Vérifier les champs requis
            if (empty($kivira) || empty($french) || empty($english) || empty($swahili)) {
                $errors++;
                $error_details[] = "Ligne $line_num: Champs requis manquants";
                continue;
            }
            
            $category = isset($col_map['category']) ? trim($data[$col_map['category']] ?? '') : '';
            $type = isset($col_map['type']) ? trim($data[$col_map['type']] ?? '') : '';
            $example_kivira = isset($col_map['example_kivira']) ? trim($data[$col_map['example_kivira']] ?? '') : '';
            $example_fr = isset($col_map['example_translation_fr']) ? trim($data[$col_map['example_translation_fr']] ?? '') : '';
            $example_en = isset($col_map['example_translation_en']) ? trim($data[$col_map['example_translation_en']] ?? '') : '';
            $example_sw = isset($col_map['example_translation_sw']) ? trim($data[$col_map['example_translation_sw']] ?? '') : '';
            
            try {
                $stmt->execute([
                    $kivira,
                    $french,
                    $english,
                    $swahili,
                    $category ?: null,
                    $type ?: null,
                    $example_kivira ?: null,
                    $example_fr ?: null,
                    $example_en ?: null,
                    $example_sw ?: null
                ]);
                
                $imported++;
                
            } catch (PDOException $e) {
                $errors++;
                $error_details[] = "Ligne $line_num ($kivira): " . $e->getMessage();
            }
        }
        
        fclose($handle);
        
        echo json_encode([
            'success' => true,
            'imported' => $imported,
            'errors' => $errors,
            'total' => $imported + $errors,
            'error_details' => $error_details
        ]);
        
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
    
    exit;
}

// ============================================
// ACTION : TÉLÉCHARGER TEMPLATE
// ============================================
if ($action === 'download_template') {
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="template_import_kivira.csv"');
    
    $template = "kivira,french,english,swahili,category,type,example_kivira,example_translation_fr,example_translation_en,example_translation_sw\n";
    $template .= "Mwaramutse,Bonjour,Good morning,Habari za asubuhi,salutations,expression,Mwaramutse! Amakuru?,Bonjour ! Comment allez-vous ?,Good morning! How are you?,Habari za asubuhi! Habari gani?\n";
    $template .= "Murakoze,Merci,Thank you,Asante,salutations,expression,Murakoze cyane!,Merci beaucoup !,Thank you very much!,Asante sana!\n";
    
    echo $template;
    exit;
}

echo json_encode(['success' => false, 'error' => 'Action non reconnue']);
?>
