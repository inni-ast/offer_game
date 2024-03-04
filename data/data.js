export const GAME_STATUSES = {
  SETTINGS: "settings",
  IN_PROGRESS: "in-progress",
  FINISH: "finish",
};
export const data = {
  scores: {
    catchesCount: 0,
    missesCount: 0,
  },
  isImageExist: true,
  coords: {
    x: 0,
    y: 0,
  },
  settings: {
    gridSize: {
      columnsCount: 3,
      rowsCount: 3,
    },
    maximumMissesCount: 3,
    pointsToWin: 3,
  },
  gameStatus: GAME_STATUSES.SETTINGS,
};
let subscriber = () => {};

export function subscribe(observer) {
  subscriber = observer;
}
export function jumpOfferToRandomPosition(params) {
  let newX, newY;
  do {
    newX = generateRandomInt(data.settings.gridSize.columnsCount);
    newY = generateRandomInt(data.settings.gridSize.rowsCount);
  } while (data.coords.x === newX && data.coords.y === newY);
  data.coords.x = newX;
  data.coords.y = newY;
}

function generateRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export function catchOffer(params) {
  clearInterval(jumpIntervalId);
  data.scores.catchesCount++;

  if (data.scores.catchesCount === data.settings.pointsToWin) {
    data.gameStatus = GAME_STATUSES.FINISH;
  } else {
    jumpOfferToRandomPosition();
    runJumpInterval();
  }
  subscriber();
}
function missOffer(params) {
  data.scores.missesCount++;
  if (data.scores.missesCount === data.settings.maximumMissesCount) {
    data.gameStatus = GAME_STATUSES.FINISH;
    clearInterval(jumpIntervalId);
  }
  jumpOfferToRandomPosition();

  subscriber();
}
let jumpIntervalId;

function runJumpInterval() {
  jumpIntervalId = setInterval(missOffer, 2000);
}

export function startNewGame() {
  data.gameStatus = GAME_STATUSES.IN_PROGRESS;
  data.scores.catchesCount = 0;
  data.scores.missesCount = 0;

  subscriber();
  runJumpInterval();
}
