function solution(numbers, target) {
    var answer = 0;
    var length = numbers.length;
    function search(idx , val) {
        if(idx < length) {
            search(idx+1, val + numbers[idx]);
            search(idx+1, val - numbers[idx]);
        } else {
            if(val === target) {
                answer++;
            }
        }
    }
    search(0, 0);

    return answer;
}
