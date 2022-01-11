// Tip Calculator
// We are going to write a tip calculator that will check if a tip is large enough. The following parameters should be followed:
// The tip calculator should have 1 function that takes 2 parameters: the total price of the meal and the tip that was given
// The calculator should first determine what percentage is the current tip of the meal
// A bad tip is 5% or less, an ok tip is under 10% but greater than 5%, a good tip is between 10% and 20%, and a great tip is greater than 20%
// The calculator should output the following values based on where the tip falls:
// Less than 5%: “You are an awful tipper”
// Between 5% and 10%: “You are an ok tipper!”
// Between 10% and 20% “You are a good tipper!”
// Greater than 20%: “You are a great tipper!”

function tipper(total, tip) {
    if (tip/total < .05) {
        console.log("You are an awful tipper, you only tipped " + Math.round(tip/total * 100) + "%!")
    } else if (tip/total >= .05 && tip/total < .10) {
        console.log("You are an ok tipper, you tipped " + Math.round(tip/total * 100) + "%!")
    } else if (tip/total >= .1 && tip/total < .2) {
        console.log("You are a good tipper, you tipped " + Math.round(tip/total * 100) + "%!") 
    } else if (tip/total >= .2) {
        console.log("You are a great tipper, you tipped " + Math.round(tip/total * 100) + "%!")
    } else {
        console.log("Put in the right parameters. You can't put " + total + " and " + tip + " and expect it to work.")
    }
}

tipper(10, 4)
tipper(100, 7)
tipper(449, 45)
tipper(2, 7)
tipper("potato",1)