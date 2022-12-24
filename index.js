var readlineSync = require("readline-sync");
console.log("WELCOME TO THE QUIZ!!");
var name = readlineSync.question("Type your name here: ");
console.log("Welcome "+ name + ",Let's start the quiz now!");
console.log("Let's see how much you know me!");
console.log("----------------------------------");

var score=0;
function quiz(question,answer){
var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
  console.log("You are right");
    score=score+1;
}else{
  console.log("You are wrong!")
    score=score-1;
}
  console.log("Your score is ", score);
console.log("----------------------------------");
}

var questions=[
{question: "1.What is my full name? ",
answer: "faizan ahmad"},
{question:"2.What is my age? ",
  answer:"22"},
{question:"3.What is my month of birth?  ",
  answer:"september"},
{question:"4.Where am I from? ",
  answer:"bihar"},
{question:"5.Who is my favourite cricketer? ",
 answer:"virat kohli"},
{question:"6.What was my branch during my engineering? ",
 answer:"mechanical"}
];


for (var i=0;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer);
}

console.log("Well played!Your final score is -->",score );
console.log("Thanks for playing the quiz!")