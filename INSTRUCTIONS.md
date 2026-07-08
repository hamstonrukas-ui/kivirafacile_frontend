# 🎓 Kivirafacile - Application d'apprentissage du Kivira

## 📁 Structure du projet

```
kivirafacile/
├── kivirafacile.html       ← Fichier principal (ouvrir dans le navigateur)
└── data/                   ← Dossier des données
    ├── lessons.js          ← Données des leçons
    ├── library.js          ← Données de la bibliothèque
    ├── dictionary.js       ← Données du dictionnaire
    └── README.md           ← Guide complet pour ajouter des données
```

## 🚀 Comment utiliser l'application

### 1. **Ouvrir l'application**
Double-cliquez sur `kivirafacile.html` pour l'ouvrir dans votre navigateur.

### 2. **Structure des fichiers**
⚠️ **IMPORTANT** : Le fichier HTML et le dossier `data/` doivent être dans le même dossier !

```
Votre dossier/
├── kivirafacile.html    ← Le fichier principal
└── data/                ← Le dossier contenant toutes les données
    ├── lessons.js
    ├── library.js
    └── dictionary.js
```

Si vous séparez ces fichiers, l'application ne fonctionnera pas.

## ✏️ Ajouter des données

### Pour ajouter des leçons, livres ou mots :
1. Ouvrez le fichier approprié dans `data/`
2. Suivez les instructions dans `data/README.md`
3. Sauvegardez le fichier
4. Rechargez la page dans le navigateur (F5)

### Exemples rapides :

**Ajouter une leçon :**
- Fichier : `data/lessons.js`
- Ajoutez un nouvel objet dans la catégorie

**Ajouter un livre :**
- Fichier : `data/library.js`
- Ajoutez un nouvel objet dans la catégorie

**Ajouter un mot au dictionnaire :**
- Fichier : `data/dictionary.js`
- Ajoutez dans les DEUX sens (ex: kivira→français ET français→kivira)

## 🔧 Conseils pratiques

### 1. **Utilisez un éditeur de texte adapté**
- VS Code (recommandé)
- Sublime Text
- Notepad++

**Ne pas utiliser** : Microsoft Word, Google Docs

### 2. **Testez régulièrement**
Après chaque modification :
- Sauvegardez le fichier
- Rechargez la page (F5)
- Vérifiez que tout fonctionne

### 3. **En cas d'erreur**
Si la page est blanche après vos modifications :
1. Appuyez sur F12 pour ouvrir la console
2. Regardez les erreurs en rouge
3. C'est souvent :
   - Une virgule manquante
   - Un guillemet mal fermé
   - Une accolade oubliée

### 4. **Sauvegardez vos données**
Faites des copies de sauvegarde du dossier `data/` régulièrement !

## 📊 Fonctionnalités de l'application

### 🏠 Page d'accueil
Vue d'ensemble et progression

### 📚 Bibliothèque
- Romans
- Coutumes & Traditions
- Musiques & Chansons
- Proverbes
- Poésie
- Histoire du Rwanda

### 📖 Leçons
Exercices interactifs en 4 étapes :
1. Écouter la prononciation
2. Choisir la traduction
3. Remettre les mots dans l'ordre
4. Prononcer la phrase

### 📝 Dictionnaire
Recherche bidirectionnelle selon la langue choisie :
- Kivira ⇄ Français
- Kivira ⇄ English
- Kivira ⇄ Swahili

### 🔄 Traduction
(À venir)

### ⚙️ Paramètres
Menu hamburger → Paramètres :
- Choix de la langue d'interface
- Notifications
- Audio

## 📞 Support

Pour toute question ou problème, consultez d'abord le fichier `data/README.md` qui contient des instructions détaillées.

---

Bon apprentissage du Kivira ! 🎉
