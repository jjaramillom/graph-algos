# Graph algorithms

Video link: https://www.youtube.com/watch?v=tWVWeAqZ0WU

A graph is basically a group of nodes and edges. Nodes are simply points, while edges are connections between nodes.

### Directed graphs

Have directions. This mean, each edge has a defined direction in which movement is possible.

### Undirected graphs

No direction. So movement is free in any direction of an edge.

### Adjacency list

Is a structure with the permitted movements between nodes. E.g.

```javascript
{
  a: [b, c],
  b: [d],
  c: [b],
  d: [],
}
```

## Algorithms

### 1. Depth first traversal and Braedth first traversal.

Both algorithms are quite similar in the implementation. In the behavior they differ a lot though.
The only implementation difference is that Breadth first uses a **queue** (first in, first out). While Depth first uses a **stack** (first in, last out).

Regarding the behavior, Breadth first traverses the graph starting with the closest points. Depth first goes one path at a time, until it reaches the end, then starts with another path.

![image info](./images/BFS-DFS.png)
