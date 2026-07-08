#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de création de la base de données Bibliothèque
Structure à 3 niveaux : Catégories → Titres → Articles
Support de 4 langues : FR, EN, SW, KI

Usage : python3 scripts/create_library.py
"""

import mysql.connector
from mysql.connector import Error
import sys

# ============================================
# CONFIGURATION
# ============================================
DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',      # ← MODIFIER ICI
    'password': '',  # ← MODIFIER ICI
    'database': 'library'   # ← MODIFIER ICI
}

# ============================================
# CATÉGORIES (7 catégories en 4 langues)
# ============================================
CATEGORIES = [
    {
        'id': 1,
        'name_fr': 'Romans',
        'name_en': 'Novels',
        'name_sw': 'Riwaya',
        'name_ki': 'Ivyanditswe',
        'slug': 'romans'
    },
    {
        'id': 2,
        'name_fr': 'Coutumes et Traditions',
        'name_en': 'Customs and Traditions',
        'name_sw': 'Desturi na Mila',
        'name_ki': 'Imigenzo n\'Umuco',
        'slug': 'coutumes-traditions'
    },
    {
        'id': 3,
        'name_fr': 'Musiques et Chansons',
        'name_en': 'Music and Songs',
        'name_sw': 'Muziki na Nyimbo',
        'name_ki': 'Umuziki n\'Indirimbo',
        'slug': 'musiques-chansons'
    },
    {
        'id': 4,
        'name_fr': 'Proverbes',
        'name_en': 'Proverbs',
        'name_sw': 'Methali',
        'name_ki': 'Imigani',
        'slug': 'proverbes'
    },
    {
        'id': 5,
        'name_fr': 'École de Kivira',
        'name_en': 'Kivira School',
        'name_sw': 'Shule ya Kivira',
        'name_ki': 'Ishuri rya Kivira',
        'slug': 'ecole-kivira'
    },
    {
        'id': 6,
        'name_fr': 'Histoire de Bavira',
        'name_en': 'History of Bavira',
        'name_sw': 'Historia ya Bavira',
        'name_ki': 'Amateka ga Bavira',
        'slug': 'histoire-bavira'
    },
    {
        'id': 7,
        'name_fr': 'Actualités',
        'name_en': 'News',
        'name_sw': 'Habari',
        'name_ki': 'Amakuru',
        'slug': 'actualites'
    }
]

# ============================================
# FONCTIONS
# ============================================

def create_connection():
    """Créer une connexion à la base de données"""
    try:
        connection = mysql.connector.connect(**DB_CONFIG)
        if connection.is_connected():
            print(f"✅ Connecté à MySQL Server version {connection.get_server_info()}")
            print(f"✅ Base de données : {DB_CONFIG['database']}")
            return connection
    except Error as e:
        print(f"❌ Erreur de connexion : {e}")
        sys.exit(1)

def drop_tables(cursor):
    """Supprimer les tables existantes"""
    print("\n🗑️  Suppression des tables existantes...")
    
    tables = ['articles', 'titles', 'categories']
    
    for table in tables:
        try:
            cursor.execute(f"DROP TABLE IF EXISTS {table}")
            print(f"   ✓ Table {table} supprimée")
        except Error as e:
            print(f"   ⚠️  Erreur lors de la suppression de {table}: {e}")

def create_categories_table(cursor):
    """Créer la table des catégories (niveau 1)"""
    print("\n📁 Création de la table CATEGORIES...")
    
    sql = """
    CREATE TABLE categories (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name_fr VARCHAR(255) NOT NULL,
        name_en VARCHAR(255) NOT NULL,
        name_sw VARCHAR(255) NOT NULL,
        name_ki VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        display_order INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    """
    
    try:
        cursor.execute(sql)
        print("   ✅ Table categories créée")
    except Error as e:
        print(f"   ❌ Erreur : {e}")
        sys.exit(1)

def create_titles_table(cursor):
    """Créer la table des titres (niveau 2)"""
    print("\n📚 Création de la table TITLES...")
    
    sql = """
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
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    """
    
    try:
        cursor.execute(sql)
        print("   ✅ Table titles créée")
    except Error as e:
        print(f"   ❌ Erreur : {e}")
        sys.exit(1)

def create_articles_table(cursor):
    """Créer la table des articles (niveau 3)"""
    print("\n📄 Création de la table ARTICLES...")
    
    sql = """
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
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    """
    
    try:
        cursor.execute(sql)
        print("   ✅ Table articles créée")
    except Error as e:
        print(f"   ❌ Erreur : {e}")
        sys.exit(1)

def insert_categories(cursor):
    """Insérer les 7 catégories"""
    print("\n🏷️  Insertion des 7 catégories...")
    
    sql = """
    INSERT INTO categories (id, name_fr, name_en, name_sw, name_ki, slug, display_order)
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    
    for idx, cat in enumerate(CATEGORIES, 1):
        values = (
            cat['id'],
            cat['name_fr'],
            cat['name_en'],
            cat['name_sw'],
            cat['name_ki'],
            cat['slug'],
            idx
        )
        
        try:
            cursor.execute(sql, values)
            print(f"   ✓ {cat['name_fr']} (FR/EN/SW/KI)")
        except Error as e:
            print(f"   ❌ Erreur pour {cat['name_fr']}: {e}")

def display_summary(cursor):
    """Afficher un résumé de la base créée"""
    print("\n" + "="*60)
    print("📊 RÉSUMÉ DE LA BASE DE DONNÉES")
    print("="*60)
    
    # Compter les catégories
    cursor.execute("SELECT COUNT(*) FROM categories")
    cat_count = cursor.fetchone()[0]
    print(f"\n✅ Catégories : {cat_count}")
    
    # Afficher les catégories
    cursor.execute("SELECT id, name_fr, name_en, name_sw, name_ki FROM categories ORDER BY display_order")
    categories = cursor.fetchall()
    
    print("\n📁 CATÉGORIES CRÉÉES :")
    for cat in categories:
        print(f"   {cat[0]}. {cat[1]}")
        print(f"      🇬🇧 {cat[2]} | 🇹🇿 {cat[3]} | 🇨🇩 {cat[4]}")
    
    # Structure
    print("\n📐 STRUCTURE À 3 NIVEAUX :")
    print("   1️⃣  Categories (7 catégories en 4 langues)")
    print("   2️⃣  Titles (titres des livres en 4 langues)")
    print("   3️⃣  Articles (contenus en 4 langues)")
    
    print("\n🌍 LANGUES SUPPORTÉES :")
    print("   🇫🇷 Français (FR)")
    print("   🇬🇧 English (EN)")
    print("   🇹🇿 Swahili (SW)")
    print("   🇨🇩 Kivira (KI)")
    
    print("\n" + "="*60)
    print("✅ BASE DE DONNÉES CRÉÉE AVEC SUCCÈS !")
    print("="*60)

# ============================================
# MAIN
# ============================================

def main():
    """Fonction principale"""
    print("="*60)
    print("🚀 CRÉATION DE LA BASE DE DONNÉES BIBLIOTHÈQUE")
    print("="*60)
    print(f"\n🔧 Configuration :")
    print(f"   Host : {DB_CONFIG['host']}")
    print(f"   Database : {DB_CONFIG['database']}")
    print(f"   User : {DB_CONFIG['user']}")
    
    # Demander confirmation
    response = input("\n⚠️  Cette opération va SUPPRIMER toutes les données existantes.\nContinuer ? (oui/non) : ")
    
    if response.lower() not in ['oui', 'yes', 'o', 'y']:
        print("\n❌ Opération annulée.")
        sys.exit(0)
    
    # Connexion
    connection = create_connection()
    cursor = connection.cursor()
    
    try:
        # Étape 1 : Supprimer les tables
        drop_tables(cursor)
        
        # Étape 2 : Créer les tables
        create_categories_table(cursor)
        create_titles_table(cursor)
        create_articles_table(cursor)
        
        # Étape 3 : Insérer les catégories
        insert_categories(cursor)
        
        # Commit
        connection.commit()
        
        # Étape 4 : Afficher le résumé
        display_summary(cursor)
        
        print(f"\n💡 PROCHAINES ÉTAPES :")
        print(f"   1. Mettre à jour votre API pour gérer la structure à 3 niveaux")
        print(f"   2. Ajouter des titres dans la table 'titles'")
        print(f"   3. Ajouter des articles dans la table 'articles'")
        
    except Error as e:
        print(f"\n❌ ERREUR : {e}")
        connection.rollback()
        sys.exit(1)
        
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print(f"\n🔌 Connexion fermée")

if __name__ == '__main__':
    main()
