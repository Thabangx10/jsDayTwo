/*

1-> Create an array called subjects with the following string elements: Python, C++,
VB.Net, Javascript, and Assembly.

*/

let Subjects = ['Python', 'C++', 'VB.Net', 'Javascript', 'Assembly'];

//  a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
 
// We are going to create a variable to contain our last index value

let last = Subjects.slice(-1)[0];
console.log(last);

// To find the middle element, we will also create a variable container

let middle = Subjects.slice(-3)[0];
console.log(middle);