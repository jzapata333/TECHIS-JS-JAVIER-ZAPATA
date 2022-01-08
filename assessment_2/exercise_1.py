#  1. Write python for a Simple calculator to perform the following operations:
#     Addition
#     Multiplication
#     Division
#     Subtraction
#     Solution for (a + b)^2
#     Take user inputs

select = int(input("Select an operation from 1, 2, 3, 4, 5: "))

number_1 = int(input("Enter first number: "))
number_2 = int(input("Enter second number: "))

if select == 1:
    print(number_1, "+", number_2, "=", (number_1 + number_2))

elif select == 2:
    print(number_1, "-", number_2, "=", (number_1 - number_2))

elif select == 3:
    print(number_1, "*", number_2, "=", (number_1 * number_2))

elif select == 4:
    print(number_1, "/", number_2, "=", (number_1 / number_2))

elif select == 5:
    print(number_1, "+", number_2, "^2", "=", ((number_1 + number_2)**2))

else:
    print("Invalid input")
