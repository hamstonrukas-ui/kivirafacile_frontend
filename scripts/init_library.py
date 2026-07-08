#!/usr/bin/env python3
# ==================== INITIALISATION BASE BIBLIOTHÈQUE ====================
# Fichier: scripts/init_library.py

import sqlite3
import os
import json

# ========== CONFIGURATION ==========
DB_PATH = '../database/library.db'
SQL_SCHEMA_PATH = '../database/create_library.sql'

def create_database():
    """Créer la base de données bibliothèque"""
    
    print("=" * 60)
    print("🚀 INITIALISATION BASE BIBLIOTHÈQUE")
    print("=" * 60)
    
    # Créer le dossier database s'il n'existe pas
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    
    # Supprimer l'ancienne base si elle existe
    if os.path.exists(DB_PATH):
        print("⚠️  Base existante trouvée, suppression...")
        os.remove(DB_PATH)
    
    # Connexion
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print("✅ Base de données créée")
    
    # Lire et exécuter le schéma
    if not os.path.exists(SQL_SCHEMA_PATH):
        print(f"❌ Fichier SQL introuvable: {SQL_SCHEMA_PATH}")
        return False
    
    print("📄 Lecture du schéma SQL...")
    with open(SQL_SCHEMA_PATH, 'r', encoding='utf-8') as f:
        sql_script = f.read()
    
    print("⚙️  Exécution du schéma...")
    cursor.executescript(sql_script)
    
    conn.commit()
    
    # Vérifier les données
    cursor.execute("SELECT COUNT(*) FROM library_categories")
    category_count = cursor.fetchone()[0]
    
    cursor.execute("SELECT COUNT(*) FROM library_books")
    book_count = cursor.fetchone()[0]
    
    print(f"\n✅ {category_count} catégories créées")
    print(f"✅ {book_count} livres importés")
    
    # Statistiques par catégorie
    cursor.execute("""
        SELECT 
            c.name_fr as category,
            COUNT(b.id) as book_count
        FROM library_categories c
        LEFT JOIN library_books b ON c.id = b.category_id
        GROUP BY c.id, c.name_fr
        ORDER BY c.display_order
    """)
    
    stats = cursor.fetchall()
    
    print("\n📊 Statistiques par catégorie:")
    for category, count in stats:
        print(f"   - {category}: {count} livre(s)")
    
    conn.close()
    
    print(f"\n🎉 Base bibliothèque initialisée avec succès!")
    print(f"📍 Chemin: {os.path.abspath(DB_PATH)}")
    
    return True

def add_custom_book(book_data):
    """Ajouter un livre personnalisé"""
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print(f"\n➕ Ajout du livre: {book_data['title_fr']}")
    
    try:
        cursor.execute("""
            INSERT INTO library_books (
                category_id, slug,
                title_fr, title_en, title_sw,
                author_fr, author_en, author_sw,
                excerpt_fr, excerpt_en, excerpt_sw,
                content_fr, content_en, content_sw,
                pages, year
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            book_data['category_id'],
            book_data['slug'],
            book_data['title_fr'],
            book_data['title_en'],
            book_data['title_sw'],
            book_data['author_fr'],
            book_data['author_en'],
            book_data['author_sw'],
            book_data.get('excerpt_fr', ''),
            book_data.get('excerpt_en', ''),
            book_data.get('excerpt_sw', ''),
            book_data.get('content_fr', ''),
            book_data.get('content_en', ''),
            book_data.get('content_sw', ''),
            book_data.get('pages', 0),
            book_data.get('year', 2024)
        ))
        
        conn.commit()
        print(f"   ✅ Livre ajouté avec succès")
        
    except sqlite3.IntegrityError as e:
        print(f"   ⚠️  Erreur: {e}")
    
    conn.close()

def export_to_json():
    """Exporter la base en JSON pour backup"""
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Exporter les catégories
    cursor.execute("SELECT * FROM library_categories")
    categories = []
    columns = [desc[0] for desc in cursor.description]
    for row in cursor.fetchall():
        categories.append(dict(zip(columns, row)))
    
    # Exporter les livres
    cursor.execute("SELECT * FROM library_books")
    books = []
    columns = [desc[0] for desc in cursor.description]
    for row in cursor.fetchall():
        books.append(dict(zip(columns, row)))
    
    # Sauvegarder
    backup_data = {
        'categories': categories,
        'books': books
    }
    
    output_path = '../backup/library_backup.json'
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(backup_data, f, ensure_ascii=False, indent=2)
    
    print(f"\n💾 Backup JSON créé: {output_path}")
    
    conn.close()

def test_api_queries():
    """Tester quelques requêtes pour vérifier la structure"""
    
    print("\n🧪 Test des requêtes...")
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Test 1: Catégories en français
    cursor.execute("""
        SELECT slug, name_fr, book_count 
        FROM (
            SELECT 
                c.slug,
                c.name_fr,
                COUNT(b.id) as book_count
            FROM library_categories c
            LEFT JOIN library_books b ON c.id = b.category_id
            GROUP BY c.id
        )
    """)
    
    print("\n✅ Test 1 - Catégories:")
    for row in cursor.fetchall():
        print(f"   {row[0]}: {row[1]} ({row[2]} livres)")
    
    # Test 2: Livres de la catégorie romans
    cursor.execute("""
        SELECT title_fr, author_fr 
        FROM library_books 
        WHERE category_id = 1
    """)
    
    print("\n✅ Test 2 - Livres (Romans):")
    for row in cursor.fetchall():
        print(f"   {row[0]} - {row[1]}")
    
    conn.close()

# ========== EXEMPLE DE LIVRE PERSONNALISÉ ==========
CUSTOM_BOOK_EXAMPLE = {
    'category_id': 1,  # Romans
    'slug': 'example-book',
    'title_fr': 'Livre Exemple',
    'title_en': 'Example Book',
    'title_sw': 'Kitabu cha Mfano',
    'author_fr': 'Auteur Exemple',
    'author_en': 'Example Author',
    'author_sw': 'Mwandishi wa Mfano',
    'excerpt_fr': 'Ceci est un exemple de livre.',
    'excerpt_en': 'This is an example book.',
    'excerpt_sw': 'Hiki ni kitabu cha mfano.',
    'content_fr': '<h2>Chapitre 1</h2><p>Contenu en français...</p>',
    'content_en': '<h2>Chapter 1</h2><p>Content in English...</p>',
    'content_sw': '<h2>Sura ya 1</h2><p>Maudhui kwa Kiswahili...</p>',
    'pages': 100,
    'year': 2024
}

# ========== EXÉCUTION ==========
if __name__ == '__main__':
    success = create_database()
    
    if success:
        # Tests
        test_api_queries()
        
        # Backup
        export_to_json()
        
        # Ajouter un livre personnalisé (optionnel)
        # add_custom_book(CUSTOM_BOOK_EXAMPLE)
        
        print("\n" + "=" * 60)
        print("✅ TERMINÉ!")
        print("=" * 60)
    else:
        print("\n❌ ERREUR lors de l'initialisation")
