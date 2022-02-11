const quizData = [
    {
        question: "Quien es el autor del Quijote de la Mancha?",
        a: "Lazarillo de Tormes",
        b: "Miguel de Cervantes",
        c: "José Samarago",
        d: "Miguel Bosé",
        correct: "b",
    },
    {
        question: "Cuantos años tiene Leo Messi?",
        a: "31",
        b: "15",
        c: "76",
        d: "34",
        correct: "34",
    },
    {
        question: "Quién es el presidente de España",
        a: "Artur Mas",
        b: "Felipe Gonzalez",
        c: "Roberto Carlos",
        d: "Pedro Sanchez",
        correct: "d",
    },
    {
        question: "Cuando cayó el muro de Berlin?",
        a: "1967",
        b: "1926",
        c: "1989",
        d: "No ha caido",
        correct: "c",
    },
];
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswsers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    const answerEl = document.querySelectorAll(".answer");

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswsers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }
    if (answer) {
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You Answered correctly at ${score}/${quizData.length} questions. </h2>`;
        }
    }
});
