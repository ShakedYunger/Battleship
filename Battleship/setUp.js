"use strict";

let SIZE = 13;
let myBoard = null;
let myGuessinBoard = null;
let shipSpot = null;
const LETTERS = [
  null,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
];

let NUMBERS = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let direction = "vertical";

function createBoard() {
  let board = [];
  for (let row = 0; row < SIZE; row++) {
    board[row] = [];
    for (let col = 0; col < SIZE; col++) {
      namingCell(row, col);
    }
    myBoard = board;
    myGuessinBoard = board;
  }

  function namingCell(row, col) {
    if (row === 0) {
      board[row][col] = LETTERS[col];
    } else if (col === 0) {
      board[row][col] = NUMBERS[row];
    } else {
      board[row][col] = "O";
    }
  }
}

function createElBoard() {
  createBoard();
  let elMyBoard = document.getElementById("myBoard");
  let elMyGuessingBoard = document.getElementById("myGuessinBoard");

  for (let row = 0; row < SIZE; row++) {
    var myTr = document.createElement("tr");
    var myGuessinTr = document.createElement("tr");

    for (let col = 0; col < SIZE; col++) {
      let myCell = document.createElement("td");
      let myGuessinCell = document.createElement("td");

      myTr.appendChild(myCell);
      myGuessinTr.appendChild(myGuessinCell);

      myCell.innerText = myBoard[row][col];
      myGuessinCell.innerText = myGuessinBoard[row][col];
    }
    elMyBoard.appendChild(myTr);
    elMyGuessingBoard.appendChild(myGuessinTr);
  }
  setAttributesToOppoppnentsCell(elMyGuessingBoard);
}

function createBattleship() {
  let battleships = document.getElementsByClassName("battleships");
  for (let len = 0; len < 3; len++) {
    let twoLenShip = document.createElement("div");
    twoLenShip.id = "twoLenShip";
    twoLenShip.className = "ship";
    battleships[0].appendChild(twoLenShip);
  }

  for (let len = 0; len < 3; len++) {
    let threeLenShip = document.createElement("div");
    threeLenShip.id = "threeLenShip";
    threeLenShip.className = "ship";
    battleships[0].appendChild(threeLenShip);
  }

  let fourLenShip = document.createElement("div");
  fourLenShip.id = "fourLenShip";
  fourLenShip.className = "ship";
  battleships[0].appendChild(fourLenShip);

  let fiveLenShip = document.createElement("div");
  fiveLenShip.id = "fiveLenShip";
  fiveLenShip.className = "ship";
  battleships[0].appendChild(fiveLenShip);
}

let shipsOnBoard = 0;

function createReadyButton() {
  if (shipsOnBoard === 8) {
    let button = document.createElement("div");
    button.id = "readyButton";
    button.innerHTML = "ready";
    document.body.appendChild(button);
  }
}

function insertTurnButton() {
  let turnButton = document.getElementById("turnButton");
  turnButton.addEventListener("click", insertDirection);
}

function insertDirection() {
  if (direction === "horizontal") {
    direction = "vertical";
  } else {
    direction = "horizontal";
  }
}

insertTurnButton();
createElBoard();
createBattleship();
setClickToships();
callSetAtt();
