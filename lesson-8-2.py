# Ваше завдання – написати функцію is_palindrome, яка перевірятиме, чи є рядок паліндромом.
# Паліндромом - це такий рядок, який читається однаково зліва направо і зправа наліво без урахування знаків пунктуації та розмірності букв.
# Функція приймає на вхід рядок, та повертає булеве значення True або False

import string

def is_palindrome(text):

	no_symbols = [el.lower() for el in text if el not in string.punctuation and el != " "]
	reversed_list = list(reversed(no_symbols))
	return reversed_list == no_symbols
  
  
# assert is_palindrome('A man, a plan, a canal: Panama') == True, 'Test1' 
# assert is_palindrome('0P') == False, 'Test2' 
# assert is_palindrome('a.') == True, 'Test3' 
# assert is_palindrome('aurora') == False, 'Test4' 
# print("ОК")

print(is_palindrome('A man, a plan, a canal: Panama'))
print(is_palindrome('0P'))
print(is_palindrome('a.'))
print(is_palindrome('aurora'))