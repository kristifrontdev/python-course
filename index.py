books = 8
new_str = """Hello, 
I am happy
"""
name = "Kristi"
new_str2 = f'Hello, I\'m {name}'
username = "Username"

# [] изменяемый тип, id() при изменении не поменяется list
cart = ["1 apple", "2 apples"]
# cart[0] = "2 bananas"
# [] const тип, ошибка при смене индекса tuple
cart1 = ("1 apple", "2 apples")

# set уникальная коллекция 
set_list = {"apple", "banana", "butter", "air"}

# Обьект ключ значение dict, dictionary
product_prices = {
	"banana": 14.2,
 	"apple": 2
}



# True, False
# print(product_prices["banana"])
# print(type(new_str))


# print("1 apple" 1in cart)

# user_input = input("Enter value:")
# user_input = 2098
# res = f"""hello 
# {divmod(user_input, 1000)[0]}
# {divmod(user_input, 1000)[1] // 100}
# {divmod(user_input, 100)[1] // 10}
# {divmod(user_input, 10)[1]}

# """

# print(res)
