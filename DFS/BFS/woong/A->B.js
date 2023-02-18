// const input = [100, 40021]
// const input = [2, 162]
const input = [4, 42];

function solution(input) {
  const [initNum, target] = input;
  let answer = 1;
  const queue = [initNum];

  while (queue.length > 0) {
    const size = queue.length;

    if (size === 1 && queue[0] * 2 > target && Number(`${queue}1`) > target)
      return -1;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      const twiceNum = node * 2;
      const plusOneNum = Number(`${node}1`);

      if (plusOneNum === target || twiceNum === target) {
        return ++answer;
      }

      if (plusOneNum < target) queue.push(plusOneNum);
      if (twiceNum < target) queue.push(twiceNum);
    }
    answer++;
  }
  return answer;
}

solution(input);
