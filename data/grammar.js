// ==================== GRAMMAIRE KIVIRA ====================
// Fichier : data/grammar.js

// -------------------------------------------------------
// TABLE DES 24 CLASSES NOMINALES
// -------------------------------------------------------
const nounClasses = {
    1:  { sg: "mu",  pl: "ba",  verbSg: "a",   verbPl: "ba",  description: "Personnes" },
    2:  { sg: "mwa", pl: "ba",  verbSg: "a",   verbPl: "ba",  description: "Personnes variante" },
    3:  { sg: "ma",  pl: "bo",  verbSg: null,  verbPl: null,  description: "" },
    4:  { sg: "ka",  pl: "bo",  verbSg: null,  verbPl: null,  description: "" },
    5:  { sg: "ka",  pl: "tu",  verbSg: "ka",  verbPl: "twa", description: "" },
    6:  { sg: null,  pl: "ba",  verbSg: "a",   verbPl: "ba",  description: "" },
    7:  { sg: "ki",  pl: "bi",  verbSg: "kya", verbPl: "bya", description: "Objets" },
    8:  { sg: "mu",  pl: "ma",  verbSg: "gwa", verbPl: "bya", description: "Arbres, plantes" },
    9:  { sg: "li",  pl: "mi",  verbSg: "lya", verbPl: "za",  description: "" },
    10: { sg: "bu",  pl: "ma",  verbSg: "bwa", verbPl: "ga",  description: "" },
    11: { sg: null,  pl: "ma",  verbSg: "ya",  verbPl: "ga",  description: "" },
    12: { sg: "mwa", pl: "mya", verbSg: "gwa", verbPl: "za",  description: "" },
    13: { sg: "mwe", pl: "be",  verbSg: "a",   verbPl: "ba",  description: "" },
    14: { sg: "mu",  pl: "mi",  verbSg: "gwa", verbPl: "za",  description: "" },
    15: { sg: "mba", pl: "ma",  verbSg: null,  verbPl: null,  description: "" },
    16: { sg: "bu",  pl: "bi",  verbSg: "bwa", verbPl: "bya", description: "" },
    17: { sg: "ku",  pl: "ma",  verbSg: "kwa", verbPl: "za",  description: "" },
    18: { sg: null,  pl: null,  verbSg: "ya",  verbPl: "za",  description: "" },
    19: { sg: "lu",  pl: "mba", verbSg: "lwa", verbPl: "za",  description: "" },
    20: { sg: "mw",  pl: "my",  verbSg: "gwa", verbPl: "za",  description: "" },
    21: { sg: null,  pl: "mi",  verbSg: "ya",  verbPl: "za",  description: "" },
    22: { sg: "ki",  pl: "ma",  verbSg: "kya", verbPl: "ga",  description: "" },
    23: { sg: "ka",  pl: "bi",  verbSg: null,  verbPl: null,  description: "" },
    24: { sg: "lu",  pl: "bi",  verbSg: "lwa", verbPl: "bya", description: "" },
    25: { sg: "lu",  pl: "ma",  verbSg: "lwa", verbPl: "za", description: "" }
};

// -------------------------------------------------------
// FONCTION : Appliquer le préfixe nominal
// -------------------------------------------------------
function applyNounClass(classNum, rootWord, number) {
    const cls = nounClasses[classNum];
    if (!cls) return rootWord;
    const prefix = cls[number];
    if (prefix === null) return rootWord;
    return prefix + rootWord;
}

// -------------------------------------------------------
// FONCTION : Détecter si un mot français est au pluriel
// -------------------------------------------------------
function isFrenchPlural(word) {
    if (word.endsWith('s') || word.endsWith('x')) {
        const invariable = ['bras','corps','temps','voix','choix','prix','pays','bois','poids','repas','avis','permis','palais','mois','fils'];
        if (invariable.includes(word.toLowerCase())) return false;
        return true;
    }
    return false;
}

// -------------------------------------------------------
// FONCTION : Obtenir la racine d'un mot Kivira
// -------------------------------------------------------
function getKiviraRoot(kiviraWord, classNum) {
    const cls = nounClasses[classNum];
    if (!cls || cls.sg === null) return kiviraWord;
    const prefix = cls.sg;
    if (kiviraWord.startsWith(prefix)) return kiviraWord.slice(prefix.length);
    return kiviraWord;
}

// -------------------------------------------------------
// PRONOMS PERSONNELS VERBAUX (collés au verbe)
// -------------------------------------------------------
const personalPronouns = {
    // Passé + Présent : na/wa/a/twa/mwa/ba
    passePresentAff: {
        "1sg": "na", "2sg": "wa", "3sg": "a",
        "1pl": "twa", "2pl": "mwa", "3pl": "ba"
    },
    // Futur proche + Futur lointain : ni/u/a/tu/mu/ba
    futurAff: {
        "1sg": "ni", "2sg": "u", "3sg": "a",
        "1pl": "tu", "2pl": "mu", "3pl": "ba"
    },
    // Négatif (tous temps) : ni/u/a/tu/mu/ba
    negative: {
        "1sg": "ni", "2sg": "u", "3sg": "a",
        "1pl": "tu", "2pl": "mu", "3pl": "ba"
    }
};

// -------------------------------------------------------
// AUXILIAIRES - formes complètes (pronom INCLUS, collé)
// -------------------------------------------------------
const auxiliaryConjugation = {
    // ÊTRE (kuba)
    "être": {
        passe: {
            affirmative: {
                "1sg": "naba",  "2sg": "waba",  "3sg": "aba",
                "1pl": "twaba", "2pl": "mwaba", "3pl": "baba"
            },
            negative: {
                "1sg": "nisaba",  "2sg": "usaba",  "3sg": "asaba",
                "1pl": "tusaba",  "2pl": "musaba", "3pl": "basaba"
            }
        },
        present: {
            affirmative: {
                "1sg": "nili",  "2sg": "uli",  "3sg": "ali",
                "1pl": "tuli",  "2pl": "muli", "3pl": "bali"
            },
            negative: {
                "1sg": "nisi",  "2sg": "usi",  "3sg": "asi",
                "1pl": "tusi",  "2pl": "musi", "3pl": "basi"
            }
        },
        futurProche: {
            affirmative: {
                "1sg": "niheteba",  "2sg": "uheteba",  "3sg": "aheteba",
                "1pl": "tuheteba",  "2pl": "muheteba", "3pl": "baheteba"
            },
            negative: {
                "1sg": "nisiheteba",  "2sg": "usiheteba",  "3sg": "asiheteba",
                "1pl": "tusiheteba",  "2pl": "musiheteba", "3pl": "basiheteba"
            }
        },
        futur: {
            affirmative: {
                "1sg": "ngaba",  "2sg": "ugaba",  "3sg": "agaba",
                "1pl": "tugaba", "2pl": "mugaba", "3pl": "bagaba"
            },
            negative: {
                "1sg": "nisigaba",  "2sg": "usigaba",  "3sg": "asigaba",
                "1pl": "tusigaba",  "2pl": "musigaba", "3pl": "basigaba"
            }
        }
    },

    // AVOIR (kubane)
    "avoir": {
        passe: {
            affirmative: {
                "1sg": "nabane",  "2sg": "wabane",  "3sg": "abane",
                "1pl": "twabane", "2pl": "mwabane", "3pl": "babane"
            },
            negative: {
                "1sg": "nisabane",  "2sg": "usabane",  "3sg": "asabane",
                "1pl": "tusabane",  "2pl": "musabane", "3pl": "basabane"
            }
        },
        present: {
            affirmative: {
                "1sg": "nhete",  "2sg": "uhete",  "3sg": "ahete",
                "1pl": "tuhete", "2pl": "muhete", "3pl": "bahete"
            },
            negative: {
                "1sg": "nisihete",  "2sg": "usihete",  "3sg": "asihete",
                "1pl": "tusihete",  "2pl": "musihete", "3pl": "basihete"
            }
        },
        futurProche: {
            affirmative: {
                "1sg": "nihetebane",  "2sg": "uhetebane",  "3sg": "ahetebane",
                "1pl": "tuhetebane",  "2pl": "muhetebane", "3pl": "bahetebane"
            },
            negative: {
                "1sg": "nisihetebane",  "2sg": "usihetebane",  "3sg": "asihetebane",
                "1pl": "tusihetebane",  "2pl": "musihetebane", "3pl": "basihetebane"
            }
        },
        futur: {
            affirmative: {
                "1sg": "ngabane",  "2sg": "ugabane",  "3sg": "agabane",
                "1pl": "tugabane", "2pl": "mugabane", "3pl": "bagabane"
            },
            negative: {
                "1sg": "nisigabane",  "2sg": "usigabane",  "3sg": "asigabane",
                "1pl": "tusigabane",  "2pl": "musigabane", "3pl": "basigabane"
            }
        }
    }
};

// -------------------------------------------------------
// FONCTION : Conjuguer un auxiliaire
// -------------------------------------------------------
function conjugateAuxiliary(aux, person, tense, negative) {
    const forms = auxiliaryConjugation[aux];
    if (!forms || !forms[tense]) return null;
    const form = negative ? forms[tense].negative : forms[tense].affirmative;
    return form[person] || null;
}

// -------------------------------------------------------
// FONCTION : Supprimer la dernière voyelle d'un radical
// -------------------------------------------------------
function removeLastVowel(root) {
    return root.replace(/[aeiouàâéèêëîïôùûü]$/i, '');
}

// -------------------------------------------------------
// FONCTION : Fusionner voyelles consécutives (supprimer la 2ème)
// -------------------------------------------------------
function mergeVowels(str) {
    return str.replace(/([aeiou])([aeiou])/gi, '$1');
}

// -------------------------------------------------------
// PRÉFIXES PRONOMINAUX (verbes pronominaux)
// -------------------------------------------------------
// -------------------------------------------------------
// PRÉFIXES PRONOMINAUX - verbes pronominaux
// -------------------------------------------------------

// Réflexif : sujet et objet = même personne
// Formule : pronom_perso + préfixe_réflexif + radical
const reflexivePrefixes = {
    "1sg": { pronVerb: "na",  pronRef: "ai"  }, // n-ai-shuka  → naishuka
    "2sg": { pronVerb: "wa",  pronRef: "ai"  }, // w-ai-shuka  → waishuka
    "3sg": { pronVerb: "a",   pronRef: "i"   }, // a-i-shuka   → aishuka
    "1pl": { pronVerb: "twa", pronRef: "ai"  }, // tw-ai-shuka → tuaishuka (u→w)
    "2pl": { pronVerb: "mwa", pronRef: "ai"  }, // mw-ai-shuka → mwaishuka
    "3pl": { pronVerb: "ba",  pronRef: "i"   }, // ba-i-shuka  → baishuka
};

// Objet : sujet et objet = personnes différentes
// Formule : pronom_sujet + préfixe_objet + radical
const objectPrefixes = {
    "1sg": "ni",   // me
    "2sg": "kwi",  // te
    "3sg": "mwi",  // lui
    "1pl": "twi",  // nous
    "2pl": "mwi",  // vous
    "3pl": "bai",  // leur
};

// Pronoms sujets pour verbes pronominaux (affirmatif)
const subjectPronounsAff = {
    "1sg": "na",  "2sg": "wa",  "3sg": "a",
    "1pl": "twa", "2pl": "mwa", "3pl": "ba"
};

// Pronoms sujets pour verbes pronominaux (négatif)
const subjectPronounsNeg = {
    "1sg": "ni",  "2sg": "u",   "3sg": "a",
    "1pl": "tu",  "2pl": "mu",  "3pl": "ba"
};

// -------------------------------------------------------
// FONCTION PRINCIPALE : Conjuguer un verbe ordinaire
// pronom + verbe = TOUJOURS COLLÉS
// -------------------------------------------------------
function conjugateVerb(root, person, tense, negative, pronominal) {
    const rootNoVowel = removeLastVowel(root);

    // -------------------------------------------------------
    // CAS 1 : VERBE PRONOMINAL
    // -------------------------------------------------------
    if (pronominal) {
        return conjugatePronominal(root, person, tense, negative, pronominal);
    }

    // -------------------------------------------------------
    // CAS 2 : VERBE ORDINAIRE
    // -------------------------------------------------------
    let result = "";

    if (!negative) {
        const isFuturTense = (tense === "futur" || tense === "futurProche");
        const pron = isFuturTense
            ? personalPronouns.futurAff[person]
            : personalPronouns.passePresentAff[person];

        if (tense === "passe")            result = pron + rootNoVowel + "ile";
        else if (tense === "present")     result = pron + root;
        else if (tense === "futurProche") result = pron + "hete" + root;
        else if (tense === "futur")       result = pron + "ga" + root;
    } else {
        const pron = personalPronouns.negative[person];
        if (tense === "passe")            result = pron + "sa" + rootNoVowel + "ile";
        else if (tense === "present")     result = pron + "si" + rootNoVowel + "i";
        else if (tense === "futurProche") result = pron + "si" + "hete" + root;
        else if (tense === "futur")       result = pron + "si" + "ga" + root;
    }

    return result; // Pas de fusion pour les verbes ordinaires
}

// -------------------------------------------------------
// FONCTION : Fusion voyelles (UNIQUEMENT pour la négation pronominal)
// Supprime la 2ème voyelle quand deux voyelles se suivent
// -------------------------------------------------------
function mergeVowelsNeg(str) {
    return str.replace(/([aeiou])([aeiou])/gi, '$1');
}

// -------------------------------------------------------
// FONCTION : Conjuguer un verbe PRONOMINAL
//
// Deux cas :
// A) Réflexif (même personne) : na + ai + shuka → naishuka
// B) Objet différent  : na + kwi + shuka → nakwishuka
//
// Règle fusion : UNIQUEMENT à la forme NÉGATIVE
// -------------------------------------------------------
function conjugatePronominal(root, person, tense, negative, pronominal) {
    const rootNoVowel = removeLastVowel(root);
    let result = "";

    // ===== AFFIRMATIF : PAS de fusion =====
    if (!negative) {
        let subjPron, objPref;

        if (pronominal.type === "reflexive") {
            // Même personne : na+ai+shuka, wa+ai+shuka, etc.
            const ref = reflexivePrefixes[person];
            subjPron = ref.pronVerb;  // na, wa, a, twa, mwa, ba
            objPref  = ref.pronRef;   // ai, ai, i, ai, ai, i

        } else {
            // Autre personne : sujet + objet
            subjPron = subjectPronounsAff[person];
            objPref  = objectPrefixes[pronominal.object] || "";
        }

        if (tense === "passe") {
            result = subjPron + objPref + rootNoVowel + "ile";
        } else if (tense === "present") {
            result = subjPron + objPref + root;
        } else if (tense === "futurProche") {
            result = subjPron + "hete" + objPref + root;
        } else if (tense === "futur") {
            result = subjPron + "ga" + objPref + root;
        }

        // PAS de fusion pour l'affirmatif
        return result;

    // ===== NÉGATIF : fusion des voyelles consécutives =====
    } else {
        const negPron = subjectPronounsNeg[person]; // ni, u, a, tu, mu, ba
        let objPref;

        if (pronominal.type === "reflexive") {
            objPref = reflexivePrefixes[person].pronRef; // ai ou i
        } else {
            objPref = objectPrefixes[pronominal.object] || "";
        }

        if (tense === "passe") {
            // ni + sa + ai + shuk + ile → nisashukile (fusion ia→i)
            result = negPron + "sa" + objPref + rootNoVowel + "ile";
        } else if (tense === "present") {
            // ni + si + ai + shuk + i → nisishuki (fusion ia→i, ii→i)
            result = negPron + "si" + objPref + rootNoVowel + "i";
        } else if (tense === "futurProche") {
            // ni + si + hete + ai + shuka → nisiheteshuka (fusion ea→e)
            result = negPron + "si" + "hete" + objPref + root;
        } else if (tense === "futur") {
            // ni + si + ga + ai + shuka → nisigashuka (fusion aa→a)
            result = negPron + "si" + "ga" + objPref + root;
        }

        // Fusion des voyelles consécutives UNIQUEMENT pour le négatif
        return mergeVowelsNeg(result);
    }
}

// -------------------------------------------------------
// FONCTION : Conjuguer avec accord nominal (3ème personne)
// -------------------------------------------------------
function conjugateWithNounAgreement(classNum, number, root, tense, negative) {
    const cls = nounClasses[classNum];
    if (!cls) return conjugateVerb(root, "3sg", tense, negative, null);

    const verbPrefix = number === "sg" ? cls.verbSg : cls.verbPl;
    if (!verbPrefix) {
        return conjugateVerb(root, number === "sg" ? "3sg" : "3pl", tense, negative, null);
    }

    const rootNoVowel = removeLastVowel(root);
    let result = "";

    if (!negative) {
        if (tense === "passe")            result = verbPrefix + rootNoVowel + "ile";
        else if (tense === "present")     result = verbPrefix + root;
        else if (tense === "futurProche") result = verbPrefix + "hete" + root;
        else if (tense === "futur")       result = verbPrefix + "ga" + root;
    } else {
        if (tense === "passe")            result = verbPrefix + "sa" + rootNoVowel + "ile";
        else if (tense === "present")     result = verbPrefix + "si" + rootNoVowel + "i";
        else if (tense === "futurProche") result = verbPrefix + "sihete" + root;
        else if (tense === "futur")       result = verbPrefix + "siga" + root;
    }

    return mergeVowels(result);
}

// -------------------------------------------------------
// RADICAUX DES ADJECTIFS KIVIRA
// -------------------------------------------------------
const adjectiveRoots = {
    // Qualité
    "beau":      "nyekembo",  "belle":     "nyekembo",
    "beaux":      "nyekembo",  "belles":     "nyekembo",
    "bon":       "shoga",     "bonne":     "shoga",
    "anciens":       "lanzi",     "bonnes":     "shoga",
    "grand":     "kulu",      "grande":    "kulu",
    "petit":     "lumula",    "petite":    "lumula",
    "vieux":     "koto",      "vieille":   "koto",
    "jeune":     "kwambaga",  "jeune":     "kwambaga",
    "gros":      "bugule",    "grosse":    "bugule",
    "haut":      "lugulu",    "haute":     "lugulu",
    "court":     "hofi",      "courte":    "hofi",
    "ancien":    "lanzi",     "ancienne":  "lanzi",
    "double":    "vuli",     "souple":  "ngu",
    "neuf":    "hyahya",     "neuve":  "hyahya",
    "combien":    "nga",     "mince":  "nini",

    // Couleurs
    "blanc":     "pepe",      "blanche":   "pepe",
    "bleu":      "gululu",    "bleue":     "gululu",
    "rouge":     "tuku",      "rouge":     "tuku",

    // État
    "heureux":   "lengo",     "heureuse":  "lengo",
    "faux":      "hi",        "fausse":    "hi",
    "chaud":     "dutu",      "chaude":    "dutu",
    "intelligent":"enge",    "intelligente":"enge",
    "nouveau":   "hyahya",    "nouvelle": "hyahya",
    "facile":   "novu",    "nouvelle": "hyahya",
    "vivant":   "lami",    "vivante": "lami",
    "vivants":   "lami",    "vivantes": "lami",
    "étranger":   "geni",    "étrangère": "geni",
    "unique":   "tengu",    "superieur": "lamba",
    "puissant":   "fumu",    "puissants": "fumu",
    "puissante":   "fumu",    "superieure": "lamba",
    "inconnu":   "simanyi",    "inconnue": "simanyi",
    "lourd":   "zito",    "simple": "novu",
    "fort":   "komye",    "forte": "komye",
    "iinférieur":   "lumula",    "inférieur": "lumula",
    "tout":   "oshe",    "toutes": "oshe",
    "différent":   "hushani",    "différente": "hushani",
    "dernière":   "sika",    "dernière": "sika",
    "autre":   "ndi",    "autres": "ndi",
    "difficile":   "komu",    "prémier": "tanzi",
    "joli":   "nyekembo",    "jolie": "nyekembo",
    "toute":   "oshe",    "tous": "oshe",
    "seul":   "ngwa",    "froid": "shwela",
    "long":   "le",    "longue": "le",

    // Taille comparatif
    "plus grand": "sana kulu",
    "plus petit": "sana lumula"
};

// -------------------------------------------------------
// PRÉFIXES PAR PERSONNE (quand pas de nom dans la phrase)
// Singulier → mu, Pluriel → ba
// -------------------------------------------------------
const personAdjectivePrefix = {
    "1sg": "mu", "2sg": "mu", "3sg": "mu",
    "1pl": "ba", "2pl": "ba", "3pl": "ba"
};

// -------------------------------------------------------
// FONCTION : Accorder un adjectif avec un nom
//
// classNum : classe nominale du nom (1-24)
// number   : "sg" ou "pl"
// adjRoot  : radical de l'adjectif (ex: "shoga")
// -------------------------------------------------------
function agreeAdjective(classNum, number, adjRoot) {
    const cls = nounClasses[classNum];
    if (!cls) return adjRoot;

    // Préfixe adjectif = préfixe nominal du nom
    const prefix = cls[number];

    if (prefix === null) return adjRoot; // Classe sans préfixe
    return prefix + adjRoot;
}

// -------------------------------------------------------
// FONCTION : Accorder un adjectif avec une personne
// (quand pas de nom explicite)
// -------------------------------------------------------
function agreeAdjectivePerson(person, adjRoot) {
    const prefix = personAdjectivePrefix[person] || "mu";
    return prefix + adjRoot;
}

// -------------------------------------------------------
// FONCTION : Résoudre un adjectif dans une phrase
// Cherche le nom précédent pour l'accord
// Si pas de nom → accord avec la personne du verbe
// -------------------------------------------------------
function resolveAdjective(adjFr, precedingNoun, verbPerson) {
    const root = adjectiveRoots[adjFr.toLowerCase()];
    if (!root) return null; // Adjectif inconnu

    if (precedingNoun && precedingNoun.nounData) {
        // Accord avec le nom
        const nd = precedingNoun.nounData;
        const number = isFrenchPlural(precedingNoun.original) ? "pl" : "sg";
        return agreeAdjective(nd.class, number, root);
    } else {
        // Accord avec la personne (je suis belle → mushoga)
        return agreeAdjectivePerson(verbPerson || "3sg", root);
    }
}

// -------------------------------------------------------
// RADICAUX DES NOMBRES KIVIRA
// -------------------------------------------------------
const numberRoots = {
    // Français sg    → radical
    "un":      "mwe",    "une":     "mwe",
    "deux":    "bili",
    "trois":   "shatu",
    "quatre":  "ne",
    "cinq":    "tanu",
    "six":     "tanda",
    "sept":    "nana",
    "huit":    "nana",   // à confirmer
    "neuf":    "wenda",
    "dix":     "kumi",
    // Formes plurielles françaises
    "1":  "mwe",  "2": "bili", "3": "shatu",
    "4":  "ne",   "5": "tanu", "6": "tanda",
    "7":  "nana", "8": "nana", "9": "wenda",
    "10": "kumi"
};

// -------------------------------------------------------
// PRÉFIXES SPÉCIAUX POUR LES NOMBRES
// Classe 1 uniquement : singulier → u, pluriel → ba
// Toutes les autres classes → préfixe nominal standard
// -------------------------------------------------------
const numberPrefixOverride = {
    1: { sg: "u", pl: "ba" }
};

// -------------------------------------------------------
// FONCTION : Accorder un nombre avec un nom
//
// classNum : classe nominale du nom
// number   : "sg" ou "pl"
// numRoot  : radical du nombre (ex: "mwe", "bili")
// -------------------------------------------------------
function agreeNumber(classNum, number, numRoot) {
    // Vérifier préfixe spécial pour les nombres
    if (numberPrefixOverride[classNum]) {
        const prefix = numberPrefixOverride[classNum][number];
        return prefix + numRoot;
    }

    // Autres classes → préfixe nominal standard
    const cls = nounClasses[classNum];
    if (!cls) return numRoot;

    const prefix = cls[number];
    if (prefix === null) return numRoot;
    return prefix + numRoot;
}

// -------------------------------------------------------
// FONCTION : Résoudre un nombre
// Reçoit nounData directement (pas besoin de wordsData ici)
// Retourne { noun, number, full }
// Ordre final : NOM + NOMBRE
// -------------------------------------------------------
function resolveNumber(frenchNumber, nounData) {
    const root = numberRoots[frenchNumber.toLowerCase()];
    if (!root || !nounData) return null;

    // Singulier ou pluriel selon le nombre
    const isPlural = !["un","une","1"].includes(frenchNumber.toLowerCase());
    const numForm  = isPlural ? "pl" : "sg";

    const nounKivira   = applyNounClass(nounData.class, nounData.root, numForm);
    const numberKivira = agreeNumber(nounData.class, numForm, root);

    return {
        noun:   nounKivira,
        number: numberKivira,
        full:   nounKivira + " " + numberKivira   // NOM + NOMBRE
    };
}

// -------------------------------------------------------
// FONCTION : Vérifier si un mot est un nombre français
// -------------------------------------------------------
function isNumber(word) {
    return numberRoots.hasOwnProperty(word.toLowerCase());
}
