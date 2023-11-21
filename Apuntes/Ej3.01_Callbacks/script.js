// Funciones Callback

/*
    Es una función que, por parametro, se pasa la especificación.
*/

function hello() {
    return "Hello";
}

function bye() {
    return "Bye";
}

/*
    name: string
    type: funcion callback
*/
function greet(name, type) {
    return type() + ", " + name;
}

console.log(greet("Noa", hello));
console.log(greet("Noa", bye));
console.log(greet("Noa", function () {
    return "Da svidanya"
}));

setTimeout(function() {
    console.log(greet("Noa. Esto aparece tres segundos más tarde.", hello));
}, 3000)
