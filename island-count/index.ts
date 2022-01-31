const map: IslandMap = [
  ['W', 'L', 'W', 'W', 'L', 'W'],
  ['L', 'L', 'W', 'W', 'L', 'W'],
  ['W', 'L', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'L', 'W'],
  ['W', 'L', 'W', 'L', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W', 'W'],
];

function countIslands(map: IslandMap): number {
  const visitedCells = new Set<string>();
  let islands = 0;

  map.forEach((row, ri) =>
    row.forEach((cell, ci) => {
      if (!visitedCells.has(`${ri},${ci}`) && cell === 'L') {
        islands++;
        traverseNode(map, ri, ci, visitedCells);
      }
      visitedCells.add(`${ri},${ci}`);
    })
  );

  return islands;
}

function traverseNode(map: IslandMap, ri: number, ci: number, visitedCells: Set<string>) {
  const queue: [number, number][] = [[ri, ci]];
  while (queue.length) {
    const currentNode = queue.shift();
    visitedCells.add(`${currentNode[0]},${currentNode[1]}`);
    queue.push(
      ...getAdjacentLandCoordinates(map, currentNode[0], currentNode[1]).filter(
        (adjacentLandCoord) =>
          !visitedCells.has(`${adjacentLandCoord[0]},${adjacentLandCoord[1]}`)
      )
    );
  }
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

countIslands(map);

// Add this to declare this file as module (own scope)
export {};
