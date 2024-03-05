import { createEl } from "../../common/createEl.js";

export function Lose(catches, misses) {
  const winElement = document.createElement("div");

  const titleElement = createEl("h1", "You Lose!");
  const subTitleElement = createEl("h3", "You'll be lucky next times");
  const catchElement = createEl("p", `Catch: ${catches}`);
  const missElement = createEl("p", `Miss: ${misses}`);
  const timeElement = createEl("p", "Time:");

  winElement.append(
    titleElement,
    subTitleElement,
    catchElement,
    missElement,
    timeElement
  );
  return winElement;
}
