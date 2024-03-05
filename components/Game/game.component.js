import { Grid } from "./Grid/grid.component.js";
import { Scores } from "./Scores/scores.component.js";
import { Settings } from "./Settings/settings.component.js";

export function Game() {
  const container = document.createElement("div");
  container.classList.add("game");
  const settingsElement = Settings();
  const scoresElement = Scores();
  const gridElement = Grid();

  container.append(settingsElement, scoresElement, gridElement);
  return container;
}
