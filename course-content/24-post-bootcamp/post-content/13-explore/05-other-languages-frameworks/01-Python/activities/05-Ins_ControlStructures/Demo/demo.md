# Control Structures

## if-elif-else

A complete #if #elif #else chain!

if CONDITIONAL:&lt;enter key><br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>...<br>
elif CONDITIONAL:&lt;enter key><br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>...<br>
else:&lt;enter key><br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>...<br>

```python
if x == True:
    print("x is True")
elif x == False:
    print("x is False")
else:
    print("x is neither True nor False")
```

Let's look at the in operator in an  if-elif-else chain!

### Examples!
```python
if "zero" in { "zero" : "value", 0: "value", (0,0) : "value", 0.0: "value", False: "false" }:
    print("in dict")
elif 1 in [ "one" , 1, (1,), 1.1, [1,1], { "one" : 1 }, True ]:
    print("in list")
elif (2,2) in ("two" , 2, (2,2), 2.2, [2,2], { "two", 2} ):
    print("in tuple")
elif 3.3 in { "three" , 3, (3,3,3), 3.3 }:
    print("in set")
else:
    print("not found")
```

## Functions

def FUNCTION_NAME:&ltenter key><br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>...<br>
&lt;tab key>return VALUE or no return statement returns 'None'<br>

```python
def isAlwaysTrue():
    return True

# prints a statement if the value is in s
def isInIt(value,s):
    if value in s:
        print(str(value)+" in "+str(type(s))+"!")
        return True
    else:
        print(str(value)+" not in "+str(type(s))+"!")
        return False

# prints a statement depending on comparison operators ==,<,>
def compareIt(a,b):
    if a == b:
        print(str(a)+" == "+str(b))
        return 0
    elif a < b:
        print(str(a)+" < "+str(b))
        return -1
    else:
        print(str(a)+" > "+str(b))
        return 1
```

## For Loops!

for VAR in COLLECTION:<br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>...<br>

### Examples!
```python
def printCollection(collection):
    for x in collection:
        print(x)

printCollection([0,1,2]) # list (array)
printCollection((0,1,2)) # tuple
printCollection({0,1,2}) # set
printCollection({0:"a",1:"b",2:"c"}) # dict
printCollection(range(3)) # range type

# All of the above print out
# 0
# 1
# 2

def printDict(dct):
    lst = []
    for key in dct:
        tmpString = str(key)+":"+str(dct[key])
        print(tmpString)
        lst += [tmpString] # appends the s to the list r
    return lst


printDict({0:"a",1:"b",2:"c"}) # dict

# Prints out
# 0:a
# 1:b
# 2:c
# Returns
# ['0:a', '1:b', '2:c']

# For iterables where you can pull out multiple values
# per element...
for x,y in [[0,1],[2,3],[4,5]]:
    print(f'{str(x)} {str(y)}')
# Prints out
# 0 1
# 2 3
# 4 5
```
## While loops!

while CONDITION:<br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>STATEMENT<br>
&lt;four spaces>...<br>

### Example
```python
x = "N"
while x != "Y":
    print("Knock! Knock!! Little pig little pig let me in!")
    x = input("Does the pig let the wolf in? (Y/N) ")
print("The wolf eats the pig!")
```