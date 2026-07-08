-- ==================== SCHÉMA DICTIONNAIRE CORRIGÉ ====================
-- Fichier: database/create_dictionary_v2.sql
-- CORRECTION : Exemples EN KIVIRA avec traductions

CREATE TABLE IF NOT EXISTS dictionary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    
    -- Le mot principal
    kivira TEXT UNIQUE NOT NULL,
    
    -- Traductions
    french TEXT NOT NULL,
    english TEXT NOT NULL,
    swahili TEXT NOT NULL,
    
    -- Métadonnées
    category TEXT DEFAULT 'autres',
    type TEXT DEFAULT 'nom',
    
    -- ========== EXEMPLES CORRIGÉS ==========
    -- L'exemple est TOUJOURS en Kivira (c'est ce qu'on apprend !)
    example_kivira TEXT,                    -- Exemple en KIVIRA (la phrase complète)
    
    -- Traductions de l'exemple
    example_translation_fr TEXT,            -- Traduction française de l'exemple
    example_translation_en TEXT,            -- Traduction anglaise de l'exemple
    example_translation_sw TEXT,            -- Traduction swahili de l'exemple
    
    -- Timestamps
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index pour recherches rapides
CREATE INDEX IF NOT EXISTS idx_kivira ON dictionary(kivira);
CREATE INDEX IF NOT EXISTS idx_french ON dictionary(french);
CREATE INDEX IF NOT EXISTS idx_english ON dictionary(english);
CREATE INDEX IF NOT EXISTS idx_swahili ON dictionary(swahili);
CREATE INDEX IF NOT EXISTS idx_category ON dictionary(category);

-- Trigger pour mise à jour automatique
CREATE TRIGGER IF NOT EXISTS update_dictionary_timestamp 
AFTER UPDATE ON dictionary
BEGIN
    UPDATE dictionary SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;

-- Vue pour statistiques
CREATE VIEW IF NOT EXISTS dictionary_stats AS
SELECT 
    category,
    COUNT(*) as count
FROM dictionary
GROUP BY category
ORDER BY count DESC;

-- ==================== DONNÉES D'EXEMPLE ====================

-- SALUTATIONS
INSERT INTO dictionary (
    kivira, french, english, swahili, category, type,
    example_kivira, example_translation_fr, example_translation_en, example_translation_sw
) VALUES
('Mwaramutse', 'Bonjour', 'Good morning', 'Habari za asubuhi', 'salutations', 'expression',
    'Mwaramutse! Amakuru?',
    'Bonjour ! Comment allez-vous ?',
    'Good morning! How are you?',
    'Habari za asubuhi! Habari gani?'),

('Mwiriwe', 'Bonsoir', 'Good evening', 'Habari za jioni', 'salutations', 'expression',
    'Mwiriwe! Mwiremeye mute?',
    'Bonsoir ! Avez-vous passé une bonne journée ?',
    'Good evening! Did you have a good day?',
    'Habari za jioni! Je, ulikuwa na siku nzuri?'),

('Amakuru', 'Comment ça va?', 'How are you?', 'Habari?', 'salutations', 'expression',
    'Amakuru? Ni meza!',
    'Comment ça va ? Bien !',
    'How are you? Fine!',
    'Habari? Nzuri!'),

('Murakoze', 'Merci', 'Thank you', 'Asante', 'salutations', 'expression',
    'Murakoze cyane!',
    'Merci beaucoup !',
    'Thank you very much!',
    'Asante sana!'),

('Murakaza neza', 'Bienvenue', 'Welcome', 'Karibu', 'salutations', 'expression',
    'Murakaza neza mu Rwanda!',
    'Bienvenue au Rwanda !',
    'Welcome to Rwanda!',
    'Karibu Rwanda!');

-- FAMILLE
INSERT INTO dictionary (
    kivira, french, english, swahili, category, type,
    example_kivira, example_translation_fr, example_translation_en, example_translation_sw
) VALUES
('Umuryango', 'Famille', 'Family', 'Familia', 'famille', 'nom',
    'Umuryango wanjye ni munini',
    'Ma famille est grande',
    'My family is big',
    'Familia yangu ni kubwa'),

('Mama', 'Mère', 'Mother', 'Mama', 'famille', 'nom',
    'Mama wanjye ni umwiza',
    'Ma mère est belle',
    'My mother is beautiful',
    'Mama yangu ni mzuri'),

('Papa', 'Père', 'Father', 'Baba', 'famille', 'nom',
    'Papa yanjye arakora mu kigo',
    'Mon père travaille au bureau',
    'My father works in the office',
    'Baba yangu anafanya kazi ofisini'),

('Umwana', 'Enfant', 'Child', 'Mtoto', 'famille', 'nom',
    'Umwana wanjye afite imyaka itanu',
    'Mon enfant a cinq ans',
    'My child is five years old',
    'Mtoto wangu ana miaka mitano'),

('Mushiki', 'Sœur', 'Sister', 'Dada', 'famille', 'nom',
    'Mushiki wanjye ni umunyeshuri',
    'Ma sœur est étudiante',
    'My sister is a student',
    'Dada yangu ni mwanafunzi');

-- NOURRITURE
INSERT INTO dictionary (
    kivira, french, english, swahili, category, type,
    example_kivira, example_translation_fr, example_translation_en, example_translation_sw
) VALUES
('Umugati', 'Pain', 'Bread', 'Mkate', 'nourriture', 'nom',
    'Nkunda kurya umugati mu gitondo',
    'J''aime manger du pain le matin',
    'I like to eat bread in the morning',
    'Ninapenda kula mkate asubuhi'),

('Amata', 'Lait', 'Milk', 'Maziwa', 'nourriture', 'nom',
    'Amata y''inka ni meza ku buzima',
    'Le lait de vache est bon pour la santé',
    'Cow milk is good for health',
    'Maziwa ya ng''ombe ni mazuri kwa afya'),

('Inyama', 'Viande', 'Meat', 'Nyama', 'nourriture', 'nom',
    'Inyama y''ihene ni iryoshye',
    'La viande de chèvre est délicieuse',
    'Goat meat is delicious',
    'Nyama ya mbuzi ni tamu'),

('Ibigori', 'Maïs', 'Corn', 'Mahindi', 'nourriture', 'nom',
    'Ibigori bitera cyane mu Rwanda',
    'Le maïs pousse beaucoup au Rwanda',
    'Corn grows a lot in Rwanda',
    'Mahindi yanakua sana Rwanda'),

('Icyayi', 'Thé', 'Tea', 'Chai', 'nourriture', 'nom',
    'Nkunda kunywa icyayi mu gitondo',
    'J''aime boire du thé le matin',
    'I like to drink tea in the morning',
    'Ninapenda kunywa chai asubuhi');

-- ANIMAUX
INSERT INTO dictionary (
    kivira, french, english, swahili, category, type,
    example_kivira, example_translation_fr, example_translation_en, example_translation_sw
) VALUES
('Inka', 'Vache', 'Cow', 'Ng''ombe', 'animaux', 'nom',
    'Inka ziratanga amata',
    'Les vaches donnent du lait',
    'Cows give milk',
    'Ng''ombe zinatoa maziwa'),

('Imbwa', 'Chien', 'Dog', 'Mbwa', 'animaux', 'nom',
    'Imbwa yanjye irarinda inzu',
    'Mon chien garde la maison',
    'My dog guards the house',
    'Mbwa wangu analinda nyumba'),

('Injangwe', 'Chat', 'Cat', 'Paka', 'animaux', 'nom',
    'Injangwe iraryama ku ntebe',
    'Le chat dort sur la chaise',
    'The cat sleeps on the chair',
    'Paka analala kwenye kiti'),

('Inkoko', 'Poule', 'Chicken', 'Kuku', 'animaux', 'nom',
    'Inkoko zitanga amagi',
    'Les poules donnent des œufs',
    'Chickens lay eggs',
    'Kuku wanataga mayai'),

('Ingwe', 'Léopard', 'Leopard', 'Chui', 'animaux', 'nom',
    'Ingwe ni inyamaswa ikomeye',
    'Le léopard est un animal fort',
    'The leopard is a strong animal',
    'Chui ni mnyama mkali');

-- CORPS
INSERT INTO dictionary (
    kivira, french, english, swahili, category, type,
    example_kivira, example_translation_fr, example_translation_en, example_translation_sw
) VALUES
('Umutwe', 'Tête', 'Head', 'Kichwa', 'corps', 'nom',
    'Umutwe wanjye urabababaye',
    'Ma tête me fait mal',
    'My head hurts',
    'Kichwa changu kinauma'),

('Ijisho', 'Œil', 'Eye', 'Jicho', 'corps', 'nom',
    'Amaso yanjye ni y''ubururu',
    'Mes yeux sont bleus',
    'My eyes are blue',
    'Macho yangu ni ya bluu'),

('Ukuboko', 'Bras', 'Arm', 'Mkono', 'corps', 'nom',
    'Ukuboko kwanjye kurakomeye',
    'Mon bras est fort',
    'My arm is strong',
    'Mkono wangu ni mkali'),

('Ukuguru', 'Jambe', 'Leg', 'Mguu', 'corps', 'nom',
    'Ukuguru kwanjye kurakomeye',
    'Ma jambe est forte',
    'My leg is strong',
    'Mguu wangu ni mkali'),

('Umunwa', 'Bouche', 'Mouth', 'Kinywa', 'corps', 'nom',
    'Umunwa wanjye urakomeye',
    'Ma bouche est forte',
    'My mouth is strong',
    'Kinywa changu ni kikali');

-- COULEURS
INSERT INTO dictionary (
    kivira, french, english, swahili, category, type,
    example_kivira, example_translation_fr, example_translation_en, example_translation_sw
) VALUES
('Umutuku', 'Rouge', 'Red', 'Nyekundu', 'couleurs', 'adjectif',
    'Inkweto zanjye ni umutuku',
    'Mes chaussures sont rouges',
    'My shoes are red',
    'Viatu vyangu ni nyekundu'),

('Ubururu', 'Bleu', 'Blue', 'Bluu', 'couleurs', 'adjectif',
    'Ijuru ni ubururu',
    'Le ciel est bleu',
    'The sky is blue',
    'Anga ni bluu'),

('Icyatsi', 'Vert', 'Green', 'Kijani', 'couleurs', 'adjectif',
    'Ibiti ni icyatsi',
    'Les arbres sont verts',
    'Trees are green',
    'Miti ni kijani'),

('Umuhondo', 'Jaune', 'Yellow', 'Manjano', 'couleurs', 'adjectif',
    'Izuba ni umuhondo',
    'Le soleil est jaune',
    'The sun is yellow',
    'Jua ni manjano'),

('Umukara', 'Noir', 'Black', 'Nyeusi', 'couleurs', 'adjectif',
    'Impuzu yanjye ni umukara',
    'Mon stylo est noir',
    'My pen is black',
    'Kalamu yangu ni nyeusi');

-- NOMBRES
INSERT INTO dictionary (
    kivira, french, english, swahili, category, type,
    example_kivira, example_translation_fr, example_translation_en, example_translation_sw
) VALUES
('Rimwe', 'Un', 'One', 'Moja', 'nombres', 'nombre',
    'Mfite igitabo kimwe',
    'J''ai un livre',
    'I have one book',
    'Nina kitabu kimoja'),

('Kabiri', 'Deux', 'Two', 'Mbili', 'nombres', 'nombre',
    'Mfite ibigori bibiri',
    'J''ai deux maïs',
    'I have two corns',
    'Nina mahindi mawili'),

('Gatatu', 'Trois', 'Three', 'Tatu', 'nombres', 'nombre',
    'Mfite abana batatu',
    'J''ai trois enfants',
    'I have three children',
    'Nina watoto watatu'),

('Kane', 'Quatre', 'Four', 'Nne', 'nombres', 'nombre',
    'Mfite amafaranga ane',
    'J''ai quatre francs',
    'I have four francs',
    'Nina shilingi nne'),

('Gatanu', 'Cinq', 'Five', 'Tano', 'nombres', 'nombre',
    'Mfite ibitabo bitanu',
    'J''ai cinq livres',
    'I have five books',
    'Nina vitabu vitano');
