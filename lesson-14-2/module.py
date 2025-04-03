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

    def __eq__(self, other):
        return (
            f"""{self.first_name} {self.last_name}"""
            if str(self) == str(other)
            else False
        )

    def __hash__(self):
        return hash(str(self))


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
        return f"Number: {self.number}\n{all_students}"
