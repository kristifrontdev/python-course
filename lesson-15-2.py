# Створіть клас «Правильний дріб» та реалізуйте методи порівняння, додавання, віднімання та множення для екземплярів цього класу.

from math import lcm

class Fraction:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def __mul__(self, other):
        a = self.a * other.a
        b = self.b * other.b
        return Fraction(a, b)

    def __add__(self, other):
      common = lcm(self.b, other.b)
      a = int(self.a * (common / self.b))
      b = int(other.a * (common / other.b))
      return Fraction(a + b, common)
    

    def __sub__(self, other):
        common = lcm(self.b, other.b)
        a = int(self.a * (common / self.b))
        b = int(other.a * (common / other.b))
        return Fraction(a - b, common)

    def __eq__(self, other):
        return self.a / self.b == other.a / other.b

    def __gt__(self, other):
        return self.a / self.b > other.a / other.b

    def __lt__(self, other):
        return self.a / self.b < other.a / other.b

    def __str__(self):
        return f"Fraction: {self.a}, {self.b}"

f_a = Fraction(2, 3)
f_b = Fraction(3, 6)

f_c = f_b + f_a
# print(f_c)
# assert str(f_c) == 'Fraction: 21, 18'
f_d = f_b * f_a
assert str(f_d) == 'Fraction: 6, 18'

f_e = f_a - f_b
print(f_e)
# assert str(f_e) == 'Fraction: 3, 18'

assert f_d < f_c  # True
print(f_d < f_c)

assert f_d > f_e  # True
print(f_d > f_e)

assert f_a != f_b  # True
print(f_a != f_b)

f_1 = Fraction(2, 4)
f_2 = Fraction(3, 6)

assert f_1 == f_2  # True
print(f_1 == f_2)

print('OK')