#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script d'import de mots depuis un fichier Excel
Fichier: scripts/import_words.py
"""

import sqlite3
import pandas as pd
import os
from datetime import datetime

# Configuration
DB_PATH = 'database/dictionary.db'
EXCEL_FILE = 'mots.xlsx'  # Modifier si nécessaire

def import_words_from_excel(excel_path=EXCEL_FILE):
    """Importe les mots depuis un fichier Excel vers la base de données"""
    
    print("=" * 60)
    print("IMPORT DE MOTS DEPUIS EXCEL")
    print("=" * 60)
    
    # Vérifier que le fichier Excel existe
    if not os.path.exists(excel_path):
        print(f"\n❌ ERREUR : Fichier '{excel_path}' introuvable !")
        print(f"   Assurez-vous que le fichier est dans le même dossier que ce script.")
        return False
    
    print(f"\n📁 Fichier Excel : {excel_path}")
    
    # Vérifier que la base de données existe
    if not os.path.exists(DB_PATH):
        print(f"\n❌ ERREUR : Base de données '{DB_PATH}' introuvable !")
        print(f"   Exécutez d'abord : python3 reset_dictionary.py")
        return False
    
    try:
        # Lire le fichier Excel
        print("\n📖 Lecture du fichier Excel...")
        df = pd.read_excel(excel_path)
        
        print(f"✅ {len(df)} lignes lues")
        
        # Afficher la structure détectée
        print(f"\n📊 Colonnes détectées : {list(df.columns)}")
        
        # Détecter la ligne d'en-tête (chercher "word")
        header_row = None
        for idx, row in df.iterrows():
            if any('word' in str(val).lower() for val in row.values if pd.notna(val)):
                header_row = idx
                break
        
        if header_row is not None:
            print(f"✅ En-têtes trouvés à la ligne {header_row + 1}")
            
            # Relire avec les bons en-têtes
            df = pd.read_excel(excel_path, header=header_row)
            
            # Nettoyer les noms de colonnes
            df.columns = df.columns.str.strip()
            
            # Supprimer les lignes vides
            df = df.dropna(how='all')
            df = df[df['word'].notna()]
            
            print(f"✅ {len(df)} mots valides trouvés")
        else:
            print("⚠️  Pas d'en-têtes détectés, utilisation des colonnes par défaut")
            # Assumer la structure : word, translation_fr, translation_en, translation_sw, exemple_fr, exemple_en, example_sw, example_ki
            df.columns = ['word', 'translation_fr', 'translation_en', 'translation_sw', 
                         'exemple_fr', 'exemple_en', 'example_sw', 'example_ki']
            df = df.dropna(subset=['word'])
        
        # Afficher aperçu
        print(f"\n📋 APERÇU DES DONNÉES :")
        print("-" * 60)
        print(df.head(5).to_string())
        print("-" * 60)
        
        # Demander confirmation
        response = input(f"\n▶️  Importer {len(df)} mots dans la base ? (oui/non) : ")
        
        if response.lower() not in ['oui', 'yes', 'o', 'y']:
            print("\n❌ Import annulé.")
            return False
        
        # Connexion à la base
        print("\n🔄 Import en cours...")
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        # Compter les mots avant import
        cursor.execute('SELECT COUNT(*) FROM words')
        before_count = cursor.fetchone()[0]
        
        # Importer les données
        imported = 0
        errors = 0
        
        for idx, row in df.iterrows():
            try:
                # Nettoyer les valeurs NaN
                word = str(row.get('word', '')).strip() if pd.notna(row.get('word')) else ''
                
                if not word:
                    continue
                
                translation_fr = str(row.get('translation_fr', '')).strip() if pd.notna(row.get('translation_fr')) else ''
                translation_en = str(row.get('translation_en', '')).strip() if pd.notna(row.get('translation_en')) else ''
                translation_sw = str(row.get('translation_sw', '')).strip() if pd.notna(row.get('translation_sw')) else ''
                exemple_fr = str(row.get('exemple_fr', '')).strip() if pd.notna(row.get('exemple_fr')) else ''
                exemple_en = str(row.get('exemple_en', '')).strip() if pd.notna(row.get('exemple_en')) else ''
                exemple_sw = str(row.get('example_sw', '')).strip() if pd.notna(row.get('example_sw')) else ''
                exemple_ki = str(row.get('example_ki', '')).strip() if pd.notna(row.get('example_ki')) else ''
                
                # Insérer dans la base
                cursor.execute('''
                INSERT INTO words (
                    word, translation_fr, translation_en, translation_sw,
                    exemple_fr, exemple_en, exemple_sw, exemple_ki
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                ''', (word, translation_fr, translation_en, translation_sw,
                      exemple_fr, exemple_en, exemple_sw, exemple_ki))
                
                imported += 1
                
                # Afficher progression tous les 10 mots
                if imported % 10 == 0:
                    print(f"   {imported} mots importés...")
                
            except Exception as e:
                errors += 1
                print(f"⚠️  Erreur ligne {idx + 1} : {e}")
        
        conn.commit()
        
        # Compter les mots après import
        cursor.execute('SELECT COUNT(*) FROM words')
        after_count = cursor.fetchone()[0]
        
        conn.close()
        
        # Rapport final
        print("\n" + "=" * 60)
        print("✅ IMPORT TERMINÉ !")
        print("=" * 60)
        print(f"\n📊 STATISTIQUES :")
        print(f"   Mots avant import : {before_count}")
        print(f"   Mots importés : {imported}")
        print(f"   Erreurs : {errors}")
        print(f"   Total dans la base : {after_count}")
        
        return True
        
    except Exception as e:
        print(f"\n❌ ERREUR : {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == '__main__':
    import sys
    
    # Permettre de spécifier le fichier en argument
    excel_file = sys.argv[1] if len(sys.argv) > 1 else EXCEL_FILE
    
    import_words_from_excel(excel_file)
