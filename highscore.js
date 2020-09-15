<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>JavaScript Coding Quiz</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="highscore.css">
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">

     
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    </head>

    <body>
 
        <div id="card" class="container">
            
            <div class="card-body">
              <h5 id="highScore"> Results:</h5>
              <h5 id ="finalScore"></h5>
              <form>
                  <input type="text" name="initials" id="initials" placeholder="Initials Here">
                    <button 
                    type ="submit"
                    class = "btn" 
                    onclick = "saveHighScore(event)"
                    id = "saveButton"> 
                    Save Your Score 
                    </button>
              </form>
              <a class = "btn" href= "questions.html"> Let's Play Again! </a>
            </div>

            <div class="card-body">
                <h5 id="viewHighScore"> View High Scores:</h5>
                <ul id ="finalHighScores"></ul>
        </div>
      

          <script src="highscore.js"></script>
        
    </body>
</html>