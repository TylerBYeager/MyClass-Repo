# Types

## Comments
```python
"""
This
is
a
multi-line
comment!
"""
# Single Line Comment!
```

## Console Output
```javascript
console.log("Hello World!")
```
is equivalent to
```python
print("Hello World!")
```

NOTICE: Statements aren't terminated with semi-colons! ";"

## Python Literal Strings
Python f/literal strings
```python
f'{expression}`
```
are equivalent to JS template literals/strings
```javascript
`${expression}`
```

## Types
###################################################################
```python
# Creates a variable x with a string "Frankfurter"
x = "Fight Club!"
print(len(x)) # prints the length of the string
# JS: console.log(typeof x) === 'string'
print(type(x))
# <class 'str'>

# Re-assigns a variable x with an integer 80
x = 80
# JS: console.log(typeof x) === 'number'
print(type(x))
# <class 'int'>

# Re-assigns a variable x with a floating point value 1.25
x = 1.25
# JS: console.log(typeof x) === 'number'
print(type(x))
# <class 'float'>

# Re-assigns a variable x with a boolean value True
x = True # JS: x = true
# JS: console.log(typeof x) === 'boolean'
print(type(x))
# <class 'bool'>

# Re-assigns a variable x with a list [ "A", "B", "C" ]
x = [ "A", "B", "C" ]
# JS: console.log(typeof x) === 'object'
print(type(x))
# <class 'list'>

# Re-assigns a variable x with a dict { "A": 1, "B": 2, "C": 3 }
x = { "A": 1, "B": 2, "C": 3 }
# JS: console.log(typeof x) === 'object'
print(type(x))
# <class 'dict'>
```
## Other Python Types
```python
# Re-assigns a variable x with a tuple ( "A": 1, "B": 2, "C": 3 )
x = ( "A", "B", "C" )
# JS: No equivalent.
print(type(x))
# <class 'tuple'>

# Re-assigns a variable x with a set { "A", "B", "C" }
x = { "A", "B", "C" }
# JS: x = new Set(); console.log(typeof x) === 'object'
print(type(x))
# <class 'set'>
```

## JavaScript types that don't exist in Python
*  null
*  undefined
*  number
*  object

# Constructors: Every type in Python has one!
```python
x = str("Dark City") # an immutable type
x = int(80)
x = float(1.25) 
x = bool(True)
x = list(["A", "B", "C"]) # a sequence type
x = tuple(("A", "B", "C")) # an immutable list and a sequence type
x = dict({ "A": 1, "B": 2, "C": 3})
x = set({ "A", "B", "C"})
```

NOTE: The range "sequence type" constructor is useful for loops!
```python
x = range(10) # 0,1,2,3,4,5,6,7,8,9
x = range(5,10) # 5,6,7,8,9
x = range(5,10,2) # 5,7,9
```

## Casting Variables

Python does not automatically "cast" a variable of one
type to another.

JS Example:
```javascript
x = "This string is less than "+1000+"characters!"
```
JS automatically casts 1000 to a string of "1000" so it can be
appended.

Python will not do this!
```python
x = "This string is less than "+1000+"characters!"
# Traceback (most recent call last):
#  File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str
x = "This string is less than "+str(1000)+"characters!"
# WORKS!

x = str(1000) # "1000"
x = int("80") # integer 80 > Instead of JS parseInt!
x = float("1.25") # float 1.25 > Instead of JS parseFloat

x = bool(0) # False
x = bool(1) # True

x = bool("") # False
x = bool(0.0) # False
x = bool("a") # True
x = bool(0.000000001) #True

x = list("ABC") # ['A','B','C']
x = list({ "A": 1, "B": 2, "C": 3}) # only grabs the keys!
x = list(range(0,10)) # [0,1,2,3,4,5,6,7,8,9]

x = tuple("ABC") # ['A','B','C']
x = tuple({ "A": 1, "B": 2, "C": 3}) # only grabs the keys!
x = tuple(range(0,10)) # (0,1,2,3,4,5,6,7,8,9)

x = dict((("A",1),("B",2),("C",3))) # tuple of tuples
x = dict([("A",1),("B",2),("C",3)]) # array of tuples
x = dict([["A",1],["B",2],["C",3]]) # array of arrays
x = dict((["A",1],["B",2],["C",3])) # tuple of arrays
```