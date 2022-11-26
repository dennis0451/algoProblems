def reverse(st):
    word_arr =  st.split()[::-1]
    return (" ".join(word_arr))

print(reverse("Hello World"))