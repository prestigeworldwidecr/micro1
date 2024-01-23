# micro1.py

import numpy as np

'''

Write a function `maximumSum` that takes an array of integers as input.

You can assume that the array will contain at least one element.

You should consider both positive and negative numbers when calculating the sum.

'''

# l is array of integers
def maximumSum(l) :
    maxSum = None
    this_tmp = None
    last_tmp = None # last number factored into maxSum

    n = (np.array(l))   # create numpy_array from original integer array
    tmp = n.tolist()    # convert numpy_array to List
    tmp.sort(reverse=True)

    print(tmp)

    # first element is negative
    if tmp [0] <= 0 :
        maxSum = tmp [0]

    else :
        for i in range(0, len(tmp)) :
            this_tmp = tmp [i]

            # first element
            if i == 0 :
                maxSum = this_tmp
                last_tmp = this_tmp

            elif this_tmp <= 0 :
                return maxSum

            # neighboring numbers are consecutive, do not add to maxSum
            elif last_tmp == this_tmp + 1 : 
                False

            else :
                maxSum = maxSum + this_tmp
                last_tmp = this_tmp

            # print("i: ", i, " maxSum: ", maxSum, " last_tmp: ", last_tmp, " this_tmp: ", this_tmp)

    return maxSum;

l1 = [1, 2, 3, 4, 5];
l2 = [3, 4, -1, 2, 5];
l3 = [-3, -4, -1, -2, -5];

print(maximumSum(l1));
print(maximumSum(l2));
print(maximumSum(l3));

'''
    sort array
    run backwards through array
    sum non-consecutive numbers
'''    