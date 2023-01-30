function solution(answers) {
  const answer = [];
  const list = [0, 0, 0];
  const people = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < answers.length; j++) {
      const studentAnswerType = people[i];

      if (answers[j] === studentAnswerType[j % studentAnswerType.length])
        list[i] += 1;
    }
  }

  console.log(list);
  const max = Math.max(...list);
  for (let i = 0; i < 3; i++) {
    if (max === list[i]) answer.push(i + 1);
  }

  return answer;
}
