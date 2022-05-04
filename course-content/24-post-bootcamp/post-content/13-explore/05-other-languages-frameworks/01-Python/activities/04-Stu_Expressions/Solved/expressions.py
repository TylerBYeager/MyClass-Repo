# Once again, open your interpreter and execute the
# following commands!

# 1. What is the result of this bit of python code?
# x = []
# x += [ 1 ]
# x += [ 2 ]

[ 1 , 2 ] # Arrays

# 2. What is the result of the following expression?
# ( 1, 2 ) + ( 3, 4 ) 

( 1, 2, 3, 4)

# 3. Create the tuple (1,2,3,4) from four separate tuples
# using the append "+" operator.

(1,)+(2,)+(3,)+(4,)

# 4. Given the following two sets, describe the behavior
# if you were to replace OP with '-','<=' and '>='.
# { 0, 1, 2, 3, 4 } OP { 1, 2, 3 }
{ 0, 1, 2, 3, 4 } - { 1, 2, 3 } == {0,4}
{ 0, 1, 2, 3, 4 } <= { 1, 2, 3 } == False
{ 0, 1, 2, 3, 4 } >= { 1, 2, 3 } == True

# 5. Given the following two sets, describe the behavior
# if you were to replace OP with '-','<=' and '>='.
# { 6 } OP { 4, 5, 6, 7, 8 }
{ 6 } - { 4, 5, 6, 7, 8 } == {}
{ 6 } <= { 4, 5, 6, 7, 8 } == True
{ 6 } >= { 4, 5, 6, 7, 8 } == False
