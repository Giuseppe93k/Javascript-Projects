// using the concat() method to concatenate variables part1,part2 and part3
function sentence() {
    var part1 = "This is ";
    var part2 = "my concatenating ";
    var part3 = "sentence.";
    var full_sentence = part1.concat(part2, part3);
    document.getElementById("concatenate").innerHTML = full_sentence;
}
// using the slice() method to return a string of a specific position
function method_slice() {
    var frase = "I am a student of pitman training.";
    var section = frase.slice(6,14);
    document.getElementById("sentence").innerHTML = section;
}
// using the toUpperCase() method the turn text into uppercase
function myfunction() {
    var text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = text.toUpperCase();
}
//using the search() method to display the index position of a string 
function searchmethod() {
    var text_1 = "MY name is Giuseppe";
    var index = text_1.search("Giuseppe");
    document.getElementById("search").innerHTML = index;
}
//using the toString() method to return a number as a string 
function number_method() {
    var X = 1993;
    document.getElementById("NM").innerHTML = X.toString();
}

function precision_method() {
    var X = 12345896.1565168168461;
    document.getElementById("precision").innerHTML = X.toPrecision(15);
}
// using the toFixed() methos to round up a number 
function to_fixed_method() {
    var X = 1254.23;
    document.getElementById("fixed").innerHTML = X.toFixed();
}
// using the valueof() methos to return the primitive value of a number 
function valueof_method() {
    var X = 30;
    document.getElementById("valueof").innerHTML = X.valueOf();
}