/*

1-> Create an array called subjects with the following string elements: Python, C++,
VB.Net, Javascript, and Assembly.

*/

let Subjects = ['Python', 'C++', 'VB.Net', 'Javascript', 'Assembly'];

//  a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
 
// We are going to create a variable to contain our last index value

let last = Subjects.slice(4)[0];
// let last = Subjects[Subjects.length - 1]
// let last = Subjects.slice(-1);
// document.getElementById('lastone').innerHTML += last;
console.log(last);

// To find the middle element, we will also create a variable container

// let middle = Subjects.slice(2)[0];
// let middle1 = Subjects[Subjects.length  - 3]
// console.log(middle1);
 
let middle = Subjects.slice(2)[0];
document.getElementById('middleone').innerHTML += middle;
console.log(middle);