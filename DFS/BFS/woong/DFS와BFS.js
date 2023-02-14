const input = [
  [5, 5, 3],
  [5, 4],
  [5, 2],
  [1, 2],
  [3, 4],
  [3, 1],
];

const info = input.shift();
const graph = {};

input.forEach((itemArr) => {
  itemArr.sort((a, b) => a - b);
  if (graph[itemArr[0]] === undefined) graph[itemArr[0]] = [itemArr[1]];
  else graph[itemArr[0]].push(itemArr[1]);

  if (graph[itemArr[1]] === undefined) graph[itemArr[1]] = [itemArr[0]];
  else graph[itemArr[1]].push(itemArr[0]);
});

//내림 차순
for (const key in graph) {
  graph[key].sort((a, b) => b - a);
}
const descendingGraph = JSON.parse(JSON.stringify(graph));

function dfsSolution(input) {
  const stack = input[info[2]];
  const visitedNode = [info[2]];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!visitedNode.includes(node)) {
      visitedNode.push(node);
      stack.push(...input[node]);
    }
  }

  return visitedNode;
}

dfsSolution(descendingGraph);

//오름 차순
for (const key in graph) {
  graph[key].sort((a, b) => a - b);
}
const ascendingGraph = JSON.parse(JSON.stringify(graph));

function bfsSolution(input) {
  const queue = input[info[2]];
  const visitedNode = [info[2]];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visitedNode.includes(node)) {
      visitedNode.push(node);
      queue.push(...input[node]);
    }
  }

  return visitedNode;
}

bfsSolution(ascendingGraph);
