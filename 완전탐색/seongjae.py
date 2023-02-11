def solution(answers):
    score = {"수포1점수": 0, "수포2점수": 0, "수포3점수": 0}

    winner = []

    수포1 = [1, 2, 3, 4, 5]
    수포2 = [2, 1, 2, 3, 2, 4, 2, 5]
    수포3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ]

    for i in range(len(answers)):
        if answers[i] == 수포1[(i % 5)]:
            score["수포1점수"] += 1
        if answers[i] == 수포2[(i % 8)]:
            score["수포2점수"] += 1
        if answers[i] == 수포3[(i % 10)]:
            score["수포3점수"] += 1

    score_values = list(score.values())
    non_duplicated_score_values = list(set(score_values))

    if len(score_values) == len(non_duplicated_score_values):
        max_score_key = max(score, key=score.get)
        winner.append(int(max_score_key[2]))
    else:
        for key, value in score.items():
            if value == max(non_duplicated_score_values):
                winner.append(int(key[2]))
                
    return winner