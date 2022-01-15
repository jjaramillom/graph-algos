type Graph = Record<string, string[]>;

const graph: Graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

function depthFirstPrint(graph: Graph, source: string): void {
  const stack: string[] = [source];

  while (stack.length) {
    const current = stack.pop();
    if (graph[current].length) {
      stack.push(...graph[current]);
    }
    console.log(current);
  }
}

function breadthFirstPrint(graph: Graph, source: string): void {
  const queue: string[] = [source];

  while (queue.length) {
    const current = queue.shift();
    if (graph[current].length) {
      queue.push(...graph[current]);
    }
    console.log(current);
  }
}

depthFirstPrint(graph, 'a');
breadthFirstPrint(graph, 'a');
