// ==================== WRAPPER INTELLIGENT POUR TRADUCTEUR ====================
// Fichier: data/translator-wrapper.js
// Place ce fichier APRÈS vos fichiers de données existants

(function() {
    console.log('🔧 Wrapper Traducteur - Détection automatique des données...');
    
    // ========== DÉTECTION AUTOMATIQUE DES VARIABLES ==========
    
    let wordsDatabase = null;
    let expressionsDatabase = null;
    
    // Chercher la base de mots
    if (typeof kiviraWords !== 'undefined') {
        wordsDatabase = kiviraWords;
        console.log('✅ Base trouvée : kiviraWords');
    } else if (typeof words !== 'undefined') {
        wordsDatabase = words;
        console.log('✅ Base trouvée : words');
    } else if (typeof WORDS !== 'undefined') {
        wordsDatabase = WORDS;
        console.log('✅ Base trouvée : WORDS');
    } else if (typeof dictionaryWords !== 'undefined') {
        wordsDatabase = dictionaryWords;
        console.log('✅ Base trouvée : dictionaryWords');
    } else if (typeof vocabulaire !== 'undefined') {
        wordsDatabase = vocabulaire;
        console.log('✅ Base trouvée : vocabulaire');
    }
    
    // Chercher la base d'expressions
    if (typeof kiviraExpressions !== 'undefined') {
        expressionsDatabase = kiviraExpressions;
        console.log('✅ Base trouvée : kiviraExpressions');
    } else if (typeof expressions !== 'undefined') {
        expressionsDatabase = expressions;
        console.log('✅ Base trouvée : expressions');
    } else if (typeof EXPRESSIONS !== 'undefined') {
        expressionsDatabase = EXPRESSIONS;
        console.log('✅ Base trouvée : EXPRESSIONS');
    } else if (typeof phrases !== 'undefined') {
        expressionsDatabase = phrases;
        console.log('✅ Base trouvée : phrases');
    }
    
    // Vérifier ce qu'on a trouvé
    if (!wordsDatabase) {
        console.warn('⚠️ Aucune base de mots trouvée');
        console.warn('💡 Variables testées : kiviraWords, words, WORDS, dictionaryWords, vocabulaire');
        console.warn('💡 Créer une base minimale...');
        wordsDatabase = createMinimalDatabase();
    }
    
    if (!expressionsDatabase) {
        console.warn('⚠️ Aucune base d\'expressions trouvée');
        console.warn('💡 Variables testées : kiviraExpressions, expressions, EXPRESSIONS, phrases');
        expressionsDatabase = {};
    }
    
    console.log(`📊 Mots disponibles : ${Object.keys(wordsDatabase).length}`);
    console.log(`📊 Expressions disponibles : ${Object.keys(expressionsDatabase).length}`);
    
    // ========== CRÉER BASE MINIMALE SI NÉCESSAIRE ==========
    
    function createMinimalDatabase() {
        return {
            // Salutations essentielles
            "bonjour": "mwaramutse",
            "bonsoir": "mwiriwe",
            "merci": "murakoze",
            "oui": "ego",
            "non": "oya",
            
            // Mots de base
            "pain": "umugati",
            "eau": "amazi",
            "enfant": "umwana",
            "maison": "inzu",
            "école": "ishuri",
            
            // Verbes courants
            "manger": "kurya",
            "boire": "kunywa",
            "aller": "kuja",
            "venir": "kuza",
            "voir": "kubona"
        };
    }
    
    // ========== FONCTION DE TRADUCTION ==========
    
    window.translateToKivira = function(text) {
        if (!text || text.trim().length === 0) {
            return {
                translation: "",
                method: "none",
                analysis: [],
                warnings: [],
                confidence: 0
            };
        }
        
        const input = text.toLowerCase().trim();
        
        // ÉTAPE 1 : Chercher dans les expressions
        if (expressionsDatabase && expressionsDatabase[input]) {
            return {
                translation: expressionsDatabase[input],
                method: "expression",
                analysis: [],
                warnings: [],
                confidence: 1.0
            };
        }
        
        // ÉTAPE 2 : Traduction mot-à-mot
        const words = input.split(/\s+/);
        const translations = [];
        const analysis = [];
        const warnings = [];
        let knownCount = 0;
        
        for (const word of words) {
            const cleaned = word.replace(/[.,!?;:']/g, '');
            
            // Chercher le mot
            let translation = null;
            
            if (wordsDatabase) {
                // Si c'est un objet avec structure complexe
                if (typeof wordsDatabase[cleaned] === 'object' && wordsDatabase[cleaned] !== null) {
                    // Essayer différentes propriétés
                    translation = wordsDatabase[cleaned].kivira 
                               || wordsDatabase[cleaned].translation 
                               || wordsDatabase[cleaned].value
                               || wordsDatabase[cleaned].word;
                } else {
                    // Si c'est une simple string
                    translation = wordsDatabase[cleaned];
                }
            }
            
            if (translation) {
                translations.push(translation);
                analysis.push({
                    original: word,
                    translation: translation,
                    type: 'known',
                    grammarInfo: {}
                });
                knownCount++;
            } else {
                translations.push(`[${word}]`);
                analysis.push({
                    original: word,
                    translation: null,
                    type: 'unknown',
                    grammarInfo: {}
                });
                warnings.push(`Mot inconnu : "${word}"`);
            }
        }
        
        const confidence = words.length > 0 ? knownCount / words.length : 0;
        
        return {
            translation: translations.join(' '),
            method: "word-by-word",
            analysis: analysis,
            warnings: warnings,
            confidence: confidence
        };
    };
    
    // ========== FONCTIONS UTILITAIRES ==========
    
    window.addKiviraWord = function(french, kivira) {
        if (!wordsDatabase) wordsDatabase = {};
        wordsDatabase[french.toLowerCase()] = kivira;
        console.log(`✅ Mot ajouté : ${french} → ${kivira}`);
    };
    
    window.addKiviraExpression = function(french, kivira) {
        if (!expressionsDatabase) expressionsDatabase = {};
        expressionsDatabase[french.toLowerCase()] = kivira;
        console.log(`✅ Expression ajoutée : ${french} → ${kivira}`);
    };
    
    window.getTranslatorStats = function() {
        return {
            words: wordsDatabase ? Object.keys(wordsDatabase).length : 0,
            expressions: expressionsDatabase ? Object.keys(expressionsDatabase).length : 0,
            wordsSource: wordsDatabase ? 'loaded' : 'none',
            expressionsSource: expressionsDatabase ? 'loaded' : 'none'
        };
    };
    
    // ========== TEST AUTOMATIQUE ==========
    
    console.log('🧪 Test automatique...');
    try {
        const testResult = window.translateToKivira('bonjour');
        if (testResult && testResult.translation) {
            console.log(`✅ Test réussi : "bonjour" → "${testResult.translation}"`);
        } else {
            console.warn('⚠️ Test échoué : résultat vide');
        }
    } catch (e) {
        console.error('❌ Erreur test:', e);
    }
    
    console.log('✅ Wrapper Traducteur prêt !');
})();
