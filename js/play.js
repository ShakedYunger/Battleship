"use strict";

let id = null;
let hits = 0;
let ShipLen = 0;

const battleships = null;

function setClickToships() {
  let shipsNodeList = document.querySelectorAll(".ship");
  shipsNodeList.forEach((element) =>
    element.addEventListener("click", returnLen)
  );
}

function returnLen() {
  if (this.id === "twoLenShip") {
    ShipLen = 2;
    return 2;
  } else if (this.id === "threeLenShip") {
    ShipLen = 3;
    return 3;
  } else if (this.id === "fourLenShip") {
    ShipLen = 4;
    return 4;
  } else if (this.id === "fiveLenShip") {
    ShipLen = 5;
    return 5;
  }
}

function setAttributesToOppoppnentsCell(elMyGuessingBoard) {
  for (var i = 0, row; (row = elMyGuessingBoard.rows[i]); i++) {
    for (var j = 0, col; (col = row.cells[j]); j++) {
      if (LETTERS[i] === null || NUMBERS[j] === null) {
        col.id = "null";
      } else {
        col.id = LETTERS[j] + NUMBERS[i];
        col.addEventListener("click", checkIfSpot);
      }
    }
  }
}

function setAttributesToMyCell(elMyBoard) {
  for (var i = 0, row; (row = elMyBoard.rows[i]); i++) {
    for (var j = 0, col; (col = row.cells[j]); j++) {
      if (LETTERS[i] === null || NUMBERS[j] === null) {
        col.id = "null";
      } else {
        col.id = LETTERS[j] + NUMBERS[i];
        col.addEventListener("click", returnCellId);
      }
    }
  }
}

function returnCellId() {
  switch (ShipLen) {
    case 2:
      placeShipsOnBoard(this, 2, "#twoLenShip", "rgb(187, 6, 6)");
      break;
    case 3:
      placeShipsOnBoard(this, 3, "#threeLenShip", "rgb(121, 39, 214)");
      break;
    case 4:
      placeShipsOnBoard(this, 4, "#fourLenShip", "rgb(52, 192, 39)");
      break;
    case 5:
      placeShipsOnBoard(this, 5, "#fiveLenShip", "rgb(154, 184, 23)");
      break;

    default:
      break;
  }
  createReadyButton();
}

function placeShipsOnBoard(clickedCell, len, shipId, color) {
  shipSpot = clickedCell.id;
  if (
    direction === "vertical" &&
    ifCellInhabitVertical(len, shipId, clickedCell) === true
  ) {
    placeVerticaly(clickedCell, len, color, shipId);
  } else if (
    direction === "horizontal" &&
    ifCellInhabitHorizontal(len, shipId, clickedCell) === true
  ) {
    placeHorizontaly(clickedCell, len, color, shipId);
  }
}

function placeVerticaly(clickedCell, len, color, shipId) {
  shipsOnBoard++;
  document.querySelectorAll(shipId)[0].remove();

  for (let index = 1; index < len; index++) {
    let numberIndex = Number(shipSpot.slice(1, 3)) + index;
    let lettersIndex = shipSpot[0];
    let cellIndex = document.querySelectorAll("#" + lettersIndex + numberIndex);

    cellIndex[0].className = "myGuessinShipSpot";
    cellIndex[1].className = "myShipSpot";
    cellIndex[1].style.backgroundColor = color;
  }

  document.querySelectorAll("#" + clickedCell.id)[0].className =
    "myGuessinShipSpot";
  clickedCell.style.backgroundColor = color;
  clickedCell.className = "myShipSpot";
}

function placeHorizontaly(clickedCell, len, color, shipId) {
  console.log(123);
  shipsOnBoard++;
  document.querySelectorAll(shipId)[0].remove();
  let indexOfLetter = LETTERS.indexOf(clickedCell.id[0]);

  for (let index = 1; index < len; index++) {
    let numberIndex = Number(shipSpot.slice(1, 3));
    let lettersIndex = LETTERS[indexOfLetter + index];
    let cellIndex = document.querySelectorAll("#" + lettersIndex + numberIndex);

    cellIndex[0].className = "myGuessinShipSpot";
    cellIndex[1].className = "myShipSpot";
    cellIndex[1].style.backgroundColor = color;
  }
  document.querySelectorAll("#" + clickedCell.id)[0].className =
    "myGuessinShipSpot";
  clickedCell.style.backgroundColor = color;
  clickedCell.className = "myShipSpot";
}

function callSetAtt() {
  let elMyBoard = document.getElementById("myBoard");
  setAttributesToMyCell(elMyBoard);
}
