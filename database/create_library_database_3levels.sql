-- ========================================
-- BASE DE DONNÉES BIBLIOTHÈQUE - 3 NIVEAUX
-- Structure : Categories → Titles → Articles
-- Support de 4 langues : FR, EN, SW, KI
-- ========================================

-- Supprimer les tables si elles existent
DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS titles;
DROP TABLE IF EXISTS categories;

-- ========================================
-- NIVEAU 1 : CATÉGORIES
-- ========================================

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name_fr VARCHAR(255) NOT NULL,
    name_en VARCHAR(255) NOT NULL,
    name_sw VARCHAR(255) NOT NULL,
    name_ki VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insérer les 7 catégories
INSERT INTO categories (id, name_fr, name_en, name_sw, name_ki, slug, display_order) VALUES
(1, 'Romans', 'Novels', 'Riwaya', 'Ivyanditswe', 'romans', 1),
(2, 'Coutumes et Traditions', 'Customs and Traditions', 'Desturi na Mila', 'Imigenzo n\'Umuco', 'coutumes-traditions', 2),
(3, 'Musiques et Chansons', 'Music and Songs', 'Muziki na Nyimbo', 'Umuziki n\'Indirimbo', 'musiques-chansons', 3),
(4, 'Proverbes', 'Proverbs', 'Methali', 'Imigani', 'proverbes', 4),
(5, 'École de Kivira', 'Kivira School', 'Shule ya Kivira', 'Ishuri rya Kivira', 'ecole-kivira', 5),
(6, 'Histoire de Bavira', 'History of Bavira', 'Historia ya Bavira', 'Amateka ga Bavira', 'histoire-bavira', 6),
(7, 'Actualités', 'News', 'Habari', 'Amakuru', 'actualites', 7);

-- ========================================
-- NIVEAU 2 : TITRES (Livres)
-- ========================================

CREATE TABLE titles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL,
    title_fr TEXT NOT NULL,
    title_en TEXT,
    title_sw TEXT,
    title_ki TEXT,
    slug VARCHAR(255) UNIQUE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    INDEX idx_category (category_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- NIVEAU 3 : ARTICLES (Contenus)
-- ========================================

CREATE TABLE articles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title_id INT NOT NULL,
    content_fr LONGTEXT,
    content_en LONGTEXT,
    content_sw LONGTEXT,
    content_ki LONGTEXT,
    image VARCHAR(500),
    display_order INT DEFAULT 0,
    is_featured BOOLEAN DEFAULT 0,
    views INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (title_id) REFERENCES titles(id) ON DELETE CASCADE,
    INDEX idx_title (title_id),
    INDEX idx_featured (is_featured),
    FULLTEXT INDEX idx_search_fr (content_fr),
    FULLTEXT INDEX idx_search_en (content_en),
    FULLTEXT INDEX idx_search_sw (content_sw),
    FULLTEXT INDEX idx_search_ki (content_ki)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- VÉRIFICATIONS
-- ========================================

-- Afficher les catégories créées
SELECT 
    id,
    name_fr AS 'Français',
    name_en AS 'English',
    name_sw AS 'Swahili',
    name_ki AS 'Kivira'
FROM categories
ORDER BY display_order;

-- Afficher la structure
SHOW TABLES;

-- Vérifier les clés étrangères
SELECT 
    TABLE_NAME,
    COLUMN_NAME,
    CONSTRAINT_NAME,
    REFERENCED_TABLE_NAME,
    REFERENCED_COLUMN_NAME
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_SCHEMA = DATABASE()
    AND REFERENCED_TABLE_NAME IS NOT NULL;

-- ========================================
-- RÉSULTAT ATTENDU
-- ========================================
-- ✅ 3 tables créées : categories, titles, articles
-- ✅ 7 catégories en 4 langues
-- ✅ Structure hiérarchique avec clés étrangères
-- ✅ Index pour recherche rapide
