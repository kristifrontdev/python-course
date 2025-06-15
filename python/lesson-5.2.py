result = ""
run_input = "y"

while run_input == "y":
    input_number_1 = float(input("Enter first number: "))
    input_action = input("Enter action: ")
    input_number_2 = float(input("Enter second number: "))

    if input_action == "+":
        result = input_number_1 + input_number_2
    elif input_action == "-":
        result = input_number_1 - input_number_2
    elif input_action == "/":
        if input_number_2 == 0:
            print("Division by zero is not possible, please try again")
            exit()
        result = input_number_1 / input_number_2
    elif input_action == "*":
        result = input_number_1 * input_number_2

    if result % 1 == 0:
        print(int(result))
    else:
        print(result)
    run_input = input("Would you like to continue? (y/n) ")

else:
    print("Thank you for using my calculator")
