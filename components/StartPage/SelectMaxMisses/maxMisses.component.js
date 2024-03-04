import { SETTINGS, setMaxMisses } from "../../../data/settings.js";

export function MaxMisses() {
  const containerEl = document.createElement("label");
  containerEl.classList.add("settings__item");

  containerEl.append("Maximum misses");

  const selectEl = document.createElement("select");
  selectEl.name = "maxMisses";

  for (let i = 0; i < SETTINGS.maxMisses.length; i++) {
    const optionEl = document.createElement("option");

    optionEl.append(SETTINGS.maxMisses[i]);
    optionEl.value = SETTINGS.maxMisses[i];
    selectEl.append(optionEl);
  }
  selectEl.addEventListener("change", () => {
    console.log(selectEl.value);
    setMaxMisses(selectEl.value);
  });
  containerEl.append(selectEl);
  return containerEl;
}
