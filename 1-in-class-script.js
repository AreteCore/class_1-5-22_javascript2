// We all require a set hours of sleep to correctly function. Below we are going to write a chain of if statements that determine what happens to us based on the hours of sleep we get.
// Define a variable called ‘hoursofSleep’. Set the value of the variable to 8
// In your first if statement, if the hours of sleep is less than or equal to 6, console log “I am groggy”
// In the else statement, console log “I feel fantastic?”
// Run the code a few times, and change the hoursOfSleep variable to test different results.

console.log("exercise 1 start")

var hoursOfSleep = 4

function howMuchSleep(){
    if (hoursOfSleep <= 6) {
        console.log("I am groggy. " + hoursOfSleep + " hours.")
    } else {
        console.log("I feel fantastic." + hoursOfSleep + " hours.")
    }
}                  

howMuchSleep()

hoursOfSleep += 1

howMuchSleep()

hoursOfSleep += 1

howMuchSleep()

hoursOfSleep += 1

howMuchSleep()

hoursOfSleep += 1





// Exercise 2
// GPS makes getting around easy, you no longer have to remember an address, just enter the street name and zip code and you’re there! What if your GPS can talk back to you? Write an if statement that will have the GPS send you a response based on the location.
// Define a variable that is ‘nextLocation’. Set the value to ‘home’.
// Write the first if statement that if the nextLocation is equal to home, write to the screen “It’s been a long day, let’s go home!”
// Write an else if statement that if the nextLocation is equal to work, write to the screen “Good morning, finding the fastest route to work!”
// Write an else statement that writes to the screen “Good morning, finding the fastest route to work!”
// Change the nextLocation to different inputs to change the if statement.
console.log("exercise 2 start")

var nextLocation = "asdf"

if (nextLocation == "home") {
    console.log("It’s been a long day, let’s go home!")
} else if (nextLocation == "work") {
    console.log("Good morning, finding the fastest route to work!")
} else {
    console.log("idk")
}