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
var combinedAnimals = [...animals, ...newAnimals]

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


nameAnimalsUnpronounceable()

// console.log(animals.length + "is the number of values in the array")
// console.log(animals[0])
// console.log(animals[0].length)
// console.log(animals[1])
// console.log(animals[1].length)



