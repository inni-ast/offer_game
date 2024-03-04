import { data } from "./data.js";

export const SETTINGS = {
  maxMisses: [3, 5, 10],
};
export const GRID = [
  { size: "3x3", selected: true },
  { size: "4x4", selected: false },
  { size: "5x5", selected: false },
];
export const POINTS_TO_WIN = [
  { points: 3, selected: true },
  { points: 5, selected: false },
  { points: 10, selected: false },
];

export function setGirdSize(size) {
  switch (size) {
    case GRID[1].size:
      data.settings.gridSize.columnsCount = 4;
      data.settings.gridSize.rowsCount = 4;
      break;
    case GRID[2].size:
      data.settings.gridSize.columnsCount = 5;
      data.settings.gridSize.rowsCount = 5;
      break;
    default:
      data.settings.gridSize.columnsCount = 3;
      data.settings.gridSize.rowsCount = 3;
      break;
  }
}
export function setPointsToWin(points) {
  switch (points) {
    case POINTS_TO_WIN[1].points:
      data.settings.pointsToWin = 5;
      break;
    case POINTS_TO_WIN[2].points:
      data.settings.pointsToWin = 10;
      break;
    default:
      data.settings.pointsToWin = 3;
      break;
  }
}

export function setMaxMisses(misses) {
  switch (misses) {
    case SETTINGS.maxMisses[1]:
      data.settings.maximumMissesCount = 5;
      break;
    case SETTINGS.maxMisses[2]:
      data.settings.maximumMissesCount = 10;
      break;
    default:
      data.settings.maximumMissesCount = 3;
      break;
  }
}
