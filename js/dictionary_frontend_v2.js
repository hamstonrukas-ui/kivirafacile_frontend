// ==================== FRONTEND DICTIONNAIRE V2 ====================
// Fichier: js/dictionary_frontend_v2.js
// CORRECTION : Affichage exemples EN KIVIRA avec traductions

const DICTIONARY_API_URL = 'https://kivirafacile-api.onrender.com/api/dictionary/search';

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
        const response = await fetch(
    `${DICTIONARY_API_URL}?q=${encodeURIComponent(word)}&lang=${lang}`

        );
        
        const data = await response.json();
        
        if (data.error) {
            showDictionaryError(data.error);
            return;
        }
        
        console.log(`✅ ${data.count} résultat(s) trouvé(s)`);
        
        displayDictionaryResults(data.results);
        
    } catch (error) {
        console.error('❌ Erreur de recherche:', error);
        showDictionaryError('Erreur de connexion');
    }
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
    <strong>→</strong> ${word.french || word.english || word.swahili || '—'}
</p>
            
            ${word.type ? `<p class="word-type">${word.type}</p>` : ''}
            
            ${word.example_kivira ? `
    <div class="word-example">
        <p class="example-title">📝 Exemple :</p>
        <p class="example-kivira"><strong>${word.example_kivira}</strong></p>
        <p class="example-translation">${word.example_translation_fr || ''}</p>
    </div>
` : ''}
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
