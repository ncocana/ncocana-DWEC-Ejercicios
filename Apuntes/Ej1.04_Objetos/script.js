// Objetos

var noa = {
    name: 'noa',
    surname: 'abc',
    fullname: function() {
        return this.name + this.surname;
    },
}

// Objecto con constructor

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.fullname = function() {
        return this.name + ' ' + this.surname;
    };
}

var acheron = new Person('Acheron', 'Eris');
acheron.hasMeaning = true; // Añade una nueva propiedad que no existe en el objeto junto a su valor.

console.log(acheron);
console.log(acheron.fullname());

/*
    Los objetos en JavaScript son tipo Prototype. Esto significa que se define como un tipo de objeto al que se le puede añadir nuevas propiedades.
*/

/*
    Crear un juego de dados. El dado debe aceptar un número variabe de caras.
    Tres dados:
    Cara cruz - 2 caras
    Parchis - 6 caras
    Dado DnD = 12 caras

    - Crear un objeto dado con una propiedad llamada "numCaras" y una función llamada "tirarDado" que sacará un número aleatorio entre 1 y numCaras.
    - Usuario siempre juega con 1. Si sale 1 gana, sino pierde.
*/