# Написати програму, яка переміщає всі нулі у кінець списку.
# Ваше завдання — змінити список так, щоб усі нулі опинилися наприкінці списку.
# Порядок ненульових чисел має зберегтися!

# [0, 1, 0, 12, 3] -> [1, 12, 3, 0, 0]
# [0] -> [0]
# [1, 0, 13, 0, 0, 0, 5] -> [1, 13, 5, 0, 0, 0, 0]
# [9, 0, 7, 31, 0, 45, 0, 45, 0, 45, 0, 0, 96, 0] -> [9, 7, 31, 45, 45, 45, 96, 0, 0, 0, 0, 0, 0, 0]

example_list = [9, 0, 7, 31, 0, 45, 0, 45, 0, 45, 0, 0, 96, 0]

zero_count = example_list.count(0)
counter = 0

while counter < zero_count:
    zero_index = example_list.index(0)
    zero_value = example_list.pop(zero_index)
    example_list.append(zero_value)
    counter += 1
else:
    print(example_list)
