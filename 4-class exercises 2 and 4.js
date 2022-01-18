
// ? class exercise 2
// ? Object Literal Practice
// Familiarize yourself with the object literal stored in employee, then answer the questions below.

var employee = {
    id: 467239,
    name: "Megan Cain",
    team: 4,
    payTier: 7
}

// 1. How many property/value pairs does the employee object have?

// It has 4.

// 2. What value is associated with the property of payTier?

// 7    

// 3. What is the property name, or label, for the value "Megan Cain"?

//  it's .name

// 4. Write your own object assigned to a variable named friend. The friend should have a
// name property and an appropriate value.

var friend = {
    name: "Taylor",
}

// 5. Write another object assigned to a variable named artist. The artist should have at least
// three properties.

var artist = {
    name: "Banksy",
    media: "Graffiti",
    style: "Stencil",
}


// ? Dot Notation Practice
// We’ll use the same employee object from the previous practice section.

var employee = {
    id: 467239,
    name: "Megan Cain",
    team: 4,
    payTier: 7
}

// 1. Write the syntax that will access the value 4:

employee.team

// 2. Write the syntax that will access the value "Megan Cain":

employee.name

// 3. What will happen if you call employee.age? Why?

// undefined

// Get a little more practice. Use this object:

var student = {
    name: "Francy",
    program: "Front End",
    module: 5,
    alum: true
}

// 1. Write the syntax that will access the value "Front End":

student.program

// 2. Write the syntax that will access the value true:

student.alum

// 3. What will happen if you call francy.module? Why?

// it will return 5
// console.log(student.module) // returns 5

// ?Reassigning Properties
// We’ll use a similar student object from the previous practice section.
var student = {
    name: "Tristan",
    program: "Front End",
    module: 1,
    alum: false
}

// ● Write the syntax that will move Tristan to Module 2:

student.module = 2

// ● Write the syntax that will move Tristan to Module 5:

student.module = 5

// ● Write the syntax that will make Tristan an alum:

student.alum = true

// ● What will happen if you run tristan.module = 3? Why?

undefined
// tristan is not the name of the object, or any object








// ? class exercise 4
// ? Calculator Object
// In this exercise, we are going to write a calculator with a unique attribute using an object. The
// goal of this exercise is to learn about combining objects, functions and arrays.
// 1. Start creating an empty object

var calc = {}

// 2. Add four functions to the object with the following keys: add, subtract, multiply, divide.

var calc = {
    add: function (a, b) { },
    subtract: function (a, b) { },
    multiply: function (a, b) { },
    divide: function (a, b) { }
}

// Each function should accept two numerical parameters.

// 3. In each of the corresponding, perform an addition, subtraction, multiplication and division
// of the two parameters. Return the result.

var calc = {
    add: function(a, b) {
        return (a + b)
    },
    subtract: function(a, b) {
        return (a - b)
    },
    multiply: function(a, b) {
        return (a * b)
    },
    divide: function(a, b) {
        return (a / b)
    }
}

// 4. Outside of the object, create an array of numbers. Try to do 10 random numbers in the
// array.

var randomNums = [
    6,
    14,
    50,
    14,
    86, 
    52,
    28,
    74,
    98, //largest
    44
]

// 5. Create another function find ‘largestNumber’ that is added to the object. This function will
// have 1 parameter that will take an array.
// 6. Sort through the array to find the largest number and return it.

calc['largestNumber'] = function(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

// 7. Call each of the functions on the object.
console.log(calc.add(1,2))
console.log(calc.subtract(10,5))
console.log(calc.multiply(2,4))
console.log(calc.divide(3,2))
console.log(calc.largestNumber(randomNums))