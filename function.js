const questions = [
    "WHAT IS THE CAPITAL CITY OF THE PHILIPPINES?",
    "WHAT ARE THE HARDEST THING TO UNDERSTAND?",
    "WHAT DO WE CALL FATHER OF THE FATHER OF THE MOTHER OF YOUR GRAND FATHER?",
    "WHY DOES WOMEN ARE HARD TO UNDERSTAND?",
    "UNSAY NAA NIMO NA NAA SA IMO?",
    "DID YOUR CRUSH KNOW THAT YOU ARE CUTE?"
];

const correctAnswers = [
    "Manila",
    "Women",
    "IMONG LOLO",
    "Mga tag as og pride lami pang bitayon..WHAHAHA!!!!!",
    "wala",
    "Yes"
];

const questionImages = [
    "pic2.webp",
    "pic2.webp",
    "pic2.webp",
    "pic2.webp",
    "pic2.webp",
    "pic2.webp"
];

const answerImages = [
    "manila.jpeg",
    "maldita.jpeg",
    "reni1.jpeg",
    "reni2.jpeg",
    "reni3.jpeg",
    "dog.jpeg"
];

let currentQuestionIndex = 0;

function loadQuestion(index) {
    document.getElementById('question-text').textContent = questions[index];
    document.getElementById('question-image').src = questionImages[index];

    // Reset input and hide answer section
    document.getElementById('user-answer').value = '';
    document.getElementById('answer-section').style.display = 'none';
    document.getElementById('answer-display').innerHTML = '';
    document.getElementById('answer-image').src = '';
    document.getElementById('feedback-message').style.display = 'none';
    document.querySelector('.flip-container').classList.remove('flip');

    updateNavigationButtons();
}

function updateNavigationButtons() {
    document.getElementById('next-btn').disabled =
        currentQuestionIndex === questions.length - 1;
}

function playQuiz() {
    currentQuestionIndex = 0;
    loadQuestion(currentQuestionIndex);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function showAnswer() {
    // Show the answer section
    const answerSection = document.getElementById('answer-section');
    answerSection.style.display = 'flex';

    const userAnswer = document.getElementById('user-answer').value.trim().toLowerCase();
    const correctAnswer = correctAnswers[currentQuestionIndex].toLowerCase();
    const isCorrect = userAnswer === correctAnswer;

    // Display the user's answer and the correct answer
    document.getElementById('answer-display').innerHTML =
        `Your Answer: ${document.getElementById('user-answer').value}<br>` +
        `Correct Answer: ${correctAnswers[currentQuestionIndex]}`;

    // Set the image
    const ansImg = document.getElementById('answer-image');
    ansImg.src = answerImages[currentQuestionIndex];

    // Set feedback INSIDE the flip card (centered) - Mastered/Unmastered
    const feedback = document.getElementById('feedback-message');
    if (isCorrect) {
        feedback.textContent = "✅ Mastered";
        feedback.style.color = "#28a745";
        feedback.style.backgroundColor = "rgba(40, 167, 69, 0.1)";
    } else {
        feedback.textContent = "🔄 Unmastered";
        feedback.style.color = "#dc3545";
        feedback.style.backgroundColor = "rgba(220, 53, 69, 0.1)";
    }
    feedback.style.display = 'flex';

    // Trigger smooth flip animation
    setTimeout(() => {
        document.querySelector('.flip-container').classList.add('flip');
    }, 100);
}

// Initialize the first question on load
window.onload = () => loadQuestion(currentQuestionIndex);
