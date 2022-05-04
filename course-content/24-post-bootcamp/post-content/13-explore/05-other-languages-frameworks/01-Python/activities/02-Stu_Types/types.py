# Casting Variables

# Python does not automatically "cast" a variable of one
# type to another.

# JS Example: x = "This string is less than "+1000+"characters!"
# JS automatically casts 1000 to a string of "1000" so it can be
# appended.

# Python will not do this for strings!
# x = "This string is less than "+1000+"characters!"
# Traceback (most recent call last):
#  File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str

x = "This string is less than "+str(1000)+"characters!"
# WORKS!

# Open up your interpreter and type the following lines.
# Run print(type(x)) on these casts to make sure the type
#   being returned is what you expect!

# Can you cast an integer to a string?
x = str(1000)

# Can you cast an "integer" string to an integer?
x = int("80")

# Can you cast a "float" string to a float?
x = float("1.25")

# Can you cast a "float" string to an integer?
x = int("1.25")

# What's the result of casting these values using bool?
x = bool("") 
x = bool(0) 
x = bool(0.0) 

# What about these values?
x = bool("a") 
x = bool(1) 
x = bool(0.000000001) 

# How about casting a tuple to a list?
x = list(("A","B","C")) 

# Can we cast this string to a list?
x = list("ABC") 

# What happens when we cast this dict to a list?
x = list({ "A": 1, "B": 2, "C": 3}) 

# How about casting a constructed range value to a list?
x = list(range(1,11)) 

# Casting a tuple of typles to a dict?
x = dict((("A",1),("B",2),("C",3)))

# Casting an array of tuples to a dict?
x = dict([("A",1),("B",2),("C",3)])

# Casting an array of arrays to a dict?
x = dict([["A",1],["B",2],["C",3]])

# Casting a tuple of arrays to a dict?
# (Yes, I know, you get the idea!)
x = dict((["A",1],["B",2],["C",3]))

# Casting the keyword arguments of the dict constructor to
# a dict? 
x = dict(A = 1, B = 2, C = 3)