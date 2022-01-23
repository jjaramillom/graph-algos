import { buildGraph } from '../utils';

const edges: Edge[] = [
  ['i', 'j'],
  ['k', 'i'],
  ['k', 'j'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

// This Graph has a cycle (i,j,k). We have to manage this, otherwise we would keep moving between these nodes.
function hasPathDepth(
  graph: Graph,
  src: string,
  dst: string,
  visitedNodes: Set<string>
): boolean {
  if (src === dst) {
    return true;
  }
  if (visitedNodes.has(src)) {
    return false;
  }

  visitedNodes.add(src);

  for (let neighbor of graph[src]) {
    if (hasPathDepth(graph, neighbor, dst, visitedNodes)) {
      return true;
    }
  }
  return false;
}

function undirectedPath(edges: Edge[], src: string, dst: string) {
  const graph = buildGraph(edges);
  const visitedNodes = new Set<string>();
  return hasPathDepth(graph, 'i', 'k', visitedNodes);
}

console.log(undirectedPath(edges, 'i', 'k'));

// Add this to declare this file as module (own scope)
export {};
