/*
    Async await

    ES8 --> ASYNC - AWAIT

    Tanto Async como Await son palabras reservadas para resolver promesas.
    Cuando una función devuelve una promesa la podemos esperar con "await".

    const petition = await fetch("...");

    PERO
    Si usamos "await", la función debe ser "async".
*/

function getColor() {
    fetch("http://34.90.153.139/ejercicios/color.php?min=30&max=50")
    .then(response1 => response1.json())
    .then(response2 => console.log("Respuesta 2: ", response2));
}

getColor();

async function getColorWithAsyncAwait() {
    const colorFetch = await fetch("http://34.90.153.139/ejercicios/color.php?min=30&max=50");
    const color = await colorFetch.json();
    console.log("Respuesta con Async Await: ", color);
}

getColorWithAsyncAwait();

console.log("Sigo la ejecución");
// console.log("Promesa sin Async Await", getColor());
// setTimeout(() => {
//     console.log("Promesa sin AsAw 3s después: ", getColor())
// }, 3000)

/*
    Consideraciones importantes cuando usamos ASYNC - AWAIT

    1 - Await espera a acaba la promesa para continuar con el código.
    2 - Resuelve el problema del scope dentro del fetch, porque la respuesta se encuentra en el mismo scope de visibilidad.
    3 - Cuidado con los bucles (tardarán más).
*/

// Las pinta a la vez.
function asincronoSinAsAw() {
    const promises = [];
    const url = "http://34.90.153.139/ejercicios/asincrono.php?num=";
    for (let i=1; i<=10; i++) {
        const promise = fetch(url + i).then((r) => r.text());
        promises.push(promise);
    }
    Promise.all(promises).then(arrayResponses => {
        arrayResponses.forEach(response => {
            document.getElementById("petitions").innerHTML += "<p>" + response + "</p>";
        });
    });
}

// Las pinta una a una.
function asincronoSinAsAw2() {
    for(let i = 1; i <= 10; i++) {
        fetch("http://34.90.153.139/ejercicios/asincrono.php?num=" + i)
        .then(r => r.text())
        .then(response => document.getElementById("petitions").innerHTML += "<p>" + response + "</p>");
    }
}

// Las pinta una a una.
async function asincronoConAsAw() {
    for(let i = 1; i <= 10; i++) {
        const numeroFetch = await fetch("http://34.90.153.139/ejercicios/asincrono.php?num=" + i);
        const numero = await numeroFetch.text();
        document.getElementById("petitions").innerHTML += "<p>" + numero + "</p>";
    }
}
// asincronoConAsAw();

// Las pinta a la vez.
async function asincronoConAsAw2() {
    const promises = [];

    for(let i = 1; i <= 10; i++) {
        const numeroFetch = fetch("http://34.90.153.139/ejercicios/asincrono.php?num=" + i);
        promises.push(numeroFetch);
    }

    // Promise.all(promises).then(async responses => {
    //     for(const response of responses) {
    //         const numRes = await response.text();
    //         document.getElementById("petitions").innerHTML += "<p>" + numRes + "</p>";
    //     }
    // })

    const responses = await Promise.all(promises);
    for(const response of responses) {
        const numRes = await response.text();
        document.getElementById("petitions").innerHTML += "<p>" + numRes + "</p>";
    }
}
