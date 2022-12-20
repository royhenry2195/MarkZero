

var readLineSync = require('readline-sync');
var chalk = require('chalk');
//console.log( chalk.yellow ("Henry Roy")); 

var score = 0;

var userName = readLineSync.question('Please Enter Your Good Name : ');
console.log("Welcome " + userName);

var queArr = [
  {
    question: "What is my Favourite Sport ?? : ",
    ans: "cricket"
  },
  {
    question: "What is my age ?? ",
    ans: "27"
  },
  {
    question: "Is my hometown is Ahemdabad ?? : ",
    ans: "yes"
  },
  {
    question: "What is my school name ?? : ",
    ans: "vidhyavihar"
  },
  {
    question: "Which colour i like the most ?? : ",
    ans: "black"
  }
];

var highScore = [
  {
    name: "Vishal",
    score: 3
  }
];

for (var i = 0; i < queArr.length; i++) {
  ask(queArr[i].question, queArr[i].ans);
}

if (highScore[0].score < score) {
  //var object = ;

  highScore = [];
  var obj = {};
  obj["name"] = userName;
  obj["score"] = score;
  highScore.push(obj);

  console.log(chalk.green("Yippiee..." + userName + " You break the Highest Score , New Highest Score is : " + score));
}
else {
  console.log(chalk.green("Your Score is : " + score));
}

function ask(question, answers) {
  var answer = readLineSync.question(question);
  if (answer === answers) {
    console.log(chalk.blue("You are Right"));
    score++;
  }
  else {
    console.log(chalk.red("You are wrong"));
    //score--;
  }
}


console.log(chalk.green("High Score is : " + highScore[0].score));