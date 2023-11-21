// DOM (Document Object Model)

function Marca(nombre) {
    this.nombre = nombre;
}

function Modelo(marca, nombre) {
    this.marca = marca;
    this.nombre = nombre;
}

var ford = new Marca("Ford");
var toyota = new Marca("Toyota");
var mercedes = new Marca("Mercedes");

var mustang = new Modelo(ford, "Mustang");
var corolla = new Modelo(toyota, "Corolla");
var yaris = new Modelo(toyota, "Yaris");
var a45 = new Modelo(mercedes, "A45");

var modelos = [];
modelos.push(mustang);
modelos.push(corolla);
modelos.push(yaris);
modelos.push(a45);

// document.querySelector("body").innerHTML = '<p>' + yaris.marca.nombre + ' ' + yaris.nombre + '</p>';

// Table
var table = document.createElement("table");

// Header
var trHeader = document.createElement("tr");
table.appendChild(trHeader);

var thMarca = document.createElement("th");
thMarca.innerHTML = "Marca";

var thModelo = document.createElement("th");
thModelo.innerHTML = "Modelo";
trHeader.appendChild(thMarca);
trHeader.appendChild(thModelo);

var body = document.querySelector("body");
body.appendChild(table);

for (var i=0; i < modelos.length; i++) {
    var trInfo = document.createElement("tr");
    
    var tdMarca = document.createElement("td");
    tdMarca.innerHTML = modelos[i].marca.nombre;
    var tdModelo = document.createElement("td");
    tdModelo.innerHTML = modelos[i].nombre;

    trInfo.appendChild(tdMarca);
    trInfo.appendChild(tdModelo);

    table.appendChild(trInfo);

    // Quitar pares.
    if (i % 2 === 0) {
        table.removeChild(trInfo);
    }
}

// DOM CSS

// 1 - Cambiar la palabra hola por adios y ponerla en azul.
document.querySelector("p#primero").innerHTML = "Adios";
document.querySelector("#primero").style.color = "blue";

// 2 - Pintar la clase saludo de rojo y poner background-color amarillo.
var saludo = document.querySelectorAll(".saludo");
for (let i = 0; i < saludo.length; i++) {
    saludo[i].style.color = "red";
    saludo[i].style.backgroundColor = "yellow";
    /*
        CSS -> background-color (Kebab case)
        JS -> backgroundColor (Camel case)
    */
}

// 3 - Añadir (concatenar) a la palabra "Tal" un "?" al final.
document.querySelector("p:nth-of-type(3)").innerHTML += "?";

// 4 - Añadir foto delante de Adios y ponerle un tamaño de 100px de ancho.
var img = document.createElement("img");
img.src = "./img/favicon.png";
img.style.width = "100px";
document.querySelector("p#primero").insertAdjacentElement("afterbegin", img);
