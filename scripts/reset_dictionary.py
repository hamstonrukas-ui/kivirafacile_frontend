#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script de réinitialisation de la base de données du dictionnaire
Fichier: scripts/reset_dictionary.py
"""

import sqlite3
import os
from pathlib import Path

# Configuration
DB_PATH = 'database/dictionary.db'

def reset_dictionary():
    """Réinitialise complètement la base de données du dictionnaire"""
    
    print("=" * 60)
    print("RÉINITIALISATION DE LA BASE DE DONNÉES DICTIONNAIRE")
    print("=" * 60)
    
    # Vérifier si la base existe
    if os.path.exists(DB_PATH):
        print(f"\n📁 Base de données trouvée : {DB_PATH}")
        
        # Demander confirmation
        response = input("\n⚠️  ATTENTION : Cela va supprimer TOUS les mots !\nContinuer ? (oui/non) : ")
        
        if response.lower() not in ['oui', 'yes', 'o', 'y']:
            print("\n❌ Opération annulée.")
            return False
    else:
        print(f"\n📁 Création d'une nouvelle base : {DB_PATH}")
    
    try:
        # Créer le dossier si nécessaire
        os.makedirs('database', exist_ok=True)
        
        # Supprimer l'ancienne base si elle existe
        if os.path.exists(DB_PATH):
            os.remove(DB_PATH)
            print("✅ Ancienne base supprimée")
        
        # Créer la nouvelle base
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        print("\n🔧 Création de la structure de la base...")
        
        # Créer la table words
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS words (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            word TEXT NOT NULL,
            translation_fr TEXT,
            translation_en TEXT,
            translation_sw TEXT,
            exemple_fr TEXT,
            exemple_en TEXT,
            exemple_sw TEXT,
            exemple_ki TEXT,
            category TEXT DEFAULT 'general',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        ''')
        
        # Créer des index pour les recherches
        cursor.execute('CREATE INDEX IF NOT EXISTS idx_word ON words(word)')
        cursor.execute('CREATE INDEX IF NOT EXISTS idx_translation_fr ON words(translation_fr)')
        cursor.execute('CREATE INDEX IF NOT EXISTS idx_category ON words(category)')
        
        # Créer une table pour les catégories (optionnel)
        cursor.execute('''
        CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            description TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        ''')
        
        # Insérer quelques catégories par défaut
        default_categories = [
            ('general', 'Mots généraux'),
            ('verbes', 'Verbes'),
            ('noms', 'Noms'),
            ('adjectifs', 'Adjectifs'),
            ('expressions', 'Expressions courantes')
        ]
        
        cursor.executemany(
            'INSERT OR IGNORE INTO categories (name, description) VALUES (?, ?)',
            default_categories
        )
        
        conn.commit()
        conn.close()
        
        print("✅ Structure de la base créée")
        print("✅ Index créés pour optimiser les recherches")
        print("✅ Catégories par défaut ajoutées")
        
        # Afficher les statistiques
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        cursor.execute('SELECT COUNT(*) FROM words')
        word_count = cursor.fetchone()[0]
        
        cursor.execute('SELECT COUNT(*) FROM categories')
        category_count = cursor.fetchone()[0]
        
        conn.close()
        
        print(f"\n📊 STATISTIQUES :")
        print(f"   Mots dans la base : {word_count}")
        print(f"   Catégories : {category_count}")
        
        print("\n" + "=" * 60)
        print("✅ BASE DE DONNÉES RÉINITIALISÉE AVEC SUCCÈS !")
        print("=" * 60)
        
        return True
        
    except Exception as e:
        print(f"\n❌ ERREUR : {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == '__main__':
    reset_dictionary()
