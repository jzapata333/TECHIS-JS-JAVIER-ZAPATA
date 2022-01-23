# Write a function that takes two arguments. The first node of a singly linked list as the first argument
# and any node in the list as a second argument. The function should delete the second argument (node)
# from the list.

def delete_args(a, b):
    a.remove(b)
    print(a)


delete_args([1, 2, 3, 4, 5], 3)
