var score = 0;
var chalk = require('chalk');
var readLineSync = require('readline-sync');

var queArr = [
  {
    "question" : "Have You watched Bahubali ? : " ,
    "ans" : "yes" 
  } , 
  {
    "question" : "Is katappa is one of the character of Bahubali movie??" ,
    "ans" : "yes"
  } ,
  {
    "question" : "Did Bahubali was the highest earned south movie in Indian history ?? : ",
    "ans" : "yes"
  },
  {
    "question" : "Does Bahubali's Son look exactly like the Bahubali ?? : ",
    "ans" : "yes"
  },
  {
    "question" : "Will You give 5 star Ratings to Bahubali movie ?? : ",
    "ans" : "no"
  }
];

var highScore = [
  {
    "name" : "Kartik" ,
    "score" : 5
  }
];


for(var i=0; i< queArr.length;  i++){
    ask(queArr[i].question , queArr[i].ans );
}

  if(highScore.score === score )
  {
      //var object = ;
      console.log(chalk.green ("You break the Highest Score : " +score));
      highScore.push({ "name" :userName , "score" : score});
  }
  else{
      console.log(chalk.green ("Your Score is : " +score));
  }
     
function ask(question , answers)
{
  var answer = readLineSync.question(question);
  if(answer === answers)
  {
      console.log(chalk.blue ("You are Right"));
      score++;
  }
  else
  {
      console.log(chalk.red("You are wrong"));
      //score--;
  }
}


console.log(chalk.green ("High Score is : " + highScore.score));