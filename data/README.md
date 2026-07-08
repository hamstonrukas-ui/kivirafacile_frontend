# 📚 Guide d'ajout de données - Kivirafacile

Ce dossier contient toutes les données de l'application séparées de la logique.

## 📁 Structure des fichiers

```
data/
├── lessons.js      - Données des leçons (salutations, famille, cuisine)
├── library.js      - Données de la bibliothèque (livres, romans, etc.)
├── dictionary.js   - Données du dictionnaire (Kivira ↔ FR/EN/SW)
└── README.md      - Ce fichier
```

---

## 📖 Comment ajouter des LEÇONS

### Fichier: `lessons.js`

Pour ajouter une nouvelle leçon dans une catégorie existante :

```javascript
cuisine: [
    {
        id: 2,  // Nouveau numéro
        title: "C'est délicieux",
        phrase: "Ni byiza cyane",
        translation: "C'est délicieux",
        image: "data:image/svg+xml,...",  // Image SVG encodée
        options: ["C'est délicieux", "C'est mauvais", "J'ai soif", "J'ai faim"],
        correctOption: 0,  // Index de la bonne réponse (commence à 0)
        words: ["Ni", "byiza", "cyane"]  // Mots dans le bon ordre
    }
]
```

Pour ajouter une nouvelle catégorie :

```javascript
const lessonData = {
    salutations: [...],
    famille: [...],
    cuisine: [...],
    // Nouvelle catégorie
    animaux: [
        {
            id: 1,
            title: "Le chien",
            phrase: "Imbwa",
            // ... etc
        }
    ]
};
```

⚠️ **Important** : Pensez à ajouter la catégorie dans le HTML aussi !

---

## 📚 Comment ajouter des LIVRES

### Fichier: `library.js`

Pour ajouter un livre dans une catégorie existante :

```javascript
romans: [
    {
        id: 3,  // Nouveau numéro
        title: "Titre du nouveau livre",
        author: "Nom de l'auteur",
        emoji: "📗",  // Emoji pour la couverture
        pages: 180,
        year: 2023,
        content: `
            <h1>Titre du livre</h1>
            <p><em>Par Nom de l'auteur</em></p>
            
            <h2>Chapitre 1</h2>
            <p>Contenu du chapitre...</p>
            
            <blockquote>Citation importante</blockquote>
            
            <div class="proverb">
                <div class="proverb-text">Proverbe en kivira</div>
                <div class="proverb-translation">Traduction du proverbe</div>
            </div>
        `
    }
]
```

### Balises HTML disponibles dans le contenu :

- `<h1>` - Titre principal
- `<h2>` - Sous-titres
- `<h3>` - Petits titres
- `<p>` - Paragraphes
- `<blockquote>` - Citations
- `<div class="verse">` - Pour la poésie (centré, italique)
- `<div class="proverb">` - Pour les proverbes (avec fond coloré)

---

## 📝 Comment ajouter des MOTS au dictionnaire

### Fichier: `dictionary.js`

Le dictionnaire a 3 sections : `fr`, `en`, `sw`

### Pour ajouter un mot Kivira → Français :

```javascript
fr: {
    // Nouveau mot kivira
    'inkoko': {
        word: 'inkoko',
        translation: 'poulet',
        pronunciation: 'in-ko-ko',
        type: 'nom',
        examples: [
            { original: 'Inkoko nziza', translation: 'Un bon poulet' },
            { original: 'Ndashaka inkoko', translation: 'Je veux du poulet' }
        ]
    },
    // N'oubliez pas l'inverse : Français → Kivira
    'poulet': {
        word: 'poulet',
        translation: 'inkoko',
        pronunciation: 'in-ko-ko',
        type: 'nom',
        examples: [
            { original: 'Un bon poulet', translation: 'Inkoko nziza' },
            { original: 'Je veux du poulet', translation: 'Ndashaka inkoko' }
        ]
    }
}
```

### Pour ajouter dans les autres langues :

Répétez la même chose dans les sections `en` (anglais) et `sw` (swahili).

**⚠️ Règle importante** : Chaque mot doit être ajouté dans LES DEUX SENS !
- Kivira → Français ET Français → Kivira
- Kivira → English ET English → Kivira
- Kivira → Swahili ET Swahili → Kivira

---

## 💡 Conseils pratiques

### 1. **Respectez la structure**
Gardez toujours la même structure pour que le code puisse lire les données.

### 2. **Attention aux virgules**
En JavaScript, chaque objet dans un tableau doit être séparé par une virgule, SAUF le dernier.

```javascript
// ✅ Correct
[
    { id: 1, title: "Test 1" },
    { id: 2, title: "Test 2" },
    { id: 3, title: "Test 3" }  // Pas de virgule après le dernier
]

// ❌ Incorrect
[
    { id: 1, title: "Test 1" }
    { id: 2, title: "Test 2" },  // Manque une virgule
]
```

### 3. **Les guillemets dans les textes**
Si votre texte contient des apostrophes, utilisez des backslashes :

```javascript
phrase: "L'homme"  // ❌ Va causer une erreur
phrase: "L\'homme"  // ✅ Correct
```

Ou utilisez des backticks pour le contenu HTML :
```javascript
content: `
    <p>L'histoire d'un homme...</p>
`
```

### 4. **Images SVG**
Les images sont encodées en Base64 dans l'URL. Vous pouvez :
- Utiliser les emojis existants comme exemples
- Créer vos propres SVG sur https://www.svgviewer.dev/
- Encoder en data URL sur https://yoksel.github.io/url-encoder/

### 5. **Testez après chaque ajout**
Ajoutez quelques entrées, puis testez dans le navigateur avant d'en ajouter plus.

---

## 🔧 En cas de problème

Si l'application ne charge plus après vos modifications :

1. **Ouvrez la console du navigateur** (F12)
2. Regardez les erreurs en rouge
3. C'est souvent une virgule manquante ou un guillemet mal fermé
4. Utilisez un éditeur avec coloration syntaxique (VS Code, Sublime Text)

---

## 📊 Statistiques actuelles

### Leçons
- Salutations : 3 leçons
- Famille : 1 leçon
- Cuisine : 1 leçon
**Total : 5 leçons**

### Bibliothèque
- Romans : 2 livres
- Coutumes : 2 livres
- Musiques : 1 livre
- Proverbes : 1 livre
- Poésie : 1 livre
- Histoire : 1 livre
**Total : 8 livres**

### Dictionnaire
- Français : 4 mots (2 kivira + 2 français)
- English : 4 mots (2 kivira + 2 anglais)
- Swahili : 4 mots (2 kivira + 2 swahili)
**Total : 12 entrées**

### Traducteur
- Expressions figées : ~40 expressions
- Base de mots : ~200 entrées
- Verbes : 20 verbes de base
- Noms : 16 noms avec classes
- Adjectifs : 15 adjectifs
- Grammaire : Système complet de classes nominales

---

## 🔄 Comment ajouter des données au TRADUCTEUR

Le traducteur utilise **4 fichiers** :

### 1. `expressions.js` - Expressions toutes faites

Pour les phrases courantes qui se traduisent en bloc :

```javascript
const expressionsData = {
    "bonne journée": "umunsi mwiza",
    "à tout à l'heure": "turabonana",
    // Ajouter ici...
};
```

**Quand utiliser** : Expressions idiomatiques, salutations, phrases fixes

### 2. `words.js` - Base de mots pour traduction mot-à-mot

#### Ajouter un NOM :

```javascript
nouns: {
    "chien": {
        singular: "imbwa",
        plural: "imbwa",  // Pluriel kivira
        class: "IN-AMA",  // Classe nominale (voir grammaire)
        gender: "m"       // m/f/n
    }
}
```

**Classes nominales courantes** :
- `MU-BA` : Personnes (homme, femme, enfant)
- `MU-MI` : Arbres, plantes (arbre, jour)
- `I-AMA` : Fruits, objets ronds (maison, voiture)
- `KI-BI` : Objets, langues (livre, chaise)
- `IN-AMA` : Animaux, objets divers (maison, chien)

#### Ajouter un VERBE :

```javascript
verbs: {
    "courir": {
        infinitive: "kwiruka",  // Infinitif kivira
        root: "iruka",          // Racine (sans ku-)
        type: "regular"         // regular/irregular
    }
}
```

#### Ajouter un ADJECTIF :

```javascript
adjectives: {
    "rouge": {
        base: "tukura",
        agreesWithNoun: true  // S'accorde avec le nom
    }
}
```

#### Ajouter d'autres mots :

```javascript
// Adverbes
adverbs: {
    "rapidement": "vuba"
}

// Prépositions
prepositions: {
    "devant": "imbere ya"
}

// Conjonctions
conjunctions: {
    "lorsque": "iyo"
}

// Nombres
numbers: {
    "vingt": "makumyabiri"
}
```

### 3. `grammar.js` - Règles grammaticales

Ce fichier contient les règles de conjugaison et d'accord.

**Vous n'avez généralement PAS besoin de le modifier**, sauf si vous :
- Ajoutez une nouvelle classe nominale
- Modifiez les règles de conjugaison
- Ajoutez des temps verbaux

### 4. `translator.js` - Moteur de traduction

**NE PAS MODIFIER** ce fichier sauf si vous savez ce que vous faites !

C'est la logique qui :
1. Détecte si c'est une expression figée
2. Sinon, fait la traduction mot-à-mot
3. Analyse la grammaire (verbes, accords, etc.)
4. Assemble la phrase finale

---

## 🎯 Priorités pour enrichir le traducteur

### Pour obtenir de meilleures traductions :

1. **Expressions courantes** (dans `expressions.js`)
   - Ajoutez les phrases que vous utilisez souvent
   - Plus il y a d'expressions, plus c'est précis

2. **Verbes de base** (dans `words.js`)
   - Les 50-100 verbes les plus courants
   - Important : infinitif ET racine

3. **Noms courants** (dans `words.js`)
   - Objets du quotidien
   - IMPORTANT : Bien identifier la classe nominale

4. **Conjugaisons** (dans `translator.js`)
   - Ajouter plus de formes verbales détectées
   - Dans la fonction `detectVerb()`

---

## ⚠️ Limitations actuelles du traducteur

Le traducteur est en **version 1.0** et a des limites :

### Ce qu'il fait BIEN :
✅ Expressions courantes (si dans la base)
✅ Phrases simples sujet-verbe-objet
✅ Conjugaison basique (présent, passé)
✅ Accords simples

### Ce qu'il fait MOINS BIEN :
❌ Phrases complexes avec subordonnées
❌ Temps composés complexes
❌ Expressions idiomatiques non répertoriées
❌ Argot et langage familier

### Pour améliorer :
1. Ajoutez plus d'expressions dans `expressions.js`
2. Ajoutez plus de mots dans `words.js`
3. Améliorez la détection des verbes dans `translator.js`

---

## 📝 Exemple complet d'ajout de vocabulaire

Supposons que vous voulez ajouter le mot "école" :

### 1. Dans `words.js` :

```javascript
nouns: {
    // ... autres noms
    "école": {
        singular: "ishuri",
        plural: "amashuri",
        class: "I-AMA",
        gender: "f"
    }
}
```

### 2. Testez dans l'appli :

Entrez dans le traducteur :
- "école" → devrait donner "ishuri"
- "mon école" → devrait donner "ishuri ryanjye"

### 3. Ajoutez des expressions liées :

```javascript
expressionsData: {
    // ... autres expressions
    "je vais à l'école": "njya ku ishuri",
    "l'école est grande": "ishuri ni nini"
}
```

---

Bon courage pour enrichir l'application ! 🚀
