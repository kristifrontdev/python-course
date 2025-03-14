# Напишіть функцію common_elements, яка згенерує два списки елементів з генераторного виразу (range) для 100 елементів, за наступними правилом:
# Один список з числами кратними 3, інший з кратними числами 5.
# За допомогою множин створіть набір з числами, які є в обох множинах (перетин).
# Функція повинна повернути цю множину як результат своєї роботи.


def common_elements():

	set_1 = { n for n in range(0, 100) if n % 3 == 0 }
	set_2 = { n for n in range(0, 100) if n % 5 == 0 }
 
	intersection_set = set_1.intersection(set_2)
 
	return intersection_set

# assert common_elements() == {0, 75, 45, 15, 90, 60, 30}

print(common_elements())