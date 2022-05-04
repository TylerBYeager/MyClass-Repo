# Casting Variables

# Python does not automatically "cast" a variable of one
# type to another.

# JS Example: x = "This string is less than "+1000+"characters!"
# JS automatically casts 1000 to a string of "1000" so it can be
# appended.

# Python will not do this!
# x = "This string is less than "+1000+"characters!"
# Traceback (most recent call last):
#  File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str

x = "This string is less than "+str(1000)+"characters!"
# WORKS!

# Open up your interpreter and type the following uncommented lines.
# 1) You should run print(x) on these casts to look at the value.
# 2) You can run print(type(x)) on these casts to make sure the type
#   being returned is what you expect!
# 3) Do yourself a favor and type these commands out in your 
#   interpreter a few times rather than performing a copy and
#   paste.  Start writing python code!

# 1. Cast an integer to a string.
x = str(1000) # "1000"
print(x)
print(type(x))

# 2. Cast a string representation of an integer
#    to an actual integer using the integer constructor?
x = int("80") # integer 80
print(x)
print(type(x))

# 2. Cast a string representation of a float
#    to an actual float using the float constructor.
x = float("1.25") # float 1.25

# 3. What happens when if you try to cast a 
#    string representation of a float to an integer
#    using the integer constructor?
x = int("1.25") # float 1.25

# 4. What's the result of casting an empty string and the
#    floating point value of 0 using the boolean constructor?
x = bool("") # False
x = bool(0.0) # False

# 5. What's the result of casting an non-empty string and a
#    non-zero floating point value using the boolean constructor?
x = bool("a") # True
x = bool(0.000000001) #True

# 6. Try casting a tuple to a list and a set.
# Use the tuple ("A","B","C")
x = list(("A","B","C")) # ['A','B','C"]
x = set(("A","B","C")) # {'A','B','C'} with any ordering of the elements

# 7. Try casting the tuple from question 6 to a string.
# Use the tuple ("A","B","C")
x = str(("A","B","C")) # "('A', 'B', 'C')"

# 8. Try casting a string to a tuple, list and set.
# Use the string "ABC"
x = list("ABC") # ['A','B','C']
x = tuple("ABC") # ('A','B','C')
x = set("ABC") # {'A','B','C'} with any ordering of the elements

# 9. What happens when we cast this dict to a list, set or tuple?
# Use the dict { "A": 1, "B": 2, "C": 3}
#
x = { "A": 1, "B": 2, "C": 3}
list(x) # [ 'A','B','C']
tuple(x) # ('A','B','C')
set(x) # {'A','B','C'} with any ordering of the elements

# 10. How about casting a constructed range value to a list?
# Use the argument range(1,11)
x = list(range(1,11)) # [1,2,3,4,5,6,7,8,9,10]

# BONUS. Cast these nested sequences to a dict.
# Make note of the types of the elements.
# (("String",1),{("Tuple",),2},[0,3])
x = {'String': 1, 2: ('Tuple',), 0: 3}
#or
x = {'String': 1, ('Tuple',): 2, 0: 3}

#   a) The 2 and the ("Tuple",) may have swapped as the key and value.
#      Why?
"""
Tuples are unordered lists.  The sequence they are retrieved can be
different than the order in which they were originally placed.
"""
# [(0.125,1),{ True, 2}]
x = {0.125: 1, True: 2}
# [("A",1),{"B",2},["C",3]]
x = {'A': 1, 2: 'B', 'C': 3}
#   b) What may happened if {"B",2} was {"B",[0,1]}
#      or {[0,1],"B"}.
"""
Since tuples are unordered lists, an attempt to assign the first
element retrieved as the key (which could be a mutable element), can
result in an error.
"""
#   c) Why are tuples, strings, booleans, integer and floats
#      permitted to be keys in dicts?

#   d) What's wrong with the following set declarations?
#      {{"A",1}}?
#      {["A",1]}?

