# Напишіть функцію-генератор generate_cube_numbers, яка формує набір кубів чисел, починаючи з числа 2 до вказаної Вами величини. Тобто. генератор повинен працювати доти, поки генерується значення менше зазначеної величини.

# Нагадую, що вийти із генератора можна за допомогою return без параметрів.


def generate_cube_numbers(end):
    start = 2

    for num in range(start, end + 1):
        res = num**3
        if res > end:
            return
        yield res


from inspect import isgenerator

gen = generate_cube_numbers(1)
assert isgenerator(gen) == True, 'Test0'
assert list(generate_cube_numbers(10)) == [8]
assert list(generate_cube_numbers(100)) == [8, 27, 64]
assert list(generate_cube_numbers(1000)) == [8, 27, 64, 125, 216, 343, 512, 729, 1000]
print("OK")
# print(list(generate_cube_numbers(1000)))