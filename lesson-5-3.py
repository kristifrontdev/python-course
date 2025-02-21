"""Користувач вводить рядок, Ваше завдання – перетворити рядок на hashtag.

Декілька правил:

ніяких символів з набору string.punctuation не повинно бути, у тому числі й пробілів;
підсумкова довжина hashtag має бути не більше 140 символів.
кожне слово починається з великої літери.
якщо довжина фінішного хештегу більше 140 символів - обрізати підсумковий рядок до 140 символів."""

# 'Python Community' -> #PythonCommunity
# 'i like python community!' -> #ILikePythonCommunity
# 'Should, I. subscribe? Yes!' -> #ShouldISubscribeYes

import string

example_string = "Should, I. subscribe? Yes!"
string_limit = 140

title_string = example_string.title()

res = "#" + "".join(
    char for char in title_string if char not in string.punctuation and char != " "
)

if len(res) > string_limit:
    res = res[:string_limit]

print(res)
