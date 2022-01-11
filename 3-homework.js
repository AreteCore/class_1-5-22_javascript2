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


