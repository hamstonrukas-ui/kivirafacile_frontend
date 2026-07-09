// ============================================
// BIBLIOTHÈQUE FRONTEND - VERSION COMPLÈTE CORRIGÉE
// Structure à 3 niveaux : Categories → Titles → Articles
// Support de 4 langues : FR, EN, SW, KI
// ============================================

// ⭐ IMPORTANT : DÉFINIR L'URL DE L'API EN PREMIER


// APRÈS
const API_URL = 'http://kivirafacile.hstn.me/api/library_api.php';
// État global
let libraryInitialized = false;
let currentCategory = null;
let currentTitle = null;
let currentLanguage = 'fr';

// ============================================
// INITIALISATION
// ============================================

function initLibrary() {
    console.log('📚 Initialisation de la bibliothèque...');
    
    if (libraryInitialized) {
        console.log('✅ Déjà initialisé, rechargement catégories');
        showCategories();
        return;
    }
    
    libraryInitialized = true;
    
    // Charger les catégories
    showCategories();
}

// Exposer la fonction globalement
window.initLibrary = initLibrary;

// ============================================
// RÉCUPÉRER LA LANGUE DEPUIS VOTRE SYSTÈME
// ============================================
function getCurrentLanguage() {
    // Essayer de récupérer depuis localStorage (votre système de paramètres)
    const savedLang = localStorage.getItem('language') || 
                     localStorage.getItem('kivira_language') ||
                     localStorage.getItem('app_language') ||
                     localStorage.getItem('selectedLanguage');
    
    if (savedLang) {
        console.log('🌍 Langue détectée depuis localStorage:', savedLang);
        return savedLang;
    }
    
    // Essayer depuis l'attribut HTML
    const htmlLang = document.documentElement.lang;
    if (htmlLang && ['fr', 'en', 'sw', 'ki'].includes(htmlLang)) {
        console.log('🌍 Langue détectée depuis HTML:', htmlLang);
        return htmlLang;
    }
    
    // Langue par défaut
    console.log('🌍 Langue par défaut: fr');
    return 'fr';
}

// ============================================
// OBTENIR LE TEXTE DANS LA BONNE LANGUE
// ============================================
function getMultilingualText(obj, field) {
    const lang = getCurrentLanguage();
    const fieldName = `${field}_${lang}`;
    
    // Essayer avec la langue actuelle
    if (obj[fieldName]) {
        return obj[fieldName];
    }
    
    // Fallback sur français
    if (obj[`${field}_fr`]) {
        return obj[`${field}_fr`];
    }
    
    // Fallback sur le champ sans suffixe
    if (obj[field]) {
        return obj[field];
    }
    
    return 'N/A';
}

// ============================================
// ÉCOUTER LES CHANGEMENTS DE LANGUE
// ============================================
// Surveiller les changements dans localStorage
window.addEventListener('storage', function(e) {
    if (e.key && (e.key.includes('language') || e.key.includes('lang'))) {
        console.log('🔄 Changement de langue détecté:', e.newValue);
        reloadLibraryContent();
    }
});

// Surveiller les changements via événements personnalisés
window.addEventListener('languageChanged', function(e) {
    console.log('🔄 Événement languageChanged détecté');
    reloadLibraryContent();
});

// Surveiller les changements de l'attribut lang du HTML
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
            console.log('🔄 Attribut lang changé:', document.documentElement.lang);
            reloadLibraryContent();
        }
    });
});

observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
});


// ============================================
// AFFICHER LES CATÉGORIES
// ============================================

async function showCategories() {
    console.log('📚 Affichage des catégories...');
    
    try {
        // Récupérer la langue
        getCurrentLanguage();
        
        // Appeler l'API
        console.log('🔗 URL API:', API_URL + '?action=categories');
        const response = await fetch(API_URL + '?action=categories');
        
        // Vérifier le statut HTTP
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}: ${response.statusText}`);
        }
        
        // Lire la réponse comme texte d'abord
        const text = await response.text();
        console.log('📄 Réponse brute:', text.substring(0, 200) + '...');
        
        // Parser le JSON
        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            console.error('❌ Erreur de parsing JSON:', e);
            console.error('📄 Réponse complète:', text);
            throw new Error('La réponse n\'est pas du JSON valide. Vérifiez qu\'il n\'y a pas d\'erreurs PHP dans l\'API.');
        }
        
        console.log('📦 Données parsées:', data);
        
        // Vérifier que la réponse contient success
        if (!data.success) {
            throw new Error(data.error || 'L\'API a retourné success: false');
        }
        
        // Vérifier que categories existe
        if (!data.categories) {
            console.error('❌ Pas de champ "categories" dans:', data);
            throw new Error('La réponse ne contient pas de champ "categories"');
        }
        
        // Vérifier que categories est un tableau
        if (!Array.isArray(data.categories)) {
            console.error('❌ categories n\'est pas un tableau:', typeof data.categories);
            throw new Error(`categories n'est pas un tableau (type: ${typeof data.categories})`);
        }
        
        // Vérifier que le tableau n'est pas vide
        if (data.categories.length === 0) {
            throw new Error('Le tableau de catégories est vide. Exécutez : python3 scripts/create_library.py');
        }
        
        console.log(`✅ ${data.categories.length} catégories chargées`);
        
        // Afficher les catégories
        displayCategories(data.categories);
        
    } catch (error) {
        console.error('🔴 Erreur chargement catégories:', error);
        
        // Afficher un message d'erreur à l'utilisateur
        displayErrorMessage(error.message);
    }
}

// Exposer la fonction globalement
window.showCategories = showCategories;

// ============================================
// AFFICHER LES CATÉGORIES DANS L'UI
// ============================================

const CATEGORY_CONFIG = {
    1: { // Romans
        icon: '📚',
        color: 'category-romans',
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
        description: 'Découvrez des histoires captivantes'
    },
    2: { // Coutumes et Traditions
        icon: '🎭',
        color: 'category-coutumes',
        image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400',
        description: 'La richesse de nos traditions'
    },
    3: { // Musiques et Chansons
        icon: '🎵',
        color: 'category-musiques',
        image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
        description: 'Mélodies et rythmes traditionnels'
    },
    4: { // Proverbes
        icon: '💭',
        color: 'category-proverbes',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400',
        description: 'La sagesse de nos ancêtres'
    },
    5: { // École de Kivira
        icon: '🎓',
        color: 'category-ecole',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
        description: 'Apprenez la langue Kivira'
    },
    6: { // Histoire de Bavira
        icon: '🏛️',
        color: 'category-histoire',
        image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400',
        description: 'Notre patrimoine historique'
    },
    7: { // Actualités
        icon: '📰',
        color: 'category-actualites',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400',
        description: 'Les dernières nouvelles'
    }
};

// Fonction pour afficher les catégories (version moderne)
function displayCategories(categories) {
    console.log('🎨 Affichage moderne de', categories.length, 'catégories');
    
    const container = document.getElementById('library-categories') || 
                     document.getElementById('categories-container') ||
                     document.querySelector('.categories-container');
    
    if (!container) {
        console.error('❌ Container introuvable');
        return;
    }
    
    // Vérifications
    if (!Array.isArray(categories)) {
        console.error('❌ categories n\'est pas un tableau:', categories);
        displayErrorMessage('Les catégories ne sont pas au bon format');
        return;
    }
    
    if (categories.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📚</div>
                <h3>Aucune catégorie disponible</h3>
                <p>Exécutez : <code>python3 scripts/create_library.py</code></p>
            </div>
        `;
        return;
    }
    
    // Récupérer la langue actuelle
    const currentLang = getCurrentLanguage() || 'fr';
    console.log('🌍 Langue actuelle:', currentLang);
    
    // Générer le HTML avec le nouveau design
    const html = `
        <div class="library-header">
            <h1>📚 Bibliothèque KiviraFacile</h1>
            <p>Explorez notre collection en ${categories.length} catégories</p>
        </div>
        
        <div class="categories-grid">
            ${categories.map(category => {
                const config = CATEGORY_CONFIG[category.id] || {
                    icon: '📖',
                    color: 'category-romans',
                    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
                    description: 'Découvrez du contenu intéressant'
                };
                
                const name = category[`name_${currentLang}`] || category.name_fr || 'Sans nom';
                
                return `
                    <div class="category-card ${config.color}" 
                         onclick="showTitles(${category.id}, '${name.replace(/'/g, "\\'")}')"
                         style="background-image: url('${config.image}');">
                        
                        <div class="category-badge">
                            <span>Catégorie ${category.id}</span>
                        </div>
                        
                        <div class="category-content">
                            <div class="category-icon">${config.icon}</div>
                            <div class="category-title">${name}</div>
                            <div class="category-description">${config.description}</div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    container.innerHTML = html;
    
    console.log('✅ Catégories affichées avec le nouveau design');
}

// Alternative : Utiliser des images locales
function displayCategoriesWithLocalImages(categories) {
    console.log('🎨 Affichage avec images locales');
    
    const container = document.getElementById('library-categories') || 
                     document.getElementById('categories-container') ||
                     document.querySelector('.categories-container');
    
    if (!container) {
        console.error('❌ Container introuvable');
        return;
    }
    
    if (!Array.isArray(categories) || categories.length === 0) {
        displayCategories(categories); // Fallback
        return;
    }
    
    const currentLang = getCurrentLanguage() || 'fr';
    
    // Configuration avec images locales
    const LOCAL_IMAGES = {
        1: 'assets/images/categories/romans.jpg',
        2: 'assets/images/categories/coutumes.jpg',
        3: 'assets/images/categories/musiques.jpg',
        4: 'assets/images/categories/proverbes.jpg',
        5: 'assets/images/categories/ecole.jpg',
        6: 'assets/images/categories/histoire.jpg',
        7: 'assets/images/categories/actualites.jpg'
    };
    
    const html = `
        <div class="library-header">
            <h1>📚 Bibliothèque KiviraFacile</h1>
            <p>Explorez notre collection</p>
        </div>
        
        <div class="categories-grid">
            ${categories.map(category => {
                const config = CATEGORY_CONFIG[category.id] || CATEGORY_CONFIG[1];
                const name = category[`name_${currentLang}`] || category.name_fr || 'Sans nom';
                const localImage = LOCAL_IMAGES[category.id] || LOCAL_IMAGES[1];
                
                return `
                    <div class="category-card ${config.color}" 
                         onclick="showTitles(${category.id}, '${name.replace(/'/g, "\\'")}')"
                         style="background-image: url('${localImage}');">
                        
                        <div class="category-content">
                            <div class="category-icon">${config.icon}</div>
                            <div class="category-title">${name}</div>
                            <div class="category-description">${config.description}</div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    container.innerHTML = html;
    
    console.log('✅ Catégories affichées avec images locales');
}

// Alternative : Design simple sans images (plus rapide)
function displayCategoriesSimple(categories) {
    console.log('🎨 Affichage simple et rapide');
    
    const container = document.getElementById('library-categories') || 
                     document.getElementById('categories-container') ||
                     document.querySelector('.categories-container');
    
    if (!container) return;
    if (!Array.isArray(categories) || categories.length === 0) {
        displayCategories(categories);
        return;
    }
    
    const currentLang = getCurrentLanguage() || 'fr';
    
    const html = `
        <div class="library-header">
            <h1>📚 Bibliothèque</h1>
        </div>
        
        <div class="categories-grid">
            ${categories.map(category => {
                const config = CATEGORY_CONFIG[category.id] || CATEGORY_CONFIG[1];
                const name = category[`name_${currentLang}`] || category.name_fr || 'Sans nom';
                
                return `
                    <div class="category-card ${config.color}" 
                         onclick="showTitles(${category.id}, '${name.replace(/'/g, "\\'")}')"
                         style="background: ${getGradient(category.id)};">
                        
                        <div class="category-content">
                            <div class="category-icon">${config.icon}</div>
                            <div class="category-title">${name}</div>
                            <div class="category-description">${config.description}</div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    container.innerHTML = html;
}

// Fonction pour obtenir le gradient selon l'ID
function getGradient(id) {
    const gradients = {
        1: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        2: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        3: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        4: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        5: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        6: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        7: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    };
    
    return gradients[id] || gradients[1];
}

// Choisir automatiquement la meilleure méthode d'affichage
function displayCategoriesAuto(categories) {
    // Si pas de connexion internet, utiliser la version simple
    if (!navigator.onLine) {
        displayCategoriesSimple(categories);
        return;
    }
    
    // Sinon, utiliser la version avec images externes
    displayCategories(categories);
}


// ============================================
// AFFICHER UN MESSAGE D'ERREUR
// ============================================

function displayErrorMessage(errorMessage) {
    console.log('❌ Affichage message d\'erreur:', errorMessage);
    
    // Trouver le container
    const container = document.getElementById('library-categories') || 
                     document.getElementById('categories-container') ||
                     document.querySelector('.categories-container');
    
    if (!container) {
        console.error('❌ Container introuvable pour afficher l\'erreur');
        alert('Erreur: ' + errorMessage);
        return;
    }
    
    container.innerHTML = `
        <div style="
            background: #fee2e2;
            border-left: 4px solid #ef4444;
            padding: 20px;
            border-radius: 8px;
            margin: 20px;
        ">
            <h3 style="color: #991b1b; margin-bottom: 10px;">
                ❌ Impossible de charger les catégories
            </h3>
            <p style="color: #7f1d1d; margin-bottom: 15px;">
                ${errorMessage}
            </p>
            <div style="background: white; padding: 15px; border-radius: 6px; margin-top: 15px;">
                <p style="color: #666; margin-bottom: 10px; font-weight: bold;">
                    💡 Solutions possibles :
                </p>
                <ol style="color: #666; margin-left: 20px; line-height: 1.8;">
                    <li>Vérifier que le serveur est démarré</li>
                    <li>Vérifier le chemin de l'API : <code>${API_URL}</code></li>
                    <li>Ouvrir <code>diagnostic_api.html</code> pour tester l'API</li>
                    <li>Vérifier la console (F12) pour plus de détails</li>
                    <li>Vérifier que la base de données contient des catégories :
                        <br><code>SELECT * FROM categories;</code>
                    </li>
                </ol>
            </div>
            <button onclick="showCategories()" style="
                background: #667eea;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 6px;
                margin-top: 15px;
                cursor: pointer;
                font-weight: 600;
            ">
                🔄 Réessayer
            </button>
        </div>
    `;
}

// ============================================
// AFFICHER LES TITRES D'UNE CATÉGORIE
// ============================================

async function showTitles(categoryId, categoryName) {
    console.log(`📚 Affichage des titres de la catégorie ${categoryId} (${categoryName})`);
    
    try {
        const response = await fetch(API_URL + '?action=titles&category_id=' + categoryId);
        const text = await response.text();
        const data = JSON.parse(text);
        
        if (!data.success) {
            throw new Error(data.error || 'Erreur de chargement');
        }
        
        displayTitles(data.titles || [], categoryName);
        
    } catch (error) {
        console.error('Erreur chargement titres:', error);
        displayErrorMessage('Erreur de chargement des titres: ' + error.message);
    }
}

// Exposer la fonction globalement
window.showTitles = showTitles;

// ============================================
// AFFICHER LES TITRES DANS L'UI
// ============================================

function displayTitles(titles, categoryName) {
    const container = document.getElementById('library-categories') || 
                     document.getElementById('categories-container') ||
                     document.querySelector('.categories-container');
    
    if (!container) return;
    
    const lang = getCurrentLanguage();
    
    if (titles.length === 0) {
        container.innerHTML = `
            <div style="padding: 20px;">
                <button onclick="showCategories()" style="
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    margin-bottom: 20px;
                ">
                    ← Retour aux catégories
                </button>
                <h2>${categoryName}</h2>
                <p style="color: #666; margin-top: 20px;">Aucun contenu disponible dans cette catégorie.</p>
            </div>
        `;
        return;
    }
    
    const html = `
        <div style="padding: 20px;">
            <button onclick="showCategories()" style="
                background: #667eea;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
                margin-bottom: 20px;
            ">
                ← Retour aux catégories
            </button>
            <h2>${categoryName}</h2>
            <div style="margin-top: 20px;">
                ${titles.map(title => {
                    const titleName = title[`title_${lang}`] || title.title_fr || 'Sans titre';
                    return `
                        <div class="title-item" onclick="showArticles(${title.id}, '${titleName.replace(/'/g, "\\'")}')" style="
                            background: #f9fafb;
                            padding: 20px;
                            border-radius: 8px;
                            margin-bottom: 15px;
                            cursor: pointer;
                            border-left: 4px solid #667eea;
                        ">
                            <h3>${titleName}</h3>
                            <p style="color: #666;">Cliquez pour lire</p>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// ============================================
// AFFICHER LES ARTICLES D'UN TITRE
// ============================================

async function showArticles(titleId, titleName) {
    console.log(`📄 Affichage des articles du titre ${titleId} (${titleName})`);
    
    try {
        const response = await fetch(API_URL + '?action=articles&title_id=' + titleId);
        const text = await response.text();
        const data = JSON.parse(text);
        
        if (!data.success) {
            throw new Error(data.error || 'Erreur de chargement');
        }
        
        displayArticles(data.articles || [], titleName);
        
    } catch (error) {
        console.error('Erreur chargement articles:', error);
        displayErrorMessage('Erreur de chargement des articles: ' + error.message);
    }
}

// Exposer la fonction globalement
window.showArticles = showArticles;

// ============================================
// AFFICHER LES ARTICLES DANS L'UI
// ============================================

function displayArticles(articles, titleName) {
    const container = document.getElementById('library-categories') || 
                     document.getElementById('categories-container') ||
                     document.querySelector('.categories-container');
    
    if (!container) return;
    
    const lang = getCurrentLanguage();
    
    if (articles.length === 0) {
        container.innerHTML = `
            <div style="padding: 20px;">
                <button onclick="showCategories()" style="
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    cursor: pointer;
                    margin-bottom: 20px;
                ">
                    ← Retour aux catégories
                </button>
                <h2>${titleName}</h2>
                <p style="color: #666; margin-top: 20px;">Aucun article disponible.</p>
            </div>
        `;
        return;
    }
    
    const html = `
        <div style="padding: 20px;">
            <button onclick="showCategories()" style="
                background: #667eea;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 6px;
                cursor: pointer;
                margin-bottom: 20px;
            ">
                ← Retour aux catégories
            </button>
            <h2>${titleName}</h2>
            <div style="margin-top: 20px;">
                ${articles.map(article => {
                    const content = article[`content_${lang}`] || article.content_fr || 'Contenu non disponible';
                    return `
                        <div class="article-content" style="
                            background: white;
                            padding: 30px;
                            border-radius: 8px;
                            margin-bottom: 20px;
                            line-height: 1.8;
                        ">
                            ${content}
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// ============================================
// INITIALISATION AUTOMATIQUE
// ============================================

// Si on est sur la page bibliothèque, initialiser
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('📚 DOMContentLoaded - Vérification page bibliothèque');
        // L'initialisation sera faite par library_helper.js
    });
} else {
    console.log('📚 Page déjà chargée - Prêt pour initialisation');
}

console.log('✅ library_frontend.js chargé - API_URL:', API_URL);
