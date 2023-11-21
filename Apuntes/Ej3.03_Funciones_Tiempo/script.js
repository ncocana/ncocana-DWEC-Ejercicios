// Funciones de tiempo

/*
    setTimeout(function, milisegundos);
    Ejecuta una función después de X milisegundos.

    setInterval(function, milisegundos);
    Espera X milisegundos y ejecuta la función periodicamente.

    clearInterval(interval);
    Para la ejecución del intervalo pasado por paramétro.
*/

var chrono;
var chronoDiff;
var interval;
var result;

function play() {
    if (!chrono) {
        chrono = Date.now();
    }

    interval = setInterval(function() {
        chronoDiff = Date.now();
        var diff = chronoDiff - chrono;
        var dateDiff = new Date(diff);
        var hour = dateDiff.getUTCHours();
        var min = dateDiff.getUTCMinutes();
        var sec = dateDiff.getUTCSeconds();
        var ms = dateDiff.getUTCMilliseconds();

        if(hour < 10){
            hour = '0' + hour;
        }
        if(min < 10){
            min = '0' + min;
        }
        if(sec < 10){
            sec = '0' + sec;
        }
        
        result = hour + ':' + min + ':' + sec + ':' + ms;
        document.querySelector("#chrono").innerHTML = result;
    }, 100);
}

function pause() {
    clearInterval(interval);
}

function replay() {
    clearInterval(interval);
    chrono = "";
    play();
}

function stop() {
    clearInterval(interval);
    chrono = "";
    document.querySelector("#chrono").innerHTML = "00:00:00";
}
