# Expressions

## Arithmetic Operators

Most operators are just like those in Javascript

The following operators also exist in Python:
* \+	  Addition	        x + y	
* \-	  Subtraction	    x - y	
* \*	  Multiplication	x * y	
* /	  Division	        x / y	
* %	  Modulus           x % y
* +=  Add & Assign      x = x + y
* -=  Sub & Assign      x = x - y
* *=  Mul & Assign      x = x * y
* /=  Div & Assign      x = x / y
* []  Indexing          [x]

The indexing operator also permits the selection of
ranges of values and the application of a step value.
```python
#[x]     x as index
#[x:y]   x as index of first element up to but not including index y
#[x:y:z] same as the above but with a step of z
[0,1,2,3,4,5,6,7,8,9][4]        # [4]
[0,1,2,3,4,5,6,7,8,9][0:2]      # [0,1]
[0,1,2,3,4,5,6,7,8,9][1:3]      # [1,2]
[0,1,2,3,4,5,6,7,8,9][0:10:2]    # [0,2,4,6,8]
# For arrays and tuples:
# array_or_tuple[x:y:z] is equivalent to JS's
#   array.slice(x,y).filter((_,index) => !(index%z))
# For strings:
# string[x:y:z] is equivalent to JS's
#   string.substr(x,y).split('').filter((_,index) => !(index%z)).join('')
```


## ?: Ternary Operator
The ternary operator from JavaScript (JS) takes a different form in Python:
```javascript
conditional = true
x = conditional ? "a" : "b" // x === "a"
```
is equivalent to:
```python
conditional = True
x = "a" if conditional else "b" # x == "a"
```

## The => Operator

The => operator from JS also takes a different form.

```python
# lambda arguments : expression 
f = lambda x : x * 2
f(2) # 4
```
is equivalent to JS's
```javascript
//  (arguments) => expression 
f = (x) => x * 2; 
f(2); // 4
```
## New Arithmetic Operators
* \*\*  Exponentiation    x ** y
* \*\*= Exp AND           x = x ** y
* //  Floor Division    x // y
* //= Floor Div AND     x = x // y

### Exponentiation
```python
x = 10 ** 2 # 100!
```
equivalent to JS's
```javascript
x = Math.pow(10,2);
```

### Floor Division
```python
x = 3 // 2 # x = 1 instead of 1.5
x = 1.5 // 1 # x = 1 instead of 1.5
```
equivalent to JS's
```javascript
x = Math.floor(3/2);
x = Math.floor(1.5);
```

### Prefix and Postfix Addition
The following arithmetic operators are gone
* ++    Prefix and postfix increment
* --    Prefix and postfix decrement

### + Operator
The + arithmetic operator doubles as the append/push operator
for lists and tuples.

```python
[ 0, 1, 2 ] + [ 3, 4, 5 ] # [ 0, 1, 2, 3, 4, 5 ]
[ 0 ] + [ 1 ] # [ 0, 1 ]
( 0, 1, 2 ) + ( 3, 4, 5 ) # ( 0, 1, 2, 3, 4, 5 )
( 0 ) + ( 1 ) # HUH 1
( 0, ) + ( 1, ) # ( 0, 1 )
```

NOTE: Parentheses are still used for enforcing operation
order ((2+2)*4) or (2+(2*4)).  Python needs a hint that
it's working with a tuple which is why you need (0,) to
define a tuple of one element!

### - Operator
The - arithmetic operator doubles as the set subtraction
operator.

```python
{ 0, 1, 2, 3, 4 } - { 1, 2, 3 } # { 0, 4 }
{ 0, 1, 2, 3, 4 } - { 4, 5, 6 } # { 0, 1, 2, 3 }
{ 0, 1, 2, 3, 4 } - { 5, 6 } # { 0, 1, 2, 3, 4 }
```

## Comparison Operators
The following operators also exist in Python:
* \>	Greater than	            x > y	
* <	    Less than	                x < y	
* \>=	Greater than or equal to	x >= y	
* <=	Less than or equal to	    x <= y

However, the following are slightly different
There is no === or !== operator in Python but the
== and != Python operators work similarly!
(Nevermind the JavaScript == and != operators... their
behavior is not replicated with any operator in Python)

Examples of == and != behaving just like === and !==
```python
2 == 2 # True 
2 == "2" # False
2 != 2 # False
2 != "2" # True
```

BUT... 
The behavior of the JS === operator
```javascript
x = { "a": 1 };
y = { "a": 1 };
x === y; // is false

x = y = { "a": 1 };
x === y; // is true
```
and the Python == operator
```python
x = { "a": 1 }
y = { "a": 1 }
x == y # is True

x = y = { "a": 1 }
x == y; # is True
```
are slightly different.

# is Operator (Python)
Python has an extra operator called "is" with it's 
negation "is not".
"is" checks to see if the two variables point to the same
object so..
```python
x = { "a": 1 }
y = { "a": 1 }
x is y # This is False in Python (unlike ==)

x = y = { "a" : 1 }
x is y # This is True in Python
```

NOTE: You get a warning if you try to use is with literals.
ie. strings and numbers.

# <= and >= Operators

These operators when used with sets are the issubset and issuperset
operators.

The python <= or issubset method for sets behaves like these JS functions.
```javascript
// Python <=
function issubset(a,b) { 
  if (a.length === 0) {
      return true;
  }
  for(let element of a) {
      if (!(element in b)) {
          return false;
      }
  }
  return true;
}

// Python >=
function issuperset(a,b) { 
  if (b.length === 0) {
      return true;
  }
  for(let element of b) {
      if (!(element in a)) {
          return false;
      }
  }
  return true;
}
```

```python
# The elements in the first set
# are a subset of the second.
{ "Lion" } <= { "Lion", "Tiger", "Koala" }   # True
{ "Lion", "Tiger" } <= { "Lion", "Tiger", "Koala" }   # True
{ "Lion", "Tiger", "Koala" } <= { "Lion", "Tiger", "Koala" }   # True

# House Cat is not a member of the set on the right!
{ "House Cat"} <= { "Lion", "Tiger", "Koala" } # False

# How do you create an empty set?
# set() = {} so...
set() <= { "Lion", "Tiger", "Koala" } # True
set() <= set() # True

# {} is a subset of ALL SETS including the empty set {}
```

## Logical Operators
Python just has to be different!

Python "and" and "or" are equivalent to JavaScript's && and ||

```python
True and True # JavaScript's true && true
False or True # JavaScript's false || true
```

### in Membership Operator
You're used to using JavaScript's in operator this way:
```javascript
if ("key" in { "key": "value" }) {
  console.log("key in object!");
} 
```
Python's in operator works for all collection types!
```python
# dict
"key" in { "key" : "value" } # True
"key" not in { "key" : "value" } # False

# list
3 in [ 2, 3, 4 ] # True
3 not in [ 2, 3, 4 ] # False

# tuple
3 in ( 2, 3, 4 ) # True
3 not in ( 2, 3, 4 ) # False

# set
3 in { 2, 3, 4 } # True
3 not in { 2, 3, 4 } # False
```
