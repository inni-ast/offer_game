import { createEl } from "../../common/createEl.js";

export function Win(catches, misses) {
  const winElement = document.createElement("div");

  const titleElement = createEl("h1", "You Win!");
  const subTitleElement = createEl("h3", "Congratulations");
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
