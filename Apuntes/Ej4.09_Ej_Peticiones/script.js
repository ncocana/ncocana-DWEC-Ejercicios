/*
    10 peticiones a asincronos  pintando los resultados ordenados
    
    URL Cloud: http://34.147.66.205/ejercicios/usuarios.php
    Method: GET
    Params: num (numerico)
    Return: text
*/

function showPetitions3() {
    const promises = [];
    const url = "http://34.90.153.139/ejercicios/asincrono.php?num=";
    for (let i=1; i<=10; i++) {
        const promise = fetch(url + i).then((r) => r.text());
        promises.push(promise);
    }
    Promise.all(promises).then(arrayResponses => {
        arrayResponses.forEach(response => {
            printPetitions3(response);
        });
    });
}

function printPetitions3(response) {
    document.getElementById("petitions").innerHTML += "<p>" + response + "</p>";
}

// function showPetitions() {
//     const promises = [];
//     for (let i=1; i<=10; i++) {
//         promises[i] = fetch("http://34.90.153.139/ejercicios/asincrono.php?num=" + i).then((r) => r.text());
//         Promise.all(promises).then(function(arrayResponses){
//             const petition1 = arrayResponses[1];
//             const petition2 = arrayResponses[2];
//             const petition3 = arrayResponses[3];
//             printPetitions(petition1, petition2, petition3);
//         })
//     }
// }

// function printPetitions() {
//     if (arguments) {
//         for (let i=0; i<arguments.length; i++) {
//             document.getElementById("petitions").innerHTML += "<p>" + arguments[i] + "</p>";
//         }
//     }
// }

// function showPetitions2() {
//     for (let i=1; i<=10; i++) {
//         fetch("http://34.90.153.139/ejercicios/asincrono.php?num=" + i)
//         .then((r) => r.text())
//         .then((response) => {
//             document.getElementById("petitions").innerHTML += "<p>" + response + "</p>";
//         });
//     }
// }
