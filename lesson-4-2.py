# Для списку цілих чисел потрібно знайти суму елементів із парними індексами [0-й, 2-й, 4-й ітд], потім перемножити цю суму на останній елемент вхідного масиву.
# Не забудьте, що перший елемент масиву має індекс 0.
# Для порожнього масиву результат завжди 0.

# [0, 1, 7, 2, 4, 8] => (0 + 7 + 4) * 8 = 88

# [1, 3, 5] => 30
# [6] => 36
# [] => 0

example_list = [0, 1, 7, 2, 4, 8]
res = 0

if len(example_list) > 0:
    res = sum(example_list[::2]) * example_list[-1]

print(res)
