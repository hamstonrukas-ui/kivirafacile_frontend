// ==================== PRONOMS POSSESSIFS KIVIRA ====================
// Fichier : data/possessives.js

// -------------------------------------------------------
// TABLE 1 : TYPE DES PRONOMS POSSESSIFS FRANÇAIS → PERSONNE
// -------------------------------------------------------
const possessiveType = {
    "mon":    "1s",
    "ma":     "1s",
    "ton":    "2s",
    "ta":     "2s",
    "tes":    "2p",
    "son":    "3s",
    "sa":     "3s",
    "ses":    "3p",
    "mes":    "1p",
    "notre":  "1p_excl",
    "nos":    "1p_excl_p",
    "votre":  "2p_excl",
    "vos":    "2p_excl_p",
    "leur":   "3p_excl",
    "leurs":  "3p_excl_p"
};

// -------------------------------------------------------
// TABLE 2 : PRONOMS POSSESSIFS PAR NOM
// Clé = ID numérique (même ID que dans words.js → demoId)
// Colonnes : 1s, 1p, 2s, 2p, 3s, 3p,
//            1p_excl, 1p_excl_p, 2p_excl, 2p_excl_p,
//            3p_excl, 3p_excl_p
// null = pas encore renseigné
// -------------------------------------------------------
const possessivesByNoun = {
    1:  { nom: "ndu",     "1s": "wani",  "1p": "bani",  "2s": "wobe",  "2p": "bobe",  "3s": "wage",  "3p": "bage",  "1p_excl": "wetu",  "1p_excl_p": "betu",  "2p_excl": "wenu",  "2p_excl_p": "benu",  "3p_excl": "wabo",  "3p_excl_p": "babo"  },
    2:  { nom: "nume",    "1s": "wani",  "1p": "bani",  "2s": "wobe",  "2p": "bobe",  "3s": "wage",  "3p": "bage",  "1p_excl": "wetu",  "1p_excl_p": "betu",  "2p_excl": "wenu",  "2p_excl_p": "benu",  "3p_excl": "wabo",  "3p_excl_p": "babo"  },
    3:  { nom: "iba",     "1s": "wani",  "1p": "bani",  "2s": "wobe",  "2p": "bobe",  "3s": "wage",  "3p": "bage",  "1p_excl": "wetu",  "1p_excl_p": "betu",  "2p_excl": "wenu",  "2p_excl_p": "benu",  "3p_excl": "wabo",  "3p_excl_p": "babo"  },
    4:  { nom: "kazana",  "1s": "wani",  "1p": "bani",  "2s": "wobe",  "2p": "bobe",  "3s": "wage",  "3p": "bage",  "1p_excl": "wetu",  "1p_excl_p": "betu",  "2p_excl": "wenu",  "2p_excl_p": "benu",  "3p_excl": "wabo",  "3p_excl_p": "babo"  },
    5:  { nom: "njuba",   "1s": "kani",  "1p": "twani", "2s": "kobe",  "2p": "tobe",  "3s": "kage",  "3p": "twage", "1p_excl": "ketu",  "1p_excl_p": "twetu", "2p_excl": "kenu",  "2p_excl_p": "twenu", "3p_excl": "kabo",  "3p_excl_p": "twabo" },
    6:  { nom: "tanga",   "1s": "kyani", "1p": "byani", "2s": "kyobe", "2p": "byobe", "3s": "kyage", "3p": "byage", "1p_excl": "kyetu", "1p_excl_p": "byetu", "2p_excl": "kyenu", "2p_excl_p": "byenu", "3p_excl": "kyabo", "3p_excl_p": "byabo" },
    7:  { nom: "zanga",   "1s": "kyani", "1p": "byani", "2s": "kyobe", "2p": "byobe", "3s": "kyage", "3p": "byage", "1p_excl": "kyetu", "1p_excl_p": "byetu", "2p_excl": "kyenu", "2p_excl_p": "byenu", "3p_excl": "kyabo", "3p_excl_p": "byabo" },
    8:  { nom: "boko",    "1s": null,    "1p": null,    "2s": null,    "2p": null,    "3s": null,    "3p": null,    "1p_excl": null,    "1p_excl_p": null,    "2p_excl": null,    "2p_excl_p": null,    "3p_excl": null,    "3p_excl_p": null    },
    9:  { nom: "ndu",     "1s": "kyani", "1p": "byani", "2s": "kyobe", "2p": "byobe", "3s": "kyage", "3p": "byage", "1p_excl": "kyetu", "1p_excl_p": "byetu", "2p_excl": "kyenu", "2p_excl_p": "byenu", "3p_excl": "kyabo", "3p_excl_p": "byabo" },
    10: { nom: "lamu",    "1s": null,    "1p": null,    "2s": null,    "2p": null,    "3s": null,    "3p": null,    "1p_excl": null,    "1p_excl_p": null,    "2p_excl": null,    "2p_excl_p": null,    "3p_excl": null,    "3p_excl_p": null    },
    11: { nom: "sho",     "1s": null,    "1p": null,    "2s": null,    "2p": null,    "3s": null,    "3p": null,    "1p_excl": null,    "1p_excl_p": null,    "2p_excl": null,    "2p_excl_p": null,    "3p_excl": null,    "3p_excl_p": null    },
    12: { nom: "zanga",   "1s": "kyani", "1p": "byani", "2s": "kyobe", "2p": "byobe", "3s": "kyage", "3p": "byage", "1p_excl": "kyetu", "1p_excl_p": "byetu", "2p_excl": "kyenu", "2p_excl_p": "byenu", "3p_excl": "kyabo", "3p_excl_p": "byabo" },
    13: { nom: "lungu",   "1s": null,    "1p": null,    "2s": null,    "2p": null,    "3s": null,    "3p": null,    "1p_excl": null,    "1p_excl_p": null,    "2p_excl": null,    "2p_excl_p": null,    "3p_excl": null,    "3p_excl_p": null    },
    14: { nom: "na",      "1s": "wani",  "1p": "bani",  "2s": "wobe",  "2p": "bobe",  "3s": "wage",  "3p": "bage",  "1p_excl": "wetu",  "1p_excl_p": "betu",  "2p_excl": "wenu",  "2p_excl_p": "benu",  "3p_excl": "wabo",  "3p_excl_p": "babo"  },
    15: { nom: "li",      "1s": null,    "1p": null,    "2s": null,    "2p": null,    "3s": null,    "3p": null,    "1p_excl": null,    "1p_excl_p": null,    "2p_excl": null,    "2p_excl_p": null,    "3p_excl": null,    "3p_excl_p": null    },
    16: { nom: "zanga",   "1s": "kyani", "1p": "byani", "2s": "kyobe", "2p": "byobe", "3s": "kyage", "3p": "byage", "1p_excl": "kyetu", "1p_excl_p": "byetu", "2p_excl": "kyenu", "2p_excl_p": "byenu", "3p_excl": "kyabo", "3p_excl_p": "byabo" },
    17: { nom: "twe",     "1s": null,    "1p": null,    "2s": null,    "2p": null,    "3s": null,    "3p": null,    "1p_excl": null,    "1p_excl_p": null,    "2p_excl": null,    "2p_excl_p": null,    "3p_excl": null,    "3p_excl_p": null    },
    18: { nom: "ise",     "1s": null,    "1p": null,    "2s": null,    "2p": null,    "3s": null,    "3p": null,    "1p_excl": null,    "1p_excl_p": null,    "2p_excl": null,    "2p_excl_p": null,    "3p_excl": null,    "3p_excl_p": null    },
    19: { nom: "nyele",   "1s": "wani",  "1p": "bani",  "2s": "wobe",  "2p": "bobe",  "3s": "wage",  "3p": "bage",  "1p_excl": "wetu",  "1p_excl_p": "betu",  "2p_excl": "wenu",  "2p_excl_p": "benu",  "3p_excl": "wabo",  "3p_excl_p": "babo"  },
    20: { nom: "tima",    "1s": "yani",  "1p": "zani",  "2s": "yobe",  "2p": "zobe",  "3s": "yage",  "3p": "zage",  "1p_excl": "yetu",  "1p_excl_p": "zetu",  "2p_excl": "yenu",  "2p_excl_p": "zenu",  "3p_excl": "yabo",  "3p_excl_p": "zabo"  },
    21: { nom: "lo",      "1s": "yani",  "1p": "zani",  "2s": "yobe",  "2p": "zobe",  "3s": "yage",  "3p": "zage",  "1p_excl": "yetu",  "1p_excl_p": "zetu",  "2p_excl": "yenu",  "2p_excl_p": "zenu",  "3p_excl": "yabo",  "3p_excl_p": "zabo"  },
    22: { nom: "lungu",   "1s": "yani",  "1p": "zani",  "2s": "yobe",  "2p": "zobe",  "3s": "yage",  "3p": "zage",  "1p_excl": "yetu",  "1p_excl_p": "zetu",  "2p_excl": "yenu",  "2p_excl_p": "zenu",  "3p_excl": "yabo",  "3p_excl_p": "zabo"  },
    23: { nom: "leeza",   "1s": "wani",  "1p": "bani",  "2s": "wobe",  "2p": "bobe",  "3s": "wage",  "3p": "bage",  "1p_excl": "wetu",  "1p_excl_p": "betu",  "2p_excl": "wenu",  "2p_excl_p": "benu",  "3p_excl": "wabo",  "3p_excl_p": "babo"  },
    24: { nom: "nembuga", "1s": "wani",  "1p": "bani",  "2s": "wobe",  "2p": "bobe",  "3s": "wage",  "3p": "bage",  "1p_excl": "wetu",  "1p_excl_p": "betu",  "2p_excl": "wenu",  "2p_excl_p": "benu",  "3p_excl": "wabo",  "3p_excl_p": "babo"  },
    25: { nom: "zi",      "1s": "gani",  "1p": "gani",  "2s": "gobe",  "2p": "gobe",  "3s": "gage",  "3p": "gage",  "1p_excl": "getu",  "1p_excl_p": "getu",  "2p_excl": "genu",  "2p_excl_p": "genu",  "3p_excl": "gabo",  "3p_excl_p": "gabo"  },
    26: { nom: "mbanza",  "1s": "yani",  "1p": "zani",  "2s": "yobe",  "2p": "zobe",  "3s": "yage",  "3p": "zage",  "1p_excl": "yetu",  "1p_excl_p": "zetu",  "2p_excl": "yenu",  "2p_excl_p": "zenu",  "3p_excl": "yabo",  "3p_excl_p": "zabo"  },
    // IDs 27-41 : à compléter progressivement
    27: { nom: "nwa",     "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    28: { nom: "fugu",    "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    29: { nom: "mazi",    "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    30: { nom: "lunda",   "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    31: { nom: "lango",   "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    32: { nom: "simi",    "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    33: { nom: "gulu",    "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    34: { nom: "bandu",   "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    35: { nom: "mena",    "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    36: { nom: "balo",    "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    37: { nom: "lulu",    "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    38: { nom: "baba",    "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    39: { nom: "lola",    "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    40: { nom: "tima",    "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null },
    41: { nom: "hande",   "1s": null, "1p": null, "2s": null, "2p": null, "3s": null, "3p": null, "1p_excl": null, "1p_excl_p": null, "2p_excl": null, "2p_excl_p": null, "3p_excl": null, "3p_excl_p": null }
};

// -------------------------------------------------------
// FONCTION : Vérifier si un mot est un pronom possessif
// -------------------------------------------------------
function isPossessive(word) {
    return possessiveType.hasOwnProperty(word.toLowerCase());
}

// -------------------------------------------------------
// FONCTION PRINCIPALE : Résoudre possessif + nom
//
// Logique :
// 1. frenchPoss  → TABLE 1 → personne (info1)
// 2. frenchNoun  → words.js → kivira + demoId (info2)
// 3. possessivesByNoun[demoId][personne] → possessif Kivira
// 4. Résultat : NOM + POSSESSIF (ordre inversé)
// -------------------------------------------------------
function resolvePossessive(frenchPoss, frenchNoun) {

    // ÉTAPE 1 : Trouver la personne
    const person = possessiveType[frenchPoss.toLowerCase()];
    if (!person) return null; // info1

    // ÉTAPE 2 : Trouver le nom → demoId
    const nounData = wordsData.nouns[frenchNoun.toLowerCase()];
    if (!nounData) return null;

    const demoId = nounData.demoId; // info2
    if (!demoId) return null;

    // ÉTAPE 3 : Chercher dans la table
    const possRow = possessivesByNoun[demoId];
    if (!possRow) return null;

    // ÉTAPE 4 : Récupérer le possessif selon la personne
    const possKivira = possRow[person];
    if (!possKivira) return null; // null = pas encore renseigné

    // ÉTAPE 5 : Construire nom Kivira
    // Pluriel si "mes/tes/ses/nos/vos/leurs"
    const pluralPoss = ["mes", "tes", "ses", "nos", "vos", "leurs"];
    const isPlural   = pluralPoss.includes(frenchPoss.toLowerCase());
    const nounKivira = applyNounClass(nounData.class, nounData.root, isPlural ? "pl" : "sg");

    // ÉTAPE 6 : Ordre inversé → NOM + POSSESSIF
    return {
        noun:       nounKivira,
        possessive: possKivira,
        full:       `${nounKivira} ${possKivira}`  // ← Inversé !
    };
}
