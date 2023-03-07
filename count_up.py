print("Navin's Work File")

def count_up(start,stop):
    """Print all numbers from start up to and including stop.

    For example:

        count_up(5, 7)

   should print:

        5
        6
        7
    """
    while (start <= stop):
        print(start)
        start = start + 1

count_up(5,7)

def in_range(nums, lowest, highest):
    """Print numbers inside range.

    - nums: list of numbers
    - lowest: lowest number to print
    - highest: highest number to print

    For example:

      in_range([10, 20, 30, 40], 15, 30)

    should print:

      20 fits
      30 fits
    """

    for x in nums:
        if x >= lowest and x <= highest:
            print(f"{x} fits")


in_range([10, 20, 30, 40, 50], 15, 30)

def sum_nums(nums):
    """Given list of numbers, return sum of those numbers.

    For example:
      sum_nums([1, 2, 3, 4])

    Should return (not print):
      10
    """  

    # Python has a built-in function `sum()` for this, but we don't
    # want you to use it. Please write this by hand.

    total = 0
    for x in nums:
        total = total + x
    return total

print("sum of the nums list: ", sum_nums([1,2,3,4]))

def any7(nums):
    """Are any of these numbers a 7? (True/False)"""

    for x in nums:
        if x == 7:
            return True
    
    return False

print("true: ", any7([1,2,7,4,5]))
print("false: ", any7([1,2,4,5]))


def convert_temp(unit_in, unit_out, temp):
    """Convert farenheit <-> celsius and return results.

    - unit_in: either "f" or "c" 
    - unit_out: either "f" or "c"
    - temp: temperature (in f or c, depending on unit_in)

    Return results of conversion, if any.

    If unit_in or unit_out are invalid, return "Invalid unit [UNIT_IN]".

    For example:

      convert_temp("c", "f", 0)  =>  32.0
      convert_temp("f", "c", 212) => 100.0
    """
    if unit_in !="f" and unit_in !="c":
        return f"Invalid unit {unit_in}"
    
    if unit_out !="f" and unit_out !="c":
        return f"Invalid unit {unit_out}"
    
    if unit_in =="f" and unit_out=="c":
        temp = (temp - 32) * 5/9
        return temp
        
    if unit_in=="c" and unit_out=="f":
        temp = (temp * 9/5) + 32
        return temp
    
    return temp
        
print("convert 0 degrees C to F: should be 32: ", convert_temp("c","f",0))
print("covert 212 f to c: shoud be 100: ", convert_temp("f","c",212))
print("z", "f", 32, convert_temp("z", "f", 32), "should be Invalid unit z")
print("c", "z", 32, convert_temp("c", "z", 32), "should be Invalid unit z")
print("f", "f", 75.5, convert_temp("f", "f", 75.5), "should be 75.5")

#words funtions
print("start of words functions")

def print_upper_case_words(words_list):
    for x in words_list:
        print(x.upper())

print_upper_case_words(["I", "am", "the", "walrus"])

def print_upper_e(words_list):
    for x in words_list:
        if x.startswith("e") or x.startswith("E"):
            print(x.upper())

print_upper_e(["hurricane", "egg", "extra"])

def print_upper_words_startwith(words_list, must_start_with):
    for x in words_list:
        for y in must_start_with:
            if x.startswith(y):
                print(x.upper())

print_upper_words_startwith(["hello", "hey", "goodbye", "yo", "yes"], must_start_with={"h", "y"})

