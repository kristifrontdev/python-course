# Ваше завдання написати функцію, яка прочитає заданий файл, очистить текст від html-тегів і запише цей текст в інший файл.

# html-тег завжди починається з "<" і закінчується на ">" тобто. потрібно видалити ці символи та все, що між ними.

# Функція отримує на вхід два параметри – ім'я файлу, який потрібно очистити, та ім'я файлу, куди потрібно записати очищений текст. Ім'я файлу, куди потрібно писати, можна задати за замовчуванням.

# Приклади файлів у вкладенні – файл який потрібно очистити (draft.html) та приклад файлу, який може вийти на виході з очищеним текстом (cleaned.txt). Файл draft.html необхідно скачати і покласти поряд з файлом, де буде вирішення цієї домашки.

# Додаткове завдання для тих, хто захоче ускладнити рішення - спробуйте прибрати рядки, в яких немає інформації.

import re
import codecs 

def delete_html_tags(html_file, result_file='cleaned.txt'): 
      with codecs.open(html_file, 'r', 'utf-8') as file: 
           html = file.read()
           no_html = re.sub(r"<script.*?</script>|<.*?>", "", html, flags=re.DOTALL)
           splitted = no_html.splitlines()
           strip_splitted = [line for line in splitted if line.strip()]
           res = ""
           for index, line in enumerate(strip_splitted):
             res += line
             if index < len(splitted) - 1:
               res += "\n"
               
           with codecs.open(result_file, 'w', 'utf-8') as out_file:
              out_file.write(res)

print(delete_html_tags("./draft.html"))