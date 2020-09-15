const initials = document.getElementById('initials'); 
const saveScore = document.getElementById("saveButton"); 
const finalScore = document.getElementById("finalScore"); 
const mostRecentScore = localStorage.getItem("mostRecentScore"); 
finalScore.innerText = mostRecentScore;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);  

const maxHighScore = 5; 

finalScore.innerText = mostRecentScore; 

initials.addEventListener('keyup', () => {
    saveButton.disabled = !initials.value; 
});

function saveHighScore (e) {
    console.log("saved");

    const score = {
        score: Math.floor(Math.random() * 100), 
        name: initials.value
    };
    highScores.push(score); 
    highScores.sort( (a,b) => b.score - a.score); 
    highScores.splice(5); 

    localStorage.setItem("highScores", JSON.stringify(highScores)); 
 
};  