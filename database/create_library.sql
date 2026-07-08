-- ==================== BASE DE DONNÉES BIBLIOTHÈQUE ====================
-- Fichier: database/create_library.sql
-- Architecture intelligente : Navigation à 3 niveaux

-- ========== NIVEAU 1 : CATÉGORIES ==========
CREATE TABLE IF NOT EXISTS library_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,           -- romans, coutumes, musiques, etc.
    
    -- Traductions des noms
    name_fr TEXT NOT NULL,               -- Romans
    name_en TEXT NOT NULL,               -- Novels
    name_sw TEXT NOT NULL,               -- Riwaya
    
    -- Descriptions
    description_fr TEXT,
    description_en TEXT,
    description_sw TEXT,
    
    -- Métadonnées
    icon TEXT,                           -- Emoji ou classe CSS
    display_order INTEGER DEFAULT 0,     -- Ordre d'affichage
    
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ========== NIVEAU 2 & 3 : LIVRES (Titres + Contenu) ==========
CREATE TABLE IF NOT EXISTS library_books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    
    -- Titres traduits
    title_fr TEXT NOT NULL,
    title_en TEXT NOT NULL,
    title_sw TEXT NOT NULL,
    
    -- Auteurs traduits (parfois le nom change)
    author_fr TEXT NOT NULL,
    author_en TEXT NOT NULL,
    author_sw TEXT NOT NULL,
    
    -- Extraits/descriptions
    excerpt_fr TEXT,                     -- Court résumé en français
    excerpt_en TEXT,
    excerpt_sw TEXT,
    
    -- Contenu complet (NIVEAU 3)
    content_fr TEXT,                     -- Article complet en français
    content_en TEXT,
    content_sw TEXT,
    
    -- Métadonnées
    pages INTEGER DEFAULT 0,
    year INTEGER,
    cover_image TEXT,                    -- URL ou chemin de l'image
    difficulty INTEGER DEFAULT 1,         -- 1=facile, 2=moyen, 3=difficile
    
    -- Timestamps
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (category_id) REFERENCES library_categories(id)
);

-- ========== INDEX POUR PERFORMANCES ==========
CREATE INDEX IF NOT EXISTS idx_books_category ON library_books(category_id);
CREATE INDEX IF NOT EXISTS idx_books_slug ON library_books(slug);
CREATE INDEX IF NOT EXISTS idx_category_slug ON library_categories(slug);

-- ========== TRIGGER POUR UPDATE TIMESTAMP ==========
CREATE TRIGGER IF NOT EXISTS update_library_books_timestamp 
AFTER UPDATE ON library_books
BEGIN
    UPDATE library_books SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

-- ========== VUE POUR STATISTIQUES ==========
CREATE VIEW IF NOT EXISTS library_stats AS
SELECT 
    lc.slug,
    lc.name_fr as category_name,
    COUNT(lb.id) as book_count,
    SUM(lb.pages) as total_pages
FROM library_categories lc
LEFT JOIN library_books lb ON lc.id = lb.category_id
GROUP BY lc.id, lc.slug, lc.name_fr;

-- ==================== DONNÉES D'EXEMPLE ====================

-- ========== CATÉGORIES ==========
INSERT INTO library_categories (slug, name_fr, name_en, name_sw, icon, display_order, description_fr, description_en, description_sw) VALUES
('romans', 'Romans', 'Novels', 'Riwaya', '📖', 1, 
    'Découvrez les grands classiques de la littérature mondiale',
    'Discover great classics of world literature',
    'Gundua klasiki kubwa za fasihi ya dunia'),
    
('coutumes', 'Coutumes & Traditions', 'Customs & Traditions', 'Mila na Desturi', '🏛️', 2,
    'Apprenez les traditions et coutumes rwandaises',
    'Learn about Rwandan traditions and customs',
    'Jifunze mila na desturi za Rwanda'),
    
('musiques', 'Musiques & Chansons', 'Music & Songs', 'Muziki na Nyimbo', '🎵', 3,
    'Explorez la richesse musicale du Rwanda',
    'Explore the musical richness of Rwanda',
    'Chunguza utajiri wa muziki wa Rwanda'),
    
('proverbes', 'Proverbes', 'Proverbs', 'Methali', '💭', 4,
    'Sagesse ancestrale à travers les proverbes',
    'Ancestral wisdom through proverbs',
    'Hekima ya kale kupitia methali'),
    
('poesie', 'Poésie', 'Poetry', 'Ushairi', '✍️', 5,
    'Poèmes et vers inspirants',
    'Inspiring poems and verses',
    'Mashairi na vina vya kuchochea'),
    
('histoire', 'Histoire du Rwanda', 'History of Rwanda', 'Historia ya Rwanda', '📜', 6,
    'Découvrez l''histoire fascinante du Rwanda',
    'Discover the fascinating history of Rwanda',
    'Gundua historia ya kuvutia ya Rwanda');

-- ========== LIVRES - ROMANS ==========
INSERT INTO library_books (
    category_id, slug,
    title_fr, title_en, title_sw,
    author_fr, author_en, author_sw,
    excerpt_fr, excerpt_en, excerpt_sw,
    content_fr, content_en, content_sw,
    pages, year, cover_image
) VALUES
(1, 'petit-prince',
    'Le Petit Prince', 'The Little Prince', 'Mwana Mdogo wa Mfalme',
    'Antoine de Saint-Exupéry', 'Antoine de Saint-Exupéry', 'Antoine de Saint-Exupéry',
    'Un conte philosophique et poétique sous l''apparence d''un conte pour enfants.',
    'A philosophical and poetic tale in the guise of a children''s story.',
    'Hadithi ya falsafa na ushairi katika sura ya hadithi ya watoto.',
    '<h2>Chapitre 1</h2>
    <p>Lorsque j''avais six ans j''ai vu, une fois, une magnifique image, dans un livre sur la Forêt Vierge qui s''appelait "Histoires Vécues". Ça représentait un serpent boa qui avalait un fauve.</p>
    <p>On disait dans le livre: "Les serpents boas avalent leur proie tout entière, sans la mâcher. Ensuite ils ne peuvent plus bouger et ils dorment pendant les six mois de leur digestion."</p>
    <p>J''ai alors beaucoup réfléchi sur les aventures de la jungle et, à mon tour, j''ai réussi, avec un crayon de couleur, à tracer mon premier dessin.</p>
    <h2>Chapitre 2</h2>
    <p>J''ai ainsi vécu seul, sans personne avec qui parler véritablement, jusqu''à une panne dans le désert du Sahara, il y a six ans.</p>',
    '<h2>Chapter 1</h2>
    <p>Once when I was six years old I saw a magnificent picture in a book, called True Stories from Nature, about the primeval forest. It was a picture of a boa constrictor in the act of swallowing an animal.</p>
    <p>In the book it said: "Boa constrictors swallow their prey whole, without chewing it. Then they are not able to move, and they sleep through the six months that they need for digestion."</p>
    <p>I pondered deeply, then, over the adventures of the jungle. And after some work with a colored pencil I succeeded in making my first drawing.</p>
    <h2>Chapter 2</h2>
    <p>So I lived my life alone, without anyone that I could really talk to, until I had an accident with my plane in the Desert of Sahara, six years ago.</p>',
    '<h2>Sura ya 1</h2>
    <p>Wakati nilipokuwa na miaka sita niliiona picha nzuri sana katika kitabu, kiitwacho Hadithi za Kweli kutoka Asili, kuhusu msitu wa kale. Ilikuwa picha ya nyoka wa boa akimeza mnyama.</p>
    <p>Katika kitabu kilisema: "Nyoka wa boa humeza mawindo yao yote, bila kuyatafuna. Kisha hawawezi kusogea, na hwalala kwa miezi sita inayohitajika kwa kuchacha."</p>
    <h2>Sura ya 2</h2>
    <p>Kwa hivyo niliishi maisha yangu peke yangu, bila yeyote ambaye ningeweza kuzungumza naye kweli, hadi nilipata ajali na ndege yangu katika Jangwa la Sahara, miaka sita iliyopita.</p>',
    96, 1943, 'assets/library/petit-prince.jpg'),

(1, 'les-miserables',
    'Les Misérables (Extrait)', 'Les Misérables (Extract)', 'Les Misérables (Nukuu)',
    'Victor Hugo', 'Victor Hugo', 'Victor Hugo',
    'L''histoire de Jean Valjean, un forçat échappé du bagne.',
    'The story of Jean Valjean, an escaped convict.',
    'Hadithi ya Jean Valjean, mfungwa aliyetoroka.',
    '<h2>Première partie - Livre Premier</h2>
    <h3>Un juste</h3>
    <p>En 1815, M. Charles-François-Bienvenu Myriel était évêque de Digne. C''était un vieillard d''environ soixante-quinze ans; il occupait le siège de Digne depuis 1806.</p>
    <p>Quoique ce détail ne touche en aucune manière au fond même de ce que nous avons à raconter, il n''est peut-être pas inutile, ne fût-ce que pour être exact en tout, d''indiquer ici les bruits et les propos qui avaient couru sur son compte au moment où il était arrivé dans le diocèse.</p>',
    '<h2>First Part - Book One</h2>
    <h3>An Upright Man</h3>
    <p>In 1815, Monsieur Charles-François-Bienvenu Myriel was Bishop of Digne. He was an old man of about seventy-five years of age; he had occupied the see of Digne since 1806.</p>
    <p>Although this detail has no connection whatever with the real substance of what we are about to relate, it will not be superfluous, if merely for the sake of exactness in all points, to mention here the various rumors and remarks which had been in circulation about him.</p>',
    '<h2>Sehemu ya Kwanza - Kitabu cha Kwanza</h2>
    <h3>Mtu Mwadilifu</h3>
    <p>Mwaka 1815, Bwana Charles-François-Bienvenu Myriel alikuwa Askofu wa Digne. Alikuwa mzee wa karibu miaka sabini na mitano; alikuwa ameshika kiti cha Digne tangu 1806.</p>',
    200, 1862, 'assets/library/miserables.jpg');

-- ========== LIVRES - COUTUMES ==========
INSERT INTO library_books (
    category_id, slug,
    title_fr, title_en, title_sw,
    author_fr, author_en, author_sw,
    excerpt_fr, excerpt_en, excerpt_sw,
    content_fr, content_en, content_sw,
    pages, year
) VALUES
(2, 'traditions-rwandaises',
    'Les Traditions Rwandaises', 'Rwandan Traditions', 'Mila za Rwanda',
    'Jean-Baptiste Nkulikiyinka', 'Jean-Baptiste Nkulikiyinka', 'Jean-Baptiste Nkulikiyinka',
    'Découvrez les traditions ancestrales du Rwanda.',
    'Discover the ancestral traditions of Rwanda.',
    'Gundua mila za kale za Rwanda.',
    '<h2>Introduction</h2>
    <p>Les traditions du Rwanda sont riches et ancestrales. Elles reflètent l''histoire millénaire d''un peuple uni par sa culture et ses valeurs.</p>
    <h2>La danse Intore</h2>
    <p>La danse Intore est l''une des traditions les plus célèbres du Rwanda. Elle était autrefois pratiquée par les guerriers de la cour royale.</p>
    <p>Aujourd''hui, cette danse spectaculaire continue d''être enseignée et présentée lors des cérémonies importantes.</p>
    <h2>L''Umuganura</h2>
    <p>L''Umuganura était une fête traditionnelle célébrant les premières récoltes. Elle marquait le début de la nouvelle saison agricole.</p>',
    '<h2>Introduction</h2>
    <p>The traditions of Rwanda are rich and ancestral. They reflect the millennial history of a people united by their culture and values.</p>
    <h2>The Intore Dance</h2>
    <p>The Intore dance is one of the most famous traditions of Rwanda. It was once practiced by the warriors of the royal court.</p>
    <p>Today, this spectacular dance continues to be taught and presented during important ceremonies.</p>
    <h2>Umuganura</h2>
    <p>Umuganura was a traditional festival celebrating the first harvests. It marked the beginning of the new agricultural season.</p>',
    '<h2>Utangulizi</h2>
    <p>Mila za Rwanda ni tajiri na za kale. Zinaonyesha historia ya miaka elfu ya watu waliounganishwa na tamaduni na maadili yao.</p>
    <h2>Ngoma ya Intore</h2>
    <p>Ngoma ya Intore ni moja ya mila maarufu zaidi za Rwanda. Ilichezwa na mashujaa wa mahakama ya kifalme.</p>',
    150, 2020);

-- ========== LIVRES - MUSIQUES ==========
INSERT INTO library_books (
    category_id, slug,
    title_fr, title_en, title_sw,
    author_fr, author_en, author_sw,
    excerpt_fr, excerpt_en, excerpt_sw,
    content_fr, content_en, content_sw,
    pages, year
) VALUES
(3, 'chansons-traditionnelles',
    'Chansons Traditionnelles Rwandaises', 'Traditional Rwandan Songs', 'Nyimbo za Jadi za Rwanda',
    'Collectif', 'Collective', 'Mkusanyiko',
    'Les chansons qui racontent l''histoire du Rwanda.',
    'Songs that tell the history of Rwanda.',
    'Nyimbo zinazosimulia historia ya Rwanda.',
    '<h2>Indirimbo z''Igihugu - Chants du Pays</h2>
    <p>Les chansons traditionnelles rwandaises sont transmises de génération en génération. Elles racontent l''histoire, les légendes et les valeurs du peuple.</p>
    <h3>Rwanda Rwacu</h3>
    <p>L''hymne national du Rwanda, symbole d''unité et de fierté nationale.</p>
    <h3>Les chants de mariage</h3>
    <p>Lors des mariages traditionnels, des chants spécifiques accompagnent chaque étape de la cérémonie.</p>',
    '<h2>Indirimbo z''Igihugu - Songs of the Country</h2>
    <p>Traditional Rwandan songs are passed down from generation to generation. They tell the history, legends and values of the people.</p>
    <h3>Rwanda Rwacu</h3>
    <p>The national anthem of Rwanda, symbol of unity and national pride.</p>',
    '<h2>Indirimbo z''Igihugu - Nyimbo za Nchi</h2>
    <p>Nyimbo za jadi za Rwanda zinapitishwa kutoka kizazi hadi kizazi. Zinasimulia historia, hadithi na maadili ya watu.</p>',
    80, 2019);

-- ========== LIVRES - PROVERBES ==========
INSERT INTO library_books (
    category_id, slug,
    title_fr, title_en, title_sw,
    author_fr, author_en, author_sw,
    excerpt_fr, excerpt_en, excerpt_sw,
    content_fr, content_en, content_sw,
    pages, year
) VALUES
(4, 'proverbes-rwandais',
    'Proverbes Rwandais', 'Rwandan Proverbs', 'Methali za Rwanda',
    'Tradition Orale', 'Oral Tradition', 'Mapokeo ya Mdomo',
    'Sagesse ancestrale à travers les proverbes.',
    'Ancestral wisdom through proverbs.',
    'Hekima za kale kupitia methali.',
    '<h2>Sagesse Ancestrale</h2>
    <p>Les proverbes rwandais, appelés "imigani", constituent un trésor de sagesse accumulée au fil des siècles.</p>
    <h3>Exemples de proverbes</h3>
    <p><strong>"Umwana ni umwe"</strong> - Un enfant appartient à toute la communauté.</p>
    <p>Ce proverbe souligne l''importance de l''éducation collective et de la responsabilité communautaire envers les enfants.</p>
    <p><strong>"Urugendo rugira urwo rutaha"</strong> - Tout voyage a un retour.</p>
    <p>Cela signifie que nos actions ont des conséquences et que nous devons toujours penser aux répercussions de nos choix.</p>
    <p><strong>"Ubwenge bw''umwe bugira ubwo buruta"</strong> - La sagesse d''une personne peut surpasser celle de plusieurs.</p>',
    '<h2>Ancestral Wisdom</h2>
    <p>Rwandan proverbs, called "imigani", constitute a treasure of wisdom accumulated over the centuries.</p>
    <h3>Examples of proverbs</h3>
    <p><strong>"Umwana ni umwe"</strong> - A child belongs to the whole community.</p>
    <p>This proverb emphasizes the importance of collective education and community responsibility towards children.</p>',
    '<h2>Hekima za Kale</h2>
    <p>Methali za Rwanda, zinazitwa "imigani", ni hazina ya hekima iliyokusanywa kwa karne nyingi.</p>',
    120, 2018);
