def is_uppercase(inp):
    for letter in inp:
        if letter.islower():
            return False
    return True

print(is_uppercase('DENNIS C'))
