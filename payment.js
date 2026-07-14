// ===== PAIEMENT MANUEL MOBILE MONEY =====

let paymentInstructions = null;

// Injecter le HTML du modal de paiement manuel
function injectPaymentModal() {
    const paymentModal = document.getElementById('payment-modal');
    if (!paymentModal) return;
    
    paymentModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closePaymentModal()">&times;</span>
            
            <!-- Étape 1: Instructions -->
            <div id="payment-instructions-section">
                <h2 data-i18n="premiumTitle">${t('💰 Passer en Premium')}</h2>
                <p class="modal-subtitle">Débloquez toutes les fonctionnalités pour 1000 FC</p>
                
                <div class="premium-features-list">
                    <div class="feature-item">✅ Accès illimité aux leçons</div>
                    <div class="feature-item">✅ Dictionnaire complet</div>
                    <div class="feature-item">✅ Traducteur professionnel</div>
                    <div class="feature-item">✅ Support prioritaire</div>
                </div>

                <div class="payment-instructions-box">
                    <h3>📱 Instructions de paiement</h3>
                    <p style="margin-bottom: 16px;">Envoyez <strong>1000 FC</strong> à l'un de ces numéros :</p>
                    
                    <div class="payment-number-box">
                        <span class="operator-icon">🟡</span>
                        <div>
                            <div class="operator-name">Airtel Money</div>
                            <div class="operator-number" id="airtel-number">+243 99 123 4567</div>
                        </div>
                        <button class="copy-btn" onclick="copyNumber('airtel')">📋</button>
                    </div>

                    <div class="payment-number-box">
                        <span class="operator-icon">🟠</span>
                        <div>
                            <div class="operator-name">Orange Money</div>
                            <div class="operator-number" id="orange-number">+243 84 123 4567</div>
                        </div>
                        <button class="copy-btn" onclick="copyNumber('orange')">📋</button>
                    </div>

                    <div class="payment-number-box">
                        <span class="operator-icon">🔴</span>
                        <div>
                            <div class="operator-name">M-Pesa (Vodacom)</div>
                            <div class="operator-number" id="mpesa-number">+243 81 123 4567</div>
                        </div>
                        <button class="copy-btn" onclick="copyNumber('mpesa')">📋</button>
                    </div>
                </div>

                <!-- 🆕 NOUVEAU : Cadre ÉTAPES -->
                <div class="steps-guide-box">
                    <h3>📋 ÉTAPES À SUIVRE</h3>
                    <div class="step-item">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <strong>Copier le numéro</strong>
                            <p>Cliquez sur le petit bouton 📋 à droite du numéro du réseau que vous souhaitez utiliser pour copier automatiquement le numéro</p>
                        </div>
                    </div>

                    <div class="step-item">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <strong>Effectuer le paiement</strong>
                            <p>Allez dans votre application Mobile Money sur votre téléphone, effectuez la transaction de <strong>1000 FC</strong> et collez le numéro copié</p>
                        </div>
                    </div>

                    <div class="step-item">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <strong>Récupérer le Transaction ID</strong>
                            <p>Patientez le message de confirmation du réseau et copiez le Transaction ID :</p>
                            <ul class="transaction-examples">
                                <li><strong>Airtel :</strong> TID:MP260308.1429.H23086</li>
                                <li><strong>Orange :</strong> Ref:MP250325.1429.H33678</li>
                                <li><strong>Vodacom :</strong> Transaction:MP240520.1042.C45821</li>
                            </ul>
                        </div>
                    </div>

                    <div class="step-item">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <strong>Revenir sur l'App</strong>
                            <p>Cliquez sur <span class="highlight-btn">"J'ai effectué le paiement"</span> ci-dessous. Un formulaire s'ouvrira pour entrer le Transaction ID, votre numéro de téléphone et le réseau utilisé</p>
                        </div>
                    </div>

                    <div class="step-item">
                        <div class="step-number">5</div>
                        <div class="step-content">
                            <strong>Accès Premium immédiat</strong>
                            <p>Après validation, vous aurez un <strong>accès Premium temporaire (48h)</strong> pendant que l'équipe Kivirafacile vérifie votre paiement. Une fois approuvé, votre Premium devient permanent ✅</p>
                        </div>
                    </div>
                </div>

                <div class="warning-box">
                    <strong>⚠️ IMPORTANT</strong>
                    <ul style="margin: 8px 0 0 20px; font-size: 13px;">
                        <li>Le montant EXACT doit être 1000 FC</li>
                        <li>Gardez bien le SMS de confirmation de votre opérateur</li>
                        <li>La vérification prend généralement moins de 24h</li>
                        <li><strong style="color:#e30613">⚠️ FRAUDE = BLOCAGE DÉFINITIF de votre compte, numéro et appareil</strong></li>
                    </ul>
                </div>

                <button class="btn-primary" onclick="showTransactionForm()">
                    J'ai effectué le paiement →
                </button>
            </div>

            <!-- Étape 2: Formulaire Transaction ID -->
            <div id="transaction-form-section" style="display: none;">
                <h2>📝 Entrez vos informations de paiement</h2>
                <p class="modal-subtitle">Remplissez les informations de votre transaction</p>

                <div id="transaction-error" class="error-message" style="display: none;"></div>

                <form onsubmit="submitTransaction(event)">
                    <div class="form-group">
                        <label for="transaction-id">Transaction ID</label>
                        <input 
                            type="text" 
                            id="transaction-id" 
                            required 
                            placeholder="Ex: MP240317.1234.A12345"
                            style="text-transform: uppercase;"
                        >
                        <small>Le code reçu par SMS de votre opérateur</small>
                    </div>

                    <div class="form-group">
                        <label for="payment-phone">Votre numéro Mobile Money</label>
                        <input 
                            type="tel" 
                            id="payment-phone" 
                            required 
                            placeholder="+243 99 123 4567"
                        >
                        <small>Le numéro depuis lequel vous avez envoyé l'argent</small>
                    </div>

                    <div class="form-group">
                        <label for="payment-operator">Opérateur utilisé</label>
                        <select id="payment-operator" required style="width: 100%; padding: 12px; border: 2px solid #e1e8ed; border-radius: 8px; font-size: 15px;">
                            <option value="">-- Choisissez --</option>
                            <option value="airtel">Airtel Money</option>
                            <option value="orange">Orange Money</option>
                            <option value="mpesa">M-Pesa (Vodacom)</option>
                        </select>
                    </div>

                    <button type="submit" class="btn-premium" id="submit-transaction-btn">
                        Valider et obtenir l'accès
                    </button>

                    <button type="button" class="btn-secondary" onclick="backToInstructions()">
                        ← Retour
                    </button>
                </form>
            </div>

            <!-- Étape 3: Confirmation -->
            <div id="transaction-success-section" style="display: none;">
                <div class="payment-status">
                    <div class="success-icon">✓</div>
                    <h3>Transaction soumise !</h3>
                    <p>Vous avez maintenant un <strong>accès premium temporaire</strong> de 48h.</p>
                    <p>Nous vérifions votre paiement et vous confirmerons l'accès permanent sous 24h maximum.</p>
                    
                    <div style="background: #f0f9ff; border: 2px solid #0ea5e9; border-radius: 8px; padding: 16px; margin: 20px 0; text-align: left;">
                        <div style="font-weight: 600; color: #0369a1; margin-bottom: 8px;">📊 Statut :</div>
                        <div style="color: #666;">En cours de vérification...</div>
                        <div style="font-size: 12px; color: #999; margin-top: 8px;">
                            Transaction ID: <span id="submitted-transaction-id" style="font-family: monospace;"></span>
                        </div>
                    </div>

                    <button onclick="closePaymentModal()" class="btn-primary">
                        Profiter de l'accès premium
                    </button>
                </div>
            </div>
        </div>
    `;
}

window.addEventListener('languageChanged', function() {
    // Re-créer la modal si elle est ouverte
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        closePremiumModal();
        showPremiumModal();
    }
});
// Afficher le modal de paiement
function showPaymentModal() {
    const paymentModal = document.getElementById('payment-modal');
    if (!paymentModal) {
        console.error('Element payment-modal manquant');
        return;
    }
    
    injectPaymentModal();
    paymentModal.style.display = 'flex';
    loadPaymentInstructions();
}

// Charger les instructions de paiement
async function loadPaymentInstructions() {
    try {
        const data = await apiRequest('/payments/instructions');
        paymentInstructions = data.config;
        
        // Mettre à jour les numéros affichés
        if (paymentInstructions) {
            document.getElementById('airtel-number').textContent = paymentInstructions.airtelNumber;
            document.getElementById('orange-number').textContent = paymentInstructions.orangeNumber;
            document.getElementById('mpesa-number').textContent = paymentInstructions.mpesaNumber;
        }
    } catch (error) {
        console.error('Erreur chargement instructions:', error);
    }
}

// Copier un numéro
function copyNumber(operator) {
    let number;
    if (operator === 'airtel') {
        number = document.getElementById('airtel-number').textContent;
    } else if (operator === 'orange') {
        number = document.getElementById('orange-number').textContent;
    } else if (operator === 'mpesa') {
        number = document.getElementById('mpesa-number').textContent;
    }
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(number).then(() => {
            alert('📋 Numéro copié : ' + number);
        });
    } else {
        alert('Numéro : ' + number);
    }
}

// Afficher le formulaire Transaction ID
function showTransactionForm() {
    document.getElementById('payment-instructions-section').style.display = 'none';
    document.getElementById('transaction-form-section').style.display = 'block';
}

// Retour aux instructions
function backToInstructions() {
    document.getElementById('transaction-form-section').style.display = 'none';
    document.getElementById('payment-instructions-section').style.display = 'block';
    document.getElementById('transaction-id').value = '';
    document.getElementById('payment-phone').value = '';
    document.getElementById('payment-operator').value = '';
}

// Soumettre le Transaction ID
async function submitTransaction(event) {
    event.preventDefault();
    
    const transactionId = document.getElementById('transaction-id').value.trim();
    const phoneNumber = document.getElementById('payment-phone').value.trim();
    const operator = document.getElementById('payment-operator').value;
    const errorDiv = document.getElementById('transaction-error');
    const submitBtn = document.getElementById('submit-transaction-btn');
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Vérification...';
    errorDiv.style.display = 'none';
    
    try {
        const data = await apiRequest('/payments/submit', {
            method: 'POST',
            body: JSON.stringify({
                transactionId,
                phoneNumber,
                operator
            })
        });
        
        // Succès : Afficher la confirmation
        document.getElementById('transaction-form-section').style.display = 'none';
        document.getElementById('transaction-success-section').style.display = 'block';
        document.getElementById('submitted-transaction-id').textContent = transactionId;
        
        // Mettre à jour l'utilisateur dans la session
        if (currentUser) {
    currentUser.isPremium = true;
    currentUser.premiumExpiresAt = data.premium.expiresAt;
    localStorage.setItem(CONFIG.STORAGE_KEYS.USER, JSON.stringify(currentUser));
    updateUserInterface(currentUser);

    // Réinitialiser le blocker avec le nouveau statut premium
    if (typeof resetPremiumBlocker === 'function') {
        setTimeout(resetPremiumBlocker, 300);
    }

    // Supprimer les badges premium sur les catégories
    document.querySelectorAll('.premium-badge-lesson').forEach(b => b.remove());
        }
        
    } catch (error) {
        errorDiv.textContent = error.message;
        errorDiv.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Valider et obtenir l\'accès';
    }
}
function closePaymentModal() {
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) {
        paymentModal.style.display = 'none';
    }
    // PAS de reload — on met à jour en mémoire
    // Le premium-blocker sera réinitialisé via resetPremiumBlocker()
}
// Après avoir mis à jour currentUser.isPremium = true
function onPaymentSuccess() {
    if (currentUser) {
        currentUser.isPremium = true;
        localStorage.setItem(CONFIG.STORAGE_KEYS.USER, JSON.stringify(currentUser));
    }
    localStorage.setItem('userPremium', 'true');
    window.dispatchEvent(new CustomEvent('premiumStatusChanged'));

    // Réinitialiser le blocker
    if (typeof resetPremiumBlocker === 'function') {
        setTimeout(resetPremiumBlocker, 300);
    }

    // Supprimer badges premium
    document.querySelectorAll('.premium-badge-lesson').forEach(b => b.remove());

    closePaymentModal();
}

// Fermer le modal en cliquant à l'extérieur
window.addEventListener('click', function(event) {
    const modal = document.getElementById('payment-modal');
    if (event.target === modal) {
        closePaymentModal();
    }
});
