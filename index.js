import { Game } from "./components/Game/game.component.js";
import { subscribe, data, GAME_STATUSES } from "./data/data.js";
import { Finish } from "./components/Finish/finish.component.js";
import { StartPage } from "./components/StartPage/startPage.component.js";

export function renderUI() {
  const appElement = document.getElementById("app");
  appElement.innerHTML = "";

  switch (data.gameStatus) {
    case GAME_STATUSES.IN_PROGRESS:
      const gameElement = Game();
      appElement.append(gameElement);
      break;

    case GAME_STATUSES.FINISH:
      const finishElement = Finish();
      appElement.append(finishElement);
      break;

    default:
      const startPageElement = StartPage();
      appElement.append(startPageElement);
      break;
  }
}
renderUI();
subscribe(renderUI);
