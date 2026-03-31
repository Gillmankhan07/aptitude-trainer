let questions = [
  {
    q: "25% of 400?",
    options: ["50", "100", "150", "200"],
    answer: 1
  },
  {
    q: "2,4,8,16,?",
    options: ["18","24","32","20"],
    answer: 2
  }
];

let current = 0;
let score = 0;

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  document.body.innerHTML = `
    <h2>${questions[current].q}</h2>
    ${questions[current].options.map((o,i)=>
      `<button onclick="check(${i})">${o}</button>`
    ).join("")}
  `;
}

function check(i){
  if(i === questions[current].answer) score++;
  current++;

  if(current < questions.length){
    showQuestion();
  } else {
    document.body.innerHTML = `<h1>Score: ${score}</h1>`;
  }
}
