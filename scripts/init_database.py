#!/usr/bin/env python3
# ==================== SCRIPT D'INITIALISATION BASE DE DONNÉES ====================
# Fichier: scripts/init_database.py
# Crée la base SQLite et importe les données

import sqlite3
import os

# ========== CONFIGURATION ==========
DB_PATH = '../database/dictionary.db'
SQL_SCHEMA_PATH = 'database/create_dictionary.sql'

def create_database():
    """Créer la base de données et exécuter le schéma"""
    
    print("🚀 Initialisation de la base de données...")
    
    # Créer le dossier database s'il n'existe pas
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    
    # Supprimer l'ancienne base si elle existe
    if os.path.exists(DB_PATH):
        print("⚠️  Base existante trouvée, suppression...")
        os.remove(DB_PATH)
    
    # Connexion à la nouvelle base
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print("✅ Base de données créée")
    
    # Lire et exécuter le schéma SQL
    if os.path.exists(SQL_SCHEMA_PATH):
        print("📄 Lecture du schéma SQL...")
        with open(SQL_SCHEMA_PATH, 'r', encoding='utf-8') as f:
            sql_script = f.read()
        
        print("⚙️  Exécution du schéma...")
        cursor.executescript(sql_script)
        
        print("✅ Schéma créé avec succès")
    else:
        print("❌ Fichier SQL schema introuvable:", SQL_SCHEMA_PATH)
        return False
    
    # Commit et fermer
    conn.commit()
    
    # Vérifier les données
    cursor.execute("SELECT COUNT(*) FROM dictionary")
    count = cursor.fetchone()[0]
    
    print(f"✅ {count} mots importés dans le dictionnaire")
    
    # Statistiques par catégorie
    cursor.execute("SELECT category, COUNT(*) FROM dictionary GROUP BY category")
    stats = cursor.fetchall()
    
    print("\n📊 Statistiques par catégorie:")
    for category, word_count in stats:
        print(f"   - {category}: {word_count} mots")
    
    conn.close()
    
    print("\n🎉 Base de données initialisée avec succès!")
    print(f"📍 Chemin: {os.path.abspath(DB_PATH)}")
    
    return True

def add_custom_words(words_list):
    """Ajouter des mots personnalisés à la base"""
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print(f"\n➕ Ajout de {len(words_list)} mots personnalisés...")
    
    for word in words_list:
        try:
            cursor.execute("""
                INSERT INTO dictionary (kivira, french, english, swahili, category, type)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (
                word['kivira'],
                word['french'],
                word['english'],
                word['swahili'],
                word['category'],
                word.get('type', 'nom')
            ))
            
            print(f"   ✅ {word['kivira']} ajouté")
            
        except sqlite3.IntegrityError:
            print(f"   ⚠️  {word['kivira']} existe déjà, ignoré")
    
    conn.commit()
    conn.close()
    
    print("✅ Mots personnalisés ajoutés")

def export_to_json():
    """Exporter la base en JSON pour backup"""
    
    import json
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM dictionary")
    rows = cursor.fetchall()
    
    # Obtenir les noms de colonnes
    columns = [desc[0] for desc in cursor.description]
    
    # Convertir en liste de dictionnaires
    data = []
    for row in rows:
        data.append(dict(zip(columns, row)))
    
    # Sauvegarder en JSON
    output_path = '../backup/dictionary_backup.json'
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"💾 Backup JSON créé: {output_path}")
    
    conn.close()

# ========== EXEMPLE DE MOTS PERSONNALISÉS ==========
CUSTOM_WORDS = [
    {
        'kivira': 'Ikawa',
        'french': 'Café',
        'english': 'Coffee',
        'swahili': 'Kahawa',
        'category': 'nourriture',
        'type': 'nom'
    },
    {
        'kivira': 'Icyayi',
        'french': 'Thé',
        'english': 'Tea',
        'swahili': 'Chai',
        'category': 'nourriture',
        'type': 'nom'
    }
]

# ========== EXÉCUTION ==========
if __name__ == '__main__':
    print("=" * 60)
    print("INITIALISATION DE LA BASE DE DONNÉES KIVIRA FACILE")
    print("=" * 60)
    
    # Créer la base
    success = create_database()
    
    if success:
        # Ajouter des mots personnalisés (optionnel)
        # add_custom_words(CUSTOM_WORDS)
        
        # Créer un backup JSON
        export_to_json()
        
        print("\n✅ TERMINÉ!")
    else:
        print("\n❌ ERREUR lors de l'initialisation")
