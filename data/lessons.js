// Base de données des leçons Kivira
const lessonData = {
    salutations: [
        {
            id: 1,
            title: "Mwavyuke",
            phrase: "Mwavyuke",
            translation: "Bonjour",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            audio: "audio/Mwahilize.mp3",
              options: [
                { fr: "Bonjour", en: "Good morning", sw: "Jambo" },
                { fr: "Bonsoir", en: "Good evening", sw: "Jambo" },
                { fr: "Bonne nuit", en: "Good night", sw: "Usiku mwema" },
                { fr: "Aurevoir", en: "Goodbye", sw: "Kwaheri" }
            ],
            correctOption: 0,
            words: ["Mwavyuke",  ]
          },  
        {
            id: 2,
            title: "Vini myazi?",
            phrase: "Vini myazi?",
            translation: "Comment allez-vous?",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%2310b981' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E😊%3C/text%3E%3C/svg%3E",
            options: ["Comment allez-vous?", "Merci beaucoup", "Je vais bien", "Bonne journée"],
            correctOption: 0,
            words: ["myazi", "vini", ]
        },
        {
            id: 3,
            title: "Nili Bushoga",
            phrase: "Nili Bushoga",
            translation: "Je vais bien",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%233b82f6' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👍%3C/text%3E%3C/svg%3E",
            options: ["Je vais bien", "Je vais mal", "Peut-être", "Je ne sais pas"],
            correctOption: 0,
            words: ["Nili", "Bushoga"]
        },
         {
            id: 4,
            title: "Mwahilize",
            phrase: "Mwahilize",
            translation: "Bonsoir",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
             audio: "audio/muraho.mp3",
            options: ["Bonsoir", "Au revoir", "Merci", "S'il vous plaît"],
            correctOption: 0,
            words: ["Mwahilize"]
        },
         {
            id: 5,
            title: "Mwasibe kifwa",
            phrase: "Mwasibe kifwa",
            translation: "Bon apres-midi hero",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            options: ["Bon apres-midi hero", "Bon apres-midi Monsieur", "Bonjour Monsieur", "S'il vous plaît"],
            correctOption: 0,
            words: ["Kifwa", "Mwasibe"]
        },
         {
            id: 6,
            title: "Kalo kashoga",
            phrase: "Kalo kashoga",
            translation: "Bonne nuit",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            options: ["Bon reveil", "Bonne nuit", "Bon sommeil", "Bonne soirée"],
            correctOption: 0,
            words: ["Kalo", "Kashoga"]
        },
         {
            id: 7,
            title: "Uli magala?",
            phrase: "Uli magala?",
            translation: "Tu es en forme?",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            options: ["Tu es en forme?", "En forme?", "Es que tu es en forme?", "en forme vraiment?"],
            correctOption: 0,
            words: ["Kifwa", "Mwasibe"]
        },
         {
            id: 8,
            title: "Eyoo nili magala",
            phrase: "Eyoo nili magala",
            translation: "Oui je suis en forme",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            options: ["Non pas en forme", "nous sommes en forme", "je suis en santé", "Oui je suis en forme"],
            correctOption: 0,
            words: ["magala", "nili", "eyoo"]
        },
         {
            id: 9,
            title: "Ambuga muli bagumana?",
            phrase: "Ambuga muli bagumana?",
            translation: "Vous etes en forme tous à la maison?",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            options: ["Nous sommes tous en forme à la maison", "Vous etes en forme tous à la maison", "Es que nous sommes en forme?", "En forme?"],
            correctOption: 0,
            words: ["bagumana", "Ambuga", "muli"]
        },
         {
            id: 10,
            title: "Eyoo tuli bagumana",
            phrase: "Eyoo tuli bagumana",
            translation: "Oui nous sommes en forme",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            options: ["Oui nous sommes en forme", "Oui je suis en forme", "Nous sommes en forme", "En forme"],
            correctOption: 0,
            words: ["tuli", "Eyoo", "bagumana"]
        }
    ],
    famille: [
        
                {
                id: 1,
                title: "Tata",
                phrase: "Tata",
                translation: "Papa",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
                    
                audio: "audio/Papa.mp3",
                options: [
                    { fr: "Papa", en: "Father", sw: "Baba" },
                    { fr: "Maman", en: "Mother", sw: "Mama" },
                    { fr: "Grand-père", en: "Grandfather", sw: "Babu" },
                    { fr: "Oncle", en: "Uncle", sw: "Mjomba" }
                ],
                correctOption: 0,
                words: ["Tata"]
                },
                    
                {
        id: 2,
                title: "Mwana",
                phrase: "Mwana",
                translation: "Enfant",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
        audio: "audio/Enfant.mp3",
        options: [
            { fr: "Jeune", en: "Young person", sw: "Kijana" },
            { fr: "Bébé", en: "Baby", sw: "Mtoto mchanga" },
            { fr: "Enfant", en: "Child", sw: "Mtoto" },
            { fr: "Parent", en: "Parent", sw: "Mzazi" }
        ],
        correctOption: 2,
        words: ["Mwana"]
        },

        {
        id: 3,
                title: "yaye",
                phrase: "Yaye",
                translation: "Maman",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
        audio: "audio/Maman.mp3",
        options: [
            { fr: "Maman", en: "Mother", sw: "Mama" },
            { fr: "Grand-mère", en: "Grandmother", sw: "Bibi" },
            { fr: "Tante", en: "Aunt", sw: "Shangazi" },
            { fr: "Sœur", en: "Sister", sw: "Dada" }
        ],
        correctOption: 0,
        words: ["Yaye"]
        },
        {
        id: 4,
                title: "Lenzi lyani",
                phrase: "Lenzi lyani",
                translation: "Mon amour",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
        audio: "audio/Mon_amour.mp3",
        options: [
            { fr: "Sa tante", en: "His/Her aunt", sw: "Shangazi yake" },
            { fr: "Sa mère", en: "His/Her mother", sw: "Mama yake" },
            { fr: "Mon amour", en: "My love", sw: "Mpendwa wangu" },
            { fr: "Mon coeur", en: "My heart", sw: "Roho yangu" }
        ],
        correctOption: 2,
        words: ["Lenzi", "lyani"]
        },

        {
                    id: 5,
                    title: "Mwali",
                            phrase: "Mwali",
                            translation: "Soeur",
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
                    audio: "audio/Soeur.mp3",
                    options: [
                        { fr: "Frère", en: "Brother", sw: "Kaka" },
                        { fr: "Sœur", en: "Sister", sw: "Dada" },
                        { fr: "Cousine", en: "Cousin", sw: "Binamu" },
                        { fr: "Amie", en: "Friend", sw: "Rafiki" }
                    ],
                    correctOption: 1,
                    words: ["Mwali"]
                    },

                    {
                    id: 6,
                            title: "Baba",
                            phrase: "Baba",
                            translation: "Frère",
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
                    audio: "audio/Frere.mp3",
                    options: [
                        { fr: "Ami", en: "Friend", sw: "Rafiki" },
                        { fr: "Neveu", en: "Nephew", sw: "Mpwa" },
                        { fr: "Garçon", en: "Boy", sw: "Mvulana" },
                        { fr: "Frère", en: "Brother", sw: "Kaka" }
                    ],
                    correctOption: 3,
                    words: ["Baba"]
                    },

                    {
                    id: 7,
                            title: "Baba'ani mukule",
                            phrase: "Baba'ani mukule",
                            translation: "Mon grand-frère",
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
                    audio: "audio/Mon_grand_frere.mp3",
                    options: [
                        { fr: "Mon grand-frère", en: "My big brother", sw: "Kaka yangu" },
                        { fr: "Mon petit-frère", en: "My little brother", sw: "Mdogo wangu" },
                        { fr: "Mon cousin", en: "My cousin", sw: "Binamu yangu" },
                        { fr: "Mon oncle", en: "My uncle", sw: "Mjomba wangu" }
                    ],
                    correctOption: 0,
                    words: ["Baba'ani", "mukule"]
                    },

                    {
                    id: 8,
                            title: "Mwali'ani mwanuke",
                            phrase: "Mwali'ani mwanuke",
                            translation: "Ma petite soeur",
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
                    audio: "audio/Ma_petite_soeur.mp3",
                    options: [
                        { fr: "Ma grande sœur", en: "My big sister", sw: "Dada yangu" },
                        { fr: "Ma cousine", en: "My cousin", sw: "Binamu yangu" },
                        { fr: "Ma mère", en: "My mother", sw: "Mama yangu" },
                        { fr: "Ma petite sœur", en: "My little sister", sw: "Mdogo wangu" }
                    ],
                    correctOption: 3,
                    words: ["Mwali'ani", "mwanuke"]
                    },

                    {
                    id: 9,
                            title: "Mukaza'ni",
                            phrase: "Mukaza'ni",
                            translation: "Ma femme",
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
                    audio: "audio/Ma_femme.mp3",
                    options: [
                        { fr: "Ma fille", en: "My daughter", sw: "Binti yangu" },
                        { fr: "Ma fiancée", en: "My fiancée", sw: "Mchumba wangu" },
                        { fr: "Ma femme", en: "My wife", sw: "Mke wangu" },
                        { fr: "Ma belle-mère", en: "My mother-in-law", sw: "Mama mkwe wangu" }
                    ],
                    correctOption: 2,
                    words: ["Mukaza'ni"]
                    },

                    {
                    id: 10,
                            title: "Kukwe wetu",
                            phrase: "Kukwe wetu",
                            translation: "Notre grand-mère",
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
                    audio: "audio/Notre_grand_mere.mp3",
                    options: [
                        { fr: "Votre grand-mère", en: "Your grandmother", sw: "Bibi yenu" },
                        { fr: "Notre grand-mère", en: "Our grandmother", sw: "Bibi yetu" },
                        { fr: "Ma grand-mère", en: "My grandmother", sw: "Bibi yangu" },
                        { fr: "Leur grand-mère", en: "Their grandmother", sw: "Bibi yao" }
                    ],
                    correctOption: 1,
                    words: ["Kukwe", "wetu"]
                    },

                    {
                    id: 11,
                            title: "Mwizo wani",
                            phrase: "Mwizo wani",
                            translation: "Mon oncle",
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
                    audio: "audio/Mon_oncle.mp3",
                    options: [
                        { fr: "Mon père", en: "My father", sw: "Baba yangu" },
                        { fr: "Mon beau-père", en: "My father-in-law", sw: "Baba mkwe wangu" },
                        { fr: "Mon grand-père", en: "My grandfather", sw: "Babu yangu" },
                        { fr: "Mon oncle", en: "My uncle", sw: "Mjomba wangu" }
                    ],
                    correctOption: 3,
                    words: ["Mwizo", "wani"]
                    },
                    {
                    id: 12,
                            title: "Shengi wage",
                            phrase: "Shengi wage",
                            translation: "Sa tante",
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23ec4899' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👨‍👩‍👧‍👦%3C/text%3E%3C/svg%3E",
                    audio: "audio/Sa_tante.mp3",
                    options: [
                        { fr: "Sa tante", en: "His/Her aunt", sw: "Shangazi yake" },
                        { fr: "Sa mère", en: "His/Her mother", sw: "Mama yake" },
                        { fr: "Sa nièce", en: "His/Her niece", sw: "Mpwa wake" },
                        { fr: "Sa belle-sœur", en: "His/Her sister-in-law", sw: "Shemeji yake" }
                    ],
                    correctOption: 0,
                    words: ["Shengi", "wage"]
                    },


    ],
    cuisine: [
        {
            id: 1,
            title: "Je veux manger",
            phrase: "Ndashaka kurya",
            translation: "Je veux manger",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23f59e0b' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E🍽️%3C/text%3E%3C/svg%3E",
            options: ["Je veux manger", "Je veux boire", "J'ai faim", "C'est délicieux"],
            correctOption: 0,
            words: ["Ndashaka", "kurya"]
        }
    ],
   
    nombres: [
        {
            id: 1,
            title: "Un",
            phrase: "Rimwe",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='70' text-anchor='middle' font-size='60' fill='%23667eea' font-weight='bold'%3E1%3C/text%3E%3C/svg%3E",
            audio: null,
            options: [
                { fr: "Un", en: "One", sw: "Moja" },
                { fr: "Deux", en: "Two", sw: "Mbili" },
                { fr: "Trois", en: "Three", sw: "Tatu" },
                { fr: "Zéro", en: "Zero", sw: "Sifuri" }
            ],
            correctOption: 0,
            words: ["Rimwe"]
        },
        {
            id: 2,
            title: "Deux",
            phrase: "Kabiri",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='70' text-anchor='middle' font-size='60' fill='%2310b981' font-weight='bold'%3E2%3C/text%3E%3C/svg%3E",
            audio: null,
            options: [
                { fr: "Un", en: "One", sw: "Moja" },
                { fr: "Deux", en: "Two", sw: "Mbili" },
                { fr: "Trois", en: "Three", sw: "Tatu" },
                { fr: "Quatre", en: "Four", sw: "Nne" }
            ],
            correctOption: 1,
            words: ["Kabiri"]
        },
        {
            id: 3,
            title: "Trois",
            phrase: "Gatatu",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='70' text-anchor='middle' font-size='60' fill='%23f59e0b' font-weight='bold'%3E3%3C/text%3E%3C/svg%3E",
            audio: null,
            options: [
                { fr: "Deux", en: "Two", sw: "Mbili" },
                { fr: "Trois", en: "Three", sw: "Tatu" },
                { fr: "Quatre", en: "Four", sw: "Nne" },
                { fr: "Cinq", en: "Five", sw: "Tano" }
            ],
            correctOption: 1,
            words: ["Gatatu"]
        }
    ],
    etre: [
            {
  id: 1,
  title: "Nili",
  phrase: "Nili",
  translation: "Je suis",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Je_suis.mp3",
  options: [
    { fr: "Je vais", en: "I go", sw: "Ninaenda" },
    { fr: "J'ai", en: "I have", sw: "Niko na" },
    { fr: "Je dis", en: "I say", sw: "Ninasema" },
    { fr: "Je suis", en: "I am", sw: "Mimi ni" }
  ],
  correctOption: 3,
  words: ["Nili"]
},

{
  id: 2,
  title: "Uli",
  phrase: "Uli",
  translation: "Tu es",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Tu_es.mp3",
  options: [
    { fr: "Il est", en: "He/She is", sw: "Yeye ni" },
    { fr: "Tu es", en: "You are", sw: "Wewe ni" },
    { fr: "Nous sommes", en: "We are", sw: "Sisi ni" },
    { fr: "Ils sont", en: "They are", sw: "Wao ni" }
  ],
  correctOption: 1,
  words: ["Uli"]
},

{
  id: 3,
  title: "Ali",
  phrase: "Ali",
  translation: "Il est",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Il_est.mp3",
  options: [
    { fr: "Il est", en: "He/She is", sw: "Yeye ni" },
    { fr: "Tu es", en: "You are", sw: "Wewe ni" },
    { fr: "C'est lui", en: "It is him", sw: "Ni yeye" },
    { fr: "Qui est-ce ?", en: "Who is it?", sw: "Ni nani?" }
  ],
  correctOption: 0,
  words: ["Ali"]
},

{
  id: 4,
  title: "Tuli",
  phrase: "Tuli",
  translation: "Nous sommes",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Nous_sommes.mp3",
  options: [
    { fr: "Ils sont", en: "They are", sw: "Wao ni" },
    { fr: "Vous êtes", en: "You all are", sw: "Nyinyi ni" },
    { fr: "Nous sommes", en: "We are", sw: "Sisi ni" },
    { fr: "Je suis", en: "I am", sw: "Mimi ni" }
  ],
  correctOption: 2,
  words: ["Tuli"]
},

{
  id: 5,
  title: "Muli",
  phrase: "Muli",
  translation: "Vous êtes",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Vous_etes.mp3",
  options: [
    { fr: "Nous sommes", en: "We are", sw: "Sisi ni" },
    { fr: "Vous êtes", en: "You all are", sw: "Nyinyi ni" },
    { fr: "Ils sont", en: "They are", sw: "Wao ni" },
    { fr: "Tu es", en: "You are", sw: "Wewe ni" }
  ],
  correctOption: 1,
  words: ["Muli"]
},

{
  id: 6,
  title: "Bali",
  phrase: "Bali",
  translation: "Ils sont",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Ils_sont.mp3",
  options: [
    { fr: "Nous sommes", en: "We are", sw: "Sisi ni" },
    { fr: "Elle est", en: "She is", sw: "Yeye ni" },
    { fr: "Ils sont", en: "They are", sw: "Wao ni" },
    { fr: "Vous êtes", en: "You all are", sw: "Nyinyi ni" }
  ],
  correctOption: 2,
  words: ["Bali"]
},

{
  id: 7,
  title: "Nili mulongeshwa",
  phrase: "Nili mulongeshwa",
  translation: "Je suis un élève",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Je_suis_un_eleve.mp3",
  options: [
    { fr: "Je suis un élève", en: "I am a student", sw: "Mimi ni mwanafunzi" },
    { fr: "Je suis un maître", en: "I am a teacher", sw: "Mimi ni mwalimu" },
    { fr: "Je suis un enfant", en: "I am a child", sw: "Mimi ni mtoto" },
    { fr: "Je suis un travailleur", en: "I am a worker", sw: "Mimi ni mfanyakazi" }
    ],
     },
{
  id: 8,
  title: "Nili musakya",
  phrase: "Nili musakya",
  translation: "Je suis commerçant",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Je_suis_commercant.mp3",
  options: [
    { fr: "Je suis un fermier", en: "I am a farmer", sw: "Mimi ni mkulima" },
    { fr: "Je suis un chef", en: "I am a leader", sw: "Mimi ni kiongozi" },
    { fr: "Je suis commerçant", en: "I am a trader", sw: "Mimi ni mfanyabiashara" },
    { fr: "Je suis un chauffeur", en: "I am a driver", sw: "Mimi ni dereva" }
  ],
  correctOption: 2,
  words: ["Nili musakya"]
},

{
  id: 9,
  title: "Tuli a Buvira",
  phrase: "Tuli a Buvira",
  translation: "Nous sommes à Uvira",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Nous_sommes_a_Uvira.mp3",
  options: [
    { fr: "Nous sommes arrivés", en: "We have arrived", sw: "Tumefika" },
    { fr: "Nous sommes à Uvira", en: "We are in Uvira", sw: "Tuko Uvira" },
    { fr: "Où sommes-nous ?", en: "Where are we?", sw: "Tuko wapi?" },
    { fr: "Nous allons à Uvira", en: "We are going to Uvira", sw: "Tunaenda Uvira" }
  ],
  correctOption: 1,
  words: ["Tuli a Buvira"]
},{
  id: 10,
  title: "Ali kibinda",
  phrase: "Ali kibinda",
  translation: "Il est riche",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Il_est_riche.mp3",
  options: [
    { fr: "Il est riche", en: "He is rich", sw: "Yeye ni tajiri" },
    { fr: "Il est fort", en: "He is strong", sw: "Yeye ni mwenye nguvu" },
    { fr: "Il est sage", en: "He is wise", sw: "Yeye ni mwenye hekima" },
    { fr: "Il est là", en: "He is there", sw: "Yeye yuko hapo" }
  ],
  correctOption: 0,
  words: ["Ali kibinda"]
},
{
  id: 11,
  title: "Uli munyekembo",
  phrase: "Uli munyekembo",
  translation: "Tu es belle",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/Tu_es_belle.mp3",
  options: [
    { fr: "Tu es gentille", en: "You are kind", sw: "Wewe ni mwema" },
    { fr: "Tu es grande", en: "You are tall", sw: "Wewe ni mrefu" },
    { fr: "Tu es belle", en: "You are beautiful", sw: "Wewe ni mrembo" },
    { fr: "Tu es ici", en: "You are here", sw: "Uko hapa" }
  ],
  correctOption: 2,
  words: ["Uli munyekembo"]
}

    ],
    
    avoir: [
                {
  id: 1,
  title: "Niline Kasalo",
  phrase: "Niline Kasalo",
  translation: "J'ai un stylo",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/J_ai_un_stylo.mp3",
  options: [
    { fr: "J'ai un livre", en: "I have a book", sw: "Niko na kitabu" },
    { fr: "J'ai un stylo", en: "I have a pen", sw: "Niko na kalamu" },
    { fr: "C'est mon stylo", en: "It is my pen", sw: "Ni kalamu yangu" },
    { fr: "Donne-moi le stylo", en: "Give me the pen", sw: "Nipe kalamu" }
  ],
  correctOption: 1,
  words: ["Niline Kasalo"]
},

{
  id: 2,
  title: "Nabane kasalo",
  phrase: "Nabane kasalo",
  translation: "J'avais un stylo",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/J_avais_un_stylo.mp3",
  options: [
    { fr: "J'avais un stylo", en: "I had a pen", sw: "Nilikuwa na kalamu" },
    { fr: "J'ai un stylo", en: "I have a pen", sw: "Niko na kalamu" },
    { fr: "Il a un stylo", en: "He has a pen", sw: "Yeye ana kalamu" },
    { fr: "Où est le stylo ?", en: "Where is the pen?", sw: "Kalamu iko wapi?" }
  ],
  correctOption: 0,
  words: ["Nabane kasalo"]
},

{
  id: 3,
  title: "Nihete kimamala",
  phrase: "Nihete kimamala",
  translation: "J'ai une voiture",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/J_ai_une_voiture.mp3",
  options: [
    { fr: "J'ai un vélo", en: "I have a bicycle", sw: "Niko na baiskeli" },
    { fr: "C'est ma voiture", en: "It is my car", sw: "Ni gari langu" },
    { fr: "Je vois une voiture", en: "I see a car", sw: "Ninaona gari" },
    { fr: "J'ai une voiture", en: "I have a car", sw: "Niko na gari" }
  ],
  correctOption: 3,
  words: ["Nihete kimamala"]
},
{
  id: 4,
  title: "Nihete katelambila",
  phrase: "Nihete katelambila",
  translation: "J'ai un téléphone",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/J_ai_un_telephone.mp3",
  options: [
    { fr: "C'est mon téléphone", en: "It is my phone", sw: "Ni simu yangu" },
    { fr: "J'ai un téléphone", en: "I have a phone", sw: "Niko na simu" },
    { fr: "Où est le téléphone ?", en: "Where is the phone?", sw: "Simu iko wapi?" },
    { fr: "Appelle-moi", en: "Call me", sw: "Nipigie simu" }
  ],
  correctOption: 1,
  words: ["Nihete katelambila"]
},

{
  id: 5,
  title: "Nihete kitabo",
  phrase: "Nihete kitabo",
  translation: "J'ai un livre",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/J_ai_un_livre.mp3",
  options: [
    { fr: "J'ai un livre", en: "I have a book", sw: "Niko na kitabu" },
    { fr: "Je lis un livre", en: "I am reading a book", sw: "Ninasoma kitabu" },
    { fr: "C'est ton livre", en: "It is your book", sw: "Ni kitabu chako" },
    { fr: "Où est le livre ?", en: "Where is the book?", sw: "Kitabu kiko wapi?" }
  ],
  correctOption: 0,
  words: ["Nihete kitabo"]
},


{
  id: 6,
  title: "Tuhete koolo",
  phrase: "Tuhete koolo",
  translation: "Nous avons un roi",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/Nous_avons_un_roi.mp3",
  options: [
    { fr: "C'est le roi", en: "It is the king", sw: "Ni mfalme" },
    { fr: "Le roi arrive", en: "The king is coming", sw: "Mfalme anakuja" },
    { fr: "Nous avons un roi", en: "We have a king", sw: "Tuko na mfalme" },
    { fr: "Où est le roi ?", en: "Where is the king?", sw: "Mfalme iko wapi?" }
  ],
  correctOption: 2,
  words: ["Tuhete koolo"]
},


{
  id: 7,
  title: "Usihete misi",
  phrase: "Usihete misi",
  translation: "Tu n'as pas de force",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/Tu_n_as_pas_de_force.mp3",
  options: [
    { fr: "Tu as de la force", en: "You have strength", sw: "Una nguvu" },
    { fr: "Tu n'as pas de force", en: "You have no strength", sw: "Hauna nguvu" },
    { fr: "Il est faible", en: "He is weak", sw: "Yeye ni dhaifu" },
    { fr: "Donne-moi de la force", en: "Give me strength", sw: "Nipe nguvu" }
  ],
  correctOption: 1,
  words: ["Usihete misi"]
},


    ],
    endroit: [
                {
  id: 1,
  title: "Nili ambuga",
  phrase: "Nili ambuga",
  translation: "Je suis à la maison",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/Je_suis_a_la_maison.mp3",
  options: [
    { fr: "Je suis au travail", en: "I am at work", sw: "Niko kazini" },
    { fr: "Je suis dehors", en: "I am outside", sw: "Niko nje" },
    { fr: "Je suis au marché", en: "I am at the market", sw: "Niko sokoni" },
    { fr: "Je suis à la maison", en: "I am at home", sw: "Niko nyumbani" }
  ],
  correctOption: 3,
  words: ["Nili ambuga"]
},

{
  id: 2,
  title: "Nili Ku malingesho",
  phrase: "Nili Ku malingesho",
  translation: "Je suis à l'école",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/Je_suis_a_l_ecole.mp3",
  options: [
    { fr: "Je suis à l'école", en: "I am at school", sw: "Niko shuleni" },
    { fr: "Je suis à l'église", en: "I am at church", sw: "Niko kanisani" },
    { fr: "Je suis au bureau", en: "I am at the office", sw: "Niko ofisini" },
    { fr: "Je suis en classe", en: "I am in class", sw: "Niko darasani" }
  ],
  correctOption: 0,
  words: ["Nili Ku malingesho"]
},
{
  id: 3,
  title: "Nili hano",
  phrase: "Nili hano",
  translation: "Je suis ici",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/Je_suis_ici.mp3",
  options: [
    { fr: "Je suis là-bas", en: "I am over there", sw: "Niko kule" },
    { fr: "Je suis là", en: "I am there", sw: "Niko hapo" },
    { fr: "Je suis ici", en: "I am here", sw: "Niko hapa" },
    { fr: "Je suis arrivé", en: "I have arrived", sw: "Nimefika" }
  ],
  correctOption: 2,
  words: ["Nili hano"]
},

{
  id: 4,
  title: "Nahemba hano",
  phrase: "Nahemba hano",
  translation: "J'attends ici",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/J_attends_ici.mp3",
  options: [
    { fr: "Je reste ici", en: "I stay here", sw: "Nabaki hapa" },
    { fr: "J'attends ici", en: "I am waiting here", sw: "Nasubiri hapa" },
    { fr: "Je m'assois ici", en: "I sit here", sw: "Nakaa hapa" },
    { fr: "Je cherche ici", en: "I search here", sw: "Natafuta hapa" }
  ],
  correctOption: 1,
  words: ["Nahemba hano"]
},


{
  id: 5,
  title: "Natuka",
  phrase: "Natuka",
  translation: "Je suis arrivé",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/Je_suis_arrive.mp3",
  options: [
    { fr: "Je suis arrivé", en: "I have arrived", sw: "Nimefika" },
    { fr: "Je suis parti", en: "I left", sw: "Nimeondoka" },
    { fr: "Je suis prêt", en: "I am ready", sw: "Niko tayari" },
    { fr: "Je suis entré", en: "I came in", sw: "Nimeingia" }
  ],
  correctOption: 0,
  words: ["Natuka"]
},

{
  id: 6,
  title: "Naya",
  phrase: "Naya",
  translation: "Je pars",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/Je_pars.mp3",
  options: [
    { fr: "Je viens", en: "I am coming", sw: "Nakuja" },
    { fr: "Je cours", en: "I am running", sw: "Nakimbia" },
    { fr: "Je marche", en: "I am walking", sw: "Natembea" },
    { fr: "Je pars", en: "I am leaving", sw: "Naenda" }
  ],
  correctOption: 3,
  words: ["Naya"]
},

{
  id: 7,
  title: "Nazimila",
  phrase: "Nazimila",
  translation: "Je suis perdu",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/Je_suis_perdu.mp3",
  options: [
    { fr: "Je suis fatigué", en: "I am tired", sw: "Nimechoka" },
    { fr: "Je suis malade", en: "I am sick", sw: "Mimi ni mgonjwa" },
    { fr: "Je suis perdu", en: "I am lost", sw: "Nimepotea" },
    { fr: "Je suis occupé", en: "I am busy", sw: "Niko na kazi" }
  ],
  correctOption: 2,
  words: ["Nazimila"]
},



    ],
    sociale: [
                {
  id: 1,
  title: "Wa'nga ngwasa?",
  phrase: "Wa'nga ngwasa?",
  translation: "Peux-tu m'aider ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/Peux_tu_m_aider.mp3",
  options: [
    { fr: "Peux-tu venir ?", en: "Can you come?", sw: "Unaweza kuja?" },
    { fr: "Peux-tu m'aider ?", en: "Can you help me?", sw: "Unaweza kunisaidia?" },
    { fr: "Peux-tu parler ?", en: "Can you speak?", sw: "Unaweza kusema?" },
    { fr: "Peux-tu partir ?", en: "Can you leave?", sw: "Unaweza kuondoka?" }
  ],
  correctOption: 1,
  words: ["Wa'nga ngwasa?"]
},

{
  id: 2,
  title: "Ukunge mwana",
  phrase: "Ukunge mwana",
  translation: "Garde l'enfant",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/Garde_l_enfant.mp3",
  options: [
    { fr: "Garde l'enfant", en: "Watch the child", sw: "Mlinde mtoto" },
    { fr: "Appelle l'enfant", en: "Call the child", sw: "Mwite mtoto" },
    { fr: "Cherche l'enfant", en: "Look for the child", sw: "Mtafute mtoto" },
    { fr: "Lave l'enfant", en: "Wash the child", sw: "Mwoshe mtoto" }
  ],
  correctOption: 0,
  words: ["Ukunge mwana"]
},
{
  id: 3,
  title: "Wa'nga nilombosa?",
  phrase: "Wa'nga nilombosa?",
  translation: "Peux-tu me montrer ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/Peux_tu_me_montrer.mp3",
  options: [
    { fr: "Peux-tu m'entendre ?", en: "Can you hear me?", sw: "Unaweza kunisikia?" },
    { fr: "Peux-tu m'écrire ?", en: "Can you write to me?", sw: "Unaweza kuniandikia?" },
    { fr: "Peux-tu me donner ?", en: "Can you give me?", sw: "Unaweza kunipa?" },
    { fr: "Peux-tu me montrer ?", en: "Can you show me?", sw: "Unaweza kunionyesha?" }
  ],
  correctOption: 3,
  words: ["Wa'nga nilombosa?"]
},

{
  id: 4,
  title: "Umulombose",
  phrase: "Umulombose",
  translation: "Montre-lui",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/Montre_lui.mp3",
  options: [
    { fr: "Donne-lui", en: "Give him/her", sw: "Mpe" },
    { fr: "Montre-lui", en: "Show him/her", sw: "Mwonyeshe" },
    { fr: "Appelle-le", en: "Call him/her", sw: "Mwite" },
    { fr: "Laisse-le", en: "Leave him/her", sw: "Mwache" }
  ],
  correctOption: 1,
  words: ["Umulombose"]
},

{
  id: 5,
  title: "Nasima",
  phrase: "Nasima",
  translation: "J'aime",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/J_aime.mp3",
  options: [
    { fr: "J'aime", en: "I like", sw: "Napenda" },
    { fr: "Je veux", en: "I want", sw: "Nataka" },
    { fr: "Je déteste", en: "I hate", sw: "Nachukia" },
    { fr: "Je sais", en: "I know", sw: "Najua" }
  ],
  correctOption: 0,
  words: ["Nasima"]
},

{
  id: 6,
  title: "Nisisimi",
  phrase: "Nisisimi",
  translation: "Je n'aime pas",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/Je_n_aime_pas.mp3",
  options: [
    { fr: "Je n'ai pas", en: "I don't have", sw: "Sina" },
    { fr: "Je ne veux pas", en: "I don't want", sw: "Sitaki" },
    { fr: "Je n'aime pas", en: "I don't like", sw: "Sipendi" },
    { fr: "Je ne sais pas", en: "I don't know", sw: "Sijui" }
  ],
  correctOption: 2,
  words: ["Nisisimi"]
},

{
  id: 7,
  title: "Wagila bushoga",
  phrase: "Wagila bushoga",
  translation: "Tu fais bien",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/Tu_fais_bien.mp3",
  options: [
    { fr: "Tu parles bien", en: "You speak well", sw: "Unasema vizuri" },
    { fr: "Tu fais bien", en: "You do well", sw: "Unafanya vizuri" },
    { fr: "Tu viens ici", en: "You come here", sw: "Unakuja hapa" },
    { fr: "Tu vas bien", en: "You are doing well", sw: "Uko salama" }
  ],
  correctOption: 1,
  words: ["Wagila bushoga"]
},

{
  id: 8,
  title: "Wagila bubi",
  phrase: "Wagila bubi",
  translation: "Tu fais mal",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/Tu_fais_mal.mp3",
  options: [
    { fr: "Tu agis vite", en: "You act fast", sw: "Unafanya haraka" },
    { fr: "Tu es méchant", en: "You are mean", sw: "Wewe ni mbaya" },
    { fr: "Tu travailles", en: "You are working", sw: "Unhatumika" },
    { fr: "Tu fais mal", en: "You do badly", sw: "Unafanya vibaya" }
  ],
  correctOption: 3,
  words: ["Wagila bubi"]
},

{
  id: 9,
  title: "Muvwe hano",
  phrase: "Muvwe hano",
  translation: "Venez ici",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/Venez_ici.mp3",
  options: [
    { fr: "Venez ici", en: "Come here", sw: "Njooni hapa" },
    { fr: "Allez là-bas", en: "Go there", sw: "Nendeni kule" },
    { fr: "Entrez ici", en: "Come in here", sw: "Ingieni hapa" },
    { fr: "Asseyez-vous ici", en: "Sit here", sw: "Kaeni hapa" }
  ],
  correctOption: 0,
  words: ["Muvwe hano"]
},

{
  id: 10,
  title: "Uli munyekembo",
  phrase: "Uli munyekembo",
  translation: "Tu es belle",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/Tu_es_belle.mp3",
  options: [
    { fr: "Tu es bonne", en: "You are good", sw: "Wewe ni mwema" },
    { fr: "Tu es belle", en: "You are beautiful", sw: "Wewe ni mrembo" },
    { fr: "Tu es grande", en: "You are tall", sw: "Wewe ni mrefu" },
    { fr: "Tu es intelligente", en: "You are smart", sw: "Wewe ni mwerevu" }
  ],
  correctOption: 1,
  words: ["Uli munyekembo"]
},

  
    ],
    maison: [
               {
  id: 1,
  title: "Mbanza",
  phrase: "Mbanza",
  translation: "Maison",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/Maison.mp3",
  options: [
    { fr: "Porte", en: "Door", sw: "Mlango" },
    { fr: "Chambre", en: "Room", sw: "Chumba" },
    { fr: "Maison", en: "House", sw: "Nyumba" },
    { fr: "Cuisine", en: "Kitchen", sw: "Jiko" }
  ],
  correctOption: 2,
  words: ["Mbanza"]
},

{
  id: 2,
  title: "Kifumbi",
  phrase: "Kifumbi",
  translation: "Chaise",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/Chaise.mp3",
  options: [
    { fr: "Table", en: "Table", sw: "Meza" },
    { fr: "Chaise", en: "Chair", sw: "Kiti" },
    { fr: "Lit", en: "Bed", sw: "Kitanda" },
    { fr: "Armoire", en: "Cupboard", sw: "Kabati" }
  ],
  correctOption: 1,
  words: ["Kifumbi"]
},

{
  id: 3,
  title: "Kashasha",
  phrase: "Kashasha",
  translation: "Table",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/Table.mp3",
  options: [
    { fr: "Banc", en: "Bench", sw: "Benchi" },
    { fr: "Étagère", en: "Shelf", sw: "Rafu" },
    { fr: "Tabouret", en: "Stool", sw: "Kiti cha duara" },
    { fr: "Table", en: "Table", sw: "Meza" }
  ],
  correctOption: 3,
  words: ["Kashasha"]
},

{
  id: 4,
  title: "Ngingo yani",
  phrase: "Ngingo yani",
  translation: "Mon lit",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/Mon_lit.mp3",
  options: [
    { fr: "Mon lit", en: "My bed", sw: "Kitanda changu" },
    { fr: "Mon matelas", en: "My mattress", sw: "Godoro langu" },
    { fr: "Mon oreiller", en: "My pillow", sw: "Mto wangu" },
    { fr: "Ma couverture", en: "My blanket", sw: "Blanketi langu" }
  ],
  correctOption: 0,
  words: ["Ngingo yani"]
},

{
  id: 5,
  title: "Bululi bwetu",
  phrase: "Bululi bwetu",
  translation: "Notre salon",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/Notre_salon.mp3",
  options: [
    { fr: "Notre balcon", en: "Our balcony", sw: "Baraza yetu" },
    { fr: "Notre cour", en: "Our yard", sw: "Uwanja wetu" },
    { fr: "Notre salon", en: "Our living room", sw: "Sebule yetu" },
    { fr: "Notre salle à manger", en: "Our dining room", sw: "Chumba chetu cha kulia" }
  ],
  correctOption: 2,
  words: ["Bululi bwetu"]
},
{
  id: 6,
  title: "Kisika kyani",
  phrase: "Kisika kyani",
  translation: "Ma chambre",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/Ma_chambre.mp3",
  options: [
    { fr: "Ma douche", en: "My shower", sw: "Oga yangu" },
    { fr: "Ma chambre", en: "My bedroom", sw: "Chumba changu" },
    { fr: "Mon bureau", en: "My office", sw: "Ofisi yangu" },
    { fr: "Mon balcon", en: "My balcony", sw: "Baraza yangu" }
  ],
  correctOption: 1,
  words: ["Kisika kyani"]
},




 
    ],
    demander: [
                {
  id: 1,
  title: "Boozo bunga",
  phrase: "Boozo bunga",
  translation: "Combien d'argent ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/Combien_d_argent.mp3",
  options: [
    { fr: "C'est cher", en: "It is expensive", sw: "Ni bei ghali" },
    { fr: "Quel prix ?", en: "What price?", sw: "Bei gani?" },
    { fr: "Combien d'argent ?", en: "How much money?", sw: "Pesa ngapi?" },
    { fr: "Donne l'argent", en: "Give the money", sw: "Toa pesa" }
  ],
  correctOption: 2,
  words: ["Boozo bunga"]
},

{
  id: 2,
  title: "Ali hani?",
  phrase: "Ali hani?",
  translation: "Il est où ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/Il_est_ou.mp3",
  options: [
    { fr: "C'est qui ?", en: "Who is it?", sw: "Ni nani?" },
    { fr: "Il est où ?", en: "Where is he?", sw: "Yuko wapi?" },
    { fr: "Il est là ?", en: "Is he there?", sw: "Yuko hapo?" },
    { fr: "Où vas-tu ?", en: "Where are you going?", sw: "Unaenda wapi?" }
  ],
  correctOption: 1,
  words: ["Ali hani?"]
},

{
  id: 3,
  title: "Bizanga binga",
  phrase: "Bizanga binga",
  translation: "Quelles heures",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/Quelles_heures.mp3",
  options: [
    { fr: "Quel jour ?", en: "Which day?", sw: "Siku gani?" },
    { fr: "Combien de temps ?", en: "How much time?", sw: "Muda gani?" },
    { fr: "À quel moment ?", en: "At what time?", sw: "Wakati gani?" },
    { fr: "Quelles heures", en: "What time", sw: "Saa ngapi" }
  ],
  correctOption: 3,
  words: ["Bizanga binga"]
},

{
  id: 4,
  title: "Usiteneni?",
  phrase: "Usiteneni?",
  translation: "Tu n'écoutes pas ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/Tu_n_ecoutes_pas.mp3",
  options: [
    { fr: "Tu ne parles pas ?", en: "Don't you speak?", sw: "Husemi?" },
    { fr: "Tu ne vois pas ?", en: "Don't you see?", sw: "Huoni?" },
    { fr: "Tu n'écoutes pas ?", en: "Aren't you listening?", sw: "Husikii?" },
    { fr: "Tu ne comprends pas ?", en: "Don't you understand?", sw: "Huelevi?" }
  ],
  correctOption: 2,
  words: ["Usiteneni?"]
},

{
  id: 5,
  title: "Wa'nga shubilila?",
  phrase: "Wa'nga shubilila?",
  translation: "Peux-tu répéter ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/Peux_tu_repeter.mp3",
  options: [
    { fr: "Peux-tu répéter ?", en: "Can you repeat?", sw: "Unaweza kurudia?" },
    { fr: "Peux-tu chanter ?", en: "Can you sing?", sw: "Unaweza kuimba?" },
    { fr: "Peux-tu écrire ?", en: "Can you write?", sw: "Unaweza kuandika?" },
    { fr: "Peux-tu lire ?", en: "Can you read?", sw: "Unaweza kusoma?" }
  ],
  correctOption: 0,
  words: ["Wa'nga shubilila?"]
},

{
  id: 6,
  title: "Uline buswa?",
  phrase: "Uline buswa?",
  translation: "As-tu besoin ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/As_tu_besoin.mp3",
  options: [
    { fr: "As-tu de l'argent ?", en: "Do you have money?", sw: "Una pesa?" },
    { fr: "As-tu besoin ?", en: "Do you need?", sw: "Unahitaji?" },
    { fr: "As-tu fini ?", en: "Are you finished?", sw: "Umemaliza?" },
    { fr: "As-tu faim ?", en: "Are you hungry?", sw: "Una njaa?" }
  ],
  correctOption: 1,
  words: ["Uline buswa?"]
},

{
  id: 7,
  title: "Kyabalaki",
  phrase: "Kyabalaki",
  translation: "Qu'est-ce qui se passe",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/Qu_est_ce_qui_se_passe.mp3",
  options: [
    { fr: "Qu'est-ce que c'est ?", en: "What is it?", sw: "Ni nini?" },
    { fr: "Qui est-ce ?", en: "Who is it?", sw: "Ni nani?" },
    { fr: "Où vas-tu ?", en: "Where are you going?", sw: "Unaenda wapi?" },
    { fr: "Qu'est-ce qui se passe", en: "What is happening", sw: "Kuna nini" }
  ],
  correctOption: 3,
  words: ["Kyabalaki"]
},

{
  id: 8,
  title: "Kale walya ?",
  phrase: "Kale walya ?",
  translation: "As-tu déjà mangé ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/As_tu_deja_mange.mp3",
  options: [
    { fr: "As-tu faim ?", en: "Are you hungry?", sw: "Una njaa?" },
    { fr: "Que manges-tu ?", en: "What are you eating?", sw: "Unakula nini?" },
    { fr: "As-tu déjà mangé ?", en: "Have you already eaten?", sw: "Ushakula?" },
    { fr: "Veux-tu manger ?", en: "Do you want to eat?", sw: "Unataka kula?" }
  ],
  correctOption: 2,
  words: ["Kale walya ?"]
},

{
  id: 9,
  title: "Uhete gilaki?",
  phrase: "Uhete gilaki?",
  translation: "Tu fais quoi ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/Tu_fais_quoi.mp3",
  options: [
    { fr: "Où vas-tu ?", en: "Where are you going?", sw: "Unaenda wapi?" },
    { fr: "Tu fais quoi ?", en: "What are you doing?", sw: "Unafanya nini?" },
    { fr: "Que dis-tu ?", en: "What are you saying?", sw: "Unasema nini?" },
    { fr: "Qui cherches-tu ?", en: "Who are you looking for?", sw: "Unatafuta nani?" }
  ],
  correctOption: 1,
  words: ["Uhete gilaki?"]
},

{
  id: 10,
  title: "Uhete shondaki?",
  phrase: "Uhete shondaki?",
  translation: "Tu cherches quoi ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/Tu_cherches_quoi.mp3",
  options: [
    { fr: "Que veux-tu ?", en: "What do you want?", sw: "Unataka nini?" },
    { fr: "Qui es-tu ?", en: "Who are you?", sw: "Wewe ni nani?" },
    { fr: "Tu cherches quoi ?", en: "What are you looking for?", sw: "Unatafuta nini?" },
    { fr: "Où est-ce ?", en: "Where is it?", sw: "Iko wapi?" }
  ],
  correctOption: 2,
  words: ["Uhete shondaki?"]
},

{
  id: 11,
  title: "Uhete tetaki?",
  phrase: "Uhete tetaki?",
  translation: "Tu dis quoi ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/Tu_dis_quoi.mp3",
  options: [
    { fr: "Tu dis quoi ?", en: "What are you saying?", sw: "Unasema nini?" },
    { fr: "Tu penses quoi ?", en: "What do you think?", sw: "Unawaza nini?" },
    { fr: "Tu ris de quoi ?", en: "What are you laughing at?", sw: "Unacheka nini?" },
    { fr: "Tu écris quoi ?", en: "What are you writing?", sw: "Unaandika nini?" }
  ],
  correctOption: 0,
  words: ["Uhete tetaki?"]
},
        
    ],
    presentation: [
        {
  id: 1,
  title: "Uzi buzibwa gani?",
  phrase: "Uzi buzibwa gani?",
  translation: "Comment tu t'appelles ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/Comment_tu_t_appelles.mp3",
  options: [
    { fr: "Qui es-tu ?", en: "Who are you?", sw: "Wewe ni nani?" },
    { fr: "D'où viens-tu ?", en: "Where are you from?", sw: "Umetoka wapi?" },
    { fr: "Quel est ton clan ?", en: "What is your clan?", sw: "Ukoo gani?" },
    { fr: "Comment tu t'appelles ?", en: "What is your name?", sw: "Unaitwa nani?" }
  ],
  correctOption: 3,
  words: ["Uzi", "buzibwa", "gani?"]
},

{
  id: 2,
  title: "Uli gani?",
  phrase: "Uli gani?",
  translation: "Qui es-tu ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/Qui_es_tu.mp3",
  options: [
    { fr: "Comment vas-tu ?", en: "How are you?", sw: "Uko aje?" },
    { fr: "Qui es-tu ?", en: "Who are you?", sw: "Wewe ni nani?" },
    { fr: "Où vas-tu ?", en: "Where are you going?", sw: "Unaenda wapi?" },
    { fr: "Que veux-tu ?", en: "What do you want?", sw: "Unataka nini?" }
  ],
  correctOption: 1,
  words: ["Uli", "gani?"]
},

{
  id: 3,
  title: "Nili Muviila",
  phrase: "Nili Muviila",
  translation: "Je suis Muvira",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/Je_suis_Muvira.mp3",
  options: [
    { fr: "Je suis ici", en: "I am here", sw: "Niko hapa" },
    { fr: "Je suis fatigué", en: "I am tired", sw: "Nimechoka" },
    { fr: "Je suis Muvira", en: "I am Muvira", sw: "Mimi ni Muvira" },
    { fr: "Je suis prêt", en: "I am ready", sw: "Niko tayari" }
  ],
  correctOption: 2,
  words: ["Nili", "Muviila"]
},

{
  id: 4,
  title: "We mukoga muki?",
  phrase: "We mukoga muki?",
  translation: "De quel clan ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/De_quel_clan.mp3",
  options: [
    { fr: "D'où viens-tu ?", en: "Where are you from?", sw: "Umetoka wapi?" },
    { fr: "De quel clan ?", en: "From which clan?", sw: "Wa ukoo gani?" },
    { fr: "Qui est ton père ?", en: "Who is your father?", sw: "Baba yako ni nani?" },
    { fr: "Quelle est ta tribu ?", en: "What is your tribe?", sw: "Kabila gani?" }
  ],
  correctOption: 1,
  words: ["We", "mukoga", "muki?"]
},

{
  id: 5,
  title: "We mukoga ye Benekono",
  phrase: "We mukoga ye Benekono",
  translation: "Du clan de Bakono",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/Du_clan_de_Bakono.mp3",
  options: [
    { fr: "Du clan de Bakono", en: "Of the Bakono clan", sw: "Wa ukoo wa Bakono" },
    { fr: "Du clan de Balindi", en: "Of the Balindi clan", sw: "Wa ukoo wa Balindi" },
    { fr: "Du clan de Bavira", en: "Of the Bavira clan", sw: "Wa ukoo wa Bavira" },
    { fr: "De ma famille", en: "From my family", sw: "Wa familia yangu" }
  ],
  correctOption: 0,
  words: ["We", "mukoga", "ye", "Benekono"]
},

{
  id: 6,
  title: "Ne Higazi yenu?",
  phrase: "Ne Higazi yenu?",
  translation: "Et votre colline ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/Et_votre_colline.mp3",
  options: [
    { fr: "Et votre maison ?", en: "And your house?", sw: "Na nyumba yenu?" },
    { fr: "Et votre champ ?", en: "And your field?", sw: "Na shamba lenu?" },
    { fr: "Et votre colline ?", en: "And your hill?", sw: "Na kilima chenu?" },
    { fr: "Et votre famille ?", en: "And your family?", sw: "Na familia yenu?" }
  ],
  correctOption: 2,
  words: ["Ne", "higazi", "yenu"]
},


{
  id: 7,
  title: "Uline myalo zinga?",
  phrase: "Uline myalo zinga?",
  translation: "Quel âge as-tu ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/Quel_age_as_tu.mp3",
  options: [
    { fr: "Quel âge as-tu ?", en: "How old are you?", sw: "Una miaka mingapi?" },
    { fr: "Combien d'enfants ?", en: "How many children?", sw: "Watoto wangapi?" },
    { fr: "Combien de jours ?", en: "How many days?", sw: "Siku ngapi?" },
    { fr: "Quel est ton prix ?", en: "What is your price?", sw: "Bei gani?" }
  ],
  correctOption: 0,
  words: ["Uline", "myalo", "zinga"]
},

{
  id: 8,
  title: "Ambuga ni hani?",
  phrase: "Ambuga ni hani?",
  translation: "À la maison c'est où ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/A_la_maison_c_est_ou.mp3",
  options: [
    { fr: "Où vas-tu ?", en: "Where are you going?", sw: "Unaenda wapi?" },
    { fr: "À la maison c'est où ?", en: "Where is home?", sw: "Nyumbani ni wapi?" },
    { fr: "Qui est à la maison ?", en: "Who is at home?", sw: "Nani ako nyumbani?" },
    { fr: "Est-ce ta maison ?", en: "Is it your house?", sw: "Ni nyumba yako?" }
  ],
  correctOption: 1,
  words: ["Ambuga", "ni", "hani?"]
},

    ]
};
