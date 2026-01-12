// ================================================
// ENEM BÍBLICO EBD 2025 - COM CERTIFICADO PDF
// Igreja Assembleia de Deus - Augustinópolis-TO
// ================================================

// DADOS DAS QUESTÕES
const questions = [
    {
        id: 1,
        trimester: "1º TRIMESTRE",
        theme: "Lição 2 - O Problema do Pecado",
        text: "Biblicamente, o pecado pode ser definido como:",
        options: [
            "Um erro social sem grandes consequências",
            "A transgressão da Lei e da vontade de Deus",
            "Um comportamento culturalmente aceitável",
            "Uma falha apenas emocional"
        ],
        answer: 1
    },

    {
        id: 2,
        trimester: "1º TRIMESTRE",
        theme: "Lição 2 - O Problema do Pecado",
        text: "Segundo Romanos 3:23, a condição de toda a humanidade é que:",
        options: [
            "Todos nasceram justos",
            "Alguns são pecadores",
            "Todos pecaram e carecem da glória de Deus",
            "O pecado afeta apenas quem não crê"
        ],
        answer: 2
    },

    {
        id: 3,
        trimester: "1º TRIMESTRE",
        theme: "Lição 2 - O Problema do Pecado",
        text: "O primeiro pecado da humanidade ocorreu quando:",
        options: [
            "Caim matou Abel",
            "Adão e Eva desobedeceram a Deus no Éden",
            "Israel rejeitou a Lei",
            "Moisés quebrou as tábuas"
        ],
        answer: 1
    },

    {
        id: 4,
        trimester: "1º TRIMESTRE",
        theme: "Lição 2 - O Problema do Pecado",
        text: "Uma das principais consequências do pecado, segundo a Bíblia, é:",
        options: [
            "Falta de prosperidade",
            "Separação entre Deus e o homem",
            "Dificuldades emocionais",
            "Conflitos sociais apenas"
        ],
        answer: 1
    },

    {
        id: 5,
        trimester: "1º TRIMESTRE",
        theme: "Lição 2 - O Problema do Pecado",
        text: "De acordo com Romanos 5:12, o pecado entrou no mundo por meio de:",
        options: [
            "Satanás diretamente",
            "Todos os homens juntos",
            "Adão, como representante da humanidade",
            "A desobediência de Israel"
        ],
        answer: 2
    },

    {
        id: 6,
        trimester: "1º TRIMESTRE",
        theme: "Lição 2 - O Problema do Pecado",
        text: "O pecado afetou o ser humano de tal forma que:",
        options: [
            "Ele perdeu totalmente a capacidade de escolher",
            "Sua natureza foi corrompida",
            "Ele deixou de ser responsável por seus atos",
            "Ele se tornou incapaz de ouvir a Palavra"
        ],
        answer: 1
    },

    {
        id: 7,
        trimester: "1º TRIMESTRE",
        theme: "Lição 2 - O Problema do Pecado",
        text: "Conforme Romanos 6:23, o salário do pecado é:",
        options: [
            "Sofrimento humano",
            "Tristeza espiritual",
            "A morte",
            "A condenação imediata"
        ],
        answer: 2
    },

    {
        id: 8,
        trimester: "1º TRIMESTRE",
        theme: "Lição 2 - O Problema do Pecado",
        text: "Segundo o ensino bíblico, a Lei de Deus:",
        options: [
            "Salva o homem do pecado",
            "Anula o pecado",
            "Revela o pecado, mas não pode salvá-lo",
            "Substitui a graça"
        ],
        answer: 2
    },

    {
        id: 9,
        trimester: "1º TRIMESTRE",
        theme: "Lição 2 - O Problema do Pecado",
        text: "O pecado não é apenas um ato isolado, mas também:",
        options: [
            "Uma fraqueza social",
            "Um problema cultural",
            "Uma condição espiritual do ser humano",
            "Uma herança apenas histórica"
        ],
        answer: 2
    },

    {
        id: 10,
        trimester: "1º TRIMESTRE",
        theme: "Lição 2 - O Problema do Pecado",
        text: "O reconhecimento do problema do pecado é essencial porque:",
        options: [
            "Leva o homem à religião",
            "Justifica as falhas humanas",
            "Conduz à necessidade da salvação em Cristo",
            "Elimina automaticamente a condenação"
        ],
        answer: 2
    }
];

// VARIÁVEIS GLOBAIS
let currentQuestion = 0;
let answers = {};
let startTime = 0;
let timerInterval = null;
let userName = '';
let finalScore = 0;
let finalPercentage = 0;
let finalTime = '';

// INICIAR PROVA
function startExam() {
    userName = document.getElementById('userName').value.trim();

    if (!userName) {
        alert('Por favor, digite seu nome completo!');
        return;
    }

    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('examScreen').classList.remove('hidden');

    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);

    loadQuestion();
}

// ATUALIZAR CRONÔMETRO
function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(elapsed / 60);
    const secs = elapsed % 60;
    const timeStr = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.getElementById('timer').textContent = timeStr;
}

// CARREGAR QUESTÃO
function loadQuestion() {
    const q = questions[currentQuestion];

    document.getElementById('trimesterBadge').textContent = q.trimester;
    document.getElementById('questionTheme').textContent = q.theme;
    document.getElementById('questionText').textContent = `${q.id}. ${q.text}`;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (answers[currentQuestion] === index) {
            optionDiv.classList.add('selected');
        }

        optionDiv.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)})</span>
            <span class="option-text">${option}</span>
        `;

        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });

    updateProgress();
    updateButtons();
}

// SELECIONAR OPÇÃO
function selectOption(index) {
    answers[currentQuestion] = index;
    loadQuestion();
}

// ATUALIZAR PROGRESSO
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('currentNum').textContent = currentQuestion + 1;
    document.getElementById('answeredCount').textContent = Object.keys(answers).length;
}

// ATUALIZAR BOTÕES
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');

    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
    }
}

// PRÓXIMA QUESTÃO
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

// QUESTÃO ANTERIOR
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// FINALIZAR PROVA
function finishExam() {
    clearInterval(timerInterval);
    finalTime = document.getElementById('timer').textContent;

    document.getElementById('examScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');

    showResults();
}

// MOSTRAR RESULTADOS
function showResults() {
    let correct = 0;
    questions.forEach((q, idx) => {
        if (answers[idx] === q.answer) {
            correct++;
        }
    });

    finalScore = correct;
    finalPercentage = ((correct / questions.length) * 100).toFixed(1);

    document.getElementById('studentName').textContent = userName;
    document.getElementById('totalTime').textContent = finalTime;
    document.getElementById('finalScore').textContent = correct;
    document.getElementById('percentage').textContent = finalPercentage;

    const performanceData = getPerformanceMessage(correct);
    document.getElementById('performanceEmoji').textContent = performanceData.emoji;
    document.getElementById('performanceMsg').textContent = performanceData.text;
    document.getElementById('performanceMsg').className = `performance-msg ${performanceData.class}`;

    generateAnswerKey();
}

// MENSAGEM DE DESEMPENHO
function getPerformanceMessage(score) {
    const percentage = (score / questions.length) * 100;

    if (percentage >= 90) {
        return { emoji: '🏆', text: 'Excelente! Você domina o conteúdo das revistas!', class: 'excellent' };
    } else if (percentage >= 70) {
        return { emoji: '⭐', text: 'Muito bom! Continue estudando a Palavra!', class: 'good' };
    } else if (percentage >= 50) {
        return { emoji: '📖', text: 'Bom trabalho! Revise os temas estudados.', class: 'average' };
    } else {
        return { emoji: '💪', text: 'Continue firme! A Palavra de Deus é viva e eficaz!', class: 'needs-improvement' };
    }
}

// GERAR GABARITO
function generateAnswerKey() {
    const answerKey = document.getElementById('answerKey');
    answerKey.innerHTML = '';

    questions.forEach((q, idx) => {
        const userAnswer = answers[idx];
        const isCorrect = userAnswer === q.answer;
        const answered = userAnswer !== undefined;

        const itemDiv = document.createElement('div');
        itemDiv.className = `answer-item ${isCorrect ? 'correct' : answered ? 'incorrect' : 'unanswered'}`;

        let icon = '';
        if (isCorrect) {
            icon = '✅';
        } else if (answered) {
            icon = '❌';
        } else {
            icon = '⚪';
        }

        let content = `
            <span class="answer-icon">${icon}</span>
            <p class="answer-trimester">${q.trimester} - ${q.theme}</p>
            <p class="answer-question"><strong>${q.id}. ${q.text}</strong></p>
            <p class="correct-answer"><strong>✓ Resposta correta:</strong> ${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}</p>
        `;

        if (!isCorrect && answered) {
            content += `<p class="user-answer"><strong>✗ Sua resposta:</strong> ${String.fromCharCode(65 + userAnswer)}) ${q.options[userAnswer]}</p>`;
        } else if (!answered) {
            content += `<p class="not-answered">Não respondida</p>`;
        }

        itemDiv.innerHTML = content;
        answerKey.appendChild(itemDiv);
    });
}

// ================================================
// GERAR CERTIFICADO - SOLUÇÃO DEFINITIVA
// ================================================
function generateCertificate() {
    // Redireciona para o método que sempre funciona
    printCertificate();
}

// ================================================
// IMPRIMIR CERTIFICADO (1 PÁGINA APENAS)
// ================================================
function printCertificate() {
    const today = new Date().toLocaleDateString('pt-BR');

    // Criar HTML do certificado COMPACTO (1 página)
    const certificateHTML = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Certificado - ${userName}</title>
            <style>
                @page { 
                    size: A4 landscape; 
                    margin: 0; 
                }
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { 
                    margin: 0; 
                    padding: 0; 
                    font-family: Georgia, serif;
                    background: white;
                }
                @media print {
                    body { margin: 0; padding: 0; }
                    .no-print { display: none !important; }
                }
            </style>
        </head>
        <body>
            <div style="width: 297mm; height: 210mm; background: white; padding: 10mm; box-sizing: border-box; position: relative;">
                
                <!-- Bordas -->
                <div style="width: 100%; height: 100%; border: 8px solid #2563eb; padding: 8mm; box-sizing: border-box; position: relative;">
                    <div style="position: absolute; top: 4px; left: 4px; right: 4px; bottom: 4px; border: 3px solid #059669; pointer-events: none;"></div>
                    <div style="position: absolute; top: 8px; left: 8px; right: 8px; bottom: 8px; border: 2px solid #dc2626; pointer-events: none;"></div>
                    
                    <!-- Conteúdo -->
                    <div style="position: relative; z-index: 10;">
                        <!-- Cabeçalho COMPACTO -->
                        <div style="text-align: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 3px solid #2563eb;">
                            <div style="font-size: 35px; margin-bottom: 5px;">📖</div>
                            <h1 style="font-size: 40px; margin: 0; letter-spacing: 8px; color: #1f2937;">CERTIFICADO</h1>
                            <p style="font-size: 16px; color: #6b7280; margin: 3px 0; font-style: italic;">de participação</p>
                        </div>

                        <!-- Corpo COMPACTO -->
                        <div style="text-align: center; margin: 10px 0;">
                            <p style="font-size: 14px; color: #4b5563; margin: 4px 0;">Certificamos que</p>
                            
                            <h2 style="font-size: 32px; margin: 10px 0; padding: 6px 0; border-bottom: 2px solid #2563eb; color: #1f2937; display: inline-block; min-width: 350px;">${userName}</h2>
                            
                            <p style="font-size: 14px; color: #4b5563; margin: 4px 0;">concluiu com êxito o</p>
                            
                            <h3 style="font-size: 24px; margin: 8px 0; color: #2563eb; letter-spacing: 2px;">2 LIÇÃO BÍBLICA EBD 2026</h3>
                            
                            <p style="font-size: 13px; color: #6b7280; margin: 4px 0; font-style: italic;">EDIÇÃO JOVENS - Escola Bíblica Dominical</p>
                        </div>

                        <!-- Detalhes COMPACTOS -->
                        <table style="max-width: 500px; margin: 10px auto; background: #f9fafb; padding: 12px; border-radius: 8px; border: 2px solid #e5e7eb; border-collapse: collapse;">
                            <tr>
                                <td style="font-size: 12px; color: #4b5563; padding: 3px;"><strong style="color: #1f2937;">Pontuação:</strong> ${finalScore}/10</td>
                                <td style="font-size: 12px; color: #4b5563; padding: 3px;"><strong style="color: #1f2937;">Aproveitamento:</strong> ${finalPercentage}%</td>
                            </tr>
                            <tr>
                                <td style="font-size: 12px; color: #4b5563; padding: 3px;"><strong style="color: #1f2937;">Tempo:</strong> ${finalTime}</td>
                                <td style="font-size: 12px; color: #4b5563; padding: 3px;"><strong style="color: #1f2937;">Data:</strong> ${today}</td>
                            </tr>
                        </table>

                         <!-- Conteúdo COMPACTO -->
                        <div style="max-width: 600px; margin: 10px auto; text-align: left;">
                            <p style="font-size: 13px; color: #1f2937; font-weight: 700; margin-bottom: 6px;">📚 Conteúdo da Avaliação:</p>
                            <div style="font-size: 11px; color: #4b5563; line-height: 1.5;">
                                <div style="padding: 1px 0;"><strong>Lição 2:</strong> O Problema do Pecado</div>
                                <div style="padding: 1px 0;"><strong>Revista:</strong> Jovens - 1º Trimestre 2026</div>
                                <div style="padding: 1px 0;"><strong>Total:</strong> 10 questões</div>
                            </div>
                        </div>

                        <!-- Versículo COMPACTO -->
                        <div style="max-width: 550px; margin: 10px auto; padding: 10px; background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 6px;">
                            <p style="font-size: 11px; color: #78350f; font-style: italic; line-height: 1.5; margin: 0 0 5px 0;">
                                "A salvação não é apenas uma realidade passada ou presente, mas também uma promessa futura gloriosa"
                            </p>
                            <p style="text-align: right; font-size: 10px; font-weight: bold; color: #78350f; margin: 0;">Pr. Marcelo oliveira</p>
                        </div>

                        <!-- Rodapé COMPACTO -->
                        <div style="margin-top: 12px; padding-top: 10px; border-top: 2px solid #e5e7eb;">
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 50%; vertical-align: bottom; text-align: center;">
                                        <div style="width: 180px; height: 2px; background: #1f2937; margin: 0 auto 5px auto;"></div>
                                        <p style="font-size: 10px; color: #4b5563; margin: 0; font-weight: 600;">Pastor Responsável</p>
                                    </td>
                                    <td style="width: 50%; vertical-align: bottom; text-align: right; padding-right: 15px;">
                                        <p style="font-size: 11px; color: #1f2937; margin: 2px 0; font-weight: bold;">Igreja Assembleia de Deus - Missão</p>
                                        <p style="font-size: 10px; color: #6b7280; margin: 2px 0;">Augustinópolis - TO</p>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <!-- Selo -->
                        <div style="position: absolute; bottom: 20px; right: 20px; width: 60px; height: 60px; border-radius: 50%; background: #2563eb; text-align: center; line-height: 60px; font-size: 30px; color: white; font-weight: bold; box-shadow: 0 5px 15px rgba(0,0,0,0.4); border: 4px solid white; z-index: 20;">
                            ✓
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="no-print" style="position: fixed; top: 10px; left: 50%; transform: translateX(-50%); background: #2563eb; color: white; padding: 15px 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); z-index: 9999; text-align: center;">
                <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: bold;">📜 Certificado pronto!</p>
                <p style="margin: 0 0 15px 0; font-size: 14px;">Use: Arquivo → Imprimir (ou Ctrl+P)</p>
                <button onclick="window.print()" style="background: white; color: #2563eb; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 14px; margin-right: 10px;">
                    🖨️ Imprimir Agora
                </button>
                <button onclick="window.close()" style="background: #dc2626; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 14px;">
                    ✕ Fechar
                </button>
            </div>
        </body>
        </html>
    `;

    // Abrir em nova janela
    const printWindow = window.open('', '_blank', 'width=1200,height=800');
    if (printWindow) {
        printWindow.document.write(certificateHTML);
        printWindow.document.close();
    } else {
        alert('❌ Popup bloqueado!\n\nPermita popups para este site e tente novamente.');
    }
}

// REINICIAR PROVA
function restartExam() {
    currentQuestion = 0;
    answers = {};
    startTime = 0;
    userName = '';
    finalScore = 0;
    finalPercentage = 0;
    finalTime = '';

    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('startScreen').classList.remove('hidden');
    document.getElementById('userName').value = '';
}