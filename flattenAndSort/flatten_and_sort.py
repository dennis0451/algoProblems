def flatten_and_sort(array):
    joined_array = []

    for ar in array:
        for elem in ar:
            joined_array.append(elem)

    joined_array.sort()
    
    return joined_array

print(flatten_and_sort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
