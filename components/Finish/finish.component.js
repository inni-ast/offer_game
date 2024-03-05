import { data } from "../../data/data.js";
import { ButtonPlayAgain } from "./BtnPlayAgain/btnPlayAgain.component.js";
import { Lose } from "./Lose/lose.component.js";
import { Win } from "./Win/win.component.js";

export function Finish() {
  const finishElement = document.createElement("div");
  finishElement.classList.add("main", "finish");

  if (data.scores.catchesCount === data.settings.pointsToWin) {
    const winElement = Win(data.scores.catchesCount, data.scores.missesCount);

    finishElement.append(winElement);
  } else {
    const loseElement = Lose(data.scores.catchesCount, data.scores.missesCount);

    finishElement.append(loseElement);
  }

  finishElement.append(ButtonPlayAgain());
  return finishElement;
}
