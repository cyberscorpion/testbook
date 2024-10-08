//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "Which is the most widely spoken language in the world?",
        options: ["Spanish", "Mandarin", "English", "German"],
        correct: "Mandarin",
    },
    {
        id: "1",
        question: "Which is the only continent in the world without a desert?",
        options: ["North America", "Asia", "Africa", "Europe"],
        correct: "Europe",
    },
    {
        id: "2",
        question: "Who invented Computer?",
        options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
        correct: "Charles Babbage",
    },
    {
        id: "3",
        question: "What do you call a computer on a network that requests files from another computer?",
        options: ["A client", "A host", "A router", "A web server"],
        correct: "A client",
    },
    {
        id: "4",
        question: "Hardware devices that are not part of the main computer system and are often added later to the system.",
        options: ["Peripheral", "Clip art", "Highlight", "Execute"],
        correct: "Peripheral",
    },
    {
        id: "5",
        question: "The main computer that stores the files that can be sent to computers that are networked together is:",
        options: ["Clip art", "Mother board", "Peripheral", "File server"],
        correct: "File server",
    }, {
        id: "6",
        question: "How can you catch a computer virus?",
        options: ["Sending e-mail messages", "Using a laptop during the winter", "Opening e-mail attachments", "Shopping on-line"],
        correct: "Opening e-mail attachments",
    },
    {
        id: "7",
        question: "Google (www.google.com) is a:",
        options: ["Search Engine", "Number in Math", "Directory of images", "Chat service on the web"],
        correct: "Search Engine",
    },
    {
        id: "8",
        question: "Which is not an Internet protocol?",
        options: ["HTTP", "FTP", "STP", "IP"],
        correct: "STP",
    },
    {
        id: "9",
        question: "Which of the following is not a valid domain name?",
        options: ["www.yahoo.com", "www.yahoo.co.uk", "www.com.yahoo", "www.yahoo.co.in"],
        correct: "www.com.yahoo",
    },
];

let quizContainer = document.getElementById('container');

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    
    quizCards[questionCount].classList.remove("hide")
}

function quizCreator(){
    quizArray.sort(() => Math.random() - 0.5); // randomize array
    
    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);

        let div = document.createElement('div');
        div.classList.add("container-mid", "hide")


        let question_DIV = document.createElement('p');
        question_DIV.classList.add('question');
        question_DIV.innerText = i.question;
        div.appendChild(question_DIV);

        let questionOptions =  `
        <button class="option-div" onclick="">${i.options[0]}</button>
        <button class="option-div" onclick="">${i.options[1]}</button>
        <button class="option-div" onclick="">${i.options[2]}</button>
        <button class="option-div" onclick="">${i.options[3]}</button>
        `;
        div.innerHTML += questionOptions
        quizContainer.appendChild(div)
    }
}

function initial() {
    quizCreator()
    quizDisplay(0)
}

initial()
