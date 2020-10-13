const initials = document.getElementById('initials'); 
const saveScore = document.getElementById("saveButton"); 
const finalScore = document.getElementById("finalScore"); 
const mostRecentScore = localStorage.getItem("mostRecentScore"); 
finalScore.innerText = mostRecentScore;

//Store Local Data from High Scores
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);



finalScore.innerText = mostRecentScore; 

initials.addEventListener('keyup', () => {
    saveButton.disabled = !initials.value; 
});
//Save High Score and sort them from best to worst. 
function saveHighScore (e) {
    console.log("saved");

    const score = {
        score: Math.floor(Math.random() * 100), 
        name: initials.value
    };
    highScores.push(score); 
    highScores.sort( (a,b) => b.score - a.score); 
    //Only display top 5 scores
    highScores.splice(5); 

    localStorage.setItem("highScores", JSON.stringify(highScores)); 
 
};  


