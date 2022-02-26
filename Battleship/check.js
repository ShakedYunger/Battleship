function isWin(hits) {
  if (hits === 24) {
    let modal = document.createElement("div");
    modal.id = "modal";
    document.body.appendChild(modal);
    modal.innerText = "shaked has won";
    return true;
  }
}
