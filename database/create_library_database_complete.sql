-- ========================================
-- BASE DE DONNÉES BIBLIOTHÈQUE - 4 LANGUES
-- Version complète avec Kivira
-- ========================================

-- Supprimer les tables si elles existent déjà
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS categories;

-- ========================================
-- TABLE 1 : CATÉGORIES (4 langues)
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

-- ========================================
-- INSÉRER LES 7 CATÉGORIES
-- ========================================

INSERT INTO categories (id, name_fr, name_en, name_sw, name_ki, slug, display_order) VALUES
(1, 'Romans', 'Novels', 'Riwaya', 'Ivyanditswe', 'romans', 1),
(2, 'Coutumes et Traditions', 'Customs and Traditions', 'Desturi na Mila', 'Imigenzo n''Umuco', 'coutumes-traditions', 2),
(3, 'Musiques et Chansons', 'Music and Songs', 'Muziki na Nyimbo', 'Umuziki n''Indirimbo', 'musiques-chansons', 3),
(4, 'Proverbes', 'Proverbs', 'Methali', 'Imigani', 'proverbes', 4),
(5, 'École de Kivira', 'Kivira School', 'Shule ya Kivira', 'Ishuri rya Kivira', 'ecole-kivira', 5),
(6, 'Histoire de Bavira', 'History of Bavira', 'Historia ya Bavira', 'Amateka ga Bavira', 'histoire-bavira', 6),
(7, 'Actualités', 'News', 'Habari', 'Amakuru', 'actualites', 7);

-- ========================================
-- TABLE 2 : LIVRES (4 langues)
-- ========================================

CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category_id INT NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    
    -- Titres (4 langues)
    title_fr TEXT NOT NULL,
    title_en TEXT,
    title_sw TEXT,
    title_ki TEXT,
    
    -- Auteurs (4 langues)
    author_fr VARCHAR(255),
    author_en VARCHAR(255),
    author_sw VARCHAR(255),
    author_ki VARCHAR(255),
    
    -- Extraits (4 langues)
    excerpt_fr TEXT,
    excerpt_en TEXT,
    excerpt_sw TEXT,
    excerpt_ki TEXT,
    
    -- Contenus complets (4 langues)
    content_fr LONGTEXT,
    content_en LONGTEXT,
    content_sw LONGTEXT,
    content_ki LONGTEXT,
    
    -- Métadonnées
    pages INT,
    year INT,
    cover_image VARCHAR(255),
    is_featured BOOLEAN DEFAULT 0,
    views INT DEFAULT 0,
    
    -- Dates
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Clé étrangère
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    
    -- Index pour la recherche
    INDEX idx_category (category_id),
    INDEX idx_slug (slug),
    INDEX idx_featured (is_featured),
    FULLTEXT INDEX idx_search_fr (title_fr, author_fr, excerpt_fr),
    FULLTEXT INDEX idx_search_en (title_en, author_en, excerpt_en),
    FULLTEXT INDEX idx_search_sw (title_sw, author_sw, excerpt_sw),
    FULLTEXT INDEX idx_search_ki (title_ki, author_ki, excerpt_ki)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- EXEMPLES DE LIVRES (optionnel)
-- ========================================

-- Vous pouvez ajouter des exemples ici
-- INSERT INTO books (...) VALUES (...);

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

-- Afficher la structure de la table books
DESCRIBE books;

-- ========================================
-- RÉSULTAT ATTENDU
-- ========================================
-- ✅ Table categories avec 7 catégories en 4 langues
-- ✅ Table books avec support de 4 langues
-- ✅ Index pour recherche rapide
-- ✅ Clés étrangères pour intégrité
