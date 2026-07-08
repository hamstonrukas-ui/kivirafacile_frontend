// ==================== MOTEUR DE TRADUCTION KIVIRA ====================
// Dépend de : grammar.js, words.js, expressions.js,
//             demonstratives.js, possessives.js, relatives.js
// Dépend de : grammar.js, words.js, expressions.js,
//             demonstratives.js, possessives.js

class TranslationEngine {
    constructor() {
        this.result = { original:"", translation:"", method:"", analysis:[], warnings:[] };
    }

    translate(text) {
        this.result = { original:text, translation:"", method:"", analysis:[], warnings:[] };

        // ÉTAPE 1 : Expressions figées
        const expr = findExpression(text);
        if (expr) {
            this.result.translation = expr;
            this.result.method = "expression";
            return this.result;
        }

        // ÉTAPE 2 : Traduction mot-à-mot
        this.result.method = "word-by-word";
        return this.translateWordByWord(text);
    }

    translateWordByWord(text) {
        const detected  = this.detector(text);
        const analyzed  = this.analyzer(detected);
        this.result.translation = this.assembler(analyzed);
        this.result.analysis    = analyzed;
        return this.result;
    }

    // ============================================================
    // DÉTECTEUR : nettoie le texte et identifie la structure
    // ============================================================
    detector(text) {
        const detection = {
            original: text,
            tokens: [],
            structure: {
                isNegative:  false,
                isQuestion:  false,
                tense:       "present",
                person:      "3sg",
                verbInfo:         null,
                pronominal:       null,
                auxPerson:        null,
                auxTense:         null,
                pendingAdjective: null
            }
        };

        let cleaned = text.toLowerCase().trim();

        // Normaliser apostrophes
        cleaned = cleaned.replace(/['']/g, "'");

        // Question
        if (cleaned.endsWith('?')) {
            detection.structure.isQuestion = true;
            cleaned = cleaned.replace(/\?/g, '').trim();
        }

        // Élision j' → je
        if (/\bj'/.test(cleaned)) {
            cleaned = cleaned.replace(/\bj'/g, 'je ');
        }
        if (/\bc'/.test(cleaned)) {
            cleaned = cleaned.replace(/\bc'/g, 'ce ');
        }

        // Négation
        if (/\bne\b|\bn'|\bpas\b/.test(cleaned)) {
            detection.structure.isNegative = true;
            cleaned = cleaned
                .replace(/\bne\b/g, '')
                .replace(/\bn'/g, '')
                .replace(/\bpas\b/g, '')
                .trim();
        }

        // -------------------------------------------------------
        // DÉTECTION VERBES PRONOMINAUX
        // Analyse SUJET + OBJET sur le texte déjà normalisé
        // -------------------------------------------------------
        {
            const t = cleaned;
            const hasJe   = /\bje\b/.test(t);
            const hasTu   = /\btu\b/.test(t);
            const hasIl   = /\bil\b|\belle\b/.test(t);
            const hasNous = /\bnous\b/.test(t);
            const hasVous = /\bvous\b/.test(t);
            const hasIls  = /\bils\b|\belles\b/.test(t);
            const hasMe   = /\bme\b|\bm'/.test(t);
            const hasTe   = /\bte\b|\bt'/.test(t);
            const hasSe   = /\bse\b|\bs'/.test(t);
            const hasLui  = /\blui\b/.test(t);
            const hasLeur = /\bleur\b/.test(t);

            // SE → toujours réflexif
            if (hasSe) {
                detection.structure.pronominal = { type: "reflexive" };
                cleaned = cleaned.replace(/\bse\b|s'/g, '').trim();
            }
            // JE ME → réflexif 1sg
            else if (hasJe && hasMe) {
                detection.structure.pronominal = { type: "reflexive" };
                cleaned = cleaned.replace(/\bme\b|m'/g, '').trim();
            }
            // TU TE → réflexif 2sg
            else if (hasTu && hasTe) {
                detection.structure.pronominal = { type: "reflexive" };
                cleaned = cleaned.replace(/\bte\b|t'/g, '').trim();
            }
            // NOUS NOUS → réflexif 1pl
            else if (hasNous && /\bnous\b.*\bnous\b/.test(t)) {
                detection.structure.pronominal = { type: "reflexive" };
                cleaned = cleaned.replace(/\bnous\b/, '__SUBJ__').replace(/\bnous\b/, '').replace('__SUBJ__', 'nous').trim();
            }
            // VOUS VOUS → réflexif 2pl
            else if (hasVous && /\bvous\b.*\bvous\b/.test(t)) {
                detection.structure.pronominal = { type: "reflexive" };
                cleaned = cleaned.replace(/\bvous\b/, '__SUBJ__').replace(/\bvous\b/, '').replace('__SUBJ__', 'vous').trim();
            }
            // ILS/ELLES SE → réflexif 3pl (déjà géré par hasSe)

            // === COMBINAISONS SUJET + OBJET DIFFÉRENT ===
            // JE + TE → objet 2sg
            else if (hasJe && hasTe) {
                detection.structure.pronominal = { type: "other", object: "2sg" };
                cleaned = cleaned.replace(/\bte\b|t'/g, '').trim();
            }
            // JE + LUI → objet 3sg
            else if (hasJe && hasLui) {
                detection.structure.pronominal = { type: "other", object: "3sg" };
                cleaned = cleaned.replace(/\blui\b/g, '').trim();
            }
            // JE + NOUS → objet 1pl
            else if (hasJe && hasNous) {
                detection.structure.pronominal = { type: "other", object: "1pl" };
                cleaned = cleaned.replace(/\bnous\b/g, '').trim();
            }
            // JE + VOUS → objet 2pl
            else if (hasJe && hasVous) {
                detection.structure.pronominal = { type: "other", object: "2pl" };
                cleaned = cleaned.replace(/\bvous\b/g, '').trim();
            }
            // JE + LEUR → objet 3pl
            else if (hasJe && hasLeur) {
                detection.structure.pronominal = { type: "other", object: "3pl" };
                cleaned = cleaned.replace(/\bleur\b/g, '').trim();
            }
            // TU + ME → objet 1sg
            else if (hasTu && hasMe) {
                detection.structure.pronominal = { type: "other", object: "1sg" };
                cleaned = cleaned.replace(/\bme\b|m'/g, '').trim();
            }
            // TU + LUI → objet 3sg
            else if (hasTu && hasLui) {
                detection.structure.pronominal = { type: "other", object: "3sg" };
                cleaned = cleaned.replace(/\blui\b/g, '').trim();
            }
            // TU + NOUS → objet 1pl
            else if (hasTu && hasNous) {
                detection.structure.pronominal = { type: "other", object: "1pl" };
                cleaned = cleaned.replace(/\bnous\b/g, '').trim();
            }
            // TU + LEUR → objet 3pl
            else if (hasTu && hasLeur) {
                detection.structure.pronominal = { type: "other", object: "3pl" };
                cleaned = cleaned.replace(/\bleur\b/g, '').trim();
            }
            // IL + ME → objet 1sg
            else if (hasIl && hasMe) {
                detection.structure.pronominal = { type: "other", object: "1sg" };
                cleaned = cleaned.replace(/\bme\b|m'/g, '').trim();
            }
            // IL + TE → objet 2sg
            else if (hasIl && hasTe) {
                detection.structure.pronominal = { type: "other", object: "2sg" };
                cleaned = cleaned.replace(/\bte\b|t'/g, '').trim();
            }
            // IL + NOUS → objet 1pl
            else if (hasIl && hasNous) {
                detection.structure.pronominal = { type: "other", object: "1pl" };
                cleaned = cleaned.replace(/\bnous\b/g, '').trim();
            }
            // IL + VOUS → objet 2pl
            else if (hasIl && hasVous) {
                detection.structure.pronominal = { type: "other", object: "2pl" };
                cleaned = cleaned.replace(/\bvous\b/g, '').trim();
            }
            // IL + LEUR → objet 3pl
            else if (hasIl && hasLeur) {
                detection.structure.pronominal = { type: "other", object: "3pl" };
                cleaned = cleaned.replace(/\bleur\b/g, '').trim();
            }
            // NOUS + LUI → objet 3sg
            else if (hasNous && hasLui) {
                detection.structure.pronominal = { type: "other", object: "3sg" };
                cleaned = cleaned.replace(/\blui\b/g, '').trim();
            }
            // NOUS + LEUR → objet 3pl
            else if (hasNous && hasLeur) {
                detection.structure.pronominal = { type: "other", object: "3pl" };
                cleaned = cleaned.replace(/\bleur\b/g, '').trim();
            }
            // VOUS + ME → objet 1sg
            else if (hasVous && hasMe) {
                detection.structure.pronominal = { type: "other", object: "1sg" };
                cleaned = cleaned.replace(/\bme\b|m'/g, '').trim();
            }
            // VOUS + LUI → objet 3sg
            else if (hasVous && hasLui) {
                detection.structure.pronominal = { type: "other", object: "3sg" };
                cleaned = cleaned.replace(/\blui\b/g, '').trim();
            }
            // VOUS + NOUS → objet 1pl
            else if (hasVous && hasNous) {
                detection.structure.pronominal = { type: "other", object: "1pl" };
                cleaned = cleaned.replace(/\bnous\b/g, '').trim();
            }
            // VOUS + LEUR → objet 3pl
            else if (hasVous && hasLeur) {
                detection.structure.pronominal = { type: "other", object: "3pl" };
                cleaned = cleaned.replace(/\bleur\b/g, '').trim();
            }
            // ILS + ME → objet 1sg
            else if (hasIls && hasMe) {
                detection.structure.pronominal = { type: "other", object: "1sg" };
                cleaned = cleaned.replace(/\bme\b|m'/g, '').trim();
            }
            // ILS + TE → objet 2sg
            else if (hasIls && hasTe) {
                detection.structure.pronominal = { type: "other", object: "2sg" };
                cleaned = cleaned.replace(/\bte\b|t'/g, '').trim();
            }
            // ILS + LUI → objet 3sg
            else if (hasIls && hasLui) {
                detection.structure.pronominal = { type: "other", object: "3sg" };
                cleaned = cleaned.replace(/\blui\b/g, '').trim();
            }
            // ILS + NOUS → objet 1pl
            else if (hasIls && hasNous) {
                detection.structure.pronominal = { type: "other", object: "1pl" };
                cleaned = cleaned.replace(/\bnous\b/g, '').trim();
            }
            // ILS + VOUS → objet 2pl
            else if (hasIls && hasVous) {
                detection.structure.pronominal = { type: "other", object: "2pl" };
                cleaned = cleaned.replace(/\bvous\b/g, '').trim();
            }
            // ILS + LEUR → objet 3pl
            else if (hasIls && hasLeur) {
                detection.structure.pronominal = { type: "other", object: "3pl" };
                cleaned = cleaned.replace(/\bleur\b/g, '').trim();
            }
        }
        // Supprimer articles (y compris avec apostrophe)
        // ATTENTION : "un" et "une" ne sont supprimés QUE s'ils ne précèdent pas un nom
        // (sinon ils sont des nombres → "un homme" = "munume umwe")
        cleaned = cleaned
            .replace(/l'/g, '')
            .replace(/d'/g, '')
            .replace(/\ble\b|\bla\b|\bles\b/g, '')
            .replace(/\bdes\b|\bdu\b/g, '')
            .trim();

        // "un/une" : supprimer seulement si seul (pas suivi d'un mot)
        // Si suivi d'un mot → garder comme nombre
        cleaned = cleaned.replace(/\b(un|une)\b(?!\s+\w)/g, '').trim();

        // Tokeniser
        detection.tokens = cleaned.split(/\s+/).filter(t => t.length > 0);

        // Détecter le verbe → temps et personne
        for (let token of detection.tokens) {
            const verbInfo = this.detectVerb(token);
            if (verbInfo) {
                detection.structure.verbInfo = verbInfo;
                detection.structure.person   = verbInfo.person || "3sg";
                detection.structure.tense    = verbInfo.tense  || "present";
                break;
            }
        }

        return detection;
    }

    // ============================================================
    // DÉTECTION DU VERBE FRANÇAIS → temps + personne + infinitif
    // ============================================================
    detectVerb(word) {
        const forms = {
            // Formes avec apostrophe (j'ai, j'aurais, etc.)
            // Gérées par le détecteur qui remplace j' par "je "
            // Mais on ajoute aussi les formes directes au cas où

            // ===== ÊTRE =====
            "suis":    { infinitive:"être",  person:"1sg", tense:"present",     aux:true },
            "es":      { infinitive:"être",  person:"2sg", tense:"present",     aux:true },
            "est":     { infinitive:"être",  person:"3sg", tense:"present",     aux:true },
            "sommes":  { infinitive:"être",  person:"1pl", tense:"present",     aux:true },
            "êtes":    { infinitive:"être",  person:"2pl", tense:"present",     aux:true },
            "sont":    { infinitive:"être",  person:"3pl", tense:"present",     aux:true },
            "étais":   { infinitive:"être",  person:"1sg", tense:"passe",       aux:true },
            "était":   { infinitive:"être",  person:"3sg", tense:"passe",       aux:true },
            "étions":  { infinitive:"être",  person:"1pl", tense:"passe",       aux:true },
            "étiez":   { infinitive:"être",  person:"2pl", tense:"passe",       aux:true },
            "étaient": { infinitive:"être",  person:"3pl", tense:"passe",       aux:true },
            "serai":   { infinitive:"être",  person:"1sg", tense:"futur",       aux:true },
            "seras":   { infinitive:"être",  person:"2sg", tense:"futur",       aux:true },
            "sera":    { infinitive:"être",  person:"3sg", tense:"futur",       aux:true },
            "serons":  { infinitive:"être",  person:"1pl", tense:"futur",       aux:true },
            "serez":   { infinitive:"être",  person:"2pl", tense:"futur",       aux:true },
            "seront":  { infinitive:"être",  person:"3pl", tense:"futur",       aux:true },
            "vais être":{ infinitive:"être", person:"1sg", tense:"futurProche", aux:true },

            // ===== AVOIR =====
            "ai":      { infinitive:"avoir", person:"1sg", tense:"present",     aux:true },
            "as":      { infinitive:"avoir", person:"2sg", tense:"present",     aux:true },
            "a":       { infinitive:"avoir", person:"3sg", tense:"present",     aux:true },
            "avons":   { infinitive:"avoir", person:"1pl", tense:"present",     aux:true },
            "avez":    { infinitive:"avoir", person:"2pl", tense:"present",     aux:true },
            "ont":     { infinitive:"avoir", person:"3pl", tense:"present",     aux:true },
            "avais":   { infinitive:"avoir", person:"1sg", tense:"passe",       aux:true },
            "avait":   { infinitive:"avoir", person:"3sg", tense:"passe",       aux:true },
            "avions":  { infinitive:"avoir", person:"1pl", tense:"passe",       aux:true },
            "avaient": { infinitive:"avoir", person:"3pl", tense:"passe",       aux:true },
            "aurai":   { infinitive:"avoir", person:"1sg", tense:"futur",       aux:true },
            "auras":   { infinitive:"avoir", person:"2sg", tense:"futur",       aux:true },
            "aura":    { infinitive:"avoir", person:"3sg", tense:"futur",       aux:true },
            "aurons":  { infinitive:"avoir", person:"1pl", tense:"futur",       aux:true },
            "auront":  { infinitive:"avoir", person:"3pl", tense:"futur",       aux:true },

            // Formes contractées avoir
            "j'ai":     { infinitive:"avoir", person:"1sg", tense:"present", aux:true },
            "j'avais":  { infinitive:"avoir", person:"1sg", tense:"passe",   aux:true },
            "j'aurai":  { infinitive:"avoir", person:"1sg", tense:"futur",   aux:true },
            "j'aurais": { infinitive:"avoir", person:"1sg", tense:"futur",   aux:true },
            // Formes contractées être
            "j'étais":  { infinitive:"être",  person:"1sg", tense:"passe",   aux:true },
            "j'serai":  { infinitive:"être",  person:"1sg", tense:"futur",   aux:true },

            // ===== ALLER =====
            "vais":    { infinitive:"aller", person:"1sg", tense:"present" },
            "vas":     { infinitive:"aller", person:"2sg", tense:"present" },
            "va":      { infinitive:"aller", person:"3sg", tense:"present" },
            "allons":  { infinitive:"aller", person:"1pl", tense:"present" },
            "allez":   { infinitive:"aller", person:"2pl", tense:"present" },
            "vont":    { infinitive:"aller", person:"3pl", tense:"present" },
            "allais":  { infinitive:"aller", person:"1sg", tense:"passe" },
            "allait":  { infinitive:"aller", person:"3sg", tense:"passe" },
            "irai":    { infinitive:"aller", person:"1sg", tense:"futur" },
            "iras":    { infinitive:"aller", person:"2sg", tense:"futur" },
            "ira":     { infinitive:"aller", person:"3sg", tense:"futur" },
            "irons":   { infinitive:"aller", person:"1pl", tense:"futur" },
            "iront":   { infinitive:"aller", person:"3pl", tense:"futur" },

            // ===== VENIR =====
            "viens":   { infinitive:"venir", person:"1sg", tense:"present" },
            "vient":   { infinitive:"venir", person:"3sg", tense:"present" },
            "venons":  { infinitive:"venir", person:"1pl", tense:"present" },
            "venez":   { infinitive:"venir", person:"2pl", tense:"present" },
            "viennent":{ infinitive:"venir", person:"3pl", tense:"present" },
            "venais":  { infinitive:"venir", person:"1sg", tense:"passe" },
            "venait":  { infinitive:"venir", person:"3sg", tense:"passe" },
            "viendrai":{ infinitive:"venir", person:"1sg", tense:"futur" },
            "viendra": { infinitive:"venir", person:"3sg", tense:"futur" },

            // ===== MANGER =====
            "mange":    { infinitive:"manger", person:"1sg", tense:"present" },
            "manges":   { infinitive:"manger", person:"2sg", tense:"present" },
            "mangeons": { infinitive:"manger", person:"1pl", tense:"present" },
            "mangez":   { infinitive:"manger", person:"2pl", tense:"present" },
            "mangent":  { infinitive:"manger", person:"3pl", tense:"present" },
            "mangeais": { infinitive:"manger", person:"1sg", tense:"passe" },
            "mangeait": { infinitive:"manger", person:"3sg", tense:"passe" },
            "mangerai": { infinitive:"manger", person:"1sg", tense:"futur" },
            "mangera":  { infinitive:"manger", person:"3sg", tense:"futur" },

            // ===== PARLER =====
            "parle":    { infinitive:"parler", person:"1sg", tense:"present" },
            "parles":   { infinitive:"parler", person:"2sg", tense:"present" },
            "parlons":  { infinitive:"parler", person:"1pl", tense:"present" },
            "parlez":   { infinitive:"parler", person:"2pl", tense:"present" },
            "parlent":  { infinitive:"parler", person:"3pl", tense:"present" },
            "parlais":  { infinitive:"parler", person:"1sg", tense:"passe" },
            "parlait":  { infinitive:"parler", person:"3sg", tense:"passe" },
            "parlerai": { infinitive:"parler", person:"1sg", tense:"futur" },
            "parlera":  { infinitive:"parler", person:"3sg", tense:"futur" },

            // ===== VOULOIR =====
            "veux":    { infinitive:"vouloir", person:"1sg", tense:"present" },
            "veut":    { infinitive:"vouloir", person:"3sg", tense:"present" },
            "voulons": { infinitive:"vouloir", person:"1pl", tense:"present" },
            "voulez":  { infinitive:"vouloir", person:"2pl", tense:"present" },
            "veulent": { infinitive:"vouloir", person:"3pl", tense:"present" },
            "voulais": { infinitive:"vouloir", person:"1sg", tense:"passe" },
            "voulait": { infinitive:"vouloir", person:"3sg", tense:"passe" },
            "voudrai": { infinitive:"vouloir", person:"1sg", tense:"futur" },
            "voudra":  { infinitive:"vouloir", person:"3sg", tense:"futur" },

            // ===== POUVOIR =====
            "peux":    { infinitive:"pouvoir", person:"1sg", tense:"present" },
            "peut":    { infinitive:"pouvoir", person:"3sg", tense:"present" },
            "pouvons": { infinitive:"pouvoir", person:"1pl", tense:"present" },
            "pouvez":  { infinitive:"pouvoir", person:"2pl", tense:"present" },
            "peuvent": { infinitive:"pouvoir", person:"3pl", tense:"present" },
            "pouvais": { infinitive:"pouvoir", person:"1sg", tense:"passe" },
            "pouvait": { infinitive:"pouvoir", person:"3sg", tense:"passe" },
            "pourrai": { infinitive:"pouvoir", person:"1sg", tense:"futur" },
            "pourra":  { infinitive:"pouvoir", person:"3sg", tense:"futur" },

            // ===== BOIRE =====
            "bois":    { infinitive:"boire", person:"1sg", tense:"present" },
            "boit":    { infinitive:"boire", person:"3sg", tense:"present" },
            "buvons":  { infinitive:"boire", person:"1pl", tense:"present" },
            "buvez":   { infinitive:"boire", person:"2pl", tense:"present" },
            "boivent": { infinitive:"boire", person:"3pl", tense:"present" },
            "buvais":  { infinitive:"boire", person:"1sg", tense:"passe" },
            "buvait":  { infinitive:"boire", person:"3sg", tense:"passe" },
            "boirai":  { infinitive:"boire", person:"1sg", tense:"futur" },
            "boira":   { infinitive:"boire", person:"3sg", tense:"futur" },

            // ===== FAIRE =====
            "fais":    { infinitive:"faire", person:"1sg", tense:"present" },
            "fait":    { infinitive:"faire", person:"3sg", tense:"present" },
            "faisons": { infinitive:"faire", person:"1pl", tense:"present" },
            "faites":  { infinitive:"faire", person:"2pl", tense:"present" },
            "font":    { infinitive:"faire", person:"3pl", tense:"present" },
            "faisais": { infinitive:"faire", person:"1sg", tense:"passe" },
            "faisait": { infinitive:"faire", person:"3sg", tense:"passe" },
            "ferai":   { infinitive:"faire", person:"1sg", tense:"futur" },
            "fera":    { infinitive:"faire", person:"3sg", tense:"futur" },

            // ===== VOIR =====
            "vois":    { infinitive:"voir", person:"1sg", tense:"present" },
            "voit":    { infinitive:"voir", person:"3sg", tense:"present" },
            "voyons":  { infinitive:"voir", person:"1pl", tense:"present" },
            "voyez":   { infinitive:"voir", person:"2pl", tense:"present" },
            "voient":  { infinitive:"voir", person:"3pl", tense:"present" },
            "voyais":  { infinitive:"voir", person:"1sg", tense:"passe" },
            "voyait":  { infinitive:"voir", person:"3sg", tense:"passe" },
            "verrai":  { infinitive:"voir", person:"1sg", tense:"futur" },
            "verra":   { infinitive:"voir", person:"3sg", tense:"futur" },

            // ===== AIMER =====
            "aime":    { infinitive:"aimer", person:"1sg", tense:"present" },
            "aimes":   { infinitive:"aimer", person:"2sg", tense:"present" },
            "aimons":  { infinitive:"aimer", person:"1pl", tense:"present" },
            "aimez":   { infinitive:"aimer", person:"2pl", tense:"present" },
            "aiment":  { infinitive:"aimer", person:"3pl", tense:"present" },
            "aimais":  { infinitive:"aimer", person:"1sg", tense:"passe" },
            "aimait":  { infinitive:"aimer", person:"3sg", tense:"passe" },
            "aimerai": { infinitive:"aimer", person:"1sg", tense:"futur" },
            "aimera":  { infinitive:"aimer", person:"3sg", tense:"futur" },

            // ===== VOIR - imparfait + futur complets =====
            "voyais":   { infinitive:"voir", person:"1sg", tense:"passe" },
            "voyait":   { infinitive:"voir", person:"3sg", tense:"passe" },
            "voyions":  { infinitive:"voir", person:"1pl", tense:"passe" },
            "voyiez":   { infinitive:"voir", person:"2pl", tense:"passe" },
            "voyaient": { infinitive:"voir", person:"3pl", tense:"passe" },
            "verrai":   { infinitive:"voir", person:"1sg", tense:"futur" },
            "verras":   { infinitive:"voir", person:"2sg", tense:"futur" },
            "verra":    { infinitive:"voir", person:"3sg", tense:"futur" },
            "verrons":  { infinitive:"voir", person:"1pl", tense:"futur" },
            "verrez":   { infinitive:"voir", person:"2pl", tense:"futur" },
            "verront":  { infinitive:"voir", person:"3pl", tense:"futur" },

            // ===== PARLER - imparfait + futur complets =====
            "parlais":   { infinitive:"parler", person:"1sg", tense:"passe" },
            "parlait":   { infinitive:"parler", person:"3sg", tense:"passe" },
            "parlions":  { infinitive:"parler", person:"1pl", tense:"passe" },
            "parliez":   { infinitive:"parler", person:"2pl", tense:"passe" },
            "parlaient": { infinitive:"parler", person:"3pl", tense:"passe" },
            "parlerai":  { infinitive:"parler", person:"1sg", tense:"futur" },
            "parleras":  { infinitive:"parler", person:"2sg", tense:"futur" },
            "parlera":   { infinitive:"parler", person:"3sg", tense:"futur" },
            "parlerons": { infinitive:"parler", person:"1pl", tense:"futur" },
            "parlerez":  { infinitive:"parler", person:"2pl", tense:"futur" },
            "parleront": { infinitive:"parler", person:"3pl", tense:"futur" },

            // ===== MANGER - imparfait + futur complets =====
            "mangeais":   { infinitive:"manger", person:"1sg", tense:"passe" },
            "mangeait":   { infinitive:"manger", person:"3sg", tense:"passe" },
            "mangions":   { infinitive:"manger", person:"1pl", tense:"passe" },
            "mangiez":    { infinitive:"manger", person:"2pl", tense:"passe" },
            "mangeaient": { infinitive:"manger", person:"3pl", tense:"passe" },
            "mangerai":   { infinitive:"manger", person:"1sg", tense:"futur" },
            "mangeras":   { infinitive:"manger", person:"2sg", tense:"futur" },
            "mangera":    { infinitive:"manger", person:"3sg", tense:"futur" },
            "mangerons":  { infinitive:"manger", person:"1pl", tense:"futur" },
            "mangerez":   { infinitive:"manger", person:"2pl", tense:"futur" },
            "mangeront":  { infinitive:"manger", person:"3pl", tense:"futur" },

            // ===== VOULOIR - imparfait + futur complets =====
            "voulais":   { infinitive:"vouloir", person:"1sg", tense:"passe" },
            "voulait":   { infinitive:"vouloir", person:"3sg", tense:"passe" },
            "voulions":  { infinitive:"vouloir", person:"1pl", tense:"passe" },
            "vouliez":   { infinitive:"vouloir", person:"2pl", tense:"passe" },
            "voulaient": { infinitive:"vouloir", person:"3pl", tense:"passe" },
            "voudrai":   { infinitive:"vouloir", person:"1sg", tense:"futur" },
            "voudras":   { infinitive:"vouloir", person:"2sg", tense:"futur" },
            "voudra":    { infinitive:"vouloir", person:"3sg", tense:"futur" },
            "voudrons":  { infinitive:"vouloir", person:"1pl", tense:"futur" },
            "voudrez":   { infinitive:"vouloir", person:"2pl", tense:"futur" },
            "voudront":  { infinitive:"vouloir", person:"3pl", tense:"futur" },

            // ===== POUVOIR - imparfait + futur complets =====
            "pouvais":   { infinitive:"pouvoir", person:"1sg", tense:"passe" },
            "pouvait":   { infinitive:"pouvoir", person:"3sg", tense:"passe" },
            "pouvions":  { infinitive:"pouvoir", person:"1pl", tense:"passe" },
            "pouviez":   { infinitive:"pouvoir", person:"2pl", tense:"passe" },
            "pouvaient": { infinitive:"pouvoir", person:"3pl", tense:"passe" },
            "pourrai":   { infinitive:"pouvoir", person:"1sg", tense:"futur" },
            "pourras":   { infinitive:"pouvoir", person:"2sg", tense:"futur" },
            "pourra":    { infinitive:"pouvoir", person:"3sg", tense:"futur" },
            "pourrons":  { infinitive:"pouvoir", person:"1pl", tense:"futur" },
            "pourrez":   { infinitive:"pouvoir", person:"2pl", tense:"futur" },
            "pourront":  { infinitive:"pouvoir", person:"3pl", tense:"futur" },

            // ===== BOIRE - imparfait + futur complets =====
            "buvais":   { infinitive:"boire", person:"1sg", tense:"passe" },
            "buvait":   { infinitive:"boire", person:"3sg", tense:"passe" },
            "buvions":  { infinitive:"boire", person:"1pl", tense:"passe" },
            "buviez":   { infinitive:"boire", person:"2pl", tense:"passe" },
            "buvaient": { infinitive:"boire", person:"3pl", tense:"passe" },
            "boirai":   { infinitive:"boire", person:"1sg", tense:"futur" },
            "boiras":   { infinitive:"boire", person:"2sg", tense:"futur" },
            "boira":    { infinitive:"boire", person:"3sg", tense:"futur" },
            "boirons":  { infinitive:"boire", person:"1pl", tense:"futur" },
            "boirez":   { infinitive:"boire", person:"2pl", tense:"futur" },
            "boiront":  { infinitive:"boire", person:"3pl", tense:"futur" },

            // ===== FAIRE - imparfait + futur complets =====
            "faisais":   { infinitive:"faire", person:"1sg", tense:"passe" },
            "faisait":   { infinitive:"faire", person:"3sg", tense:"passe" },
            "faisions":  { infinitive:"faire", person:"1pl", tense:"passe" },
            "faisiez":   { infinitive:"faire", person:"2pl", tense:"passe" },
            "faisaient": { infinitive:"faire", person:"3pl", tense:"passe" },
            "ferai":     { infinitive:"faire", person:"1sg", tense:"futur" },
            "feras":     { infinitive:"faire", person:"2sg", tense:"futur" },
            "fera":      { infinitive:"faire", person:"3sg", tense:"futur" },
            "ferons":    { infinitive:"faire", person:"1pl", tense:"futur" },
            "ferez":     { infinitive:"faire", person:"2pl", tense:"futur" },
            "feront":    { infinitive:"faire", person:"3pl", tense:"futur" },

            // ===== AIMER - imparfait + futur complets =====
            "aimais":   { infinitive:"aimer", person:"1sg", tense:"passe" },
            "aimait":   { infinitive:"aimer", person:"3sg", tense:"passe" },
            "aimions":  { infinitive:"aimer", person:"1pl", tense:"passe" },
            "aimiez":   { infinitive:"aimer", person:"2pl", tense:"passe" },
            "aimaient": { infinitive:"aimer", person:"3pl", tense:"passe" },
            "aimerai":  { infinitive:"aimer", person:"1sg", tense:"futur" },
            "aimeras":  { infinitive:"aimer", person:"2sg", tense:"futur" },
            "aimera":   { infinitive:"aimer", person:"3sg", tense:"futur" },
            "aimerons": { infinitive:"aimer", person:"1pl", tense:"futur" },
            "aimerez":  { infinitive:"aimer", person:"2pl", tense:"futur" },
            "aimeront": { infinitive:"aimer", person:"3pl", tense:"futur" },

            // ===== ALLER - imparfait + futur complets =====
            "allais":   { infinitive:"aller", person:"1sg", tense:"passe" },
            "allait":   { infinitive:"aller", person:"3sg", tense:"passe" },
            "allions":  { infinitive:"aller", person:"1pl", tense:"passe" },
            "alliez":   { infinitive:"aller", person:"2pl", tense:"passe" },
            "allaient": { infinitive:"aller", person:"3pl", tense:"passe" },
            "irai":     { infinitive:"aller", person:"1sg", tense:"futur" },
            "iras":     { infinitive:"aller", person:"2sg", tense:"futur" },
            "ira":      { infinitive:"aller", person:"3sg", tense:"futur" },
            "irons":    { infinitive:"aller", person:"1pl", tense:"futur" },
            "irez":     { infinitive:"aller", person:"2pl", tense:"futur" },
            "iront":    { infinitive:"aller", person:"3pl", tense:"futur" },

            // ===== VENIR - imparfait + futur complets =====
            "venais":    { infinitive:"venir", person:"1sg", tense:"passe" },
            "venait":    { infinitive:"venir", person:"3sg", tense:"passe" },
            "venions":   { infinitive:"venir", person:"1pl", tense:"passe" },
            "veniez":    { infinitive:"venir", person:"2pl", tense:"passe" },
            "venaient":  { infinitive:"venir", person:"3pl", tense:"passe" },
            "viendrai":  { infinitive:"venir", person:"1sg", tense:"futur" },
            "viendras":  { infinitive:"venir", person:"2sg", tense:"futur" },
            "viendra":   { infinitive:"venir", person:"3sg", tense:"futur" },
            "viendrons": { infinitive:"venir", person:"1pl", tense:"futur" },
            "viendrez":  { infinitive:"venir", person:"2pl", tense:"futur" },
            "viendront": { infinitive:"venir", person:"3pl", tense:"futur" },

            // ===== DONNER - imparfait + futur complets =====
            "donnais":   { infinitive:"donner", person:"1sg", tense:"passe" },
            "donnait":   { infinitive:"donner", person:"3sg", tense:"passe" },
            "donnions":  { infinitive:"donner", person:"1pl", tense:"passe" },
            "donniez":   { infinitive:"donner", person:"2pl", tense:"passe" },
            "donnaient": { infinitive:"donner", person:"3pl", tense:"passe" },
            "donnerai":  { infinitive:"donner", person:"1sg", tense:"futur" },
            "donneras":  { infinitive:"donner", person:"2sg", tense:"futur" },
            "donnera":   { infinitive:"donner", person:"3sg", tense:"futur" },
            "donnerons": { infinitive:"donner", person:"1pl", tense:"futur" },
            "donnerez":  { infinitive:"donner", person:"2pl", tense:"futur" },
            "donneront": { infinitive:"donner", person:"3pl", tense:"futur" },

            // ===== LAVER =====
            "lave":    { infinitive:"laver", person:"1sg", tense:"present", canBePronominal:true },
            "laves":   { infinitive:"laver", person:"2sg", tense:"present", canBePronominal:true },
            "lavons":  { infinitive:"laver", person:"1pl", tense:"present", canBePronominal:true },
            "lavez":   { infinitive:"laver", person:"2pl", tense:"present", canBePronominal:true },
            "lavent":  { infinitive:"laver", person:"3pl", tense:"present", canBePronominal:true },
            "lavais":  { infinitive:"laver", person:"1sg", tense:"passe",   canBePronominal:true },
            "lavait":  { infinitive:"laver", person:"3sg", tense:"passe",   canBePronominal:true },
            "laverai": { infinitive:"laver", person:"1sg", tense:"futur",   canBePronominal:true },
            "lavera":  { infinitive:"laver", person:"3sg", tense:"futur",   canBePronominal:true },

            // ===== DORMIR =====
            "dors":    { infinitive:"dormir", person:"1sg", tense:"present" },
            "dort":    { infinitive:"dormir", person:"3sg", tense:"present" },
            "dormons": { infinitive:"dormir", person:"1pl", tense:"present" },
            "dormez":  { infinitive:"dormir", person:"2pl", tense:"present" },
            "dorment": { infinitive:"dormir", person:"3pl", tense:"present" },
            "dormais": { infinitive:"dormir", person:"1sg", tense:"passe" },
            "dormait": { infinitive:"dormir", person:"3sg", tense:"passe" },

            // ===== DONNER =====
            "donne":   { infinitive:"donner", person:"1sg", tense:"present" },
            "donnes":  { infinitive:"donner", person:"2sg", tense:"present" },
            "donnons": { infinitive:"donner", person:"1pl", tense:"present" },
            "donnez":  { infinitive:"donner", person:"2pl", tense:"present" },
            "donnent": { infinitive:"donner", person:"3pl", tense:"present" },
            "donnais": { infinitive:"donner", person:"1sg", tense:"passe" },
            "donnait": { infinitive:"donner", person:"3sg", tense:"passe" },
            "donnerai":{ infinitive:"donner", person:"1sg", tense:"futur" },
            "donnera": { infinitive:"donner", person:"3sg", tense:"futur" },

            // ===== PARTICIPES PASSÉS (pour accord nominal) =====
            "arrivé":  { infinitive:"arriver", tense:"passe", participle:true },
            "arrivée": { infinitive:"arriver", tense:"passe", participle:true },
            "tombé":   { infinitive:"tomber",  tense:"passe", participle:true },
            "tombée":  { infinitive:"tomber",  tense:"passe", participle:true },
            "mangé":   { infinitive:"manger",  tense:"passe", participle:true },
            "bu":      { infinitive:"boire",   tense:"passe", participle:true },
            "vu":      { infinitive:"voir",    tense:"passe", participle:true },
            "fait":    { infinitive:"faire",   tense:"passe", participle:true },
            "allé":    { infinitive:"aller",   tense:"passe", participle:true },
            "venu":    { infinitive:"venir",   tense:"passe", participle:true },
            "parti":   { infinitive:"partir",  tense:"passe", participle:true },
            "parlé":   { infinitive:"parler",  tense:"passe", participle:true },
            "aimé":    { infinitive:"aimer",   tense:"passe", participle:true },
            "donné":   { infinitive:"donner",  tense:"passe", participle:true },
            "lavé":    { infinitive:"laver",   tense:"passe", participle:true }
        };
        return forms[word] || null;
    }

    // ============================================================
    // ANALYSEUR
    // ============================================================
    analyzer(detection) {
        const analyzed  = [];
        const structure = detection.structure;
        const tokens    = detection.tokens;

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            const wordAnalysis = {
                original: token, translation: null, type: "unknown", grammarInfo: {}
            };

            // 1. ARTICLE → ignorer
            if (wordsData.articles.includes(token)) continue;

            // 2. NOMBRE + NOM (quand le nombre précède le nom)
            // Ex : "un homme", "deux hommes"
            if (isNumber(token)) {
                const next = tokens[i + 1];
                if (next) {
                    // Chercher le nom (singulier ou pluriel)
                    const nextNounData = wordsData.nouns[next] ||
                        Object.values(wordsData.nouns).find(n =>
                            (n.plFr && n.plFr.toLowerCase() === next) ||
                            (n.sgFr && n.sgFr.toLowerCase() === next)
                        );
                    if (nextNounData) {
                        // Passer nounData directement
                        const resolved = resolveNumber(token, nextNounData);
                        if (resolved) {
                            wordAnalysis.type = "number-noun";
                            wordAnalysis.translation = resolved.full;
                            wordAnalysis.nounData = nextNounData;
                            analyzed.push(wordAnalysis);
                            i++; // Sauter le nom suivant
                            continue;
                        }
                    }
                }
                // Nombre seul sans nom reconnu après
                const root = numberRoots[token.toLowerCase()];
                wordAnalysis.type = "number";
                wordAnalysis.translation = root ? root : "[" + token + "]";
                analyzed.push(wordAnalysis);
                continue;
            }

            // 3. PRONOM POSSESSIF + NOM
            if (isPossessive(token)) {
                const next = tokens[i + 1];
                if (next && wordsData.nouns[next]) {
                    const resolved = resolvePossessive(token, next);
                    if (resolved) {
                        wordAnalysis.type = "possessive-noun";
                        wordAnalysis.translation = resolved.full;
                        wordAnalysis.grammarInfo = { order: "nom + possessif" };
                        analyzed.push(wordAnalysis);
                        i++;
                        continue;
                    }
                }
                wordAnalysis.type = "possessive-alone";
                wordAnalysis.translation = `[${token}]`;
                this.result.warnings.push(`Possessif "${token}" sans nom reconnu`);
                analyzed.push(wordAnalysis);
                continue;
            }

            // 3. PRONOM DÉMONSTRATIF + NOM
            if (isDemonstrative(token)) {
                const next = tokens[i + 1];
                if (next && wordsData.nouns[next]) {
                    const resolved = resolveDemonstrative(token, next);
                    if (resolved) {
                        wordAnalysis.type = "demonstrative-noun";
                        wordAnalysis.translation = resolved.full;
                        analyzed.push(wordAnalysis);
                        i++;
                        continue;
                    }
                }
                wordAnalysis.type = "demonstrative-alone";
                wordAnalysis.translation = `[${token}]`;
                analyzed.push(wordAnalysis);
                continue;
            }

            // 4. PRONOM SUJET
            // En Kivira le pronom est inclus dans le verbe (collé)
            // On l'utilise uniquement pour mettre à jour la personne
            if (wordsData.pronouns.subject[token]) {
                const subjData = wordsData.pronouns.subject[token];
                // Mettre à jour la personne pour la conjugaison
                structure.person = subjData.person;
                // Ne PAS l'ajouter dans analyzed (pas de traduction séparée)
                // kivira = null → le pronom est dans le verbe
                continue;
            }

            // 5. VERBE (forme conjuguée)
            const verbInfo = this.detectVerb(token);
            if (verbInfo) {
                const verbData = wordsData.verbs[verbInfo.infinitive];
                if (verbData) {
                    const person   = structure.person || verbInfo.person || "3sg";
                    const tense    = verbInfo.tense || structure.tense;
                    const negative = structure.isNegative;
                    const pron     = structure.pronominal;

                    if (verbInfo.aux) {
                        // AUXILIAIRE : deux cas
                        // 1) Suivi d'un participe passé → ignorer (le participe gère)
                        // 2) Seul (je suis, j'ai...) → conjuguer et afficher

                        // Mémoriser personne et temps pour le participe éventuel
                        structure.auxPerson = verbInfo.person || person;
                        structure.auxTense  = verbInfo.tense;

                        // Vérifier si le token suivant est un participe passé
                        const nextToken = tokens[i + 1];
                        const nextIsParticiple = nextToken && this.detectVerb(nextToken)?.participle;

                        if (nextIsParticiple) {
                            // Auxiliaire suivi d'un participe → on ignore l'auxiliaire
                            continue;
                        } else {
                            // Auxiliaire seul → conjuguer normalement et afficher
                            wordAnalysis.type = "auxiliary";
                            wordAnalysis.translation = conjugateAuxiliary(
                                verbInfo.infinitive, person, tense, negative
                            );
                            // Si pas de traduction (cas non géré) → warning
                            if (!wordAnalysis.translation) {
                                wordAnalysis.translation = "[" + token + "]";
                                this.result.warnings.push("Auxiliaire non trouvé: " + verbInfo.infinitive + " " + person + " " + tense);
                            }
                        }

                    } else if (verbInfo.participle) {
                        // PARTICIPE PASSÉ = passé Kivira
                        // Récupère la personne mémorisée par l'auxiliaire
                        const effectivePerson = structure.auxPerson || person;
                        const prevNoun = this.findPrecedingNoun(analyzed);

                        if (prevNoun && prevNoun.nounData) {
                            // Sujet = nom → accord avec la classe nominale
                            const nd = prevNoun.nounData;
                            const numForm = isFrenchPlural(prevNoun.original) ? "pl" : "sg";
                            wordAnalysis.type = "participle-agreed";
                            wordAnalysis.translation = conjugateWithNounAgreement(
                                nd.class, numForm, verbData.root, "passe", negative
                            );
                        } else {
                            // Sujet = personne → conjugaison normale au passé
                            wordAnalysis.type = "participle";
                            wordAnalysis.translation = conjugateVerb(
                                verbData.root, effectivePerson, "passe", negative, pron
                            );
                        }
                        // Réinitialiser la personne auxiliaire
                        structure.auxPerson = null;

                    } else {
                        // Verbe ordinaire (ou pronominal)
                        // Si le verbe est marqué pronominal dans words.js
                        // ET que le détecteur a détecté "se/me/te"
                        // → forcer le mode réflexif
                        let pronMode = pron;
                        if (verbData.pronominal && !pronMode) {
                            pronMode = { type: "reflexive" };
                        }
                        wordAnalysis.type = "verb";
                        wordAnalysis.translation = conjugateVerb(
                            verbData.root, person, tense, negative, pronMode
                        );
                        wordAnalysis.grammarInfo = { infinitive:verbInfo.infinitive, person, tense, negative };
                    }
                } else {
                    wordAnalysis.type = "verb";
                    wordAnalysis.translation = `[${token}]`;
                    this.result.warnings.push(`Verbe non trouvé: "${verbInfo.infinitive}"`);
                }
                analyzed.push(wordAnalysis);
                continue;
            }

            // 6. NOM
            const nounResult = resolveNoun(token);
            if (nounResult) {
                const nounData = wordsData.nouns[token] ||
                    Object.values(wordsData.nouns).find(n =>
                        (n.plFr && n.plFr.toLowerCase() === token) ||
                        (n.sgFr && n.sgFr.toLowerCase() === token)
                    );
                wordAnalysis.type = "noun";
                wordAnalysis.translation = nounResult;
                wordAnalysis.grammarInfo = { class: nounData?.class, root: nounData?.root };
                wordAnalysis.nounData = nounData;
                wordAnalysis.original = token;
                analyzed.push(wordAnalysis);

                // Si un adjectif était en attente (ex: "belle chaise")
                // → l'ajouter APRÈS le nom avec le bon préfixe
                if (structure.pendingAdjective && nounData) {
                    const adjToken = structure.pendingAdjective;
                    structure.pendingAdjective = null;

                    const adjAnalysis = {
                        original: adjToken,
                        type: "adjective",
                        translation: resolveAdjective(adjToken, wordAnalysis, structure.person || "3sg"),
                        grammarInfo: {}
                    };
                    if (!adjAnalysis.translation) {
                        adjAnalysis.translation = wordsData.adjectives[adjToken]?.root || adjToken;
                    }
                    analyzed.push(adjAnalysis);
                }
                continue;
            }

            // 7. ADJECTIF → accord avec le nom précédent ou la personne
            if (wordsData.adjectives[token]) {
                const adjRoot = wordsData.adjectives[token].root;
                const person  = structure.person || "3sg";

                // CAS 1 : adjectif AVANT le nom (français : "belle chaise")
                // → on mémorise l'adjectif, le nom suivant le prendra en charge
                const nextToken = tokens[i + 1];
                if (nextToken && (wordsData.nouns[nextToken] ||
                    Object.values(wordsData.nouns).find(n =>
                        (n.plFr && n.plFr.toLowerCase() === nextToken) ||
                        (n.sgFr && n.sgFr.toLowerCase() === nextToken)
                    ))) {
                    // Stocker l'adjectif en attente
                    structure.pendingAdjective = token;
                    // Ne pas ajouter dans analyzed encore
                    continue;
                }

                // CAS 2 : adjectif APRÈS le nom (Kivira : "kifumbi kishoga")
                // ou adjectif attribut ("je suis belle")
                const prevNoun = this.findPrecedingNoun(analyzed);
                wordAnalysis.type = "adjective";
                wordAnalysis.translation = resolveAdjective(token, prevNoun, person);

                if (!wordAnalysis.translation) {
                    wordAnalysis.translation = adjRoot;
                }
                analyzed.push(wordAnalysis);
                continue;
            }

            // 8. ADVERBE
            if (wordsData.adverbs[token]) {
                wordAnalysis.type = "adverb";
                wordAnalysis.translation = wordsData.adverbs[token];
                analyzed.push(wordAnalysis);
                continue;
            }

            // 9. VARIANTE DE / QUI / QUE → AVANT les prépositions !
            if (isRelative(token)) {
                const prevNoun = this.findPrecedingNoun(analyzed);
                const nounData = prevNoun ? prevNoun.nounData : null;
                const number   = prevNoun && isFrenchPlural(prevNoun.original) ? "pl" : "sg";

                const resolved = resolveRelative(token, nounData, number);

                if (resolved) {
                    wordAnalysis.type = "relative";
                    wordAnalysis.translation = resolved;
                } else {
                    // null → on ignore (ex: "du" abstrait)
                    wordAnalysis.type = "relative-ignored";
                    wordAnalysis.translation = null;
                }
                analyzed.push(wordAnalysis);
                continue;
            }

            // 10. PRÉPOSITION
            if (wordsData.prepositions[token]) {
                wordAnalysis.type = "preposition";
                wordAnalysis.translation = wordsData.prepositions[token];
                analyzed.push(wordAnalysis);
                continue;
            }

            // 11. CONJONCTION
            if (wordsData.conjunctions[token]) {
                wordAnalysis.type = "conjunction";
                wordAnalysis.translation = wordsData.conjunctions[token];
                analyzed.push(wordAnalysis);
                continue;
            }

            // 11. NOMBRE après le nom → déjà traité en section 2
            // Ce cas ne devrait pas arriver si le nombre précède toujours le nom
            // Mais au cas où :
            if (isNumber(token)) {
                const root = numberRoots[token.toLowerCase()];
                wordAnalysis.type = "number";
                wordAnalysis.translation = root ? root : "[" + token + "]";
                analyzed.push(wordAnalysis);
                continue;
            }

            // MOT INCONNU
            wordAnalysis.type = "unknown";
            wordAnalysis.translation = `[${token}]`;
            this.result.warnings.push(`Mot inconnu: "${token}"`);
            analyzed.push(wordAnalysis);
        }

        return analyzed;
    }

    // Chercher le nom qui précède dans les tokens analysés
    findPrecedingNoun(analyzed) {
        for (let i = analyzed.length - 1; i >= 0; i--) {
            if (analyzed[i].type === "noun") return analyzed[i];
        }
        return null;
    }

    // ============================================================
    // ASSEMBLEUR
    // ============================================================
    assembler(analyzed) {
        return analyzed
            .filter(w => w.translation)
            .map(w => w.translation)
            .join(' ');
    }
}

const translator = new TranslationEngine();

function translateToKivira(text) {
    return translator.translate(text);
}
