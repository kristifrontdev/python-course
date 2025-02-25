"""Користувач вводить через дефіс дві літери, Ваше завдання написати програму, яка повертатиме всі символи між ними включно.
Жодних перевірок на помилку робити не треба, мінімальне значення завжди менше або дорівнює максимальному.
Підказка: Використовуйте модуль string , у якому є string.ascii_letters, з усім набором потрібних букв"""

import string

user_input = input("Enter: ")
char1, char2 = user_input.split("-")

char1_index = string.ascii_letters.find(char1)
char2_index = string.ascii_letters.find(char2)

res = string.ascii_letters[char1_index : char2_index + 1]

print(res)

# В задании указано проверки не нужны, но в случае A-z например можно добавить проверку if char1_index > char2_index
