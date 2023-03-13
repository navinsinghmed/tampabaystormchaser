def product(a, b):
    return a*b

product_1 = product(2,-2)
print(product_1)

def weekday_name(day_of_week):
    DAYS = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    
    if day_of_week < 1 or day_of_week > 7:
        return None
    
    return DAYS[day_of_week - 1]

print(weekday_name(1))

def last_element(list):
    if(list):
        return list[-1]

print(last_element([1,2,3,4]))

def number_compare(a, b):
    """Report on whether a>b, b>a, or b==a

        >>> number_compare(1, 1)
        'Numbers are equal'

        >>> number_compare(-1, 1)
        'Second is greater'

        >>> number_compare(1, -2)
        'First is greater'
    """

    if a>b:
        return "First is greater"
    elif b>a:
        return "Second is greater"
    else:
        return "Numbers are equal"

print(number_compare(3,2))
print(number_compare(4,4))
print(number_compare(2,3))

def reverse_string(phrase):
    return phrase[::-1]

print(reverse_string("walrus"))

def single_letter_count(word, letter):
    return word.lower().count(letter.lower())

print(single_letter_count("hurricane", "r"))

def multiple_letter_count(phrase):
    counter = {}
    for letter in phrase:
        counter[letter] = counter.get(letter, 0) + 1
    return counter
    
print(multiple_letter_count("yay"))

def list_manipulation(lst, command, location, value=None):
    """Mutate lst to add/remove from beginning or end.

    - lst: list of values
    - command: command, either "remove" or "add"
    - location: location to remove/add, either "beginning" or "end"
    - value: when adding, value to add

    remove: remove item at beginning or end, and return item removed

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'remove', 'end')
        3

        >>> list_manipulation(lst, 'remove', 'beginning')
        1

        >>> lst
        [2]

    add: add item at beginning/end, and return list

        >>> lst = [1, 2, 3]

        >>> list_manipulation(lst, 'add', 'beginning', 20)
        [20, 1, 2, 3]

        >>> list_manipulation(lst, 'add', 'end', 30)
        [20, 1, 2, 3, 30]

        >>> lst
        [20, 1, 2, 3, 30]

    Invalid commands or locations should return None:

        >>> list_manipulation(lst, 'foo', 'end') is None
        True

        >>> list_manipulation(lst, 'add', 'dunno') is None
        True
    """
    if command == "remove":
        if location == "end":
            return lst.pop()
        elif location == "beginning":
            return lst.pop(0)
    
    elif command == "add":
        if location == "beginning":
            lst.insert(0,value)
            return lst
        elif location == "end":
            lst.append(value)
            return lst

list_big = [1,2,3,4,5]
list_big_new = list_manipulation(list_big, "remove", "end")
print("should print 5: ")
print(list_big_new)
print(list_big)
list_3 = [1,2,3,4,5,6]
list_bigger = list_manipulation(list_3, 'add', 'beginning', 3)
print(list_bigger)
list_biggest = list_manipulation(list_3, 'add', 'end', 100)
print(list_biggest)

def is_palindrome(phrase):
    standardized = phrase.lower().replace(' ','')
    return standardized == standardized[::-1]
    
print(is_palindrome("han nah"))
print(is_palindrome("hannah"))

def frequency(lst, search_term):
    """Return frequency of term in lst.

        >>> frequency([1, 4, 3, 4, 4], 4)
        3

        >>> frequency([1, 4, 3], 7)
        0
    """

    return lst.count(search_term)

print(frequency([1,4,3,4,4], 4))

def flip_case(phrase, to_swap):
    to_swap = to_swap.lower()
    swapped_phrase = ""
    
    for letter in phrase:
        if(letter.lower() == to_swap):
            letter = letter.swapcase()
        swapped_phrase += letter
    return swapped_phrase

print(flip_case("Aaaahhh", "h"))

def multiply_even_numbers(number_list):
    product = 1
    for number in number_list:
        if number%2 == 0:
            product = product * number
    return product

print(multiply_even_numbers([1,2,3,4,5,6])) 

def capitalize(phrase):
    return phrase[:1].upper() + phrase[1:]

print(capitalize("walrus I am"))

def compact(list):
    return [value for value in list if value]

print(compact([0, 1, 2, '', [], False, (), None, 'All done'])) 

def intersection(l1, l2):
    return list(set(l1) & set(l2))

print(intersection([1,2,3],[2,3,4]))

def partition(list, fn):
    """Partition lst by predicate.

     - lst: list of items
     - fn: function that returns True or False

     Returns new list: [a, b], where `a` are items that passed fn test,
     and `b` are items that failed fn test.

        >>> def is_even(num):
        ...     return num % 2 == 0

        >>> def is_string(el):
        ...     return isinstance(el, str)

        >>> partition([1, 2, 3, 4], is_even)
        [[2, 4], [1, 3]]

        >>> partition(["hi", None, 6, "bye"], is_string)
        [['hi', 'bye'], [None, 6]]
    """

    true_list = []
    false_list = []
    
    for item in list:
        if fn(item):
            true_list.append(item)
        else:
            false_list.append(item)
    
    return [true_list, false_list]
    
def is_it_even(x):
    return x % 2 == 0

print(partition([1,2,3,4], is_it_even))

def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """

    # Make frequency counter of num:freq
    counts = {}

    # find the highest value (the most frequent number)
    for num in nums:
        counts[num] = counts.get(num, 0) + 1

    max_value = max(counts.values())

    # now we need to see at which index the highest value is at
    
    for (num, freq) in counts.items():
        if freq == max_value:
            return num
 
 
print(mode([2,2,3,3,2]))


def calculate(operation, a, b, make_int=False, message='The result is'):
    """Perform operation on a + b, ()possibly truncating) & returning w/msg.

    - operation: 'add', 'subtract', 'multiply', or 'divide'
    - a and b: values to operate on
    - make_int: (optional, defaults to False) if True, truncates to integer
    - message: (optional) message to use (if not provided, use 'The result is')

    Performs math operation (truncating if make_int), then returns as
    "[message] [result]"

        >>> calculate('add', 2.5, 4)
        'The result is 6.5'

        >>> calculate('subtract', 4, 1.5, make_int=True)
        'The result is 2'

        >>> calculate('multiply', 1.5, 2)
        'The result is 3.0'

        >>> calculate('divide', 10, 4, message='I got')
        'I got 2.5'

    If a valid operation isn't provided, return None.

        >>> calculate('foo', 2, 3)

    """
    if operation == "add":
        result = a + b
    elif operation == "subtract":
        result = a - b
    elif operation == "multiply":
        result = a * b
    elif operation == "divide":
        result = a/b
    else:
        return 
    
    if make_int:
        result = int(result)
    
    return f"{message} {result}"

print(calculate('subtract', 4, 1.5, make_int = True, message = "Wahoo! I got"))

def friend_date(a,b):
    """Given two friends, do they have sny hobbies in common?

    - a: friend #1, a tuple of (name, age, list-of-hobbies)
    - b: same, for friend #2

    Returns True if they have any hobbies in common, False is not.

        >>> elmo = ('Elmo', 5, ['hugging', 'being nice'])
        >>> sauron = ('Sauron', 5000, ['killing hobbits', 'chess'])
        >>> gandalf = ('Gandalf', 10000, ['waving wands', 'chess'])

        >>> friend_date(elmo, sauron)
        False

        >>> friend_date(sauron, gandalf)
        True
    """
    
    if(set(a[2]) & set(b[2])):
        return True
    else:
        return False

elmo = ('Elmo', 5, ['hugging', 'being nice'])
sauron = ('Sauron', 5000, ['killing hobbits', 'chess'])
gandalf = ('Gandalf', 10000, ['waving wands', 'chess'])

print("true:")
print(friend_date(sauron, gandalf))
print("false:")
print(friend_date(elmo, gandalf))

def friend_date_2(a,b):
    return bool(set(a[2]) & set(b[2]))

print("false:")
print(friend_date_2(elmo, sauron))
print('true:')
print(friend_date_2(sauron, gandalf))

def triple_and_filter(nums):
    """Return new list of tripled nums for those nums divisible by 4.

    Return every number in list that is divisible by 4 in a new list,
    except multipled by 3.

        >>> triple_and_filter([1, 2, 3, 4])
        [12]

        >>> triple_and_filter([6, 8, 10, 12])
        [24, 36]

        >>> triple_and_filter([1, 2])
        []
    """

    return [num*3 for num in nums if num % 4 == 0]

print(triple_and_filter([1,2,3,4,5,6,7,8]))
print(triple_and_filter([1,2,3]))

def extract_full_names(people):
    """Return list of names, extracting from first+last keys in people dicts.

    - people: list of dictionaries, each with 'first' and 'last' keys for
              first and last names

    Returns list of space-separated first and last names.

        >>> names = [
        ...     {'first': 'Ada', 'last': 'Lovelace'},
        ...     {'first': 'Grace', 'last': 'Hopper'},
        ... ]

        >>> extract_full_names(names)
        ['Ada Lovelace', 'Grace Hopper']
    """
    return [f"{person['first']} {person['last']}" for person in people]


names = [{'first': 'Ada', 'last': 'Lovelace'}, {'first': 'Grace', 'last': 'Hopper'}]
print(extract_full_names(names))

def sum_floats(nums):
    """Return sum of floating point numbers in nums.

        >>> sum_floats([1.5, 2.4, 'awesome', [], 1])
        3.9

        >>> sum_floats([1, 2, 3])
        0
    """
    return sum([num for num in nums if isinstance(num,float)])

print(sum_floats([1.5, 2.4, 'awesome', [], 1]))
print(sum_floats([1, 2, 3]))

def list_check(lst):
    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """
    return all(isinstance(item, list) for item in lst) 

print(list_check([[1], [2,3]]))
print(list_check([[1], 'nope']))

def list_check2(lst):
    for item in lst:
        if not isinstance(item, list):
            return False
    return True

print(list_check2([[1], [2,3]]))
print(list_check2([[1], 'nope']))

def remove_every_other(lst):
    """Return a new list of other item.

        >>> lst = [1, 2, 3, 4, 5]

        >>> remove_every_other(lst)
        [1, 3, 5]

    This should return a list, not mutate the original:

        >>> lst
        [1, 2, 3, 4, 5]
    """
    return lst[::2]
    
list1 = [1,2,3,4,5]
modified_list = remove_every_other(list1)
print(modified_list)

def sum_pairs(nums, goal):
    """Return tuple of first pair of nums that sum to goal.

    For example:

        >>> sum_pairs([1, 2, 2, 10], 4)
        (2, 2)

    (4, 2) sum to 6, and come before (5, 1):

        >>> sum_pairs([4, 2, 10, 5, 1], 6) # (4, 2)
        (4, 2)

    (4, 3) sum to 7, and finish before (5, 2):

        >>> sum_pairs([5, 1, 4, 8, 3, 2], 7)
        (4, 3)

    No pairs sum to 100, so return empty tuple:

        >>> sum_pairs([11, 20, 4, 2, 1, 5], 100)
        ()
    """
    completed = set()
    
    for x in nums:
        difference = goal - x
        
        if difference in completed:
            return (difference, x)
        
        completed.add(x)
    
    return ()

list_to_pair = [4,2,10,5,1]
completion = sum_pairs(list_to_pair, 6)
print(completion)    

VOWELS_SET = set("aeiou")

def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}

        >>> vowel_count('HOW ARE YOU? i am great!')
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    phrase = phrase.lower()
    counter = {}
    
    for letter in phrase:
        if letter in VOWELS_SET:
            counter[letter] = counter.get(letter, 0) + 1
        
    return counter

print(vowel_count('HOW ARE YOU? i am great'))

def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    phrase = phrase.lower()
    return phrase.title()

def titleize_long(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    phrase = phrase.lower()
    return ' '.join([x.capitalize() for x in phrase.split(' ')])

print(titleize('oNLy cAPITALIZe fIRSt'))
print(titleize_long('oNLy cAPITALIZe fIRSt'))

def find_factors(num):
    """Find factors of num, in increasing order.

    >>> find_factors(10)
    [1, 2, 5, 10]

    >>> find_factors(11)
    [1, 11]

    >>> find_factors(111)
    [1, 3, 37, 111]

    >>> find_factors(321421)
    [1, 293, 1097, 321421]
    """
    factors = []
    n = 1
    while (n <= num):
        if num % n == 0:
            factors.append(n)
        n += 1
        
    return factors

print(find_factors(111))

def includes(collection, sought, start=None):
    """Is sought in collection, starting at index start?

    Return True/False if sought is in the given collection:
    - lists/strings/sets/tuples: returns True/False if sought present
    - dictionaries: return True/False if *value* of sought in dictionary

    If string/list/tuple and `start` is provided, starts searching only at that
    index. This `start` is ignored for sets/dictionaries, since they aren't
    ordered.

        >>> includes([1, 2, 3], 1)
        True

        >>> includes([1, 2, 3], 1, 2)
        False

        >>> includes("hello", "o")
        True

        >>> includes(('Elmo', 5, 'red'), 'red', 1)
        True

        >>> includes({1, 2, 3}, 1)
        True

        >>> includes({1, 2, 3}, 1, 3)  # "start" ignored for sets!
        True

        >>> includes({"apple": "red", "berry": "blue"}, "blue")
        True
    """
    if isinstance(collection, dict):
        return sought in collection.values()
        
    if start is None or isinstance(collection, set):
        return sought in collection
    
    return sought in collection[start:]
    
print(includes({"apple": "red", "berry": "blue"}, "blue"))
print(includes([1, 2, 3], 1, 2))

def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """
    if not isinstance(num, int) or num < 0:
        return None
    
    return phrase*num

print(repeat('abc', 3))

def truncate(phrase, n):
    """Return truncated-at-n-chars version of  phrase.

    If the phrase is longer than n, make sure it ends with '...' and is no
    longer than n.

        >>> truncate("Hello World", 6)
        'Hel...'

        >>> truncate("Problem solving is the best!", 10)
        'Problem...'

        >>> truncate("Yo", 100)
        'Yo'

    The smallest legal value of n is 3; if less, return a message:

        >>> truncate('Cool', 1)
        'Truncation must be at least 3 characters.'

        >>> truncate("Woah", 4)
        'W...'

        >>> truncate("Woah", 3)
        '...'
    """
    if n < 3:
        return "Truncation must be at least 3 characters."
    
    if n > len(phrase) + 2:
        return phrase
    
    return phrase[:n - 3] + "..."

print(truncate("Woah", 4))

def two_list_dictionary(keys, values):
    """Given keys and values, make dictionary of those.

        >>> two_list_dictionary(['x', 'y', 'z'], [9, 8, 7])
        {'x': 9, 'y': 8, 'z': 7}

    If there are fewer values than keys, remaining keys should have value
    of None:

        >>> two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3])
        {'a': 1, 'b': 2, 'c': 3, 'd': None}

    If there are fewer keys, ignore remaining values:

        >>> two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])
        {'a': 1, 'b': 2, 'c': 3}
   """
    out = {}
    
    for idx, val in enumerate(keys):
        out[val] = values[idx] if idx < len(values) else None
    
    return out

print(two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3]))

def sum_range(nums, start=0, end=None):
    """Return sum of numbers from start...end.

    - start: where to start (if not provided, start at list start)
    - end: where to stop (include this index) (if not provided, go through end)

        >>> nums = [1, 2, 3, 4]

        >>> sum_range(nums)
        10

        >>> sum_range(nums, 1)
        9

        >>> sum_range(nums, end=2)
        6

        >>> sum_range(nums, 1, 3)
        9

    If end is after end of list, just go to end of list:

        >>> sum_range(nums, 1, 99)
        9
    """
    if end is None:
        end = len(nums)
    
    return sum(nums[start:end + 1])

nums1 = [1,2,3,4]
print(sum_range(nums1, 1, 3))

def freq_counter(collection):
    counts = {}
    
    for x in collection:
        counts[x] = counts.get(x, 0) + 1 
    
    return counts

def same_frequency(a, b):
    """Do these nums have same frequencies of digits?

        >>> same_frequency(551122, 221515)
        True

        >>> same_frequency(321142, 3212215)
        False

        >>> same_frequency(1212, 2211)
        True
    """
    return freq_counter(str(a)) == freq_counter(str(b))

print(same_frequency(551122, 221515))

def two_oldest_ages(ages):
    """Return two distinct oldest ages as tuple (second-oldest, oldest)..

        >>> two_oldest_ages([1, 2, 10, 8])
        (8, 10)

        >>> two_oldest_ages([6, 1, 9, 10, 4])
        (9, 10)

    Even if more than one person has the same oldest age, this should return
    two *distinct* oldest ages:

        >>> two_oldest_ages([1, 5, 5, 2])
        (2, 5)
    """

    # find two oldest by sorting unique; this is O(n log n)
    
    unique_ages = set(ages)
    oldest = sorted(unique_ages)[-2:]
    print(oldest)
    return tuple(oldest)


tuple_oldest = two_oldest_ages([1,5,5,2])
print(tuple_oldest)

def find_the_duplicate(nums):
    """Find duplicate number in nums.

    Given a list of nums with, at most, one duplicate, return the duplicate.
    If there is no duplicate, return None

        >>> find_the_duplicate([1, 2, 1, 4, 3, 12])
        1

        >>> find_the_duplicate([6, 1, 9, 5, 3, 4, 9])
        9

        >>> find_the_duplicate([2, 1, 3, 4]) is None
        True
    """

    tagged = set()

    for x in nums:
        if x in tagged:
            return x
        tagged.add(x)

wacko_numbers = [6, 1, 9, 5, 3, 4, 9]
duplicate_number = find_the_duplicate(wacko_numbers)
print(duplicate_number)
wacko_none = [1,2,3,4]
duplicate_none = find_the_duplicate(wacko_none)
print(duplicate_none)

def sum_up_diagonals(matrix):
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """
    total = 0
    
    for i in range(len(matrix)):
        total += matrix[i][i]
        total += matrix[i][-1-i]
    
    return total

matrix_2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

print(sum_up_diagonals(matrix_2))

def min_max_keys(d):
    """Return tuple (min-keys, max-keys) in d.

        >>> min_max_keys({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'})
        (1, 10)

    Works with any kind of key that can be compared, like strings:

        >>> min_max_keys({"apple": "red", "cherry": "red", "berry": "blue"})
        ('apple', 'cherry')
    """
    keys = d.keys()
    return (min(keys), max(keys))

print(min_max_keys({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'})) 

def find_greater_numbers(nums):
    """Return # of times a number is followed by a greater number.

    For example, for [1, 2, 3], the answer is 3:
    - the 1 is followed by the 2 *and* the 3
    - the 2 is followed by the 3

    Examples:

        >>> find_greater_numbers([1, 2, 3])
        3

        >>> find_greater_numbers([6, 1, 2, 7])
        4

        >>> find_greater_numbers([5, 4, 3, 2, 1])
        0

        >>> find_greater_numbers([])
        0
    """
    count = 0
    
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if(nums[j] > nums[i]):
                count += 1
    return count
    
print(find_greater_numbers([6,1,2,7]))

def is_odd_string(word):
    """Is the sum of the character-positions odd?

    Word is a simple word of uppercase/lowercase letters without punctuation.

    For each character, find it's "character position" ("a"=1, "b"=2, etc).
    Return True/False, depending on whether sum of those numbers is odd.

    For example, these sum to 1, which is odd:

        >>> is_odd_string('a')
        True

        >>> is_odd_string('A')
        True

    These sum to 4, which is not odd:

        >>> is_odd_string('aaaa')
        False

        >>> is_odd_string('AAaa')
        False

    Longer example:

        >>> is_odd_string('amazing')
        True
    """

    # to find the char position, we'll change it's ordinal ASCII number into
    # a 1-based number ("a" = 1, "b" = 2). To do that, let's subtract
    # this from it

    DIFF = ord("a") - 1

    total = sum((ord(c) - DIFF) for c in word.lower())

    return total % 2 == 1

print(is_odd_string("aaaa"))

def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """
    count = 0
    
    for p in parens:
        if p == '(':
            count += 1
        elif p == ')':
            count += -1
        
    return count == 0

print(valid_parentheses(")()("))

def three_odd_numbers(nums):
    """Is the sum of any 3 sequential numbers odd?"

        >>> three_odd_numbers([1, 2, 3, 4, 5])
        True

        >>> three_odd_numbers([0, -2, 4, 1, 9, 12, 4, 1, 0])
        True

        >>> three_odd_numbers([5, 2, 1])
        False

        >>> three_odd_numbers([1, 2, 3, 3, 2])
        False
    """
    
    for i in range(len(nums) - 2):
        if (nums[i] + nums[i+1] + nums[i+2]) % 2 != 0:
            return True
    
    return False

print(three_odd_numbers([1, 2, 3, 4, 5]))