// ESX

/*
    ES5 --> 2009
    ES6 --> 2015 (variables, modulos, apis, scopes, promises)
    ES14 --> 2023
*/

/*
    Variables

    ES5 --> var
    ES6 --> let, const

    let --> Declarar variables que se pueden sobreescribir.
    const --> Declarar constantes o variable que no se pueden sobreescribir.
*/

// let s = 4;
// s = 3;

// const y = 5;
// y = 6 // Error

// const z = [];
// z.push("Hola");
// z.push("Adios");
// z = ["ABC"]; // Error

// const pep = {
//     name: "Pep",
//     surname: "Toni",
// }

// pep.nom = "Joan";
// pep = {name: "Joan"}; // Error

/*
    Usar const:
        - Más rápido que let.
        - Te aseguras de que el tipo no cambie.
        - Evita problemas de inicialización.
*/

// const a; // Error
// const a = 3;

/*
    Diferencia var y let/const
    
    La diferencia principal es el Scope.

    var --> ambito de función. Si no declaras la variable, ocurre "Hoisting".
    let/const --> ambito de bloque.
*/

function vanilla() {
    for(var i = 0; i<5; i++) {
        var j = i+3;
    }
    console.log("final i", i, "final j", j);
}

// vanilla();

function es6() {
    for(let i = 0; i<5; i++) {
        let j = i+3;
        console.log("i", i, "j", j);
    }
    // console.log("final i", i, "final j", j);
}

// es6();

// Redeclarar variables
function redeclare() {
    var x = 3;
    var x = 4;
    console.log(x);
}

// redeclare();

// Hoisting
function hoisting() {
    var h1 = "no hoisted";
    h2 = "hoisted"; // Scope in all the program.
    console.log('hoist', h1, h2);

}
function hoisting2() {
    console.log('hoist2', h2);

}
hoisting();
hoisting2();

/*
    Objeto "Matematicas"
    Propiedad "pi" Math.PI
    Función "suma()" que admita "n" valores como parametros (suma(n)).

    function suma() {
        arguments[0] == 3;
        arguments[1] == 2;
        arguments[2] == 4;
        arguments[3] == 5;
    }
    suma(3, 2, 4, 5);

    Funcion "multiplica()" que tiene que admitir "n" valores como parametros. La función debe ser añadida después de declarar el objeto.

    Resolver las operaciones:
        - 4+5+PI+3*4*7
        - 4*PI*8*(12+4+7)
*/