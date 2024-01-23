// micro1.js

/* 

Write a function `maximumSum` that takes an array of integers as input.

You can assume that the array will contain at least one element.

You should consider both positive and negative numbers when calculating the sum.

*/

function maximumSum(l)
{
    // l is array of integers
    maxSum = null;

    for (i = l.length - 1; i > 0; i--)
    {
        maxSum = maxSum + l [i];
    }

    return maxSum;
}

l1 = [1, 2, 3, 4, 5];
l2 = [3, 4, -1, 2, 5];

console.log(maximumSum(l));

// sort array
// run backwards through array
// sum non-consecutive numbers

// console.log(maximumSum(l1));
// console.log(maximumSum(l2));