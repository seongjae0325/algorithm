// const matrix = [
// [4, 6],
// [1,1,0,1,1,0],
// [1,1,0,1,1,0],
// [1,1,1,1,1,1],
// [1,1,1,1,0,1]
// ]

const matrix = [
  [2, 25],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
];

function solution(matrix) {
  const target = matrix.shift();
  matrix[0][0] = 0;

  const queue = [[0, 0]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let answer = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      for (let j = 0; j < 4; j++) {
        const nx = node[0] + dx[j];
        const ny = node[1] + dy[j];
        if (
          nx > -1 &&
          nx < target[1] &&
          ny > -1 &&
          ny < target[0] &&
          matrix[ny][nx] === 1
        ) {
          if (nx === target[1] && ny === target[0]) {
            return ++answer;
          }
          queue.push([nx, ny]);
          matrix[ny][nx] = 0;
        }
      }
    }
    answer++;
  }

  return answer;
}

solution(matrix);
