def min_value(digits):
    digits.sort()
    new_list = []
    for num in digits:
        if num not in new_list:
            new_list.append(str(num))
    return new_list.join('')
print(min_value([1,1,2,3,4,5,7,8,9, 2,3]))