const questions = [
    { question: "1. Arkadaşının en sevdiği renk nedir?", answers: ["Siyah", "Gri", "Mavi", "Yeşil"], correct: 1 },
    { question: "2. En sevdiği yemek hangisi?", answers: ["Salçalı Makarna", "Mantı", "Hatay Soslu Dürüm", "Ezogelin Çorbası"], correct: 2 },
    { question: "3. Hangi şehirde doğdu?", answers: ["İstanbul", "Tokat", "İzmir", "Ankara"], correct: 0 },
    { question: "4. En sevdiği oyun nedir?", answers: ["Minecraft", "Valorant", "Dead Cells", "Legends Of Legend"], correct: 2 },
    { question: "5. Hangi müzik türünü sever?", answers: ["Rap", "Lo-Fi", "Pop", "K-Pop"], correct: 1 },
    { question: "6. En sevdiği film türü nedir?", answers: ["Aksiyon", "Yabancı Diziler", "Bilim Kurgu", "Kore Dizileri"], correct: 3 },
    { question: "7. Hangi sporu yapmayı sever?", answers: ["Tenis", "Futbol", "Karate-Do", "Basketbol"], correct: 2 },
    { question: "8. En sevdiği tatlı hangisi?", answers: ["Çikolatalı Puding", "Dondurma", "Çikolatalı Supangle", "Ekler"], correct: 2 }
];

let questionIndex = 0;
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    let currentQuestion = questions[questionIndex];
    questionElement.innerText = currentQuestion.question;
    answerButtons.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.addEventListener("click", () => checkAnswer(index));
        answerButtons.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(index) {
    let currentQuestion = questions[questionIndex];
    let buttons = answerButtons.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (i === currentQuestion.correct) {
            buttons[i].classList.add("correct");
        } else {
            buttons[i].classList.add("wrong");
        }
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    questionIndex++;

    if (questionIndex === 6) {
        window.location.href = "hacker.html"; 
    } else if (questionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.innerText = "Test Tamamlandı!";
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";
    }
}

loadQuestion();
