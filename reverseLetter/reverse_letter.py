def reverse_letter(string):
    answer = ""
    for char in string:
        if char.islower():
            answer+=char
    answer[::-1]
    return answer
print(reverse_letter("ultr5denn34215nis9583cor987CAR3o?n"))