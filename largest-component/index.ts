const graph: Graph = {
  '0': ['8', '1', '5'],
  '1': ['0'],
  '5': ['0', '8'],
  '8': ['0', '5'],
  '2': ['3', '4'],
  '3': ['2', '4'],
  '4': ['3', '2'],
};

function getLargestComponent(graph: Graph): number {
  const visitedNodes = new Set<string>();
  let largestComponent = 0;
  const nodes = Object.keys(graph)
  for (let node of nodes) {
    if (visitedNodes.has(node)) {
      continue;
    }
    const count = countNodes(graph, node, visitedNodes);
    if (count > largestComponent) {
      largestComponent = count;
    }
  }
  return largestComponent;
}

function countNodes(graph: Graph, current: string, visitedNodes: Set<string>): number {
  if (visitedNodes.has(current)) {
    return 0;
  }
  visitedNodes.add(current);
  let size = 1;

  for (let neighbor of graph[current]) {
    size += countNodes(graph, neighbor, visitedNodes);
  }
  return size;
}

getLargestComponent(graph);

// Add this to declare this file as module (own scope)
export {};
