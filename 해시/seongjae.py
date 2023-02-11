def solution(clothes):
    clothes_store = {}

    for x in clothes:
        cloth = x[0]
        category = x[1]
        if category in clothes_store:
            clothes_store[category] = clothes_store[category] + [cloth]
        else:
            clothes_store[category] = [cloth]

    clothes = list(clothes_store.values())

    cases_list = []

    for x in clothes:
        cases_list.append(len(x))

    cases = 1
    for x in cases_list:
        cases *= (x + 1)

    result = cases - 1

    return result