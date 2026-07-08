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
            root: "lunda",
            class: 6,
            demoId: 1,
            sgFr: "ami",
            plFr: "amis"
        },
        "ville": {
            nature: "nom",
            root: "mbuga",
            class: 1,
            demoId: 19,
            sgFr: "ville",
            plFr: "villes"
        },
        
        
        "air": {
            nature: "nom",
            root: "hewa",
            class: 11,
            demoId: 20,
            sgFr: "air",
            plFr: "airs"
        },
        "mari": {
            nature: "nom",
            root: "iba",
            class: 6,
            demoId: 1,
            sgFr: "mari",
            plFr: "maris"
        },
        "moment": {
            nature: "nom",
            root: "zanga",
            class: 7,
            demoId: 12,
            sgFr: "moment",
            plFr: "moments"
        },
        "maman": {
            nature: "nom",
            root: "yaye",
            class: 6,
            demoId: 1,
            sgFr: "maman",
            plFr: "mamans"
        },
        "air": {
            nature: "nom",
            root: "hewa",
            class: 11,
            demoId: 22,
            sgFr: "air",
            plFr: "airs"
        },
        "fille": {
            nature: "nom",
            root: "nyele",
            class: 1,
            demoId: 1,
            sgFr: "fille",
            plFr: "filles"
        },
        "fils": {
            nature: "nom",
            root: "gala",
            class: 1,
            demoId: 1,
            sgFr: "fils",
            plFr: "fils"
        },
        "frère": {
            nature: "nom",
            root: "hewa",
            class: 6,
            demoId: 1,
            sgFr: "frère",
            plFr: "frères"
        },
        "soeur": {
            nature: "nom",
            root: "li",
            class: 2,
            demoId: 1,
            sgFr: "soeur",
            plFr: "soeurs"
        },
        "oncle": {
            nature: "nom",
            root: "mwizo",
            class: 6,
            demoId: 1,
            sgFr: "oncle",
            plFr: "oncles"
        },
        "tante": {
            nature: "nom",
            root: "shengi",
            class: 6,
            demoId: 1,
            sgFr: "tante",
            plFr: "tantes"
        },
        "cousine": {
            nature: "nom",
            root: "vyala",
            class: 1,
            demoId: 1,
            sgFr: "cousine",
            plFr: "cousines"
        },
        "cousin": {
            nature: "nom",
            root: "vyala",
            class: 1,
            demoId: 1,
            sgFr: "cousin",
            plFr: "cousins"
        },
        "grand-père": {
            nature: "nom",
            root: "shokulu",
            class: 6,
            demoId: 1,
            sgFr: "grand-père",
            plFr: "grand-pères"
        },
        "bébé": {
            nature: "nom",
            root: "na",
            class: 2,
            demoId: 1,
            sgFr: "bébé",
            plFr: "bébés"
        },
                    
        "étudiant": {
            nature: "nom",
            root: "longeshwa",
            class: 1,
            demoId: 1,
            sgFr: "étudiant",
            plFr: "étudiante"
        },
        "étudiant": {
            nature: "nom",
            root: "longeshwa",
            class: 1,
            demoId: 1,
            sgFr: "étudiant",
            plFr: "étudiante"
        },
        "étudiant": {
            nature: "nom",
            root: "longeshwa",
            class: 1,
            demoId: 1,
            sgFr: "étudiant",
            plFr: "étudiante"
        },
        "étudiant": {
            nature: "nom",
            root: "longeshwa",
            class: 1,
            demoId: 1,
            sgFr: "étudiant",
            plFr: "étudiante"
        },
        "étudiant": {
            nature: "nom",
            root: "longeshwa",
            class: 1,
            demoId: 1,
            sgFr: "étudiant",
            plFr: "étudiante"
        },
        "étudiant": {
            nature: "nom",
            root: "longeshwa",
            class: 1,
            demoId: 1,
            sgFr: "étudiant",
            plFr: "étudiante"
        },
        "étudiant": {
            nature: "nom",
            root: "longeshwa",
            class: 1,
            demoId: 1,
            sgFr: "étudiant",
            plFr: "étudiante"
        },
        "étudiant": {
            nature: "nom",
            root: "longeshwa",
            class: 1,
            demoId: 1,
            sgFr: "étudiant",
            plFr: "étudiante"
        },
        "visiteur": {
            nature: "nom",
            root: "geni",
            class: 1,
            demoId: 1,
            sgFr: "visiteur",
            plFr: "visiteurs"
        },
        "visiteuse": {
            nature: "nom",
            root: "geni",
            class: 1,
            demoId: 1,
            sgFr: "visiteuse",
            plFr: "visiteuses"
        },
        "émployé": {
            nature: "nom",
            root: "kozi",
            class: 1,
            demoId: 1,
            sgFr: "émployé",
            plFr: "émployés"
        },
        "émployée": {
            nature: "nom",
            root: "kozi",
            class: 1,
            demoId: 1,
            sgFr: "émployée",
            plFr: "émployées"
        },
        "élève": {
            nature: "nom",
            root: "longeshwa",
            class: 1,
            demoId: 1,
            sgFr: "élève",
            plFr: "élèves"
        },
        "professeur": {
            "nature": "nom",
            "root": "longeshimukule",
            "class": 1,
            "demoId": 1,
            "sgFr": "professeur",
            "plFr": "professeurs"
        },
        "maître": {
                    "nature": "nom",
                    "root": "longeshi",
                    "class": 1,
                    "demoId": 1,
                    "sgFr": "maître",
                    "plFr": "maîtres"
        },
        "directrice": {
                         "nature": "nom",
                        "root": "londezi",
                        "class": 1,
                        "demoId": 1,
                        "sgFr": "directrice",
                        "plFr": "directrices"
        },
        "directeur": {
                        "nature": "nom",
                        "root": "londezi",
                        "class": 1,
                        "demoId": 1,
                        "sgFr": "directeur",
                        "plFr": "directeurs"
        },
  
         "camarade": {
                         "nature": "nom",
                        "root": "nani",
                        "class": 1,
                        "demoId": 1,
                        "sgFr": "camarade",
                        "plFr": "camarades"
         },
        "surveillant": {
                        "nature": "nom",
                        "root": "linzi",
                        "class": 1,
                        "demoId": 1,
                        "sgFr": "surveillant",
                        "plFr": "surveillants"
        }, 
  
        "formateur": {
                         "nature": "nom",
                        "root": "longeshi",
                        "class": 1,
                        "demoId": 1,
                        "sgFr": "formateur",
                        "plFr": "formateurs"
        },
        "apprenant": {
                        "nature": "nom",
                        "root": "longeshwa",
                        "class": 1,
                        "demoId": 1,
                        "sgFr": "apprenant",
                        "plFr": "apprenants"
        },
        "chercheur": {
                "nature": "nom",
                "root": "shondezi",
                "class": 1,
                "demoId": 1,
                "sgFr": "chercheur",
                "plFr": "chercheurs"
        },

         "diplômé": {
            
            "nature": "nom",
            "root": "dipolome",
            "class": 6,
            "demoId": 1,
            "sgFr": "diplômé",
            "plFr": "diplômés"
         },
           "stagiaire": {
            "nature": "nom",
            "root": "igiswa",
            "class": 1,
            "demoId": 1,
            "sgFr": "stagiaire",
            "plFr": "stagiaires"
        },
         "instituteur": {
            "nature": "nom",
            "root": "longeshi",
            "class": 1,
            "demoId": 1,
            "sgFr": "instituteur",
            "plFr": "instituteurs"
         },
        "médecin": {
            "nature": "nom",
            "root": "ngaliba",
            "class": 6,
            "demoId": 1,
            "sgFr": "médecin",
            "plFr": "médecins"
         },
        "docteur": {
            "nature": "nom",
            "root": "ngaliba",
            "class": 6,
            "demoId": 1,
            "sgFr": "docteur",
            "plFr": "docteurs"
         },
        "infirmier": {
            "nature": "nom",
            "root": "ngaliba",
            "class": 6,
            "demoId": 1,
            "sgFr": "infirmier",
            "plFr": "infirmiers"
         },
         "infirmière": {
            "nature": "nom",
            "root": "ngaliba",
            "class": 6,
            "demoId": 1,
            "sgFr": "infirmière",
            "plFr": "infirmières"
         },
         "patient": {
            "key": "patient",
            "nature": "nom",
            "root": "bande",
            "class": 1,
            "demoId": 1,
            "sgFr": "patient",
            "plFr": "patients"
        },
        "patiente": {
            "nature": "nom",
            "root": "bande",
            "class": 1,
            "demoId": 1,
            "sgFr": "patiente",
            "plFr": "patientes"
        },
        "pharmacien":  {
            "nature": "nom",
            "root": "ngaliba",
            "class": 6,
            "demoId": 1,
            "sgFr": "pharmacien",
            "plFr": "pharmaciens"
        },
        "chirurgien": {
            "nature": "nom",
            "root": "ngaliba ",
            "class": 6,
            "demoId": 1,
            "sgFr": "chirurgien",
            "plFr": "chirurgiens"
        },
         "dentiste": {
            "nature": "nom",
            "root": "ngaliba we meno",
            "class": 6,
            "demoId": 1,
            "sgFr": "dentiste",
            "plFr": "dentistes"
         },
        "psychologue": {
            "nature": "nom",
            "class": 1,
            "demoId": 1,
            "sgFr": "psychologue",
            "plFr": "psychologues"
        },
        "malade": {
            "nature": "nom",
            "root": "bande",
            "class": 1,
            "demoId": 1,
            "sgFr": "malade",
            "plFr": "malades"
            },
            "guérisseur": {
            "nature": "nom",
            "root": "ngaliba",
            "class": 6,
            "demoId": 1,
            "sgFr": "guérisseur",
            "plFr": "guérisseurs"
            },
            "assistant":{
            "nature": "nom",
            "root": "lolekezi",
            "class": 1,
            "demoId": 1,
            "sgFr": "assistant",
            "plFr": "assistants"
            },
             "spécialiste": {
            "nature": "nom",
             "root": "ngaliba mukule",
            "class": 1,
            "demoId": 1,
            "sgFr": "spécialiste",
            "plFr": "spécialistes"
            },
            "secouriste":{
            "nature": "nom",
             "root": "gwasi",
            "class": 1,
            "demoId": 1,
            "sgFr": "secouriste",
            "plFr": "secouristes"
            },
            "vendeur":{
            "nature": "nom",
            "root": "sakya",
            "class": 1,
            "demoId": 1,
            "sgFr": "vendeur",
            "plFr": "vendeurs"
            },
            "vendeuse":{
            "nature": "nom",
            "root": "sakya",
            "class": 1,
            "demoId": 1,
            "sgFr": "vendeuse",
            "plFr": "vendeuses"
            },
             "commerçant":{
            "nature": "nom",
            "root": "sakya",
            "class": 1,
            "demoId": 1,
            "sgFr": "commerçant",
            "plFr": "commerçants"
            },
            "commerçante": {
            "nature": "nom",
            "root": "sakya",
            "class": 1,
            "demoId": 1,
            "sgFr": "commerçante",
            "plFr": "commerçantes"
            },
             "agriculteur":{
            "nature": "nom",
            "root": "limi",
            "class": 1,
            "demoId": 1,
            "sgFr": "agriculteur",
            "plFr": "agriculteurs"
            },
           "cultivateur": {
            "nature": "nom",
            "root": "limi",
            "class": 1,
            "demoId": 1,
            "sgFr": "cultivateur",
            "plFr": "cultivateurs"
            },
             "chauffeur":{
            "nature": "nom",
            "root": "endeshi",
            "class": 1,
            "demoId": 1,
            "sgFr": "chauffeur",
            "plFr": "chauffeurs"
            },
             "conducteur":{
            "nature": "nom",
            "root": "endeshi",
            "class": 1,
            "demoId": 1,
            "sgFr": "conducteur",
            "plFr": "conducteurs"
            },
            "mécanicien":{
            "nature": "nom",
            "root": "fundi",
            "class": 6,
            "demoId": 1,
            "sgFr": "mécanicien",
            "plFr": "mécaniciens"
            },
             "policier":{
            "nature": "nom",
            "root": "hanzi",
            "class": 1,
            "demoId": 1,
            "sgFr": "policier",
            "plFr": "policiers"
            },
             "soldat":{
            "nature": "nom",
            "root": "hanzi",
            "class": 1,
            "demoId": 1,
            "sgFr": "soldat",
            "plFr": "soldats"
            },
            "juge": {
            "nature": "nom",
            "root": "nemyanda",
            "class": 13,
            "demoId": 1,
            "sgFr": "juge",
            "plFr": "juges"
            },
            "avocat":{
            "nature": "nom",
            "root": "tatuzi",
            "class": 1,
            "demoId": 1,
            "sgFr": "avocat",
            "plFr": "avocats"
            },
             "secrétaire":{
            "nature": "nom",
            "root": "salanzi",
            "class": 1,
            "demoId": 1,
            "sgFr": "secrétaire",
            "plFr": "secrétaires"
            },
            "comptable": {
            "nature": "nom",
            "root": "bali",
            "class": 1,
            "demoId": 1,
            "sgFr": "comptable",
            "plFr": "comptables"
            },
             "ingénieur":{
            "nature": "nom",
            "root": "fundi",
            "class": 6,
            "demoId": 1,
            "sgFr": "ingénieur",
            "plFr": "ingénieurs"
            },
            "technicien": {
            "nature": "nom",
            "root": "fundi",
            "class": 6,
            "demoId": 1,
            "sgFr": "technicien",
            "plFr": "techniciens"
            },
              "maçon":{
          
            "nature": "nom",
            "root": "fundi we mbanza",
            "class": 6,
            "demoId": 1,
            "sgFr": "maçon",
            "plFr": "maçons"
            },
            "électricien": {
            "nature": "nom",
            "root": "fundi we kahya",
            "class": 6,
            "demoId": 1,
            "sgFr": "électricien",
            "plFr": "électriciens"
            },
               "plombier":{
            "nature": "nom",
            "root": "fundi we mazi",
            "class": 6,
            "demoId": 1,
            "sgFr": "plombier",
            "plFr": "plombiers"
            },
             "couturier":{
           
            "nature": "nom",
            "root": "fundi we myenda",
            "class": 6,
            "demoId": 1,
            "sgFr": "couturier",
            "plFr": "couturiers"
            },
             "coiffeur":{
           
            "nature": "nom",
            "class": 1,
            "demoId": 1,
            "sgFr": "coiffeur",
            "plFr": "coiffeurs"
            },
             "artiste":{
            "nature": "nom",
            "root": "bishuzi",
            "class": 1,
            "demoId": 1,
            "sgFr": "artiste",
            "plFr": "artistes"
            },
            "musicien":{
            "nature": "nom",
            "root": "tenzi",
            "class": 1,
            "demoId": 1,
            "sgFr": "musicien",
            "plFr": "musiciens"
            },
              "journaliste":{
            "nature": "nom",
             "root": "",
            "class": 1,
            "demoId": 1,
            "sgFr": "journaliste",
            "plFr": "journalistes"
            },
              "entrepreneur":{
            "nature": "nom",
            "root": "anteplenele",
            "class": 6,
            "demoId": 1,
            "sgFr": "entrepreneur",
            "plFr": "entrepreneurs"
            },
            "responsable":{
            "nature": "nom",
            "class": 1,
            "demoId": 1,
            "sgFr": "responsable",
            "plFr": "responsables"
            },
            "gestionnaire":{
            "nature": "nom",
            "root": "lumbuzi",
            "class": 1,
            "demoId": 1,
            "sgFr": "gestionnaire",
            "plFr": "gestionnaires"
            },
             "caissier":{
            "nature": "nom",
             "root": "bikizi",
            "class": 1,
            "demoId": 1,
            "sgFr": "caissier",
            "plFr": "caissiers"
            },
             "serveur":{
            "nature": "nom",
            "root": "kozi",
            "class": 1,
            "demoId": 1,
            "sgFr": "serveur",
            "plFr": "serveurs"
            },
            "président":{
            "nature": "nom",
            "root": "Shami",
            "class": 6,
            "demoId": 1,
            "sgFr": "président",
            "plFr": "présidents"
            },
             "ministre": {
           
             "nature": "nom",
            "root": "mukulu ",
            "class": 1,
            "demoId": 1,
            "sgFr": "ministre",
            "plFr": "ministres"
            },
             "député":{
            "nature": "nom",
            "root": "nyemu",
            "class": 1,
            "demoId": 1,
            "sgFr": "député",
            "plFr": "députés"
            },
             "gouverneur":{
            "nature": "nom",
            "root": "lumbuzi",
            "class": 1,
            "demoId": 1,
            "sgFr": "gouverneur",
            "plFr": "gouverneurs"
            },
            "maire": {
            "nature": "nom",
            "root": "lumbuzi",
            "class": 1,
            "demoId": 1,
            "sgFr": "maire",
            "plFr": "maires"
            },
             "roi": {
            "nature": "nom",
            "root": "koolo",
            "class": 6,
            "demoId": 1,
            "sgFr": "roi",
            "plFr": "rois"
            },
             "reine": {
            "nature": "nom",
            "root": "kolo mukazi",
            "class": 1,
            "demoId": 1,
            "sgFr": "reine",
            "plFr": "reines"
            },
            "chef": {
            
            "nature": "nom",
            "root": "shami",
            "class": 6,
            "demoId": 1,
            "sgFr": "chef",
            "plFr": "chefs"
            },
             "leader": {
            "nature": "nom",
            "root": "lombwe",
            "class": 1,
            "demoId": 1,
            "sgFr": "leader",
            "plFr": "leaders"
            },
            "autorité": {
            "nature": "nom",
             "root": "nyemu",
            "class": 1,
            "demoId": 1,
            "sgFr": "autorité",
            "plFr": "autorités"
            },
            "citoyen": {
            "nature": "nom",
            "root": "nembuga",
            "class": 13,
            "demoId": 1,
            "sgFr": "citoyen",
            "plFr": "citoyens"
            },
             "habitant":{
           
            "nature": "nom",
            "root": "ikezi",
            "class": 1,
            "demoId": 1,
            "sgFr": "habitant",
            "plFr": "habitants"
            },
            "population":{
            
            "nature": "nom",
            "class": 18,
             "root": "bandu",
            "demoId": 1,
            "sgFr": "population",
            "plFr": "populations"
            },
            "peuple": {
           
            "nature": "nom",
            "root": "benekibalo",
            "class": 13,
            "demoId": 1,
            "sgFr": "peuple",
            "plFr": "peuples"
            },
           "communauté": {
            
            "nature": "nom",
            "class": 1,
            "demoId": 1,
            "sgFr": "communauté",
            "plFr": "communautés"
            },
            "témoin": {
           
            "nature": "nom",
            "class": 1,
            "demoId": 1,
            "sgFr": "témoin",
            "plFr": "témoins"
            },
             "suspect":{
           
            "nature": "nom",
            "class": 1,
            "demoId": 1,
            "sgFr": "suspect",
            "plFr": "suspects"
            },
            "victime": {
           
            "nature": "nom",
            "root": "teme",
            "class": 1,
            "demoId": 1,
            "sgFr": "victime",
            "plFr": "victimes"
            },
             "prisonnier":{
           
            "nature": "nom",
            "root": "loke",
            "class": 1,
            "demoId": 1,
            "sgFr": "prisonnier",
            "plFr": "prisonniers"
            },
             "accusé":{
           
            "nature": "nom",
            "class": 1,
            "demoId": 1,
            "sgFr": "accusé",
            "plFr": "accusés"
            },
            "personne": {
           
            "nature": "nom",
            "root": "ndu",
            "class": 1,
            "demoId": 1,
            "sgFr": "personne",
            "plFr": "personnes"
            },
            "individu": {
           
            "nature": "nom",
            "root": "ndu",
            "class": 1,
            "demoId": 1,
            "sgFr": "individu",
            "plFr": "individus"
            },
           "humain": {
            
            "nature": "nom",
            "root": "ndu",
            "class": 1,
            "demoId": 1,
            "sgFr": "humain",
            "plFr": "humains"
            },
            "adulte": {
           
            "nature": "nom",
            "root": "kule",
            "class": 1,
            "demoId": 1,
            "sgFr": "adulte",
            "plFr": "adultes"
            },
             "jeune":{
           
            "nature": "nom",
            "root": "kwambaga",
            "class": 1,
            "demoId": 1,
            "sgFr": "jeune",
            "plFr": "jeunes"
            },
            "adolescent": {
           
            "nature": "nom",
            "root": "shiginya",
            "class": 14,
            "demoId": 1,
            "sgFr": "adolescent",
            "plFr": "adolescents"
            },
             "vieillard":{
           
            "nature": "nom",
            "root": "koto",
            "class": 1,
            "demoId": 1,
            "sgFr": "vieillard",
            "plFr": "vieillards"
            },
             "migrant":{
           
            "nature": "nom",
            "root": "bunga",
            "class": 1,
            "demoId": 1,
            "sgFr": "migrant",
            "plFr": "migrants"
            },
            "réfugié": {
                "nature": "nom",
            "root": "bunga",
            "class": 1,
            "demoId": 1,
            "sgFr": "réfugié",
            "plFr": "réfugiés"
            },
             "ami proche":{
           
            "nature": "nom",
            "root": "lunda",
            "class": 1,
            "demoId": 1,
            "sgFr": "ami proche",
            "plFr": "amis"
            },
            "ennemi":{
           
            "nature": "nom",
            "root": "goma",
            "class": 1,
            "demoId": 1,
            "sgFr": "ennemi",
            "plFr": "proches"
            },
            "rival": {
           
            "nature": "nom",
            "root": "goma",
            "class": 1,
            "demoId": 1,
            "sgFr": "rival",
            "plFr": "ennemis"
            },
             "membre":{
           
            "nature": "nom",
            "root": "tembwe",
            "class": 1,
            "demoId": 1,
            "sgFr": "membre",
            "plFr": "rivaux"
            },
            "représentant": {
           
            "nature": "nom",
            "root": "tembwe",
            "class": 1,
            "demoId": 1,
            "sgFr": "représentant",
            "plFr": "membres"
            },
           "volontaire": {
            
            "nature": "nom",
            "class": 1,
             "root": "itoli",
            "demoId": 1,
            "sgFr": "volontaire",
            "plFr": "représentants"
            },
            "candidat": {
            "nature": "nom",
            "root": "shobolwa",
            "class": 1,
            "demoId": 1,
            "sgFr": "candidat",
            "plFr": "volontaires"
            },
           "gagnant": {
            "nature": "nom",
            "root": "binganyi",
            "class": 1,
            "demoId": 1,
            "sgFr": "gagnant",
            "plFr": "candidats"
            },
            "perdant": {
            "nature": "nom",
            "root": "buli",
            "class": 1,
            "demoId": 1,
            "sgFr": "perdant",
            "plFr": "gagnants"
            },
             "champion": {
            "nature": "nom",
            "root": "binganyi",
            "class": 1,
            "demoId": 1,
            "sgFr": "champion",
            "plFr": "perdants"
            },
            "héros": {
            "nature": "nom",
            "root": "fwa",
            "class": 7,
            "demoId": 9,
            "sgFr": "héros",
            "plFr": "champions"
            },
          
           "confrère ": {
            "nature": "nom",
            "root": "yokonani",
            "class": 1,
            "demoId": 1,
            "sgFr": "confrère ",
            "plFr": "confrères"
            },
              "consœur ":{
            "nature": "nom",
            "root": "linani",
            "class": 1,
            "demoId": 1,
            "sgFr": "consœur ",
            "plFr": "consoeurs"
            },
              "maison": {
            nature: "nom",
            root: "mbanza",
            class: 11,
            demoId: 20,
            sgFr: "maison",
            plFr: "maisons"
        },
              "chercheur": {
            nature: "nom",
            root: "londezi",
            class: 1,
            demoId: 1,
            sgFr: "chercheur",
            plFr: "chercheurs"
        },
              "porte": {
            nature: "nom",
            root: "lango",
            class: 14,
            demoId: 20,
            sgFr: "porte",
            plFr: "portes"
        },
              "fenêtre": {
            nature: "nom",
            root: "dilisha",
            class: 11,
            demoId: 20,
            sgFr: "fenêtre",
            plFr: "fenêtres"
        },
              "toit": {
            nature: "nom",
            root: "njanja",
            class: 22,
            demoId: 22,
            sgFr: "toit",
            plFr: "toits"
        },
              "clé": {
            nature: "nom",
            root: "fungulo",
            class: 11,
            demoId: 22,
            sgFr: "clé",
            plFr: "clés"
        },
              "clôture": {
            nature: "nom",
            root: "pango",
            class: 25,
            demoId: 22,
            sgFr: "clôture",
            plFr: "clôtures"
        },
              "toilette": {
            nature: "nom",
            root: "maambwe",
            class: 18,
            demoId: 20,
            sgFr: "toilette",
            plFr: "toilettes"
        },
              "salle de bain": {
            nature: "nom",
            root: "humba kye kuishuka",
            class: 7,
            demoId: 16,
            sgFr: "salle de bain",
            plFr: "salle de bains"
        },
              "cuisine": {
            nature: "nom",
            root: "tekelo",
            class: 7,
            demoId: 16,
            sgFr: "cuisine",
            plFr: "cuisines"
        },
              "salon": {
            nature: "nom",
            root: "luli",
            class: 7,
            demoId: 16,
            sgFr: "salon",
            plFr: "salons"
        },
              "chammbre": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "ventilateur": {
            nature: "nom",
            root: "pepeyo",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "radio": {
            nature: "nom",
            root: "laka",
            class: 24,
            demoId: 16,
            sgFr: "radio",
            plFr: "radios"
        },
              "télévision": {
            nature: "nom",
            root: "",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "miroir": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "lampe": {
            nature: "nom",
            root: "tala",
            class: 11,
            demoId: 16,
            sgFr: "lampe",
            plFr: "lampes"
        },
              "rideau": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "bureau": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "table": {
            nature: "nom",
            root: "shasha",
            class: 5,
            demoId: 16,
            sgFr: "table",
            plFr: "tables"
        },
              "drap": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "lit": {
            nature: "nom",
            root: "ngingo",
            class: 11,
            demoId: 20,
            sgFr: "lit",
            plFr: "lits"
        },
              "casserole": {
            nature: "nom",
            root: "nyungu",
            class: 11,
            demoId: 20,
            sgFr: "casserole",
            plFr: "casseroles"
        },
              "marmite": {
            nature: "nom",
            root: "nyungu",
            class: 11,
            demoId: 20,
            sgFr: "marmite",
            plFr: "marmites"
        },
              "couteau": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "lit": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "fouchette": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "cuillére": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "verre": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "verre": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "tasse": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "assiette": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "sel": {
            nature: "nom",
            root: "mulungwa",
            class: 18,
            demoId: 20,
            sgFr: "sel",
            plFr: "sels"
        },
              "huile": {
            nature: "nom",
            root: "mavuta",
            class: 7,
            demoId: 29,
            sgFr: "huile",
            plFr: "huiles"
        },
              "viande": {
            nature: "nom",
            root: "nyama",
            class: 18,
            demoId: 20,
            sgFr: "viande",
            plFr: "viandes"
        },
              "poisson": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "poisson",
            plFr: "poissons"
        },
              "poulet": {
            nature: "nom",
            root: "ngoko",
            class: 11,
            demoId: 20,
            sgFr: "poulet",
            plFr: "poulets"
        },
              "légume": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "légume",
            plFr: "légumes"
        },
              "fruit": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "fruit",
            plFr: "fruits"
        },
              "tomate": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "tomate",
            plFr: "tomates"
        },
              "oigonon": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "oigonon",
            plFr: "oigonons"
        },
              "repas": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "repas",
            plFr: "repas"
        },
              "congélateur": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "congélateur",
            plFr: "congélateurs"
        },
              "brasereau": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "brasereau",
            plFr: "brasereaux"
        },
              "feu": {
            nature: "nom",
            root: "hya",
            class: 5,
            demoId: 5,
            sgFr: "feu",
            plFr: "feux"
        },
              "braise": {
            nature: "nom",
            root: "makala",
            class: 18,
            demoId: 20,
            sgFr: "braise",
            plFr: "braises"
        },
              "foufou": {
            nature: "nom",
            root: "sima",
            class: 14,
            demoId: 20,
            sgFr: "foufou",
            plFr: "foufous"
        },
              
              "riz": {
            nature: "nom",
            root: "muchele",
            class: 18,
            demoId: 20,
            sgFr: "riz",
            plFr: "riz"
        },
              "farine": {
            nature: "nom",
            root: "mufu",
            class: 18,
            demoId: 26,
            sgFr: "farine",
            plFr: "farines"
        },
              "pain": {
            nature: "nom",
            root: "kate",
            class: 14,
            demoId: 20,
            sgFr: "pain",
            plFr: "pains"
        },
              "sucre": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "sucre",
            plFr: "sucres"
        },
              "gobelet": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "gobelet",
            plFr: "gobelets"
        },
              "feulles de manioc": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "feulles de manioc",
            plFr: "feulles de maniocs"
        },
              "mangue": {
            nature: "nom",
            root: "embe",
            class: 20,
            demoId: 39,
            sgFr: "mangue",
            plFr: "mangues"
        },
              "lait": {
            nature: "nom",
            root: "mata",
            class: 18,
            demoId: 29,
            sgFr: "lait",
            plFr: "laits"
        },
              "beignet": {
            nature: "nom",
            root: "tumbula",
            class: 7,
            demoId: 16,
            sgFr: "beignet",
            plFr: "beignets"
        },
              "orange": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "orange",
            plFr: "oranges"
        },
              "courge": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "courge",
            plFr: "courges"
        },
              "amarante": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "amarante",
            plFr: "amarantes"
        },
              "manioc": {
            nature: "nom",
            root: "mbati",
            class: 14,
            demoId: 16,
            sgFr: "manioc",
            plFr: "maniocs"
        },
              "haricot": {
            nature: "nom",
            root: "mbalanga",
            class: 18,
            demoId: 20,
            sgFr: "haricot",
            plFr: "haricots"
        },
              "chaussure": {
            nature: "nom",
            root: "lato",
            class: 7,
            demoId: 16,
            sgFr: "chaussure",
            plFr: "chaussures"
        },
              "robe": {
            nature: "nom",
            root: "kanzu",
            class: 11,
            demoId: 20,
            sgFr: "robe",
            plFr: "robes"
        },
              "pantalon": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "pantalon",
            plFr: "pantalons"
        },
              "chemise": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chemise",
            plFr: "chemises"
        },
              "vêtement": {
            nature: "nom",
            root: "enda",
            class: 20,
            demoId: 20,
            sgFr: "vêtement",
            plFr: "vêtements"
        },
              "bassin": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "bassin",
            plFr: "bassins"
        },
              "peigne": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "peigne",
            plFr: "peignes"
        },
              "seau": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "serviette": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "monnaie": {
            nature: "nom",
            root: " boozo",
            class: 18,
            demoId: 43,
            sgFr: "monnaie",
            plFr: "monnaie"
        },
              "argent": {
            nature: "nom",
            root: "boozo",
            class: 18,
            demoId: 43,
            sgFr: "argent",
            plFr: "argents"
        },
              "sac": {
            nature: "nom",
            root: "sunzu",
            class: 10,
            demoId: 25,
            sgFr: "sac",
            plFr: "sacs"
        },
              "ampoule": {
            nature: "nom",
            root: "talangisha",
            class: 7,
            demoId: 16,
            sgFr: "ampoule",
            plFr: "ampoules"
        },
              "ordinateur": {
            nature: "nom",
            root: "mangu",
            class: 7,
            demoId: 16,
            sgFr: "ordinateur",
            plFr: "ordinateurs"
        },
              "montre": {
            nature: "nom",
            root: "langa zuba",
            class: 7,
            demoId: 16,
            sgFr: "montre",
            plFr: "montres"
        },
              "horloge": {
            nature: "nom",
            root: "langa zuba",
            class: 7,
            demoId: 16,
            sgFr: "horloge",
            plFr: "horloges"
        },
              "chargeur": {
            nature: "nom",
            root: "hambisi",
            class: 7,
            demoId: 16,
            sgFr: "chargeur",
            plFr: "chargeurs"
        },
              "téléphone": {
            nature: "nom",
            root: "mbilambila",
            class: 5,
            demoId: 5,
            sgFr: "téléphone",
            plFr: "téléphones"
        },
              "chapeau": {
            nature: "nom",
            root: "sika",
            class: 7,
            demoId: 16,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "soulier": {
            nature: "nom",
            root: "lato",
            class: 7,
            demoId: 16,
            sgFr: "soulier",
            plFr: "souliers"
        },
              "chaussure": {
            nature: "nom",
            root: "lato",
            class: 7,
            demoId: 16,
            sgFr: "chaussure",
            plFr: "chaussures"
        },
              "savon": {
            nature: "nom",
            root: "sabuni",
            class: 11,
            demoId: 20,
            sgFr: "savon",
            plFr: "savons"
        },
              "bus": {
            nature: "nom",
            root: "mamala",
            class: 7,
            demoId: 16,
            sgFr: "bus",
            plFr: "buss"
        },
              "transport": {
            nature: "nom",
            root: "heeko",
            class: 11,
            demoId: 25,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "facture": {
            nature: "nom",
            root: "lomboso",
            class: 7,
            demoId: 16,
            sgFr: "facture",
            plFr: "factures"
        },
              "prix": {
            nature: "nom",
            root: "shingo",
            class: 7,
            demoId: 16,
            sgFr: "prix",
            plFr: "prix"
        },
              "magasin": {
            nature: "nom",
            root: "mbanza ye masakya",
            class: 11,
            demoId: 22,
            sgFr: "magasin",
            plFr: "magasins"
        },
              "boutique": {
            nature: "nom",
            root: "mbanza ye masakya",
            class: 11,
            demoId: 22,
            sgFr: "boutique",
            plFr: "boutiques"
        },
              "marché": {
            nature: "nom",
            root: "buga",
            class: 5,
            demoId: 5,
            sgFr: "marché",
            plFr: "marchés"
        },
              "stylo": {
            nature: "nom",
            root: "salo",
            class: 5,
            demoId: 5,
            sgFr: "chammbre",
            plFr: "chammbres"
        },
              "photo": {
            nature: "nom",
            root: "zunguza",
            class: 7,
            demoId: 16,
            sgFr: "photo",
            plFr: "photos"
        },
              "document": {
            nature: "nom",
            root: "sendo",
            class: 25,
            demoId: 41,
            sgFr: "document",
            plFr: "documents"
        },
              "banque": {
            nature: "nom",
            root: "bikilo",
            class: 25,
            demoId: 42,
            sgFr: "banque",
            plFr: "banques"
        },
              "hôpital": {
            nature: "nom",
            root: "same",
            class: 10,
            demoId: 22,
            sgFr: "hôpital",
            plFr: "hôpitaux"
        },
              "école": {
            nature: "nom",
            root: "malongesho",
            class: 18,
            demoId: 29,
            sgFr: "école",
            plFr: "écoles"
        },
              "travail": {
            nature: "nom",
            root: "kolwa",
            class: 14,
            demoId: 25,
            sgFr: "travail",
            plFr: "travaux"
        },
              "pays": {
            nature: "nom",
            root: "balo",
            class: 7,
            demoId: 16,
            sgFr: "pays",
            plFr: "pays"
        },
              "ville": {
            nature: "nom",
            root: "mbuga",
            class: 11,
            demoId: 25,
            sgFr: "ville",
            plFr: "villes"
        },
              "route": {
            nature: "nom",
            root: "sheboshebo",
            class: 24,
            demoId: 42,
            sgFr: "route",
            plFr: "routes"
        },
              "vélo": {
            nature: "nom",
            root: "ndebendebe",
            class: 11,
            demoId: 22,
            sgFr: "vélo",
            plFr: "vélos"
        },
              "voiture": {
            nature: "nom",
            root: "mamala",
            class: 7,
            demoId: 16,
            sgFr: "voiture",
            plFr: "voiture"
        },
              "moto": {
            nature: "nom",
            root: "tukutuku",
            class: 11,
            demoId: 22,
            sgFr: "moto",
            plFr: "motos"
        },
        // DERIVES DES VERBES - DERIVES DES VERBES //
        ///////////========================================///////
        //=================================================///////
        "senteur": {
    "nature": "nom",
    "root": "bayi",
    "demoId": 1,
    "class": 1,
    "sgFr": "senteur",
    "plFr": "senteurs"
  },
  "voyant": {
    "nature": "nom",
    "root": "boni",
    "demoId": 1,
    "class": 1,
    "sgFr": "voyant",
    "plFr": "voyants"
  },
  "visible": {
    "nature": "nom",
    "root": "boneki",
    "demoId": 1,
    "class": 1,
    "sgFr": "visible",
    "plFr": "visibles"
  },
  "perdant": {
    "nature": "nom",
    "root": "buli",
    "demoId": 1,
    "class": 1,
    "sgFr": "perdant",
    "plFr": "perdants"
  },
  "fabricant": {
    "nature": "nom",
    "root": "bumbi",
    "demoId": 1,
    "class": 1,
    "sgFr": "fabricant",
    "plFr": "fabricants"
  },
  "remerciant": {
    "nature": "nom",
    "root": "beuli",
    "demoId": 1,
    "class": 1,
    "sgFr": "remerciant",
    "plFr": "remerciants"
  },
  "capable": {
    "nature": "nom",
    "root": "basi",
    "demoId": 1,
    "class": 1,
    "sgFr": "capable",
    "plFr": "capables"
  },
  "étant": {
    "nature": "nom",
    "root": "bi",
    "demoId": 1,
    "class": 1,
    "sgFr": "étant",
    "plFr": "étants"
  },
  "changeur": {
    "nature": "nom",
    "root": "balanduli",
    "demoId": 1,
    "class": 1,
    "sgFr": "changeur",
    "plFr": "changeurs"
  },
  "changé": {
    "nature": "nom",
    "root": "balanduki",
    "demoId": 1,
    "class": 1,
    "sgFr": "changé",
    "plFr": "changés"
  },
  "frappeur": {
    "nature": "nom",
    "root": "bandi",
    "demoId": 1,
    "class": 1,
    "sgFr": "frappeur",
    "plFr": "frappeurs"
  },
  "compteur": {
    "nature": "nom",
    "root": "bali",
    "demoId": 1,
    "class": 1,
    "sgFr": "compteur",
    "plFr": "compteurs"
  },
  "appelant": {
    "nature": "nom",
    "root": "belangili",
    "demoId": 1,
    "class": 1,
    "sgFr": "appelant",
    "plFr": "appelants"
  },
  "metteur": {
    "nature": "nom",
    "root": "biki",
    "demoId": 1,
    "class": 1,
    "sgFr": "metteur",
    "plFr": "metteurs"
  },
  "cacheur": {
    "nature": "nom",
    "root": "bishi",
    "demoId": 1,
    "class": 1,
    "sgFr": "cacheur",
    "plFr": "cacheurs"
  },
  "diseur": {
    "nature": "nom",
    "root": "bwili",
    "demoId": 1,
    "class": 1,
    "sgFr": "diseur",
    "plFr": "diseurs"
  },
  "lutteur": {
    "nature": "nom",
    "root": "bani",
    "demoId": 1,
    "class": 1,
    "sgFr": "lutteur",
    "plFr": "lutteurs"
  },
  "appelé": {
    "nature": "nom",
    "root": "belangilwi",
    "demoId": 1,
    "class": 1,
    "sgFr": "appelé",
    "plFr": "appelés"
  },
  "courbeur": {
    "nature": "nom",
    "root": "mubindi",
    "demoId": 1,
    "class": 1,
    "sgFr": "courbeur",
    "plFr": "courbeurs"
  },
  "emprisonné": {
    "nature": "nom",
    "root": "bohani",
    "demoId": 1,
    "class": 1,
    "sgFr": "emprisonné",
    "plFr": "emprisonnés"
  },

  "sensation": {
    "nature": "nom",
    "root": "mabayo",
    "demoId": 35,
    "class": 18,
    "sgFr": "sensation",
    "plFr": "sensations"
  },
  "vue": {
    "nature": "nom",
    "root": "maboni",
    "demoId": 35,
    "class": 18,
    "sgFr": "vue",
    "plFr": "vues"
  },
  "apparence": {
    "nature": "nom",
    "root": "maboneko",
    "demoId": 35,
    "class": 18,
    "sgFr": "apparence",
    "plFr": "apparences"
  },
  "perte": {
    "nature": "nom",
    "root": "bulo",
    "demoId": 26,
    "class": 11,
    "sgFr": "perte",
    "plFr": "pertes"
  },
  "fabrication": {
    "nature": "nom",
    "root": "bumbo",
    "demoId": 26,
    "class": 11,
    "sgFr": "fabrication",
    "plFr": "fabrications"
  },
  "création": {
    "nature": "nom",
    "root": "bumbo",
    "demoId": 26,
    "class": 11,
    "sgFr": "création",
    "plFr": "créations"
  },
  "remerciement": {
    "nature": "nom",
    "root": "beulo",
    "demoId": 26,
    "class": 8,
    "sgFr": "remerciement",
    "plFr": "remerciements"
  },
  "frappe": {
    "nature": "nom",
    "root": "bando",
    "demoId": 26,
    "class": 8,
    "sgFr": "frappe",
    "plFr": "frappes"
  },
  "comptage": {
    "nature": "nom",
    "root": "mabalo",
    "demoId": 26,
    "class": 8,
    "sgFr": "comptage",
    "plFr": "comptages"
  },
  "mise": {
    "nature": "nom",
    "root": "mabiko",
    "demoId": 35,
    "class": 18,
    "sgFr": "mise",
    "plFr": "mises"
  },
  "parole": {
    "nature": "nom",
    "root": "mabwilo",
    "demoId": 35,
    "class": 18,
    "sgFr": "parole",
    "plFr": "paroles"
  },
  "lutte": {
    "nature": "nom",
    "root": "bano",
    "demoId": 26,
    "class": 8,
    "sgFr": "lutte",
    "plFr": "luttes"
  },
   "parent": {
    "nature": "nom",
    "root": "busi",
    "demoId": 1,
    "class": 1,
    "sgFr": "parent",
    "plFr": "parents"
  },
  "enfantement": {
    "nature": "nom",
    "root": "mabuto",
    "demoId": 26,
    "class": 18,
    "sgFr": "enfantement",
    "plFr": "enfantements"
  },
  "naissance": {
    "nature": "nom",
    "root": "two",
    "demoId": 28,
    "class": 10,
    "sgFr": "naissance",
    "plFr": "naissances"
  },
  "soin": {
    "nature": "nom",
    "root": "kwo",
    "demoId": 28,
    "class": 10,
    "sgFr": "soin",
    "plFr": "soins"
  },
  "conduite": {
    "nature": "nom",
    "root": "maendesho",
    "demoId": 26,
    "class": 18,
    "sgFr": "conduite",
    "plFr": "conduites"
  },
  "menace": {
    "nature": "nom",
    "root": "funo",
    "demoId": 26,
    "class": 8,
    "sgFr": "menace",
    "plFr": "menaces"
  },
  "sortie": {
    "nature": "nom",
    "root": "mafumo",
    "demoId": 35,
    "class": 18,
    "sgFr": "sortie",
    "plFr": "sorties"
  },
  "piétinement": {
    "nature": "nom",
    "root": "mafwenelo",
    "demoId": 35,
    "class": 18,
    "sgFr": "piétinement",
    "plFr": "piétinements"
  },
  "mort": {
    "nature": "nom",
    "root": "mafwo",
    "demoId": 35,
    "class": 18,
    "sgFr": "mort",
    "plFr": "morts"
  },
  "agenouillant": {
    "nature": "nom",
    "root": "fukami",
    "demoId": 1,
    "class": 1,
    "sgFr": "agenouillant",
    "plFr": "agenouillants"
  },
  "contraignant": {
    "nature": "nom",
    "root": "fyeetelezi",
    "demoId": 1,
    "class": 1,
    "sgFr": "contraignant",
    "plFr": "contraignants"
  },
  "faiseur": {
    "nature": "nom",
    "root": "gili",
    "demoId": 1,
    "class": 1,
    "sgFr": "faiseur",
    "plFr": "faiseurs"
  },
  "foetus": {
    "nature": "nom",
    "root": "twi",
    "demoId": 26,
    "class": 10,
    "sgFr": "foetus",
    "plFr": "foetus"
  },
  "soignant": {
    "nature": "nom",
    "root": "buki",
    "demoId": 1,
    "class": 1,
    "sgFr": "soignant",
    "plFr": "soignants"
  },
  "conducteur": {
    "nature": "nom",
    "root": "endeshi",
    "demoId": 1,
    "class": 1,
    "sgFr": "conducteur",
    "plFr": "conducteurs"
  },
  "menaçant": {
    "nature": "nom",
    "root": "funi",
    "demoId": 1,
    "class": 1,
    "sgFr": "menaçant",
    "plFr": "menaçants"
  },
  "sortant": {
    "nature": "nom",
    "root": "fumi",
    "demoId": 1,
    "class": 1,
    "sgFr": "sortant",
    "plFr": "sortants"
  },
  "piétineur": {
    "nature": "nom",
    "root": "fweneli",
    "demoId": 1,
    "class": 1,
    "sgFr": "piétineur",
    "plFr": "piétineurs"
  },
  "mourant": {
    "nature": "nom",
    "root": "fwa",
    "demoId": 1,
    "class": 1,
    "sgFr": "mourant",
    "plFr": "mourants"
  },
  "pardonneur": {
    "nature": "nom",
    "root": "fwilililuse",
    "demoId": 1,
    "class": 1,
    "sgFr": "pardonneur",
    "plFr": "pardonneurs"
  },
  "agenouillement": {
    "nature": "nom",
    "root": "mafukamo",
    "demoId": 35,
    "class": 18,
    "sgFr": "agenouillement",
    "plFr": "agenouillements"
  },
  "obligation": {
    "nature": "nom",
    "root": "fyeetelezo",
    "demoId": 26,
    "class": 14,
    "sgFr": "obligation",
    "plFr": "obligations"
  },
  "action": {
    "nature": "nom",
    "root": "gilo",
    "demoId": 26,
    "class": 14,
    "sgFr": "action",
    "plFr": "actions"
  },
  
  "efforteur": {
    "nature": "nom",
    "root": "gilamisi",
    "demoId": 1,
    "class": 1,
    "sgFr": "efforteur",
    "plFr": "efforteurs"
  },
  "remplaçant": {
    "nature": "nom",
    "root": "gomboli",
    "demoId": 1,
    "class": 1,
    "sgFr": "remplaçant",
    "plFr": "remplaçants"
  },
  "remplacement": {
    "nature": "nom",
    "root": "gombolo",
    "demoId": 26,
    "class": 8,
    "sgFr": "remplacement",
    "plFr": "remplacements"
  },
  "mariage": {
    "nature": "nom",
    "root": "gondano",
    "demoId": 10,
    "class": 10,
    "sgFr": "mariage",
    "plFr": "mariages"
  },
  "achat": {
    "nature": "nom",
    "root": "magulo",
    "demoId": 35,
    "class": 18,
    "sgFr": "achat",
    "plFr": "achats"
  },
  "vente": {
    "nature": "nom",
    "root": "maguzo",
    "demoId": 35,
    "class": 18,
    "sgFr": "vente",
    "plFr": "ventes"
  },
  "prise": {
    "nature": "nom",
    "root": "gwato",
    "demoId": 11,
    "class": 8,
    "sgFr": "prise",
    "plFr": "prises"
  },
  "saisie": {
    "nature": "nom",
    "root": "gwatilizo",
    "demoId": 11,
    "class": 8,
    "sgFr": "saisie",
    "plFr": "saisies"
  },
  "gloire": {
    "nature": "nom",
    "root": "hanjo",
    "demoId": 11,
    "class": 11,
    "sgFr": "gloire",
    "plFr": "gloires"
  },
  "glorification": {
    "nature": "nom",
    "root": "mahanjo",
    "demoId": 35,
    "class": 18,
    "sgFr": "glorification",
    "plFr": "glorifications"
  },
  "gonflement": {
    "nature": "nom",
    "root": "mahemo",
    "demoId": 35,
    "class": 18,
    "sgFr": "gonflement",
    "plFr": "gonflements"
  },
  "poussée": {
    "nature": "nom",
    "root": "muhiliko",
    "demoId": 26,
    "class": 8,
    "sgFr": "poussée",
    "plFr": "poussées"
  },
  "don": {
    "nature": "nom",
    "root": "mahano",
    "demoId": 35,
    "class": 18,
    "sgFr": "don",
    "plFr": "dons"
  },
  "réception": {
    "nature": "nom",
    "root": "heebwo",
    "demoId": 11,
    "class": 11,
    "sgFr": "réception",
    "plFr": "réceptions"
  },
  "invocation": {
    "nature": "nom",
    "root": "haahamo",
    "demoId": 26,
    "class": 14,
    "sgFr": "invocation",
    "plFr": "invocations"
  },

  "effort": {
    "nature": "nom",
    "root": "gilamiso",
    "demoId": 26,
    "class": 14,
    "sgFr": "effort",
    "plFr": "efforts"
  },
  "mariant": {
    "nature": "nom",
    "root": "gondani",
    "demoId": 1,
    "class": 1,
    "sgFr": "mariant",
    "plFr": "mariants"
  },
  "acheteur": {
    "nature": "nom",
    "root": "guli",
    "demoId": 1,
    "class": 1,
    "sgFr": "acheteur",
    "plFr": "acheteurs"
  },
  "vendeur": {
    "nature": "nom",
    "root": "guzi",
    "demoId": 1,
    "class": 1,
    "sgFr": "vendeur",
    "plFr": "vendeurs"
  },
  "preneur": {
    "nature": "nom",
    "root": "gwati",
    "demoId": 1,
    "class": 1,
    "sgFr": "preneur",
    "plFr": "preneurs"
  },
  "saisisseur": {
    "nature": "nom",
    "root": "gwatilizi",
    "demoId": 1,
    "class": 1,
    "sgFr": "saisisseur",
    "plFr": "saisisseurs"
  },
  "glorificateur": {
    "nature": "nom",
    "root": "hanji",
    "demoId": 1,
    "class": 1,
    "sgFr": "glorificateur",
    "plFr": "glorificateurs"
  },
  "gonfleur": {
    "nature": "nom",
    "root": "hemi",
    "demoId": 1,
    "class": 1,
    "sgFr": "gonfleur",
    "plFr": "gonfleurs"
  },
  "pousseur": {
    "nature": "nom",
    "root": "hiliki",
    "demoId": 1,
    "class": 1,
    "sgFr": "pousseur",
    "plFr": "pousseurs"
  },
  "donneur": {
    "nature": "nom",
    "root": "hani",
    "demoId": 1,
    "class": 1,
    "sgFr": "donneur",
    "plFr": "donneurs"
  },
  "receveur": {
    "nature": "nom",
    "root": "heebwi",
    "demoId": 1,
    "class": 1,
    "sgFr": "receveur",
    "plFr": "receveurs"
  },
  "invoqueur": {
    "nature": "nom",
    "root": "haahami",
    "demoId": 1,
    "class": 1,
    "sgFr": "invoqueur",
    "plFr": "invoqueurs"
  },
  "bénédiction": {
    "nature": "nom",
    "root": "helelo",
    "demoId": 26,
    "class": 8,
    "sgFr": "bénédiction",
    "plFr": "bénédictions"
  },
  "descente": {
    "nature": "nom",
    "root": "hingo",
    "demoId": 26,
    "class": 8,
    "sgFr": "descente",
    "plFr": "descentes"
  },
  "portage": {
    "nature": "nom",
    "root": "maheko",
    "demoId": 35,
    "class": 18,
    "sgFr": "portage",
    "plFr": "portages"
  },
  "descente": {
    "nature": "nom",
    "root": "hingiso",
    "demoId": 26,
    "class": 14,
    "sgFr": "descente",
    "plFr": "descentes"
  },
  "touche": {
    "nature": "nom",
    "root": "humo",
    "demoId": 11,
    "class": 11,
    "sgFr": "touche",
    "plFr": "touches"
  },
  "fin du deuil": {
    "nature": "nom",
    "root": "mahomboloko",
    "demoId": 35,
    "class": 18,
    "sgFr": "fin du deuil",
    "plFr": "fins du deuil"
  },
  "suppression": {
    "nature": "nom",
    "root": "hotolo",
    "demoId": 11,
    "class": 8,
    "sgFr": "suppression",
    "plFr": "suppressions"
  },
  "conduite": {
    "nature": "nom",
    "root": "hendesho",
    "demoId": 26,
    "class": 11,
    "sgFr": "conduite",
    "plFr": "conduites"
  },
  "creusage": {
    "nature": "nom",
    "root": "huumbo",
    "demoId": 35,
    "class": 18,
    "sgFr": "creusage",
    "plFr": "creusages"
  },
  "terminaison": {
    "nature": "nom",
    "root": "mahwo",
    "demoId": 35,
    "class": 18,
    "sgFr": "terminaison",
    "plFr": "terminaisons"
  },
  "versement": {
    "nature": "nom",
    "root": "hungo",
    "demoId": 26,
    "class": 14,
    "sgFr": "versement",
    "plFr": "versements"
  },
  "apprentissage": {
    "nature": "nom",
    "root": "igo",
    "demoId": 26,
    "class": 8,
    "sgFr": "apprentissage",
    "plFr": "apprentissages"
  },



  "présentateur": {
    "nature": "nom",
    "root": "luvyi",
    "demoId": 1,
    "class": 1,
    "sgFr": "présentateur",
    "plFr": "présentateurs"
  },
  "assis": {
    "nature": "nom",
    "root": "ikali",
    "demoId": 1,
    "class": 1,
    "sgFr": "assis",
    "plFr": "assis"
  },
  "levant": {
    "nature": "nom",
    "root": "imangi",
    "demoId": 1,
    "class": 1,
    "sgFr": "levant",
    "plFr": "levants"
  },
  "débarrasseur": {
    "nature": "nom",
    "root": "ilekeli",
    "demoId": 1,
    "class": 1,
    "sgFr": "débarrasseur",
    "plFr": "débarrasseurs"
  },
  "tueur": {
    "nature": "nom",
    "root": "iti",
    "demoId": 1,
    "class": 1,
    "sgFr": "tueur",
    "plFr": "tueurs"
  },
  "croyant": {
    "nature": "nom",
    "root": "itabizi",
    "demoId": 1,
    "class": 1,
    "sgFr": "croyant",
    "plFr": "croyants"
  },
  "modérateur": {
    "nature": "nom",
    "root": "izikili",
    "demoId": 1,
    "class": 1,
    "sgFr": "modérateur",
    "plFr": "modérateurs"
  },
  "enterreur": {
    "nature": "nom",
    "root": "kundi",
    "demoId": 1,
    "class": 1,
    "sgFr": "enterreur",
    "plFr": "enterreurs"
  },
  "jardinier": {
    "nature": "nom",
    "root": "kali",
    "demoId": 1,
    "class": 1,
    "sgFr": "jardinier",
    "plFr": "jardiniers"
  },
  "guérisseur": {
    "nature": "nom",
    "root": "kizi",
    "demoId": 1,
    "class": 1,
    "sgFr": "guérisseur",
    "plFr": "guérisseurs"
  },
  "faiseur": {
    "nature": "nom",
    "root": "koli",
    "demoId": 1,
    "class": 1,
    "sgFr": "faiseur",
    "plFr": "faiseurs"
  },
  "blessé": {
    "nature": "nom",
    "root": "komelesi",
    "demoId": 1,
    "class": 1,
    "sgFr": "blessé",
    "plFr": "blessés"
  },
  "grandissant": {
    "nature": "nom",
    "root": "kuli",
    "demoId": 1,
    "class": 1,
    "sgFr": "grandissant",
    "plFr": "grandissants"
  },
  
  
  "terminaison": {
    "nature": "nom",
    "root": "mahwo",
    "demoId": 1,
    "class": 1,
    "sgFr": "terminaison",
    "plFr": "terminaisons"
  },
  "versement": {
    "nature": "nom",
    "root": "mahungo",
    "demoId": 1,
    "class": 1,
    "sgFr": "versement",
    "plFr": "versements"
  },
  "apprentissage": {
    "nature": "nom",
    "root": "maigo",
    "demoId": 1,
    "class": 1,
    "sgFr": "apprentissage",
    "plFr": "apprentissages"
  },
  "présentation": {
    "nature": "nom",
    "root": "luvyo",
    "demoId": 26,
    "class": 14,
    "sgFr": "présentation",
    "plFr": "présentations"
  },
  "assise": {
    "nature": "nom",
    "root": "ikalo",
    "demoId": 26,
    "class": 14,
    "sgFr": "assise",
    "plFr": "assises"
  },
  "mise debout": {
    "nature": "nom",
    "root": "maimango",
    "demoId": 35,
    "class": 18,
    "sgFr": "mise debout",
    "plFr": "mises debout"
  },
  "débarrassage": {
    "nature": "nom",
    "root": "mailekelo",
    "demoId": 35,
    "class": 18,
    "sgFr": "débarrassage",
    "plFr": "débarrassages"
  },
  "meurtre": {
    "nature": "nom",
    "root": "ito",
    "demoId": 39,
    "class": 8,
    "sgFr": "meurtre",
    "plFr": "meurtres"
  },
  "croyance": {
    "nature": "nom",
    "root": "maitabizo",
    "demoId": 35,
    "class": 18,
    "sgFr": "croyance",
    "plFr": "croyances"
  },
  "conversation": {
    "nature": "nom",
    "root": "izikilo",
    "demoId": 26,
    "class": 14,
    "sgFr": "conversation",
    "plFr": "conversations"
  },
  "enterrement": {
    "nature": "nom",
    "root": "makundo",
    "demoId": 35,
    "class": 18,
    "sgFr": "enterrement",
    "plFr": "enterrements"
  },
  "coupe": {
    "nature": "nom",
    "root": "makalo",
    "demoId": 35,
    "class": 18,
    "sgFr": "coupe",
    "plFr": "coupes"
  },
  "guérison": {
    "nature": "nom",
    "root": "makizo",
    "demoId": 35,
    "class": 18,
    "sgFr": "guérison",
    "plFr": "guérisons"
  },
  "action": {
    "nature": "nom",
    "root": "makolo",
    "demoId": 35,
    "class": 18,
    "sgFr": "action",
    "plFr": "actions"
  },
  "blessure": {
    "nature": "nom",
    "root": "mukomeleso",
    "demoId": 1,
    "class": 1,
    "sgFr": "blessure",
    "plFr": "blessures"
  },
 
  "modérateur": {
    "nature": "nom",
    "root": "izikili",
    "demoId": 1,
    "class": 1,
    "sgFr": "modérateur",
    "plFr": "modérateurs"
  },
  "enterreur": {
    "nature": "nom",
    "root": "kundi",
    "demoId": 1,
    "class": 1,
    "sgFr": "enterreur",
    "plFr": "enterreurs"
  },
  "jardinier": {
    "nature": "nom",
    "root": "kali",
    "demoId": 1,
    "class": 1,
    "sgFr": "jardinier",
    "plFr": "jardiniers"
  },
  "guérisseur": {
    "nature": "nom",
    "root": "kizi",
    "demoId": 1,
    "class": 1,
    "sgFr": "guérisseur",
    "plFr": "guérisseurs"
  },
  "faiseur": {
    "nature": "nom",
    "root": "koli",
    "demoId": 1,
    "class": 1,
    "sgFr": "faiseur",
    "plFr": "faiseurs"
  },
  "blessé": {
    "nature": "nom",
    "root": "komelesi",
    "demoId": 1,
    "class": 1,
    "sgFr": "blessé",
    "plFr": "blessés"
  },
  
  "obteneur": {
    "nature": "nom",
    "root": "longi",
    "demoId": 1,
    "class": 1,
    "sgFr": "obteneur",
    "plFr": "obteneurs"
  },
  "obtention": {
    "nature": "nom",
    "root": "longo",
    "demoId": 26,
    "class": 14,
    "sgFr": "obtention",
    "plFr": "obtention"
  },
  "répandeur": {
    "nature": "nom",
    "root": "kwizi",
    "demoId": 1,
    "class": 1,
    "sgFr": "répandeur",
    "plFr": "répandeurs"
  },
  "épandage": {
    "nature": "nom",
    "root": "makwizo",
    "demoId": 26,
    "class": 18,
    "sgFr": "épandage",
    "plFr": "épandages"
  },
  "apporteur": {
    "nature": "nom",
    "root": "leteli",
    "demoId": 1,
    "class": 1,
    "sgFr": "apporteur",
    "plFr": "apporteurs"
  },
  "amenée": {
    "nature": "nom",
    "root": "maletelo",
    "demoId": 31,
    "class": 18,
    "sgFr": "amenée",
    "plFr": "amenées"
  },
  "danseur": {
    "nature": "nom",
    "root": "kini",
    "demoId": 1,
    "class": 1,
    "sgFr": "danseur",
    "plFr": "danseurs"
  },
  "danse": {
    "nature": "nom",
    "root": "makina",
    "demoId": 11,
    "class": 18,
    "sgFr": "danse",
    "plFr": "danses"
  },
  "patient": {
    "nature": "nom",
    "root": "koboli",
    "demoId": 1,
    "class": 1,
    "sgFr": "patient",
    "plFr": "patients"
  },
  "patience": {
    "nature": "nom",
    "root": "kakobo",
    "demoId": 35,
    "class": 18,
    "sgFr": "patience",
    "plFr": "patiences"
  },
  "utilisateur": {
    "nature": "nom",
    "root": "kolesi",
    "demoId": 1,
    "class": 1,
    "sgFr": "utilisateur",
    "plFr": "utilisateurs"
  },
  "utilisation": {
    "nature": "nom",
    "root": "koleso",
    "demoId": 26,
    "class": 14,
    "sgFr": "utilisation",
    "plFr": "utilisations"
  },
  "habitué": {
    "nature": "nom",
    "root": "kobeli",
    "demoId": 1,
    "class": 1,
    "sgFr": "habitué",
    "plFr": "habitués"
  },
  "habitude": {
    "nature": "nom",
    "root": "kobelo",
    "demoId": 26,
    "class": 18,
    "sgFr": "habitude",
    "plFr": "habitudes"
  },
  "mordeur": {
    "nature": "nom",
    "root": "komani",
    "demoId": 1,
    "class": 1,
    "sgFr": "mordeur",
    "plFr": "mordeurs"
  },
  "morsure": {
    "nature": "nom",
    "root": "komano",
    "demoId": 10,
    "class": 14,
    "sgFr": "morsure",
    "plFr": "morsures"
  },
  "chauffage": {
    "nature": "nom",
    "root": "dutiso",
    "demoId": 26,
    "class": 8,
    "sgFr": "chauffage",
    "plFr": "chauffages"
  },
  "joyeux": {
    "nature": "nom",
    "root": "legeli",
    "demoId": 1,
    "class": 1,
    "sgFr": "joyeux",
    "plFr": "joyeux"
  },
  "joie": {
    "nature": "nom",
    "root": "legelo",
    "demoId": 26,
    "class": 14,
    "sgFr": "joie",
    "plFr": "joies"
  },
  "menteur": {
    "nature": "nom",
    "root": "tebi",
    "demoId": 1,
    "class": 1,
    "sgFr": "menteur",
    "plFr": "menteurs"
  },
  "erreur": {
    "nature": "nom",
    "root": "maluho",
    "demoId": 35,
    "class": 18,
    "sgFr": "erreur",
    "plFr": "erreurs"
  },
  "pleureur": {
    "nature": "nom",
    "root": "lili",
    "demoId": 1,
    "class": 1,
    "sgFr": "pleureur",
    "plFr": "pleureurs"
  },
  "pleur": {
    "nature": "nom",
    "root": "malila",
    "demoId": 35,
    "class": 18,
    "sgFr": "pleur",
    "plFr": "pleurs"
  },
  "penseur": {
    "nature": "nom",
    "root": "linganyi",
    "demoId": 1,
    "class": 1,
    "sgFr": "penseur",
    "plFr": "penseurs"
  },
  "payeur": {
    "nature": "nom",
    "root": "liyi",
    "demoId": 1,
    "class": 1,
    "sgFr": "payeur",
    "plFr": "payeurs"
  },
  "paiement": {
    "nature": "nom",
    "root": "liyo",
    "demoId": 26,
    "class": 18,
    "sgFr": "paiement",
    "plFr": "paiements"
  },
  "croissance": {
    "nature": "nom",
    "root": "makulo",
    "demoId": 35,
    "class": 18,
    "sgFr": "croissance",
    "plFr": "croissances"
  },
  "lavant": {
    "nature": "nom",
    "root": "shuki",
    "demoId": 1,
    "class": 1,
    "sgFr": "lavant",
    "plFr": "lavants"
  },
  "lavage": {
    "nature": "nom",
    "root": "shuko",
    "demoId": 22,
    "class": 14,
    "sgFr": "lavage",
    "plFr": "lavages"
  },
  "piqueur": {
    "nature": "nom",
    "root": "jombi",
    "demoId": 1,
    "class": 1,
    "sgFr": "piqueur",
    "plFr": "piqueurs"
  },
  "piqûre": {
    "nature": "nom",
    "root": "jombo",
    "demoId": 26,
    "class": 8,
    "sgFr": "piqûre",
    "plFr": "piqûres"
  },
  "trembleur": {
    "nature": "nom",
    "root": "jungi",
    "demoId": 1,
    "class": 1,
    "sgFr": "trembleur",
    "plFr": "trembleurs"
  },
  "tremblement": {
    "nature": "nom",
    "root": "majungo",
    "demoId": 35,
    "class": 18,
    "sgFr": "tremblement",
    "plFr": "tremblements"
  },
  "endurance": {
    "nature": "nom",
    "root": "gandulo",
    "demoId": 26,
    "class": 14,
    "sgFr": "endurance",
    "plFr": "endurances"
  },
  "apprentissage": {
    "nature": "nom",
    "root": "maigiso",
    "demoId": 35,
    "class": 18,
    "sgFr": "apprentissage",
    "plFr": "apprentissages"
  },
  "chant": {
    "nature": "nom",
    "root": "imbo",
    "demoId": 26,
    "class": 14,
    "sgFr": "chant",
    "plFr": "chants"
  },
  "montée": {
    "nature": "nom",
    "root": "muiruso",
    "demoId": 22,
    "class": 8,
    "sgFr": "montée",
    "plFr": "montées"
  },
  "développeur": {
    "nature": "nom",
    "root": "sendelezi",
    "demoId": 1,
    "class": 1,
    "sgFr": "développeur",
    "plFr": "développeurs"
  },
  "baigneur": {
    "nature": "nom",
    "root": "shuki",
    "demoId": 1,
    "class": 1,
    "sgFr": "baigneur",
    "plFr": "baigneurs"
  },
  "vivant": {
    "nature": "nom",
    "root": "lami",
    "demoId": 1,
    "class": 1,
    "sgFr": "vivant",
    "plFr": "vivants"
  },
  "garde": {
    "nature": "nom",
    "root": "lelo",
    "demoId": 26,
    "class": 8,
    "sgFr": "garde",
    "plFr": "gardes"
  },
  "course": {
    "nature": "nom",
    "root": "tibito",
    "demoId": 11,
    "class": 11,
    "sgFr": "course",
    "plFr": "courses"
  },
  "dérangement": {
    "nature": "nom",
    "root": "lugizo",
    "demoId": 22,
    "class": 14,
    "sgFr": "dérangement",
    "plFr": "dérangements"
  },
  "fatigue": {
    "nature": "nom",
    "root": "luho",
    "demoId": 22,
    "class": 8,
    "sgFr": "fatigue",
    "plFr": "fatigues"
  },
  "rêve": {
    "nature": "nom",
    "root": "maloto",
    "demoId": 35,
    "class": 18,
    "sgFr": "rêve",
    "plFr": "rêves"
  },
  "endurant": {
    "nature": "nom",
    "root": "ganduli",
    "demoId": 1,
    "class": 1,
    "sgFr": "endurant",
    "plFr": "endurants"
  },
  "enseignant": {
    "nature": "nom",
    "root": "muigisi",
    "demoId": 1,
    "class": 1,
    "sgFr": "enseignant",
    "plFr": "enseignants"
  },
  "chanteur": {
    "nature": "nom",
    "root": "imbi",
    "demoId": 1,
    "class": 1,
    "sgFr": "chanteur",
    "plFr": "chanteurs"
  },
  "monteur": {
    "nature": "nom",
    "root": "irusi",
    "demoId": 1,
    "class": 1,
    "sgFr": "monteur",
    "plFr": "monteurs"
  },
  "meurtre": {
    "nature": "nom",
    "root": "muito",
    "demoId": 39,
    "class": 8,
    "sgFr": "meurtre",
    "plFr": "meurtres"
  },
  "développement": {
    "nature": "nom",
    "root": "masendelezo",
    "demoId": 35,
    "class": 18,
    "sgFr": "développement",
    "plFr": "développements"
  },
  "bain": {
    "nature": "nom",
    "root": "ishuko",
    "demoId": 22,
    "class": 14,
    "sgFr": "bain",
    "plFr": "bains"
  },
  "gardien": {
    "nature": "nom",
    "root": "leli",
    "demoId": 1,
    "class": 1,
    "sgFr": "gardien",
    "plFr": "gardiens"
  },
  "coureur": {
    "nature": "nom",
    "root": "lindi",
    "demoId": 1,
    "class": 1,
    "sgFr": "coureur",
    "plFr": "coureurs"
  },
  "dérangeur": {
    "nature": "nom",
    "root": "lugizi",
    "demoId": 1,
    "class": 1,
    "sgFr": "dérangeur",
    "plFr": "dérangeurs"
  },
  
  "rêveur": {
    "nature": "nom",
    "root": "loti",
    "demoId": 1,
    "class": 1,
    "sgFr": "rêveur",
    "plFr": "rêveurs"
  },
  "regardeur": {
    "nature": "nom",
    "root": "loli",
    "demoId": 1,
    "class": 1,
    "sgFr": "regardeur",
    "plFr": "regardeurs"
  },
  "constructeur": {
    "nature": "nom",
    "root": "yubaki",
    "demoId": 1,
    "class": 1,
    "sgFr": "constructeur",
    "plFr": "constructeurs"
  },
  "oublieur_variante": {
    "nature": "nom",
    "root": "yubagili",
    "demoId": 1,
    "class": 1,
    "sgFr": "oublieur",
    "plFr": "oublieurs"
  },
  "perte": {
    "nature": "nom",
    "root": "zimilo",
    "demoId": 22,
    "class": 8,
    "sgFr": "perte",
    "plFr": "pertes"
  },
  "interdiction": {
    "nature": "nom",
    "root": "zilo",
    "demoId": 7,
    "class": 7,
    "sgFr": "interdiction",
    "plFr": "interdictions"
  },
  "pulvérisation": {
    "nature": "nom",
    "root": "mazigo",
    "demoId": 35,
    "class": 18,
    "sgFr": "pulvérisation",
    "plFr": "pulvérisations"
  },
  "fête": {
    "nature": "nom",
    "root": "mazungi",
    "demoId": 35,
    "class": 18,
    "sgFr": "fête",
    "plFr": "fêtes"
  },
  "effacement": {
    "nature": "nom",
    "root": "mazimyo",
    "demoId": 35,
    "class": 18,
    "sgFr": "effacement",
    "plFr": "effacements"
  },
  "questionneur": {
    "nature": "nom",
    "root": "tuni",
    "demoId": 1,
    "class": 1,
    "sgFr": "questionneur",
    "plFr": "questionneurs"
  },
  "atteigneur": {
    "nature": "nom",
    "root": "tusi",
    "demoId": 1,
    "class": 1,
    "sgFr": "atteigneur",
    "plFr": "atteigneurs"
  },
  "injurieur": {
    "nature": "nom",
    "root": "tukwi",
    "demoId": 1,
    "class": 1,
    "sgFr": "injurieur",
    "plFr": "injurieurs"
  },
  "ramasseur": {
    "nature": "nom",
    "root": "toli",
    "demoId": 1,
    "class": 1,
    "sgFr": "ramasseur",
    "plFr": "ramasseurs"
  },
  "preneur": {
    "nature": "nom",
    "root": "yangi",
    "demoId": 1,
    "class": 1,
    "sgFr": "preneur",
    "plFr": "preneurs"
  },
  "marche": {
    "nature": "nom",
    "root": "mayata",
    "demoId": 35,
    "class": 18,
    "sgFr": "marche",
    "plFr": "marches"
  },
  "construction": {
    "nature": "nom",
    "root": "yubako",
    "demoId": 39,
    "class": 8,
    "sgFr": "construction",
    "plFr": "constructions"
  },
  "oublieur": {
    "nature": "nom",
    "root": "yubagilo",
    "demoId": 1,
    "class": 1,
    "sgFr": "oublieur",
    "plFr": "oublieurs"
  },
  "perdant": {
    "nature": "nom",
    "root": "zimili",
    "demoId": 1,
    "class": 1,
    "sgFr": "perdant",
    "plFr": "perdants"
  },
  "interdit": {
    "nature": "nom",
    "root": "zili",
    "demoId": 1,
    "class": 1,
    "sgFr": "interdit",
    "plFr": "interdits"
  },
  "pulvérisateur": {
    "nature": "nom",
    "root": "zigi",
    "demoId": 1,
    "class": 1,
    "sgFr": "pulvérisateur",
    "plFr": "pulvérisateurs"
  },
  "joyeux": {
    "nature": "nom",
    "root": "zungilwi",
    "demoId": 1,
    "class": 1,
    "sgFr": "joyeux",
    "plFr": "joyeux"
  },
  "effaceur": {
    "nature": "nom",
    "root": "zimyi",
    "demoId": 1,
    "class": 1,
    "sgFr": "effaceur",
    "plFr": "effaceurs"
  },
  
  "question": {
    "nature": "nom",
    "root": "tuno",
    "demoId": 22,
    "class": 14,
    "sgFr": "question",
    "plFr": "questions"
  },
  "interrogation": {
    "nature": "nom",
    "root": "mutuno",
    "demoId": 22,
    "class": 14,
    "sgFr": "interrogation",
    "plFr": "interrogations"
  },
  "atteinte": {
    "nature": "nom",
    "root": "tuso",
    "demoId": 39,
    "class": 8,
    "sgFr": "atteinte",
    "plFr": "atteintes"
  },
  "injure": {
    "nature": "nom",
    "root": "matukwo",
    "demoId": 35,
    "class": 18,
    "sgFr": "injure",
    "plFr": "injures"
  },
  "ramassage": {
    "nature": "nom",
    "root": "matola",
    "demoId": 35,
    "class": 18,
    "sgFr": "ramassage",
    "plFr": "ramassages"
  },
  "crieur": {
    "nature": "nom",
    "root": "yamizi",
    "demoId": 1,
    "class": 1,
    "sgFr": "crieur",
    "plFr": "crieurs"
  },
  "acceptant": {
    "nature": "nom",
    "root": "yemeli",
    "demoId": 1,
    "class": 1,
    "sgFr": "acceptant",
    "plFr": "acceptants"
  },
  "nageur": {
    "nature": "nom",
    "root": "yogi",
    "demoId": 1,
    "class": 1,
    "sgFr": "nageur",
    "plFr": "nageurs"
  },
  "effrayé": {
    "nature": "nom",
    "root": "yobahi",
    "demoId": 1,
    "class": 1,
    "sgFr": "effrayé",
    "plFr": "effrayés"
  },
  "habilleur": {
    "nature": "nom",
    "root": "yambali",
    "demoId": 1,
    "class": 1,
    "sgFr": "habilleur",
    "plFr": "habilleurs"
  },
  "ouvreur": {
    "nature": "nom",
    "root": "vugali",
    "demoId": 1,
    "class": 1,
    "sgFr": "ouvreur",
    "plFr": "ouvreurs"
  },
  "ouvreur_alternatif": {
    "nature": "nom",
    "root": "vuguli",
    "demoId": 1,
    "class": 1,
    "sgFr": "ouvreur",
    "plFr": "ouvreurs"
  },
  "faiseur de désordre": {
    "nature": "nom",
    "root": "vulengi",
    "demoId": 1,
    "class": 1,
    "sgFr": "faiseur de désordre",
    "plFr": "faiseurs de désordre"
  },
 
  "salueur": {
    "nature": "nom",
    "root":" uyyusi",
    "demoId": 1,
    "class": 1,
    "sgFr": "salueur",
    "plFr": "salueurs"
  },
  "réveillé": {
    "nature": "nom",
    "root": "vyuki",
    "demoId": 1,
    "class": 1,
    "sgFr": "réveillé",
    "plFr": "réveillés"
  },
  "venant": {
    "nature": "nom",
    "root": "muvwi",
    "demoId": 1,
    "class": 1,
    "sgFr": "venant",
    "plFr": "venants"
  },
  "prise": {
    "nature": "nom",
    "root": "mayango",
    "demoId": 35,
    "class": 18,
    "sgFr": "prise",
    "plFr": "prises"
  },
  "cri": {
    "nature": "nom",
    "root": "yamizo",
    "demoId": 22,
    "class": 8,
    "sgFr": "cri",
    "plFr": "cris"
  },
  "acceptation": {
    "nature": "nom",
    "root": "yemelo",
    "demoId": 22,
    "class": 8,
    "sgFr": "acceptation",
    "plFr": "acceptations"
  },
  "nage": {
    "nature": "nom",
    "root": "yogo",
    "demoId": 22,
    "class": 8,
    "sgFr": "nage",
    "plFr": "nages"
  },
  "peur": {
    "nature": "nom",
    "root": "boba",
    "demoId": 26,
    "class": 18,
    "sgFr": "peur",
    "plFr": "peurs"
  },
  "habillement": {
    "nature": "nom",
    "root": "yambalo",
    "demoId": 11,
    "class": 8,
    "sgFr": "habillement",
    "plFr": "habillements"
  },
  "ouverture": {
    "nature": "nom",
    "root": "vugalo",
    "demoId": 11,
    "class": 8,
    "sgFr": "ouverture",
    "plFr": "ouvertures"
  },
  "ouverture_alternative": {
    "nature": "nom",
    "root": "vugulo",
    "demoId": 11,
    "class": 8,
    "sgFr": "ouverture",
    "plFr": "ouvertures"
  },
  "désordre": {
    "nature": "nom",
    "root": "vulengo",
    "demoId": 5,
    "class": 5,
    "sgFr": "désordre",
    "plFr": "désordres"
  },
  "perturbation": {
    "nature": "nom",
    "root": "vulengo",
    "demoId": 5,
    "class": 5,
    "sgFr": "perturbation",
    "plFr": "perturbations"
  },
  "rapidité": {
    "nature": "nom",
    "root": "vubiso",
    "demoId": 11,
    "class": 8,
    "sgFr": "rapidité",
    "plFr": "rapidités"
  },
  "salutation": {
    "nature": "nom",
    "root": "yyuso",
    "demoId": 22,
    "class": 11,
    "sgFr": "salutation",
    "plFr": "salutations"
  },
  "réveil": {
    "nature": "nom",
    "root": "vyuko",
    "demoId": 22,
    "class": 8,
    "sgFr": "réveil",
    "plFr": "réveils"
  },
  "mangeur": {
    "nature": "nom",
    "root": "lyi",
    "demoId": 1,
    "class": 1,
    "sgFr": "mangeur",
    "plFr": "mangeurs"
  },
  "montrant": {
    "nature": "nom",
    "root": "lombosi",
    "demoId": 1,
    "class": 1,
    "sgFr": "montrant",
    "plFr": "montrants"
  },
  "provocateur": {
    "nature": "nom",
    "root": "londolani",
    "demoId": 1,
    "class": 1,
    "sgFr": "provocateur",
    "plFr": "provocateurs"
  },
  "créateur de problème": {
    "nature": "nom",
    "root": "londoleli",
    "demoId": 1,
    "class": 1,
    "sgFr": "créateur de problème",
    "plFr": "créateurs de problème"
  },
  "envoyé": {
    "nature": "nom",
    "root": "lungiki",
    "demoId": 1,
    "class": 1,
    "sgFr": "envoyé",
    "plFr": "envoyés"
  },
  "expliquant": {
    "nature": "nom",
    "root": "lundubuli",
    "demoId": 1,
    "class": 1,
    "sgFr": "expliquant",
    "plFr": "expliquants"
  },
  "connaisseur": {
    "nature": "nom",
    "root": "manyi",
    "demoId": 1,
    "class": 1,
    "sgFr": "connaisseur",
    "plFr": "connaisseurs"
  },
  "pousseur": {
    "nature": "nom",
    "root": "muki",
    "demoId": 1,
    "class": 1,
    "sgFr": "pousseur",
    "plFr": "pousseurs"
  },
  "voyageur": {
    "nature": "nom",
    "root": "yi",
    "demoId": 1,
    "class": 1,
    "sgFr": "voyageur",
    "plFr": "voyageurs"
  },
  "réplique": {
    "nature": "nom",
    "root": "yakulo",
    "demoId": 11,
    "class": 8,
    "sgFr": "réplique",
    "plFr": "répliques"
  },
  "réception": {
    "nature": "nom",
    "root": "yanganano",
    "demoId": 22,
    "class": 8,
    "sgFr": "réception",
    "plFr": "réceptions"
  },
  "allumage": {
    "nature": "nom",
    "root": "yaso",
    "demoId": 11,
    "class": 8,
    "sgFr": "allumage",
    "plFr": "allumages"
  },
  "hopital": {
    "nature": "nom",
    "root": "same",
    "demoId": 26,
    "class": 18,
    "sgFr": "allumage",
    "plFr": "allumages"
  },
  "regard": {
    "nature": "nom",
    "root": "malola",
    "demoId": 35,
    "class": 18,
    "sgFr": "regard",
    "plFr": "regards"
  },
  "repas": {
    "nature": "nom",
    "root": "malya",
    "demoId": 35,
    "class": 18,
    "sgFr": "repas",
    "plFr": "repas"
  },
  "démonstration": {
    "nature": "nom",
    "root": "lomboso",
    "demoId": 11,
    "class": 8,
    "sgFr": "démonstration",
    "plFr": "démonstrations"
  },
  "provocation": {
    "nature": "nom",
    "root": "londolano",
    "demoId": 26,
    "class": 14,
    "sgFr": "provocation",
    "plFr": "provocations"
  },
  
  "envoi": {
    "nature": "nom",
    "root": "malungiko",
    "demoId": 35,
    "class": 18,
    "sgFr": "envoi",
    "plFr": "envois"
  },
  "explication": {
    "nature": "nom",
    "root": "lundubulo",
    "demoId": 22,
    "class": 14,
    "sgFr": "explication",
    "plFr": "explications"
  },
  "connaissance": {
    "nature": "nom",
    "root": "manyo",
    "demoId": 22,
    "class": 8,
    "sgFr": "connaissance",
    "plFr": "connaissances"
  },
  "poussée": {
    "nature": "nom",
    "root": "muko",
    "demoId": 35,
    "class": 18,
    "sgFr": "poussée",
    "plFr": "poussées"
  },
  "répliqueur": {
    "nature": "nom",
    "root": "yakuli",
    "demoId": 1,
    "class": 1,
    "sgFr": "répliqueur",
    "plFr": "répliqueurs"
  },
  "receveur": {
    "nature": "nom",
    "root": "yanganani",
    "demoId": 1,
    "class": 1,
    "sgFr": "receveur",
    "plFr": "receveurs"
  },
  "allumeur": {
    "nature": "nom",
    "root": "yasi",
    "demoId": 1,
    "class": 1,
    "sgFr": "allumeur",
    "plFr": "allumeurs"
  },
  "marcheur": {
    "nature": "nom",
    "root": "yati",
    "demoId": 1,
    "class": 1,
    "sgFr": "marcheur",
    "plFr": "marcheurs"
  },



        //================================================///////
        //================================================///////
            
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
            root: "fumbi",
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
            root: "longo",
            class: 10,
            demoId: 39,
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
            root: "njuba",
            class: 5,
            demoId: 5,
            sgFr: "jour",
            plFr: "jours"
        },

        // Classe 10 : bu- / ma-
        "travail": {
            nature: "nom",
            root: "kolwa",
            class: 14,
            demoId: 25,
            sgFr: "travail",
            plFr: "travaux"
        },

        // Classe 16 : bu- / bi-
        "nuit": {
            nature: "nom",
            root: "fugu",
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
        "avoir":       { nature: "verbe", root: "bane",   infinitive: "kubane" },
        "aller":       { nature: "verbe", root: "ya",     infinitive: "kuya" },
        "venir":       { nature: "verbe", root: "vwa",     infinitive: "kuvwa" },
        "faire":       { nature: "verbe", root: "gila",   infinitive: "kugila" },
        "laver":       { nature: "verbe", root: "shuka",  infinitive: "kuishuka", pronominal: true, pronPrefix: "i" },
        "se laver":    { nature: "verbe", root: "ishuka",  infinitive: "kuishuka", pronominal: true, pronPrefix: "i" },
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
        "comprendre":  { nature: "verbe", root: "tenena",    infinitive: "tenena" },
        "regarder":    { nature: "verbe", root: "lola",   infinitive: "kulola" },
        "aimer":       { nature: "verbe", root: "sima",  infinitive: "kusima" },
        "donner":      { nature: "verbe", root: "ha",     infinitive: "kuha" },
        "prendre":     { nature: "verbe", root: "gwata",   infinitive: "kugwata" },
        "diviser":     { nature: "verbe", root: "gwata",   infinitive: "kugwata" },
        "prendre":     { nature: "verbe", root: "gwata",   infinitive: "kugwata" },
        "diviser":      { nature: "verbe", root: "abula", infinitive: "kuabula" },
  "partager":     { nature: "verbe", root: "abula", infinitive: "kuabula" },

  "tomber":       { nature: "verbe", root: "anuka", infinitive: "kuanuka" },

  "abattre":      { nature: "verbe", root: "baga", infinitive: "kubaga" },

  "compter":      { nature: "verbe", root: "bala", infinitive: "kubala" },

  "appeler":      { nature: "verbe", root: "belangila", infinitive: "kubelangila" },

  "mettre":       { nature: "verbe", root: "bika", infinitive: "kubika" },

  "cacher":       { nature: "verbe", root: "bisha", infinitive: "kubisha" },

  "dire":         { nature: "verbe", root: "bwila", infinitive: "kubwila" },

  "lutter":       { nature: "verbe", root: "bana", infinitive: "kubana" },

  "avoir":        { nature: "verbe", root: "bane", infinitive: "kubane" },

  "sentir":       { nature: "verbe", root: "baya", infinitive: "kubaya" },

  "voir":         { nature: "verbe", root: "bona", infinitive: "kubona" },

  "se voir":      { nature: "verbe", root: "boneka", infinitive: "kuboneka", pronominal: true },

  "manquer":      { nature: "verbe", root: "bula", infinitive: "kubula" },
  "perdre":       { nature: "verbe", root: "bula", infinitive: "kubula" },

  "fabriquer":    { nature: "verbe", root: "bumba", infinitive: "kubumba" },
  "créer":        { nature: "verbe", root: "bumba", infinitive: "kubumba" },

  "remercier":    { nature: "verbe", root: "beula", infinitive: "kubeula" },

  "pouvoir":      { nature: "verbe", root: "basha", infinitive: "kubasha" },

  "être":         { nature: "verbe", root: "ba", infinitive: "kuba", auxiliary: true },

  "changer":      { nature: "verbe", root: "balandula", infinitive: "kubalandula" },
  "être changé":        { nature: "verbe", root: "balanduka", infinitive: "kubalanduka" },

  "battre":             { nature: "verbe", root: "banda", infinitive: "kubanda" },
  "taper":              { nature: "verbe", root: "banda", infinitive: "kubanda" },

  "être appelé":        { nature: "verbe", root: "belangilwa", infinitive: "kubelangilwa" },

  "pouvoir":            { nature: "verbe", root: "basa", infinitive: "kubasa" },

  "courber":            { nature: "verbe", root: "binda", infinitive: "kubinda" },

  "s'emprisonner":      { nature: "verbe", root: "bohana", infinitive: "kubohana", pronominal: true },

  "faire montrer à":    { nature: "verbe", root: "bonesa", infinitive: "kubonesa" },

  "créer":              { nature: "verbe", root: "bumba", infinitive: "kubumba" },
  "fabriquer":          { nature: "verbe", root: "bumba", infinitive: "kubumba" },

  "enfanter":           { nature: "verbe", root: "buta", infinitive: "kubuta" },

  "naître":             { nature: "verbe", root: "butwa", infinitive: "kubutwa" },

  "se soigner":         { nature: "verbe", root: "bukwa", infinitive: "kubukwa", pronominal: true },

  "conduire":           { nature: "verbe", root: "endesha", infinitive: "kuendesha" },

  "menacer":            { nature: "verbe", root: "funa", infinitive: "kufuna" },

  "sortir":             { nature: "verbe", root: "fuma", infinitive: "kufuma" },

  "piétiner":           { nature: "verbe", root: "fwenela", infinitive: "kufwenela" },

  "sortir de l'intérieur": { nature: "verbe", root: "fuma mwenimo", infinitive: "kufuma mwenimo" },

  "mourir":             { nature: "verbe", root: "fwa", infinitive: "kufwa" },

  "pardonner":          { nature: "verbe", root: "fwilila luse", infinitive: "kufwilila luse" },

  "s'agenouiller":      { nature: "verbe", root: "fukama", infinitive: "kufukama", pronominal: true },
  "obliger":            { nature: "verbe", root: "fyeeteleza", infinitive: "kufyeeteleza" },

  "faire":              { nature: "verbe", root: "gila", infinitive: "kugila" },

  "faire un effort":    { nature: "verbe", root: "gilamisi", infinitive: "kugilamisi" },

  "remplacer":          { nature: "verbe", root: "gombola", infinitive: "kugombola" },

  "marier":             { nature: "verbe", root: "gonda", infinitive: "kugonda" },

  "se marier":          { nature: "verbe", root: "gondana", infinitive: "kugondana", pronominal: true },

  "acheter":            { nature: "verbe", root: "gula", infinitive: "kugula" },

  "vendre":             { nature: "verbe", root: "guza", infinitive: "kuguza" },

  "prendre":            { nature: "verbe", root: "gwata", infinitive: "kugwata" },

  "saisir":             { nature: "verbe", root: "gwatiliza", infinitive: "kugwatiliza" },

  "faire mal":          { nature: "verbe", root: "gila bubi", infinitive: "kugila bubi" },

  "glorifier":          { nature: "verbe", root: "hanja", infinitive: "kuhanja" },

  "gonfler":            { nature: "verbe", root: "hema", infinitive: "kuhema" },

  "pousser quelqu'un":  { nature: "verbe", root: "hilika", infinitive: "kuhilika" },

  "donner":             { nature: "verbe", root: "hana", infinitive: "kuhana" },

  "avoir reçu":         { nature: "verbe", root: "heebwa", infinitive: "kuheebwa" },

  "invoquer":           { nature: "verbe", root: "haahama", infinitive: "kuhaahama" },

  "bénir":              { nature: "verbe", root: "heelela", infinitive: "kuheelela" },

  "descendre":          { nature: "verbe", root: "hinga", infinitive: "kuhinga" },
  "porter":             { nature: "verbe", root: "heka", infinitive: "kuheka" },

  "faire descendre":    { nature: "verbe", root: "hingisa", infinitive: "kuhingisa" },

  "toucher":            { nature: "verbe", root: "huma", infinitive: "kuhuma" },

  "terminer le deuil":  { nature: "verbe", root: "homboloka", infinitive: "kuhomboloka" },

  "corriger":           { nature: "verbe", root: "hotola", infinitive: "kuhotola" },

  "conduire":           { nature: "verbe", root: "hendesha", infinitive: "kuhendesha" },

  "creuser":            { nature: "verbe", root: "huumba", infinitive: "kuhuumba" },

  "terminer":           { nature: "verbe", root: "hwa", infinitive: "kuhwa" },
  "finir":              { nature: "verbe", root: "hwa", infinitive: "kuhwa" },

  "verser liquide":     { nature: "verbe", root: "hunga", infinitive: "kuhunga" },

  "apprendre":          { nature: "verbe", root: "iga", infinitive: "kuiga" },

  "se présenter":       { nature: "verbe", root: "iluvya", infinitive: "kuiluvya", pronominal: true },

  "s'asseoir":          { nature: "verbe", root: "ikala", infinitive: "kuikala", pronominal: true },

  "se mettre debout":   { nature: "verbe", root: "imanga", infinitive: "kuimanga", pronominal: true },

  "se débarrasser":     { nature: "verbe", root: "ilekela", infinitive: "kuilekela", pronominal: true },

  "tuer":               { nature: "verbe", root: "ita", infinitive: "kuita" },

  "croire":             { nature: "verbe", root: "itabizya", infinitive: "kuitabizya" },

  "converser":          { nature: "verbe", root: "izikila", infinitive: "kuizikila" },

  "enterrer":           { nature: "verbe", root: "kunda", infinitive: "kukunda" },

  "couper":             { nature: "verbe", root: "kala", infinitive: "kukala" },

  "guérir":             { nature: "verbe", root: "kiza", infinitive: "kukiza" },
  "faire":              { nature: "verbe", root: "kola", infinitive: "kukola" },
  "devenir":            { nature: "verbe", root: "kola", infinitive: "kukola" },

  "se blesser":         { nature: "verbe", root: "komelesa", infinitive: "kukomelesa", pronominal: true },

  "grandir":            { nature: "verbe", root: "kula", infinitive: "kukula" },

  "se laver":           { nature: "verbe", root: "ishuka", infinitive: "kuishuka", pronominal: true },

  "piquer":             { nature: "verbe", root: "jomba", infinitive: "kujomba" },

  "trembler":           { nature: "verbe", root: "junga", infinitive: "kujunga" },

  "chauffer":           { nature: "verbe", root: "lygisa", infinitive: "kulygisa" },

  "être en joie":       { nature: "verbe", root: "legela", infinitive: "kulegela" },

  "se tromper":         { nature: "verbe", root: "luha", infinitive: "kuluha", pronominal: true },

  "pleurer":            { nature: "verbe", root: "lila", infinitive: "kulila" },

  "penser":             { nature: "verbe", root: "linganya", infinitive: "kulinganya" },

  "payer":              { nature: "verbe", root: "liya", infinitive: "kuliya" },

  "enseigner":          { nature: "verbe", root: "longesha", infinitive: "kulongesha" },

  "pleuvoir":           { nature: "verbe", root: "loka", infinitive: "kuloka" },

  "jeter":              { nature: "verbe", root: "kabula", infinitive: "kukabula" },

  "refuser":            { nature: "verbe", root: "kema", infinitive: "kukema" },

  "danser":             { nature: "verbe", root: "kina", infinitive: "kukina" },

  "patienter":          { nature: "verbe", root: "kobola", infinitive: "kukobola" },

  "travailler":         { nature: "verbe", root: "kola", infinitive: "kukola" },

  "utiliser":           { nature: "verbe", root: "kolesa", infinitive: "kukolesa" },
  "s’habituer":         { nature: "verbe", root: "kobela", infinitive: "kukobela", pronominal: true },

  "mordre":             { nature: "verbe", root: "komana", infinitive: "kukomana" },

  "grandir":            { nature: "verbe", root: "kula", infinitive: "kukula" },

  "obtenir":            { nature: "verbe", root: "longa", infinitive: "kulonga" },

  "répandre":           { nature: "verbe", root: "kwiza", infinitive: "kukwiza" },

  "amener":             { nature: "verbe", root: "letela", infinitive: "kuletela" },

  "s'imaginer":         { nature: "verbe", root: "ibikilila", infinitive: "kuibikilila", pronominal: true },

  "se soigner":         { nature: "verbe", root: "ibuka", infinitive: "kuibuka", pronominal: true },

  "endurer":            { nature: "verbe", root: "igandule", infinitive: "kuigandule" },

  "faire apprendre":    { nature: "verbe", root: "igiisa", infinitive: "kuigiisa" },

  "chanter":            { nature: "verbe", root: "imba", infinitive: "kuimba" },

  "faire monter":       { nature: "verbe", root: "irusa", infinitive: "kuirusa" },

  "tuer":               { nature: "verbe", root: "ita", infinitive: "kuita" },

  "se développer":      { nature: "verbe", root: "isendeleza", infinitive: "kuisendeleza", pronominal: true },

  "croire":             { nature: "verbe", root: "itabizya", infinitive: "kuitabizya" },

  "se baigner":         { nature: "verbe", root: "ishuka", infinitive: "kuishuka", pronominal: true },

  "vivre":              { nature: "verbe", root: "lama", infinitive: "kulama" },

  "être en joie":       { nature: "verbe", root: "legela", infinitive: "kulegela" },

  "garder":             { nature: "verbe", root: "lela", infinitive: "kulela" },

  "pleurer":            { nature: "verbe", root: "lila", infinitive: "kulila" },
  "courir":             { nature: "verbe", root: "linda", infinitive: "kulinda" },

  "déranger":           { nature: "verbe", root: "lugiza", infinitive: "kulugiza" },

  "se fatiguer":        { nature: "verbe", root: "luha", infinitive: "kuluha", pronominal: true },

  "rêver":              { nature: "verbe", root: "lota", infinitive: "kulota" },

  "regarder":           { nature: "verbe", root: "lola", infinitive: "kulola" },

  "manger":             { nature: "verbe", root: "lya", infinitive: "kulya" },

  "montrer":            { nature: "verbe", root: "lombosa", infinitive: "kulombosa" },

  "se provoquer":       { nature: "verbe", root: "londolana", infinitive: "kulondolana", pronominal: true },
  "créer de problème":  { nature: "verbe", root: "londolana", infinitive: "kulondolana" },

  "choisir":            { nature: "verbe", root: "londolela", infinitive: "kulondolela" },

  "envoyer":            { nature: "verbe", root: "lungika", infinitive: "kulungika" },

  "expliquer":          { nature: "verbe", root: "lundubula", infinitive: "kulundubula" },

  "discuter":           { nature: "verbe", root: "mbakisa", infinitive: "kumbakisa" },

  "connaître":          { nature: "verbe", root: "manya", infinitive: "kumanya" },
  "savoir":             { nature: "verbe", root: "manya", infinitive: "kumanya" },

  "pousser":            { nature: "verbe", root: "mela", infinitive: "kumela" },

  "s'envoler":          { nature: "verbe", root: "muka", infinitive: "kumuka", pronominal: true },

  "avaler":             { nature: "verbe", root: "mila", infinitive: "kumila" },

  "sauver":             { nature: "verbe", root: "lopola", infinitive: "kulopola" },

  "pouvoir":            { nature: "verbe", root: "nga", infinitive: "kunga" },

  "ravir":              { nature: "verbe", root: "nyaga", infinitive: "kunyaga" },
  "entendre":           { nature: "verbe", root: "nyunvwa", infinitive: "kunyunvwa" },

  "sentir":             { nature: "verbe", root: "nyunvwisa", infinitive: "kunyunvwisa" },

  "contester":          { nature: "verbe", root: "pinga", infinitive: "kupinga" },

  "respecter":          { nature: "verbe", root: "nyemya", infinitive: "kunyemya" },

  "vendre":             { nature: "verbe", root: "sakya", infinitive: "kusakya" },
  "marchander":         { nature: "verbe", root: "sakya", infinitive: "kusakya" },

  "rattraper":          { nature: "verbe", root: "samasama", infinitive: "kusamasama" },

  "attraper":           { nature: "verbe", root: "samisa", infinitive: "kusamisa" },

  "rencontrer":         { nature: "verbe", root: "sanga", infinitive: "kusanga" },

  "se rencontrer":      { nature: "verbe", root: "sangana", infinitive: "kusangana", pronominal: true },

  "écrire":             { nature: "verbe", root: "salanga", infinitive: "kusalanga" },

  "être le bienvenu":   { nature: "verbe", root: "sambila", infinitive: "kusambila" },

  "faire un discours":  { nature: "verbe", root: "sanzaula", infinitive: "kusanzaula" },

  "envoyer":            { nature: "verbe", root: "senda", infinitive: "kusenda" },

  "se partager":        { nature: "verbe", root: "sendana", infinitive: "kusendana", pronominal: true },

  "aimer":              { nature: "verbe", root: "sima", infinitive: "kusima" },

  "s'aimer":            { nature: "verbe", root: "simana", infinitive: "kusimana", pronominal: true },

  "sauter":             { nature: "verbe", root: "simba", infinitive: "kusimba" },

  "lire":               { nature: "verbe", root: "soma", infinitive: "kusoma" },

  "se fâcher":          { nature: "verbe", root: "sonena", infinitive: "kusonena", pronominal: true },

  "demander":           { nature: "verbe", root: "shaba", infinitive: "kushaba" },
  "prier":              { nature: "verbe", root: "shaba", infinitive: "kushaba" },
  "jouer":              { nature: "verbe", root: "shata", infinitive: "kushata" },

  "chercher":           { nature: "verbe", root: "shonda", infinitive: "kushonda" },

  "différencier":       { nature: "verbe", root: "shoshana", infinitive: "kushoshana" },

  "se haïr":            { nature: "verbe", root: "shombana", infinitive: "kushombana", pronominal: true },

  "ramasser":           { nature: "verbe", root: "shamata", infinitive: "kushamata" },

  "devoir":             { nature: "verbe", root: "sheshebwa", infinitive: "kusheshebwa" },

  "boire":              { nature: "verbe", root: "shoma", infinitive: "kushoma" },

  "rentrer":            { nature: "verbe", root: "shubila", infinitive: "kushubila" },

  "vouloir":            { nature: "verbe", root: "shwa", infinitive: "kushwa" },

  "répondre":           { nature: "verbe", root: "shuvya", infinitive: "kushuvya" },

  "conseiller":         { nature: "verbe", root: "shungila", infinitive: "kushungila" },

  "souhaiter":          { nature: "verbe", root: "shwilila", infinitive: "kushwilila" },

  "briller":            { nature: "verbe", root: "tala", infinitive: "kutala" },

  "offrir":             { nature: "verbe", root: "tanga", infinitive: "kutanga" },

  "écouter":            { nature: "verbe", root: "tenena", infinitive: "kutenena" },

  "piéger":             { nature: "verbe", root: "tega", infinitive: "kutega" },

  "mentir":             { nature: "verbe", root: "teba", infinitive: "kuteba" },

  "cuisiner":           { nature: "verbe", root: "teka", infinitive: "kuteka" },
  "préparer":           { nature: "verbe", root: "teka", infinitive: "kuteka" },

  "parler":             { nature: "verbe", root: "teta", infinitive: "kuteta" },

  "tomber":             { nature: "verbe", root: "tibuka", infinitive: "kutibuka" },
  "penser":             { nature: "verbe", root: "tona", infinitive: "kutona" },

  "questionner":        { nature: "verbe", root: "tuna", infinitive: "kutuna" },

  "atteindre":          { nature: "verbe", root: "tusa", infinitive: "kutusa" },

  "injurier":           { nature: "verbe", root: "tukwa", infinitive: "kutukwa" },

  "ramasser":           { nature: "verbe", root: "tola", infinitive: "kutola" },

  "prendre":            { nature: "verbe", root: "yanga", infinitive: "kuyanga" },

  "crier":              { nature: "verbe", root: "yamiza", infinitive: "kuyamiza" },

  "accepter":           { nature: "verbe", root: "yemela", infinitive: "kuyemela" },

  "nager":              { nature: "verbe", root: "yoga", infinitive: "kuyoga" },

  "avoir peur":         { nature: "verbe", root: "yobaha", infinitive: "kuyobaha" },

  "faire rapide":       { nature: "verbe", root: "vubisa", infinitive: "kuvubisa" },
  "faire vite":         { nature: "verbe", root: "vubisa", infinitive: "kuvubisa" },

  "habiller":           { nature: "verbe", root: "yambala", infinitive: "kuyambala" },

  "ouvrir":             { nature: "verbe", root: "vugala", infinitive: "kuvugala" },
  "ouvrir (variante)":  { nature: "verbe", root: "vugula", infinitive: "kuvugula" },

  "mettre de désordre": { nature: "verbe", root: "vulenga", infinitive: "kuvulenga" },

  "saluer":             { nature: "verbe", root: "vyusa", infinitive: "kuvyusa" },

  "se réveiller":       { nature: "verbe", root: "vyuka", infinitive: "kuvyuka", pronominal: true },

  "venir":              { nature: "verbe", root: "vwa", infinitive: "kuvwa" },

  "semer":              { nature: "verbe", root: "vyaala", infinitive: "kuvyaala" },
  "recevoir":           { nature: "verbe", root: "yanganana", infinitive: "kuyanganana" },

  "allumer":            { nature: "verbe", root: "yasa", infinitive: "kuyasa" },

  "marcher":            { nature: "verbe", root: "yata", infinitive: "kuyata" },

  "construire":         { nature: "verbe", root: "yubaka", infinitive: "kuyubaka" },

  "oublier":            { nature: "verbe", root: "yubagila", infinitive: "kuyubagila" },

  "perdre":             { nature: "verbe", root: "zimila", infinitive: "kuzimila" },

  "interdire":          { nature: "verbe", root: "zila", infinitive: "kuzila" },

  "pulvériser":         { nature: "verbe", root: "ziga", infinitive: "kuziga" },

  "être en joie":       { nature: "verbe", root: "zungilwa", infinitive: "kuzungilwa" },

  "effacer":            { nature: "verbe", root: "zimya", infinitive: "kuzimya" },

    },

    // ==================== ADJECTIFS ====================
    // root = radical Kivira SANS préfixe
    // Le préfixe sera ajouté selon la classe du nom (voir grammar.js)
    adjectives: {
        "beau":          { nature: "adjectif", root: "nyekembo" },
        "beaux":          { nature: "adjectif", root: "nyekembo" },
        "belle":         { nature: "adjectif", root: "nyekembo" },
        "belles":         { nature: "adjectif", root: "nyekembo" },
        "bon":           { nature: "adjectif", root: "shoga"    },
        "bonne":         { nature: "adjectif", root: "shoga"    },
        "bonnes":         { nature: "adjectif", root: "shoga"    },
        "grand":         { nature: "adjectif", root: "kulu"     },
        "grande":        { nature: "adjectif", root: "kulu"     },
        "grands":        { nature: "adjectif", root: "kulu"     },
        "grandes":       { nature: "adjectif", root: "kulu"     },
        "petit":         { nature: "adjectif", root: "lumula"   },
        "petite":        { nature: "adjectif", root: "lumula"   },
        "petits":        { nature: "adjectif", root: "lumula"   },
        "petites":       { nature: "adjectif", root: "lumula"   },
        "vieux":         { nature: "adjectif", root: "koto"     },
        "vieille":       { nature: "adjectif", root: "koto"     },
        "jeune":         { nature: "adjectif", root: "lofoko"   },
        "jeunes":        { nature: "adjectif", root: "lofoko"   },
        "gros":          { nature: "adjectif", root: "bugule"   },
        "grosse":        { nature: "adjectif", root: "bugule"   },
        "haut":          { nature: "adjectif", root: "lugulu"   },
        "haute":         { nature: "adjectif", root: "lugulu"   },
        "court":         { nature: "adjectif", root: "hofi"     },
        "courts":         { nature: "adjectif", root: "hofi"     },
        "courte":        { nature: "adjectif", root: "hofi"     },
        "ancien":        { nature: "adjectif", root: "lanzi"    },
        "anciens":        { nature: "adjectif", root: "lanzi"    },
        "ancienne":      { nature: "adjectif", root: "lanzi"    },
        "blanc":         { nature: "adjectif", root: "pepe"     },
        "blanche":       { nature: "adjectif", root: "pepe"     },
        "bleu":          { nature: "adjectif", root: "gululu"   },
        "bleue":         { nature: "adjectif", root: "gululu"   },
        "rouge":         { nature: "adjectif", root: "tuku"     },
        "heureux":       { nature: "adjectif", root: "lengo"    },
        "heureuse":      { nature: "adjectif", root: "lengo"    },
        "faux":          { nature: "adjectif", root: "hi"       },
        "fausse":        { nature: "adjectif", root: "hi"       },
        "chaud":         { nature: "adjectif", root: "dutu"     },
        "chaude":        { nature: "adjectif", root: "dutu"     },
        "intelligent":   { nature: "adjectif", root: "wenge"    },
        "intelligente":  { nature: "adjectif", root: "wenge"    },
        "intelligents":  { nature: "adjectif", root: "wenge"    },
        "intelligentes": { nature: "adjectif", root: "wenge"    },
        "mauvais":       { nature: "adjectif", root: "bi"       },
        "mauvaise":      { nature: "adjectif", root: "bi"       },
        "nouveau":       { nature: "adjectif", root: "hyahya"    },
        "nouveaux":       { nature: "adjectif", root: "hyahya"    },
        "nouvelle":      { nature: "adjectif", root: "hyahya"    },
        "facile":      { nature: "adjectif", root: "novu"    },
        "étranger":      { nature: "adjectif", root: "geni"    },
        "étrangère":      { nature: "adjectif", root: "geni"    },
        "vivant":      { nature: "adjectif", root: "lami"    },
        "vivante":      { nature: "adjectif", root: "lami"    },
        "vivants":      { nature: "adjectif", root: "lami"    },
        "unique":      { nature: "adjectif", root: "tengu"    },
        "superieur":      { nature: "adjectif", root: "lamba"  },
        "superieure":      { nature: "adjectif", root: "lamba"  },
        "puissant":      { nature: "adjectif", root: "fumu"  },
        "puissants":      { nature: "adjectif", root: "fumu"  },
        "puissante":      { nature: "adjectif", root: "fumu"  },
        "inconnu":      { nature: "adjectif", root: "simanyi"  },
        "inconnue":      { nature: "adjectif", root: "simanyi"  },
        "lourd":      { nature: "adjectif", root: "zito"  },
        "simple":      { nature: "adjectif", root: "novu"  },
        "fort":      { nature: "adjectif", root: "komye"  },
        "forte":      { nature: "adjectif", root: "komye"  },
        "différent":      { nature: "adjectif", root: "hushani"  },
        "différente":      { nature: "adjectif", root: "hushani"  },
        "joli":      { nature: "adjectif", root: "nyekembo"  },
        "jolie":      { nature: "adjectif", root: "nyekembo"  },
        "difficile":      { nature: "adjectif", root: "komu"  },
        "autre":      { nature: "adjectif", root: "ndi"  },
        "autres":      { nature: "adjectif", root: "ndi"  },
        "premier":      { nature: "adjectif", root: "tanzi"  },
        "dernier":      { nature: "adjectif", root: "sika"  },
        "dernière":      { nature: "adjectif", root: "sika"  },
        "tout":      { nature: "adjectif", root: "oshe"  },
        "toute":      { nature: "adjectif", root: "oshe"  },
        "tous":      { nature: "adjectif", root: "oshe"  },
        "froid":      { nature: "adjectif", root: "fweela"  },
        "long":      { nature: "adjectif", root: "le"  },
        "longue":      { nature: "adjectif", root: "le"  },
        "seul":      { nature: "adjectif", root: "ngwa"  },
        "neuf":      { nature: "adjectif", root: "hyahya"  },
        "neuve":      { nature: "adjectif", root: "hyahya"  },
        "double":      { nature: "adjectif", root: "vuli"  },
        "souple":      { nature: "adjectif", root: "ngu"  },
        "combien":      { nature: "adjectif", root: "nga"  },
        "mince":      { nature: "adjectif", root: "nini"  },
        "quel":      { nature: "adjectif", root: "ki"  },
        "quelle":      { nature: "adjectif", root: "ki"  },
        "quels":      { nature: "adjectif", root: "ki"  },
        "inférieur":      { nature: "adjectif", root: "lumula"  },
        "inférieure":      { nature: "adjectif", root: "lumula"  },
       
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
      
    },

    // ==================== ADVERBES ====================
    adverbs: {
        "bien":       "bushoga",
        "mal":        "bubi",
        "beaucoup":   "mubombo",
        "très":       "mene",
        "trop":       "bite",
        "peu":        "binini",
        "maintenant": "ine",
        "aujourd'hui":"zene",
        "hier":       "mukesi",
        "demain":     "kusezi",
        "toujours":   "kizanga ne kizanga",
        "jamais":     "ata limwe",
        "souvent":    "kizanga ne kizanga",
        "parfois":    "limwe limwe",
        "ici":        "hano",
        "là":         "yahoo",
        "vite":       "vuba",
        "lentement":  "bunibuni",
        "partout":  "hoshe",
        "depuis":  "tangila",
        "avant":  "malanga",
        "devant":  "malanga",
        "derrière":  "nyuma",
        "gauche":  "kabiki",
        "droite":  "kunume",
        "éternel":  "myakula",
        "interieur":  "ndani",
        "nombreux":  "mubombo",
        "bientôt":  "kye kigavwa",
        "comment":  "vini",
        "surtout":  "menemene",
        "puis":  "kisha",
        "près":  "hafi",
        "proche":  "hafi",
        "après":  "hanyuma",
        "cependant":  "hano'ine",
        "tôt":  "malanga",
        "pourquoi":  "lumbulweki",
        "souplesse":  "bwangu",
        "saussi":  "ine",
        "loin":  "hale",
        "presque":  "kini nahoo",
        "ailleurs":  "handi",
        "seulement":  "nahoo",
        "autour":  "hango",
        "souvent":  "menemene",
        "dessus":  "lugulu",
        "longtemps":  "kalanzi",
        "comme":  "ngevye",
        "lendemain":  "kusezikwage",
        "avant-hier":  "kaite",
        "dehors":  "ambuga",
        "passé":  "kya itile",
        "silence":  "muubi",
        "plus":  "kandi",
        "encore":  "kandi",
        "déjà":  "kale",
        "non":  "kete",
        "aussitôt":  "haho'ine",
    },

    // ==================== PRÉPOSITIONS ====================
    prepositions: {
        "à":     "ku",
        // "de" géré par relatives.js (table de/qui/que)
        "dans":  "mu",
        "sur":   "kuli",
        "sous":  "hasi",
        "avec":  "ne",
        "sans":  "munzila",
        "pour":  "lumbu",
        "vers":  "kuli",
        "chez":  "kwa",
        "entre": "hakati ye",
        "après": "nyuma",
        "avant": "malanga",
        "selon": "kwe",
        "hors": "ambuga",
        "malgré": "atakama",
        "par": "kwa",
        "à": "ku",
        "jusque": "mpaka",
        "vers": "kwe",
        "durant": "mu ikyo kizanga",
        "auprès": "hofi",
        "parmi": "hakati",
        "quoi": "biki",
        "au": "ku",
    },

    // ==================== CONJONCTIONS ====================
    conjunctions: {
        "et":          "ne",
        "ou":          "aiza",
        "mais":        "sinaho",
        "donc":        "ikuli",
        "car":         "vivyo",
        "si":          "ikaba",
        "que":         "vye",
        "quand":       "kizanga",
        "comme":       "vye",
        "parce que":   "lumbu",
        "lorsque":     "vye'ine",
        "alors que":     "sinaho"
    },

    // ==================== NOMBRES ====================
    numbers: {
        "un":    "umwe", "une":   "umwe",
        "deux":  "zibili",
        "trois": "zishatu",
        "quatre":"zine",
        "cinq":  "zitanu",
        "six":   "mutanda",
        "sept":  "bulinda",
        "huit":  "munana",
        "neuf":  "mwenda",
        "dix":   "kumi",
        "cent":  "jana",
        "mille": "kinono kimwe"
    },

    // ==================== ARTICLES (à supprimer) ====================
    articles: [
        "le", "la", "les", "l'", "l'",
        "des", "du", "de la", "de l'", "de l'"
        // "un" et "une" sont des NOMBRES en Kivira → pas dans les articles
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
