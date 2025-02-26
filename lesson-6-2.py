"""Ваше завдання — написати програму, яка переводить число у формат часу у читальному вигляді.
Користувач повинен ввести число більше або дорівнює 0 і менше ніж 8640000.
Число, яке є кількістю секунд, необхідно перевести в дні, години, хвилини та секунди.
Ну і додатковим завданням є турбота про виведення.
Слово "день" підбирається на основі кількості днів, а години, хвилини і секунди повинні заповнюватися нулями при одноцифрових значеннях.
Підказка: одна хвилина - 60 сек. , В одній годині 60 * 60 сек, в одній добі 24 * 60 * 60 сек. Тобто використовуючи функцію divmod або методи поділу // і % вам необхідно знайти відповідну кількість днів, годин, хвилин, а те що залишиться - це секунди, які менше 60 ;)
Доповнити провідними нулями можна за допомогою методу zfill(2)"""

# 0 -> 0 днів, 00:00:00
# 224930 -> 2 дні, 14:28:50
# 466289 -> 5 днів, 09:31:29
# 950400 -> 11 днів, 00:00:00
# 1209600 -> 14 днів, 00:00:00
# 1900800 - > 22 дні, 00:00:00
# 8639999 -> 99 днів, 23:59:59
# 22493 -> 0 днів, 06:14:53
# 7948799 -> 91 день, 23:59:59

# minute, hour, day = (60, 60 * 60, 24 * 60 * 60)

from collections import defaultdict, namedtuple

user_input = 0

days_format_rules = [
  {
		"rule": [1],
		"text": "день"
	},
  {
		"rule": [0] + list(range(2, 5)),
		"text": "дні"
	},
  {
		"rule": [0] + list(range(5, 10)),
		"text": "днів"
	}
]
days_format_exception = [0] + list(range(11, 20))

res_days_int, hours_rest = divmod(user_input, 24 * 60 * 60)
res_hours, minutes_rest = divmod(hours_rest, 60 * 60)
res_minutes, res_seconds = divmod(minutes_rest, 60)

res_days = None

if res_days_int in days_format_exception:
  res_days = f'''{res_days_int} {days_format_rules[2]["text"]}'''
else: 
  for item in days_format_rules:
    if res_days_int % 10 in item["rule"]:
      res_days = f'''{res_days_int} {item["text"]}'''
      break
    
print(f'''{res_days} {str(res_hours).zfill(2)}:{str(res_minutes).zfill(2)}:{str(res_seconds).zfill(2)}''')