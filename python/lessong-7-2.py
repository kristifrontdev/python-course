# На вхід функції correct_sentence передається речення. Необхідно повернути його виправлену копію так, щоб воно завжди починалося з великої літери та закінчувалося крапкою.
# Зверніть увагу, що не всі виправлення необхідні. Якщо речення вже закінчується крапкою, додавати ще одну не потрібно, це буде помилкою.
# Вхідні аргументи: string.
# Вихідні аргументи: string.

import string

def upper_first_letter(text):
  return text[0].upper() + text[1:]

def correct_sentence(text):
  if not text:
    return ""
  
  res_text = str(text)
  
  if not text[0].isupper():
    res_text = upper_first_letter(res_text)
  
  while res_text[-1] in string.punctuation and res_text[-1] != ".":
    res_text = res_text[:-1]
    
  arr = res_text.split(" ")
  for index, word in enumerate(arr):
    if index < len(arr) - 1 and word[-1] == ".":
      arr[index + 1] = upper_first_letter(arr[index + 1])
    if index == len(arr) - 1 and word[-1] != ".":
      arr[index]+= "."
    
  res_text = " ".join(arr);
 
  return res_text

# assert correct_sentence("greetings, friends") == "Greetings, friends.", 'Test1'
# assert correct_sentence("hello") == "Hello.", 'Test2'
# assert correct_sentence("Greetings. Friends") == "Greetings. Friends.", 'Test3'
# assert correct_sentence("Greetings, friends.") == "Greetings, friends.", 'Test4'
# assert correct_sentence("greetings, friends.") == "Greetings, friends.", 'Test5'

print(correct_sentence(""))
print(correct_sentence("A3.mm"))
print(correct_sentence("greetings, friends"))
print(correct_sentence("Greetings. Friends"))
print(correct_sentence("Greetings, friends."))
print(correct_sentence("greetings, friends."))
print(correct_sentence("greetings. friends??!"))
print(correct_sentence("greetings. friends.. sun is shining. hey, kristina!!"))