# 3. Write a python program for finding the Palindrome of a number.

def palindrome(num):
    reverseNum = str(num)[::-1]
    print(reverseNum)
    if str(num) == reverseNum:
        print("It is a palindrome!")
    else:
        print("Not a palindrome.")


palindrome(333)
palindrome(123)
