// ═══════════════════════════════════════════════════════════════
// SYSTÈME DE GUARDS - Protection contre les mélanges
// Ajoutez ce code AU DÉBUT de votre index.html (après lessonData)
// ═══════════════════════════════════════════════════════════════

// ✅ VARIABLES GLOBALES PROTÉGÉES
let currentCategory = null;      // Catégorie actuelle
let currentLesson = null;         // Leçon actuelle
let currentStep = 0;              // Étape actuelle

// ✅ FONCTION DE VÉRIFICATION : Est-ce qu'on est dans la bonne catégorie ?
function verifyCategoryContext() {
    if (!currentCategory) {
        console.warn('⚠️  ATTENTION : currentCategory n\'est pas défini');
        return false;
    }
    
    if (!lessonData[currentCategory]) {
        console.error(`❌ ERREUR : Catégorie "${currentCategory}" introuvable dans lessonData`);
        return false;
    }
    
    return true;
}

// ✅ FONCTION DE VÉRIFICATION : Est-ce que la leçon appartient à la catégorie ?
function verifyLessonBelongsToCategory(lesson, category) {
    if (!lesson || !category) {
        console.error('❌ Leçon ou catégorie invalide');
        return false;
    }
    
    // Vérifier si la leçon a une catégorie stockée
    if (lesson.category && lesson.category !== category) {
        console.error(`❌ MISMATCH ! Leçon de "${lesson.category}" affichée dans "${category}"`);
        return false;
    }
    
    // Vérifier si la leçon existe dans cette catégorie
    if (!lessonData[category]) {
        console.error(`❌ Catégorie "${category}" inexistante`);
        return false;
    }
    
    const found = lessonData[category].some(l => 
        l.id === lesson.id || l.title === lesson.title
    );
    
    if (!found) {
        console.error(`❌ Leçon "${lesson.title}" n'existe pas dans "${category}"`);
        return false;
    }
    
    return true;
}

// ✅ FONCTION : Reset complet de l'état
function resetAppState() {
    console.log('🔄 Reset complet de l\'état de l\'app');
    
    currentCategory = null;
    currentLesson = null;
    currentStep = 0;
    
    // Cacher tous les écrans
    const screens = ['lessonList', 'lessonView'];
    screens.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    
    console.log('✅ État réinitialisé');
}

// ✅ GUARD POUR setupStep2 : Vérifier qu'on a bien une leçon
function guardSetupStep2() {
    if (!currentLesson) {
        console.error('❌ setupStep2 appelé sans currentLesson !');
        alert('Erreur : Aucune leçon chargée');
        resetAppState();
        return false;
    }
    
    if (!currentCategory) {
        console.error('❌ setupStep2 appelé sans currentCategory !');
        alert('Erreur : Aucune catégorie sélectionnée');
        resetAppState();
        return false;
    }
    
    if (!verifyLessonBelongsToCategory(currentLesson, currentCategory)) {
        console.error('❌ La leçon n\'appartient pas à la catégorie actuelle !');
        alert('Erreur : Incohérence de données détectée');
        resetAppState();
        return false;
    }
    
    return true;
}

// ✅ MODIFIER setupStep2 pour utiliser le guard
// Ajoutez ceci AU DÉBUT de votre fonction setupStep2 :
/*
function setupStep2() {
    // ✅ GUARD
    if (!guardSetupStep2()) {
        return;
    }
    
    // ... reste du code setupStep2 ...
}
*/

// ═══════════════════════════════════════════════════════════════
// FONCTION : Vérifier l'intégrité de lessonData
// ═══════════════════════════════════════════════════════════════

function verifyLessonDataIntegrity() {
    console.log('🔍 Vérification de l\'intégrité de lessonData');
    
    if (typeof lessonData === 'undefined') {
        console.error('❌ lessonData n\'existe pas !');
        return false;
    }
    
    const categories = Object.keys(lessonData);
    console.log(`📊 ${categories.length} catégories trouvées:`, categories);
    
    let allOk = true;
    
    categories.forEach(cat => {
        const lessons = lessonData[cat];
        
        // Vérifier que c'est un tableau
        if (!Array.isArray(lessons)) {
            console.error(`❌ "${cat}" n'est pas un tableau !`);
            allOk = false;
            return;
        }
        
        // Vérifier chaque leçon
        lessons.forEach((lesson, idx) => {
            if (!lesson || typeof lesson !== 'object') {
                console.error(`❌ Leçon ${idx} de "${cat}" invalide`);
                allOk = false;
                return;
            }
            
            // Vérifier les propriétés requises
            const required = ['title', 'phrase', 'options', 'correctOption'];
            required.forEach(prop => {
                if (!(prop in lesson)) {
                    console.error(`❌ "${cat}" leçon ${idx} manque "${prop}"`);
                    allOk = false;
                }
            });
            
            // Vérifier que options est un tableau
            if (!Array.isArray(lesson.options)) {
                console.error(`❌ "${cat}" leçon ${idx}: options n'est pas un tableau`);
                allOk = false;
            }
        });
        
        console.log(`  ✓ ${cat}: ${lessons.length} leçons`);
    });
    
    if (allOk) {
        console.log('✅ Intégrité vérifiée');
    } else {
        console.error('❌ Problèmes d\'intégrité détectés');
    }
    
    return allOk;
}

// ✅ APPELER LA VÉRIFICATION AU CHARGEMENT
// Ajoutez ceci après le chargement de lessonData :
/*
document.addEventListener('DOMContentLoaded', function() {
    verifyLessonDataIntegrity();
});
*/

// ═══════════════════════════════════════════════════════════════
// FONCTION : Ajouter une nouvelle catégorie EN TOUTE SÉCURITÉ
// ═══════════════════════════════════════════════════════════════

function addCategorySafely(categoryKey, categoryData) {
    console.log(`➕ Ajout de la catégorie "${categoryKey}"`);
    
    // Vérifier que lessonData existe
    if (typeof lessonData === 'undefined') {
        console.error('❌ lessonData n\'existe pas !');
        return false;
    }
    
    // Vérifier que la catégorie n'existe pas déjà
    if (lessonData[categoryKey]) {
        console.warn(`⚠️  La catégorie "${categoryKey}" existe déjà !`);
        console.log('Voulez-vous la remplacer ?');
        return false;
    }
    
    // Vérifier que categoryData est un tableau
    if (!Array.isArray(categoryData)) {
        console.error('❌ Les données doivent être un tableau');
        return false;
    }
    
    // Vérifier chaque leçon
    for (let i = 0; i < categoryData.length; i++) {
        const lesson = categoryData[i];
        
        if (!lesson.title || !lesson.phrase || !lesson.options || lesson.correctOption === undefined) {
            console.error(`❌ Leçon ${i} incomplète`);
            return false;
        }
    }
    
    // ✅ AJOUTER LA CATÉGORIE
    lessonData[categoryKey] = categoryData;
    console.log(`✅ Catégorie "${categoryKey}" ajoutée avec ${categoryData.length} leçons`);
    
    return true;
}

// ═══════════════════════════════════════════════════════════════
// EXEMPLE D'UTILISATION
// ═══════════════════════════════════════════════════════════════

/*
// Pour ajouter une nouvelle catégorie :
const nouvelleCategorie = [
    {
        id: 1,
        title: "Leçon 1",
        phrase: "Phrase en Kivira",
        image: "...",
        audio: null,
        options: [
            {fr: "Option 1", en: "Option 1 EN", sw: "Option 1 SW"},
            {fr: "Option 2", en: "Option 2 EN", sw: "Option 2 SW"},
            {fr: "Option 3", en: "Option 3 EN", sw: "Option 3 SW"},
            {fr: "Option 4", en: "Option 4 EN", sw: "Option 4 SW"}
        ],
        correctOption: 0,
        words: ["Mot1", "Mot2"]
    }
];

if (addCategorySafely('ma_nouvelle_categorie', nouvelleCategorie)) {
    console.log('✅ Catégorie ajoutée avec succès !');
} else {
    console.error('❌ Erreur lors de l\'ajout');
}
*/
