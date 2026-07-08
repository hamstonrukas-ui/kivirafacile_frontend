// ==================== PRONOMS DÉMONSTRATIFS KIVIRA ====================
// Fichier : data/demonstratives.js

// -------------------------------------------------------
// TABLE 1 : DISTANCE DES PRONOMS DÉMONSTRATIFS FRANÇAIS
// -------------------------------------------------------
const demonstrativeDistance = {
    "ce":        { distance: "proche",   number: "singulier" },
    "cet":       { distance: "proche",   number: "singulier" },
    "cette":     { distance: "proche",   number: "singulier" },
    "ces":       { distance: "proche",   number: "pluriel"   },
    "celui":     { distance: "éloigné",  number: "singulier" },
    "celle":     { distance: "éloigné",  number: "singulier" },
    "ceux":      { distance: "proche",   number: "pluriel"   },
    "celles":    { distance: "éloigné",  number: "pluriel"   },
    "ceci":      { distance: "proche",   number: "singulier" },
    "cela":      { distance: "éloigné",  number: "singulier" },
    "ça":        { distance: "proche",   number: "singulier" },
    "celui-ci":  { distance: "proche",   number: "singulier" },
    "celui-là":  { distance: "éloigné",  number: "singulier" },
    "celle-ci":  { distance: "proche",   number: "singulier" },
    "celle-là":  { distance: "éloigné",  number: "singulier" },
    "ceux-ci":   { distance: "proche",   number: "pluriel"   },
    "ceux-là":   { distance: "éloigné",  number: "pluriel"   },
    "celles-ci": { distance: "proche",   number: "pluriel"   },
    "celles-là": { distance: "éloigné",  number: "pluriel"   }
};

// -------------------------------------------------------
// TABLE 2 : PRONOMS DÉMONSTRATIFS PAR NOM
// Clé = ID numérique
// Colonnes : nom (racine), procheSg, prochePl, éloignéSg, éloignéPl
// -------------------------------------------------------
const demonstrativesByNoun = {
    1:  { nom: "ndu",     procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    2:  { nom: "nume",    procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    3:  { nom: "iba",     procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    4:  { nom: "kazana",  procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    5:  { nom: "njuba",   procheSg: "kano", prochePl: "tuno", éloignéSg: "kalya", éloignéPl: "tulya" },
    6:  { nom: "tanga",   procheSg: "kino", prochePl: "bino", éloignéSg: "kilya", éloignéPl: "bilya" },
    7:  { nom: "zanga",   procheSg: "kino", prochePl: "bino", éloignéSg: "kilya", éloignéPl: "bilya" },
    8:  { nom: "boko",    procheSg: "kuno", prochePl: "ino",  éloignéSg: "kulya", éloignéPl: "ilya"  },
    9:  { nom: "ndu",     procheSg: "kino", prochePl: "bino", éloignéSg: "kilya", éloignéPl: "bilya" },
    10: { nom: "lamu",    procheSg: "buno", prochePl: "gano", éloignéSg: "bulya", éloignéPl: "galya" },
    11: { nom: "sho",     procheSg: "ino",  prochePl: "gano", éloignéSg: "ilya",  éloignéPl: "galya" },
    12: { nom: "zanga",   procheSg: "kino", prochePl: "bino", éloignéSg: "kilya", éloignéPl: "bilya" },
    13: { nom: "lungu",   procheSg: "muno", prochePl: "muno", éloignéSg: "mulya", éloignéPl: "mulya" },
    14: { nom: "na",      procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    15: { nom: "li",      procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    16: { nom: "zanga",   procheSg: "kino", prochePl: "bino", éloignéSg: "kilya", éloignéPl: "bilya" },
    17: { nom: "twe",     procheSg: "ino",  prochePl: "bino", éloignéSg: "ilya",  éloignéPl: "bilya" },
    18: { nom: "ise",     procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    19: { nom: "nyele",   procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    20: { nom: "tima",    procheSg: "ino",  prochePl: "zino", éloignéSg: "ilya",  éloignéPl: "zilya" },
    21: { nom: "lo",      procheSg: "ino",  prochePl: "zino", éloignéSg: "ilya",  éloignéPl: "zilya" },
    22: { nom: "lungu",   procheSg: "ino",  prochePl: "zino", éloignéSg: "ilya",  éloignéPl: "zilya" },
    23: { nom: "leeza",   procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    24: { nom: "nembuga", procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    25: { nom: "zi",      procheSg: "ino",  prochePl: "zino", éloignéSg: "ilya",  éloignéPl: "zilya" },
    26: { nom: "mbanza",  procheSg: "ino",  prochePl: "zino", éloignéSg: "ilya",  éloignéPl: "zilya" },
    27: { nom: "nwa",     procheSg: "kino", prochePl: "bino", éloignéSg: "kilya", éloignéPl: "bilya" },
    28: { nom: "fugu",    procheSg: "buno", prochePl: "bino", éloignéSg: "ilya",  éloignéPl: "bilya" },
    29: { nom: "mazi",    procheSg: "gano", prochePl: "gano", éloignéSg: "galya", éloignéPl: "galya" },
    30: { nom: "lunda",   procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    31: { nom: "lango",   procheSg: "ino",  prochePl: "zino", éloignéSg: "ilya",  éloignéPl: "zilya" },
    32: { nom: "simi",    procheSg: "ino",  prochePl: "gano", éloignéSg: "ilya",  éloignéPl: "galya" },
    33: { nom: "gulu",    procheSg: "kuno", prochePl: "ino",  éloignéSg: "kulya", éloignéPl: "ilya"  },
    34: { nom: "bandu",   procheSg: "bano", prochePl: "bano", éloignéSg: "balya", éloignéPl: "balya" },
    35: { nom: "mena",    procheSg: "gano", prochePl: "zino", éloignéSg: "galya", éloignéPl: "zilya" },
    36: { nom: "balo",    procheSg: "kino", prochePl: "bino", éloignéSg: "kilya", éloignéPl: "bilya" },
    37: { nom: "lulu",    procheSg: "ino",  prochePl: "zino", éloignéSg: "ilya",  éloignéPl: "zilya" },
    38: { nom: "baba",    procheSg: "uno",  prochePl: "bano", éloignéSg: "ulya",  éloignéPl: "balya" },
    39: { nom: "lola",    procheSg: "guno", prochePl: "zino", éloignéSg: "zino",  éloignéPl: "zilya" },
    40: { nom: "tima",    procheSg: "ino",  prochePl: "zino", éloignéSg: "ilya",  éloignéPl: "zilya" },
    41: { nom: "hande",   procheSg: "luno", prochePl: "zino", éloignéSg: "lulya", éloignéPl: "zilya" },
    42: { nom: "hande",   procheSg: "luno", prochePl: "bino", éloignéSg: "lulya", éloignéPl: "bilya" },
    43: { nom: "boozo",   procheSg: "buno", prochePl: "buno", éloignéSg: "bulya", éloignéPl: "bulya" }
};
    

// -------------------------------------------------------
// FONCTION : Vérifier si un mot est un pronom démonstratif
// -------------------------------------------------------
function isDemonstrative(word) {
    return demonstrativeDistance.hasOwnProperty(word.toLowerCase());
}

// -------------------------------------------------------
// FONCTION PRINCIPALE : Résoudre démonstratif + nom
//
// Logique :
// 1. frenchDemo → TABLE 1 → distance + number (info1)
// 2. frenchNoun → words.js → kivira + demoId (info2)
// 3. demonstrativesByNoun[demoId] + info1 → pronom Kivira
// 4. Retourne : pronom Kivira + nom Kivira
// -------------------------------------------------------
function resolveDemonstrative(frenchDemo, frenchNoun) {

    // ÉTAPE 1 : Trouver distance et nombre
    const distInfo = demonstrativeDistance[frenchDemo.toLowerCase()];
    if (!distInfo) return null;

    const { distance, number } = distInfo; // info1

    // ÉTAPE 2 : Trouver le nom dans words.js → récupérer kivira + demoId
    const nounData = wordsData.nouns[frenchNoun.toLowerCase()];
    if (!nounData) return null;

    const demoId = nounData.demoId;  // info2
    if (!demoId) return null;

    // ÉTAPE 3 : Chercher dans la table avec info1 + info2
    const demoRow = demonstrativesByNoun[demoId];
    if (!demoRow) return null;

    // ÉTAPE 4 : Sélectionner la bonne colonne
    let demoKivira;
    if      (distance === "proche"  && number === "singulier") demoKivira = demoRow.procheSg;
    else if (distance === "proche"  && number === "pluriel"  ) demoKivira = demoRow.prochePl;
    else if (distance === "éloigné" && number === "singulier") demoKivira = demoRow.éloignéSg;
    else if (distance === "éloigné" && number === "pluriel"  ) demoKivira = demoRow.éloignéPl;
    else return null;

    // ÉTAPE 5 : Construire le nom Kivira (singulier ou pluriel)
    const isPlural  = isFrenchPlural(frenchNoun);
    const nounKivira = applyNounClass(nounData.class, nounData.root, isPlural ? "pl" : "sg");

    return {
        demonstrative: demoKivira.toLowerCase(),
        noun:          nounKivira,
        full:          `${demoKivira.toLowerCase()} ${nounKivira}`
    };
}
