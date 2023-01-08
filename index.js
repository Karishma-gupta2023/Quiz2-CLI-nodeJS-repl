//Add packages 
import chalk from "chalk";
import readlineSync from "readline-sync";

function welcomeUser(){
var userName = readlineSync.question("May I know your name: ");
console.log("Welcome " + chalk.yellow(userName) + " to play the quiz" + (chalk.blue("----HTML----")));
console.log("HINT: Type either a or b or c");
}

//Array of Objects to hold questions and answers
var questionAnswer = [
  {question: "What is the full form of HTML?\n a. Hyper text markup language \n b. Hyper text marketing language \n c. both\n",
  answer: "a",
  },
  {question: "Which tags do not have closing tag?\n a. img tag \n b. p tag \n c. a tag \n",
  answer: "a",},
  {question: "Can JavaScript be use at frond end and back end both?\n a. no \n b. yes \n c. maybe \n",
  answer: "b",},
  {question: "How many heading elements are there in HTML\n a. 4 \n b. 5 \n c. 6 \n",
  answer: "c",},
  {question: "Choose the correct element for largest heading? \n a. <head>   \n b.<h1>  \n c. h6 \n",
  answer: "b",},
];

var score = 0;


//Array of objects to hold high scores
var highScore= [
  {name: "Karishma",
   scored:9},
  {name: "Shivam",
   scored:8},
  
]
  
  


//function to play
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
    
      if(userAnswer.toUpperCase()===answer.toUpperCase()){
        console.log(chalk.green("Right"));
        score=score+2;
        }
      else{
        console.log(chalk.red("Wrong"));
        score=score-1;
      }
      console.log("Your Score is: " + score); 
    
  }

//function game
function game(){
  for(var i=0; i<questionAnswer.length; i++)
    {
      var currentQuestion = questionAnswer[i];
      play(currentQuestion.question, currentQuestion.answer);
      }
  console.log(chalk.blue("Yay, your final score is: ")+ score);
  console.log("--------------------------------------------------");
}

function highScores() {

  console.log("Top 2 high Scores are :");
  console.log("--------------------------------------------------");
  for (var k = 0; k < highScore.length; k++) {
    var currentScore1 = highScore[k];
    console.log(currentScore1.name, currentScore1.scored);

    console.log("--------------------------------------------------");
  }


}


welcomeUser();
game();
highScores();