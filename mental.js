const prevBtn = document.getElementById("prevBtn");
const options = document.querySelectorAll(".options");
const question = document.querySelector(".question");
const counter = document.querySelector(".counter>p");
const questionCon = document.querySelector(".questionContainer"); 
const thankYouMessage = document.querySelector(".thankYouMessage");
let currentQuestionIndex = 0;
prevBtn.style.display = "none";

const questions = [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it's hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen"
];

const optionsArray = [
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"],
    ["Not at all", "Several days", "More than half the days", "Nearly every day"]
];

function updateQuestion() {
    counter.textContent = currentQuestionIndex + 1;
    console.log(currentQuestionIndex, questions.length);
    if (currentQuestionIndex === questions.length-1) {
        questionCon.style.display = "none";
        thankYouMessage.style.display = "block";
    } else {
        question.textContent = questions[currentQuestionIndex];

        // Update the options based on the current question
        const currentOptions = optionsArray[currentQuestionIndex];
        options.forEach((option, index) => {
            option.textContent = currentOptions[index];
        });

        // Hide or show "Prev" button based on the current question
        if (currentQuestionIndex === 0) {
            prevBtn.style.display = "none";
        } else {
            prevBtn.style.display = "inline-block";
        }
    }
}

prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
    }
});

options.forEach((option, index) => {
    option.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            updateQuestion();
        }
    });
});

updateQuestion();
