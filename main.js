const input = require("prompt-sync")();

let board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

let currentPlayer = "X";
let winner = undefined;
let gameRunning = true;

// game board

const printBoard = (board) => {
    console.log(board[0] + " | " + board[1] + " | " + board[2]);
    console.log("----------");
    console.log(board[3] + " | " + board[4] + " | " + board[5]);
    console.log("----------");
    console.log(board[6] + " | " + board[7] + " | " + board[8]);
};

// player input

const playerInput = (board) => {
    let inp = +input("Enter the number 1-9 => ");
    if (inp >= 1 && inp <= 9 && board[inp - 1] === "-") {
        board[inp - 1] = currentPlayer;
    } else {
        console.log("Ooops player is already in that spot");
    }
};

// check win or tie

const checkHorizontal = (board) => {
    if (board[0] === board[1] && board[1] === board[2] && board[1] !== "-") {
        winner = board[0];
        return true;
    } else if (
        board[3] === board[4] &&
        board[4] === board[5] &&
        board[3] !== "-"
    ) {
        winner = board[3];
        return true;
    } else if (
        board[6] === board[7] &&
        board[7] === board[8] &&
        board[6] !== "-"
    ) {
        winner = board[6];
        return true;
    }
};

const checkRow = (board) => {
    if (board[0] === board[3] && board[3] === board[6] && board[0] !== "-") {
        winner = board[0];
        return true;
    } else if (
        board[1] === board[4] &&
        board[4] === board[7] &&
        board[1] !== "-"
    ) {
        winner = board[1];
        return true;
    } else if (
        board[2] === board[5] &&
        board[5] === board[8] &&
        board[2] !== "-"
    ) {
        winner = board[2];
        return true;
    }
};

const checkDiag = (board) => {
    if (board[0] === board[4] && board[0] === board[8] && board[0] !== "-") {
        winner = board[0];
        return true;
    } else if (
        board[2] === board[4] &&
        board[4] === board[6] &&
        board[2] !== "-"
    ) {
        winner = board[2];
        return true;
    }
};

const checkTie = (board) => {
    if (!board.includes("-")) {
        printBoard(board);
        console.log("It is a tie");
        gameRunning = false;
    }
};

const checkWin = () => {
    if (checkDiag(board) || checkHorizontal(board) || checkRow(board)) {
        gameRunning = false;
        console.log(`The winner is ${winner}`);
    }
};

// switch the player

const switchPlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
};

// check game

while (gameRunning) {
    printBoard(board);
    playerInput(board);
    checkWin();
    checkTie(board);
    switchPlayer();
}
