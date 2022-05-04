# 1. Write a function using Python the determines if word a is an
# anagram of string b (contains all the same letters
# but in a different order.)
#
# anagram("fried","fired") => True

def anagram(a,b):
    if (len(a) != len(b)):
        return False
    
    dct = {} # create a dict
    # add all letters in a to dct dict and their count
    for letter in a:
        if letter in dct:
            dct[letter] = dct[letter] + 1
        else:
            dct[letter] = 1
    # for all letters in b
    for letter in b:
        # letter is in dct (ie was in a)
        if letter in dct:
            dct[letter] = dct[letter] - 1
            # a has fewer instances of the letter than b then return False
            if dct[letter] < 0:
                return False
        # letter wasn't in a so return false
        else:
            return False
    # All letters match!
    return True

# 2. Write a function that calculates the maximum product of two elements
#    of an array.
#    maxProduct([1,2,3,4]) => 12

def maxProduct(t):
    if len(t) < 2:
        return None

    max = (t[0])*(t[1])
    i = 0
    while i < len(t):
        j = 0
        while j < len(t):
            tmpMax = (t[i]) * (t[j])
            if i != j and tmpMax > max:
                max = tmpMax
            j = j + 1
        i = i + 1
    return max


