print(len("hurricane"))

vegan_no = ['eggs', 'meat', 'milk', 'fish', 'figs']

pie_ingredients = ['flour', 'apples', 'sugar', 'eggs', 'salt']

for food in pie_ingredients:
    if food in vegan_no:
        print(f"cannot eat {food}, thats not vegan")
    else:
        print(f"delicious! I love {food}")

print(vegan_no[0])
print(vegan_no[-3])

vegan_no[2] = "diary"
print(vegan_no)

nums = list(range(0,100,1))
print(nums[50:60:1])
print(nums[90:])
print(nums[90::2])
print(nums[:10:5])
print(nums[::-10])
print(nums[20:10:-2])

colors = ['red', 'orange', 'yellow' ]
colors[0:1] = ['dark red', 'pink']
print(colors)
colors[3:] = ['dark yellow', 'green', 'black']
print(colors)

hurricane_name_list = ['Hurricane Hermine', 'Hurricane Irma', 'Hurricane Eta' ]
hurricane_name_list.append('Hurricane Ian')
print(hurricane_name_list)
copy_hurricane = hurricane_name_list.copy()
print(copy_hurricane)
print(copy_hurricane.count("Hurricane Hermine"))

new_storms = ["Hurricane Nicole", "March 2023 Front Wind"]
copy_hurricane.extend(new_storms)
print(copy_hurricane)
copy_hurricane.insert(1, "Hurricane Matthew")
print(copy_hurricane)

first_numbers = [1,3,5,7,9]
first_numbers.sort(reverse=True)
print(first_numbers)


print("new code here: ")
price1 = 5.50
qty = 10
print(f"your total is {price1 * qty}")

mid_num = [3,4,5]
new_str = str(mid_num)
print(new_str)

price2 = '$5.58'
print("$" in price2)

msg = 'kjsafkafjajfl!$%^'
print(msg[5:])
msg2 = "1c2h#isc&k$e*n!!%!"
print(msg2[1::2])

print('92'.zfill(5))

msg3 = "???hh"
print(msg3.count("?"))
print(msg3.find('h'))
print(msg3.find("??h"))
print(msg3.find("x"))

msg4 = "242424"
print(msg4.isdigit())

hurricane_data_1 = ["Hurricane Hermine 140 mph", "Hurricane Irma 142 mph", "Hurricane Ian 165 mph"]
print("|".join(hurricane_data_1))
print('HURRICANE'.lower())
msg5 = 'apples-tomatoes-pickles'
print(msg5)
msg6 = msg5.replace('-','=',1)
print(msg5)
print(msg6)

text = "I love walruses"
text2 = text.replace(' ','>>>')
print(text2)

animals ="goats,chickens,ducks,pigs,dogs"
animals.split(',')
print(animals)
animals2 = animals.split(',')
print(animals2)

msg6 = """Walruses 
        are
        funny
        creatures"""
print(msg6.splitlines())       

msg7 = " hurricane warning!!! "
print(msg7.strip())

hurricane_dictionary = {
    "name":"Hurricane Ian",
    "category": 5,
    "max wind":"165 mph"
}        

print(hurricane_dictionary)

print(hurricane_dictionary['max wind'])
new_dict = dict([[True, 0],[False,1]])
print(new_dict)

chicken = {
    'name': 'Lady Gray',
    'breed': 'Silkie',
    'total_egg_count': 12,
    'egg_chart': {
        'M': True,
        'T': True,
        'W': True,
        'TH': True,
        'F': True,
        'S': False,
        'SU': True
    },
    'coop_mates': ['Butters', 'Stevie', 'Henry']
}

print(chicken.keys())
keys = chicken.keys()
print(keys)

for key in chicken.keys():
    print(key)
    
for value in chicken.values():
    print(value)
    
for pair in chicken.items():
    print(pair)
    
for (k,v) in chicken.items():
    print(k,'--->',v)
    
#new code here
letterz = {}.fromkeys('ABC', True)    
print(letterz)

languages = {'ruby', 'python', 'javascript'}
print(languages)
print(languages.pop())
print(languages)

languages.add("C++")
print(languages)

hurricane = {'wind 74 mph +', 'storm surge', 'heavy rain'}
severe_storm = {'heavy rain', 'straight line wind', 'lightning'}
many_storms = hurricane | severe_storm
print(many_storms)
common_impact = hurricane & severe_storm
print(common_impact)

difference = hurricane - severe_storm
print(difference)
diff2 = severe_storm - hurricane
print(diff2)

for x in hurricane | severe_storm:
    print(x)

color_tuple = ('red', 'yellow', 'green')
print(color_tuple)
print(type(color_tuple))

tup = (3,)
print(type(tup))

board = {
    (0,0): 'X',
    (0,1): 'O'
}

print(board[(0,0)])

num13 = [1,2,3,4,5,6,7,8,9,10,11,12,13]
evens13 = []
for x in num13:
    if x % 2 == 0:
        evens13.append(x)

print(evens13) 
evens13_2 = [x for x in num13 if x%2 == 0]
print(evens13_2)  
doubles13 = [y*2 for y in num13]
print(doubles13)     
hurricane13 = ["hurricane" for z in num13]
print(hurricane13)
square13 = [a**2 for a in num13]
print(square13)

square_list = [n*n for n in [2,4,6,8]]
print(square_list)

str_work = [char.upper() for char in "lmfao"]
print(str_work)

divided_range = [x/2 for x in range(10,20)]
print(divided_range)

board_nested = [[2 for y in range(3)] for x in range(3)]
print(board_nested)

def gen_board(size, initial_val=None):
    return [[initial_val for x in range(size)] for y in range(size)]

big_board = gen_board(5,3)
print(big_board)    

condition_even = [x for x in range(16) if x%2==0]
print(condition_even)

chickens = [
    {"name": 'Henry', "sex": 'Rooster'},
    {"name": 'Lady Gray', "sex": 'Hen'},
    {"name": 'Junior', "sex": 'Rooster'},
    {"name": 'Steive Chicks', "sex": 'Hen'},
    {"name": 'Rocket', "sex": 'Hen'},
    {"name": 'Butters', "sex": 'Rooster'}
]

hens = [bird["name"] for bird in chickens if bird["sex"]=="Hen"]
print(hens)

scores_comp = [55, 89, 99, 87, 60, 70, 74, 76, 90, 50, 82]
grades_comp = ['Pass' for score in scores_comp if score >= 70]
print(grades_comp)
grades_more = ["Pass" if score >= 70 else "fail" for score in scores_comp]
print(grades_more)

def index_translate(letters):
   letter_translate = {'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5}
   return letter_translate.get(letters.upper())

group_letters = "ade"
translated = [index_translate(x) for x in group_letters]
print(translated)

day_dictionary = {day:0 for day in 'MTWRFSU'}
print(day_dictionary)

even_squares = {x: x*x for x in range(1,10) if x%2==0}
print(even_squares)