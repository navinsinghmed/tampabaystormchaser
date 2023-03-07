age = 19

if age >= 21:
    print("you can drink")
elif age == 19:
    print("wa(lrus")
else:
    print("hurricane")

hurricane = 165
color = 'red'
print("good choice") if color == 'red' else print("meow")

print(True and False)

print(True or False)

print(not not 100)
print(not {})

wind_speed = 165
while (wind_speed >= 74):
    print(wind_speed)
    print("this is a hurricane!")
    wind_speed = wind_speed - 10
    


#for loops
for name in ["Hurricane Ian", "Hurricane Nicole"]:
    print(name)

for char in "abcdefghij":
    print(char)


for n in range(10):
    print(n)


#new code here:
print(list(range(10,-10,-2)))

def greet(person):
    return f"hello there, {person}"

print(greet('Navin'))

def divide(a,b):
    return a/b

print(divide(10,2))

def new_divide(a,b):
    if type(a) is int and type(b) is int:
        return a/b
    return "a and b must be integers!"

print(new_divide(12,3))
print(new_divide(10.5,5.25))

def send_hurricane(name, wind_max):
    return name + " " + wind_max + " mph"

print(send_hurricane(wind_max = "165", name="Hurricane Ian"))

def list_hurricane(name, category, wind_max):
    listed = f"""
        name: {name},
        category: {category},
        Max Wind: {wind_max}
    """
    print(listed)
    return(listed)

list_hurricane(name="hurricane ian", wind_max = "165 mph", category = "5")

def exponentiate(num, power):
    return num ** power

print(exponentiate(4,3))


#while loop- keep at end
target = 37
guess = None
    
while guess != target:
    guess = input("please enter a guess")
    if guess == 'q' or guess == 'quit':
        break
    guess = int(guess)

print("All Done!")

