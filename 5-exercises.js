// in class exercises from  1/19


//exercise1
function truncateString(str, num) {
    //first check for bad inputs
    if (Number.isInteger(num) && num > 0 && typeof str === 'string') {
        //
        if (num > str.length) {
            console.log("Your string is not long enough to slice.")
        } else { console.log(str.slice(0, num) + "...") }
    } else { console.log("bad input") }
}

truncateString("kwijybo", 3)
truncateString("asdfasdfasdf", 4)
truncateString(
    "Clay lies still, but blood's a rover", 
    15
)

// divisibleByThree
//
// This function takes a single integer as its argument
// and returns true if the number is evenly divisible by three.
//
// example usage
// divisibleByThree(3) -> true
// divisibleByThree(18) -> true
// divisibleByThree(7) -> false
//? I = Input
//? O = Output
//? C = Constraints
//? E = Edge cases
//? HINT => %

function divThree(int) {
    if (Number.isInteger(int)) {
        if (int % 3 === 0) {
            return true
        } else {
            return false
        }
    }
    else { return "Input not an integer." }
}

console.log(divThree(5))
console.log(divThree(9))

// keyList
//
// This function takes an object and returns a list of its keys,
// not including the default keys of javascript objects.
//
// example usage
var Thing = {
 face : 'big',
 height : 6,
 legs : 'none'
 }
//
//  keyList(Thing) -> [‘face’,‘height’,‘legs’]

function keyList(objNameHere) {
    console.log(Object.keys(objNameHere));
}

keyList(Thing)



// last thing

var myself = {
    firstName : "Rich",
    lastName : "Clarke",
    age : 37,
    favCoffee : true,
    codingLanguages : ["html", "css", "javascript"]

}

function addSkill(str) {    
    myself.codingLanguages.push(str)
    console.log(myself.codingLanguages)
}

addSkill("fgsfds")

// ohhhh this is wrong, i didnt know
// here is yours from class so i can see it later

myself.AddSkill = function(str) {
    this.codingLanguages.push(str)
}

myself.AddSkill("python")

console.log(myself)
