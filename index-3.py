import math

x = not True
# and, or
# "apple" in list ["apple"], not in
# таблицы истинности

user_friends = ["cat"]
user_has_premium = True

res = user_friends and user_has_premium
# Выводит линейно

# print(res)

is_snowing = True
is_raining = True

if_snow = "coat"
if_rain = "umbrella"

if is_snowing:
  print(if_snow)
elif is_raining:
  print(if_rain)
else:
  print("Weather is fine")
  
  # if is_snowing:
  # if is_raining:
  
example = list("example")
example_len = len(example)
# print(example_len)
# print(example[-7])

# slices

card = list("4545578749870989")
# sliced_card = card[::2]; 
# sliced_card = card[0:4]; 
# card[:4]
# card[-4:] последние 4 [start:stop:step]
# card[4:8]
# card[4:8]
# card[1::2] начни с первого до конца каждый второй
# sliced_card = card[::-1]; перевернуть список
# Минусы с обратной слайс

# dir() - все методы
test = [1, 2]
# test.append(4)
# test.insert(1, 3) // index, value
# test.remove(1)
# test.pop(1) вырезать, если не указывать индекс удаляется последний список
# del test[1]

# arr1 + arr2 = join() // +=

# test.extend([3, 4]) добавить за раз
# test * 3 = 1, 2, 1, 2, 1, 2

print(test)




	