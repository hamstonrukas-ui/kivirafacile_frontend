<?php
// ==================== SCRIPT DE DIAGNOSTIC ====================
// Fichier: api/test_dictionary.php
// Test complet du système dictionnaire

header('Content-Type: text/html; charset=utf-8');

echo "<h1>🔧 Diagnostic Dictionnaire KiviraFacile</h1>";
echo "<style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
    .test { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #ddd; }
    .success { border-color: #10b981; }
    .error { border-color: #ef4444; }
    .warning { border-color: #f59e0b; }
    h2 { color: #333; }
    pre { background: #f9f9f9; padding: 10px; overflow-x: auto; border-radius: 4px; }
    .ok { color: #10b981; font-weight: bold; }
    .fail { color: #ef4444; font-weight: bold; }
    .info { color: #0066cc; }
</style>";

// ========== TEST 1 : PHP SQLite Extension ==========
echo "<div class='test " . (extension_loaded('sqlite3') ? 'success' : 'error') . "'>";
echo "<h2>Test 1 : Extension PHP SQLite</h2>";

if (extension_loaded('sqlite3')) {
    echo "<p class='ok'>✅ Extension SQLite3 chargée</p>";
    echo "<p>Version SQLite : " . SQLite3::version()['versionString'] . "</p>";
} else {
    echo "<p class='fail'>❌ Extension SQLite3 NON chargée</p>";
    echo "<p><strong>Solution :</strong> Installer l'extension PHP SQLite3</p>";
    echo "<pre>sudo apt-get install php-sqlite3
sudo service apache2 restart</pre>";
}
echo "</div>";

// ========== TEST 2 : Fichier de base de données ==========
$db_path = __DIR__ . '/../database/dictionary.db';

echo "<div class='test " . (file_exists($db_path) ? 'success' : 'error') . "'>";
echo "<h2>Test 2 : Fichier Base de Données</h2>";
echo "<p class='info'>Chemin : <code>$db_path</code></p>";

if (file_exists($db_path)) {
    echo "<p class='ok'>✅ Fichier dictionary.db existe</p>";
    echo "<p>Taille : " . number_format(filesize($db_path) / 1024, 2) . " KB</p>";
    echo "<p>Permissions : " . substr(sprintf('%o', fileperms($db_path)), -4) . "</p>";
    
    // Vérifier si le fichier est accessible en lecture
    if (is_readable($db_path)) {
        echo "<p class='ok'>✅ Fichier lisible</p>";
    } else {
        echo "<p class='fail'>❌ Fichier NON lisible</p>";
        echo "<p><strong>Solution :</strong> Donner les droits de lecture</p>";
        echo "<pre>chmod 644 database/dictionary.db</pre>";
    }
} else {
    echo "<p class='fail'>❌ Fichier dictionary.db INTROUVABLE</p>";
    echo "<p><strong>Solution :</strong> Exécuter le script d'initialisation</p>";
    echo "<pre>cd scripts/
python3 init_database.py</pre>";
}
echo "</div>";

// ========== TEST 3 : Connexion à la base ==========
echo "<div class='test'>";
echo "<h2>Test 3 : Connexion à la Base</h2>";

$db = null;
$connection_success = false;

if (file_exists($db_path)) {
    try {
        $db = new SQLite3($db_path);
        echo "<p class='ok'>✅ Connexion réussie</p>";
        $connection_success = true;
    } catch (Exception $e) {
        echo "<p class='fail'>❌ Erreur de connexion : " . $e->getMessage() . "</p>";
    }
} else {
    echo "<p class='fail'>❌ Impossible de se connecter (fichier inexistant)</p>";
}
echo "</div>";

// ========== TEST 4 : Structure de la base ==========
if ($connection_success && $db) {
    echo "<div class='test success'>";
    echo "<h2>Test 4 : Structure de la Base</h2>";
    
    // Vérifier table dictionary
    $result = $db->query("SELECT name FROM sqlite_master WHERE type='table' AND name='dictionary'");
    $table_exists = $result->fetchArray() !== false;
    
    if ($table_exists) {
        echo "<p class='ok'>✅ Table 'dictionary' existe</p>";
        
        // Compter les mots
        $count_result = $db->query("SELECT COUNT(*) as count FROM dictionary");
        $count = $count_result->fetchArray(SQLITE3_ASSOC)['count'];
        
        echo "<p class='ok'>✅ $count mots dans la base</p>";
        
        // Afficher colonnes
        $pragma = $db->query("PRAGMA table_info(dictionary)");
        echo "<p><strong>Colonnes :</strong></p><ul>";
        while ($col = $pragma->fetchArray(SQLITE3_ASSOC)) {
            echo "<li>{$col['name']} ({$col['type']})</li>";
        }
        echo "</ul>";
        
        // Afficher quelques exemples
        echo "<p><strong>Exemples de mots :</strong></p>";
        $examples = $db->query("SELECT kivira, french, english, swahili FROM dictionary LIMIT 5");
        echo "<table border='1' cellpadding='5' style='border-collapse: collapse; width: 100%;'>";
        echo "<tr><th>Kivira</th><th>Français</th><th>English</th><th>Swahili</th></tr>";
        while ($row = $examples->fetchArray(SQLITE3_ASSOC)) {
            echo "<tr>";
            echo "<td>{$row['kivira']}</td>";
            echo "<td>{$row['french']}</td>";
            echo "<td>{$row['english']}</td>";
            echo "<td>{$row['swahili']}</td>";
            echo "</tr>";
        }
        echo "</table>";
        
    } else {
        echo "<p class='fail'>❌ Table 'dictionary' INEXISTANTE</p>";
        echo "<p><strong>Solution :</strong> Réinitialiser la base</p>";
    }
    echo "</div>";
}

// ========== TEST 5 : Test API ==========
echo "<div class='test'>";
echo "<h2>Test 5 : Test de l'API</h2>";

$api_url = 'http://' . $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) . '/dictionary.php?action=search&word=Mwaramutse&lang=fr';

echo "<p class='info'>URL API : <a href='$api_url' target='_blank'>$api_url</a></p>";

// Tester l'API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 5);
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code == 200 && $response) {
    echo "<p class='ok'>✅ API répond (code $http_code)</p>";
    
    $data = json_decode($response, true);
    
    if ($data && isset($data['results'])) {
        echo "<p class='ok'>✅ Format JSON valide</p>";
        echo "<p>Résultats : " . count($data['results']) . "</p>";
        
        if (count($data['results']) > 0) {
            echo "<p><strong>Premier résultat :</strong></p>";
            echo "<pre>" . json_encode($data['results'][0], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . "</pre>";
        }
    } else {
        echo "<p class='fail'>❌ Réponse invalide</p>";
        echo "<pre>" . htmlspecialchars($response) . "</pre>";
    }
} else {
    echo "<p class='fail'>❌ API ne répond pas (code $http_code)</p>";
    
    if (function_exists('curl_error')) {
        echo "<p>Erreur : " . curl_error($ch) . "</p>";
    }
}
echo "</div>";

// ========== TEST 6 : Configuration Serveur ==========
echo "<div class='test'>";
echo "<h2>Test 6 : Configuration Serveur</h2>";

echo "<table border='1' cellpadding='5' style='border-collapse: collapse;'>";
echo "<tr><th>Paramètre</th><th>Valeur</th></tr>";
echo "<tr><td>PHP Version</td><td>" . phpversion() . "</td></tr>";
echo "<tr><td>Server Software</td><td>" . ($_SERVER['SERVER_SOFTWARE'] ?? 'N/A') . "</td></tr>";
echo "<tr><td>Document Root</td><td>" . ($_SERVER['DOCUMENT_ROOT'] ?? 'N/A') . "</td></tr>";
echo "<tr><td>Script Filename</td><td>" . __FILE__ . "</td></tr>";
echo "<tr><td>Database Path</td><td>$db_path</td></tr>";
echo "</table>";

echo "</div>";

// ========== RÉSUMÉ ==========
echo "<div class='test'>";
echo "<h2>📊 Résumé</h2>";

$issues = [];
if (!extension_loaded('sqlite3')) $issues[] = "Extension SQLite3 manquante";
if (!file_exists($db_path)) $issues[] = "Fichier dictionary.db manquant";
if (file_exists($db_path) && !is_readable($db_path)) $issues[] = "Permissions fichier incorrectes";

if (empty($issues)) {
    echo "<p class='ok' style='font-size: 18px;'>🎉 TOUT FONCTIONNE CORRECTEMENT !</p>";
    echo "<p>Votre dictionnaire est prêt à l'emploi.</p>";
} else {
    echo "<p class='fail' style='font-size: 18px;'>⚠️ PROBLÈMES DÉTECTÉS :</p>";
    echo "<ul>";
    foreach ($issues as $issue) {
        echo "<li>$issue</li>";
    }
    echo "</ul>";
    
    echo "<h3>Actions à faire :</h3>";
    if (!extension_loaded('sqlite3')) {
        echo "<p>1. Installer extension SQLite3 pour PHP</p>";
    }
    if (!file_exists($db_path)) {
        echo "<p>2. Exécuter le script d'initialisation : <code>python3 scripts/init_database.py</code></p>";
    }
    if (file_exists($db_path) && !is_readable($db_path)) {
        echo "<p>3. Corriger les permissions : <code>chmod 644 database/dictionary.db</code></p>";
    }
}
echo "</div>";

// Fermer la connexion
if ($db) {
    $db->close();
}
?>
