const begin = document.getElementById('start');
const quizEl = document.getElementById('quiz');
const questionsEl = document.getElementById('questions')
const answersEl = document.getElementsByClassName('answer')
let shuffle, questionsIndex

begin.addEventListener('click', start);

function start(){
    landing.classList.add('hide')
    startButton.classList.add('hide')
    questionsIndex = 0
    quizEl.classList.remove('hide')
    next()
};

function next() {
    displayQuestions([questionsIndex])
}

function displayQuestions(question) {
    questionsEl.innerText = questions.question
    questions.answer.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.button.classList.add('hi')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function selectAnswer(){}

const questions =
    {
        question: 'What does HTML stand for?',
        answer: [
        {
                text: '"Hyper Text Markup Language',
                correct: true
            }
        ]};

//function to start game
// must take user input and compare against correct answer
//must automatically move from one question to the next after inputting response
//no need for next button