import { SETTINGS } from "../../../data/settings.js";
import { setGirdSize } from "../../../data/settings.js";

export function SelectGrid() {
  const { gridSize } = SETTINGS;

  const containerEl = document.createElement("label");
  containerEl.classList.add("settings__item");
  containerEl.append("Grid size");

  const selectEl = document.createElement("select");
  selectEl.name = "grid";

  for (let i = 0; i < gridSize.length; i++) {
    const optionEl = document.createElement("option");

    optionEl.append(`${gridSize[i]} x ${gridSize[i]}`);
    optionEl.value = gridSize[i];
    selectEl.append(optionEl);
  }
  selectEl.addEventListener("change", () => {
    setGirdSize(+selectEl.value);
  });
  containerEl.append(selectEl);
  return containerEl;
}
