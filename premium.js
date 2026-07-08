// ==================== SYSTÈME PREMIUM COMPLET ====================
// Fichier premium.js - À inclure dans votre HTML avec <script src="premium.js"></script>
// Supabase : Authentification + Codes Premium
// LocalStorage : Statistiques + Progression

console.log('🔄 Chargement du système Premium...');

// ==================== 1. DEVICE FINGERPRINTING ====================

function getDeviceFingerprint() {
    // Créer un ID unique pour cet appareil
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('device', 2, 2);
    
    const fingerprint = {
        canvas: canvas.toDataURL(),
        screen: `${screen.width}x${screen.height}x${screen.colorDepth}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        platform: navigator.platform,
        hardware: navigator.hardwareConcurrency || 0,
        userAgent: navigator.userAgent.substring(0, 100)
    };
    
    return hashCode(JSON.stringify(fingerprint));
}

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
}

// ==================== 2. VALIDATION DU CODE ====================

async function activatePremiumWithCode(code) {
    try {
        code = code.trim().toUpperCase();
        
        if (!code.match(/^KIVI-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/)) {
            return { 
                success: false, 
                error: 'Format invalide. Format : KIVI-XXXX-XXXX-XXXX' 
            };
        }
        
        const { data: codeData, error: codeError } = await supabase
            .from('activation_codes')
            .select('*')
            .eq('code', code)
            .single();
        
        if (codeError || !codeData) {
            return { success: false, error: 'Code invalide ou inexistant' };
        }
        
        if (codeData.used) {
            return { success: false, error: 'Ce code a déjà été utilisé' };
        }
        
        const deviceId = getDeviceFingerprint();
        
        const { error: updateError } = await supabase
            .from('activation_codes')
            .update({
                used: true,
                used_by_user_id: currentUser.id,
                used_by_device_id: deviceId,
                used_at: new Date().toISOString()
            })
            .eq('code', code)
            .eq('used', false);
        
        if (updateError) {
            return { 
                success: false, 
                error: 'Erreur lors de l\'activation' 
            };
        }
        
        localStorage.setItem('premium_activated', 'true');
        localStorage.setItem('premium_code', code);
        localStorage.setItem('premium_device_id', deviceId);
        localStorage.setItem('premium_activated_at', new Date().toISOString());
        
        console.log('✅ Premium activé !');
        return { success: true, message: 'Premium activé avec succès ! 🎉' };
        
    } catch (error) {
        console.error('Erreur activation:', error);
        return { success: false, error: 'Erreur technique' };
    }
}

// ==================== 3. VÉRIFIER LE STATUT PREMIUM ====================

async function isPremium() {
    if (!currentUser) return false;
    
    const cachedPremium = localStorage.getItem('premium_activated') === 'true';
    const cachedCode = localStorage.getItem('premium_code');
    const cachedDeviceId = localStorage.getItem('premium_device_id');
    const currentDeviceId = getDeviceFingerprint();
    
    if (cachedPremium && cachedDeviceId !== currentDeviceId) {
        console.warn('⚠️ Device ID mismatch');
        localStorage.removeItem('premium_activated');
        localStorage.removeItem('premium_code');
        return false;
    }
    
    const lastCheck = localStorage.getItem('premium_last_check');
    const now = Date.now();
    const shouldCheck = !lastCheck || (now - lastCheck > 24 * 60 * 60 * 1000);
    
    if (shouldCheck && cachedCode) {
        try {
            const { data, error } = await supabase
                .from('activation_codes')
                .select('used, used_by_device_id')
                .eq('code', cachedCode)
                .single();
            
            if (data && data.used && data.used_by_device_id === currentDeviceId) {
                localStorage.setItem('premium_activated', 'true');
                localStorage.setItem('premium_last_check', now.toString());
                return true;
            } else {
                localStorage.removeItem('premium_activated');
                localStorage.removeItem('premium_code');
                return false;
            }
        } catch (error) {
            console.error('Erreur vérification:', error);
            return cachedPremium;
        }
    }
    
    return cachedPremium;
}

// ==================== 4. INTERFACE UTILISATEUR ====================

function showActivationCodeModal() {
    const existingModal = document.getElementById('activation-code-modal');
    if (existingModal) existingModal.remove();
    
    const modal = document.createElement('div');
    modal.id = 'activation-code-modal';
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                    background: rgba(0,0,0,0.8); z-index: 10000; display: flex; 
                    align-items: center; justify-content: center;">
            <div style="background: white; padding: 30px; border-radius: 15px; 
                        max-width: 400px; width: 90%;">
                <h2 style="margin: 0 0 20px 0; color: #333;">
                    🎉 Activer Premium
                </h2>
                <p style="color: #666; margin-bottom: 20px;">
                    Entrez votre code d'activation pour débloquer toutes les fonctionnalités !
                </p>
                <input type="text" 
                       id="activation-code-input" 
                       placeholder="KIVI-XXXX-XXXX-XXXX"
                       style="width: 100%; padding: 12px; font-size: 16px; 
                              border: 2px solid #ddd; border-radius: 8px; 
                              margin-bottom: 15px; text-transform: uppercase; 
                              letter-spacing: 1px; font-family: monospace;">
                <div id="activation-error" style="color: #d32f2f; margin-bottom: 15px; 
                                                   font-size: 14px; display: none;"></div>
                <div id="activation-success" style="color: #388e3c; margin-bottom: 15px; 
                                                     font-size: 14px; display: none;"></div>
                <div style="display: flex; gap: 10px;">
                    <button id="activate-btn" 
                            style="flex: 1; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                                   color: white; border: none; border-radius: 8px; 
                                   font-size: 16px; font-weight: bold; cursor: pointer;">
                        Activer
                    </button>
                    <button id="cancel-activation-btn" 
                            style="padding: 12px 20px; background: #f5f5f5; color: #666; 
                                   border: none; border-radius: 8px; cursor: pointer;">
                        Annuler
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const input = document.getElementById('activation-code-input');
    const activateBtn = document.getElementById('activate-btn');
    const cancelBtn = document.getElementById('cancel-activation-btn');
    const errorDiv = document.getElementById('activation-error');
    const successDiv = document.getElementById('activation-success');
    
    setTimeout(() => input.focus(), 100);
    
    input.addEventListener('input', (e) => {
        let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (value.length > 4) value = value.slice(0, 4) + '-' + value.slice(4);
        if (value.length > 9) value = value.slice(0, 9) + '-' + value.slice(9);
        if (value.length > 14) value = value.slice(0, 14) + '-' + value.slice(14);
        if (value.length > 19) value = value.slice(0, 19);
        e.target.value = value;
    });
    
    activateBtn.addEventListener('click', async () => {
        const code = input.value.trim();
        
        if (!code) {
            errorDiv.textContent = 'Veuillez entrer un code';
            errorDiv.style.display = 'block';
            successDiv.style.display = 'none';
            return;
        }
        
        activateBtn.disabled = true;
        activateBtn.textContent = 'Activation...';
        errorDiv.style.display = 'none';
        successDiv.style.display = 'none';
        
        const result = await activatePremiumWithCode(code);
        
        if (result.success) {
            successDiv.textContent = result.message;
            successDiv.style.display = 'block';
            setTimeout(() => {
                modal.remove();
                location.reload();
            }, 2000);
        } else {
            errorDiv.textContent = result.error;
            errorDiv.style.display = 'block';
            activateBtn.disabled = false;
            activateBtn.textContent = 'Activer';
        }
    });
    
    cancelBtn.addEventListener('click', () => modal.remove());
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') activateBtn.click();
    });
}

// ==================== 5. GESTION DES STATISTIQUES ====================

function initializeLocalStats() {
    if (!localStorage.getItem('user_stats')) {
        localStorage.setItem('user_stats', JSON.stringify({
            dictionary_searches: 0,
            translations_count: 0,
            lessons_completed: 0,
            words_learned: 0,
            total_minutes: 0,
            current_streak: 0,
            last_activity: null
        }));
    }
}

function getUserStats() {
    const stats = localStorage.getItem('user_stats');
    return stats ? JSON.parse(stats) : null;
}

function updateUserStats(field, increment = 1) {
    const stats = getUserStats();
    if (stats) {
        stats[field] = (stats[field] || 0) + increment;
        stats.last_activity = new Date().toISOString();
        localStorage.setItem('user_stats', JSON.stringify(stats));
    }
}

function getUserUsage() {
    const stats = getUserStats();
    return {
        dictionary_searches: stats?.dictionary_searches || 0,
        translations_count: stats?.translations_count || 0,
        lessons_accessed: stats?.lessons_completed || 0
    };
}

async function incrementUsage(field) {
    updateUserStats(field, 1);
    console.log(`📊 ${field} incrémenté`);
}

// ==================== 6. AFFICHAGE BADGE ====================

function displayPremiumBadge() {
    const existingBadge = document.getElementById('premium-badge');
    if (existingBadge) existingBadge.remove();
    
    const badge = document.createElement('div');
    badge.id = 'premium-badge';
    badge.innerHTML = '💎 Premium';
    badge.style.cssText = `
        position: fixed;
        top: 70px;
        right: 20px;
        background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
        color: #333;
        padding: 8px 15px;
        border-radius: 20px;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
        z-index: 1000;
        animation: premium-pulse 2s infinite;
    `;
    document.body.appendChild(badge);
}

// ==================== 7. INITIALISATION ====================

window.addEventListener('load', async () => {
    initializeLocalStats();
    
    if (typeof currentUser !== 'undefined' && currentUser) {
        const premium = await isPremium();
        if (premium) {
            console.log('✅ Utilisateur Premium');
            document.body.classList.add('premium-user');
            displayPremiumBadge();
        } else {
            console.log('ℹ️ Utilisateur gratuit');
        }
    }
});

console.log('✅ Système Premium initialisé');
