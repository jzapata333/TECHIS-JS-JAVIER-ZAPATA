# Write a function that, when provided the first node of a singly linked list, will sort the list by its
# values from smallest to largest. Do not use any built-in sorting methods (e.g. sort in ruby)

def sorting(items):
    sorted = []

    while items:
        list_item = items[0]
        for item in items:
            if item < list_item:
                list_item = item
        sorted.append(list_item)
        print('Sorted values: ', sorted)
        items.remove(list_item)
        print('Remaining values in items\' list: ', items)
    print('Final sorted values: ', sorted)


sorting([7, 31, 5, 3, 44, 10, 11, 1])
