function isWin(hits) {
  if (hits === 24) {
    let modal = document.createElement("div");
    modal.id = "modal";
    document.body.appendChild(modal);
    modal.innerText = "shaked has won";
    return true;
  }
}

function checkIfSpot() {
  id = this.id;
  let element = document.getElementById(id);
  if (element.className === "myGuessinShipSpot") {
    hits++;
    isWin(hits);
    this.id = "hit";
    console.log(true);
    return true;
  } else {
    this.id = "notHit";
    console.log(false);
    return false;
  }
}

function ifCellInhabit(len, shipId, clickedCell) {
  let ship = document.querySelector(shipId);
  if (
    Number(shipSpot.slice(1, 3)) < 14 - len &&
    ship !== null &&
    clickedCell.className === ""
  ) {
    for (let index = 1; index < len; index++) {
      let numberIndex = Number(shipSpot.slice(1, 3)) + index;
      let lettersIndex = shipSpot[0];
      let cellIndex = document.querySelectorAll(
        "#" + lettersIndex + numberIndex
      );

      if (cellIndex[0].className !== "") {
        return false;
      }
    }
    return true;
  }
}
