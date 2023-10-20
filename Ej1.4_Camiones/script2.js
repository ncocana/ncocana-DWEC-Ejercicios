const NUM_WEEKS = 52;
let chofers = ["Pep", "Juan", "Tomeu"];
let camiones = ["Iveco", "Volvo", "Man", "Scania"];

function printTable() {

    // Add another entry to the "chofers" array to match the "camiones" array length.
    // let diff = Math.abs(camiones.length - chofers.length);

    // for (var i = 0; i <= diff; i++) {
    //     if (chofers.length < camiones.length) {
    //         chofers.push("(No one)");
    //     }
    // }

    // Starts to form the table structure.
    let table;

    table = "<table class='center'>" +
        "<tr>" +
        "<th>Semana</th>";

    // Prints the headers for "camiones" values.
    for (var i = 0; i < chofers.length; i++) {
        table += printChofer(i);
    }

    table += "</tr>";

    // Prints the content of the table. First the week numbers, then the trucks.
    for (var i = 1; i <= NUM_WEEKS; i++) {
        table += '<tr>';
        table += printWeek(i);
        // console.log("semana " + i);

        for (var j = 0; j < chofers.length; j++) {
            let camionIndex = (i - 1 + j) % camiones.length;
            table += printCamion(camionIndex);
            // console.log("camion " + j + " de " + chofers.length + ". chofer " + choferIndex);
        }

        table += '</tr>';
    }

    table += "</table>";

    // Inserts all the table in the div.
    document.getElementById("outputDiv").innerHTML = table;
}

function printCamion(camionIndex) {
    return '<td>' + camiones[camionIndex] + '</td>';
}

function printWeek(numWeek) {
    return '<td>' + numWeek + '</td>';
}

function printChofer(choferIndex) {
    return '<th>' + chofers[choferIndex] + '</th>';
}

/*
    Empresa con 3 choferes de camión.
    var chofer = [Pep, Juan, Tomeu]
    var camion = [camion1, camion2, camion3, camion4] (iveco, volvo, man, scania)
    Cada semana (52 semanas por año), un chofer conduzce un camion (pep camion1, juan camion2, tomeu camion3, nadie camion4; nadie camion1, pep camion2, juan camion3, tomeu camion4; etc). Siempre un camion debe descansar a la semana; debe ser un camion distinto.
*/
