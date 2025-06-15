# Створіть список випадкових чисел із випадковою кількістю елементів від 3 до 10.

# Ваше завдання - створити новий список з 3 елементів початкового списку - першим, третім і другим з кінця.

# [1, 2, 3, 4, 5, 6, 7, 9] == [1, 3, 7]
# [1, 1, 2, 1] == [1, 2, 2]
# [6, 3, 7] == [6, 7, 3]

import random

example_list = [random.randint(0, 10) for i in range(random.randint(3, 10))]
new_list = [example_list[0], example_list[2], example_list[-2]]
print(f"""{example_list} => {new_list}""")
