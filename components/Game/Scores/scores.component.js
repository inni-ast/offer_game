import { data } from "./../../../data/data.js";

export function Scores() {
  const container = document.createElement("div");
  const countElement = document.createElement("p");

  countElement.append(
    `Catch: ${data.scores.catchesCount} Miss: ${data.scores.missesCount}`
  );

  container.append(countElement);

  return container;
}
