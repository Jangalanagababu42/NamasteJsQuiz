var readlineSync = require('readline-sync');
const chalk = require('chalk');


var highScores = [{
  name: "Nagababu",
  score: 10
},
{
  name: "Raju",
  score: 10
},
{
  name: "Sham",
  score: 10
},
{
  name: "Baburao",
  score: 10
},
{
  name: "Anuradha",
  score: 9
},
{
  name: "Munnabhai",
  score: 8
},
]

console.log(chalk.blueBright.bgBlack.bold.underline("Welcome Take This 'Namaste JavaScript' Quiz \n"));
var score = 0;

var userName = readlineSync.question("Please Enter your name ? ");



console.log(chalk.red.bold("\nRules" + "\n1)There are 10 question in all ,one point per question \n2]Negative for each wrong answer\n3]Choose answer from a,b,c,d\n"));

console.log(chalk.cyanBright.underline('Welcome ' + userName + ' Best of Luck '))


function play(question, answer) {
  var userAnswer = readlineSync.question("\n" + question + "\n");


  if (userAnswer === answer) {
    console.log(chalk.green.bold("Right Answer"));
    score = score + 1;

  } else {
    console.log(chalk.red.bold("Wrong Answer"));
    score = score - 1;

  }

  console.log("----------------------------------------------")
  console.log(chalk.blue.bold(userName + " Your Current Score is : ", score));
}


var questions = [{
  question: chalk.yellow.bold("1] Javascript is an _______ language? ") + chalk.green("\na. Object-Oriented\nb. Object-Based\nc. Procedural\nd. None of the Above"),
  answer: "a"
}, {
  question: chalk.yellow.bold("2]Which of the following keywords is used to define a variable in Javascript? ") + chalk.green("\na. Var  \nb. let  \nc. Both A ad B   \nd. None of the Above "),
  answer: "b"
},
{
  question: chalk.yellow.bold("3] How can a datatype be declared to be a constant type? ") + chalk.green(" \na. const  \nb. let  \nc. var  \nd. constant"),
  answer: "a"
},
{
  question: chalk.yellow.bold("4] What keyword is used to check whether a given property is valid or not? ") + chalk.green("\na. in  \nb. is in   \nc. exists  \nd. lies "),
  answer: "a"
},
{
  question: chalk.yellow.bold("5] When an operator’s value is NULL, the typeof returned by the unary operator is: ") + chalk.green("\na. Boolean  \nb. Undefined  \nc. Object  \nd. Integer "),
  answer: "c"
},
{
  question: chalk.yellow.bold("6]  Which function is used to serialize an object into a JSON string in Javascript? ") + chalk.green("\na. Stringfy()  \nb. parse()  "),
  answer: "a"
},
{
  question: chalk.yellow.bold("7] Which of the following are closures in Javascript?") + chalk.green(" \na. Variables  \nb. Functions  \nc. Objects  \nd. All the Above "),
  answer: "d"
},
{
  question: chalk.yellow.bold("8] Which of the following is not a Javascript framework?") + chalk.green(" \na. Node  \nb. Cassandra "),
  answer: "b"
},
{
  question: chalk.yellow.bold("9] TWhat keyword is used to declare an asynchronous function in Javascript? ") + chalk.green("\na. async \nb. TimeOut "),
  answer: "a"
},
{

  question: chalk.yellow.bold("10] How to stop an interval timer in Javascript? ") + chalk.green(" \na. clearInterval  \nb. ClearTimer"),
  answer: "a"
}];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}


console.log(chalk.blueBright.bgBlack.bold.underline("\n" + userName + "  Your Final Score is " + score))


console.log(chalk.blue.bold("\nCurrent Highscores Are"))
for (i = 0; i < highScores.length; i++) {
  console.log(chalk.red.bold((i + 1) + " " + highScores[i].name + ": " + highScores[i].score))
}


console.log(chalk.blue.bold.underline("\nIf you beat the highScores take a screenshot and message me "))
console.log(chalk.blue.bold.underline("\n------  Thanks For Playing  ------"))
