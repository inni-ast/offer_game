import { SETTINGS, setMaxMisses } from "../../../data/settings.js";

export function MaxMisses() {
  const { maxMisses } = SETTINGS;

  const containerEl = document.createElement("label");
  containerEl.classList.add("settings__item");

  containerEl.append("Maximum misses");

  const selectEl = document.createElement("select");
  selectEl.name = "maxMisses";

  for (let i = 0; i < maxMisses.length; i++) {
    const optionEl = document.createElement("option");

    optionEl.append(maxMisses[i]);
    optionEl.value = maxMisses[i];
    selectEl.append(optionEl);
  }
  selectEl.addEventListener("change", () => {
    setMaxMisses(+selectEl.value);
  });

  containerEl.append(selectEl);
  return containerEl;
}
