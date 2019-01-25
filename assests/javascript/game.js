<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

var gameNum = ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
var crystalRandomNum = [0, 0, 0, 0];
var crystalNum = 0;
var score = 0;
var isGameEnded = false;

var gameRandomNum = Math.floor(Math.random() * gameNum.length + 5);

function startGame() {
    crystalNum = 0;
    score = 0;
    crystalRandomNum = crystalRandomNum.map(x => Math.floor(Math.random() * 5));
    gameRandomNum = Math.floor(Math.random() * gameNum.length + 5);

    $('#gameNum').text((gameRandomNum));
    display();
}

function display() {
    $('#playerScore').text(Math.floor(score));
}

$('#gameStart').on('click', startGame)

$('.crystal').on('click', function addScore() {
    console.log($(this).data('index'));
    if (!isGameEnded) {
        score += crystalRandomNum[$(this).data('index')]
    }

    if (score > gameRandomNum) {
        alert("You Lost!");
        isGameEnded = true;
    } else if (score == gameRandomNum) {
        alert("You Win!");
        isGameEnded = true;
    } else {

    }

    display();
})

display()