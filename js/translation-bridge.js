// ==================== PONT INTELLIGENT - INTERFACE ↔ LOGIQUE DE TRADUCTION ====================
// Fichier: js/translation-bridge.js
// Ce script capture l'input utilisateur et le passe à votre logique existante

(function() {
    'use strict';
    
    console.log('🌉 Pont de traduction - Chargement...');
    
    // ========== CONFIGURATION ==========
    
    const CONFIG = {
        // IDs des éléments HTML
        inputId: 'translatorInput',
        buttonId: 'translateBtn',
        outputId: 'translatorOutput',
        resultId: 'translationResult',
        methodId: 'translationMethod',
        analysisId: 'analysisContent',
        warningsId: 'warningsList',
        warningSectionId: 'warningsSection',
        
        // Nom de la fonction de traduction (sera détecté automatiquement)
        translateFunction: null
    };
    
    // ========== DÉTECTION DE LA FONCTION DE TRADUCTION ==========
    
    function detectTranslationFunction() {
        console.log('🔍 Détection de la fonction de traduction...');
        
        const possibleFunctions = [
            'translateToKivira',
            'translate',
            'traduire',
            'translateText',
            'performTranslation',
            'doTranslation'
        ];
        
        for (const funcName of possibleFunctions) {
            if (typeof window[funcName] === 'function') {
                CONFIG.translateFunction = funcName;
                console.log(`✅ Fonction trouvée : ${funcName}`);
                return true;
            }
        }
        
        console.error('❌ Aucune fonction de traduction trouvée !');
        console.log('💡 Fonctions testées :', possibleFunctions);
        return false;
    }
    
    // ========== CAPTURE DE L'INPUT UTILISATEUR ==========
    
    function captureUserInput() {
        const input = document.getElementById(CONFIG.inputId);
        if (!input) {
            console.error(`❌ Élément #${CONFIG.inputId} introuvable`);
            return null;
        }
        
        const text = input.value.trim();
        console.log('📝 Texte capté :', text);
        return text;
    }
    
    // ========== APPEL DE LA LOGIQUE DE TRADUCTION ==========
    
    function callTranslationLogic(text) {
        if (!CONFIG.translateFunction) {
            console.error('❌ Fonction de traduction non définie');
            return null;
        }
        
        try {
            console.log(`🔄 Appel de ${CONFIG.translateFunction}("${text}")`);
            const result = window[CONFIG.translateFunction](text);
            console.log('✅ Résultat reçu :', result);
            return result;
        } catch (error) {
            console.error('❌ Erreur lors de la traduction :', error);
            return {
                error: true,
                message: error.message,
                translation: '',
                method: 'error',
                analysis: [],
                warnings: [`Erreur: ${error.message}`]
            };
        }
    }
    
    // ========== AFFICHAGE DU RÉSULTAT ==========
    
    function displayResult(result) {
        if (!result) {
            console.warn('⚠️ Pas de résultat à afficher');
            return;
        }
        
        console.log('📊 Affichage du résultat...');
        
        // Afficher la section output
        const outputSection = document.getElementById(CONFIG.outputId);
        if (outputSection) {
            outputSection.style.display = 'block';
        }
        
        // Afficher la traduction
        const resultElement = document.getElementById(CONFIG.resultId);
        if (resultElement) {
            resultElement.textContent = result.translation || '(vide)';
            console.log('✅ Traduction affichée');
        }
        
        // Afficher la méthode utilisée
        const methodElement = document.getElementById(CONFIG.methodId);
        if (methodElement) {
            const methodText = result.method === 'expression' 
                ? '✨ Expression courante' 
                : result.method === 'word-by-word'
                ? '🔧 Traduction mot-à-mot'
                : '📝 Traduction';
            
            methodElement.textContent = methodText;
            methodElement.className = `translation-method ${result.method || 'default'}`;
            console.log('✅ Méthode affichée :', methodText);
        }
        
        // Afficher l'analyse grammaticale
        if (result.analysis && result.analysis.length > 0) {
            displayAnalysis(result.analysis);
        }
        
        // Afficher les avertissements
        if (result.warnings && result.warnings.length > 0) {
            displayWarnings(result.warnings);
        } else {
            hideWarnings();
        }
        
        console.log('✅ Résultat complètement affiché');
    }
    
    // ========== AFFICHAGE DE L'ANALYSE GRAMMATICALE ==========
    
    function displayAnalysis(analysis) {
        const analysisElement = document.getElementById(CONFIG.analysisId);
        if (!analysisElement) return;
        
        const typeLabels = {
            'pronoun-subject': 'Pronom sujet',
            'pronoun-possessive': 'Pronom possessif',
            'verb': 'Verbe',
            'noun': 'Nom',
            'adjective': 'Adjectif',
            'adverb': 'Adverbe',
            'preposition': 'Préposition',
            'conjunction': 'Conjonction',
            'number': 'Nombre',
            'known': 'Connu',
            'unknown': 'Inconnu'
        };
        
        analysisElement.innerHTML = analysis.map(word => {
            const grammarInfo = word.grammarInfo && Object.keys(word.grammarInfo).length > 0
                ? `<div style="font-size: 12px; color: #999; margin-top: 4px;">
                    ${JSON.stringify(word.grammarInfo, null, 2).replace(/[{}"]/g, '').trim()}
                   </div>`
                : '';
            
            return `
                <div class="analysis-word">
                    <div class="analysis-word-original">${word.original}</div>
                    <div class="analysis-word-translation">→ ${word.translation || '?'}</div>
                    <span class="analysis-word-type">${typeLabels[word.type] || word.type}</span>
                    ${grammarInfo}
                </div>
            `;
        }).join('');
        
        console.log('✅ Analyse grammaticale affichée');
    }
    
    // ========== AFFICHAGE DES AVERTISSEMENTS ==========
    
    function displayWarnings(warnings) {
        const warningsSection = document.getElementById(CONFIG.warningSectionId);
        const warningsList = document.getElementById(CONFIG.warningsId);
        
        if (warningsSection) {
            warningsSection.style.display = 'block';
        }
        
        if (warningsList) {
            warningsList.innerHTML = warnings.map(w => `<li>${w}</li>`).join('');
            console.log('✅ Avertissements affichés');
        }
    }
    
    function hideWarnings() {
        const warningsSection = document.getElementById(CONFIG.warningSectionId);
        if (warningsSection) {
            warningsSection.style.display = 'none';
        }
    }
    
    // ========== WORKFLOW COMPLET ==========
    
    function performTranslation() {
        console.log('═══════════════════════════════════════');
        console.log('🚀 DÉBUT DU WORKFLOW DE TRADUCTION');
        console.log('═══════════════════════════════════════');
        
        // ÉTAPE 1 : Capturer l'input utilisateur
        const text = captureUserInput();
        if (!text) {
            console.warn('⚠️ Texte vide, arrêt du workflow');
            return;
        }
        
        // ÉTAPE 2 : Vérifier que la fonction de traduction existe
        if (!CONFIG.translateFunction) {
            console.error('❌ Fonction de traduction non détectée');
            alert('Erreur : La fonction de traduction n\'est pas disponible. Vérifiez que translator.js est chargé.');
            return;
        }
        
        // ÉTAPE 3 : Appeler la logique de traduction
        const result = callTranslationLogic(text);
        
        // ÉTAPE 4 : Afficher le résultat
        if (result) {
            displayResult(result);
        } else {
            console.error('❌ Aucun résultat reçu');
            alert('Erreur : La traduction n\'a pas retourné de résultat.');
        }
        
        console.log('═══════════════════════════════════════');
        console.log('✅ FIN DU WORKFLOW DE TRADUCTION');
        console.log('═══════════════════════════════════════');
    }
    
    // ========== CONNEXION AU BOUTON ==========
    
    function connectToButton() {
        const button = document.getElementById(CONFIG.buttonId);
        if (!button) {
            console.error(`❌ Bouton #${CONFIG.buttonId} introuvable`);
            return false;
        }
        
        // Remplacer tous les anciens event listeners
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Ajouter le nouveau listener
        newButton.addEventListener('click', performTranslation);
        
        console.log('✅ Bouton de traduction connecté');
        return true;
    }
    
    // ========== DIAGNOSTIC ==========
    
    function runDiagnostic() {
        console.log('🔍 DIAGNOSTIC DU SYSTÈME DE TRADUCTION');
        console.log('─────────────────────────────────────');
        
        // Vérifier les éléments HTML
        const elements = {
            'Input': CONFIG.inputId,
            'Bouton': CONFIG.buttonId,
            'Output': CONFIG.outputId,
            'Résultat': CONFIG.resultId
        };
        
        let allElementsFound = true;
        for (const [name, id] of Object.entries(elements)) {
            const element = document.getElementById(id);
            if (element) {
                console.log(`✅ ${name} (#${id}) : trouvé`);
            } else {
                console.error(`❌ ${name} (#${id}) : MANQUANT`);
                allElementsFound = false;
            }
        }
        
        // Vérifier la fonction de traduction
        const functionFound = detectTranslationFunction();
        
        // Résumé
        console.log('─────────────────────────────────────');
        if (allElementsFound && functionFound) {
            console.log('✅ DIAGNOSTIC : Tout est prêt !');
        } else {
            console.error('❌ DIAGNOSTIC : Problèmes détectés');
            if (!allElementsFound) {
                console.error('   → Certains éléments HTML manquent');
            }
            if (!functionFound) {
                console.error('   → Fonction de traduction non trouvée');
            }
        }
        console.log('─────────────────────────────────────');
        
        return allElementsFound && functionFound;
    }
    
    // ========== INITIALISATION ==========
    
    function initialize() {
        console.log('🎬 Initialisation du pont de traduction...');
        
        // Attendre que le DOM soit prêt
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initialize);
            return;
        }
        
        // Petit délai pour que tous les scripts soient chargés
        setTimeout(() => {
            // Lancer le diagnostic
            const success = runDiagnostic();
            
            if (success) {
                // Connecter au bouton
                connectToButton();
                console.log('✅ Pont de traduction initialisé avec succès !');
            } else {
                console.error('❌ Échec de l\'initialisation du pont de traduction');
            }
        }, 500);
    }
    
    // ========== EXPOSITION GLOBALE ==========
    
    // Exposer pour tests manuels
    window.translationBridge = {
        performTranslation,
        runDiagnostic,
        getConfig: () => CONFIG
    };
    
    // Démarrer
    initialize();
    
    console.log('🌉 Pont de traduction chargé');
    
})();
