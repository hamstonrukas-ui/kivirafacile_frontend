// ===== MODAL PAIEMENT TRADUCTION — 2000 FC =====
// Abonnement séparé uniquement pour la fonctionnalité de traduction KiviraAI

// Injecter le HTML du modal traduction
function injectTranslationPaymentModal() {
    if (document.getElementById('translation-payment-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'translation-payment-modal';
    modal.innerHTML = `
        <div class="modal-overlay" id="translation-modal-overlay" onclick="closeTranslationPaymentModal()"></div>
        <div class="modal-content translation-modal-content">
            <span class="close-modal" onclick="closeTranslationPaymentModal()">&times;</span>

            <!-- ÉTAPE 1 : Instructions -->
            <div id="translation-instructions-step">
                <div class="modal-header" style="background:linear-gradient(135deg,#0891b2,#0e7490)">
                    <div class="modal-icon">🤖</div>
                    <h2 class="modal-title">Premium Traduction</h2>
                    <p class="modal-subtitle">Traductions illimitées Français ↔ Kivira · 2000 FC</p>
                </div>

                <div class="modal-body">
                    <div style="background:#f0f9ff;border:2px solid #bae6fd;border-radius:12px;padding:16px;margin-bottom:16px">
                        <p style="font-weight:700;color:#0891b2;margin-bottom:8px">✨ Ce que vous obtenez :</p>
                        <ul style="color:#374151;font-size:14px;padding-left:16px;line-height:1.8">
                            <li>🔓 Traductions illimitées (jusqu'à 20/jour)</li>
                            <li>🤖 Explorer la performance du moteur de traduction</li>
                            <li>📚 Lexique de 8965 mots Kivira</li>
                            <li>💾 Historique de vos traductions</li>
                        </ul>
                    </div>

                    <div style="background:#fef9c3;border-radius:12px;padding:14px;margin-bottom:16px">
                        <p style="font-size:13px;color:#854d0e">
                            ⚠️ Abonnement <strong>séparé</strong> du Premium Général.
                            Vous pouvez avoir les deux ou seulement celui-ci qui est spécial pour avoir accès au moteur de traduction de Kivira.
                        </p>
                    </div>

                    <p style="margin-bottom:12px;font-weight:600">Envoyez <strong style="color:#0891b2">2000 FC</strong> à l'un de ces numéros :</p>

                    <div id="translation-payment-numbers">
                        <div style="text-align:center;color:#6b7280">Chargement...</div>
                    </div>

                    <p style="font-size:12px;color:#6b7280;margin-top:12px;line-height:1.6">
                        Après le paiement, relevez le <strong>Transaction ID</strong> puis cliquez sur "J'ai payé".
                    </p>

                    <button class="btn-primary" onclick="showTranslationTransactionForm()"
                        style="background:linear-gradient(135deg,#0891b2,#0e7490);margin-top:16px;width:100%">
                        ✅ J'ai payé · Entrer mon Transaction ID
                    </button>
                </div>
            </div>

            <!-- ÉTAPE 2 : Formulaire Transaction -->
            <div id="translation-transaction-step" style="display:none">
                <div class="modal-header" style="background:linear-gradient(135deg,#0891b2,#0e7490)">
                    <div class="modal-icon">📝</div>
                    <h2 class="modal-title">Confirmer le paiement</h2>
                    <p class="modal-subtitle">Entrez les informations de votre transaction</p>
                </div>

                <div class="modal-body">
                    <form onsubmit="submitTranslationTransaction(event)">
                        <div class="form-group">
                            <label class="form-label">Transaction ID *</label>
                            <input type="text" id="translation-transaction-id" class="form-input"
                                placeholder="Ex: MP240000123456" required>
                            <p style="font-size:12px;color:#6b7280;margin-top:4px">
                                Le code reçu par SMS après votre paiement Mobile Money
                            </p>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Votre numéro Mobile Money *</label>
                            <input type="tel" id="translation-phone-number" class="form-input"
                                placeholder="Ex: 0991234567" required>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Opérateur *</label>
                            <select id="translation-operator" class="form-input" required>
                                <option value="">-- Choisir l'opérateur --</option>
                                <option value="Airtel">Airtel Money</option>
                                <option value="Orange">Orange Money</option>
                                <option value="Mpesa">M-Pesa (Vodacom)</option>
                            </select>
                        </div>

                        <div style="background:#fef9c3;border-radius:10px;padding:12px;margin-bottom:16px">
                            <p style="font-size:13px;color:#854d0e">
                                ⚠️ Montant : <strong>2000 FC</strong> exactement.<br>
                                Faux Transaction ID = Blocage définitif.
                            </p>
                        </div>

                        <button type="button" onclick="backToTranslationInstructions()"
                            style="background:#f3f4f6;color:#374151;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;margin-right:8px">
                            ← Retour
                        </button>

                        <button type="submit" class="btn-primary" id="submit-translation-btn"
                            style="background:linear-gradient(135deg,#0891b2,#0e7490)">
                            Valider et obtenir l'accès Traduction
                        </button>
                    </form>
                </div>
            </div>

            <!-- ÉTAPE 3 : Confirmation -->
            <div id="translation-confirmation-step" style="display:none">
                <div class="modal-header" style="background:linear-gradient(135deg,#059669,#047857)">
                    <div class="modal-icon">🎉</div>
                    <h2 class="modal-title">Demande envoyée !</h2>
                    <p class="modal-subtitle">Votre accès traduction est en cours de validation</p>
                </div>

                <div class="modal-body" style="text-align:center">
                    <div style="font-size:64px;margin:20px 0">🤖</div>
                    <p style="color:#374151;margin-bottom:12px">
                        Votre demande de <strong>Premium Traduction (2000 FC)</strong> a été envoyée.
                    </p>
                    <p style="color:#374151;margin-bottom:16px">
                        Transaction ID : <strong id="translation-confirmed-id"
                            style="font-family:monospace;background:#f3f4f6;padding:4px 8px;border-radius:6px"></strong>
                    </p>
                    <div style="background:#fef3c7;border-radius:10px;padding:14px;margin-bottom:20px">
                        <p style="color:#92400e;font-size:14px">
                            ⏳ Votre paiement est en cours de vérification.<br>
                            <small>L'accès traduction sera activé dès validation manuelle par l'équipe (généralement sous 24h). Vous recevrez l'accès sans avoir besoin de repayer.</small>
                        </p>
                    </div>
                    <button onclick="closeTranslationPaymentModal()" class="btn-primary"
                        style="background:linear-gradient(135deg,#0891b2,#0e7490)">
                        Compris, j'attends la validation
                    </button>
                </div>
            </div>
            <!-- ÉTAPE 4 : Vérification en cours (rappel lors des clics suivants) -->
            <div id="translation-pending-step" style="display:none">
                <div class="modal-header" style="background:linear-gradient(135deg,#0891b2,#0e7490)">
                    <div class="modal-icon">⏳</div>
                    <h2 class="modal-title">Vérification en cours</h2>
                    <p class="modal-subtitle">Votre paiement Traduction est en cours de validation</p>
                </div>

                <div class="modal-body" style="text-align:center">
                    <div style="font-size:56px;margin:16px 0">🔍</div>
                    <p style="color:#374151;margin-bottom:8px">
                        L'équipe <strong>Kivirafacile</strong> est en train de vérifier votre paiement.<br>
                        Veuillez patienter, la vérification prend généralement jusqu'à <strong>24h</strong>.
                    </p>
                    <p id="translation-pending-elapsed" style="color:#6b7280;font-size:13px;margin-bottom:16px"></p>

                    <div id="translation-pending-whatsapp" style="display:none;background:#dcfce7;border-radius:10px;padding:14px;margin-bottom:16px">
                        <p style="color:#166534;font-size:14px;margin-bottom:10px">
                            ⏰ Le délai de 24h est dépassé. Vous pouvez contacter directement l'équipe :
                        </p>
                        <a href="https://wa.me/243855841999?text=Bonjour%2C%20j%27attends%20toujours%20la%20validation%20de%20mon%20paiement%20Premium%20Traduction."
                           target="_blank" rel="noopener"
                           style="display:inline-flex;align-items:center;gap:8px;background:#25D366;color:white;padding:10px 18px;border-radius:24px;font-weight:700;text-decoration:none">
                            📱 Contacter sur WhatsApp
                        </a>
                    </div>

                    <button onclick="closeTranslationPaymentModal()" class="btn-primary"
                        style="background:linear-gradient(135deg,#0891b2,#0e7490)">
                        Compris, je patiente
                    </button>
                </div>
            </div>
        </div>
    `;

    // Styles spécifiques
    const style = document.createElement('style');
    style.textContent = `
        #translation-payment-modal .modal-overlay {
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.6);
            z-index: 1000;
        }
        #translation-payment-modal .translation-modal-content {
            position: fixed;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 20px;
            width: 90%; max-width: 480px;
            max-height: 90vh; overflow-y: auto;
            z-index: 1001;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        #translation-payment-modal .close-modal {
            position: absolute; top: 16px; right: 16px;
            font-size: 24px; cursor: pointer;
            color: white; font-weight: 700;
            z-index: 10;
        }
        #translation-payment-modal .modal-header {
            padding: 30px 24px 24px;
            text-align: center;
            border-radius: 20px 20px 0 0;
            color: white;
            position: relative;
        }
        #translation-payment-modal .modal-icon { font-size: 48px; margin-bottom: 10px; }
        #translation-payment-modal .modal-title { font-size: 22px; font-weight: 700; margin-bottom: 6px; }
        #translation-payment-modal .modal-subtitle { font-size: 14px; opacity: 0.9; }
        #translation-payment-modal .modal-body { padding: 20px 24px 24px; }
        #translation-payment-modal .form-group { margin-bottom: 16px; }
        #translation-payment-modal .form-label { display: block; font-weight: 600; color: #374151; margin-bottom: 6px; font-size: 14px; }
        #translation-payment-modal .form-input {
            width: 100%; padding: 12px 14px;
            border: 2px solid #e5e7eb; border-radius: 10px;
            font-size: 14px; font-family: inherit;
        }
        #translation-payment-modal .form-input:focus { outline: none; border-color: #0891b2; }
        #translation-payment-modal .operator-number {
            display: flex; align-items: center; justify-content: space-between;
            background: #f8fafc; border: 1px solid #e2e8f0;
            border-radius: 10px; padding: 12px 14px; margin-bottom: 8px;
        }
        #translation-payment-modal .operator-number .op-name { font-weight: 600; color: #1f2937; }
        #translation-payment-modal .operator-number .op-num { font-family: monospace; color: #0891b2; }
        #translation-payment-modal .btn-copy {
            background: #e0f2fe; color: #0891b2; border: none;
            padding: 6px 12px; border-radius: 6px; font-size: 12px;
            font-weight: 600; cursor: pointer;
        }
        #translation-payment-modal .btn-primary {
            background: linear-gradient(135deg, #0891b2, #0e7490);
            color: white; border: none;
            padding: 14px 24px; border-radius: 10px;
            font-size: 15px; font-weight: 700; cursor: pointer;
            width: 100%; transition: opacity 0.2s;
        }
        #translation-payment-modal .btn-primary:hover { opacity: 0.9; }
        #translation-payment-modal .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
    `;
    document.head.appendChild(style);
    document.body.appendChild(modal);

    // Charger les numéros de paiement
    loadTranslationPaymentNumbers();
}

// Charger les numéros depuis le backend
async function loadTranslationPaymentNumbers() {
    const container = document.getElementById('translation-payment-numbers');
    if (!container) return;

    try {
        const response = await apiRequest('/payments/instructions');
        const config = response.config;

        container.innerHTML = [
            { name: 'Airtel Money', num: config.airtelNumber },
            { name: 'Orange Money', num: config.orangeNumber },
            { name: 'M-Pesa', num: config.mpesaNumber }
        ].map(op => `
            <div class="operator-number">
                <span class="op-name">📱 ${op.name}</span>
                <span class="op-num">${op.num}</span>
                <button class="btn-copy" onclick="copyTranslationNumber('${op.num}')">📋 Copier</button>
            </div>
        `).join('');
    } catch (err) {
        container.innerHTML = `
            <div class="operator-number"><span class="op-name">📱 Airtel Money</span><span class="op-num">+243 99 XXX XXXX</span></div>
            <div class="operator-number"><span class="op-name">📱 Orange Money</span><span class="op-num">+243 84 XXX XXXX</span></div>
            <div class="operator-number"><span class="op-name">📱 M-Pesa</span><span class="op-num">+243 81 XXX XXXX</span></div>
        `;
    }
}

function copyTranslationNumber(number) {
    navigator.clipboard?.writeText(number).then(() => {
        alert('📋 Numéro copié : ' + number);
    }).catch(() => {
        prompt('Copiez ce numéro :', number);
    });
}

// ── Afficher/Fermer le modal ──
async function showTranslationPaymentModal() {
    injectTranslationPaymentModal();
    document.getElementById('translation-payment-modal').style.display = 'block';

    // Masquer toutes les étapes par défaut, on décide ensuite laquelle montrer
    document.getElementById('translation-instructions-step').style.display = 'none';
    document.getElementById('translation-transaction-step').style.display = 'none';
    document.getElementById('translation-confirmation-step').style.display = 'none';
    document.getElementById('translation-pending-step').style.display = 'none';

    // Un paiement Traduction est-il déjà en attente de validation manuelle ?
    const pending = await getTranslationPendingPayment();

    if (pending && pending.status === 'PENDING') {
        showTranslationPendingStep(pending.submittedAt);
    } else {
        document.getElementById('translation-instructions-step').style.display = 'block';
    }
}

// Récupère le dernier paiement Traduction de l'utilisateur connecté
async function getTranslationPendingPayment() {
    try {
        const data = await apiRequest('/payments/my-status');
        return data && data.translation ? data.translation : null;
    } catch (err) {
        console.error('Erreur vérification statut paiement traduction:', err);
        return null;
    }
}

// Affiche l'écran "vérification en cours" avec le temps écoulé,
// et le bouton WhatsApp si plus de 24h se sont écoulées.
function showTranslationPendingStep(submittedAt) {
    document.getElementById('translation-instructions-step').style.display = 'none';
    document.getElementById('translation-transaction-step').style.display = 'none';
    document.getElementById('translation-confirmation-step').style.display = 'none';
    document.getElementById('translation-pending-step').style.display = 'block';

    const elapsedEl = document.getElementById('translation-pending-elapsed');
    const whatsappBox = document.getElementById('translation-pending-whatsapp');

    const submittedDate = new Date(submittedAt);
    const hoursElapsed = (Date.now() - submittedDate.getTime()) / (1000 * 60 * 60);

    if (isNaN(hoursElapsed)) {
        elapsedEl.textContent = '';
    } else if (hoursElapsed < 1) {
        elapsedEl.textContent = 'Demande envoyée il y a quelques minutes.';
    } else {
        elapsedEl.textContent = `Demande envoyée il y a environ ${Math.floor(hoursElapsed)}h.`;
    }

    whatsappBox.style.display = (hoursElapsed >= 24) ? 'block' : 'none';
}

function closeTranslationPaymentModal() {
    const modal = document.getElementById('translation-payment-modal');
    if (modal) modal.style.display = 'none';
}

// ── Navigation entre étapes ──
function showTranslationTransactionForm() {
    document.getElementById('translation-instructions-step').style.display = 'none';
    document.getElementById('translation-transaction-step').style.display = 'block';
}

function backToTranslationInstructions() {
    document.getElementById('translation-transaction-step').style.display = 'none';
    document.getElementById('translation-instructions-step').style.display = 'block';
}

// ── Soumettre le paiement traduction ──
async function submitTranslationTransaction(event) {
    event.preventDefault();

    const transactionId = document.getElementById('translation-transaction-id').value.trim();
    const phoneNumber   = document.getElementById('translation-phone-number').value.trim();
    const operator      = document.getElementById('translation-operator').value;
    const submitBtn     = document.getElementById('submit-translation-btn');

    if (!transactionId || !phoneNumber || !operator) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Vérification...';

    try {
        // productType: 'translation' → backend sait que c'est 2000 FC
        const data = await apiRequest('/payments/submit', {
            method: 'POST',
            body: JSON.stringify({
                transactionId,
                phoneNumber,
                operator,
                productType: 'translation'
            })
        });

        // Ne plus activer isTranslationPremium côté client : le serveur
        // n'accorde plus d'accès temporaire pour la traduction, il faut
        // attendre la validation manuelle. On ne simule plus cet accès ici.

        // Afficher confirmation
        document.getElementById('translation-confirmed-id').textContent = transactionId;
        document.getElementById('translation-transaction-step').style.display = 'none';
        document.getElementById('translation-confirmation-step').style.display = 'block';

        // Réinitialiser le blocker
        if (typeof resetPremiumBlocker === 'function') {
            setTimeout(resetPremiumBlocker, 500);
        }

    } catch (error) {
        alert('❌ Erreur : ' + (error.message || 'Erreur lors de la soumission'));
        submitBtn.disabled = false;
        submitBtn.textContent = 'Valider et obtenir l\'accès Traduction';
    }
}

// Exposer globalement
window.showTranslationPaymentModal = showTranslationPaymentModal;
window.closeTranslationPaymentModal = closeTranslationPaymentModal;
window.showTranslationTransactionForm = showTranslationTransactionForm;
window.backToTranslationInstructions = backToTranslationInstructions;
window.submitTranslationTransaction = submitTranslationTransaction;
window.copyTranslationNumber = copyTranslationNumber;
window.getTranslationPendingPayment = getTranslationPendingPayment;
window.showTranslationPendingStep = showTranslationPendingStep;

console.log('✅ payment-translation.js chargé');
