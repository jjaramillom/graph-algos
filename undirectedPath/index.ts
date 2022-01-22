const edges: Edge[] = [
  ['i', 'j'],
  ['k', 'i'],
  ['k', 'j'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

// First we convert the edges list to an adjacency list
function buildGraph(edges: Edge[]): Graph {
  const graph: Graph = {};

  edges.forEach((edge) => {
    const firstEdge = edge[0];
    const secondEdge = edge[1];
    if (!graph[firstEdge]) {
      graph[firstEdge] = [secondEdge];
    } else if (!graph[firstEdge].includes(secondEdge)) {
      graph[firstEdge].push(secondEdge);
    }

    if (!graph[secondEdge]) {
      graph[secondEdge] = [firstEdge];
    } else if (!graph[secondEdge].includes(firstEdge)) {
      graph[secondEdge].push(firstEdge);
    }
  });
  return graph;
}

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
