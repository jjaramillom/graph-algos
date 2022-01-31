type Graph = Record<string, string[]>;
type Edge = [string, string];
// W => water, L => land
type IslandMap = ('W' | 'L')[][];
// [row,col]
type NodeCoordinates = [number, number];
