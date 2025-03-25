# На вхід функції popular_words передаються два аргументи. Текст та список слів, популярність яких необхідно визначити.
# При вирішенні цього завдання зверніть увагу на такі моменти
# Слова необхідно шукати у всіх регістрах. Тобто. якщо необхідно знайти слово "one", значить для нього будуть підходити слова "one", "One", "oNe", "ONE" і т.д.
# Шукані слова завжди вказані в нижньому регістрі
# Якщо слово не знайдено жодного разу, його необхідно повернути у словнику зі значенням 0 (нуль)
# Вхідні параметри: Текст і масив слів, що шукаються.
# Вихідні параметри: Словник, у якому ключами є шукані слова та значеннями, скільки разів кожнє слово зустрічаються у орігінальному тексті.

from collections import Counter


def popular_words(text, words):
    text_split = text.lower().split()
    counter = Counter(text_split)
    result = {}
    for word in words:
        result[word] = counter[word.lower()]
    return result


print(
    popular_words(
        """When I was One I had just begun When I was Two I was nearly new """,
        ["i", "was", "three", "near"],
    )
)

# assert popular_words('''When I was One I had just begun When I was Two I was nearly new ''', ['i', 'was', 'three', 'near']) == { 'i': 4, 'was': 3, 'three': 0, 'near': 0 }, 'Test1' print('OK')
