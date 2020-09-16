const listHighScores = document.getElementById("listHighScores");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

listHighScores.innerHTML = highScores.map(score => {
        return `<li class="highScoreList">${score.name}-${score.score}</li>`;
}).join(""); 