// Base de données des expressions bilingues Français → Kivira
// Ces expressions sont traduites en bloc (pas mot à mot)

const expressionsData = {
    // Salutations et expressions courantes
    "bonjour": "Mwavyuke",
    "comment allez-vous": "Vini myazi",
    "comment vas-tu": "vini myazi",
    "ça va": "Bushoga",
    "je vais bien": "nili bushoga",
    "merci": "Beu'Beu",
    "merci beaucoup": "Beu'Beu",
    "de rien": "Eyoo",
    "s'il vous plaît": "luuse",
    "excusez-moi": "Nifwilile luuse",
    "excusez moi": "Nifwilile luuse",
    "pardon": "luuse",
    "au revoir": "Baba",
    "à bientôt": "Kwe kugavwa",
    "bonne nuit": "Bufugu bushoga",
    "bon sommeil": "Kalo kashoga",
    "bon matin": "Lukula lushoga",
    "bon après-midi": "Mwasibe",
    "bonsoir": "Mwahilize",
    
    // Expressions de politesse
    "comment tu t'appelles": "uzi buzibwa gani?",
    "comment vous appelez-vous": "uzi buzibwa gani",
    "je m'appelle": "nizi buzibwa",
    "enchanté": "nayihanja",
    "bienvenue": "Sambesambe",
    
    // Expressions avec verbes courants
    "j'ai faim" : "nihete kayaba",
    "j'ai soif": "Niline kyuma",
    "je veux manger": "nashwila kulya",
    "je veux boire": "nashwila kushoma",
    "je ne sais pas": "sinzi",
    "je ne comprends pas": "nzielewi",
    "je comprends": "natenena",
    "parlez-vous français?": "ka uziteta fulanse?",
    
    // Expressions temporelles
    "quelle heure est-il": "Ni kizanga kinga?",
    "aujourd'hui": "zene",
    "hier": "Mukesi",
    "demain": "Kusezi",
    "maintenant": "Ivino",
    
    // Expressions de localisation
    "où est": "ili hani",
    "où sont": "bili hani",
    "ici": "hano",
    "là-bas": "halila",
    
    // Expressions quantitatives
    "combien ça coûte": "ni boozo bunga",
    "c'est cher": "ni mubombo",
    "c'est bon marché": "ni kabuga kashoga",
    
    // Réponses courantes
    "oui": "Eyoo",
    "non": "Kete",
    "peut-être": "yangaba",
    "d'accord": "sawa",
    
    // Expressions familiales
    "ma famille": "Bulongo bwani",
    "mon père": "tata'ani",
    "ma mère": "mawe'ani",
    "mon frère": "baba'ani",
    "ma sœur": "mwali'ani",

    "À l'aise !": "Bushoga",
  "À bientôt !": "Kye kuvwa",
  "À demain !": "Kye kusezi",
  "À plus tard !": "kye kuvwa",
  "À tout à l'heure !": "kye kizanga",
  "Au revoir !": "Baba",
  "Bon appétit !": "Mwalibe",
  "courage !": "Ukozwe",
  "Bonne chance !": "Kasanga kashoga",
  "Bonne journée": "Kanjuba kashoga",
  "Bonne nuit !": "Bufugu bushoga",
  "Bonjour !": "Mwavyuke",
  "Désolé(e) !": "Kyevu",

  // Réponses courantes
  "Je ne comprends pas.": "Nisiteneni",
  "Je ne sais pas.": "Nisizi",
  "Je suis désolé(e).": "Kyevu",
  "Je suis perdu(e).": "Nazimila",
  "Je t'aime.": "Nakusima",
  "Merci !": "Beu'beu",
  "Merci beaucoup !": "Beu'beu menemene",
  "Non merci.": "Kete beu'beu",

  // Questions
  "Pouvez-vous m'aider ?": "Wa'nga ngwasa",
  "Tu as raison.": "Uli bwase",

  // Commerce
  "Ça coûte combien ?": "Boozo bunga",
  "C'est combien ?": "Zinga",
  "C'est trop cher !": "Kishingo kili hale",
  "Quel est le prix ?": "kishingo kiki",
    
    // Ajoutez d'autres expressions courantes ici
    // Format : "expression en français": "traduction en kivira"
};

// Pour la recherche, on normalise les expressions (minuscules, sans ponctuation)
function normalizeExpression(text) {
    return text.toLowerCase()
        .trim()
        .replace(/[\.!?;,]/g, '')
        .replace(/\s+/g, ' ');
}

// Fonction pour chercher une expression
function findExpression(text) {
    const normalized = normalizeExpression(text);
    return expressionsData[normalized] || null;
}
