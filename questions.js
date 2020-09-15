const question = document.getElementById("questionAsked"); 
const scoreShown = document.getElementById("score"); 

//Variables for the quiz

//turns choices into an array 
var choices = Array.from(document.getElementsByClassName("choice-text")); 

//Current question the user is on
var currentQuestion = {};
var acceptingAnswer = false; 
var score = 0; 
var counting = 0; 
var questionsLeft = []; 

//Questions to be asked
var questions = [
    {
    question: "What are considered looping structures in Javascript?",
    choice1: "For Loop", 
    choice2: "While Loop",
    choice3: "Do-While Loops",
    choice4: "All of the above.",
    answer: 4
  }, {
    question: "What does the forEach() method do? ",
    choice1: "Nothing",
    choice2: "It calls a function for each element in the array",
    choice3: "It reverses the order of the elements in an array",
    choice4: "it returns the length of the string",
    answer: 2 
  }, {
    question: "Arrays in Javascript can be used to store _______.",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer: 4
  }, {
    question: "Which of the following is the correct syntax to print a page using Javascript?",
    choice1: "localstorage.print()",
    choice2: "document.print()",
    choice3: "console.log()",
    choice4: "window.print()",
    answer: 4 
  }, {
    question: "A very useful tool used during development and debugging for printing content to the deburrger is: ",
    choice1: "Javascript",
    choice2: "terminal/bash",
    choice3: "for loops",
    choice4: "console.log",
    answer: 4
  }
]

//Allow correct answers to be worth +10 points
const scoreNumber = 10; 

function startGame() {
    counting = 0; 
    score = 0; 
    questionsLeft = [...questions];
    getNewQuestion();
};

function getNewQuestion() {
    if (questionsLeft.length === 0 || counting > 5) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("highscore.html"); 
    }
//Choses a random question to the user so it is not the same question each time. 
    counting ++; 
    const questionIndex = Math.floor(Math.random() * questionsLeft.length);
    currentQuestion = questionsLeft[questionIndex]; 
    question.innerText = currentQuestion.question; 

    choices.forEach (choice => {
        var number = choice.dataset["number"]; 
        choice.innerText = currentQuestion["choice" + number]; 
    });
//Gets rid of questions once they are answer. 
    questionsLeft.splice(questionIndex, 1); 
    acceptingAnswer = true; 
};

// Added a click event which displays if the user is correct or incorrect in console.log and next question is presented once the user picks their answer. 
choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if(!acceptingAnswer) return; 

      acceptingAnswer = false;
      const selectedChoice = e.target; 
      const selectedAnswer = selectedChoice.dataset["number"]; 

      const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
      
      if (classToApply === 'correct') {
        incrementScore(scoreNumber); 
      }
  
      console.log(classToApply); 
   
      getNewQuestion(); 
    }); 
  });
  

  //Adds 10 points to the users score when they pick the right answer. 
  incrementScore = num => {
    score += num
    scoreShown.innerText = score; 
  }; 

startGame(); 
