const graph: Graph = {
  '0': ['8', '1', '5'],
  '1': ['0'],
  '5': ['0', '8'],
  '8': ['0', '5'],
  '2': ['3', '4'],
  '3': ['2', '4'],
  '4': ['3', '2'],
};

function connectedComponentsCount(graph: Graph): number {
  const visitedNodes = new Set<string>();
  let count = 0;
  for (let node in graph) {
    if (explore(graph, node, visitedNodes)) {
      count++;
    }
  }
  return count;
}

function explore(graph: Graph, current: string, visitedNodes: Set<string>): boolean {
  if (visitedNodes.has(current)) {
    return false;
  }
  visitedNodes.add(current);

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visitedNodes);
  }
  return true;
}

connectedComponentsCount(graph);
