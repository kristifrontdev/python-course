"""Користувач вводить рядок. Ваше завдання - перевірити, чи може цей рядок бути ім'ям змінної.

Змінна не може:

починатися з цифри
містити великі літери,
пробіл і знаки пунктуації (взяти можна тут string.punctuation), окрім нижнього підкреслення "_".
бути жодним із зареєстрованих слів.
При цьому повне ім'я змінної повино складатись не більш чим з одного нижнього підкреслення "_".

Список зареєстрованих слів можна взяти із keyword.kwlist.

У результаті перевірки на друк виводиться або True, якщо таке ім'я змінної допустимо, або False - якщо ні.

Приклади імен змінних та результат перевірки (=> на друк виводити не потрібно :))"""

# _ => True
# __ => False
# ___ => False
# x => True
# get_value => True
# get value => False
# get!value => False
# some_super_puper_value => True
# Get_value => False
# get_Value => False
# getValue => False
# 3m => False
# m3 => True
# assert => False
# assert_exception => True

import string
import keyword

variable_input = input("Enter variable name: ")

validations_rules = [
    variable_input[0].isdigit(),
    any([char.isupper() for char in variable_input]),
    any([char in string.punctuation and char != "_" for char in variable_input]),
    any([char.isspace() for char in variable_input]),
    variable_input in keyword.kwlist,
    variable_input.startswith("_") and variable_input.count("_") > 1,
]

print(not any([True in validations_rules]))
