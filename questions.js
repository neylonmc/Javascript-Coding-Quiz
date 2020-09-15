const question = document.getElementById("questionsAsked"); 
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
    question: "What are considering looping structures in Javascript?",
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
    choice2: "document.pring()",
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

