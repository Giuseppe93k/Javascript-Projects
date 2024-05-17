//While loop 
function Call_Loop() {
    var number = "";
    var X = 0;
    while (X < 11) {
        number += X + "<br>";
        X++;
    }
    document.getElementById("Loop").innerHTML = number;
}

// using the length property to diplay the length of a string.
var texts = "Giuseppe Kakra"
var lenght = texts.length;
document.getElementById("demo").innerHTML = texts.length;

//for loop function
function for_Loop() {
    var instruments = ["Piano", "Guitar", "Drums", "trumpets"];
    var play = "";
    var X;
    for(X = 0; X < instruments.length; X++) {
        play += instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = play;
}

//This an array.
function array_Function() {
    var anime = [];
    anime[0] = "Shonen";
    anime[1] = "Isekay";
    anime[2] = "Mecca";
    document.getElementById("Array").innerHTML = "My Hero Academia is a " + anime[0] + " type of anime.";
}

// using the const keyword
function constant_function() {
    const anime = {type:"shonen", status:"on going", episodes:54};
    document.getElementById("Constant").innerHTML = "Jujustu kaisen is a " + anime.type + " jump anime."
}


//function with the retun statement
document.getElementById("demos").innerHTML = myfunction("Giuseppe") + "<br>";
function myfunction(name) {
    return "my name is " + name;
}

// creating an object with "let" keyword
let PC = {
    manufucturer: "Apple ",
    model: "macbook ",
    Year_released: "2024 ",
    Color: "black ",
    description: function() {
        return "the latast pc by " + this.manufucturer + " is called " + this.model + " it was released in " + this.Year_released + " and the main color is " + this.Color;
    }
}
document.getElementById("Pcmodel").innerHTML = PC.description();

// loop with a break statement 
function loop_break() {
    var text ="";
for (let i = 0; i < 10; i++) {
    if (i === 4) {break;}
    text += i + "<br>";
}
document.getElementById("counts").innerHTML = text;
}

//loop with a continue statement 
function loop_continue() {
    var digit ="";
for (let i = 0; i < 10; i++) {
    if (i === 4) {continue;}
    digit += i + "<br>";
}
document.getElementById("count").innerHTML = digit;
}