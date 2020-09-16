const listHighScores = document.getElementById("listHighScores");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

//loop or forEach