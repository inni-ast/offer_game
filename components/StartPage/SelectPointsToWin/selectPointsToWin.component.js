import { POINTS_TO_WIN, setPointsToWin } from "../../../data/settings.js";

export function SelectPointsToWin() {
  const containerEl = document.createElement("label");
  containerEl.classList.add("settings__item");

  containerEl.append("Points to win");

  const selectEl = document.createElement("select");
  selectEl.name = "pointsToWin";

  for (let i = 0; i < POINTS_TO_WIN.length; i++) {
    const optionEl = document.createElement("option");

    optionEl.append(`${POINTS_TO_WIN[i].points} pts`);
    optionEl.selected = POINTS_TO_WIN[i].selected;
    optionEl.value = POINTS_TO_WIN[i].points;
    selectEl.append(optionEl);

    selectEl.addEventListener("change", () => {
      console.log(selectEl.value);
      setPointsToWin(selectEl.value);
    });
  }
  containerEl.append(selectEl);
  return containerEl;
}
