# Given 2 sets of integers, M and N, print their symmetric difference in ascending order. The term
# symmetric difference indicates those values that exist in either M or N but do not exist in both.


# print values that both sets do not have.

def sim_dif(m, n):
    copy_n = n.copy()

    for x in m:
        for y in n:
            if(x == y):
                n.remove(y)
    # print('final lists: ', m, n)
    for y in copy_n:
        for x in m:
            if(y == x):
                m.remove(x)
    # print('final lists: ', m, n)
    simmetric_dif = m + n
    simmetric_dif.sort()
    print('The symmetric difference of M and N is: ', simmetric_dif)


sim_dif([2, 4, 5, 9], [2, 4, 11, 12])
