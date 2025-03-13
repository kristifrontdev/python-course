def say_hi(name, age):
  return f"Hi. My name is {name} and I'm {age} years old!"

user_name = input("Enter your name: ");
user_age = int(input("Enter your age: "));

print(say_hi(user_name, user_age))
