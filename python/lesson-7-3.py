# Функція second_index приймає як параметри 2 рядки. Вам необхідно знайти індекс другого входження шуканого рядка у рядку для пошуку.
# Розберемо перший приклад, де необхідно знайти друге входження "s" в слові "sims". Якби нам треба було знайти її перше входження, то тут все просто: за допомогою функції index або find ми можемо дізнатися, що "s" - це перший символ у слові "sims", а значить індекс першого входження дорівнює 0. Але нам Необхідно визначити другу "s", а вона четверта за рахунком. Значить індекс другого входження (і у відповідь питання) дорівнює 3.
# Рядок, який потрібно знайти, може складатися з кількох символів.
# Input: Два рядки (String).
# Output: Int or None

def second_index(text, some_str): 
  
  first_index = text.find(some_str)
  first_slice = first_index + 1
  
  second_text_part = text[first_slice:]
  res = second_text_part.find(some_str) + first_slice
  
  return res if res > 0 else None

# assert second_index("sims", "s") == 3, 'Test1' 
# assert second_index("find the river", "e") == 12, 'Test2' 
# assert second_index("hi", "h") is None, 'Test3' 
# assert second_index("Hello, hello", "lo") == 10, 'Test4' 

print(second_index("sims", "s"))
print(second_index("find the river", "e"))
print(second_index("hi", "h"))
print(second_index("Hello, hello", "lo"))