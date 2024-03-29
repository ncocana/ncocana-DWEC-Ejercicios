const MIN_NUMBER = 1;
const WINNER_NUMBER = 1;

function Dice(numCaras) {
    this.numCaras = numCaras;
}

function tirarDado(number) {
    let dado = new Dice(number);
    let resultDado = Math.floor(Math.random() * (dado.numCaras - MIN_NUMBER + 1) + MIN_NUMBER);

    return resultDado;
}

function play() {
    let resultDadoCaraCruz = tirarDado(2);
    let resultDadoParchis = tirarDado(6);
    let resultDadoDnd = tirarDado(12);

    document.getElementById("outputDiv").innerHTML = "<table>" +
            "<tr>" +
                "<td>Dado Cruz o Cara</td>" +
                "<td>Dado Parchis</td>" +
                "<td>Dado DnD</td>" +
            "</tr>" +
            "<tr>" +
                '<td id="resultDadoCaraCruz"></td>' +
                '<td id="resultDadoParchis"></td>' +
                '<td id="resultDadoDnd"></td>' +
            "</tr>" +
        "</table>" + 
        '<p id="outputText"></p>';
    document.getElementById("resultDadoCaraCruz").innerHTML = resultDadoCaraCruz;
    document.getElementById("resultDadoParchis").innerHTML = resultDadoParchis;
    document.getElementById("resultDadoDnd").innerHTML = resultDadoDnd;

    if (resultDadoCaraCruz === WINNER_NUMBER || resultDadoParchis === WINNER_NUMBER || resultDadoDnd === WINNER_NUMBER) {
        document.getElementById("outputText").innerHTML = "¡Enhorabuena! Has ganado.";
    } else {
        document.getElementById("outputText").innerHTML = "Oh no... Has perdido.";
    }
}

/*
    Crear un juego de dados. El dado debe aceptar un número variabe de caras.
    Tres dados:
    Cara cruz - 2 caras
    Parchis - 6 caras
    Dado DnD = 12 caras

    - Crear un objeto dado con una propiedad llamada "numCaras" y una función llamada "tirarDado" que sacará un número aleatorio entre 1 y numCaras.
    - Usuario siempre juega con 1. Si sale 1 gana, sino pierde.
*/
