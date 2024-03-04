import { data } from "../../data/data.js";
import { Button } from "../common/button.component.js";

export function Finish() {
  const finishElement = document.createElement("div");

  if (data.scores.catchesCount === data.settings.pointsToWin) {
    finishElement.append("Win");
  } else {
    finishElement.append("You lose!");
  }
  finishElement.append(Button());
  return finishElement;
}
