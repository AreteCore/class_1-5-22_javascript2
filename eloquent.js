// ! I found this on the eloquent chapter 2 and I wanted to try it
// ! IT TOOK HOURS AND I STILL DIDNT GET IT AS PERFECT AS I WANT

// Chessboard

// Write a program that creates a string that represents an 8×8 grid, 
// using newline characters to separate lines. 
// ? newline character: \n
// At each position of the grid there is either a space or a "#" character. 
// The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// When you have a program that generates this pattern, 
// define a binding size = 8 and change the program so 
// that it works for any size, outputting a grid of the 
// given width and height.

// ? I presume that there will be only one parameter, though it's easy enough to set it up for two params (H x W)

// ! This is version 2 of the program
// ? see below for the original and some brainstorming notes

function chessBoard(dimension) {
    console.log("\n" + "Your board is " + dimension + " x " + dimension + ".")
    let lineOdd = ""
    let lineEven = ""
    let board = ""

    //constructing the lines
    //the reason for doing it this way is 
    //the lines HAVE to alternate to get the chessboard pattern
    //so you have to have odd and even lines defined
    for (let i = 0; i <= dimension; i++) {
        if (i == dimension) {
            lineOdd = lineOdd + "\n"
            lineEven = lineEven + "\n"
        } else if (i % 2 == 0) {
            lineOdd = lineOdd + "_"
            lineEven = lineEven + "#"
        } else if (i % 2 == 1) {
            lineOdd = lineOdd + "#"
            lineEven = lineEven + "_"
        }
    }

    //constructing the board from the lines
    for (let i = 0; i < dimension; i++) {
        if (i % 2 == 0) {
            board = board + lineOdd
        } else if (i % 2 == 1) {
            board = board + lineEven
        }
    }
    console.log(board)
}

// chessBoard(3)




// ! This is version 1
// ! this is the first way I did this, which was successful 
// ! but I re-read the instructions and figured out I didnt use newline
// ! scrapped it

function chessBoardv1(dimension) {
    console.log("Your board is " + dimension + " x " + dimension + ".")
    let oddLine = []
    let evenLine = []
    for (let i = 0; i <= dimension - 1; i++) {
        if (i % 2 == 0) {
            oddLine.push("#")
            evenLine.push(" ")
        } else {
            oddLine.push(" ")
            evenLine.push("#")
        }
    }

    for (let i = 0; i <= dimension - 1; i++) {
        if (i % 2 == 0) {
            console.log(evenLine.join(""))
        } else {
            console.log(oddLine.join(""))
        }
    }

}
    // chessBoardv1(8)
    // chessBoardv1(9)




//there has to be an easier way to do this...
//i want to do it with one long string of x+o+x+o+x+o+x+o

// lets see ... how about 9. if 
// xox
// oxo
// xox

// what if you add extras for counting for the newlines... can you do it?
// add 3 so 3*4 is the math
// xoxoxoxoxoxo
// xoxBxoxBxoxB
// doesnt work for patterning tho
// xoxB
// xoxB
// xoxB

// it has the wrong pattern with an odd number
// lets see if it works with evens and still keeps the pattern

// heres 4, a grid of 16, so 4*5 is our target with the newlines included
// xoxoxoxoxoxoxoxo

// xoxoB
// oxoxB
// xoxoB
// oxoxB

// so with even numbered dimensions, you can take dim and do dim * (dim+1)
// and just use a newline at every modulo of dim+1
// the pattern will be chessBoard

// but if you modulo with dim*(dim+1) and dim is ODD, the pattern is vertically symmetrical
// so youd have to have a separate loop for the odd ones anyway, to make sure the pattern alternated line to line
// hmm


// function alternate(a,b) {
//     console.log(a + b + a + b + a + b + "\n" + a + b + a + b)
// }

// alternate("f","g")

