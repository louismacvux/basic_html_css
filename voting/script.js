let polls = [
  {
    question: "How do you feel today?",
    options: [
      {
        option_name: "Happy",
        count: 13,
      },
      {
        option_name: "Sad",
        count: 2,
      },
    ],
    votes: 15,
  },
  {
    question: "What's your favorite season?",
    options: [
      {
        option_name: "Spring",
        count: 1,
      },
      {
        option_name: "Summer",
        count: 1,
      },
      {
        option_name: "Fall",
        count: 1,
      },
      {
        option_name: "Winter",
        count: 1,
      },
    ],
    votes: 4,
  },
  {
    question: "Which programming language do you prefer?",
    options: [
      {
        option_name: "JavaScript",
        count: 5,
      },
      {
        option_name: "Python",
        count: 7,
      },
      {
        option_name: "Java",
        count: 2,
      },
      {
        option_name: "C++",
        count: 1,
      },
      {
        option_name: "Go",
        count: 4,
      },
    ],
    votes: 19,
  },
  {
    question: "Do you like the snow?",
    options: [
      {
        option_name: "Yes",
        count: 3,
      },
      {
        option_name: "No",
        count: 2,
      },
    ],
    votes: 5,
  },
];

let new_poll = 
    {
        question: "Add question",
        options: [
        {
            option_name: "Option 1",
            count: 0,
        },
        {
            option_name: "Option 2",
            count: 0,
        },
        ],
        votes: 0,
    }

loadPolls();
loadAddPoll();
let addOption = document.getElementById("add-option");
addOption.addEventListener("click", () => {
  addOptions();
});

let submitQuestion = document.getElementById("submit");
submitQuestion.addEventListener("click", () => {
  handleSubmit();
});

function loadPolls() {
  let poll = document.getElementsByClassName("polls")[0];
  poll.innerHTML = '';
  polls.forEach((p, i) => {
    let title = document.createElement("h3");
    title.classList.add("question-title");
    title.innerHTML = p.question;

    let options = document.createElement("div");
    options.classList.add("options");
    options.id = `group ${i}`;

    //load options
    p.options.forEach((o,j) => {
        let option = document.createElement("div");
        option.classList.add("option");

        let optionFill = document.createElement("div")
        optionFill.classList.add("option-fill");
        optionFill.id = `${i}-${j}`
        optionFill.innerHTML = o.option_name;
        option.addEventListener('click', (e) => {
            o.count++
            p.votes++
            updatePortion(i)
        })
        option.appendChild(optionFill)
        options.appendChild(option);
    });

    let question = document.createElement("div");
    question.classList.add("question");
    question.appendChild(title);
    question.appendChild(options);

    poll.appendChild(question);
    updatePortion(i)
  });
}

function updatePortion(q_index){
    if (polls[q_index].votes !== 0){
        polls[q_index].options.forEach((o,i) => {
            let percentage = Math.round((o.count / polls[q_index].votes) * 100);
            let optionFill = document.getElementById(`${q_index}-${i}`)
            optionFill.style.width = percentage + "%";

            let option_name = document.createElement("p")
            option_name.innerHTML = o.option_name;
            let option_ratio = document.createElement("p")
            option_ratio.innerHTML = percentage + "%"
            optionFill.innerHTML = ''
            optionFill.appendChild(option_name)
            optionFill.appendChild(option_ratio)
        })
    }
}


function addOptions(e) {
    let options = document.getElementById("new-options");
    let newOption = document.createElement("input");
    newOption.setAttribute("type", "text");
    newOption.classList.add("input1")
    let id = options.childElementCount+1;
    newOption.setAttribute("id", `option${id}`);
    newOption.setAttribute("placeholder", `Option ${id}`);
    
    options.appendChild(newOption);
}

function handleSubmit() {
  const new_q = document.getElementById("new-question");
  const optionGroup = document.getElementById("new-options");

  // Select all the input elements inside the "new-options" div
  const inputElements = document.querySelectorAll(".input1");

  // Get the values of all the input elements
  const inputValues = Array.from(inputElements).map((input) => input.value);

  // Output the values to the console
  const new_p = {
    question: new_q.value, 
    options: [],
    votes: 0
  }
  inputValues.forEach((val) => {
    new_p.options.push({option_name: val, count: 0})
  })
  debugger
  polls.push(new_p);
  loadPolls();

  inputElements.forEach((input) => {
    input.value = ""; // Clear the value of each input field
  });
  new_q.value="";
}


function loadAddPoll(){
    let addPoll = document.getElementsByClassName("add-polls")[0]
    let new_ques = document.createElement("input")
    new_ques.setAttribute("type", "text")
    new_ques.id = "new-question"
    new_ques.classList.add("input1");
    new_ques.placeholder = new_poll.question
    
    let optionGroup = document.createElement("div")
    optionGroup.id = "new-options"
    for (let i = 0; i < 2; i++){
        let o = document.createElement("input");
        o.setAttribute("type", "text");
        o.classList.add("input1")
        o.id = `option${i+1}`
        o.placeholder = new_poll.options[i].option_name
        optionGroup.appendChild(o);
    }
    
    let btn = document.createElement("button")
    btn.id = "add-option"
    btn.innerHTML = "More Option"

    let btn2 = document.createElement("button")
    btn2.id = "submit"
    btn2.innerHTML = "Submit"
    
    addPoll.appendChild(new_ques)
    addPoll.appendChild(optionGroup);
    addPoll.appendChild(btn);
    addPoll.appendChild(btn2);

}

