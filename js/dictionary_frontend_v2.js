// ==================== FRONTEND DICTIONNAIRE V2 (CORRIGÉ) ====================
// Fichier: js/dictionary_frontend_v2.js
// CORRECTION : connexion au vrai backend Render (au lieu de api/dictionary.php inexistant)

// ⚠️ Adapte cette URL si ton backend Render a une autre adresse
const DICTIONARY_API_BASE = 'https://kivirafacile-api.onrender.com';
const DICTIONARY_API_URL = `${DICTIONARY_API_BASE}/api/dictionary/search`;

// Détecter la langue de l'utilisateur
function getUserLanguage() {
    return localStorage.getItem('appLanguage') || 'fr';
}

// Rechercher dans le dictionnaire
async function searchDictionary(word) {
    const lang = getUserLanguage();

    if (!word || word.trim().length === 0) {
        clearDictionaryResults();
        return;
    }

    console.log(`🔍 Recherche: "${word}" (langue: ${lang})`);

    try {
        // Le backend attend "q", pas "word" ni "action"
        const response = await fetch(
            `${DICTIONARY_API_URL}?q=${encodeURIComponent(word)}&limit=20`
        );

        if (!response.ok) {
            throw new Error(`Erreur serveur (${response.status})`);
        }

        const data = await response.json();

        if (!data.success) {
            showDictionaryError(data.error || 'Erreur inconnue');
            return;
        }

        console.log(`✅ ${data.count} résultat(s) trouvé(s)`);

        // Le backend renvoie french/english/swahili et example_* à plat :
        // on les transforme dans le format attendu par l'affichage.
        const formatted = data.results.map(row => normalizeDictionaryEntry(row, lang));

        displayDictionaryResults(formatted);

    } catch (error) {
        console.error('❌ Erreur de recherche:', error);
        showDictionaryError('Erreur de connexion');
    }
}

// Transforme une ligne SQL brute en objet attendu par l'affichage
function normalizeDictionaryEntry(row, lang) {
    const translationByLang = {
        fr: row.french,
        en: row.english,
        sw: row.swahili
    };

    const exampleTranslationByLang = {
        fr: row.example_translation_fr,
        en: row.example_translation_en,
        sw: row.example_translation_sw
    };

    const translation = translationByLang[lang] || row.french || row.english || row.swahili || '';
    const exampleTranslation = exampleTranslationByLang[lang] || row.example_translation_fr || '';

    return {
        kivira: row.kivira,
        category: row.category || '',
        type: row.type || '',
        translation,
        example: row.example_kivira ? {
            kivira: row.example_kivira,
            translation: exampleTranslation
        } : null
    };
}

// Afficher les résultats
function displayDictionaryResults(results) {
    const container = document.getElementById('dictionaryResults');

    if (!container) {
        console.error('Container dictionaryResults introuvable');
        return;
    }

    if (results.length === 0) {
        container.innerHTML = '<p class="no-results">Aucun résultat trouvé</p>';
        return;
    }

    container.innerHTML = results.map(word => `
        <div class="word-result">
            <div class="word-header">
                <h3 class="word-kivira">${word.kivira}</h3>
                <span class="word-category">${word.category}</span>
            </div>

            <p class="word-translation">
                <strong>→</strong> ${word.translation}
            </p>

            ${word.type ? `<p class="word-type">${word.type}</p>` : ''}

            ${word.example && word.example.kivira ? `
                <div class="word-example">
                    <p class="example-title">📝 Exemple :</p>
                    <p class="example-kivira"><strong>${word.example.kivira}</strong></p>
                    <p class="example-translation">${word.example.translation}</p>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Effacer les résultats
function clearDictionaryResults() {
    const container = document.getElementById('dictionaryResults');
    if (container) {
        container.innerHTML = '';
    }
}

// Afficher une erreur
function showDictionaryError(message) {
    const container = document.getElementById('dictionaryResults');
    if (container) {
        container.innerHTML = `
            <div class="error-message">
                <p>❌ ${message}</p>
            </div>
        `;
    }
}

// Initialisation
function initDictionary() {
    console.log('🚀 Initialisation dictionnaire');

    const searchInput = document.getElementById('dictionarySearch');

    if (!searchInput) {
        console.error('Input dictionarySearch introuvable');
        return;
    }

    // Recherche en temps réel avec délai
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);

        const query = e.target.value.trim();

        if (query.length === 0) {
            clearDictionaryResults();
            return;
        }

        // Attendre 500ms après la dernière frappe
        searchTimeout = setTimeout(() => {
            searchDictionary(query);
        }, 500);
    });

    console.log('✅ Dictionnaire initialisé');
}

// Recharger quand la langue change
function onDictionaryLanguageChange() {
    console.log('🔄 Langue changée, rechargement dictionnaire');

    const searchInput = document.getElementById('dictionarySearch');
    if (searchInput && searchInput.value.trim().length > 0) {
        searchDictionary(searchInput.value.trim());
    }
}

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initDictionary();
});
