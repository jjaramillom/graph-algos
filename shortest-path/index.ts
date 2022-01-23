import { buildGraph } from '../utils';

const edges: Edge[] = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

/* 

{
  "w": [ "x", "v" ],
  "x": [ "w", "y" ],
  "y": [ "x", "z" ],
  "z": [ "y", "v" ],
  "v": [ "z", "w" ]
}
*/

// Breadth first approach

function shortestPath(edges: Edge[], start: string, end: string) {
  const graph = buildGraph(edges);
  const visitedNodes = new Set<string>([start]);

  const queue: [string, number][] = [[start, 0]];

  while (queue.length) {
    const [currNode, distance] = queue.shift();

    if (visitedNodes.has(currNode)) {
      continue;
    }

    visitedNodes.add(currNode);

    if (currNode === end) {
      return distance;
    }
    const neighbors = graph[currNode].map((neighbor): [string, number] => [
      neighbor,
      distance + 1,
    ]);
    queue.push(...neighbors);
  }

  return -1;
}

shortestPath(edges, 'w', 'z');

// Add this to declare this file as module (own scope)
export {};
