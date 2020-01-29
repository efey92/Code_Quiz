const begin = document.getElementById('start');
const quizEl = document.getElementById('quiz');
const questionsEl = document.getElementById('questions')
const answersEl = document.getElementById('answer')
let shuffle, questionsIndex

begin.addEventListener('click', start);

function start(){
    landing.classList.add('hide')
    shuffle = questions.sort(() => math.random() - .5)
    questionsIndex = 0
    quizEl.classList.remove('hide')
    next()
};

function next() {
    displayQuestions(shuffle[questionsIndex]) 
}

function displayQuestions(question) {
    questionsEl.innerText = question.question
}

function selectAnswer()

const questions = [
    {
        question: 'What does HTML stand for?',
        answer: [
            {text: '"Hyper Text Marker Language', correct: true}
            {text: 'Hyper Text Markup Language', correct: false}
            {text: 'Hyper Text Maker Language', correct: false}
            {text: 'Hyper Text Markdown Language', correct: false}
        ]
    }
]
//function to start game
// must take user input and compare against correct answer
//must automatically move from one question to the next after inputting response
//no need for next button