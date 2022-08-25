const tiles = document.querySelectorAll(".tile"); 
const Player_X = "X"; 
const Player_O = "O";
let turn = Player_X; 

const boardState = Array(tiles.length); 
boardState.fill(null); 

//Elements 
const strike = document.getElementById("strike"); 
const gameOverArea = document.getElementById("Area_GameOver"); 
const gameOverText = document.getElementById("Text_GameOver"); 
const playAgain = document.getElementById("PlayAgain"); 
playAgain.addEventListener("click", startNewGame); 

//sound 
const gameWin = new Audio('../SoundEffect/win.mp3');
const gameDraw = new Audio('../SoundEffect/lose.mp3'); 
const click = new Audio('../SoundEffect/click.wav');

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

const winningCombinations = [
    //rows
    { combo:[1, 2, 3], strikeClass: "strike-row-1"},
    { combo:[4, 5, 6], strikeClass: "strike-row-2"},
    { combo:[7, 8, 9], strikeClass: "strike-row-3"},

    //columns 
    { combo:[1, 4, 7], strikeClass: "strike-column-1"},
    { combo:[2, 5, 8], strikeClass: "strike-column-2"},
    { combo:[3, 6, 9], strikeClass: "strike-column-3"},

    //diagonals 
    { combo:[1, 5, 9], strikeClass: "strike-diagonal-left"},
    { combo:[3, 5, 7], strikeClass: "strike-diagonal-right"},
]

function tileClick (event) {
    if(gameOverArea.classList.contains("visible")){ 
        return; 
    }
    const tile = event.target; 
    const tileNumber = tile.dataset.index; 
    if(tile.innerText != ""){
        return; 
    }
    if(turn === Player_X){
        tile.innerText = Player_X; 
        boardState[tileNumber - 1] = Player_X; 
        turn = Player_O; 
    }
    else {
        tile.innerText = Player_O; 
        boardState[tileNumber - 1] = Player_O; 
        turn = Player_X; 
    }

    //click.play();
    HoverTextSet(); 
    WinnerCheck(); 
}

function HoverTextSet() { 
    //remove all hover text 
    tiles.forEach((tile) => {
        tile.classList.remove("x-hover");
        tile.classList.remove("o-hover"); 
    });

    const hoverClass = `${turn.toLowerCase()}-hover`;

    tiles.forEach((tile) => {
        if(tile.innerText == "") {
            tile.classList.add(hoverClass); 
        }
    }); 
}

function WinnerCheck() { 
    //check for a winner 
    for(const winningCombination of winningCombinations) {
        //object Destructing 
        const { combo, strikeClass } = winningCombination; 
        const tileValue1 = boardState[combo[0] - 1]; 
        const tileValue2 = boardState[combo[1] - 1]; 
        const tileValue3 = boardState[combo[2] - 1]; 

        if(tileValue1 != null && tileValue1 === tileValue2 && tileValue1 == tileValue3) {
            strike.classList.add(strikeClass);
            gameOverScreen(tileValue1); 
            return; 
        }
    }

    //Check for a draw 
    const NoSpaceLeft = boardState.every((tile) => tile !== null); 
    if (NoSpaceLeft) {
        gameOverScreen(null); 
    }
}

function gameOverScreen(winnerPlayer) {
    let text = "Draw!"; 
    if (winnerPlayer != null) {
        text = `Winner is ${winnerPlayer}!`;
        gameWin.play();
    }
    else {
        gameDraw.play();
    }
    gameOverArea.className = "visible"; 
    gameOverText.innerText = text; 
}

function startNewGame() { 
    strike.className = "strike";
    gameOverArea.className = "hidden"; 
    boardState.fill(null); 
    tiles.forEach((tile) => (tile.innerText = "")); 
    turn = Player_X; 
    HoverTextSet();  
}