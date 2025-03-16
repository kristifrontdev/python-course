# Вам необхідно написати функцію find_unique_value, яка приймає список із чисел, знаходить серед них унікальне число та повертати його. Унікальне число - це число, яке зустрічається в списку один раз. Випадок, коли в одному списку буде кілька унікальних чисел, перевіряти не потрібно.

def find_unique_value(some_list): 

  unique_list = list(set(some_list))

  for el in unique_list:
    if some_list.count(el) == 1:
      return el
 
 
# assert find_unique_value([1, 2, 1, 1]) == 2, 'Test1' 
# assert find_unique_value([2, 3, 3, 3, 5, 5]) == 2, 'Test2' 
# assert find_unique_value([5, 5, 5, 2, 2, 0.5]) == 0.5, 'Test3' 
# print("ОК")

print(find_unique_value([1, 2, 1, 1]))
print(find_unique_value([2, 3, 3, 3, 5, 5]))
print(find_unique_value([5, 5, 5, 2, 2, 0.5]))