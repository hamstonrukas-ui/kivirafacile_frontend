// ============================================================
// TRADUCTION KIVIRA — VERSION AUTONOME (repartie de zéro)
// Ce fichier remplace TOUTE la logique de clic précédente sur
// le bouton traduire. Il ne dépend d'aucun autre script pour
// fonctionner (modal de paiement intégrée en secours).
//
// IMPORTANT : dans index.html, retire/commente l'ancienne ligne
//   translateBtn.addEventListener('click', performTranslation);
// pour éviter que la traduction se lance deux fois au clic.
// ============================================================

(function () {
    console.log('[Traduction] Script translate-clean.js chargé');

    function getEls() {
        return {
            input: document.getElementById('translatorInput'),
            btn: document.getElementById('translateBtn'),
            output: document.getElementById('translatorOutput'),
            result: document.getElementById('translationResult'),
            method: document.getElementById('translationMethod'),
            suggestion: document.getElementById('suggestionSection')
        };
    }

    // ── Modal de paiement minimale et autonome (aucune dépendance externe) ──
    function showBuiltinTranslationModal() {
        console.log('[Traduction] Affichage de la modal de paiement (autonome)');
        let modal = document.getElementById('kiv-translate-modal');
        if (modal) {
            modal.style.display = 'flex';
            return;
        }

        modal = document.createElement('div');
        modal.id = 'kiv-translate-modal';
        modal.style.cssText = `
            position: fixed; inset: 0; z-index: 99999;
            background: rgba(0,0,0,0.6);
            display: flex; align-items: center; justify-content: center;
            padding: 20px;
        `;
        modal.innerHTML = `
            <div style="background:#fff;border-radius:16px;max-width:420px;width:100%;
                        padding:24px;box-shadow:0 20px 60px rgba(0,0,0,0.3);">
                <h2 style="margin:0 0 8px;font-size:20px;color:#0891b2;">🤖 Premium Traduction</h2>
                <p style="color:#374151;font-size:14px;margin-bottom:16px;">
                    La traduction Français ↔ Kivira nécessite un abonnement de <strong>2000 FC</strong>.
                </p>
                <p style="font-size:13px;color:#6b7280;margin-bottom:20px;">
                    Contacte l'équipe Kivirafacile pour activer ton accès traduction.
                </p>
                <button id="kiv-translate-modal-close" style="width:100%;padding:12px;
                        background:#0891b2;color:#fff;border:none;border-radius:8px;
                        font-weight:700;cursor:pointer;font-size:15px;">
                    Fermer
                </button>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById('kiv-translate-modal-close').addEventListener('click', function () {
            modal.style.display = 'none';
        });
    }

    async function handleTranslateClick() {
        console.log('[Traduction] handleTranslateClick() démarré');
        const { input, btn, output, result, method, suggestion } = getEls();

        if (!input || !btn) {
            console.error('[Traduction] ❌ Éléments introuvables dans le DOM :', { input, btn });
            alert('Erreur technique : élément de traduction introuvable. Contacte le support.');
            return;
        }

        const text = input.value.trim();
        console.log('[Traduction] Texte saisi :', JSON.stringify(text));

        if (!text) {
            console.log('[Traduction] Texte vide → arrêt silencieux (normal)');
            return;
        }

        if (text.length > 50) {
            alert('⚠️ Le texte ne doit pas dépasser 50 caractères.');
            return;
        }

        // ── Vérification premium ──
        const userDefined = typeof currentUser !== 'undefined';
        const isPremium = userDefined && currentUser && currentUser.isTranslationPremium;
        console.log('[Traduction] currentUser défini ?', userDefined,
            '| valeur :', userDefined ? currentUser : 'N/A',
            '| isTranslationPremium :', isPremium);

        if (!isPremium) {
            if (typeof showTranslationPaymentModal === 'function') {
                console.log('[Traduction] showTranslationPaymentModal externe trouvée → appel');
                showTranslationPaymentModal();
            } else {
                console.log('[Traduction] showTranslationPaymentModal absente → modal autonome de secours');
                showBuiltinTranslationModal();
            }
            return;
        }

        // ── Appel API ──
        if (output) output.style.display = 'block';
        if (suggestion) suggestion.style.display = 'none';
        if (result) result.textContent = '⏳ Traduction en cours...';
        if (method) method.textContent = '';
        btn.disabled = true;

        try {
            const tokenKey = (typeof CONFIG !== 'undefined' && CONFIG.STORAGE_KEYS && CONFIG.STORAGE_KEYS.TOKEN)
                ? CONFIG.STORAGE_KEYS.TOKEN
                : 'token';
            const token = localStorage.getItem(tokenKey);

            const baseUrl = (typeof CONFIG !== 'undefined' && CONFIG.TRANSLATE_URL)
                ? CONFIG.TRANSLATE_URL
                : 'https://kivira-translate-api.onrender.com';

            console.log('[Traduction] Appel API →', baseUrl + '/api/translate', '| token présent ?', !!token);

            const response = await fetch(`${baseUrl}/api/translate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ text })
            });

            console.log('[Traduction] Statut HTTP reçu :', response.status);
            const data = await response.json();
            console.log('[Traduction] Corps de la réponse :', data);

            if (response.status === 402) {
                if (output) output.style.display = 'none';
                if (typeof showTranslationPaymentModal === 'function') showTranslationPaymentModal();
                else showBuiltinTranslationModal();
                return;
            }
            if (response.status === 429) {
                if (result) result.textContent = '⚠️ Limite quotidienne atteinte (20/jour). Réessayez demain.';
                return;
            }
            if (!response.ok) {
                throw new Error(data.message || data.error || `Erreur ${response.status}`);
            }

            if (result) result.textContent = data.translation;
            if (method) {
                method.textContent = data.fromCache
                    ? '⚡ Traduction instantanée (cache)'
                    : ;
                if (data.quotaRemaining != null) {
                    method.textContent += ` · ${data.quotaRemaining} gratuite(s) restante(s)`;
                }
                if (data.dailyRemaining != null) {
                    method.textContent += ` · ${data.dailyRemaining}/jour restantes`;
                }
            }

            if (output) output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        } catch (error) {
            console.error('[Traduction] ❌ Erreur pendant la traduction :', error);
            if (result) result.textContent = '❌ Erreur : ' + error.message;
        } finally {
            btn.disabled = input.value.trim().length === 0;
        }
    }

    // ── Délégation d'événement sur document : fonctionne même si le
    //    bouton #translateBtn est recréé/remplacé ailleurs dans la page ──
    document.addEventListener('click', function (e) {
        const btn = e.target.closest ? e.target.closest('#translateBtn') : null;
        if (!btn) return;
        console.log('[Traduction] 🖱️ Clic détecté sur #translateBtn (délégation)');
        handleTranslateClick();
    });

    // ── Diagnostic immédiat ──
    function diagnose() {
        const btn = document.getElementById('translateBtn');
        const input = document.getElementById('translatorInput');
        console.log('[Traduction] Diagnostic initial — bouton présent ?', !!btn, '| champ texte présent ?', !!input);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', diagnose);
    } else {
        diagnose();
    }

    // Alias global : tout code existant qui appelle encore performTranslation()
    // (ex: les puces de suggestion cliquables) passe désormais par ce flux robuste.
    window.performTranslation = handleTranslateClick;

    console.log('[Traduction] ✅ Écouteur de délégation installé — prêt.');
})();
