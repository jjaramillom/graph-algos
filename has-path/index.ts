const graph: Graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

// Depth first
function hasPathDepth(graph: Graph, src: string, dst: string) {
  if (src === dst) {
    return true;
  }

  for (let neighbor of graph[src]) {
    if (hasPathDepth(graph, neighbor, dst)) {
      return true;
    }
  }
  return false;
}

// Breadth first
function hasPathBreadth(graph: Graph, src: string, dst: string) {
  const queue: string[] = [src];

  while (queue.length) {
    const current = queue.shift();
    if (current === dst) {
      return true;
    }

    queue.push(...graph[current]);
  }
  return false;
}

// Add this to declare this file as module (own scope)
export {};
