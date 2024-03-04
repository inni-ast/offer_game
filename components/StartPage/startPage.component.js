import { Button } from "../common/button.component.js";
import { SelectGrid } from "./SelectGrid/selectGrid.component.js";
import { MaxMisses } from "./SelectMaxMisses/maxMisses.component.js";
import { SelectPointsToWin } from "./SelectPointsToWin/selectPointsToWin.component.js";

export function StartPage() {
  const container = document.createElement("section");
  const headerElement = document.createElement("h1");
  headerElement.append("Catch the Offer");

  const settingsElement = document.createElement("div");
  settingsElement.classList.add("settings");

  const selectGridElement = SelectGrid();
  const selectPointsToWinElement = SelectPointsToWin();
  const selectMaxMissesElement = MaxMisses();

  settingsElement.append(
    selectGridElement,
    selectPointsToWinElement,
    selectMaxMissesElement
  );

  const btnElement = Button();

  container.append(headerElement, settingsElement, btnElement);
  return container;
}
