// ═══════════════════════════════════════════════════════════════
// KIVIRA LESSONS - SYSTÈME COMPLET
// Inclut : Premium, Progression, 10 catégories
// ═══════════════════════════════════════════════════════════════

(function() {
    'use strict';
    
    console.log('🚀 Kivira Lessons - Système complet chargé');
    
    // ═══════════════════════════════════════════════════════════
    // DONNÉES DES 10 CATÉGORIES
    // ═══════════════════════════════════════════════════════════
    
    const CATEGORIES = {
        salutations: {
            name: 'Salutations',
            icon: '👋',
            color: '#FF9800',
            lessons: [
                 {
            id: 1,
            title: "Mwavyuke",
            phrase: "Mwavyuke",
            translation: "Bonjour",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            audio: "audio/Mwavyuke.mp3",
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
             audio: "audio/vini_myazi.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%2310b981' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E😊%3C/text%3E%3C/svg%3E",
            options: [
                { fr: "Bonjour", en: "Good morning", sw: "Jambo" },
                { fr: "Bonsoir", en: "Good evening", sw: "Jambo" },
                { fr: "Vous étes en forme?", en: "Are you good", sw: "Uko muzima?" },
                { fr: "Comment allez-vous?", en: "How are you", sw: "Unaendelea aje" }
            ],
            correctOption: 3,
            words: ["vini", "myazi", ]
        },
        {
            id: 3,
            title: "Nili Bushoga",
            phrase: "Nili Bushoga",
            translation: "Je vais bien",
             audio: "audio/nili_bushoga.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%233b82f6' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👍%3C/text%3E%3C/svg%3E",
            options: [
                { fr: "Bonjour", en: "Good morning", sw: "Jambo" },
                { fr: "Bonsoir", en: "Good evening", sw: "Jambo" },
                { fr: "Bonne nuit", en: "Good night", sw: "Usiku mwema" },
                { fr: "Aurevoir", en: "Goodbye", sw: "Kwaheri" }
            ],
            correctOption: 0,
            words: ["Nili", "Bushoga"]
        },
         {
            id: 4,
            title: "Mwahilize",
            phrase: "Mwahilize",
            translation: "Bonsoir",
             audio: "audio/mwahilize.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
             
            options: [
                { fr: "Bonjour", en: "Good morning", sw: "Jambo" },
                { fr: "Bonsoir", en: "Good evening", sw: "Jambo" },
                { fr: "Bonne nuit", en: "Good night", sw: "Usiku mwema" },
                { fr: "Aurevoir", en: "Goodbye", sw: "Kwaheri" }
            ],
            correctOption: 1,
            words: ["Mwahilize"]
        },
         {
            id: 5,
            title: "Mwasibe kifwa",
            phrase: "Mwasibe kifwa",
            translation: "Bon apres-midi hero",
             audio: "audio/mwasibe_kifwa.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            options: ["Bon apres-midi hero", "Bon apres-midi Monsieur", "Bonjour Monsieur", "S'il vous plaît"],
             options: [
                { fr: "Bon apres-midi Monsieur", en: "Good afternoon Sir", sw: "Jambo" },
                { fr: "Bon apres-midi hero", en: "Good afternoon hero", sw: "Jambo" },
                { fr: "Bonne nuit", en: "Good night", sw: "Usiku mwema" },
                { fr: "S'il vous plaît", en: "please", sw: "Tafadhali" }
            ],
            correctOption: 1,
            words: ["Mwasibe", "kifwa"]
        },
         {
            id: 6,
            title: "Kalo kashoga",
            phrase: "Kalo kashoga",
            translation: "Bonne nuit",
             audio: "audio/kalo_kashoga.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
        
             options: [
                { fr: "Bonjour", en: "Good morning", sw: "Jambo" },
                { fr: "Bonsoir", en: "Good evening", sw: "Jambo" },
                { fr: "Bonne nuit", en: "Good night", sw: "Usiku mwema" },
                { fr: "Aurevoir", en: "Goodbye", sw: "Kwaheri" }
            ],
            correctOption: 2,
            words: ["Kalo", "Kashoga"]
        },
         {
            id: 7,
            title: "Uli magala?",
            phrase: "Uli magala?",
            translation: "Tu es en forme?",
             audio: "audio/uli_magala.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            
             options: [
                { fr: "Oui je suis en forme", en: "Yes i'm good", sw: "Ndio niko muzima" },
                { fr: "A la maison vous étes en forme?", en: "You are all good?", sw: "Muko salama?" },
                { fr: "Es tu en forme?", en: "Are you ok?", sw: "Uko muzima?" },
                { fr: "Vous étès en forme tous à la maison?", en: "All of you are good home?", sw: "Nyinyi nyote muko salama nyumbani?" }
            ],
            correctOption: 0,
            words: ["Uli", "Magala"]
        },
         {
            id: 8,
            title: "Eyoo nili magala",
            phrase: "Eyoo nili magala",
            translation: "Oui je suis en forme",
             audio: "audio/eyoo_nili_magala.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            
             options: [
                { fr: "Oui je suis en forme", en: "Yes i'm good", sw: "Ndio niko muzima" },
                { fr: "A la maison vous étes en forme?", en: "You are all good?", sw: "Muko salama?" },
                { fr: "Bonne nuit", en: "Good night", sw: "Usiku mwema" },
                { fr: "Vous étès en forme tous à la maison?", en: "All of you are good home?", sw: "Nyinyi nyote muko salama nyumbani?" }
            ],
            correctOption: 0,
            words: ["Eyoo", "nili", "magala"]
        },
         {
            id: 9,
            title: "Ambuga muli bagumana?",
            phrase: "Ambuga muli bagumana?",
            translation: "Vous etes en forme tous à la maison?",
             audio: "audio/ambuga_muli_bagumana.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            
            options: [
                { fr: "Bonjour", en: "Good morning", sw: "Jambo" },
                { fr: "A la maison vous étes en forme?", en: "You are all good?", sw: "Muko salama?" },
                { fr: "Bonne nuit", en: "Good night", sw: "Usiku mwema" },
                { fr: "Vous étès en forme tous à la maison?", en: "All of you are good home?", sw: "Nyinyi nyote muko salama nyumbani?" }
            ],
            correctOption: 1,
            words: ["Ambuga", "muli", "bagumana"]
        },
         {
            id: 10,
            title: "Eyoo tuli bagumana",
            phrase: "Eyoo tuli bagumana",
            translation: "Vous etes en forme tous à la maison?",
             audio: "audio/eyoo_tuli_bagumana.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            
            options: [
                { fr: "Bonjour", en: "Good morning", sw: "Jambo" },
                { fr: "A la maison vous étes en forme?", en: "You are all good?", sw: "Muko salama?" },
                { fr: "Bonne nuit", en: "Good night", sw: "Usiku mwema" },
                { fr: "Vous étès en forme tous à la maison?", en: "All of you are good home?", sw: "Nyinyi nyote muko salama nyumbani?" }
            ],
            correctOption: 1,
            words: ["Eyoo", "tuli", "bagumana"]
        },
         {
            id: 11,
            title: "Sambesambe",
            phrase: "Sambesambe",
            translation: "Bienvenu",
             audio: "audio/sambesambe.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            
            options: [
                { fr: "Oui je suis en forme", en: "yes i'm good", sw: "Ndio niko salama" },
                { fr: "Bienvenu", en: "Welcome", sw: "Karibu" },
                { fr: "Bonsoir", en: "Good evening", sw: "Jambo" },
                { fr: "Aurevoir", en: "Goodbye", sw: "Kwaheri" }
            ],
            correctOption: 1,
            words: ["Sambesambe", "tuli", "bagumana"]
        },
         {
            id: 12,
            title: "Nasambila",
            phrase: "Nasambila",
            translation: "Je suis le bienvenue",
             audio: "audio/nasambila.mp3",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23fbbf24' width='200' height='200'/%3E%3Ctext x='100' y='120' font-size='80' text-anchor='middle' fill='white'%3E👋%3C/text%3E%3C/svg%3E",
            
            options: [
                { fr: "Oui je suis le bienvenue", en: " i'm welcome", sw: "Nakaribiya" },
                { fr: "Bienvenu", en: "Welcome", sw: "Karibu" },
                { fr: "Bonsoir", en: "Good evening", sw: "Jambo" },
                { fr: "Aurevoir", en: "Goodbye", sw: "Kwaheri" }
            ],
            correctOption: 1,
            words: ["Nasambila"]
        },
        
        
            ]
        },
        
        presentation: {
            name: 'Présentation',
            icon: '🙋',
            color: '#9C27B0',
            lessons: [
                    {
  id: 13,
  title: "Uzi buzibwa gani?",
  phrase: "Uzi buzibwa gani?",
  translation: "Comment tu t'appelles ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/uzi_buzibwa_gani.mp3",
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
  id: 47,
  title: "Uli gani?",
  phrase: "Uli gani?",
  translation: "Qui es-tu ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/uli_gani.mp3",
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
  id: 48,
  title: "Nili Muviila",
  phrase: "Nili Muviila",
  translation: "Je suis Muvira",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/nili_muviila.mp3",
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
  id: 50,
  title: "We mukoga muki?",
  phrase: "We mukoga muki?",
  translation: "De quel clan ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/we_mukoga_muki.mp3",
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
  id: 51,
  title: "We mukoga ye Benekono",
  phrase: "We mukoga ye Benekono",
  translation: "Du clan de Bakono",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/we_mukoga_ye_benekono.mp3",
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
  id: 53,
  title: "Ne Higazi yenu?",
  phrase: "Ne Higazi yenu?",
  translation: "Et votre colline ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/ne_higazi_yenu.mp3",
  options: [
    { fr: "Et votre maison ?", en: "And your house?", sw: "Na nyumba yenu?" },
    { fr: "Et votre champ ?", en: "And your field?", sw: "Na shamba lenu?" },
    { fr: "Et votre colline ?", en: "And your hill?", sw: "Na kilima chenu?" },
    { fr: "Et votre famille ?", en: "And your family?", sw: "Na familia yenu?" }
  ],
  correctOption: 2,
  words: ["Ne", "Higazi", "yenu?"]
},


{
  id: 54,
  title: "Uline myalo zinga?",
  phrase: "Uline myalo zinga?",
  translation: "Quel âge as-tu ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/uline_myalo_zinga.mp3",
  options: [
    { fr: "Quel âge as-tu ?", en: "How old are you?", sw: "Una miaka mingapi?" },
    { fr: "Combien d'enfants ?", en: "How many children?", sw: "Watoto wangapi?" },
    { fr: "Combien de jours ?", en: "How many days?", sw: "Siku ngapi?" },
    { fr: "Quel est ton prix ?", en: "What is your price?", sw: "Bei gani?" }
  ],
  correctOption: 0,
  words: ["Uline", "myalo", "zinga?"]
},

{
  id: 55,
  title: "Ambuga ni hani?",
  phrase: "Ambuga ni hani?",
  translation: "À la maison c'est où ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='25' width='60' height='50' rx='5' fill='%23667eea'/%3E%3Ccircle cx='50' cy='45' r='8' fill='white'/%3E%3Crect x='35' y='58' width='30' height='3' fill='white'/%3E%3Crect x='30' y='65' width='40' height='2' fill='white' opacity='0.7'/%3E%3C/svg%3E",
  audio: "audio/ambuga_ni_hani.mp3",
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
        },
        
        etre: {
            name: 'Être',
            icon: '💫',
            color: '#673AB7',
            lessons: [
                                {
  id: 20,
  title: "Nili",
  phrase: "Nili",
  translation: "Je suis",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/nili.mp3",
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
  id: 21,
  title: "Uli",
  phrase: "Uli",
  translation: "Tu es",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/uli.mp3",
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
  id: 23,
  title: "Ali",
  phrase: "Ali",
  translation: "Il est",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/ali.mp3",
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
  id: 24,
  title: "Tuli",
  phrase: "Tuli",
  translation: "Nous sommes",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/tuli.mp3",
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
  id: 25,
  title: "Muli",
  phrase: "Muli",
  translation: "Vous êtes",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/muli.mp3",
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
  id: 26,
  title: "Bali",
  phrase: "Bali",
  translation: "Ils sont",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/muli.mp3",
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
  id: 27,
  title: "Nili mulongeshwa",
  phrase: "Nili mulongeshwa",
  translation: "Je suis un élève",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/nili_mulongeshwa.mp3",
  options: [
    { fr: "Je suis un élève", en: "I am a student", sw: "Mimi ni mwanafunzi" },
    { fr: "Je suis un maître", en: "I am a teacher", sw: "Mimi ni mwalimu" },
    { fr: "Je suis un enfant", en: "I am a child", sw: "Mimi ni mtoto" },
    { fr: "Je suis un travailleur", en: "I am a worker", sw: "Mimi ni mfanyakazi" }
    ],
     correctOption: 0,
  words: ["Nili", "mulongeshwa"]
     },
{
  id: 28,
  title: "Nili musakya",
  phrase: "Nili musakya",
  translation: "Je suis commerçant",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/nili_musakya.mp3",
  options: [
    { fr: "Je suis un fermier", en: "I am a farmer", sw: "Mimi ni mkulima" },
    { fr: "Je suis un chef", en: "I am a leader", sw: "Mimi ni kiongozi" },
    { fr: "Je suis commerçant", en: "I am a trader", sw: "Mimi ni mfanyabiashara" },
    { fr: "Je suis un chauffeur", en: "I am a driver", sw: "Mimi ni dereva" }
  ],
  correctOption: 2,
  words: ["Nili", "musakya"]
},

{
  id: 29,
  title: "Tuli a Buviila",
  phrase: "Tuli a Buviila",
  translation: "Nous sommes à Uvira",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/tuli_a_buviila.mp3",
  options: [
    { fr: "Nous sommes arrivés", en: "We have arrived", sw: "Tumefika" },
    { fr: "Nous sommes à Uvira", en: "We are in Uvira", sw: "Tuko Uvira" },
    { fr: "Où sommes-nous ?", en: "Where are we?", sw: "Tuko wapi?" },
    { fr: "Nous allons à Uvira", en: "We are going to Uvira", sw: "Tunaenda Uvira" }
  ],
  correctOption: 1,
  words: ["Tuli", "a", "Buviila"]
},{
  id: 30,
  title: "Ali kibinda",
  phrase: "Ali kibinda",
  translation: "Il est riche",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/ali_kibinda.mp3",
  options: [
    { fr: "Il est riche", en: "He is rich", sw: "Yeye ni tajiri" },
    { fr: "Il est fort", en: "He is strong", sw: "Yeye ni mwenye nguvu" },
    { fr: "Il est sage", en: "He is wise", sw: "Yeye ni mwenye hekima" },
    { fr: "Il est là", en: "He is there", sw: "Yeye yuko hapo" }
  ],
  correctOption: 0,
  words: ["Ali", "kibinda"]
},
{
  id: 31,
  title: "Uli munyekembo",
  phrase: "Uli munyekembo",
  translation: "Tu es belle",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🧍%3C/text%3E%3C/svg%3E",
  audio: "audio/uli_munyekembo.mp3",
  options: [
    { fr: "Tu es gentille", en: "You are kind", sw: "Wewe ni mwema" },
    { fr: "Tu es grande", en: "You are tall", sw: "Wewe ni mrefu" },
    { fr: "Tu es belle", en: "You are beautiful", sw: "Wewe ni mrembo" },
    { fr: "Tu es ici", en: "You are here", sw: "Uko hapa" }
  ],
  correctOption: 2,
  words: ["Uli", "munyekembo"]
}

            ]
        },
        
        avoir: {
            name: 'Avoir',
            icon: '✨',
            color: '#FF5722',
            lessons: [
                                    {
  id: 71,
  title: "Niline Kasalo",
  phrase: "Niline Kasalo",
  translation: "J'ai un stylo",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/niline_kasalo.mp3",
  options: [
    { fr: "J'ai un livre", en: "I have a book", sw: "Niko na kitabu" },
    { fr: "J'ai un stylo", en: "I have a pen", sw: "Niko na kalamu" },
    { fr: "C'est mon stylo", en: "It is my pen", sw: "Ni kalamu yangu" },
    { fr: "Donne-moi le stylo", en: "Give me the pen", sw: "Nipe kalamu" }
  ],
  correctOption: 1,
  words: ["Niline", "Kasalo"]
},

{
  id: 72,
  title: "Nabane kasalo",
  phrase: "Nabane kasalo",
  translation: "J'avais un stylo",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/nabane_kasalo.mp3",
  options: [
    { fr: "J'avais un stylo", en: "I had a pen", sw: "Nilikuwa na kalamu" },
    { fr: "J'ai un stylo", en: "I have a pen", sw: "Niko na kalamu" },
    { fr: "Il a un stylo", en: "He has a pen", sw: "Yeye ana kalamu" },
    { fr: "Où est le stylo ?", en: "Where is the pen?", sw: "Kalamu iko wapi?" }
  ],
  correctOption: 0,
  words: ["Nabane", "kasalo"]
},

{
  id: 73,
  title: "Nihete kimamala",
  phrase: "Nihete kimamala",
  translation: "J'ai une voiture",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/nihete_kimamala.mp3",
  options: [
    { fr: "J'ai un vélo", en: "I have a bicycle", sw: "Niko na baiskeli" },
    { fr: "C'est ma voiture", en: "It is my car", sw: "Ni gari langu" },
    { fr: "Je vois une voiture", en: "I see a car", sw: "Ninaona gari" },
    { fr: "J'ai une voiture", en: "I have a car", sw: "Niko na gari" }
  ],
  correctOption: 3,
  words: ["Nihete", "kimamala"]
},
{
  id: 74,
  title: "Nihete katelambila",
  phrase: "Nihete katelambila",
  translation: "J'ai un téléphone",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/nihete_katelambila.mp3",
  options: [
    { fr: "C'est mon téléphone", en: "It is my phone", sw: "Ni simu yangu" },
    { fr: "J'ai un téléphone", en: "I have a phone", sw: "Niko na simu" },
    { fr: "Où est le téléphone ?", en: "Where is the phone?", sw: "Simu iko wapi?" },
    { fr: "Appelle-moi", en: "Call me", sw: "Nipigie simu" }
  ],
  correctOption: 1,
  words: ["Nihete", "katelambila"]
},

{
  id: 75,
  title: "Nihete kitabo",
  phrase: "Nihete kitabo",
  translation: "J'ai un livre",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/nihete_kitabo.mp3",
  options: [
    { fr: "J'ai un livre", en: "I have a book", sw: "Niko na kitabu" },
    { fr: "Je lis un livre", en: "I am reading a book", sw: "Ninasoma kitabu" },
    { fr: "C'est ton livre", en: "It is your book", sw: "Ni kitabu chako" },
    { fr: "Où est le livre ?", en: "Where is the book?", sw: "Kitabu kiko wapi?" }
  ],
  correctOption: 0,
  words: ["Nihete", "kitabo"]
},


{
  id: 76,
  title: "Tuhete koolo",
  phrase: "Tuhete koolo",
  translation: "Nous avons un roi",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/tuhete_koolo.mp3",
  options: [
    { fr: "C'est le roi", en: "It is the king", sw: "Ni mfalme" },
    { fr: "Le roi arrive", en: "The king is coming", sw: "Mfalme anakuja" },
    { fr: "Nous avons un roi", en: "We have a king", sw: "Tuko na mfalme" },
    { fr: "Où est le roi ?", en: "Where is the king?", sw: "Mfalme iko wapi?" }
  ],
  correctOption: 2,
  words: ["Tuhete", "koolo"]
},


{
  id: 77,
  title: "Usihete misi",
  phrase: "Usihete misi",
  translation: "Tu n'as pas de force",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='30' y='40' width='40' height='35' rx='5' fill='%2310b981'/%3E%3Cpath d='M38 40c0-7 5-12 12-12s12 5 12 12' stroke='%2310b981' stroke-width='4' fill='none'/%3E%3Ccircle cx='45' cy='55' r='3' fill='%23f59e0b'/%3E%3Ccircle cx='55' cy='55' r='3' fill='%23f59e0b'/%3E%3C/svg%3E",
  audio: "audio/usihete_misi.mp3",
  options: [
    { fr: "Tu as de la force", en: "You have strength", sw: "Una nguvu" },
    { fr: "Tu n'as pas de force", en: "You have no strength", sw: "Hauna nguvu" },
    { fr: "Il est faible", en: "He is weak", sw: "Yeye ni dhaifu" },
    { fr: "Donne-moi de la force", en: "Give me strength", sw: "Nipe nguvu" }
  ],
  correctOption: 1,
  words: ["Usihete", "misi"]
},
            ]
        },
        
        famille: {
            name: 'Famille',
            icon: '👨‍👩‍👧‍👦',
            color: '#2196F3',
            lessons: [
                          {
                id: 100,
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
        id: 102,
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
        id: 103,
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
        id: 104,
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
                    id: 105,
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
                    id: 106,
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
                    id: 107,
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
                    id: 108,
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
                    id: 109,
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
                    id: 110,
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
                    id: 111,
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
            ]
        },
        
        cuisine: {
            name: 'Cuisine',
            icon: '🍽️',
            color: '#F44336',
            lessons: [
               
            ]
        },
        
        maison: {
            name: 'Maison',
            icon: '🏠',
            color: '#E91E63',
            lessons: [
                         {
  id: 201,
  title: "Mbanza",
  phrase: "Mbanza",
  translation: "Maison",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/mbanza.mp3",
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
  id: 202,
  title: "Kifumbi",
  phrase: "Kifumbi",
  translation: "Chaise",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/kifumbi.mp3",
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
  id: 203,
  title: "Kashasha",
  phrase: "Kashasha",
  translation: "Table",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/kashasha.mp3",
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
  id: 204,
  title: "Ngiingo yani",
  phrase: "Ngiingo yani",
  translation: "Mon lit",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/ngiingo_yani.mp3",
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
  id: 205,
  title: "Bululi bwetu",
  phrase: "Bululi bwetu",
  translation: "Notre salon",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/bululi_bwetu.mp3",
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
  id: 206,
  title: "Kisika kyani",
  phrase: "Kisika kyani",
  translation: "Ma chambre",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🏠%3C/text%3E%3C/svg%3E",
  audio: "audio/kisika_kyani.mp3",
  options: [
    { fr: "Ma douche", en: "My shower", sw: "Oga yangu" },
    { fr: "Ma chambre", en: "My bedroom", sw: "Chumba changu" },
    { fr: "Mon bureau", en: "My office", sw: "Ofisi yangu" },
    { fr: "Mon balcon", en: "My balcony", sw: "Baraza yangu" }
  ],
  correctOption: 1,
  words: ["Kisika kyani"]
},

            ]
        },
        
        sociale: {
            name: 'Sociale',
            icon: '🤝',
            color: '#00BCD4',
            lessons: [
                     {
  id: 211,
  title: "Wa'nga ngwasa?",
  phrase: "Wa'nga ngwasa?",
  translation: "Peux-tu m'aider ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/wa'nga_ngwasa.mp3",
  options: [
    { fr: "Peux-tu venir ?", en: "Can you come?", sw: "Unaweza kuja?" },
    { fr: "Peux-tu m'aider ?", en: "Can you help me?", sw: "Unaweza kunisaidia?" },
    { fr: "Peux-tu parler ?", en: "Can you speak?", sw: "Unaweza kusema?" },
    { fr: "Peux-tu partir ?", en: "Can you leave?", sw: "Unaweza kuondoka?" }
  ],
  correctOption: 1,
  words: ["Wa'nga", "ngwasa?"]
},

{
  id: 212,
  title: "Ukunge mwana",
  phrase: "Ukunge mwana",
  translation: "Garde l'enfant",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/ukunge_mwana.mp3",
  options: [
    { fr: "Garde l'enfant", en: "Watch the child", sw: "Mlinde mtoto" },
    { fr: "Appelle l'enfant", en: "Call the child", sw: "Mwite mtoto" },
    { fr: "Cherche l'enfant", en: "Look for the child", sw: "Mtafute mtoto" },
    { fr: "Lave l'enfant", en: "Wash the child", sw: "Mwoshe mtoto" }
  ],
  correctOption: 0,
  words: ["Ukunge", "mwana"]
},
{
  id: 213,
  title: "Wa'nga nilombosa?",
  phrase: "Wa'nga nilombosa?",
  translation: "Peux-tu me montrer ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/wa'nga_nilombosa.mp3",
  options: [
    { fr: "Peux-tu m'entendre ?", en: "Can you hear me?", sw: "Unaweza kunisikia?" },
    { fr: "Peux-tu m'écrire ?", en: "Can you write to me?", sw: "Unaweza kuniandikia?" },
    { fr: "Peux-tu me donner ?", en: "Can you give me?", sw: "Unaweza kunipa?" },
    { fr: "Peux-tu me montrer ?", en: "Can you show me?", sw: "Unaweza kunionyesha?" }
  ],
  correctOption: 3,
  words: ["Wa'nga", "nilombosa?"]
},

{
  id: 214,
  title: "Umulombose",
  phrase: "Umulombose",
  translation: "Montre-lui",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/umulombose.mp3",
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
  id: 215,
  title: "Nasima",
  phrase: "Nasima",
  translation: "J'aime",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/nasima.mp3",
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
  id: 216,
  title: "Nisisimi",
  phrase: "Nisisimi",
  translation: "Je n'aime pas",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/nisisimi.mp3",
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
  id: 217,
  title: "Wagila bushoga",
  phrase: "Wagila bushoga",
  translation: "Tu fais bien",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/wagila_bushoga.mp3",
  options: [
    { fr: "Tu parles bien", en: "You speak well", sw: "Unasema vizuri" },
    { fr: "Tu fais bien", en: "You do well", sw: "Unafanya vizuri" },
    { fr: "Tu viens ici", en: "You come here", sw: "Unakuja hapa" },
    { fr: "Tu vas bien", en: "You are doing well", sw: "Uko salama" }
  ],
  correctOption: 1,
  words: ["Wagila", "bushoga"]
},

{
  id: 218,
  title: "Wagila bubi",
  phrase: "Wagila bubi",
  translation: "Tu fais mal",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/wagila_bubi.mp3",
  options: [
    { fr: "Tu agis vite", en: "You act fast", sw: "Unafanya haraka" },
    { fr: "Tu es méchant", en: "You are mean", sw: "Wewe ni mbaya" },
    { fr: "Tu travailles", en: "You are working", sw: "Unhatumika" },
    { fr: "Tu fais mal", en: "You do badly", sw: "Unafanya vibaya" }
  ],
  correctOption: 3,
  words: ["Wagila", "bubi"]
},

{
  id: 219,
  title: "Muvwe hano",
  phrase: "Muvwe hano",
  translation: "Venez ici",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/muvwe_hano.mp3",
  options: [
    { fr: "Venez ici", en: "Come here", sw: "Njooni hapa" },
    { fr: "Allez là-bas", en: "Go there", sw: "Nendeni kule" },
    { fr: "Entrez ici", en: "Come in here", sw: "Ingieni hapa" },
    { fr: "Asseyez-vous ici", en: "Sit here", sw: "Kaeni hapa" }
  ],
  correctOption: 0,
  words: ["Muvwe", "hano"]
},

{
  id: 230,
  title: "Uli munyekembo",
  phrase: "Uli munyekembo",
  translation: "Tu es belle",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 75L30 55c-8-8-8-20 0-28 8-8 20-8 28 0l-8 8 8-8c8-8 20-8 28 0 8 8 8 20 0 28L50 75z' fill='%23ec4899'/%3E%3C/svg%3E",
  audio: "audio/uli_munyekembo.mp3",
  options: [
    { fr: "Tu es bonne", en: "You are good", sw: "Wewe ni mwema" },
    { fr: "Tu es belle", en: "You are beautiful", sw: "Wewe ni mrembo" },
    { fr: "Tu es grande", en: "You are tall", sw: "Wewe ni mrefu" },
    { fr: "Tu es intelligente", en: "You are smart", sw: "Wewe ni mwerevu" }
  ],
  correctOption: 1,
  words: ["Uli", "munyekembo"]
},

            ]
        },
        
        demander: {
            name: 'Demander',
            icon: '❓',
            color: '#FF9800',
            lessons: [
                         {
  id: 231,
  title: "Boozo bunga",
  phrase: "Boozo bunga",
  translation: "Combien d'argent ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/boozo_bunga.mp3",
  options: [
    { fr: "C'est cher", en: "It is expensive", sw: "Ni bei ghali" },
    { fr: "Quel prix ?", en: "What price?", sw: "Bei gani?" },
    { fr: "Combien d'argent ?", en: "How much money?", sw: "Pesa ngapi?" },
    { fr: "Donne l'argent", en: "Give the money", sw: "Toa pesa" }
  ],
  correctOption: 2,
  words: ["Boozo", "bunga"]
},

{
  id: 242,
  title: "Ali hani?",
  phrase: "Ali hani?",
  translation: "Il est où ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/ali_hani.mp3",
  options: [
    { fr: "C'est qui ?", en: "Who is it?", sw: "Ni nani?" },
    { fr: "Il est où ?", en: "Where is he?", sw: "Yuko wapi?" },
    { fr: "Il est là ?", en: "Is he there?", sw: "Yuko hapo?" },
    { fr: "Où vas-tu ?", en: "Where are you going?", sw: "Unaenda wapi?" }
  ],
  correctOption: 1,
  words: ["Ali", "hani?"]
},

{
  id: 343,
  title: "Bizanga binga",
  phrase: "Bizanga binga",
  translation: "Quelles heures",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/bizanga_binga.mp3",
  options: [
    { fr: "Quel jour ?", en: "Which day?", sw: "Siku gani?" },
    { fr: "Combien de temps ?", en: "How much time?", sw: "Muda gani?" },
    { fr: "À quel moment ?", en: "At what time?", sw: "Wakati gani?" },
    { fr: "Quelles heures", en: "What time", sw: "Saa ngapi" }
  ],
  correctOption: 3,
  words: ["Bizanga", "binga"]
},

{
  id: 344,
  title: "Usiteneni?",
  phrase: "Usiteneni?",
  translation: "Tu n'écoutes pas ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/usiteneni.mp3",
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
  id: 345,
  title: "Wa'nga shubilila?",
  phrase: "Wa'nga shubilila?",
  translation: "Peux-tu répéter ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/wa'nga_shubilila.mp3",
  options: [
    { fr: "Peux-tu répéter ?", en: "Can you repeat?", sw: "Unaweza kurudia?" },
    { fr: "Peux-tu chanter ?", en: "Can you sing?", sw: "Unaweza kuimba?" },
    { fr: "Peux-tu écrire ?", en: "Can you write?", sw: "Unaweza kuandika?" },
    { fr: "Peux-tu lire ?", en: "Can you read?", sw: "Unaweza kusoma?" }
  ],
  correctOption: 0,
  words: ["Wa'nga", "shubilila?"]
},

{
  id: 346,
  title: "Uline buswa?",
  phrase: "Uline buswa?",
  translation: "As-tu besoin ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/uline_buswa.mp3",
  options: [
    { fr: "As-tu de l'argent ?", en: "Do you have money?", sw: "Una pesa?" },
    { fr: "As-tu besoin ?", en: "Do you need?", sw: "Unahitaji?" },
    { fr: "As-tu fini ?", en: "Are you finished?", sw: "Umemaliza?" },
    { fr: "As-tu faim ?", en: "Are you hungry?", sw: "Una njaa?" }
  ],
  correctOption: 1,
  words: ["Uline", "buswa?"]
},

{
  id: 347,
  title: "Kyabalaki",
  phrase: "Kyabalaki",
  translation: "Qu'est-ce qui se passe",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/kyabalaki.mp3",
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
  id: 348,
  title: "Kale walya ?",
  phrase: "Kale walya ?",
  translation: "As-tu déjà mangé ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/kale_walya.mp3",
  options: [
    { fr: "As-tu faim ?", en: "Are you hungry?", sw: "Una njaa?" },
    { fr: "Que manges-tu ?", en: "What are you eating?", sw: "Unakula nini?" },
    { fr: "As-tu déjà mangé ?", en: "Have you already eaten?", sw: "Ushakula?" },
    { fr: "Veux-tu manger ?", en: "Do you want to eat?", sw: "Unataka kula?" }
  ],
  correctOption: 2,
  words: ["Kale", "walya ?"]
},

{
  id: 349,
  title: "Uhete gilaki?",
  phrase: "Uhete gilaki?",
  translation: "Tu fais quoi ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/uhete_gilaki.mp3",
  options: [
    { fr: "Où vas-tu ?", en: "Where are you going?", sw: "Unaenda wapi?" },
    { fr: "Tu fais quoi ?", en: "What are you doing?", sw: "Unafanya nini?" },
    { fr: "Que dis-tu ?", en: "What are you saying?", sw: "Unasema nini?" },
    { fr: "Qui cherches-tu ?", en: "Who are you looking for?", sw: "Unatafuta nani?" }
  ],
  correctOption: 1,
  words: ["Uhete", "gilaki?"]
},

{
  id: 3410,
  title: "Uhete shondaki?",
  phrase: "Uhete shondaki?",
  translation: "Tu cherches quoi ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/uhete_shondaki.mp3",
  options: [
    { fr: "Que veux-tu ?", en: "What do you want?", sw: "Unataka nini?" },
    { fr: "Qui es-tu ?", en: "Who are you?", sw: "Wewe ni nani?" },
    { fr: "Tu cherches quoi ?", en: "What are you looking for?", sw: "Unatafuta nini?" },
    { fr: "Où est-ce ?", en: "Where is it?", sw: "Iko wapi?" }
  ],
  correctOption: 2,
  words: ["Uhete", "shondaki?"]
},

{
  id: 3411,
  title: "Uhete tetaki?",
  phrase: "Uhete tetaki?",
  translation: "Tu dis quoi ?",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E🤔%3C/text%3E%3C/svg%3E",
  audio: "audio/uhete_tetaki.mp3",
  options: [
    { fr: "Tu dis quoi ?", en: "What are you saying?", sw: "Unasema nini?" },
    { fr: "Tu penses quoi ?", en: "What do you think?", sw: "Unawaza nini?" },
    { fr: "Tu ris de quoi ?", en: "What are you laughing at?", sw: "Unacheka nini?" },
    { fr: "Tu écris quoi ?", en: "What are you writing?", sw: "Unaandika nini?" }
  ],
  correctOption: 0,
  words: ["Uhete", "tetaki?"]
},
            ]
        },
        
        endroit: {
            name: 'Endroit',
            icon: '📍',
            color: '#4CAF50',
            lessons: [
                  {
  id: 351,
  title: "Nili hambuga",
  phrase: "Nili hambuga",
  translation: "Je suis à la maison",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/nili_hambuga.mp3",
  options: [
    { fr: "Je suis au travail", en: "I am at work", sw: "Niko kazini" },
    { fr: "Je suis dehors", en: "I am outside", sw: "Niko nje" },
    { fr: "Je suis au marché", en: "I am at the market", sw: "Niko sokoni" },
    { fr: "Je suis à la maison", en: "I am at home", sw: "Niko nyumbani" }
  ],
  correctOption: 3,
  words: ["Nili", "ambuga"]
},

{
  id: 352,
  title: "Nili Ku malongesho",
  phrase: "Nili Ku malongesho",
  translation: "Je suis à l'école",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/nili_ku_malongesho.mp3",
  options: [
    { fr: "Je suis à l'école", en: "I am at school", sw: "Niko shuleni" },
    { fr: "Je suis à l'église", en: "I am at church", sw: "Niko kanisani" },
    { fr: "Je suis au bureau", en: "I am at the office", sw: "Niko ofisini" },
    { fr: "Je suis en classe", en: "I am in class", sw: "Niko darasani" }
  ],
  correctOption: 0,
  words: ["Nili", "Ku", "malingesho"]
},
{
  id: 353,
  title: "Nili hano",
  phrase: "Nili hano",
  translation: "Je suis ici",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/nili_hano.mp3",
  options: [
    { fr: "Je suis là-bas", en: "I am over there", sw: "Niko kule" },
    { fr: "Je suis là", en: "I am there", sw: "Niko hapo" },
    { fr: "Je suis ici", en: "I am here", sw: "Niko hapa" },
    { fr: "Je suis arrivé", en: "I have arrived", sw: "Nimefika" }
  ],
  correctOption: 2,
  words: ["Nili", "hano"]
},

{
  id: 354,
  title: "Nahemba hano",
  phrase: "Nahemba hano",
  translation: "J'attends ici",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/nahemba_hano.mp3",
  options: [
    { fr: "Je reste ici", en: "I stay here", sw: "Nabaki hapa" },
    { fr: "J'attends ici", en: "I am waiting here", sw: "Nasubiri hapa" },
    { fr: "Je m'assois ici", en: "I sit here", sw: "Nakaa hapa" },
    { fr: "Je cherche ici", en: "I search here", sw: "Natafuta hapa" }
  ],
  correctOption: 1,
  words: ["Nahemba", "hano"]
},


{
  id: 355,
  title: "Natuka",
  phrase: "Natuka",
  translation: "Je suis arrivé",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/natuka.mp3",
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
  id: 356,
  title: "Naya",
  phrase: "Naya",
  translation: "Je pars",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/naya.mp3",
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
  id: 357,
  title: "Nazimila",
  phrase: "Nazimila",
  translation: "Je suis perdu",
  image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50' y='65' text-anchor='middle' font-size='50'%3E📍%3C/text%3E%3C/svg%3E",
  audio: "audio/nazimila.mp3",
  options: [
    { fr: "Je suis fatigué", en: "I am tired", sw: "Nimechoka" },
    { fr: "Je suis malade", en: "I am sick", sw: "Mimi ni mgonjwa" },
    { fr: "Je suis perdu", en: "I am lost", sw: "Nimepotea" },
    { fr: "Je suis occupé", en: "I am busy", sw: "Niko na kazi" }
  ],
  correctOption: 2,
  words: ["Nazimila"]
},
            ]
        }
    };
    
    // ═══════════════════════════════════════════════════════════
    // CONFIGURATION
    // ═══════════════════════════════════════════════════════════
    
    const FREE_CATEGORIES = ['salutations'];
    
    // ═══════════════════════════════════════════════════════════
    // ÉTAT DU SYSTÈME
    // ═══════════════════════════════════════════════════════════
    
    let state = {
        currentCategory: null,
        currentLessonIndex: null,
        currentLesson: null,
        currentStep: 1,
        completedLessons: JSON.parse(localStorage.getItem('kivira_completed_lessons') || '[]')
    };
    
    // ═══════════════════════════════════════════════════════════
    // VÉRIFIER SI PREMIUM
    // ═══════════════════════════════════════════════════════════
    
    function isPremium() {
    // Utiliser currentUser (système global)
    if (typeof currentUser !== 'undefined' && currentUser && currentUser.isPremium) {
        return true;
    }
    
    // Fallback
    if (localStorage.getItem('userPremium') === 'true') {
        return true;
    }
    
    return false;
}
    
    // ═══════════════════════════════════════════════════════════
    // INITIALISATION
    // ═══════════════════════════════════════════════════════════
    
    function init() {
        console.log('🎯 Initialisation Kivira Lessons...');
        console.log(`   ${Object.keys(CATEGORIES).length} catégories`);
        console.log(`   Premium: ${isPremium()}`);
        
        renderCategories();
        attachEventListeners();
        
        console.log('✅ Kivira Lessons initialisé');
    }
    
    // ═══════════════════════════════════════════════════════════
    // AFFICHER LES CATÉGORIES
    // ═══════════════════════════════════════════════════════════
    
    function renderCategories() {
        const grid = document.getElementById('kivira-categories-grid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        Object.keys(CATEGORIES).forEach(key => {
            const category = CATEGORIES[key];
            const isFree = FREE_CATEGORIES.includes(key);
            const canAccess = isFree || isPremium();
            
            const card = createCategoryCard(key, category, canAccess);
            grid.appendChild(card);
        });
    }
    
    // ═══════════════════════════════════════════════════════════
    // CRÉER UNE CARTE DE CATÉGORIE
    // ═══════════════════════════════════════════════════════════
    
    function createCategoryCard(key, category, canAccess) {
        const card = document.createElement('div');
        card.className = 'kivira-category-card';
        card.style.position = 'relative'; // nécessaire pour positionner le badge
        if (!canAccess) card.classList.add('locked');
        
        card.innerHTML = `
            <div class="kivira-category-icon">${category.icon}</div>
            <h3 class="kivira-category-name">${category.name}</h3>
            <p class="kivira-category-count">${category.lessons.length} leçon${category.lessons.length > 1 ? 's' : ''}</p>
            ${!canAccess ? `<div class="kivira-premium-badge" style="position:absolute;top:8px;right:8px;display:flex;align-items:center;gap:4px;background:#7c3aed;color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:12px;box-shadow:0 2px 6px rgba(0,0,0,.25);z-index:5;line-height:1;white-space:nowrap;">
                <span>👑</span><span>Premium</span>
            </div>` : ''}
        `;
        
        card.addEventListener('click', () => {
            if (canAccess) {
                openCategory(key);
            } else {
                showPremiumModal();
            }
        });
        
        return card;
    }
    
    // ═══════════════════════════════════════════════════════════
    // OUVRIR UNE CATÉGORIE
    // ═══════════════════════════════════════════════════════════
    
    function openCategory(key) {
        console.log(`📂 Ouverture: ${key}`);
        
        state.currentCategory = key;
        
        document.getElementById('kivira-categories-grid').style.display = 'none';
        document.getElementById('kivira-lesson-list').style.display = 'block';
        
        renderLessonList();
    }
    
    // ═══════════════════════════════════════════════════════════
    // AFFICHER LA LISTE DES LEÇONS
    // ═══════════════════════════════════════════════════════════
    
    function renderLessonList() {
        const category = CATEGORIES[state.currentCategory];
        
        document.getElementById('kivira-category-title').textContent = category.name;
        
        const completed = getCompletedLessonsForCategory(state.currentCategory);
        document.getElementById('kivira-lessons-completed').textContent = completed.length;
        document.getElementById('kivira-lessons-total').textContent = category.lessons.length;
        
        const container = document.getElementById('kivira-lesson-items');
        container.innerHTML = '';
        
        category.lessons.forEach((lesson, index) => {
            const item = createLessonItem(lesson, index);
            container.appendChild(item);
        });
    }
    
    // ═══════════════════════════════════════════════════════════
    // CRÉER UN ITEM DE LEÇON
    // ═══════════════════════════════════════════════════════════
    
    function createLessonItem(lesson, index) {
        const item = document.createElement('div');
        item.className = 'kivira-lesson-item';
        
        const isCompleted = state.completedLessons.includes(lesson.id);
        if (isCompleted) item.classList.add('completed');
        
        item.innerHTML = `
            <div class="kivira-lesson-number">${index + 1}</div>
            <div class="kivira-lesson-content">
                <h4 class="kivira-lesson-title">${lesson.title}</h4>
                <p class="kivira-lesson-phrase">${lesson.phrase}</p>
            </div>
            <div class="kivira-lesson-arrow">→</div>
            ${isCompleted ? '<div class="kivira-lesson-checkmark">✓</div>' : ''}
        `;
        
        item.addEventListener('click', () => startLesson(index));
        
        return item;
    }
    
    // ═══════════════════════════════════════════════════════════
    // DÉMARRER UNE LEÇON
    // ═══════════════════════════════════════════════════════════
    
    function startLesson(index) {
        console.log(`🎓 Démarrage leçon ${index}`);
        
        const category = CATEGORIES[state.currentCategory];
        state.currentLessonIndex = index;
        state.currentLesson = category.lessons[index];
        state.currentStep = 1;
        
        document.getElementById('kivira-lesson-list').style.display = 'none';
        document.getElementById('kivira-lesson-view').style.display = 'block';
        
        showStep(1);
    }
    
    // ═══════════════════════════════════════════════════════════
    // AFFICHER UNE ÉTAPE
    // ═══════════════════════════════════════════════════════════
    
    function showStep(step) {
        console.log(`📍 Étape ${step}`);
        
        state.currentStep = step;
        
        // Cacher toutes les étapes
        for (let i = 1; i <= 4; i++) {
            const el = document.getElementById(`kivira-step-${i}`);
            if (el) el.style.display = 'none';
        }
        
        // Afficher l'étape demandée
        const currentStepEl = document.getElementById(`kivira-step-${step}`);
        if (currentStepEl) currentStepEl.style.display = 'block';
        
        // Mettre à jour l'indicateur
        document.getElementById('kivira-current-step').textContent = step;
        
        // Setup de l'étape
        if (step === 1) setupStep1();
        if (step === 2) setupStep2();
        if (step === 3) setupStep3();
        if (step === 4) setupStep4();
    }
    
    // ═══════════════════════════════════════════════════════════
    // SETUP ÉTAPE 1
    // ═══════════════════════════════════════════════════════════
    
   function setupStep1() {
    const lesson = state.currentLesson;
    
    // Image
    const img = document.getElementById('kivira-step1-image');
    if (img) img.src = lesson.image;
    
    // Phrase
    const phrase = document.getElementById('kivira-step1-phrase');
    if (phrase) phrase.textContent = lesson.phrase;
    
    // Bouton audio
    const audioBtn = document.getElementById('kivira-step1-audio');
    
    if (audioBtn) {
        // Vérifier si un fichier audio existe pour cette leçon
        if (lesson.audio) {
            // Afficher le bouton
            audioBtn.style.display = 'inline-flex';
            
            // Créer l'élément audio (si pas déjà créé)
            let audioElement = document.getElementById('lesson-audio-player');
            if (!audioElement) {
                audioElement = document.createElement('audio');
                audioElement.id = 'lesson-audio-player';
                audioElement.preload = 'auto';
                document.body.appendChild(audioElement);
            }
            
            // Définir la source audio
            audioElement.src = lesson.audio;
            
            // Event listener pour jouer
            audioBtn.onclick = function() {
                console.log('🔊 Lecture audio:', lesson.audio);
                
                // Changer l'icône pendant la lecture
                const originalText = audioBtn.innerHTML;
                audioBtn.innerHTML = '⏸️ Pause';
                audioBtn.disabled = true;
                
                // Jouer
                audioElement.play().then(() => {
                    console.log('✅ Audio en lecture');
                    audioBtn.disabled = false;
                }).catch(err => {
                    console.error('❌ Erreur lecture audio:', err);
                    audioBtn.innerHTML = originalText;
                    audioBtn.disabled = false;
                });
                
                // Quand l'audio se termine
                audioElement.onended = function() {
                    audioBtn.innerHTML = originalText;
                    console.log('✅ Audio terminé');
                };
                
                // Si on met en pause
                audioElement.onpause = function() {
                    audioBtn.innerHTML = originalText;
                };
            };
        } else {
            // Pas d'audio disponible, cacher le bouton
            audioBtn.style.display = 'none';
        }
    }
}

    
    // ═══════════════════════════════════════════════════════════
    // SETUP ÉTAPE 2
    // ═══════════════════════════════════════════════════════════
    
   function setupStep2() {
    const lesson = state.currentLesson;
    
    // Image
    const img = document.getElementById('kivira-step2-image');
    if (img) img.src = lesson.image;
    
    // Phrase
    const phrase = document.getElementById('kivira-step2-phrase');
    if (phrase) phrase.textContent = lesson.phrase;
    
    // Container des options
    const container = document.getElementById('kivira-translation-options');
    if (!container) return;
    
    container.innerHTML = '';
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // CRÉER LES BOUTONS AVEC TRADUCTIONS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    lesson.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'kivira-option-btn';
        
        btn.innerHTML = `
            <div class="kivira-option-main">${option.fr}</div>
            <div class="kivira-option-translations">
                ${option.en} • ${option.sw}
            </div>
        `;
        
        // Event listener pour la sélection
        btn.addEventListener('click', () => checkAnswer(index, btn));
        
        container.appendChild(btn);
    });
}

// ═══════════════════════════════════════════════════════════════
// VÉRIFIER LA RÉPONSE - MODE APPRENTISSAGE
// ═══════════════════════════════════════════════════════════════

function checkAnswer(selectedIndex, button) {
    const lesson = state.currentLesson;
    
    if (selectedIndex === lesson.correctOption) {
        // ✅ CORRECT - Passer à l'étape suivante
        console.log('✅ Bonne réponse !');
        
        button.classList.add('correct');
        
        // Désactiver tous les boutons
        document.querySelectorAll('.kivira-option-btn').forEach(btn => {
            btn.style.pointerEvents = 'none';
        });
        
        // Passer à l'étape 3 après animation
        setTimeout(() => {
            showStep(3);
        }, 1500);
        
    } else {
        // ❌ INCORRECT - Laisser l'utilisateur réessayer
        console.log('❌ Mauvaise réponse - Réessayez');
        
        button.classList.add('incorrect');
        
        // Désactiver CE bouton seulement
        button.style.pointerEvents = 'none';
        
        // Animation shake
        setTimeout(() => {
            button.classList.remove('incorrect');
        }, 600);
        
        // ✅ NE PAS passer à l'étape suivante
        // L'utilisateur doit trouver la bonne réponse !
    }
}
    
    // ═══════════════════════════════════════════════════════════
    // SETUP ÉTAPE 3
    // ═══════════════════════════════════════════════════════════
    
   function setupStep3() {
    const lesson = state.currentLesson;
    
    // Image de fond
    const img = document.getElementById('kivira-step3-image');
    if (img) img.src = lesson.image;
    
    // Phrase à assembler (cachée ou affichée en hint)
    const phrase = document.getElementById('kivira-step3-phrase');
    if (phrase) {
        phrase.textContent = lesson.phrase;
        phrase.style.display = 'none'; // Caché pendant l'exercice
    }
    
    // Instructions
    const instructions = document.getElementById('kivira-step3-instructions');
    if (instructions) {
        instructions.textContent = 'Remettez les mots dans le bon ordre :';
    }
    
    // Banque de mots (zone source)
    const wordBank = document.getElementById('kivira-word-bank');
    if (!wordBank) return;
    
    wordBank.innerHTML = '';
    
    // Mélanger les mots
    const shuffledWords = [...lesson.words].sort(() => Math.random() - 0.5);
    
    // Créer les boutons de mots
    shuffledWords.forEach((word, index) => {
        const chip = document.createElement('div');
        chip.className = 'kivira-word-chip';
        chip.textContent = word;
        chip.draggable = true;
        chip.dataset.word = word;
        chip.dataset.index = index;
        
        // Événements de drag
        chip.addEventListener('dragstart', handleDragStart);
        chip.addEventListener('dragend', handleDragEnd);
        
        // Pour mobile : touch events
        chip.addEventListener('touchstart', handleTouchStart, {passive: false});
        chip.addEventListener('touchmove', handleTouchMove, {passive: false});
        chip.addEventListener('touchend', handleTouchEnd);
        
        wordBank.appendChild(chip);
    });
    
    // Zone de réponse (zone de dépôt)
    const answerZone = document.getElementById('kivira-word-answer');
    if (!answerZone) return;
    
    answerZone.innerHTML = '<div class="drop-hint">Glissez les mots ici</div>';
    answerZone.dataset.words = '[]'; // Stocke l'ordre des mots
    
    // Événements de drop
    answerZone.addEventListener('dragover', handleDragOver);
    answerZone.addEventListener('drop', handleDrop);
    answerZone.addEventListener('dragleave', handleDragLeave);
    
    // Bouton vérifier
    const checkBtn = document.getElementById('kivira-step3-check');
    if (checkBtn) {
        checkBtn.disabled = true;
        checkBtn.style.opacity = '0.5';
        checkBtn.style.cursor = 'not-allowed';
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// DRAG & DROP - ÉVÉNEMENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.style.opacity = '0.5';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
    this.style.opacity = '1';
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    
    // Ajouter effet visuel
    this.style.borderColor = '#667eea';
    this.style.background = 'rgba(102, 126, 234, 0.05)';
    
    return false;
}

function handleDragLeave(e) {
    // Retirer effet visuel
    this.style.borderColor = 'rgba(102, 126, 234, 0.3)';
    this.style.background = 'white';
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    // Retirer effet visuel
    this.style.borderColor = 'rgba(102, 126, 234, 0.3)';
    this.style.background = 'white';
    
    if (draggedElement) {
        // Cacher le hint si c'est le premier mot
        const hint = this.querySelector('.drop-hint');
        if (hint) hint.style.display = 'none';
        
        // Cloner le mot et l'ajouter à la zone de réponse
        const clone = draggedElement.cloneNode(true);
        clone.draggable = false;
        clone.classList.add('placed-word');
        
        // Ajouter bouton pour retirer
        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-word';
        removeBtn.innerHTML = '×';
        removeBtn.onclick = function() {
            clone.remove();
            updateAnswer();
            checkIfComplete();
        };
        clone.appendChild(removeBtn);
        
        this.appendChild(clone);
        
        // Retirer de la banque
        draggedElement.remove();
        
        // Mettre à jour l'état
        updateAnswer();
        checkIfComplete();
    }
    
    return false;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TOUCH EVENTS (MOBILE)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let touchElement = null;

function handleTouchStart(e) {
    touchElement = this;
    this.style.opacity = '0.5';
}

function handleTouchMove(e) {
    e.preventDefault();
    // Logique pour suivre le doigt
}

function handleTouchEnd(e) {
    this.style.opacity = '1';
    
    // Vérifier si le doigt est sur la zone de dépôt
    const answerZone = document.getElementById('kivira-word-answer');
    const touch = e.changedTouches[0];
    const elementAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (answerZone && answerZone.contains(elementAtPoint)) {
        // Simuler un drop
        const hint = answerZone.querySelector('.drop-hint');
        if (hint) hint.style.display = 'none';
        
        const clone = this.cloneNode(true);
        clone.draggable = false;
        clone.classList.add('placed-word');
        
        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-word';
        removeBtn.innerHTML = '×';
        removeBtn.onclick = function() {
            clone.remove();
            updateAnswer();
            checkIfComplete();
        };
        clone.appendChild(removeBtn);
        
        answerZone.appendChild(clone);
        this.remove();
        
        updateAnswer();
        checkIfComplete();
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// LOGIQUE DE VÉRIFICATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function updateAnswer() {
    const answerZone = document.getElementById('kivira-word-answer');
    const placedWords = answerZone.querySelectorAll('.placed-word');
    
    const words = Array.from(placedWords).map(w => w.textContent.replace('×', '').trim());
    answerZone.dataset.words = JSON.stringify(words);
}

function checkIfComplete() {
    const answerZone = document.getElementById('kivira-word-answer');
    const placedWords = answerZone.querySelectorAll('.placed-word');
    const checkBtn = document.getElementById('kivira-step3-check');
    
    if (placedWords.length > 0 && checkBtn) {
        // Activer le bouton
        checkBtn.disabled = false;
        checkBtn.style.opacity = '1';
        checkBtn.style.cursor = 'pointer';
    } else if (checkBtn) {
        // Désactiver le bouton
        checkBtn.disabled = true;
        checkBtn.style.opacity = '0.5';
        checkBtn.style.cursor = 'not-allowed';
    }
}

function checkStep3Answer() {
    const lesson = state.currentLesson;
    const answerZone = document.getElementById('kivira-word-answer');
    const placedWords = answerZone.querySelectorAll('.placed-word');
    
    // Récupérer les mots placés
    const userAnswer = Array.from(placedWords).map(w => w.textContent.replace('×', '').trim());
    
    // Comparer avec la bonne réponse
    const correctAnswer = lesson.words; // Tableau dans l'ordre correct
    
    const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(correctAnswer);
    
    if (isCorrect) {
        // ✅ CORRECT
        console.log('✅ Bonne réponse !');
        
        answerZone.style.borderColor = '#10b981';
        answerZone.style.background = 'rgba(16, 185, 129, 0.1)';
        
        placedWords.forEach(word => {
            word.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            word.style.color = 'white';
            const removeBtn = word.querySelector('.remove-word');
            if (removeBtn) removeBtn.style.display = 'none';
        });
        
        setTimeout(() => showStep(4), 2000);
        
    } else {
        // ❌ INCORRECT
        console.log('❌ Mauvaise réponse');
        
        answerZone.style.borderColor = '#ef4444';
        answerZone.style.background = 'rgba(239, 68, 68, 0.1)';
        answerZone.style.animation = 'shake 0.5s ease';
        
        setTimeout(() => {
            answerZone.style.borderColor = 'rgba(102, 126, 234, 0.3)';
            answerZone.style.background = 'white';
            answerZone.style.animation = '';
        }, 1000);
    }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ATTACHER L'ÉVÉNEMENT AU BOUTON VÉRIFIER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Dans la fonction attachEventListeners, ajoutez :
const step3Check = document.getElementById('kivira-step3-check');
if (step3Check) {
    step3Check.addEventListener('click', checkStep3Answer);
}

    
    // ═══════════════════════════════════════════════════════════
    // SETUP ÉTAPE 4
    // ═══════════════════════════════════════════════════════════
    function setupStep4() {
    console.log('🎤 Setup étape 4 - Reconnaissance vocale');
    
    const lesson = state.currentLesson;
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ÉLÉMENTS DOM
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    const micBtn = document.getElementById('micBtn');
    const recordingStatus = document.getElementById('recordingStatus');
    const completeBtn = document.getElementById('completeBtn');
    
    // Image et phrase
    const img = document.getElementById('stepImage4');
    const phrase = document.getElementById('phrase4');
    
    if (img) img.src = lesson.image;
    if (phrase) phrase.textContent = lesson.phrase;
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // RÉINITIALISATION
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    if (!micBtn || !recordingStatus || !completeBtn) {
        console.error('❌ Éléments HTML manquants pour l\'étape 4');
        return;
    }
    
    // 1. Cacher le bouton "Terminer"
    completeBtn.style.display = 'none';
    
    // 2. Réinitialiser le texte du bouton micro
    const micText = micBtn.querySelector('.mic-text');
    if (micText) {
        micText.textContent = 'Appuyez pour parler';
    }
    
    // 3. Réinitialiser le message de status
    recordingStatus.textContent = '👆 Appuyez sur le microphone et prononcez la phrase';
    recordingStatus.style.color = '#666';
    recordingStatus.className = 'recording-status';
    
    // 4. Retirer la classe "recording"
    micBtn.classList.remove('recording', 'success', 'error');
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // SONS (Créer si pas existants)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    let successSound = document.getElementById('successSound');
    let errorSound = document.getElementById('errorSound');
    
    if (!successSound) {
        successSound = document.createElement('audio');
        successSound.id = 'successSound';
        successSound.src = 'audio/success.mp3';
        document.body.appendChild(successSound);
    }
    
    if (!errorSound) {
        errorSound = document.createElement('audio');
        errorSound.id = 'errorSound';
        errorSound.src = 'audio/error.mp3';
        document.body.appendChild(errorSound);
    }
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // VÉRIFIER SUPPORT NAVIGATEUR
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        console.warn('⚠️ Reconnaissance vocale non supportée');
        recordingStatus.textContent = '❌ Votre navigateur ne supporte pas la reconnaissance vocale. Utilisez Chrome ou Edge.';
        recordingStatus.style.color = '#ef4444';
        recordingStatus.className = 'recording-status error';
        micBtn.disabled = true;
        
        // Permettre de passer quand même
        completeBtn.style.display = 'block';
        completeBtn.onclick = completeLesson;
        return;
    }
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // CONFIGURATION RECONNAISSANCE VOCALE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'rw-RW'; // Langue Kinyarwanda
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
    
    let isRecording = false;
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // EVENT : CLICK SUR LE MICROPHONE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    micBtn.onclick = () => {
        if (!isRecording) {
            isRecording = true;
            micBtn.classList.add('recording');
            micBtn.classList.remove('success', 'error');
            
            if (micText) {
                micText.textContent = '🎙️ Enregistrement...';
            }
            
            recordingStatus.textContent = '🎙️ Parlez maintenant...';
            recordingStatus.style.color = '#666';
            recordingStatus.className = 'recording-status';
            
            try {
                recognition.start();
                console.log('🎤 Reconnaissance vocale démarrée');
            } catch (error) {
                console.error('❌ Erreur de reconnaissance:', error);
                isRecording = false;
                micBtn.classList.remove('recording');
                micBtn.classList.add('error');
                
                if (micText) {
                    micText.textContent = '❌ Erreur';
                }
                
                recordingStatus.textContent = '❌ Erreur. Réessayez.';
                recordingStatus.style.color = '#ef4444';
                recordingStatus.className = 'recording-status error';
            }
        }
    };
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // EVENT : RÉSULTAT DE LA RECONNAISSANCE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase().trim();
        const expected = lesson.phrase.toLowerCase().trim();
        const confidence = event.results[0][0].confidence;
        
        console.log('📝 Phrase attendue:', expected);
        console.log('🎤 Phrase entendue:', transcript);
        console.log('📊 Confiance:', confidence);
        
        isRecording = false;
        micBtn.classList.remove('recording');
        
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // VÉRIFICATION FLEXIBLE
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        
        // Nettoyer les espaces pour comparaison
        const cleanTranscript = transcript.replace(/\s+/g, '').toLowerCase();
        const cleanExpected = expected.replace(/\s+/g, '').toLowerCase();
        
        const isCorrect = 
            transcript === expected || 
            transcript.includes(expected) || 
            expected.includes(transcript) ||
            cleanTranscript === cleanExpected ||
            cleanTranscript.includes(cleanExpected) ||
            cleanExpected.includes(cleanTranscript) ||
            confidence > 0.8; // Haute confiance
        
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // SUCCÈS ✅
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        
        if (isCorrect) {
            console.log('✅ Prononciation correcte !');
            
            micBtn.classList.add('success');
            
            if (micText) {
                micText.textContent = '✅ Bien prononcé!';
            }
            
            recordingStatus.innerHTML = `
                <div style="color: #10b981; font-weight: 600;">
                    ✅ Prononciation correcte!<br>
                    <small style="color: #666;">Vous avez dit: "${transcript}"</small>
                </div>
            `;
            recordingStatus.className = 'recording-status success';
            
            // Jouer son de succès
            successSound.play().catch(err => console.log('Son non disponible'));
            
            // Afficher le bouton terminer
            completeBtn.style.display = 'block';
            completeBtn.onclick = completeLesson;
            
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        // ERREUR ❌
        // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        
        } else {
            console.log('❌ Prononciation incorrecte');
            
            micBtn.classList.add('error');
            
            if (micText) {
                micText.textContent = '❌ Réessayez';
            }
            
            recordingStatus.innerHTML = `
                <div style="color: #ef4444; font-weight: 600;">
                    ❌ Prononciation incorrecte<br>
                    <small>Attendu: "${expected}"</small><br>
                    <small>Entendu: "${transcript}"</small>
                </div>
            `;
            recordingStatus.className = 'recording-status error';
            
            // Jouer son d'erreur
            errorSound.play().catch(err => console.log('Son non disponible'));
            
            // Réinitialiser après 3 secondes
            setTimeout(() => {
                micBtn.classList.remove('error');
                if (micText) {
                    micText.textContent = 'Appuyez pour parler';
                }
            }, 3000);
        }
    };
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // EVENT : ERREUR DE RECONNAISSANCE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    recognition.onerror = (event) => {
        isRecording = false;
        micBtn.classList.remove('recording');
        micBtn.classList.add('error');
        
        let errorMessage = 'Erreur inconnue';
        
        switch(event.error) {
            case 'no-speech':
                errorMessage = 'Aucun son détecté. Parlez plus fort.';
                break;
            case 'audio-capture':
                errorMessage = 'Microphone non détecté. Vérifiez les permissions.';
                break;
            case 'not-allowed':
                errorMessage = 'Permission microphone refusée. Autorisez le microphone.';
                break;
            case 'network':
                errorMessage = 'Erreur réseau. Vérifiez votre connexion.';
                break;
            case 'aborted':
                errorMessage = 'Enregistrement annulé.';
                break;
            default:
                errorMessage = `Erreur: ${event.error}`;
        }
        
        if (micText) {
            micText.textContent = 'Erreur - Réessayez';
        }
        
        recordingStatus.textContent = '❌ ' + errorMessage;
        recordingStatus.style.color = '#ef4444';
        recordingStatus.className = 'recording-status error';
        
        console.error('❌ Erreur reconnaissance vocale:', event.error);
        
        // Réinitialiser après 3 secondes
        setTimeout(() => {
            micBtn.classList.remove('error');
            if (micText) {
                micText.textContent = 'Appuyez pour parler';
            }
        }, 3000);
    };
    
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // EVENT : FIN DE RECONNAISSANCE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    
    recognition.onend = () => {
        isRecording = false;
        micBtn.classList.remove('recording');
        console.log('🎤 Reconnaissance vocale terminée');
    };
}
   
    // ═══════════════════════════════════════════════════════════
    // COMPLÉTER UNE LEÇON
    // ═══════════════════════════════════════════════════════════
    
    function completeLesson() {
        const lessonId = state.currentLesson.id;
        
        if (!state.completedLessons.includes(lessonId)) {
            state.completedLessons.push(lessonId);
            localStorage.setItem('kivira_completed_lessons', JSON.stringify(state.completedLessons));
        }
        
        document.getElementById('kivira-lesson-view').style.display = 'none';
        document.getElementById('kivira-lesson-list').style.display = 'block';
        
        renderLessonList();
    }
    
    // ═══════════════════════════════════════════════════════════
    // HELPERS
    // ═══════════════════════════════════════════════════════════
    
    function getCompletedLessonsForCategory(categoryKey) {
        const category = CATEGORIES[categoryKey];
        const lessonIds = category.lessons.map(l => l.id);
        return state.completedLessons.filter(id => lessonIds.includes(id));
    }
    
    // ═══════════════════════════════════════════════════════════
    // MODAL PREMIUM
    // ═══════════════════════════════════════════════════════════
   function showPremiumModal() {
    console.log('🔒 Premium requis');
    
    // Utiliser la fonction GLOBALE
    if (typeof showPaymentModal === 'function') {
        showPaymentModal();
    } else {
        alert('Premium requis - 1000 FC');
    }
}
    // ═══════════════════════════════════════════════════════════
    // EVENT LISTENERS
    // ═══════════════════════════════════════════════════════════
    
    function attachEventListeners() {
        // Retour catégories
        document.getElementById('kivira-back-to-categories')?.addEventListener('click', () => {
            document.getElementById('kivira-lesson-list').style.display = 'none';
            document.getElementById('kivira-categories-grid').style.display = 'grid';
        });
        
        // Retour leçons
        document.getElementById('kivira-back-to-lessons')?.addEventListener('click', () => {
            document.getElementById('kivira-lesson-view').style.display = 'none';
            document.getElementById('kivira-lesson-list').style.display = 'block';
        });
        
        // Étape 1 suivant
        document.getElementById('kivira-step1-next')?.addEventListener('click', () => showStep(2));
        
        // Étape 3 vérifier
        document.getElementById('kivira-step3-check')?.addEventListener('click', () => showStep(4));
        
        // Étape 4 terminer
        document.getElementById('kivira-step4-finish')?.addEventListener('click', completeLesson);
        
        // Modal premium
        document.querySelector('.kivira-premium-close')?.addEventListener('click', closePremiumModal);
        document.querySelector('.kivira-premium-later-btn')?.addEventListener('click', closePremiumModal);
        document.querySelector('.kivira-premium-buy-btn')?.addEventListener('click', () => {
            closePremiumModal();
            if (typeof openAuthModal === 'function') {
                openAuthModal();
            }
        });
        
        // Click sur overlay
        document.querySelector('.kivira-premium-overlay')?.addEventListener('click', closePremiumModal);
        const step3Check = document.getElementById('kivira-step3-check');
if (step3Check) {
    step3Check.removeEventListener('click', checkStep3Answer); // Éviter doublons
    step3Check.addEventListener('click', checkStep3Answer);
}
    }
    
    // ═══════════════════════════════════════════════════════════
    // AUTO-INIT
    // ═══════════════════════════════════════════════════════════
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(init, 500));
    } else {
        setTimeout(init, 500);
    }
    
    // ═══════════════════════════════════════════════════════════
    // API PUBLIQUE
    // ═══════════════════════════════════════════════════════════
    
   window.KiviraLessons = {
    init,
    getCategories: () => CATEGORIES,
    
    // AJOUTER cette fonction
    refresh: function() {
        console.log('🔄 Rafraîchissement');
        renderCategories();
        document.querySelectorAll('.kivira-premium-badge').forEach(b => b.remove());
        document.querySelectorAll('.kivira-category-card.locked').forEach(c => c.classList.remove('locked'));
    }
};
// Écouter les changements de statut premium
window.addEventListener('premiumStatusChanged', function() {
    console.log('🎉 Premium activé - Rafraîchissement');
    if (window.KiviraLessons) {
        window.KiviraLessons.refresh();
    }
});
    
})();
