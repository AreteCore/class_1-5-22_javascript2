// Instructions/Exercises
// ● For this assignment you will be creating a grading system for a school. Create a grading
// system from A-F.
// ○ A=100-90
// ○ B=89-80
// ○ C=79-70
// ○ D= 69-60
// ○ F= 59-0
// ● Create a variable that contains the student’s grade (it should be a number). Then using
// an if/else statement compare the students grade to the grading system to determine the
// letter grade the student received.
// ● Now it is time to create a function that can be reused to return the student’s letter grade.
// Take the above if/else statement for the grading system and put it into a function. The
// function should take one parameter and return the student’s letter grade.
// ● Now let’s update the grading scale to be a bit more complicated. Update the code above
// to include +/- grades (A+, A-, B+, B-, etc.) update the grading system and if/else
// statement to return the letter grade including + or -.
// ● For bonus: think about how your function would run if the parameter passed in was not a
// number, but a string. Look up how to add in test cases to make sure if the function is
// called but the parameter is not a number it returns an error message instead.

function grading(myGrade) {

    //bad input handling
    if (myGrade < 0 || myGrade > 100 || (typeof myGrade === "string")) {
        console.log(myGrade + " is not a valid input. You have to enter an integer between 0 and 100.")
    } else {

        //determines plus or minus grades
        if (((myGrade % 10) >= 8) || (myGrade == 100)) {
            var plusOrMinus = "+"
        } else if ((myGrade % 10) <= 3) {
            var plusOrMinus = "-"
        } else { var plusOrMinus = "" }

        //actual grading and console log responses
        if (myGrade >= 90) {
            console.log("You scored " + myGrade + "! Congratulations! You got an A" + plusOrMinus + "!")
        } else if (myGrade >= 80) {
            console.log("You scored " + myGrade + "! You got a B" + plusOrMinus + ", for BOSS!")
        } else if (myGrade >= 70) {
            console.log("You scored " + myGrade + "! You got a C" + plusOrMinus + "!")
        } else if (myGrade >= 60) {
            console.log("You scored " + myGrade + "! You got a D" + plusOrMinus + "!")
        } else if (myGrade < 60) {
            console.log("You scored " + myGrade + "! You got an F.")
        }
    }
}

// grading(4)
// grading(60)
// grading(99)
// grading(71)
// grading(70)
// grading(69)
// grading(89)
// grading(90)
// grading(100)
// grading("foo")
// grading("bar")





// ? Homework 1/13/22
// For Loops
// In this exercise, we are going to be implementing basic for loops. Implement each of the
// following as a class:
// 1. Create a for loop that starts at 7, terminates at 44, and increments by 5

function sevenFortyFour() {
    for (let i = 7; i <= 44; i++) {
        console.log(i)
    }
}
// sevenFortyFour()


// 2. Create a for loop that starts at 1000, decrements by 100, and must be greater than
// negative -1000
function thousands() {
    for (let i = 1000; i > -1000; i = i - 100) {
        console.log(i)
    }
}
// thousands()


// 3. Create a string with the text ‘KATAKANA’. Iterate over the word with a for loop, and for
// every A, print out “Found an A!”
function katakana() {
    var string = "KATAKANA"
    for (let i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) === "A") {
            console.log("Found an A!")
        } else {
            console.log("Current letter is " + string.charAt(i) + ", not an A.")
        }
    }
}
// katakana()


// Odd or Even
// In this class exercise we are going to print if a number stored in an array is odd or even.
// 1. Create an array with 10 random numbers.
// 2. Loop through the array
// 3. If the number at the current index is even, print out even, otherwise print odd
function oddOrEven() {
    var numbers = [
        97,
        6,
        16,
        90,
        61,
        40,
        68,
        48,
        40,
        94,
    ]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            console.log("Number is " + numbers[i] + ", which is even.")
        } else {
            console.log("Number is " + numbers[i] + ", an odd number.")
        }
    }
}
// oddOrEven()




// ? Instructions/Exercises
// 1. Create a function that adds up the integers in the following array 
var numbers = [10, 20, 30, 40, 50]
// Do not use any array prototype methods, this must be
// completed using for loops and variables.
function addArray() {
    var addition = 0
    for (let i = 0; i < numbers.length; i++) {
        addition = addition + numbers[i]
        console.log("total is " + addition)
    }
}
// addArray()


// 2. Create a function that reverses the following array - 
var array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Do not use array prototype method .reverse()
function reversingArray() {
    console.log("Array at start is " + array1)
    var array2 = []
    for (let i = 0; i < array1.length + array2.length; i++) {
        array2.push(array1.pop())
    }
    array1 = array2 // switches the content of the arrays
    array2 = null // empties array2
    console.log("Array at end is " + array1)
}
// reversingArray()


// 3. Implement Fizz Buzz. Loop from 1 to 100. If the number is divisible by both 3 and
// 5, print "fizzbuzz". Otherwise, if the number is divisible by 3, print "fizz", or, if the
// number is divisible by 5, print "buzz". If none of the above are true, print the
// number. This is a very common interview question! Try completing this on your
// own before looking up the answer.
// ! OH I GOT THIS ITS MODULO im not looking it up
// here we go
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log("Fizz!")
        } else if (i % 5 == 0) {
            console.log("Buzz!")
            //i almost forgot to do 15
        } else if (i % 15 == 0) {
            console.log("Fizz Buzz!")
        } else {
            console.log(i)
        }  //lets hope this works
    }
}
// fizzBuzz()
// ! I DID IT!!!!! YEAAAAAAA


// 4. Challenge: Write a JavaScript program to construct the following pattern
// (see below), using a nested for loop.
// *
// **
// ***
// ****
// *****

function stars() {
    for (let i = "*"; i <= "*****"; i = i + "*") {
        console.log(i)
    }
}

// stars()
// ! I LITERALLY CANNOT BELIEVE THIS WORKED ahaha