// We all require a set hours of sleep to correctly function. Below we are going to write a chain of if statements that determine what happens to us based on the hours of sleep we get.
// Define a variable called ‘hoursofSleep’. Set the value of the variable to 8
// In your first if statement, if the hours of sleep is less than or equal to 6, console log “I am groggy”
// In the else statement, console log “I feel fantastic?”
// Run the code a few times, and change the hoursOfSleep variable to test different results.

// console.log("exercise 1 start")

// var hoursOfSleep = 4

// function howMuchSleep(){
//     if (hoursOfSleep <= 6) {
//         console.log("I am groggy. " + hoursOfSleep + " hours.")
//     } else {
//         console.log("I feel fantastic." + hoursOfSleep + " hours.")
//     }
// }                  

// howMuchSleep()

// hoursOfSleep += 1

// howMuchSleep()

// hoursOfSleep += 1

// howMuchSleep()

// hoursOfSleep += 1

// howMuchSleep()

// hoursOfSleep += 1





// Exercise 2
// GPS makes getting around easy, you no longer have to remember an address, just enter the street name and zip code and you’re there! What if your GPS can talk back to you? Write an if statement that will have the GPS send you a response based on the location.
// Define a variable that is ‘nextLocation’. Set the value to ‘home’.
// Write the first if statement that if the nextLocation is equal to home, write to the screen “It’s been a long day, let’s go home!”
// Write an else if statement that if the nextLocation is equal to work, write to the screen “Good morning, finding the fastest route to work!”
// Write an else statement that writes to the screen “Good morning, finding the fastest route to work!”
// Change the nextLocation to different inputs to change the if statement.
// console.log("exercise 2 start")

// var nextLocation = "asdf"

// if (nextLocation == "home") {
//     console.log("It’s been a long day, let’s go home!")
// } else if (nextLocation == "work") {
//     console.log("Good morning, finding the fastest route to work!")
// } else {
//     console.log("idk")
// }



// ? for loops
//starting point
// terminating point
//increment

// for (var i = 0; i <= 10; i++) {
//     console.log("Count " + i)
// }


// var string = "testing"
// for (var i = 0; i < string.length; i++) {
//     console.log("Letter is " + string.charAt(i))
// }

// console.log(string.length)

//how do i print the last letter

//string.length?

// console.log(string.charAt(string.length - 1))    


// ? in class exercise    
// ?     Part 1:
// Create an array of four animals called animals.
// Create a function called nameAnimals.
// Within your function, create a for loop that logs “Mommy, I want to see [insert animal name here]! Waaah!”
// With your array (and - if needed - with your knowledge of parameters), invoke your function to ensure it is working correctly.

var animals = ["Lemur", "Meerkat", "Eagle", "Rattlesnake"]

function nameAnimals() {
    for (let i = 0; i <= animals.length; i++) {
        console.log("Mommy, I want to see " + animals[i] + "! Waaah!");
    }
}

//nameAnimals()


// ?     Part 2:
//     Create a function that dynamically adds the following animal names to the current array. You must NOT recreate the array, only add values.
// Tiger
// Wunderpus photogenicus
// Bear
// Pink Fairy Armadillo
// Coyote
// Rasberry Crazy Ant
// Moose
// Satanic Leaf-Tailed Gecko
// Lion
// In the function that is printing out, add an if statement. If the animal name is longer than 10 characters, say “Mommy, that animal name is too long to pronounce :(“, Otherwise print the other message
// Make sure the code is re-usable for both adding the names, iterating through the array, and printing the outputs. Avoid duplicate code.



//creates an array with the new animal names
var newAnimals = ["Tiger",
    "Wunderpus photogenicus",
    "Bear",
    "Pink Fairy Armadillo",
    "Coyote",
    "Rasberry Crazy Ant",
    "Moose",
    "Satanic Leaf-Tailed Gecko",
    "Lion"]

//counts newAnimals and sets a variable used for iterations of the shift/push for
var newRepeats = newAnimals.length

//removes the newAnimals one at a time and adds them to animals one at a time
for (let i = 0; i < newRepeats; i++) {
    animals.push(newAnimals.shift())
}

// there is another way to do it all at once by combining the two arrays
//var combinedAnimals = [...animals, ...newAnimals]

//console.log(sum.apply())

//unpronounceable names function
function nameAnimalsUnpronounceable() {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i].length < 10) {
            console.log("Mommy, I want to see " + animals[i] + "! Waaah!");
        } else {
            console.log("Mommy, that animal name is too long to pronounce :(")
        }
    }
}


// nameAnimalsUnpronounceable()

// console.log(animals.length + "is the number of values in the array")
// console.log(animals[0])
// console.log(animals[0].length)
// console.log(animals[1])
// console.log(animals[1].length)













// ? 1/15/22 class problems

// ? Hello world
function helloWorld() {
    console.log("Hello World")
}

// helloWorld()


// ? Take input as a parameter and log it
function returnAsString(param) {
    console.log(param)
}

// returnAsString("test")


// ? Add two integers
function addNum(num1, num2) {
    console.log(num1 + num2)
}

// addNum(5, 7)


// ? Log the string length
function stringLength(str) {
    console.log(str.length)
}

// stringLength("I like coffee")


// ? Add two strings
function addStrings(str1, str2) {
    return (str1 + str2)
}

// console.log(addStrings("Emir", " Gencyexitonly"))

// ? Find a character of a particular index within a string.
function findChar(str, int) {   //takes input of a string and an integer
    console.log(str[int])       //console logs the character at that index
}

// findChar("flabbergasted", 4)


// ? Find the last character of a string
function findLastChar(str) {
    console.log(str[str.length - 1]) //logs the value stored at index (str.length - 1)
}

// findLastChar("ping")


// ? Count passwords in an array of ten characters or longer
// ! This took some tweaking but I finally got it. This one is harder than the rest.
function pwCount(pwArray) {                         //takes an array as a parameter
    let longerPw = []                               //defines empty array as a new 'container'
    for (let i = 0; i <= pwArray.length - 1; i++) { //sets up the loop counter
        if (pwArray[i].length >= 10) {              //if the value has a character length of 10 or more
            longerPw.push(pwArray[i])               //push that value to the empty array
        }   //performs this if for every value in pwArray
    }
    console.log("These passwords are 10 chars or longer: " + longerPw)   //once the loop is done, displays the array of long passwords
    console.log("There were " + (pwArray.length - longerPw.length) + " passwords that were too short.") //tells you how many short pws there were
}

// passwordCounter(["ten_______", "fifteen________", "six___", "four", "eleven_____", "five_"])



// ? function to replace even numbers in an array with the number 5
function replace(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 == 0) {
            arr[i] = 5
        }
    }
    console.log(arr)
}

// replace([1, 2, 3, 4, 5, 6, 7, 8])



// ?    1.  Declare a new variable called yourName that stores an object literal that represents you! 
// ?        It should have all of the following keys: name, age, alive, and homeTown.
// ?        Give each of those keys an appropriate value.
let yourName = {
    name: "Rich",
    age: 37,
    alive: true,
    hometown: "Newhall"
}

// ?    2.  Practice using dot notation to access each value on your object.
// console.log(yourName.name)
// console.log(yourName.age + " years old")
// console.log(Math.floor(yourName.age / 7) + " in dog years.")


// ?    Reassigning & Adding
// ?    Go back to the object about you, and add a property of currentLocation to your object. 
// ?    Assign it to a string of any coffee shop location you (used to) frequent.
yourName["currentLocation"] = "Starbucks"

// console.log(yourName.currentLocation)

// ?    Now try re-assigning the age property to a different number.
yourName.age = 100

// console.log(yourName.age)

// ?    Remember to call the object or the property on the last line of the file (or in the console), and run the code to verify the outcome!
function whatIsYourName() {
    console.log("My name is " + yourName.name + ", and I am " + yourName.age + " years old and though I am currently at " + yourName.currentLocation + ", I am from " + yourName.hometown + ". Also, I am almost certainly " + deadOrAlive())
    function deadOrAlive() {
        if (yourName.alive == true) {
            return "alive."
        } else {
            return "dead."
        }
    }
}

// whatIsYourName()


// ? While Loops are loops that terminate based on conditionals. The loop terminates when a false condition is reached. The below exercise will achieve a false condition.
function whileLoop() {
    // ? Create an array with 10 items in it
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    // ? In a while loop, make a conditional that checks the number of items in the array is greater than zero
    while (arr.length > 0) {

        // ? In each iteration of the while loop, use shift or pop to remove an item. Print out the item being removed.
        console.log(arr.pop())
    }
    // ? Have a console message display when the loop is no longer executing.
    console.log("done")
}

// whileLoop()

