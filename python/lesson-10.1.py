from inspect import isgenerator


def pow(x):
    return x**2


def some_gen(begin, length, func):
    res = begin
    counter = 0
    while counter < length:
        yield res
        res = func(res)
        counter += 1


gen = some_gen(2, 4, pow)
print(list(gen))

# assert isgenerator(gen) == True, "Test1"
# assert list(gen) == [2, 4, 16, 256], "Test2"
# print("OK")
