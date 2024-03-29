import { startNewGame } from "../../data/data.js";

export function Button() {
  const btnElement = document.createElement("button");
  btnElement.classList.add("btn");

  btnElement.append("Start game");
  btnElement.addEventListener("click", () => {
    startNewGame();
  });
  return btnElement;
}
