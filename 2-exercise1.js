// Functions Exercise
// Do the following exercises on functions as a class.


// 1) Write a function that does not take any arguments, and it logs
//"Wow, it worked!" to the console


function funcOne() {
    console.log("Wow, it worked!")
}

funcOne()


//2) Write a function that does not take any arguments, and it returns
//your favorite movie as a string
// console.log the result


function favoriteMovie() {
    return "Probably.... The Departed. IDK. There are a lot. Pulp Fiction. Old Boy (the Korean one), Akira. Collateral. There are a lot more."
}

console.log(favoriteMovie())


// 3) Write a function that takes one argument, a number, and
// multiplies that number by 100
// console.log the result


function timesHundred(numba) {
    console.log(numba * 100)
}
timesHundred(4)


// 4) Write a function that takes one argument, your name, and puts
// your name in the middle of a sentence
// console.log the result


function nameThing(yourName) {
    console.log("Hey, guess what? Your name is " + yourName + " and that's pretty cool.")
}
nameThing("Sumit")


// 5) Write a function that takes three numbers as arguments and
// returns the largest number
// The numbers should be able to be specified in any order


function biggestNumber(a, b, c) {
    if (a > (b || c)) {   //  I originally had if (a > b && a > c) here, I am actually surprised that the if (a > (b || c)) worked.
        console.log("Input is " + a + ", " + b + ", " + c + " and " + a + " (first) is the largest number.")
    } else if (b > c) {
        console.log("Input is " + a + ", " + b + ", " + c + " and " + b + " (middle) is the largest number.")
    } else {
        console.log("Input is " + a + ", " + b + ", " + c + " and " + c + " (last) is the largest number.")
    }
}

biggestNumber(5,10,15)
biggestNumber(30,20,10)
biggestNumber(40,80,20)


// 6) What do you think will happen here? Anything bad?

    // I think it might break because it seems like the third parameter is missing.

function conCat(first, second, third) {
return first + second + third;
}
var result = conCat("What ","gives? ");
console.log(result);

// Are you surprised?

    // A little bit. I'm surprised the function still ran the parts where the arguments were given and just returned undefined on the last arg.






