function aggressiveCows(stalls, numCows) {
  stalls.sort((a, b) => a - b);
  const numStalls = stalls.length;
  let low = 0;
  let high = stalls[numStalls - 1] - stalls[0];
  let maxMinDistance = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (canPlaceCows(stalls, numCows, mid)) {
      maxMinDistance = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return maxMinDistance;
}

function canPlaceCows(stalls, numCows, minDistance) {
  let count = 1;
  let currentStall = stalls[0];

  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - currentStall >= minDistance) {
      count++;
      currentStall = stalls[i];
    }
    if (count === numCows) {
      return true;
    }
  }

  return false;
}

const stalls = [1, 2, 4, 8, 9];
const numCows = 3;

const result = aggressiveCows(stalls, numCows);
console.log(`The maximum minimum distance is: ${result}`);
