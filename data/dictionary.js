// Base de données du dictionnaire Kivira
const dictionaryData = {
    fr: {
        // Kivira -> Français
        'munume': {
            word: 'munume',
            translation: 'homme',
            pronunciation: 'mou-nou-mé',
            type: 'nom',
            examples: [
                { original: 'Munume w\'icyubahiro', translation: 'Un homme respectable' },
                { original: 'Munume mwiza', translation: 'Un bon homme' }
            ]
        },
        'mukazana': {
            word: 'mukazana',
            translation: 'femme',
            pronunciation: 'mou-ka-za-na',
            type: 'nom',
            examples: [
                { original: 'Mukazana w\'ubwenge', translation: 'Une femme intelligente' },
                { original: 'Mukazana mwiza', translation: 'Une belle femme' }
            ]
        },
        // Français -> Kivira
        'homme': {
            word: 'homme',
            translation: 'munume',
            pronunciation: 'mou-nou-mé',
            type: 'nom',
            examples: [
                { original: 'Un homme respectable', translation: 'Munume w\'icyubahiro' },
                { original: 'Un bon homme', translation: 'Munume mwiza' }
            ]
        },
        'femme': {
            word: 'femme',
            translation: 'mukazana',
            pronunciation: 'mou-ka-za-na',
            type: 'nom',
            examples: [
                { original: 'Une femme intelligente', translation: 'Mukazana w\'ubwenge' },
                { original: 'Une belle femme', translation: 'Mukazana mwiza' }
            ]
        }
    },
    en: {
        // English -> Kivira
        'man': {
            word: 'man',
            translation: 'munume',
            pronunciation: 'mou-nou-mé',
            type: 'noun',
            examples: [
                { original: 'A respectable man', translation: 'Munume w\'icyubahiro' },
                { original: 'A good man', translation: 'Munume mwiza' }
            ]
        },
        'woman': {
            word: 'woman',
            translation: 'mukazana',
            pronunciation: 'mou-ka-za-na',
            type: 'noun',
            examples: [
                { original: 'An intelligent woman', translation: 'Mukazana w\'ubwenge' },
                { original: 'A beautiful woman', translation: 'Mukazana mwiza' }
            ]
        },
        // Kivira -> English
        'munume': {
            word: 'munume',
            translation: 'man',
            pronunciation: 'mou-nou-mé',
            type: 'noun',
            examples: [
                { original: 'Munume w\'icyubahiro', translation: 'A respectable man' },
                { original: 'Munume mwiza', translation: 'A good man' }
            ]
        },
        'mukazana': {
            word: 'mukazana',
            translation: 'woman',
            pronunciation: 'mou-ka-za-na',
            type: 'noun',
            examples: [
                { original: 'Mukazana w\'ubwenge', translation: 'An intelligent woman' },
                { original: 'Mukazana mwiza', translation: 'A beautiful woman' }
            ]
        }
    },
    sw: {
        // Swahili -> Kivira
        'mwanaume': {
            word: 'mwanaume',
            translation: 'munume',
            pronunciation: 'mou-nou-mé',
            type: 'nomino',
            examples: [
                { original: 'Mwanaume mwenye heshima', translation: 'Munume w\'icyubahiro' },
                { original: 'Mwanaume mzuri', translation: 'Munume mwiza' }
            ]
        },
        'mwanamke': {
            word: 'mwanamke',
            translation: 'mukazana',
            pronunciation: 'mou-ka-za-na',
            type: 'nomino',
            examples: [
                { original: 'Mwanamke mwenye akili', translation: 'Mukazana w\'ubwenge' },
                { original: 'Mwanamke mzuri', translation: 'Mukazana mwiza' }
            ]
        },
        // Kivira -> Swahili
        'munume': {
            word: 'munume',
            translation: 'mwanaume',
            pronunciation: 'mou-nou-mé',
            type: 'nomino',
            examples: [
                { original: 'Munume w\'icyubahiro', translation: 'Mwanaume mwenye heshima' },
                { original: 'Munume mwiza', translation: 'Mwanaume mzuri' }
            ]
        },
        'mukazana': {
            word: 'mukazana',
            translation: 'mwanamke',
            pronunciation: 'mou-ka-za-na',
            type: 'nomino',
            examples: [
                { original: 'Mukazana w\'ubwenge', translation: 'Mwanamke mwenye akili' },
                { original: 'Mukazana mwiza', translation: 'Mwanamke mzuri' }
            ]
        }
    }
};
