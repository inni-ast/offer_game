import { showStartPage } from "../../../data/data.js";

export function ButtonPlayAgain() {
  const btnElement = document.createElement("button");
  btnElement.classList.add("btn");

  btnElement.append("Play again");
  btnElement.addEventListener("click", () => {
    showStartPage();
  });
  return btnElement;
}
