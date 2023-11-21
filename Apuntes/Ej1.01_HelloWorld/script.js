function writeHelloWorld() {
    document.getElementById("output").innerHTML = "Hello World";
}

function deleteHelloWorld() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "";
}

function changeColor() {
    document.getElementById("output").style.color = "blue";
}

function deleteColor() {
    document.getElementById("output").style.color = "";
}

// Variables
/*
Tipos:
    - null
        var a = null;
    - undefined
        var b;
    - boolean
        var c = true;
        var c = false;
    - number (int, float)
        var d = 4;
        var d = 4.34;
    - string
        var e = "string";
    - objeto (array, etc)
        var f = {
            name : 'texto',
            surname : 'texto',
            boolean : true
        };
        var f = [contenido, ...];
*/

// var f = {
//     name : 'texto',
//     surname : 'texto',
//     fullname : function () {return this.name + " " + this.surname}, // returns null (?) unless you do f.fullname()
// };
