/*
    FUNCIONES AVANZADAS
*/

function qa() {
    // arguments <-- numero de argumentos
    // son valores
    // Clousures <-- ES6
}

// CLOUSURES

function clousure(a, b) {
    function esnclousure1(x, y) {
        return x + y;
    }

    function esnclousure2(x, y) {
        return x * y;
    }

    return esnclousure1(a, b) - esnclousure2(a, b);
}

console.log(clousure(3,4));


// ARROW FUNCTIONS
// Los arguments[i] no funcionan.

// Old way
setTimeout(function() {
    clousure(3,4)
}, 1000);

// New way
setTimeout(() => {
    clousure(3,4)
}, 1000);


// Callback

function suma(a,b){
    return a + b;
}

function multiplicar(a,b){
    return a * b;
}

function operacion(a,b,cb){
    return cb(a,b);
}

console.log(operacion(3, 4, suma));
console.log(operacion(3, 4, multiplicar));
console.log(operacion(3, 4, (a,b) => {
    return a - b;
}));

// Si no tiene {}, se considera que hace un return.
console.log(operacion(3, 4, (a,b) => a - b));
console.log(operacion(3, 4, a => a - a));
