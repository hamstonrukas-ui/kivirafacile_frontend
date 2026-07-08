// ==================== VARIANTES DE / QUI / QUE ====================
// Fichier : data/relatives.js

// -------------------------------------------------------
// TABLE PAR ID : singulier et pluriel
// Partagée par "de", "qui", "que"
// -------------------------------------------------------
const relativesByNoun = {
    1:  { nom: "ndu",     sg: "we",  pl: "be"  },
    2:  { nom: "nume",    sg: "we",  pl: "be"  },
    3:  { nom: "iba",     sg: "we",  pl: null  },
    4:  { nom: "kazana",  sg: null,  pl: null  },
    5:  { nom: "njuba",   sg: "kye", pl: "twe" },
    6:  { nom: "tanga",   sg: "kye", pl: "bye" },
    7:  { nom: "zanga",   sg: "kye", pl: "bye" },
    8:  { nom: "boko",    sg: "kwe", pl: "ge"  },
    9:  { nom: "ndu",     sg: "kye", pl: "bye" },
    10: { nom: "lamu",    sg: "bwe", pl: "ge"  },
    11: { nom: "sho",     sg: "lye", pl: "ge"  },
    12: { nom: "zanga",   sg: "kye", pl: "bye" },
    13: { nom: "lungu",   sg: "ye",  pl: "ze"  },
    14: { nom: "na",      sg: "we",  pl: "be"  },
    15: { nom: "li",      sg: "we",  pl: "be"  },
    16: { nom: "zanga",   sg: "kye", pl: "bye" },
    17: { nom: "twe",     sg: "gwe", pl: "ge"  },
    18: { nom: "ise",     sg: "we",  pl: "be"  },
    19: { nom: "nyele",   sg: "we",  pl: "be"  },
    20: { nom: "tima",    sg: "gwe", pl: "ze"  },
    21: { nom: "lo",      sg: "ye",  pl: "ze"  },
    22: { nom: "lungu",   sg: "ye",  pl: "ze"  },
    23: { nom: "leza",    sg: "we",  pl: "be"  },
    24: { nom: "nembuga", sg: "we",  pl: "be"  },
    25: { nom: "zi",      sg: "gwe", pl: "ge"  },
    26: { nom: "mbanza",  sg: "ye",  pl: "ze"  }
};

// -------------------------------------------------------
// TABLE PAR DÉFAUT (sans nom précédent)
// -------------------------------------------------------
const relativeDefaults = {
    "qui": "gani",   // "qui est là ?" → "gani ali aho"
    "de":  null,     // pas de traduction par défaut
    "que": null,     // pas de traduction par défaut
    "du":  null      // abstrait → ignoré (ex: "du jus" → "ji")
};

// -------------------------------------------------------
// MOTS DÉCLENCHEURS
// -------------------------------------------------------
const relativeTriggers = ["de", "du", "qui", "que", "qu'"];

// -------------------------------------------------------
// FONCTION : Détecter si un mot est une variante
// -------------------------------------------------------
function isRelative(word) {
    return relativeTriggers.includes(word.toLowerCase());
}

// -------------------------------------------------------
// FONCTION : Résoudre une variante
//
// relWord  : "de", "qui", "que", "du"
// nounData : données du nom précédent (avec demoId) ou null
// number   : "sg" ou "pl"
// -------------------------------------------------------
function resolveRelative(relWord, nounData, number) {
    const rel = relWord.toLowerCase().replace("qu'", "que");

    // CAS : "du" → toujours null (abstrait)
    if (rel === "du") return null;

    // CAS : pas de nom → table par défaut
    if (!nounData || !nounData.demoId) {
        return relativeDefaults[rel] || null;
    }

    // CAS : nom présent → table par ID
    const row = relativesByNoun[nounData.demoId];
    if (!row) return relativeDefaults[rel] || null;

    const form = (number === "pl") ? row.pl : row.sg;
    return form || relativeDefaults[rel] || null;
}
