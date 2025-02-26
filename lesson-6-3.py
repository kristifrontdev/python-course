"""Ваше завдання — написати програму, яка перемножує всі цифри, введені користувачем цілого числа, поки воно не стане менше або дорівнювати 9.
Користувач вводить число з клавіатури."""

# 999 -> 2 # Ось чому - 999 розбиваємо на цифри і перемножуємо 9 * 9 * 9 = 729,
# Потім 7 * 2 * 9 = 126, потім 1 * 2 * 6 = 12 і в результаті 1 * 2 = 2
# 1000 -> 0
# 423 -> 8
# 33 -> 9
# 25 -> 0
# 1 -> 1

import math

user_input = int(input("Enter value: "))

lst_input = [int(num) for num in str(user_input)]

iterations = []

while len(lst_input) > 1:
	res = math.prod(lst_input)
	lst_input = [int(num) for num in str(res)]
	iterations.append(lst_input)
else:
	res = lst_input[0]


print(f"""Iterations: {iterations}""")
print(f"""Result: {res}""")
