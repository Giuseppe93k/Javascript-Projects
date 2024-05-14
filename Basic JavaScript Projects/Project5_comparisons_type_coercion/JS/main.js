document.write(typeof "shonen");//printing data type of shonen
document.write("<br>");

document.write("shonen" + 55);// combinig a string and a number
document.write("<br>");

function not_a_number() {
    document.getElementById("nan").innerHTML = 0/0;
    document.getElementById("nan").innerHTML = isNaN (5);
}
 function infinity_func() {
    document.getElementById("infinity").innerHTML = 5E310;//displaing infinity 
 }

 function neg_infinity() {
    document.getElementById("neginfinity").innerHTML = -4E310;//displaying negative infinity 
 }
// using  operators (>,<, ==,===)
 document.write(20 < 30);
 document.write("<br>");

 document.write(20 > 30);
 document.write("<br>");

 console.log(0 > 2);


 document.write(20==20);
 document.write("<br>");

 document.write("SEI"==6 );
 document.write("<br>");

 x = "shonen"
 y = "shonen"
 document.write(x===y);//returning true by ensuring to match the data type and value.
 document.write("<br>");

 x = "shonen"
 y = 10
 document.write(x===y);//returning false by writing different dta type and different value.
 document.write("<br>");

 x = 20
 y = "20"
 document.write(x===y);//Returning false by writing a different data type but the same value for both.
 document.write("<br>");

 x = 20
 y = 21
 document.write(x===y);//Returning false by writing the same data type but a different value for both.
 document.write("<br>");

 document.write(50 > 10 && 20 >5);// AND operator 
 document.write("<br>");

 document.write(50 > 10 || 10 > 20);// OR operator displaying ture
 document.write("<br>");

 document.write(10 > 50 || 20 > 30);//OR operator displaying false
 document.write("<br>");

 function not_function() {
   document.getElementById("Not").innerHTML = !(5 > 10);// NOT operator 
 }