from python_fun import get_rand_year

print(get_rand_year())
print(get_rand_year())

from python_fun import get_rand_wind
def make_hurricane(name, category):
    return {
        'name': name,
        'category': category,
        'max_wind': get_rand_wind()
    }

hurricane1 = make_hurricane('Hurricane 1', 5)
print(hurricane1)

