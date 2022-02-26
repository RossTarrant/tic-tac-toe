const board = (() => {

    let board = [];

    const boardElement = document.querySelector(".board");
    for(let i = 0; i < 9; i++){
        newTile = document.createElement("div");
        newTile.classList.add("tile");
        newTile.addEventListener("click", function (){
            controller.takeTurn(i);
        })
        board.push("")
        boardElement.appendChild(newTile);
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

    return{addMarker, resetBoard, checkForWin};

})();


const Player = (name, marker) => {
    const getName = () => name;
    const getMarker = () => marker;
    return {getName, getMarker}
};

const player1 = Player("Ross", "X");
const player2 = Player("Hannah", "O");

const controller = (() => {

    let turn = 1;
    let counter = 0;
    let instruction = `It is ${player1.getName()}'s turn!`;

    const setInstruction = (instruction) => {
        // Set instruction
        let instructionElement = document.querySelector(".instruction");
        instructionElement.textContent = instruction;
    }

    const takeTurn = (i) => {
        counter ++;
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
            setInstruction(`${currentPlayer} is the winner!!!`)
        }
    }

    setInstruction(instruction);

    return{takeTurn}
})();