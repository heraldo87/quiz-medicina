// Selecionando elementos do DOM
// Função para embaralhar um array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Elementos do DOM
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const questionCounter = document.getElementById('question-counter');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');
const explanationFooter = document.getElementById('explanation-footer');
const explanationText = document.getElementById('explanation-text');

// Estado do quiz
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    // Embaralha e seleciona as 20 perguntas
    shuffledQuestions = questions.slice(); // copia
    shuffleArray(shuffledQuestions);
    shuffledQuestions = shuffledQuestions.slice(0, 20); // pega só 20

    questionContainer.parentElement.querySelector('.text-center').classList.remove('hidden');
    progressBar.parentElement.classList.remove('hidden');
    questionContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    nextBtn.classList.add('hidden');
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    questionCounter.innerText = `PERGUNTA ${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;

    // Atualiza barra de progresso
    const progressPercentage = (currentQuestionIndex / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add(
            'answer-btn', 'w-full', 'p-4', 'border-2', 'rounded-lg', 'text-left',
            'transition-all', 'duration-300', 'text-slate-700', 'dark:text-slate-300',
            'border-gray-300', 'dark:border-slate-600', 'hover:bg-blue-50', 'dark:hover:bg-slate-700',
            'hover:border-blue-400', 'dark:hover:border-blue-500'
        );
        button.dataset.correct = answer.correct;
        button.dataset.rationale = answer.rationale;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextBtn.classList.add('hidden');
    explanationFooter.classList.add('hidden');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        score++;
    } else {
        explanationText.innerText = selectedBtn.dataset.rationale;
        explanationFooter.classList.remove('hidden');
        selectedBtn.classList.add('incorrect');
    }

    // Destaca a correta e desativa todos
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    // Atualiza barra de progresso
    const progressPercentage = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    nextBtn.classList.remove('hidden');
}

function showResults() {
    questionContainer.parentElement.querySelector('.text-center').classList.add('hidden');
    progressBar.parentElement.classList.add('hidden');
    questionContainer.classList.add('hidden');
    nextBtn.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    scoreText.innerText = `Você acertou ${score} de ${shuffledQuestions.length} perguntas.`;
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

nextBtn.addEventListener('click', handleNextButton);
restartBtn.addEventListener('click', startQuiz);

// Inicia o quiz ao carregar a página
startQuiz();
