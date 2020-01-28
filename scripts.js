const begin = document.getElementById('start');
const quizElement = document.getElementById('quiz');

begin.addEventListener('click', start);

function start(){
    console.log('started');
    landing.classList.add('hide')
    quizElement.classList.remove('hide')
    next()
};

function next(){

};

function selectAnswer() {

};

const qAndA = [
    {
        question: "What does HTML stand for?",
        option1: "Hyper Text Marker Language",
        option2: "Hyper Text Markup Language",
        option3: "Hyper Text Maker Language",
        option4: "Hyper Text Markdown Language",
        answer: "2"
    },{
        question: "What does CSS stand for?",
        option1: "",
        option2: "",
        option3: "",
        option4: "Cascading Style Sheets",
        answer: "4"
    },{
        question: "What does JS stand for?",
        option1:"",
        option2: "JavaScript",
        option3: "",
        option4: "",
        answer: "2"
    },{
        question: "When was HTML5 released?",
        option1: "2014",
        option2: "1997",
        option3: "1999",
        option4: "1995",
        answer: "1"
    },{
        question: "What year was CSS3 released?",
        option1: "2014",
        option2: "1997",
        option3: "1999",
        option4: "1995",
        answer: "3"
    },{
        question: "What year was JavaScript created?",
        option1: "2014",
        option2: "1999",
        option3: "1997",
        option4: "1995",
        answer: "4"
    },{
        question: "What year was JavaScript made into an ECMA standard?",
        option1: "2014",
        option2: "1999",
        option3: "1997",
        option4: "1995",
        answer: "3"
    },{
        question: "Question",
        option1: "Answer 1",
        option2: "Answer 2",
        option3: "Answer 3",
        option4: "Answer 4",
        answer: "4"
    },{
        question: "Question",
        option1: "Answer 1",
        option2: "Answer 2",
        option3: "Answer 3",
        option4: "Answer 4",
        answer: "2"
    },{
        question: "Questin",
        option1: "Answer 1",
        option2: "Answer 2",
        option3: "Answer 3",
        option4: "Answer 4",
        answer: "1"
    }
];
//function to start game
// must take user input and compare against correct answer
//must automatically move from one question to the next after inputting response
//no need for next button