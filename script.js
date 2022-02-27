const board = (() => {

    let board = [];

    const createBoard = () => {
        const boardContainer = document.querySelector(".board-container");
        const boardElement = document.createElement("div");
        boardElement.classList.add("board")
        for(let i = 0; i < 9; i++){
            newTile = document.createElement("div");
            newTile.classList.add("tile");
            newTile.addEventListener("click", function (){
                if (controller.getGameState()){
                    controller.takeTurn(i);
                }
            })
            board.push("")
            boardElement.appendChild(newTile);
        }
        boardContainer.appendChild(boardElement);
    }
    

    const addMarker = (pos, marker) =>{
        if (board[pos] === ""){
            board[pos] = marker;
            showBoard();
            return true;
        }
        else{
            return false;
        }
    }

    const showBoard = () => {
        let counter = 0;
        const tiles = document.querySelectorAll(".tile");
        tiles.forEach(tile => {
            tile.textContent = board[counter];
            counter ++;
        });
    }

    const resetBoard = () =>{
        for(let i = 0; i < 9; i++){
            board[i] = "";
            showBoard();
        }
    }

    const checkForWin = (marker) => {
        // Check if game has been won by a player

        if(board[0] === marker && board[3] === marker && board[6] === marker){
            return true;
        }
        else if(board[0] === marker && board[1] === marker && board[2] === marker){
            return true;
        }
        else if(board[0] === marker && board[4] === marker && board[8] === marker){
            return true;
        }
        else if(board[1] === marker && board[4] === marker && board[7] === marker){
            return true;
        }
        else if(board[2] === marker && board[4] === marker && board[6] === marker){
            return true;
        }
        else if(board[2] === marker && board[5] === marker && board[8] === marker){
            return true;
        }
        else if(board[3] === marker && board[4] === marker && board[5] === marker){
            return true;
        }
        else if(board[6] === marker && board[7] === marker && board[8] === marker){
            return true;
        }
        else{
            return false;
        }

    }

    return{addMarker, resetBoard, createBoard, checkForWin};

})();


const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker}
};

const player1 = Player("Player 1", "X");
const player2 = Player("Player 2", "O");

const controller = (() => {

    let turn = 1;
    let playing = false;
    // let instruction = `It is ${player1.getName()}'s turn!`;

    const beginGame = () => {
        board.createBoard();
        setInstruction(`It is ${player1.getName()}'s turn!`);
    }

    const setupGame = () => {
        createSetupForm();
        playing = true;
    }

    const setInstruction = (instruction) => {
        // Set instruction
        let instructionElement = document.querySelector(".instruction");
        instructionElement.textContent = instruction;
    }

    const getGameState = () => {
        return playing;
    }

    const addResetButton = () => {
        const setupContainer = document.querySelector(".setup-container");
        const setupDiv = document.createElement("div")
        setupDiv.classList.add("setup");
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "Restart Game";
        resetBtn.classList.add("startBtn");
        resetBtn.addEventListener("click", function(){
            resetGame();
        })
        setupDiv.appendChild(resetBtn);
        setupContainer.appendChild(setupDiv);
    }

    const createSetupForm = () => {
        const setupContainer = document.querySelector(".setup-container");
        const setupDiv = document.createElement("div");
        setupDiv.classList.add("setup");

        const player1P = document.createElement("p");
        player1P.textContent = "Player 1 (X)";
        player1P.classList.add("player-setup");
        const player1HumanBtn = document.createElement("button");
        player1HumanBtn.textContent = "Human";
        player1HumanBtn.classList.add("player1Btn");
        player1HumanBtn.classList.add("selected");
        const player1CompBtn = document.createElement("button");
        player1CompBtn.textContent = "Computer";
        player1CompBtn.classList.add("player1Btn");

        const player2P = document.createElement("p");
        player2P.textContent = "Player 2 (O)";
        player2P.classList.add("player-setup");
        const player2HumanBtn = document.createElement("button");
        player2HumanBtn.textContent = "Human";
        player2HumanBtn.classList.add("player2Btn");
        player2HumanBtn.classList.add("selected");
        const player2CompBtn = document.createElement("button");
        player2CompBtn.textContent = "Computer";
        player2CompBtn.classList.add("player2Btn");

        const startBtn = document.createElement("button");
        startBtn.textContent = "Start Game";
        startBtn.classList.add("startBtn");

        const disclaimer = document.createElement("p");
        disclaimer.textContent = "As of right now, the 'Computer' mode option does not work. I am currently working on implemenenting it :-)";
        disclaimer.classList.add("disclaimer")

        setupDiv.appendChild(player1P);
        setupDiv.appendChild(player1HumanBtn);
        setupDiv.appendChild(player1CompBtn);
        setupDiv.appendChild(player2P);
        setupDiv.appendChild(player2HumanBtn);
        setupDiv.appendChild(player2CompBtn);
        setupDiv.appendChild(startBtn);
        setupDiv.appendChild(disclaimer)
        setupContainer.appendChild(setupDiv);

        const buttons = document.querySelectorAll(".player1Btn")
        for (const button of buttons) {
            button.addEventListener("click", function(){
                buttons.forEach(btn => {
                    btn.classList.remove("selected")
                });
                button.classList.add("selected")
            })
        }

        const buttons2 = document.querySelectorAll(".player2Btn")
        for (const button of buttons2) {
            button.addEventListener("click", function(){
                buttons2.forEach(btn => {
                    btn.classList.remove("selected")
                });
                button.classList.add("selected")
            })
        }

        startBtn.addEventListener("click", function(){
            setup = document.querySelector(".setup")
            setup.remove();
            beginGame();
        })
    }

    const gameOver = () => {
        playing = false;
        setInstruction(`${currentPlayer} is the winner!!!`)
        addResetButton();
    }

    const resetGame = () => {
        turn = 1;
        const boardElement = document.querySelector(".board")
        boardElement.remove();
        board.resetBoard();
        const setupDiv = document.querySelector(".setup")
        setInstruction("");
        setupDiv.remove();
        setupGame();
    }

    const takeTurn = (i) => {
        if(turn==1){
            currentPlayer = player1.getName();
            currentMarker = player1.getMarker();
            if(board.addMarker(i, currentMarker)){
                turn = 2;
                setInstruction(`It is ${player2.getName()}'s turn!`)
            }
        }else{
            currentPlayer = player2.getName();
            currentMarker = player2.getMarker();
            if(board.addMarker(i, currentMarker)){
                turn = 1;
                setInstruction(`It is ${player1.getName()}'s turn!`)
            }
        }

        if(board.checkForWin(currentMarker)===true){
            gameOver();
        }
    }

    return{beginGame, setupGame, takeTurn, getGameState}
})();

controller.setupGame();