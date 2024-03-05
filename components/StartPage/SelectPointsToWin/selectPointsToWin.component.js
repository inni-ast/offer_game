import { SETTINGS, setPointsToWin } from "../../../data/settings.js";

export function SelectPointsToWin() {
  const containerEl = document.createElement("label");
  containerEl.classList.add("settings__item");

  containerEl.append("Points to win");

  const selectEl = document.createElement("select");
  selectEl.name = "pointsToWin";

  for (let i = 0; i < SETTINGS.pointsToWin.length; i++) {
    const optionEl = document.createElement("option");

    optionEl.append(`${SETTINGS.pointsToWin[i]} pts`);
    optionEl.value = SETTINGS.pointsToWin[i];
    selectEl.append(optionEl);

    selectEl.addEventListener("change", () => {
      setPointsToWin(+selectEl.value);
    });
  }
  containerEl.append(selectEl);
  return containerEl;
}
