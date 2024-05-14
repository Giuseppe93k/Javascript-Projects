// ternary operation with input from the browser
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short ":"you are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

//contructor function using "new" and "this" Keywords 
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//function that  displays the result of the contructor
function myfunction() {
document.getElementById("Keywords_and_Constructors").innerHTML= 
"Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in "+ Erik.Vehicle_Year;
}

// Nested Function
function count_function() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var star = 10;
        function plus()  {star += 1;}
        plus();
        return star;
    }
}