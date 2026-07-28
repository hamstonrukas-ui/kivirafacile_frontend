// ============================================================
// QUIZ ÉCLAIR — Kivira ⇄ Français
// Jeu gratuit, réutilise le dictionnaire existant (aucun
// nouveau contenu à créer). Autonome comme les modals de
// paiement : injecte son propre overlay, aucune modification
// du système de navigation existant nécessaire.
// ============================================================

const QUIZ_CONFIG = {
    questionCount: 10,
    apiBase: (typeof CONFIG !== 'undefined' && CONFIG.API_URL) ? CONFIG.API_URL : '/api'
};

let quizState = {
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false
};

// ── Streak (série de jours) — stocké en local, simple compteur ──
const QUIZ_STREAK_KEY = 'kivira_quiz_streak';
const QUIZ_LAST_PLAYED_KEY = 'kivira_quiz_last_played';

function updateQuizStreak() {
    const today = new Date().toDateString();
    const lastPlayed = localStorage.getItem(QUIZ_LAST_PLAYED_KEY);
    let streak = parseInt(localStorage.getItem(QUIZ_STREAK_KEY) || '0', 10);

    if (lastPlayed === today) {
        return streak; // déjà joué aujourd'hui, streak inchangée
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastPlayed === yesterday.toDateString()) {
        streak += 1; // jour consécutif
    } else {
        streak = 1; // série cassée ou premier jour
    }

    localStorage.setItem(QUIZ_STREAK_KEY, String(streak));
    localStorage.setItem(QUIZ_LAST_PLAYED_KEY, today);
    return streak;
}

function getQuizStreak() {
    return parseInt(localStorage.getItem(QUIZ_STREAK_KEY) || '0', 10);
}

// ── Injection de l'overlay (une seule fois) ──
function injectQuizModal() {
    if (document.getElementById('quiz-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'quiz-modal';
    modal.style.cssText = `
        position: fixed; inset: 0; z-index: 99999;
        background: rgba(20,12,41,0.75);
        display: none; align-items: center; justify-content: center;
        padding: 16px;
    `;
    modal.innerHTML = `
        <div style="background:#fff;border-radius:20px;max-width:440px;width:100%;
                    max-height:90vh;overflow-y:auto;padding:0;box-shadow:0 20px 60px rgba(0,0,0,0.4);">

            <div style="background:linear-gradient(135deg,#7C3AED,#5B21B6);padding:20px 24px;border-radius:20px 20px 0 0;color:#fff;position:relative;">
                <button id="quiz-close-btn" style="position:absolute;top:14px;right:16px;background:rgba(255,255,255,0.2);
                    border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;">✕</button>
                <div style="font-size:14px;opacity:0.85;margin-bottom:4px">🎮 Quiz éclair Kivira</div>
                <div id="quiz-progress-label" style="font-size:13px;opacity:0.9">Question 1 / ${QUIZ_CONFIG.questionCount}</div>
                <div style="background:rgba(255,255,255,0.25);border-radius:99px;height:6px;margin-top:8px;overflow:hidden">
                    <div id="quiz-progress-bar" style="background:#F2B705;height:100%;width:0%;transition:width .3s"></div>
                </div>
            </div>

            <div id="quiz-body" style="padding:28px 24px;">
                <!-- contenu injecté dynamiquement -->
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('quiz-close-btn').addEventListener('click', closeQuiz);
}

function closeQuiz() {
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.style.display = 'none';
}

// ── Démarrer une partie ──
async function startQuiz() {
    injectQuizModal();
    const modal = document.getElementById('quiz-modal');
    const body = document.getElementById('quiz-body');
    modal.style.display = 'flex';

    body.innerHTML = `<div style="text-align:center;padding:40px 0;color:#6b7280">⏳ Préparation du quiz...</div>`;

    try {
        const res = await fetch(`${QUIZ_CONFIG.apiBase}/dictionary/quiz?count=${QUIZ_CONFIG.questionCount}`);
        const data = await res.json();

        if (!data.success || !data.questions || data.questions.length === 0) {
            body.innerHTML = `<div style="text-align:center;padding:40px 0;color:#b91c1c">
                ❌ Impossible de charger le quiz pour le moment. Réessayez plus tard.
            </div>`;
            return;
        }

        quizState = { questions: data.questions, currentIndex: 0, score: 0, answered: false };
        renderQuizQuestion();

    } catch (err) {
        body.innerHTML = `<div style="text-align:center;padding:40px 0;color:#b91c1c">❌ Erreur de connexion.</div>`;
    }
}

// ── Afficher la question courante ──
function renderQuizQuestion() {
    const body = document.getElementById('quiz-body');
    const q = quizState.questions[quizState.currentIndex];
    quizState.answered = false;

    document.getElementById('quiz-progress-label').textContent =
        `Question ${quizState.currentIndex + 1} / ${quizState.questions.length} · Score : ${quizState.score}`;
    document.getElementById('quiz-progress-bar').style.width =
        `${(quizState.currentIndex / quizState.questions.length) * 100}%`;

    body.innerHTML = `
        <div style="text-align:center;margin-bottom:24px">
            <div style="font-size:13px;color:#6b7280;margin-bottom:8px">Que signifie ce mot en français ?</div>
            <div style="font-size:32px;font-weight:800;color:#1f1147">${q.kivira}</div>
        </div>
        <div id="quiz-options" style="display:flex;flex-direction:column;gap:10px;"></div>
        <div id="quiz-feedback" style="text-align:center;margin-top:16px;font-weight:600;min-height:24px"></div>
    `;

    const optionsEl = document.getElementById('quiz-options');
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.className = 'quiz-option-btn';
        btn.style.cssText = `
            padding:14px 16px;border-radius:12px;border:2px solid #e5e7eb;
            background:#fafafa;font-size:15px;font-weight:600;color:#1f1147;
            cursor:pointer;text-align:left;transition:all .15s;
        `;
        btn.addEventListener('click', () => selectQuizAnswer(opt, btn));
        optionsEl.appendChild(btn);
    });
}

// ── Traiter une réponse ──
function selectQuizAnswer(selected, btnEl) {
    if (quizState.answered) return;
    quizState.answered = true;

    const q = quizState.questions[quizState.currentIndex];
    const isCorrect = selected === q.correct;
    const feedback = document.getElementById('quiz-feedback');
    const allBtns = document.querySelectorAll('.quiz-option-btn');

    allBtns.forEach(btn => {
        btn.style.cursor = 'default';
        if (btn.textContent === q.correct) {
            btn.style.background = '#d1fae5';
            btn.style.borderColor = '#10b981';
        } else if (btn === btnEl && !isCorrect) {
            btn.style.background = '#fee2e2';
            btn.style.borderColor = '#ef4444';
        }
    });

    if (isCorrect) {
        quizState.score++;
        feedback.textContent = '✅ Bonne réponse !';
        feedback.style.color = '#10b981';
    } else {
        feedback.textContent = `❌ La bonne réponse était : ${q.correct}`;
        feedback.style.color = '#ef4444';
    }

    setTimeout(() => {
        quizState.currentIndex++;
        if (quizState.currentIndex < quizState.questions.length) {
            renderQuizQuestion();
        } else {
            renderQuizResults();
        }
    }, 1400);
}

// ── Envoyer le résultat au serveur (utilisateur connecté uniquement) ──
async function submitQuizResultToServer(score, total) {
    try {
        const tokenKey = (typeof CONFIG !== 'undefined' && CONFIG.STORAGE_KEYS && CONFIG.STORAGE_KEYS.TOKEN)
            ? CONFIG.STORAGE_KEYS.TOKEN : 'token';
        const token = localStorage.getItem(tokenKey);
        if (!token) return; // pas connecté : le score reste local uniquement (streak)

        await fetch(`${QUIZ_CONFIG.apiBase}/quiz/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ score, total })
        });
    } catch (err) {
        console.warn('Résultat quiz non sauvegardé (hors-ligne ?):', err.message);
    }
}

// ── Écran de résultats ──
function renderQuizResults() {
    const body = document.getElementById('quiz-body');
    const total = quizState.questions.length;
    const score = quizState.score;
    const streak = updateQuizStreak();

    submitQuizResultToServer(score, total);

    document.getElementById('quiz-progress-bar').style.width = '100%';
    document.getElementById('quiz-progress-label').textContent = 'Terminé !';

    let message = '';
    if (score === total) message = '🏆 Parfait ! Tu maîtrises ces mots.';
    else if (score >= total * 0.7) message = '🎉 Très bien joué !';
    else if (score >= total * 0.4) message = '💪 Pas mal, continue à t\'entraîner !';
    else message = '📚 Encore un peu d\'entraînement et ça va venir !';

    const shareText = encodeURIComponent(
        `🎮 J'ai fait ${score}/${total} au Quiz Kivira sur Kivirafacile ! 🔥 ${streak} jour(s) de suite.\nEssaie de me battre 👉 https://kivirafacilee.vercel.app`
    );

    body.innerHTML = `
        <div style="text-align:center">
            <div style="font-size:48px;margin-bottom:8px">${score === total ? '🏆' : '🎯'}</div>
            <div style="font-size:28px;font-weight:800;color:#1f1147;margin-bottom:4px">${score} / ${total}</div>
            <div style="color:#6b7280;margin-bottom:4px">${message}</div>
            <div style="display:inline-block;background:#fef3c7;color:#92400e;padding:6px 14px;border-radius:99px;font-size:13px;font-weight:600;margin-top:8px">
                🔥 ${streak} jour${streak > 1 ? 's' : ''} de suite
            </div>

            <div style="display:flex;flex-direction:column;gap:10px;margin-top:24px">
                <a href="https://wa.me/?text=${shareText}" target="_blank" rel="noopener"
                    style="display:block;padding:14px;border-radius:12px;background:#25D366;color:#fff;
                    font-weight:700;text-decoration:none;">
                    📤 Partager mon score sur WhatsApp
                </a>
                <button onclick="startQuiz()" style="padding:14px;border-radius:12px;border:2px solid #7C3AED;
                    background:#fff;color:#7C3AED;font-weight:700;cursor:pointer;">
                    🔄 Rejouer
                </button>
                <button onclick="showQuizHistory()" style="padding:12px;border-radius:12px;border:none;
                    background:transparent;color:#7C3AED;font-weight:600;cursor:pointer;text-decoration:underline;">
                    📊 Voir mon historique
                </button>
                <button onclick="closeQuiz()" style="padding:12px;border-radius:12px;border:none;
                    background:transparent;color:#6b7280;font-weight:600;cursor:pointer;">
                    Fermer
                </button>
            </div>
        </div>
    `;
}

// ── Écran d'historique ──
async function showQuizHistory() {
    const body = document.getElementById('quiz-body');
    document.getElementById('quiz-progress-label').textContent = 'Mon historique';
    document.getElementById('quiz-progress-bar').style.width = '100%';

    body.innerHTML = `<div style="text-align:center;padding:40px 0;color:#6b7280">⏳ Chargement...</div>`;

    const tokenKey = (typeof CONFIG !== 'undefined' && CONFIG.STORAGE_KEYS && CONFIG.STORAGE_KEYS.TOKEN)
        ? CONFIG.STORAGE_KEYS.TOKEN : 'token';
    const token = localStorage.getItem(tokenKey);

    if (!token) {
        body.innerHTML = `
            <div style="text-align:center;padding:20px 0">
                <p style="color:#6b7280;margin-bottom:20px">Connecte-toi pour sauvegarder et retrouver l'historique de tes quiz.</p>
                <button onclick="startQuiz()" style="padding:12px 20px;border-radius:12px;border:none;background:#7C3AED;color:#fff;font-weight:700;cursor:pointer">← Retour</button>
            </div>`;
        return;
    }

    try {
        const res = await fetch(`${QUIZ_CONFIG.apiBase}/quiz/history?limit=20`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!data.success) {
            body.innerHTML = `<div style="text-align:center;padding:30px 0;color:#b91c1c">❌ Impossible de charger l'historique.</div>`;
            return;
        }

        const stats = data.stats || {};
        const gamesPlayed = parseInt(stats.games_played) || 0;
        const bestPercent = parseInt(stats.best_percent) || 0;
        const totalCorrect = parseInt(stats.total_correct) || 0;
        const totalQuestions = parseInt(stats.total_questions) || 0;
        const avgPercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

        const rowsHtml = (data.history || []).map(h => {
            const date = new Date(h.playedat || h.playedAt);
            const dateStr = date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
            const timeStr = date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
            const percent = Math.round((h.score / h.total) * 100);
            const color = percent >= 70 ? '#10b981' : percent >= 40 ? '#f59e0b' : '#ef4444';
            return `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px solid #f0f0f0">
                    <div>
                        <div style="font-weight:600;color:#1f1147">${h.score} / ${h.total}</div>
                        <div style="font-size:12px;color:#9ca3af">${dateStr} à ${timeStr}</div>
                    </div>
                    <div style="font-weight:700;color:${color}">${percent}%</div>
                </div>
            `;
        }).join('') || `<div style="text-align:center;color:#9ca3af;padding:20px 0">Aucune partie enregistrée pour le moment.</div>`;

        body.innerHTML = `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px">
                <div style="background:#f5f3ff;border-radius:12px;padding:14px;text-align:center">
                    <div style="font-size:22px;font-weight:800;color:#7C3AED">${gamesPlayed}</div>
                    <div style="font-size:12px;color:#6b7280">parties jouées</div>
                </div>
                <div style="background:#f5f3ff;border-radius:12px;padding:14px;text-align:center">
                    <div style="font-size:22px;font-weight:800;color:#7C3AED">${bestPercent}%</div>
                    <div style="font-size:12px;color:#6b7280">meilleur score</div>
                </div>
                <div style="background:#f5f3ff;border-radius:12px;padding:14px;text-align:center;grid-column:span 2">
                    <div style="font-size:22px;font-weight:800;color:#7C3AED">${avgPercent}%</div>
                    <div style="font-size:12px;color:#6b7280">moyenne globale (${totalCorrect}/${totalQuestions} bonnes réponses au total)</div>
                </div>
            </div>

            <div style="max-height:280px;overflow-y:auto;margin-bottom:16px">
                ${rowsHtml}
            </div>

            <div style="display:flex;gap:10px">
                <button onclick="startQuiz()" style="flex:1;padding:12px;border-radius:12px;border:2px solid #7C3AED;background:#fff;color:#7C3AED;font-weight:700;cursor:pointer">🔄 Rejouer</button>
                <button onclick="closeQuiz()" style="flex:1;padding:12px;border-radius:12px;border:none;background:#7C3AED;color:#fff;font-weight:700;cursor:pointer">Fermer</button>
            </div>
        `;
    } catch (err) {
        body.innerHTML = `<div style="text-align:center;padding:30px 0;color:#b91c1c">❌ Erreur de connexion.</div>`;
    }
}

// ── Charger les stats dans la page "Mes Progrès" (thème sombre) ──
async function loadQuizStatsIntoProgress() {
    const container = document.getElementById('quizStatsList');
    if (!container) return;

    const tokenKey = (typeof CONFIG !== 'undefined' && CONFIG.STORAGE_KEYS && CONFIG.STORAGE_KEYS.TOKEN)
        ? CONFIG.STORAGE_KEYS.TOKEN : 'token';
    const token = localStorage.getItem(tokenKey);
    const streak = getQuizStreak();

    if (!token) {
        container.innerHTML = `
            <p style="color:rgba(255,255,255,0.5);text-align:center;padding:10px 0">
                Connecte-toi pour sauvegarder tes scores.
            </p>
            <button onclick="startQuiz()" style="width:100%;padding:12px;border-radius:10px;border:none;background:#7C3AED;color:#fff;font-weight:700;cursor:pointer">
                🎮 Jouer au quiz
            </button>
        `;
        return;
    }

    try {
        const res = await fetch(`${QUIZ_CONFIG.apiBase}/quiz/history?limit=5`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!data.success) {
            container.innerHTML = `<p style="color:rgba(255,255,255,0.5);text-align:center;padding:10px 0">Impossible de charger les statistiques.</p>`;
            return;
        }

        const stats = data.stats || {};
        const gamesPlayed = parseInt(stats.games_played) || 0;
        const bestPercent = parseInt(stats.best_percent) || 0;
        const totalCorrect = parseInt(stats.total_correct) || 0;
        const totalQuestions = parseInt(stats.total_questions) || 0;
        const avgPercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

        if (gamesPlayed === 0) {
            container.innerHTML = `
                <p style="color:rgba(255,255,255,0.5);text-align:center;padding:10px 0">
                    Aucune partie jouée pour le moment.
                </p>
                <button onclick="startQuiz()" style="width:100%;padding:12px;border-radius:10px;border:none;background:#7C3AED;color:#fff;font-weight:700;cursor:pointer">
                    🎮 Jouer au quiz
                </button>
            `;
            return;
        }

        const recentHtml = (data.history || []).slice(0, 5).map(h => {
            const date = new Date(h.playedat || h.playedAt);
            const dateStr = date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
            const percent = Math.round((h.score / h.total) * 100);
            const color = percent >= 70 ? '#34d399' : percent >= 40 ? '#fbbf24' : '#f87171';
            return `
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.08)">
                    <span style="color:rgba(255,255,255,0.7);font-size:13px">${dateStr}</span>
                    <span style="color:${color};font-weight:700;font-size:13px">${h.score}/${h.total} (${percent}%)</span>
                </div>
            `;
        }).join('');

        container.innerHTML = `
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px">
                <div style="text-align:center">
                    <div style="font-size:20px;font-weight:800;color:#a78bfa">${gamesPlayed}</div>
                    <div style="font-size:11px;color:rgba(255,255,255,0.5)">parties</div>
                </div>
                <div style="text-align:center">
                    <div style="font-size:20px;font-weight:800;color:#a78bfa">${avgPercent}%</div>
                    <div style="font-size:11px;color:rgba(255,255,255,0.5)">moyenne</div>
                </div>
                <div style="text-align:center">
                    <div style="font-size:20px;font-weight:800;color:#a78bfa">🔥${streak}</div>
                    <div style="font-size:11px;color:rgba(255,255,255,0.5)">jours</div>
                </div>
            </div>
            ${recentHtml}
            <button onclick="startQuiz()" style="width:100%;margin-top:14px;padding:12px;border-radius:10px;border:none;background:#7C3AED;color:#fff;font-weight:700;cursor:pointer">
                🎮 Rejouer
            </button>
        `;
    } catch (err) {
        container.innerHTML = `<p style="color:rgba(255,255,255,0.5);text-align:center;padding:10px 0">Erreur de connexion.</p>`;
    }
}

window.startQuiz = startQuiz;
window.closeQuiz = closeQuiz;
window.getQuizStreak = getQuizStreak;
window.showQuizHistory = showQuizHistory;
window.loadQuizStatsIntoProgress = loadQuizStatsIntoProgress;
