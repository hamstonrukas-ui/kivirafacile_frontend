// ==================== TRADUCTIONS DE L'INTERFACE ====================
// Fichier : data/translations.js
// Ce fichier contient toutes les traductions de l'interface en 4 langues

const translations = {
    fr: {
        // Header
        appName: "Kivirafacile",
        login: "Connexion",
        
        // Menu hamburger
        myProfile: "Mon Profil",
        settings: "Paramètres",
        myProgress: "Mes Progrès",
        goals: "Objectifs",
        help: "Aide",
        about: "À propos",
        
        // Navigation bottom
        home: "Accueil",
        library: "Bibliothèque",
        lesson: "Leçon",
        dictionary: "Dictionnaire",
        translation: "Traduction",
        
        // Page d'accueil
        welcome: "Bienvenue sur Kivirafacile!",
        welcomeText: "Apprenez le Kivira facilement et efficacement avec des leçons interactives adaptées à votre niveau.",
        yourProgress: "Votre progression",
        progressText: "Commencez votre parcours d'apprentissage dès aujourd'hui. Explorez nos leçons et enrichissez votre vocabulaire!",
        lessonOfDay: "Leçon du jour",
        
        // Leçons
        chooseCategory: "Choisissez une catégorie",
        lessons: "leçons",
        back: "Retour",
        continue: "Continuer",
        validate: "Valider",
        complete: "Terminer la leçon",
        congratulations: "Félicitations!",
        lessonComplete: "Vous avez terminé la leçon avec succès!",
        
        // Étapes leçons
        listenPronunciation: "Écouter la prononciation",
        chooseCorrectTranslation: "Choisissez la bonne traduction :",
        arrangeWords: "Remettez les mots dans le bon ordre :",
        dragWordsHere: "Glissez les mots ici",
        pronounPhrase: "Prononcez cette phrase :",
        pressToSpeak: "Appuyez pour parler",
        recording: "Enregistrement...",
        speakNow: "Parlez maintenant...",
        wellPronounced: "Bien prononcé!",
        correctPronunciation: "Prononciation correcte!",
        tryAgain: "Réessayez",
        
        // Catégories leçons
        greetings: "Salutations",
        family: "Famille",
        food: "Cuisine",
        
        // Bibliothèque
        kiviralLibrary: "Bibliothèque Kivira",
        booksAvailable: "livres disponibles",
        novels: "Romans",
        customsTraditions: "Coutumes & Traditions",
        musicsSongs: "Musiques & Chansons",
        proverbs: "Proverbes",
        poetry: "Poésie",
        rwandaHistory: "Histoire du Rwanda",
        pages: "pages",
        
        // Dictionnaire
        kiviraDictionary: "Dictionnaire Kivira",
        searchWord: "Rechercher un mot...",
        welcomeToDictionary: "Bienvenue dans le dictionnaire Kivira",
        searchWordText: "Recherchez un mot en Kivira ou en Français pour voir sa traduction",
        examples: "Exemples:",
        translationIn: "Traduction en français",
        usageExamples: "Exemples d'utilisation",
        noResultsFound: "Aucun résultat trouvé",
        wordNotFound: "n'a pas été trouvé dans le dictionnaire.",
        
        // Traducteur
        translatorTitle: "Traducteur Français → Kivira",
        translatorSubtitle: "Ce traducteur est en cours de développement, surce il peut se tromper sur certains résultats",
        french: "Français",
        enterText: "Entrez votre texte en français",
        kivira: "Kivira",
        translationLabel: "Traduction",
        clear: "Effacer",
        translate: "Traduire",
        copy: "Copier",
        copied: "Copié !",
        listen: "Écouter",
        commonExpression: "Expression courante",
        wordByWord: "Traduction mot-à-mot",
        seeAnalysis: "Voir l'analyse grammaticale",
        warnings: "Avertissements",
        tryExamples: "Essayez ces exemples :",
        
        // Paramètres
        settingsTitle: "Paramètres",
        languagePreference: "Langue de préférence",
        chooseLanguage: "Choisissez votre langue d'apprentissage",
        kiviraLanguage: "Kivira",
        motherTongue: "Langue maternelle",
        frenchLanguage: "Français",
        englishLanguage: "Anglais",
        swahiliLanguage: "Swahili",
        notifications: "Notifications",
        dailyReminders: "Rappels quotidiens",
        audio: "Audio",
        autoPlay: "Lecture automatique",
        save: "Enregistrer",
        saved: "Enregistré !",

        // Reglage parametres
        Parameter: "Parametres",
        langue: "langue de l'application",
        Choose: "Choisissez votre langue",
        Notif: "Notifications",
        Rappel: "Rappel quotidienne",
        lecture: "lecture automatique",
        Myprofile: "Mon profil",
        sponsors: "Murs des sponsors",
        share: "parteger",
        

        
        //Payment
        passer: "passer en premium",
        Download: "📱 Télécharger KiviraFacile",
        Install: "Installez l'application sur votre téléphone pour une expérience optimale",
        Openapp: "Ouvrez KiviraFacile dans Chrome",
        Touch: "Appuyez sur le menu ⋮ (3 points)",
        Select: "Sélectionnez \"Ajouter à l'écran d'accueil\"",
        Confirm: "Confirmez en appuyant sur \"Ajouter\"",
        Icon: "L'icône apparaît sur votre écran d'accueil (ou dans la liste des applications) ✅",
        OpenI: "Ouvrez KiviraFacile dans Safari",
        TouchI: "Appuyez sur le bouton Partager 📤",
        DoI: "Faites défiler et appuyez sur \"Sur l'écran d'accueil\"",
        TouchII: "Appuyez sur \"Ajouter\" en haut à droite",
        IconI: "L'icône apparaît sur votre écran d'accueil ✅",
        NeedHelp: "📺 Besoin d'aide ? Regardez notre tutoriel vidéo",
        Tuto: "💡 Le tutoriel montre étape par étape comment installer l'application sur Android et iOS",
        Be: "⭐ Passer en Premium",
        Debloq: "Débloquez toutes les fonctionnalités de KiviraFacile",
        Avan: "✨ Avantages Premium",
        access: "Accès à toutes les leçons avancées",
        Warn: "✅ Seuls les paiements authentiques sont acceptés. ✅ Chaque transaction est vérifiée avec notre opérateur mobile. ✅ Les fraudeurs seront bannis sans possibilité de retour.",
        Verify: "Nous vérifions en permanence chaque transaction. Si vous tentez d'accéder au premium sans paiement valide, ou si vous envoyez une fausse preuve de paiement, votre compte sera bloqué définitivement et immédiatement après vérification.",
        All: "Toute tentative de fraude sera sanctionnée !",
        Warning: "⚠️ Avertissement Important",
        After: "📝 Après le paiement : Envoyez-nous une capture d'écran de la transaction à ce numéro WhatsApp +243855841999 avec votre nom d'utilisateur.",
        close: "✕ Fermer",
        contactUs: "Contactez-nous",
        Sponsors: "Murs des sponsors",
        return: "← Retour",
        question: "Questions fréquentes",
        how: "Comment fonctionne le traducteur ?",
        the_translator: "Le traducteur analyse chaque mot français selon sa nature (nom, verbe, adjectif...) et applique les règles grammaticales du Kivira : classes nominales, accords, conjugaisons. Il génère une traduction mot-à-mot avec analyse détaillée.",
        Why: "Pourquoi un mot est affiché entre crochets [mot] ?",
        whyAnswer: "Cela signifie que le mot n'est pas encore dans notre dictionnaire. Vous pouvez contribuer en nous signalant les mots manquants via le support.",
        pendingStatus: "En attente",
        progressByDomain: "Progression par domaine",
        noProgressYet: "Aucune progression enregistrée pour le moment.",
        shareTitle: "Partager Kivirafacile",
        shareIntro: "Aidez vos amis à apprendre le Kivira en partageant l'application !",
        shareVia: "Partager via",
        copyLink: "Copier le lien",
        shareMessageTitle: "Message de partage",
        shareMessageText: "Découvre Kivirafacile 🎓 - L'app pour apprendre le Kivira facilement ! Vocabulaire, grammaire, traduction et bien plus. Télécharge-la maintenant : [LIEN]",
        needMoreHelp: "Besoin d'aide supplémentaire ?",
        teamHereToHelp: "Notre équipe est là pour vous aider. N'hésitez pas à nous contacter !",
        clickToContact: "Contactez-nous en cliquant sur ce bouton 👇",
        howValidate: "Comment valider une traduction du corpus ?",
        howValidateAnswer: "Après chaque traduction, deux boutons apparaissent : \"👍 Correcte\" si la traduction est bonne, ou \"✏️ Corriger\" pour proposer une amélioration. Vos contributions enrichissent la base de données.",
        offlineQuestion: "Puis-je utiliser l'app hors connexion ?",
        offlineAnswer: "Certaines fonctionnalités fonctionnent hors ligne (traducteur, leçons, dictionnaire). Seule la synchronisation du corpus nécessite une connexion internet.",
        premiumQuestion: "Comment obtenir l'abonnement premium ?",
        premiumAnswer: "L'abonnement premium débloque toutes les fonctionnalités : leçons avancées, traducteur illimité, bibliothèque complète. Contactez-nous pour plus d'informations.",
        ourMission: "Notre mission",
        missionText: "Kivirafacile est une application dédiée à la préservation et à l'enseignement du Kivira, la langue du peuple Vira en République Démocratique du Congo. Notre objectif est de rendre cette langue accessible à tous : locuteurs natifs, diaspora, chercheurs et curieux.",
        aboutPageTitle: "À Propos de KiviraFacile",
        ourGoals: "Nos Objectifs",
        goal1Title: "Bibliothèque de référence",
        goal1Text: "Créer une bibliothèque complète sur les traditions et coutumes Vira accessible à tous",
        goal2Title: "École de formation",
        goal2Text: "Une école permanente de formation sur la langue Vira avec des cours structurés et progressifs",
        goal3Title: "Équipe de recherche",
        goal3Text: "Constituer une équipe de recherche dédiée à la culture et à la langue Vira",
        goal4Title: "Intelligence Artificielle",
        goal4Text: "Développer une IA entraînée sur la culture Vira pour assister l'apprentissage",
        goal5Title: "Réseau social",
        goal5Text: "Un réseau social dédié aux Bavira pour échanger et pratiquer la langue ensemble",
        goal6Title: "Dessins animés éducatifs",
        goal6Text: "Créer des dessins animés éducatifs pour aider les enfants à comprendre leurs origines",
        goal7Title: "Dictionnaire de référence",
        goal7Text: "Construire un dictionnaire commun de référence de tous les mots Vira",
        goal8Title: "Chaîne d'actualité",
        goal8Text: "Développer une chaîne d'information sur la ville d'Uvira et sa région",
        projectProgress: "Avancement du Projet",
        globalProgress: "Progression Globale",
        completed: "accompli",
        beginningAdventure: "Nous sommes au début d'une grande aventure ! Soutenez-nous pour préserver notre culture.",
        featuresTitle: "Fonctionnalités",
        featTranslator: "• 🔄 Traducteur Français → Kivira avec analyse grammaticale",
        featLessons: "• 📚 Leçons interactives sur la grammaire Kivira",
        featDictionary: "• 📖 Dictionnaire complet bilingue",
        featCommunity: "• 🤝 Système de contribution communautaire au corpus",
        featGoals: "• 🎯 Suivi des progrès et objectifs personnalisés",
        ourTeam: "L'équipe",
        projectPresenters: "Présentateurs du projet",
        teamDesc1: "Passionné par la préservation des leurs langue maternelle et leurs coutume.",
        directorDev: "Réalisateur & Développeur",
        thanksTitle: "Remerciements",
        thanksText: "Merci à tous les contributeurs qui enrichissent quotidiennement le corpus Kivira, aux locuteurs natifs qui valident les traductions, et à la communauté Vira pour son soutien.",
        allRightsReserved: "© 2026 Kivirafacile. Tous droits réservés.",
        abroadPremiumQuestion: "Vous êtes à l'étranger (en dehors de la RDC) et vous souhaitez passer en premium ?",
        abroadPremiumAnswer: "Veuillez contacter l'équipe Kivirafacile pour vous aider.",
        joinWhatsappGroup: "Pour continuer à apprendre la langue Vira, veuillez intégrer ce groupe WhatsApp :",
        forYour: "Pour vos :",
        supportSuggestions: "soutiens et suggestions",
        forAbroadSubscribers: "Pour les personnes souhaitant s'abonner et se trouvant à l'étranger",
        accessYourAccount: "Accédez à votre compte",
        register: "Inscription",
        email: "Email",
        password: "Mot de passe",
        forgotPassword: "Mot de passe oublié ?",
        loginCta: "Se connecter",
        fullName: "Nom complet",
        minCharacters: "Min. 6 caractères",
        inviteCodeLabel: "Code d'invitation Admin",
        createAccount: "Créer mon compte",
        haveInviteCode: "J'ai un code d'invitation admin",
        enterEmailRecover: "Entrez votre email pour récupérer votre mot de passe",
        send: "Envoyer",
        backToLogin: "← Retour à la connexion",
        reservedFeature: "Fonctionnalité réservée",
        createFreeAccount: "Créez un compte gratuit pour accéder à cette fonctionnalité",
        premiumBenefit2: "Téléchargement des contenus hors-ligne",
        premiumBenefit3: "Dictionnaire complet avec audio",
        premiumBenefit4: "Exercices interactifs illimités",
        premiumBenefit5: "Certificat de compétence",
        premiumBenefit6: "Aucune publicité",
        premiumBenefit7: "Support prioritaire",
        howToPay: "💳 Comment payer ?",
        returnBtn: "← Retour",

       
    },

    
    en: {
        // Header
        appName: "Kivirafacile",
        login: "Login",
        
        // Menu hamburger
        myProfile: "My Profile",
        settings: "Settings",
        myProgress: "My Progress",
        goals: "Goals",
        help: "Help",
        about: "About",
        contactUs: "Contact us",
        Sponsors: "Sponsors Wall",
        
        // Navigation bottom
        home: "Home",
        library: "Library",
        lesson: "Lesson",
        dictionary: "Dictionary",
        translation: "Translation",
        
        // Page d'accueil
        welcome: "Welcome to Kivirafacile!",
        welcomeText: "Learn Kivira easily and effectively with interactive lessons tailored to your level.",
        yourProgress: "Your progress",
        progressText: "Start your learning journey today. Explore our lessons and enrich your vocabulary!",
        lessonOfDay: "Lesson of the day",
        
        // Leçons
        chooseCategory: "Choose a category",
        lessons: "lessons",
        back: "Back",
        continue: "Continue",
        validate: "Validate",
        complete: "Complete lesson",
        congratulations: "Congratulations!",
        lessonComplete: "You have successfully completed the lesson!",
        
        // Étapes leçons
        listenPronunciation: "Listen to pronunciation",
        chooseCorrectTranslation: "Choose the correct translation:",
        arrangeWords: "Put the words in the right order:",
        dragWordsHere: "Drag words here",
        pronounPhrase: "Pronounce this phrase:",
        pressToSpeak: "Press to speak",
        recording: "Recording...",
        speakNow: "Speak now...",
        wellPronounced: "Well pronounced!",
        correctPronunciation: "Correct pronunciation!",
        tryAgain: "Try again",
        
        // Catégories leçons
        greetings: "Greetings",
        family: "Family",
        food: "Food",
        
        // Bibliothèque
        kiviralLibrary: "Kivira Library",
        booksAvailable: "books available",
        novels: "Novels",
        customsTraditions: "Customs & Traditions",
        musicsSongs: "Music & Songs",
        proverbs: "Proverbs",
        poetry: "Poetry",
        rwandaHistory: "History of Rwanda",
        pages: "pages",
        
        // Dictionnaire
        kiviraDictionary: "Kivira Dictionary",
        searchWord: "Search for a word...",
        welcomeToDictionary: "Welcome to Kivira dictionary",
        searchWordText: "Search for a word in Kivira or English to see its translation",
        examples: "Examples:",
        translationIn: "Translation in English",
        usageExamples: "Usage examples",
        noResultsFound: "No results found",
        wordNotFound: "was not found in the dictionary.",
        
        // Traducteur
        translatorTitle: "Translator English → Kivira",
        translatorSubtitle: "This translator is in building, it can lie from some results",
        french: "English",
        enterText: "Enter your text in English",
        kivira: "Kivira",
        translationLabel: "Translation",
        clear: "Clear",
        translate: "Translate",
        copy: "Copy",
        copied: "Copied!",
        listen: "Listen",
        commonExpression: "Common expression",
        wordByWord: "Word-by-word translation",
        seeAnalysis: "See grammatical analysis",
        warnings: "Warnings",
        tryExamples: "Try these examples:",
        
        // Paramètres
        settingsTitle: "Settings",
        languagePreference: "Language preference",
        chooseLanguage: "Choose your learning language",
        kiviraLanguage: "Kivira",
        motherTongue: "Mother tongue",
        frenchLanguage: "French",
        englishLanguage: "English",
        swahiliLanguage: "Swahili",
        notifications: "Notifications",
        dailyReminders: "Daily reminders",
        audio: "Audio",
        autoPlay: "Auto-play",
        save: "Save",
        saved: "Saved!",

        // Parametres
        Parameter: "Settings",
        langue: "Application language",
        Choose: "Choose your favorite language",
        Notif: "Notifications",
        Rappel: "Daily reminder",
        lecture: "automatical reading",
         Myprofile: "My Profil",
         close: "Close",
          sponsors: "Sponsors wall",
         share: "Share",

        //Payment
         passer: "pass in premium",
        Download: "📱 Download KiviraFacile",
        Install: "Install the app on your phone for the best experience",
        Openapp: "Open KiviraFacile in Chrome",
        Touch: "Tap the ⋮ menu (3 dots)",
        Select: "Select \"Add to Home Screen\"",
        Confirm: "Confirm by tapping \"Add\"",
        Icon: "The icon appears on your home screen (or in the app list) ✅",
        OpenI: "Open KiviraFacile in Safari",
        TouchI: "Tap the Share button 📤",
        DoI: "Scroll down and tap \"Add to Home Screen\"",
        TouchII: "Tap \"Add\" at the top right",
        IconI: "The icon appears on your home screen ✅",
        NeedHelp: "📺 Need help? Watch our video tutorial",
        Tuto: "💡 The tutorial shows step by step how to install the app on Android and iOS",
        Be: "⭐ Go Premium",
        Debloq: "Unlock all KiviraFacile features",
        Avan: "✨ Premium Benefits",
        access: "Access to all advanced lessons",
        Warn: "✅ Only authentic payments are accepted. ✅ Every transaction is verified with our mobile operator. ✅ Fraudsters will be banned with no possibility of return.",
        Verify: "We continuously verify every transaction. If you attempt to access premium without a valid payment, or send fake proof of payment, your account will be permanently and immediately blocked after verification.",
        All: "Any attempt at fraud will be sanctioned!",
        Warning: "⚠️ Important Warning",
        After: "📝 After payment: Send us a screenshot of the transaction to this WhatsApp number +243855841999 with your username.",
        return: "← Back",
        question: "Frequently asked questions",
        how: "How does the translator work?",
        the_translator: "The translator analyzes each French word according to its type (noun, verb, adjective...) and applies Kivira grammar rules: noun classes, agreement, conjugation. It generates a word-by-word translation with detailed analysis.",
        Why: "Why is a word shown in brackets [word]?",
        whyAnswer: "This means the word is not yet in our dictionary. You can contribute by reporting missing words via support.",
        pendingStatus: "Pending",
        progressByDomain: "Progress by domain",
        noProgressYet: "No progress recorded yet.",
        shareTitle: "Share Kivirafacile",
        shareIntro: "Help your friends learn Kivira by sharing the app!",
        shareVia: "Share via",
        copyLink: "Copy link",
        shareMessageTitle: "Share message",
        shareMessageText: "Discover Kivirafacile 🎓 - The app to learn Kivira easily! Vocabulary, grammar, translation and much more. Download it now: [LINK]",
        needMoreHelp: "Need more help?",
        teamHereToHelp: "Our team is here to help you. Don't hesitate to contact us!",
        clickToContact: "Contact us by clicking this button 👇",
        howValidate: "How do I validate a corpus translation?",
        howValidateAnswer: "After each translation, two buttons appear: \"👍 Correct\" if the translation is good, or \"✏️ Fix\" to suggest an improvement. Your contributions enrich the database.",
        offlineQuestion: "Can I use the app offline?",
        offlineAnswer: "Some features work offline (translator, lessons, dictionary). Only corpus synchronization requires an internet connection.",
        premiumQuestion: "How do I get the premium subscription?",
        premiumAnswer: "The premium subscription unlocks all features: advanced lessons, unlimited translator, full library. Contact us for more information.",
        ourMission: "Our mission",
        missionText: "Kivirafacile is an app dedicated to preserving and teaching Kivira, the language of the Vira people in the Democratic Republic of Congo. Our goal is to make this language accessible to everyone: native speakers, the diaspora, researchers and the curious.",
        aboutPageTitle: "About KiviraFacile",
        ourGoals: "Our Goals",
        goal1Title: "Reference library",
        goal1Text: "Create a complete library on Vira traditions and customs accessible to all",
        goal2Title: "Training school",
        goal2Text: "A permanent training school for the Vira language with structured, progressive courses",
        goal3Title: "Research team",
        goal3Text: "Build a research team dedicated to Vira culture and language",
        goal4Title: "Artificial Intelligence",
        goal4Text: "Develop an AI trained on Vira culture to assist learning",
        goal5Title: "Social network",
        goal5Text: "A social network dedicated to the Bavira to exchange and practice the language together",
        goal6Title: "Educational cartoons",
        goal6Text: "Create educational cartoons to help children understand their origins",
        goal7Title: "Reference dictionary",
        goal7Text: "Build a common reference dictionary of all Vira words",
        goal8Title: "News channel",
        goal8Text: "Develop a news channel about the city of Uvira and its region",
        projectProgress: "Project Progress",
        globalProgress: "Overall Progress",
        completed: "completed",
        beginningAdventure: "We are at the beginning of a great adventure! Support us to preserve our culture.",
        featuresTitle: "Features",
        featTranslator: "• 🔄 French → Kivira translator with grammatical analysis",
        featLessons: "• 📚 Interactive lessons on Kivira grammar",
        featDictionary: "• 📖 Complete bilingual dictionary",
        featCommunity: "• 🤝 Community contribution system for the corpus",
        featGoals: "• 🎯 Progress tracking and personalized goals",
        ourTeam: "The team",
        projectPresenters: "Project presenters",
        teamDesc1: "Passionate about preserving their mother tongue and customs.",
        directorDev: "Director & Developer",
        thanksTitle: "Acknowledgements",
        thanksText: "Thanks to all the contributors who enrich the Kivira corpus daily, to the native speakers who validate translations, and to the Vira community for its support.",
        allRightsReserved: "© 2026 Kivirafacile. All rights reserved.",
        abroadPremiumQuestion: "Are you abroad (outside the DRC) and want to go premium?",
        abroadPremiumAnswer: "Please contact the Kivirafacile team for help.",
        joinWhatsappGroup: "To continue learning the Vira language, please join this WhatsApp group:",
        forYour: "For your:",
        supportSuggestions: "support and suggestions",
        forAbroadSubscribers: "For people wishing to subscribe who are abroad",
        accessYourAccount: "Access your account",
        register: "Sign up",
        email: "Email",
        password: "Password",
        forgotPassword: "Forgot password?",
        loginCta: "Log in",
        fullName: "Full name",
        minCharacters: "Min. 6 characters",
        inviteCodeLabel: "Admin invitation code",
        createAccount: "Create my account",
        haveInviteCode: "I have an admin invitation code",
        enterEmailRecover: "Enter your email to recover your password",
        send: "Send",
        backToLogin: "← Back to login",
        reservedFeature: "Reserved feature",
        createFreeAccount: "Create a free account to access this feature",
        premiumBenefit2: "Offline content download",
        premiumBenefit3: "Complete dictionary with audio",
        premiumBenefit4: "Unlimited interactive exercises",
        premiumBenefit5: "Certificate of competence",
        premiumBenefit6: "No advertising",
        premiumBenefit7: "Priority support",
        howToPay: "💳 How to pay?",
        returnBtn: "← Back",

          
    },
    
    sw: {
        // Header
        appName: "Kivirafacile",
        login: "Ingia",
        
        // Menu hamburger
        myProfile: "Wasifu Wangu",
        settings: "Mipangilio",
        myProgress: "Maendeleo Yangu",
        goals: "Malengo",
        help: "Msaada",
        about: "Kuhusu",
        
        // Navigation bottom
        home: "Nyumbani",
        library: "Maktaba",
        lesson: "Somo",
        dictionary: "Kamusi",
        translation: "Tafsiri",
        
        // Page d'accueil
        welcome: "Karibu Kivirafacile!",
        welcomeText: "Jifunze Kivira kwa urahisi na ufanisi kwa masomo ya maingiliano yanayolingana na kiwango chako.",
        yourProgress: "Maendeleo yako",
        progressText: "Anza safari yako ya kujifunza leo. Gundua masomo yetu na tajiri msamiati wako!",
        lessonOfDay: "Somo la siku",
        
        // Leçons
        chooseCategory: "Chagua jamii",
        lessons: "masomo",
        back: "Rudi",
        continue: "Endelea",
        validate: "Thibitisha",
        complete: "Maliza somo",
        congratulations: "Hongera!",
        lessonComplete: "Umekamilisha somo kwa mafanikio!",
        
        // Étapes leçons
        listenPronunciation: "Sikiliza matamshi",
        chooseCorrectTranslation: "Chagua tafsiri sahihi:",
        arrangeWords: "Weka maneno kwa mpangilio sahihi:",
        dragWordsHere: "Buruta maneno hapa",
        pronounPhrase: "Tamka sentensi hii:",
        pressToSpeak: "Bonyeza kusema",
        recording: "Kurekodi...",
        speakNow: "Sema sasa...",
        wellPronounced: "Umetamka vizuri!",
        correctPronunciation: "Matamshi sahihi!",
        tryAgain: "Jaribu tena",
        
        // Catégories leçons
        greetings: "Salamu",
        family: "Familia",
        food: "Chakula",
        
        // Bibliothèque
        kiviralLibrary: "Maktaba ya Kivira",
        booksAvailable: "vitabu vinavyopatikana",
        novels: "Riwaya",
        customsTraditions: "Mila na Desturi",
        musicsSongs: "Muziki na Nyimbo",
        proverbs: "Methali",
        poetry: "Ushairi",
        rwandaHistory: "Historia ya Rwanda",
        pages: "kurasa",
        
        // Dictionnaire
        kiviraDictionary: "Kamusi ya Kivira",
        searchWord: "Tafuta neno...",
        welcomeToDictionary: "Karibu kwenye kamusi ya Kivira",
        searchWordText: "Tafuta neno kwa Kivira au Kiswahili kuona tafsiri yake",
        examples: "Mifano:",
        translationIn: "Tafsiri kwa Kiswahili",
        usageExamples: "Mifano ya matumizi",
        noResultsFound: "Hakuna matokeo",
        wordNotFound: "halikupatikana kwenye kamusi.",
        
        // Traducteur
        translatorTitle: "Mkalimani Kiswahili → Kivira",
        translatorSubtitle: "Iyi tafsiri ipo kwenye ujenzi, inaweza ika danganya kwenye majibu",
        french: "Kiswahili",
        enterText: "Ingiza maandishi yako kwa Kiswahili",
        kivira: "Kivira",
        translationLabel: "Tafsiri",
        clear: "Futa",
        translate: "Tafsiri",
        copy: "Nakili",
        copied: "Imenakiliwa!",
        listen: "Sikiliza",
        commonExpression: "Msemo wa kawaida",
        wordByWord: "Tafsiri neno kwa neno",
        seeAnalysis: "Ona uchambuzi wa sarufi",
        warnings: "Maonyo",
        tryExamples: "Jaribu mifano hii:",
        
        // Paramètres
        settingsTitle: "Mipangilio",
        languagePreference: "Lugha unayopendelea",
        chooseLanguage: "Chagua lugha yako ya kujifunza",
        kiviraLanguage: "Kivira",
        motherTongue: "Lugha ya mama",
        frenchLanguage: "Kifaransa",
        englishLanguage: "Kiingereza",
        swahiliLanguage: "Kiswahili",
        notifications: "Arifa",
        dailyReminders: "Vikumbusho vya kila siku",
        audio: "Sauti",
        autoPlay: "Cheza kiotomatiki",
        save: "Hifadhi",
        saved: "Imehifadhiwa!",

        //Parametre
        Parameter: "Mipangilio",
        langue: "Lugha",
        Choose: "Chagua lugha",
        Notif: "Habari",
        Rappel: "Vikumbusho vya kila siku",
        lecture: "Kusoma yenyewe",
         Myprofile: "Wasifu",
         close: "Funga",
          sponsors: "Ukuta wa mafadhili",
        share: "Gawa",

        //Payments
         passer: "ingiya kwa wambele",
        Download: "📱 Pakua KiviraFacile",
        Install: "Sakinisha programu kwenye simu yako kwa uzoefu bora",
        Openapp: "Fungua KiviraFacile kwenye Chrome",
        Touch: "Gusa menyu ⋮ (nukta 3)",
        Select: "Chagua \"Ongeza kwenye Skrini ya Nyumbani\"",
        Confirm: "Thibitisha kwa kugusa \"Ongeza\"",
        Icon: "Aikoni inaonekana kwenye skrini yako ya nyumbani (au kwenye orodha ya programu) ✅",
        OpenI: "Fungua KiviraFacile kwenye Safari",
        TouchI: "Gusa kitufe cha Kushiriki 📤",
        DoI: "Sogeza chini na ugonge \"Kwenye Skrini ya Nyumbani\"",
        TouchII: "Gusa \"Ongeza\" juu kulia",
        IconI: "Aikoni inaonekana kwenye skrini yako ya nyumbani ✅",
        NeedHelp: "📺 Unahitaji msaada? Angalia mafunzo yetu ya video",
        Tuto: "💡 Mafunzo yanaonyesha hatua kwa hatua jinsi ya kusakinisha programu kwenye Android na iOS",
        Be: "⭐ Pata Premium",
        Debloq: "Fungua vipengele vyote vya KiviraFacile",
        Avan: "✨ Faida za Premium",
        access: "Ufikiaji wa masomo yote ya juu",
        Warn: "✅ Malipo halisi tu yanakubaliwa. ✅ Kila muamala unathibitishwa na mtoa huduma wetu wa simu. ✅ Walaghai watapigwa marufuku bila fursa ya kurudi.",
        Verify: "Tunahakiki kila muamala kila mara. Ukijaribu kufikia premium bila malipo halali, au kutuma uthibitisho bandia wa malipo, akaunti yako itafungwa kabisa na mara moja baada ya uhakiki.",
        All: "Jaribio lolote la ulaghai litaadhibiwa!",
        Warning: "⚠️ Onyo Muhimu",
        After: "📝 Baada ya malipo: Tutumie picha ya skrini ya muamala kwenye nambari hii ya WhatsApp +243855841999 pamoja na jina lako la mtumiaji.",
        contactUs: "Wasiliana nasi",
        Sponsors: "Ukuta wa mafadhili",
        return: "← Rudi",
        question: "Maswali ya mara kwa mara",
        how: "Mkalimani anafanyaje kazi?",
        the_translator: "Mkalimani huchambua kila neno la Kifaransa kulingana na aina yake (nomino, kitenzi, kivumishi...) na kutumia kanuni za sarufi za Kivira: madaraja ya nomino, mapatano, na uambishaji. Hutoa tafsiri neno kwa neno pamoja na uchambuzi wa kina.",
        Why: "Kwa nini neno linaonyeshwa kwenye mabano [neno]?",
        whyAnswer: "Hii inamaanisha neno bado halipo kwenye kamusi yetu. Unaweza kuchangia kwa kuripoti maneno yanayokosekana kupitia msaada.",
        pendingStatus: "Inasubiriwa",
        progressByDomain: "Maendeleo kwa kikoa",
        noProgressYet: "Hakuna maendeleo yaliyorekodiwa bado.",
        shareTitle: "Shiriki Kivirafacile",
        shareIntro: "Wasaidie marafiki zako kujifunza Kivira kwa kushiriki programu!",
        shareVia: "Shiriki kupitia",
        copyLink: "Nakili kiungo",
        shareMessageTitle: "Ujumbe wa kushiriki",
        shareMessageText: "Gundua Kivirafacile 🎓 - Programu ya kujifunza Kivira kwa urahisi! Msamiati, sarufi, tafsiri na mengi zaidi. Pakua sasa: [KIUNGO]",
        needMoreHelp: "Unahitaji msaada zaidi?",
        teamHereToHelp: "Timu yetu iko hapa kukusaidia. Usisite kuwasiliana nasi!",
        clickToContact: "Wasiliana nasi kwa kubofya kitufe hiki 👇",
        howValidate: "Ninathibitishaje tafsiri ya kundi la maneno?",
        howValidateAnswer: "Baada ya kila tafsiri, vitufe viwili vinaonekana: \"👍 Sahihi\" kama tafsiri ni nzuri, au \"✏️ Rekebisha\" kupendekeza uboreshaji. Michango yako inaboresha hifadhidata.",
        offlineQuestion: "Naweza kutumia programu bila mtandao?",
        offlineAnswer: "Baadhi ya vipengele hufanya kazi bila mtandao (mkalimani, masomo, kamusi). Usawazishaji wa kundi la maneno pekee ndio unahitaji muunganisho wa intaneti.",
        premiumQuestion: "Ninawezaje kupata usajili wa premium?",
        premiumAnswer: "Usajili wa premium hufungua vipengele vyote: masomo ya juu, mkalimani usio na kikomo, maktaba kamili. Wasiliana nasi kwa maelezo zaidi.",
        ourMission: "Dhamira yetu",
        missionText: "Kivirafacile ni programu iliyojitolea kuhifadhi na kufundisha Kivira, lugha ya watu wa Vira katika Jamhuri ya Kidemokrasia ya Kongo. Lengo letu ni kufanya lugha hii ipatikane kwa wote: wazungumzaji asilia, watu wa diaspora, watafiti na wadadisi.",
        aboutPageTitle: "Kuhusu KiviraFacile",
        ourGoals: "Malengo Yetu",
        goal1Title: "Maktaba ya rejea",
        goal1Text: "Kuunda maktaba kamili kuhusu mila na desturi za Vira inayopatikana kwa wote",
        goal2Title: "Shule ya mafunzo",
        goal2Text: "Shule ya kudumu ya mafunzo ya lugha ya Vira yenye kozi zilizopangwa na za hatua kwa hatua",
        goal3Title: "Timu ya utafiti",
        goal3Text: "Kuunda timu ya utafiti iliyojitolea kwa utamaduni na lugha ya Vira",
        goal4Title: "Akili Bandia",
        goal4Text: "Kuendeleza AI iliyofunzwa kuhusu utamaduni wa Vira kusaidia ujifunzaji",
        goal5Title: "Mtandao wa kijamii",
        goal5Text: "Mtandao wa kijamii uliojitolea kwa Wavira kubadilishana na kufanya mazoezi ya lugha pamoja",
        goal6Title: "Katuni za kielimu",
        goal6Text: "Kuunda katuni za kielimu kusaidia watoto kuelewa asili yao",
        goal7Title: "Kamusi ya rejea",
        goal7Text: "Kujenga kamusi ya pamoja ya rejea ya maneno yote ya Vira",
        goal8Title: "Kituo cha habari",
        goal8Text: "Kuendeleza kituo cha habari kuhusu jiji la Uvira na eneo lake",
        projectProgress: "Maendeleo ya Mradi",
        globalProgress: "Maendeleo Jumla",
        completed: "imekamilika",
        beginningAdventure: "Tuko mwanzoni mwa safari kubwa! Tuunge mkono kuhifadhi utamaduni wetu.",
        featuresTitle: "Vipengele",
        featTranslator: "• 🔄 Mkalimani wa Kifaransa → Kivira na uchambuzi wa sarufi",
        featLessons: "• 📚 Masomo ya maingiliano kuhusu sarufi ya Kivira",
        featDictionary: "• 📖 Kamusi kamili ya lugha mbili",
        featCommunity: "• 🤝 Mfumo wa mchango wa jamii kwa kundi la maneno",
        featGoals: "• 🎯 Ufuatiliaji wa maendeleo na malengo binafsi",
        ourTeam: "Timu",
        projectPresenters: "Wawasilishaji wa mradi",
        teamDesc1: "Wenye shauku ya kuhifadhi lugha yao ya mama na desturi zao.",
        directorDev: "Mkurugenzi na Msanidi",
        thanksTitle: "Shukrani",
        thanksText: "Asante kwa wachangiaji wote wanaoboresha kundi la maneno la Kivira kila siku, kwa wazungumzaji asilia wanaothibitisha tafsiri, na kwa jamii ya Vira kwa msaada wao.",
        allRightsReserved: "© 2026 Kivirafacile. Haki zote zimehifadhiwa.",
        abroadPremiumQuestion: "Uko nje ya nchi (nje ya DRC) na unataka kupata premium?",
        abroadPremiumAnswer: "Tafadhali wasiliana na timu ya Kivirafacile kwa msaada.",
        joinWhatsappGroup: "Kuendelea kujifunza lugha ya Vira, tafadhali jiunge na kikundi hiki cha WhatsApp:",
        forYour: "Kwa ajili ya:",
        supportSuggestions: "msaada na mapendekezo",
        forAbroadSubscribers: "Kwa watu wanaotaka kujisajili wakiwa nje ya nchi",
        accessYourAccount: "Fikia akaunti yako",
        register: "Jisajili",
        email: "Barua pepe",
        password: "Nenosiri",
        forgotPassword: "Umesahau nenosiri?",
        loginCta: "Ingia",
        fullName: "Jina kamili",
        minCharacters: "Angalau herufi 6",
        inviteCodeLabel: "Msimbo wa mwaliko wa Msimamizi",
        createAccount: "Unda akaunti yangu",
        haveInviteCode: "Nina msimbo wa mwaliko wa msimamizi",
        enterEmailRecover: "Ingiza barua pepe yako kupata nenosiri lako",
        send: "Tuma",
        backToLogin: "← Rudi kuingia",
        reservedFeature: "Kipengele kilichohifadhiwa",
        createFreeAccount: "Unda akaunti bila malipo kufikia kipengele hiki",
        premiumBenefit2: "Upakuaji wa maudhui nje ya mtandao",
        premiumBenefit3: "Kamusi kamili yenye sauti",
        premiumBenefit4: "Mazoezi ya maingiliano yasiyo na kikomo",
        premiumBenefit5: "Cheti cha ustadi",
        premiumBenefit6: "Hakuna matangazo",
        premiumBenefit7: "Msaada wa kipaumbele",
        howToPay: "💳 Jinsi ya kulipa?",
        returnBtn: "← Rudi",
    },
    
    rw: {
        // Header (Kivira - À MODIFIER selon vos besoins)
        appName: "Kivirafacile",
        login: "Kuingila",
        
        // Menu hamburger
        myProfile: "Mulomboso gwani",
        settings: "Pambo",
        myProgress: "Musendelezo gwani",
        goals: "Bisika",
        help: "Gwaso",
        about: "Lumbu",
        contactUs: "Tubelengile",
        Sponsors: "Lukuta lwe bakungi",
        
        // Navigation bottom
        home: "Hambuga",
        library: "Bikilo",
        lesson: "somo",
        dictionary: "Kalolekezo",
        translation: "Bubalanduzi",
        
        // Page d'accueil
        welcome: "Sambesambe ku Kivirafacile!",
        welcomeText: "Iga kiviila mu bunovu kandi bushoga ne somo ze zihete kulikilana ne kibanju kyobe",
        yourProgress: "Sendelezo yobe",
        progressText: "Balika lwendo lobe lwe kuiga ka kanjuba. Lola somo zetu njoga!",
        lessonOfDay: "Somo ye kanjuba",
        
        // Leçons
        chooseCategory: "Tola njusho",
        lessons: "somo",
        back: "Shubilo",
        continue: "Gendelela",
        validate: "Yemela",
        complete: "Kuhwa somo",
        congratulations: "Mwakole!",
        lessonComplete: "Mwahwa somo bushoga!",
        
        // Étapes leçons
        listenPronunciation: "Tenena katetezi",
        chooseCorrectTranslation: "Tola bubalanduzi bushoga",
        arrangeWords: "Shubiza mateta bushoga",
        dragWordsHere: "Bika teto muno",
        pronounPhrase: "Teta gano mateta",
        pressToSpeak: "Huma lumbu utete",
        recording: "Malopozi...",
        speakNow: "Teta ine...",
        wellPronounced: "Wateta bushoga!",
        correctPronunciation: "Katetezi kashoga",
        tryAgain: "Shubila monimo",
        
        // Catégories leçons
        greetings: "Muvyuso",
        family: "Bulongo",
        food: "Malya",
        
        // Bibliothèque
        kiviralLibrary: "Bikilo yeKiviila",
        booksAvailable: "Bitabo bye biliheniho",
        novels: "ro",
        customsTraditions: "Imigenzo n'Umuco",
        musicsSongs: "Umuziki n'Indirimbo",
        proverbs: "Mikete",
        poetry: "Katetezi",
        rwandaHistory: "Histolia ye baviila",
        pages: "papulo",
        
        // Dictionnaire
        kiviraDictionary: "Kalolekezo ke kiviila",
        searchWord: "Shonda teto...",
        welcomeToDictionary: "Sambesambe ku kalolekezo ke kiviila",
        searchWordText: "Shonda teto mu kiviila aiza mu fulanse lumbu lwe kubona bubalanduzi bwage",
        examples: "Ngaivino:",
        translationIn: "Bubalanduzi mu fulanse",
        usageExamples: "Ngaivino ze kukolesha",
        noResultsFound: "Asi kandu kalongwa",
        wordNotFound: "Kasa longwa mu kalolekezo",
        
        // Traducteur
        translatorTitle: "Balanduzi Fulanse → Kiviila",
        translatorSubtitle: "Ino mubalanduzi ihete yubakwa, yanga luha muku shuvya",
        french: "Fulanse",
        enterText: "Salanga lusendo lobe mu fulanse",
        kivira: "Kiviila",
        translationLabel: "Bubalanduzi",
        clear: "Zima",
        translate: "Balandula",
        copy: "Kukopiye",
        copied: "Bakopiye",
        listen: "Tenena",
        commonExpression: "Mateto ze zitula menemene",
        wordByWord: "Bubalanduzi kanwa ku kanwa",
        seeAnalysis: "Lola butunga bwe mateta",
        warnings: "Kihengehenge",
        tryExamples: "Pima zino ngaivino",
        
        // Paramètres
        settingsTitle: "Pambo",
        languagePreference: "Ndeto ye uzisima",
        chooseLanguage: "Tola ndeto yobe ye maigiso",
        kiviraLanguage: "Kiviila",
        motherTongue: "Ndet ye mawe",
        frenchLanguage: "fulanse",
        englishLanguage: "Kingeleza",
        swahiliLanguage: "Kiswahili",
        notifications: "Salango",
        dailyReminders: "Kengelo ye ginsi kanjuba",
        audio: "Muzi",
        autoPlay: "Kusoma yongwa",
        save: "Lopola",
        saved: "Lopolwe",
         //Parametre
        Parameter: "Pambo",
        langue: "Ndeto ye apulikasio",
        Choose: "Tola ndeto ye uzisima",
        Notif: "Lusendo",
        Rappel: "Kengelo ye kanjuba",
        lecture: "Somo yoyongwa",
         Myprofile: "Kilomboso",
         close: "Vugala",
          sponsors: "Lukuta lwe",
        share: "parteger",

        //Payments
         passer: "ingila ku be mutanzi",
        //Download
        Download: "Teleshage kivirafacile",
        Install: "Bika ino apulikasio mu katelambila kobe mu bulumbu bushoga",
        Openapp: "Vugula Kivirafacile mu chrome",
        Touch: "Huma ku meni (3 alama)",
        Select: "Tola kutendeka ku sambilo ye katelambila",
        Confirm: "Silika muku huma kutendeka",
        Icon: "Ikone igaboneka ku sambilo ye katelambila kobe",
        OpenI: "Vugula Kivirafacile mu Safari",
        TouchI: "Huma ku buto ye kusenda",
        DoI: "Hinga ne uhume ku sambilo ye katelambila kobe",
        TouchII: "Huma kutendeka halugulu kunume",
        IconI: "Ikone igabineka ku sambilo ye katelambila kobe",
        NeedHelp: "Buswa bwe gwaso? Lola titoliele video yetu",
        Tuto: "Titoliele ihete lombosa vinagi kubika apulikasio mu katelambila kobe",
        Be: "Hita mu plemiume",
        Debloq: "Vugula bikolesho byoshe bye kuiga",
        Avan: "Bunyemu bwe plemiume",
        access: "kuyemelwa kukolesha masomo goshe",
        Warn: "Maliyo ge bwase naho ge gahete yemelwa. ginsi liyo izi lolwa bushoga",
        Verify: "Tuzilola ginsi kizanga maliyo goshe",
        All: "Bindu byoshe bye flode biga kangxa",
        Warning: "Kengulo ye bunyemu",
        After: "Kukulikila maliyo uga tusendela kizunguza kye liyo ku WhatsApp kuino mbalulo +243855841999",
        return: "", // à traduire en Kivira
        question: "", // à traduire en Kivira
        how: "", // à traduire en Kivira
        the_translator: "", // à traduire en Kivira
        Why: "", // à traduire en Kivira
        whyAnswer: "", // à traduire en Kivira
        pendingStatus: "", // à traduire en Kivira
        progressByDomain: "", // à traduire en Kivira
        noProgressYet: "", // à traduire en Kivira
        shareTitle: "", // à traduire en Kivira
        shareIntro: "", // à traduire en Kivira
        shareVia: "", // à traduire en Kivira
        copyLink: "", // à traduire en Kivira
        shareMessageTitle: "", // à traduire en Kivira
        shareMessageText: "", // à traduire en Kivira
        needMoreHelp: "", // à traduire en Kivira
        teamHereToHelp: "", // à traduire en Kivira
        clickToContact: "", // à traduire en Kivira
        howValidate: "", // à traduire en Kivira
        howValidateAnswer: "", // à traduire en Kivira
        offlineQuestion: "", // à traduire en Kivira
        offlineAnswer: "", // à traduire en Kivira
        premiumQuestion: "", // à traduire en Kivira
        premiumAnswer: "", // à traduire en Kivira
        ourMission: "", // à traduire en Kivira
        missionText: "", // à traduire en Kivira
        aboutPageTitle: "", // à traduire en Kivira
        ourGoals: "", // à traduire en Kivira
        goal1Title: "", // à traduire en Kivira
        goal1Text: "", // à traduire en Kivira
        goal2Title: "", // à traduire en Kivira
        goal2Text: "", // à traduire en Kivira
        goal3Title: "", // à traduire en Kivira
        goal3Text: "", // à traduire en Kivira
        goal4Title: "", // à traduire en Kivira
        goal4Text: "", // à traduire en Kivira
        goal5Title: "", // à traduire en Kivira
        goal5Text: "", // à traduire en Kivira
        goal6Title: "", // à traduire en Kivira
        goal6Text: "", // à traduire en Kivira
        goal7Title: "", // à traduire en Kivira
        goal7Text: "", // à traduire en Kivira
        goal8Title: "", // à traduire en Kivira
        goal8Text: "", // à traduire en Kivira
        projectProgress: "", // à traduire en Kivira
        globalProgress: "", // à traduire en Kivira
        completed: "", // à traduire en Kivira
        beginningAdventure: "", // à traduire en Kivira
        featuresTitle: "", // à traduire en Kivira
        featTranslator: "", // à traduire en Kivira
        featLessons: "", // à traduire en Kivira
        featDictionary: "", // à traduire en Kivira
        featCommunity: "", // à traduire en Kivira
        featGoals: "", // à traduire en Kivira
        ourTeam: "", // à traduire en Kivira
        projectPresenters: "", // à traduire en Kivira
        teamDesc1: "", // à traduire en Kivira
        directorDev: "", // à traduire en Kivira
        thanksTitle: "", // à traduire en Kivira
        thanksText: "", // à traduire en Kivira
        allRightsReserved: "", // à traduire en Kivira
        abroadPremiumQuestion: "", // à traduire en Kivira
        abroadPremiumAnswer: "", // à traduire en Kivira
        joinWhatsappGroup: "", // à traduire en Kivira
        forYour: "", // à traduire en Kivira
        supportSuggestions: "", // à traduire en Kivira
        forAbroadSubscribers: "", // à traduire en Kivira
        accessYourAccount: "", // à traduire en Kivira
        register: "", // à traduire en Kivira
        email: "", // à traduire en Kivira
        password: "", // à traduire en Kivira
        forgotPassword: "", // à traduire en Kivira
        loginCta: "", // à traduire en Kivira
        fullName: "", // à traduire en Kivira
        minCharacters: "", // à traduire en Kivira
        inviteCodeLabel: "", // à traduire en Kivira
        createAccount: "", // à traduire en Kivira
        haveInviteCode: "", // à traduire en Kivira
        enterEmailRecover: "", // à traduire en Kivira
        send: "", // à traduire en Kivira
        backToLogin: "", // à traduire en Kivira
        reservedFeature: "", // à traduire en Kivira
        createFreeAccount: "", // à traduire en Kivira
        premiumBenefit2: "", // à traduire en Kivira
        premiumBenefit3: "", // à traduire en Kivira
        premiumBenefit4: "", // à traduire en Kivira
        premiumBenefit5: "", // à traduire en Kivira
        premiumBenefit6: "", // à traduire en Kivira
        premiumBenefit7: "", // à traduire en Kivira
        howToPay: "", // à traduire en Kivira
        returnBtn: "", // à traduire en Kivira
    
        
    
     
    }
};

// Fonction pour obtenir la traduction
function t(key) {
    const lang = localStorage.getItem('appLanguage') || 'fr';
    return translations[lang][key] || translations['fr'][key] || key;
}

// Fonction pour mettre à jour toute l'interface
function updateInterfaceLanguage() {
    const lang = localStorage.getItem('appLanguage') || 'fr';
    document.documentElement.lang = lang;
    
    // Mettre à jour tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}
