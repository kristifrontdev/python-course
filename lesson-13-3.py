# Модифікуйте клас Група (завдання минулої лекції) так, щоб при спробі додавання до групи більше 10-ти студентів, було порушено виняток користувача.

# Таким чином потрібно створити ще й виняток користувача для цієї ситуації. І обробити його поза межами класу. Тобто. потрібно перехопити цей виняток, при спробі додавання 11-го студента


class CustomError(Exception):
    pass


class Human:

    def __init__(self, gender, age, first_name, last_name):
        self.gender = gender
        self.age = age
        self.first_name = first_name
        self.last_name = last_name

    def __str__(self):
        return f"""Name: {self.first_name} {self.last_name}"""


class Student(Human):

    def __init__(self, gender, age, first_name, last_name, record_book):
        self.gender = gender
        self.age = age
        self.first_name = first_name
        self.last_name = last_name
        self.record_book = record_book

    def __str__(self):
        return f"""{self.first_name} {self.last_name}, {self.gender}, {self.age} yo, {self.record_book}"""


class Group:

    def __init__(self, number):
        self.number = number
        self.group = set()

    def add_student(self, student):
        if len(self.group) == 10:
            raise CustomError("No more than 10 students")
        else:
            self.group.add(student)

    def delete_student(self, last_name):
        found_st = self.find_student(last_name)
        if found_st:
            self.group.remove(found_st)

    def find_student(self, last_name):
        for st in self.group:
            if st.last_name == last_name:
                return st
        return None

    def __str__(self):
        all_students = "\n".join(str(student) for student in self.group)
        return f"Number: {self.number}\n{all_students} "


gr = Group("PD1")

for i in range(11):
    student = Student(
        "Male" if i % 2 == 0 else "Female", 20 + i, f"Name{i}", f"Surname{i}", f"AN-{i}"
    )
    try:
        gr.add_student(student)
    except CustomError as e:
        print("Error: ", e)


# gr = Group("PD1")
# gr.add_student(st1)
# gr.add_student(st2)

# # print(gr)

# assert str(gr.find_student("Jobs")) == str(st1), "Test1"
# assert gr.find_student("Jobs2") is None, "Test2"
# assert (
#     isinstance(gr.find_student("Jobs"), Student) is True
# ), "Метод поиска должен возвращать экземпляр"

# gr.delete_student("Taylor")
# print(gr)  # Only one student

# gr.delete_student("Taylor")  # No error!
