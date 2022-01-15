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
