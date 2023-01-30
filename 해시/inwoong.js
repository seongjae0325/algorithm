function solution(clothes) {
  var answer = 1;
  let clothesObj = {};

  for (let i = 0; i < clothes.length; i++) {
    if (clothesObj[clothes[i][1]] === undefined) {
      clothesObj[clothes[i][1]] = [clothes[i][0]];
    } else {
      clothesObj[clothes[i][1]].push(clothes[i][0]);
    }
  }

  for (const key in clothesObj) {
    answer *= clothesObj[key].length + 1;
  }

  return answer - 1;
}
