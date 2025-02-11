user_input = int(input("Enter value:"))

res = f"""Result is 
{user_input // 1000} 
{divmod(user_input, 1000)[1] // 100}
{divmod(user_input, 100)[1] // 10}
{divmod(user_input, 10)[1]}
"""
print(res)