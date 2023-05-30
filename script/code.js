/*

1-> Create an array called subjects with the following string elements: Python, C++,
VB.Net, Javascript, and Assembly.

*/

let Subjects = ['Python', 'C++', 'VB.Net', 'Javascript', 'Assembly'];

//  a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
 
// We are going to create a variable to contain our last index value

// let last = Subjects.slice(4)[0];
// let last = Subjects[Subjects.length - 1]
// console.log(last);

let last = Subjects.slice(-1);
document.getElementById('lastone').innerHTML += last;


console.log(Subjects.at(4));

// To find the middle element, we will also create a variable container

// let middle = Subjects.slice(2)[0];
// let middle1 = Subjects[Subjects.length  - 3]
// console.log(middle1);
 
let middle = Subjects.slice(2)[0];
document.getElementById('middleone').innerHTML += middle;
console.log(middle);

// if (Subjects.length(5)) {
//     console.log(Math);
// } else {
    
// }

// if (Subjects.length(5)) {
//     console.log(Subjects % 2);
// } else {
    
// }


/**
 * Assistence -> Joel (Lecturer)
 * Was struggling to understand the built-in functiions of JavaScript.
 * Math.floor -> To get an int median value of our array.
 * Used an ifelse statement to verify whether our code was even or odd
 * Output -> The middle median number was produced.
 * Better Optimisation -> View the int value as the 2 string elements. 
 */
let x = Math.floor(Subjects.length / 2)

if (x % 2 == 0) {
    console.log(x);
} else {
    console.log(x.slice(x-1,x+1));
}


let firstname = 'Thabang';
let lastname = 'Kganana';

console.log(firstname, lastname);

console.log(firstname + " " + lastname);

let numbVar = 5;
console.log(numbVar);
//  The output * by 5, will output 25

const myname = 'Thabang'
//const myname = 'Kganana' -> it gives an error 'redeclaring of a blocked scoped variable'