import { data } from "./data.js";

export const SETTINGS = {
  maxMisses: [3, 5, 100],
  pointsToWin: [3, 5, 10],
  gridSize: [3, 4, 5, 6, 7, 8],
};

export function setGirdSize(size) {
  if (size) {
    data.settings.gridSize.columnsCount = size;
    data.settings.gridSize.rowsCount = size;
  }
}
export function setPointsToWin(points) {
  if (points) {
    data.settings.pointsToWin = points;
  }
}

export function setMaxMisses(misses) {
  if (misses) {
    data.settings.maximumMissesCount = misses;
  }
}
