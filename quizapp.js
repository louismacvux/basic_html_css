const questions = [
  {
    question: "What is the result of `5 + 3`?",
    options: ["8", "13", "2", "15"],
    answer: 0,
  },
  {
    question: "Which operator is used for string concatenation?",
    options: ["+", "-", "*", "/"],
    answer: 0,
  },
  {
    question: "What is the result of `true && false`?",
    options: ["true", "false", "null", "undefined"],
    answer: 1,
  },
  {
    question: "What is the result of `typeof null`?",
    options: ['"null"', '"undefined"', '"object"', '"boolean"'],
    answer: 2,
  },
  {
    question: "How do you increment a variable `x` by 1?",
    options: ["x = x + 1", "x += 1", "x++", "All of the above"],
    answer: 3,
  },
  {
    question: "What is the result of `5 % 3`?",
    options: ["1", "2", "3", "0"],
    answer: 1,
  },
  {
    question: 'What is the result of `"5" + 3`?',
    options: ["8", "53", "5", '"5" and 3'],
    answer: 1,
  },
  {
    question: "Which of these is a falsy value?",
    options: ['"hello"', "42", "true", "{}"],
    answer: 3,
  },
  {
    question: "Which operator is used for object property access?",
    options: [".", "[]", "Both A and B", "Neither A nor B"],
    answer: 2,
  },
  {
    question: "What is the result of `let x = 10; x -= 4`?",
    options: ["6", "14", "10", "4"],
    answer: 0,
  },
  {
    question: "What is the result of `typeof NaN`?",
    options: ['"number"', '"string"', '"undefined"', '"object"'],
    answer: 0,
  },
  {
    question: "What is the result of `!true`?",
    options: ["true", "false", "1", "0"],
    answer: 1,
  },
  {
    question: "How do you check if a variable `x` is an array?",
    options: [
      "typeof x === 'array'",
      "x.isArray()",
      "Array.isArray(x)",
      "x instanceof Array",
    ],
    answer: 2,
  },
  {
    question: 'What is the result of `"5" * "3"`?',
    options: ["15", '"15"', "NaN", "Error"],
    answer: 0,
  },
  {
    question: "What is the result of `let x = 5; x--;`?",
    options: ["4", "5", "6", "3"],
    answer: 0,
  },
  {
    question: "Which data type is used to represent text in JavaScript?",
    options: ["Number", "String", "Boolean", "Undefined"],
    answer: 1,
  },
  {
    question: "What is the result of `Boolean(0)`?",
    options: ["true", "false", "null", "undefined"],
    answer: 1,
  },
  {
    question: "How do you check if a variable `x` is undefined?",
    options: [
      "x === undefined",
      "typeof x === 'undefined'",
      "x == null",
      "Both A and B",
    ],
    answer: 3,
  },
  {
    question: "What is the result of `let x = {}; typeof x`?",
    options: ['"number"', '"string"', '"boolean"', '"object"'],
    answer: 3,
  },
  {
    question: "What is the result of `let x = []; typeof x`?",
    options: ['"number"', '"string"', '"boolean"', '"object"'],
    answer: 3,
  },
];

let sidebar = document.getElementById("sidebar");
let quiz = document.getElementById("quiz");
let submit = document.getElementById("submit");
let grade = 0;
submit.addEventListener('click', checkAnswer);

//load questions into sidebar
function loadSidebar(){
    for (const i in questions){
        let ques = document.createElement("div");
        ques.classList.add("question-tile");
        let anchor = document.createElement("a");
        anchor.classList.add("question-tile");
        anchor.setAttribute("href", `#question ${i}`);
        anchor.innerText = `${parseInt(i) + 1}`;
        ques.append(anchor);
        sidebar.appendChild(anchor);
    }
}

loadSidebar();

function makeQuestion(question, qid){
    let ques = document.createElement("div");
    ques.classList.add("question");
    ques.setAttribute("id", `question ${qid}`);

    let num = document.createElement("div");
    num.classList.add("question-number")
    num.innerText = `Question ${parseInt(qid)+1}`
    let header = document.createElement("header");
    header.classList.add("question-header");
    header.innerText = question.question;

    let options = document.createElement("div");
    options.classList.add("options");
    for (const i in question.options){
        let option = document.createElement("div");
        option.classList.add("option");
        let radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", qid)
        radio.setAttribute("id", `${qid}_${i}`);
        radio.setAttribute("value", question.options[i])
        let label = document.createElement("label");
        label.setAttribute("for", `${qid}_${i}`);
        label.innerText = question.options[i];
        option.appendChild(radio);
        option.appendChild(label);
        options.appendChild(option);
    }

    ques.appendChild(num);
    ques.appendChild(header);
    ques.appendChild(options);
    return ques;
}

function loadMainView(e){
    const footer = document.getElementsByClassName("footer")[0];
    for (const i in questions) {
        quiz.insertBefore(makeQuestion(questions[i],i),footer);
    }
}

loadMainView();

function checkAnswer(){
    for (const i in questions){
        let options = document.getElementsByName(i);
        for (j = 0; j < options.length; j++) {
          if (options[j].checked && j == questions[i].answer){
            console.log("CORRECT");
            grade++;
            break;
          }
        }
    }
    let result = document.getElementById("result");
    result.innerText=`You get ${grade}/${questions.length}`;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

submit.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
  grade = 0;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    grade = 0;
  }
}