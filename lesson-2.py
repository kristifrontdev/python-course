# HW 2.1

# user_input = int(input("Enter value:"))

# res = f"""Result is 
# {user_input // 1000} 
# {divmod(user_input, 1000)[1] // 100}
# {divmod(user_input, 100)[1] // 10}
# {divmod(user_input, 10)[1]}
# """

# print(res)

# HW 2.2

user_input = int(input("Enter value:"))

res = f"""Result is
{user_input % 10}
{user_input % 100 // 10}
{user_input % 1000 // 100}
{user_input % 10000 // 1000}
{user_input % 100000 // 10000}
------------------------------
{divmod(user_input, 10)[1]}
{divmod(user_input, 100)[1] // 10}
{divmod(user_input, 1000)[1] // 100}
{divmod(user_input, 10000)[1] // 1000}
{divmod(user_input, 100000)[1] // 10000}
"""

print(res)


