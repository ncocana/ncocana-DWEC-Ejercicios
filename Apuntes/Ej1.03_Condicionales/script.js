// Condicionales

/*
if (condicion) {
    something
} else if (condicion) {
    something
} else {
    something
}
*/

// Operador ternario

/*
var a = (condicion)? (if true, return this) : (if false, return this);
*/
var a = (3=="hola")? "sí":"no"; // returns "no"


// Switch

/*
switch(expresión){
    case a : something; break;
    case b : something; break;
    case c : something; break;
    default: something;
}
*/

var b = 3;
var c = 5;
switch(b+c){
    case 2 : console.log("output: 2"); break;
    case 8 : console.log("output: 8"); break;
    case 6 : console.log("output: 6"); break;
    default: console.log("output: ERROR");
}
