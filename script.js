const questions = [
    {
        text: "What does CSS stand for?",
        answers: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
        correct: 0
    },
    {
        text: "Which HTML tag is used for inserting an image?",
        answers: ["<image>", "<img>", "<src>"],
        correct: 1
    },
    {
        text: "What does JS stand for?",
        answers: ["JavaSource", "JustScript", "JavaScript"],
        correct: 2
    },
    {
        text: "Which of the following is a correct way to declare a JavaScript variable?",
        answers: ["variable myVar;", "var myVar;", "v myVar;"],
        correct: 1
    },
    {
        text: "Which CSS property is used to change the text color of an element?",
        answers: ["font-color", "color", "text-color"],
        correct: 1
    },
    {
        text: "Which method can be used to round a number to the nearest integer in JavaScript?",
        answers: ["Math.round()", "Math.ceil()", "Math.floor()"],
        correct: 0
    },
    {
        text: "In HTML, which attribute is used to define inline styles?",
        answers: ["style", "class", "id"],
        correct: 0
    },
    {
        text: "What is the correct syntax to select all elements with a class name 'container' in CSS?",
        answers: [".container", "#container", "container"],
        correct: 0
    },
    {
        text: "Which JavaScript method is used to parse a string to an integer?",
        answers: ["parseInt()", "Number()", "toString()"],
        correct: 0
    },
    {
        text: "Which pseudo-class is used to style an element when the user hovers over it?",
        answers: [":hover", ":focus", ":active"],
        correct: 0
    },
    {
        text: "Which of the following is not a JavaScript data type?",
        answers: ["Number", "Boolean", "Character"],
        correct: 2
    },
    {
        text: "Which symbol is used for comments in CSS?",
        answers: ["//", "#", "/* */"],
        correct: 2
    },
    {
        text: "Which JavaScript method is used to add an element to the end of an array?",
        answers: ["push()", "pop()", "append()"],
        correct: 0
    },
    {
        text: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        answers: ["title", "alt", "src"],
        correct: 1
    },
    {
        text: "What is the output of 'typeof NaN' in JavaScript?",
        answers: ["number", "NaN", "undefined"],
        correct: 0
    }
];


let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const cards = document.querySelectorAll(".card");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreDisplay = document.getElementById("score");

function loadQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.text;
    questionNumber.textContent = `Question ${index + 1}` ;
    
    cards.forEach((card, i) => {
        card.querySelector(".front").textContent = question.answers[i];
        card.classList.remove("flipped");
        card.querySelector(".overlay.correct").style.display = "none";
        card.querySelector(".overlay.incorrect").style.display = "none";
    });
}

cards.forEach((card) => {
    card.addEventListener("click", function () {
        if (this.classList.contains("flipped")) return;

        const answerIndex = parseInt(this.getAttribute("data-answer"));
        const question = questions[currentQuestionIndex];

        cards.forEach((card, i) => {
            card.classList.add("flipped");
            if (i === question.correct) {
                card.querySelector(".overlay.correct").style.display = "flex";
            } else {
                card.querySelector(".overlay.incorrect").style.display = "flex";
            }
        });

        if (answerIndex === question.correct) score++;

        setTimeout(() => {
            nextBtn.style.display = "block";
        }, 600);
    });
});


nextBtn.addEventListener("click", function () {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("quiz-container").style.display = "none";
        scoreContainer.style.display = "block";
        scoreDisplay.textContent = `${score} / ${questions.length}`;
    } else {
        loadQuestion(currentQuestionIndex);
        nextBtn.style.display = "none";
    }
});



loadQuestion(0);