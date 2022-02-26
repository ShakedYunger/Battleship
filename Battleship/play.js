"use strict";

let id = null;
let hits = 0;
let placeShipLen = 0;

function checkIfSpot() {
  id = this.id;
  let element = document.getElementById(id);
  if (element.className === "shipSpot") {
    hits++;
    isWin(hits);
    this.id = "hit";
    return true;
  } else {
    this.id = "notHit";
    console.log(false);
    return false;
  }
}

function setClickToships() {
  let shipsNodeList = document.querySelectorAll(".ship");
  console.log(shipsNodeList);
  shipsNodeList.forEach((element) =>
    element.addEventListener("click", returnLen)
  );
}

function returnLen() {
  if ((this.id = "twoLenShip")) {
    placeShipLen = 2;
    console.log(this.id);
    return 2;
  }
  if ((this.id = "threeLenShip")) {
    console.log(this.id);
    placeShipLen = 3;
    return 3;
  }
  if ((this.id = "fourLenShip")) {
    placeShipLen = 4;
    return 4;
  }
  if ((this.id = "fiveLenShip")) {
    placeShipLen = 5;
    return 5;
  }
}
