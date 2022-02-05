const map: IslandMap = [
  ['W', 'L', 'W', 'W', 'L', 'W'],
  ['L', 'L', 'W', 'W', 'L', 'W'],
  ['W', 'L', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'L', 'W'],
  ['W', 'L', 'W', 'L', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W', 'W'],
];

function getSmallestIsland(map: IslandMap) {
  const visitedCells = new Set<string>();
  let smallestIsland = Infinity;

  map.forEach((row, ri) =>
    row.forEach((cell, ci) => {
      if (!visitedCells.has(`${ri},${ci}`) && cell === 'L') {
        const currIslandSize = getIslandSize(map, ri, ci, visitedCells);
        if (currIslandSize < smallestIsland) {
          smallestIsland = currIslandSize;
        }
      }
      visitedCells.add(`${ri},${ci}`);
    })
  );

  return smallestIsland;
}

function getIslandSize(map: IslandMap, ri: number, ci: number, visitedCells: Set<string>) {
  let islandSize: number = 0;
  const queue: [number, number][] = [[ri, ci]];
  while (queue.length) {
    islandSize++;
    const currentNode = queue.shift();
    visitedCells.add(`${currentNode[0]},${currentNode[1]}`);
    queue.push(
      ...getAdjacentLandCoordinates(map, currentNode[0], currentNode[1]).filter(
        (adjacentLandCoord) =>
          !visitedCells.has(`${adjacentLandCoord[0]},${adjacentLandCoord[1]}`)
      )
    );
  }
  return islandSize;
}

function getAdjacentLandCoordinates(
  map: IslandMap,
  ri: number,
  ci: number
): NodeCoordinates[] {
  const neighbors: NodeCoordinates[] = [];
  const possibleNeighborsCoordinates: NodeCoordinates[] = [
    [ri, ci + 1],
    [ri, ci - 1],
    [ri + 1, ci],
    [ri - 1, ci],
  ];

  for (let possibleNeighbor of possibleNeighborsCoordinates) {
    const cellValue = map[possibleNeighbor[0]]?.[possibleNeighbor[1]];
    if (cellValue === 'L') {
      neighbors.push(possibleNeighbor);
    }
  }

  return neighbors;
}

getSmallestIsland(map);
