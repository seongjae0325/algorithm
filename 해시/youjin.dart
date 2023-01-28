int solution(List<List<String>> clothes) {
  // 1. 곱의 법칙을 적용하기 위한 곱하는 최소의 수 (아예 옷을 안입는다는 상황을 넣어둠, 이후 빼야함)
  int answer = 1;
  Map<String, int> map = {};

  for (List<String> clothNKind in clothes) {
    // 2. map 을 key = clothNKind[1], value = clothNkind[0].length 로 세팅한다.
    map[clothNKind[1]] = (map[clothNKind[1]] ?? 0) + 1;
  }

  // 3. 옷을 입을 때, 동시에 입을 확률은 m x n 가지, 즉 곱의 법칙을 적용한다.
  for (String key in map.keys) {
    answer *= (map[key] ?? 0) + 1;
  }

  return answer - 1;
}


void main() {
  final answer = solution([
    ["red_hat", "hat"],
    ["bennie", "hat"],
    ["black_long_coat", "coat"],
    ["long_boots", "shoes"],
    ["sneakers", "shoes"],
    ["sharp_red_shoe", "shoes"]
  ]);
  // answer = 23;
}
