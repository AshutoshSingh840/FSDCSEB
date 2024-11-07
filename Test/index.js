const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
    },
    {
        question: "Who is the Prime Minister of India?",
        choices: ["Amit Shah", "Arvinf Kejriwal", "Narendra Modi", "Rahul Gandhi"],
        correctAnswer: 3
    },
    {
        question: "How many continents are there?",
        choices: ["6", "7", "9", "5"],
        correctAnswer: 2
    },
    {
        question: "Which is the largest ocean on Earth?",
        choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: 4
    },
    
];

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');   

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');   

const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];   

    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach((choice,index) => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'choice';
        input.value = index;
        input.id = `choice${index}`;

        const label = document.createElement('label');
        label.htmlFor = `choice${index}`;
        label.textContent = choice;

        li.appendChild(input);
        li.appendChild(label);
        choicesElement.appendChild(li);
    });

    if (currentQuestionIndex === questions.length - 1) {
        submitBtn.style.display = 'block';
    } else {
        submitBtn.style.display = 'none';
    }

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === questions.length - 1;
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const userAnswer = parseInt(selectedChoice.value);
        if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
            score += 10;
        }
        currentQuestionIndex++;
        displayQuestion();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    resultElement.textContent = `Your Score: ${score}/${totalPoints} - ${resultMessage}`;
}

displayQuestion();

nextBtn.addEventListener('click', checkAnswer);
prevBtn.addEventListener('click', () => {
    currentQuestionIndex--;
    displayQuestion();
});
submitBtn.addEventListener('click', showResult);