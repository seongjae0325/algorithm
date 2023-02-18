function solution(root) {
  let count = 1;
  const queue = [];

  queue.push(...root.children);

  while (queue.length !== 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const { children } = queue.shift();
      if (children.length !== 0) queue.push(...children);
    }

    count++;
  }

  return count;
}
