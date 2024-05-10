// This is my addition operation
function Addition_function() {
    var add = 5 + 5;
    document.getElementById("Math").innerHTML = "5 + 5 =" + add; //print result in HTML
}
// This is my subtraction operation
function sub_function() {
    var sub = 10 - 5;
    document.getElementById("Math_sub").innerHTML = "10 - 5 = " + sub;//print result in HTML
}
// This is my multiplication operation
function multiply_function() {
    var multi = 10 * 5;
    document.getElementById("multiplication").innerHTML = "10 * 5= " + multi;v
}
// This is my division oparation
function division_function() {
    var div = 20 / 4;
    document.getElementById("division").innerHTML = "20 / 4 = " + div;//print result in HTML
}
// Multiple operations at once 
function multi_operations() {
    var MO = (5+5) * 5 / 5 - 5;
    document.getElementById("multi_maths").innerHTML = "multiple oparation result is: " + MO;//print result in HTML
}
// modulus operator 
function modulus_function() {
    var mod = 30 % 7;
    document.getElementById("modulus").innerHTML = "divide 30 by 7 and you get a remainder of: " + mod;//print result in HTML
}
//nagetion operator
function negative_function() {
    var neg = 15;
    document.getElementById("negative").innerHTML = -neg;//print result in HTML
}
//increment operator
var up = 15;
up++;
document.write("This is my increment operator " + up +". ");//print result in HTML
//this is my decrement 
var dec = 15;
dec--;
document.write(" This is my decrement "+ dec);//print result in HTML
// Math.random 
window.alert(Math.random()) * 50;
//Math ogject method
function math_object(){

document.getElementById("object").innerHTML = Math.PI;//print result in HTML
}