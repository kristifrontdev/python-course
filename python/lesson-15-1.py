# Створіть клас «Прямокутник», у якого необхідно реалізувати два поля (ширина та висота) та кілька обов'язкових методів:

# Метод порівняння прямокутників за площею.
# Метод складання прямокутників (площа сумарного прямокутника повинна дорівнювати сумі площ прямокутників, які ви складаєте).
# Методи множення прямокутника на число n (це має збільшити площу базового прямокутника в n разів).
# У класі можуть бути створені додаткові (допоміжні методи)

# Декілька уточнень:

# Методи складання, множення, поділу тощо. обов'язково маємо повертати новий екземпляр класу Прямокутник!
# Для множення, додавання, порівняння, обов'язково потрібно перевизначати "магічні" методи. Для множення є вбудований метод mul
# Коли в результаті мат. дій створюєте новий екземпляр класу Прямокутник, то у цього екземпляру, перемноження сторін, має давати необхідну площу. Це теж важливо. Тобто, якщо Ви до прямокутника, у якого площа дорівнює 8, додаєте інший прямокутник з площею 18, необходимо створити новий прямокутник, площа якого дорівнює 26. Площа це довжина, помноженна на висоту. Значить необхідно підібрати сторони вновь створенного прямокутника таким чином, щоб вони давали необхідну площу!



class Rectangle:
    
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def get_square(self):
        return self.width * self.height
    
    def get_new_dimensions(self, total_square):
        fixed_height = self.height
        width = total_square / fixed_height
        return (width, fixed_height)

    def __eq__(self, other):
        return self.get_square() == other.get_square()
      
    def __add__(self, other):
        res = self.get_new_dimensions(self.get_square() + other.get_square())
        return Rectangle(res[0], res[1])

    def __mul__(self, n):
        res = self.get_new_dimensions(self.get_square() * n)
        return Rectangle(res[0], res[1])

    def __str__(self):
        return f'Rectangle: {self.width} x {self.height} = {self.get_square()}'

r1 = Rectangle(2, 4)
r2 = Rectangle(3, 6)
assert r1.get_square() == 8, 'Test1'
assert r2.get_square() == 18, 'Test2'

r3 = r1 + r2
assert r3.get_square() == 26, 'Test3'
print(r3.get_square())

r4 = r1 * 4
print(r4.get_square())
assert r4.get_square() == 32, 'Test4'

assert Rectangle(3, 6) == Rectangle(2, 9), 'Test5'
print(Rectangle(3, 6))