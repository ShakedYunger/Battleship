"use strict";

let SIZE = 13;
let myBoard = null;
let opponentsBoard = null;
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

function createBoard() {
  let board = [];
  for (let row = 0; row < SIZE; row++) {
    board[row] = [];
    for (let col = 0; col < SIZE; col++) {
      namingCell(row, col);
    }
    myBoard = board;
    opponentsBoard = board;
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
  let elMyBoard = document.getElementById("myBoard");
  let elOpponentsBoard = document.getElementById("opponentsBoard");

  for (let row = 0; row < SIZE; row++) {
    var myTr = document.createElement("tr");
    var opponentsTr = document.createElement("tr");

    for (let col = 0; col < SIZE; col++) {
      let myCell = document.createElement("td");
      let opponentsCell = document.createElement("td");

      myTr.appendChild(myCell);
      opponentsTr.appendChild(opponentsCell);

      myCell.innerText = myBoard[row][col];
      opponentsCell.innerText = opponentsBoard[row][col];
    }
    setAttributesToCell(elOpponentsBoard);
    elMyBoard.appendChild(myTr);
    elOpponentsBoard.appendChild(opponentsTr);
  }
}

function setAttributesToCell(elOpponentsBoard) {
  for (var i = 0, row; (row = elOpponentsBoard.rows[i]); i++) {
    for (var j = 0, col; (col = row.cells[j]); j++) {
      if (LETTERS[i] === null || NUMBERS[j] === null) {
        col.id = "null";
      } else {
        col.id = LETTERS[i] + NUMBERS[j];
        col.className = "shipSpot";
        col.addEventListener("click", checkIfSpot);
      }
    }
  }
}

function createBattleship() {
  let battleships = document.getElementsByClassName("battleships");
  for (let len = 0; len < 3; len++) {
    let twoLenShip = document.createElement("div");
    twoLenShip.id = "twoLenShip";
    twoLenShip.className = "ship";
    twoLenShip.setAttribute("draggable", true);
    battleships[0].appendChild(twoLenShip);
  }

  for (let len = 0; len < 3; len++) {
    let threeLenShip = document.createElement("div");
    threeLenShip.id = "threeLenShip";
    threeLenShip.className = "ship";
    threeLenShip.setAttribute("draggable", true);
    battleships[0].appendChild(threeLenShip);
  }

  let fourLenShip = document.createElement("div");
  fourLenShip.id = "fourLenShip";
  fourLenShip.className = "ship";
  fourLenShip.setAttribute("draggable", true);
  battleships[0].appendChild(fourLenShip);

  let fiveLenShip = document.createElement("div");
  fiveLenShip.id = "fiveLenShip";
  fiveLenShip.className = "ship";
  fiveLenShip.setAttribute("draggable", true);
  battleships[0].appendChild(fiveLenShip);
}

createBoard();
createElBoard();
createBattleship();
setClickToships();
