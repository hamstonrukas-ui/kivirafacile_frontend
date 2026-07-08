// ==================== BASE DE MOTS FRANÇAIS → KIVIRA ====================
// Fichier : data/words.js
//
// Structure d'un NOM :
// "mot_français": {
//     nature: "nom",
//     root: "racine_kivira",   ← racine SANS préfixe
//     class: 1,                ← numéro de classe (1-24)
//     sgFr: "singulier_fr",   ← forme singulier en français
//     plFr: "pluriel_fr"      ← forme pluriel en français
// }
//
// La forme kivira finale sera calculée automatiquement :
// → singulier : applyNounClass(class, root, "sg")
// → pluriel   : applyNounClass(class, root, "pl")
// -----------------------------------------------------------------------

const wordsData = {

    // ==================== NOMS ====================
    nouns: {
        // Classe 1 : mu- / ba-  (personnes)
        "homme": {
            nature: "nom",
            root: "nume",
            class: 1,
            demoId: 2,
            sgFr: "homme",
            plFr: "hommes"
        },
        "femme": {
            nature: "nom",
            root: "kazana",
            class: 1,
            demoId: 4,
            sgFr: "femme",
            plFr: "femmes"
        },
        "enfant": {
            nature: "nom",
            root: "ana",
            class: 1,
            demoId: 3,
            sgFr: "enfant",
            plFr: "enfants"
        },
        "personne": {
            nature: "nom",
            root: "ntu",
            class: 1,
            demoId: 1,
            sgFr: "personne",
            plFr: "personnes"
        },
        "ami": {
            nature: "nom",
            root: "nshuti",
            class: 1,
            demoId: 19,
            sgFr: "ami",
            plFr: "amis"
        },

        // Classe 7 : ki- / bi-  (objets)
        "livre": {
            nature: "nom",
            root: "tabo",
            class: 7,
            demoId: 6,
            sgFr: "livre",
            plFr: "livres"
        },
        "chaise": {
            nature: "nom",
            root: "ti",
            class: 7,
            demoId: 6,
            sgFr: "chaise",
            plFr: "chaises"
        },

        // Classe 8 : mu- / ma-  (arbres, plantes, rivières)
        "arbre": {
            nature: "nom",
            root: "ti",
            class: 8,
            demoId: 13,
            sgFr: "arbre",
            plFr: "arbres"
        },
        "famille": {
            nature: "nom",
            root: "ryango",
            class: 8,
            demoId: 13,
            sgFr: "famille",
            plFr: "familles"
        },
        "village": {
            nature: "nom",
            root: "dugudu",
            class: 8,
            demoId: 13,
            sgFr: "village",
            plFr: "villages"
        },

        // Classe 14 : mu- / mi-
        "jour": {
            nature: "nom",
            root: "nsi",
            class: 14,
            demoId: 14,
            sgFr: "jour",
            plFr: "jours"
        },

        // Classe 10 : bu- / ma-
        "travail": {
            nature: "nom",
            root: "zi",
            class: 10,
            demoId: 25,
            sgFr: "travail",
            plFr: "travaux"
        },

        // Classe 16 : bu- / bi-
        "nuit": {
            nature: "nom",
            root: "ro",
            class: 16,
            demoId: 16,
            sgFr: "nuit",
            plFr: "nuits"
        },

        // Classe 18 : pas de préfixe
        "eau": {
            nature: "nom",
            root: "amazi",
            class: 18,
            demoId: 29,
            sgFr: "eau",
            plFr: "eaux"
        },
        "argent": {
            nature: "nom",
            root: "amafaranga",
            class: 18,
            demoId: 29,
            sgFr: "argent",
            plFr: "argents"
        }
    },

    // ==================== VERBES ====================
    // root = racine du verbe (sans ku-)
    verbs: {
        "être":        { nature: "verbe", root: "ba",     infinitive: "kuba",     auxiliary: true },
        "avoir":       { nature: "verbe", root: "gira",   infinitive: "kugira" },
        "aller":       { nature: "verbe", root: "ya",     infinitive: "kuya" },
        "venir":       { nature: "verbe", root: "vwa",     infinitive: "kuvwa" },
        "faire":       { nature: "verbe", root: "gila",   infinitive: "kugila" },
        "dire":        { nature: "verbe", root: "teta",   infinitive: "kuteta" },
        "voir":        { nature: "verbe", root: "bona",   infinitive: "kubona" },
        "savoir":      { nature: "verbe", root: "manya",  infinitive: "kumanya" },
        "vouloir":     { nature: "verbe", root: "shwila",  infinitive: "kushwila" },
        "pouvoir":     { nature: "verbe", root: "basa",infinitive: "kubasa" },
        "manger":      { nature: "verbe", root: "lya",    infinitive: "kulya" },
        "boire":       { nature: "verbe", root: "shoma",   infinitive: "kushoma" },
        "dormir":      { nature: "verbe", root: "lala",  infinitive: "kulala" },
        "parler":      { nature: "verbe", root: "teta",   infinitive: "kuteta" },
        "écouter":     { nature: "verbe", root: "tenena",    infinitive: "kutenena" },
        "comprendre":  { nature: "verbe", root: "elewa",    infinitive: "kuelewa" },
        "regarder":    { nature: "verbe", root: "lola",   infinitive: "kulola" },
        "aimer":       { nature: "verbe", root: "sima",  infinitive: "kusima" },
        "donner":      { nature: "verbe", root: "ha",     infinitive: "kuha" },
        "prendre":     { nature: "verbe", root: "gwata",   infinitive: "kugwata" },
        "se laver":     { nature: "verbe", root: "shuka",   infinitive: "kuishuka" }
    },

    // ==================== ADJECTIFS ====================
    adjectives: {
        "bon":          { nature: "adjectif", root: "nziza" },
        "bonne":        { nature: "adjectif", root: "nziza" },
        "mauvais":      { nature: "adjectif", root: "bibi" },
        "mauvaise":     { nature: "adjectif", root: "bibi" },
        "grand":        { nature: "adjectif", root: "nini" },
        "grande":       { nature: "adjectif", root: "nini" },
        "petit":        { nature: "adjectif", root: "toya" },
        "petite":       { nature: "adjectif", root: "toya" },
        "beau":         { nature: "adjectif", root: "nziza" },
        "belle":        { nature: "adjectif", root: "nziza" },
        "intelligent":  { nature: "adjectif", root: "ubwenge" },
        "intelligente": { nature: "adjectif", root: "ubwenge" },
        "vieux":        { nature: "adjectif", root: "kera" },
        "vieille":      { nature: "adjectif", root: "kera" },
        "jeune":        { nature: "adjectif", root: "to" },
        "nouveau":      { nature: "adjectif", root: "shya" },
        "nouvelle":     { nature: "adjectif", root: "shya" }
    },

    // ==================== PRONOMS ====================
    pronouns: {
        subject: {
            "je":    { kivira: null, person: "1sg" },
            "tu":    { kivira: null, person: "2sg" },
            "il":    { kivira: null, person: "3sg" },
            "elle":  { kivira: null, person: "3sg" },
            "nous":  { kivira: null, person: "1pl" },
            "vous":  { kivira: null, person: "2pl" },
            "ils":   { kivira: null, person: "3pl" },
            "elles": { kivira: null, person: "3pl" }
        },
        possessive: {
            "mon":   "wanjye", "ma":    "wanjye", "mes":   "zanjye",
            "ton":   "wawe",   "ta":    "wawe",   "tes":   "zawe",
            "son":   "we",     "sa":    "we",     "ses":   "ze",
            "notre": "wacu",   "nos":   "zacu",
            "votre": "wanyu",  "vos":   "zanyu",
            "leur":  "wabo",   "leurs": "zabo"
        },
        demonstrative: {
            "ce": "uyu", "cet": "uyu", "cette": "uyu", "ces": "aba"
        }
    },

    // ==================== ADVERBES ====================
    adverbs: {
        "bien":       "neza",
        "mal":        "nabi",
        "beaucoup":   "cyane",
        "très":       "cyane",
        "trop":       "birenze",
        "peu":        "gake",
        "maintenant": "ubu",
        "aujourd'hui":"uyu munsi",
        "hier":       "ejo hashize",
        "demain":     "ejo hazaza",
        "toujours":   "buri gihe",
        "jamais":     "nta na rimwe",
        "souvent":    "kenshi",
        "parfois":    "rimwe na rimwe",
        "ici":        "hano",
        "là":         "hariya",
        "vite":       "vuba",
        "lentement":  "buhoro"
    },

    // ==================== PRÉPOSITIONS ====================
    prepositions: {
        "à":     "ku",
        "de":    "ya",
        "dans":  "muri",
        "sur":   "kuri",
        "sous":  "munsi ya",
        "avec":  "na",
        "sans":  "nta",
        "pour":  "kugira ngo",
        "vers":  "kuri",
        "chez":  "kwa",
        "entre": "hagati ya",
        "après": "nyuma ya",
        "avant": "mbere ya"
    },

    // ==================== CONJONCTIONS ====================
    conjunctions: {
        "et":          "na",
        "ou":          "cyangwa",
        "mais":        "ariko",
        "donc":        "rero",
        "car":         "kuko",
        "si":          "niba",
        "que":         "ko",
        "quand":       "igihe",
        "comme":       "nka",
        "parce que":   "kuko",
        "pour que":    "kugira ngo",
        "lorsque":     "iyo"
    },

    // ==================== NOMBRES ====================
    numbers: {
        "un":    "umwe", "une":   "umwe",
        "deux":  "kabiri",
        "trois": "gatatu",
        "quatre":"kane",
        "cinq":  "gatanu",
        "six":   "gatandatu",
        "sept":  "karindwi",
        "huit":  "umunani",
        "neuf":  "icyenda",
        "dix":   "icumi",
        "cent":  "ijana",
        "mille": "igihumbi"
    },

    // ==================== ARTICLES (à supprimer) ====================
    articles: [
        "le", "la", "les", "l'", "l'",
        "un", "une", "des",
        "du", "de la", "de l'", "de l'"
    ]
};

// -------------------------------------------------------
// FONCTION : Trouver un mot dans la base
// Retourne { category, data } ou null
// -------------------------------------------------------
function findWord(word) {
    word = word.toLowerCase().trim();

    // Chercher dans les noms
    if (wordsData.nouns[word]) {
        return { category: "noun", data: wordsData.nouns[word] };
    }
    // Chercher dans les verbes
    if (wordsData.verbs[word]) {
        return { category: "verb", data: wordsData.verbs[word] };
    }
    // Chercher dans les adjectifs
    if (wordsData.adjectives[word]) {
        return { category: "adjective", data: wordsData.adjectives[word] };
    }
    // Chercher dans les pronoms sujets
    if (wordsData.pronouns.subject[word]) {
        return { category: "pronoun-subject", data: wordsData.pronouns.subject[word] };
    }
    // Chercher dans les pronoms possessifs
    if (wordsData.pronouns.possessive[word]) {
        return { category: "pronoun-possessive", data: wordsData.pronouns.possessive[word] };
    }
    // Chercher dans les adverbes
    if (wordsData.adverbs[word]) {
        return { category: "adverb", data: wordsData.adverbs[word] };
    }
    // Chercher dans les prépositions
    if (wordsData.prepositions[word]) {
        return { category: "preposition", data: wordsData.prepositions[word] };
    }
    // Chercher dans les conjonctions
    if (wordsData.conjunctions[word]) {
        return { category: "conjunction", data: wordsData.conjunctions[word] };
    }
    // Chercher dans les nombres
    if (wordsData.numbers[word]) {
        return { category: "number", data: wordsData.numbers[word] };
    }

    return null;
}

// -------------------------------------------------------
// FONCTION : Résoudre un nom (singulier ou pluriel)
// Retourne la forme kivira correcte
// -------------------------------------------------------
function resolveNoun(frenchWord) {
    const word = frenchWord.toLowerCase().trim();

    // Chercher directement (singulier)
    if (wordsData.nouns[word]) {
        const noun = wordsData.nouns[word];
        return applyNounClass(noun.class, noun.root, "sg");
    }

    // Chercher via le pluriel français
    for (let key in wordsData.nouns) {
        const noun = wordsData.nouns[key];
        if (noun.plFr && noun.plFr.toLowerCase() === word) {
            return applyNounClass(noun.class, noun.root, "pl");
        }
    }

    return null;
}
