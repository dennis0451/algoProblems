def number(lines):
    answer = []
    for index, line in enumerate(lines, 1):
        letter_index = str(index) + ': ' + str(line)
        answer.append(letter_index)
    return print(answer)    
number([])