// micro1.2nd.js

/*

Input:listen, silent

Output:true

Explanation:The letters in the word 'listen' can be rearranged to form the word 'silent', therefore, they are anagrams.

EXAMPLE 2
Input:hello, world

Output:false

Explanation:The letters in the word 'hello' cannot be rearranged to form the word 'world', therefore, they are not anagrams.


1
Implement a function that takes in two words as input and determines if they are anagrams of each other.
2
The function should return a boolean value indicating whether the words are anagrams or not.
3
You can assume that the input words only contain lowercase letters.
4
The function should have a time complexity of O(n), where n is the length of the input words.

*/

function stringToCharArray(text) 
{
    return text.split('').sort().join('');
}

function isAnagram(word1, word2)
{
    return (stringToCharArray(word1) == stringToCharArray(word2));
}

// Input: listen, silent    true
// Input: hello, world      false

// w1 = "silent";
// w2 = "listen";

w1 = "hello";
w2 = "world";

console.log(isAnagram(w1, w2));

/*
********
BONEYARD
********

console.log("test");

*/