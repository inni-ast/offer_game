import { startNewGame } from "../../data/data.js";

export function Button() {
  const btnElement = document.createElement("button");

  btnElement.append("Start game");
  btnElement.addEventListener("click", () => {
    console.log("start");
    startNewGame();
  });
  return btnElement;
}
