export function buildGraph(edges: Edge[]): Graph {
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