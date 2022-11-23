def number(lines):
    index = 1
    answer = []
    if lines == []:
        return []
    else:
        for line in lines:
            answer.append(f"{index}: {line}")
            index += 1
        return answer


number(['a', 'b', 'c', 'd'])