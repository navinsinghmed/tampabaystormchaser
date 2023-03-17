import math


names = ['freak', 'funny']
name1, name2 = names
print(name1, name2)

point = (100,81)
x,y = point
print(x)
print(y)

point_z = (100, 80, 75)
wack, *dances = point_z
print(wack)
print(dances)

hurricane_names = ["Hurricane Irma", "Hurricane Ian", "Hurricane Nicole"]
hurricane_2017, *hurricane_2022 = hurricane_names
print("2017 hurricanes: ")
print(hurricane_2017)
print("2022 hurricanes: ")
print(hurricane_2022)

list_colors = [['red', 'green'], ['purple', 'orange']]
((primary1, secondary1), (primary2, secondary2)) = list_colors
print(secondary2)

wordy = "hello"
wordy2 = ["walrus ", *wordy]
print(wordy2)

wild_set = {'hurricane'}
wild_2022 = {"165 mph ", *wild_set}
print(wild_2022)
print({*'hurricane'})


rainfall = {'Jan': 2.5, 'Feb': 4.9}
more_rain = {'Dec': 0.5, **rainfall}
print(more_rain)

def get_days_alive(person):
    try:
        days = person['age'] * 365
        print(f'{person["name"]} has been alive for {days} days')
    except KeyError as exc:
        print(f"missing key: {exc}")
    except TypeError:
        print("expected person to be a dictionary!")

def bounded_avg(nums):
    """
    returns average of a list of nums (nums must be between 1-100)
    
    >>> bounded_avg([2,4,6])
    4.0
    """
    
    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")
    
    return sum(nums)/len(nums)    
    

print(math.ceil(10.7))

from random import choice
print(choice([1,2,3]))

from statistics import mean, median
print(mean([1,2,3]))
print(median([1,2,2,2,1,5,5,5,5,5,5]))

import calendar
cal = calendar.TextCalendar()
print(cal)
cal.prmonth(2025, 4)

from random import randint, choice
def get_rand_year():
    return randint(1900,2020)

def get_rand_wind():
    return randint(74, 200)

file = open("data.txt", "r")

for line in file:
    print(line)
file.close()

file2 = open("data.txt", "r")

total_text = file2.read()
print(total_text)

file2.close()

file3 = open('write_me.txt', 'a')
file3.write('I am a hurricane, appended')
file3.close()

print('start input output tests')

input_file = open('data.txt', 'r')
input_text = input_file.read()
print(input_text)

from collections import Counter
my_counter = Counter("hurricane warning")
print(my_counter)

from datetime import date
my_date = date(2022, 9, 28)
print(my_date)
print(my_date.year)

import math
from math import sqrt
from random import randint

class Triangle:
    """
    A class used to represent a right triangle
    
    Attributes
    ------------------
    a: int length of side a
    b: int length of side b
    
    """
    def __init__(self, a, b):
        # "create triangle from a an b"
        self.a = a
        self.b = b
    
    def __repr__(self):
        return f"Triangle(a={self.a}, b={self.b})"
        
    @classmethod
    def random(cls):
        """class method which returns triangle with random sides"""
        return cls(randint(1,20), randint(1,20))
    
    def get_hypotenuse(self):
        return sqrt(self.a**2 + self.b**2)
        
    def get_area(self):
        return (self.a * self.b/2)

    def describe(self):
        """returns string representing triangle"""
        return f"I am a triangle with sides: {self.a} & {self.b}"
        
t1 = Triangle(3,4)
hyp1 = t1.get_hypotenuse()
print("hypotenuse: ")
print(hyp1)
print("area: ")
area1 = t1.get_area()
print(area1)
random_triangle = t1.random()
print("random triangle area: ")
area_random_triangle = random_triangle.get_area()
print(area_random_triangle)
print(t1)