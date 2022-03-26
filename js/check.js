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

function ifCellInhabitVertical(len, shipId, clickedCell) {
  let ship = document.querySelector(shipId);
  if (
    Number(shipSpot.slice(1, 3)) < 14 - len &&
    ship !== null &&
    clickedCell.className === ""
  ) {
    let letter = shipSpot[0];

    for (let index = 1; index < len; index++) {
      let num = Number(shipSpot.slice(1, 3)) + index;
      let cellIndex = document.querySelectorAll("#" + letter + num);

      console.log(cellIndex[0]);
      if (cellIndex[0].className !== "") {
        return false;
      }
    }
    return true;
  }
}

function ifCellInhabitHorizontal(len, shipId, clickedCell) {
  let ship = document.querySelector(shipId);
  if (
    Number(clickedCell.slice(1, 3)) < 14 - len &&
    ship !== null &&
    clickedCell.className === ""
  ) {
    let num = Number(clickedCell.id.slice(1, 3));
    let letterIndex = LETTERS.indexOf(clickedCell.id[0]);

    for (let index = 1; index < len; index++) {
      let letters = LETTERS.indexOf(letterIndex + index);
      let cellIndex = document.querySelectorAll("#" + LETTERS[letterIndex] + num);

      // console.log(index);
      if (cellIndex[0] !== undefined) {
        // console.log(index);
        if (cellIndex[0] === "") {
          return false;
        }
      } else {
        console.log(index);
        return false;
      }
    }
    return true;
  }
}
