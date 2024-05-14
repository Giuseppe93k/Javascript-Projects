// Global variable
var G = 30;
function Giuseppe() {
    document.write("giuseppe is "+ G + " years old ");
    document.write("his sister is not " + G + " years old");
}

//local variable 
function Giuseppe2() {
    var S = 10;
    document.write("My sister is " + S + " years old");
}
// function with intention error in it and using console.log method to debug
function debug() {
    var Y = 25;
    console.log(Y + 25);
}
function debug23() {
    console.log(Y + 25);
}
// Using the "if" statement
function date_method() {
    if (new Date().getHours() <12) {
        document.getElementById("study hours").innerHTML = "You still have time to study";
    }
}
 
function myfunction() {
    if (52 + 4 == 56) {
        document.getElementById("maths").innerHTML = "54 + 2 is equal to 56";
    }
}
// "if" and "else" statement
function driver_function() {
    answer = document.getElementById("answer").value;
    if (answer == "yes") {
        positive = "you can drive!";      
    }
    else {
        positive = "You cannot drive, sorry!";
    }
    document.getElementById("Can you").innerHTML = positive;
}
//"else if" statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "it is evening time";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}