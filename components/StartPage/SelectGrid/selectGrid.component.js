import { GRID } from "../../../data/settings.js";
import { setGirdSize } from "../../../data/settings.js";

export function SelectGrid() {
  const containerEl = document.createElement("label");
  containerEl.classList.add("settings__item");
  containerEl.append("Grid size");

  const selectEl = document.createElement("select");
  selectEl.name = "grid";

  for (let i = 0; i < GRID.length; i++) {
    const optionEl = document.createElement("option");

    optionEl.append(GRID[i].size);
    optionEl.selected = GRID[i].selected;
    optionEl.value = GRID[i].size;
    selectEl.append(optionEl);
  }
  selectEl.addEventListener("change", () => {
    setGirdSize(selectEl.value);
  });
  containerEl.append(selectEl);
  return containerEl;
}
