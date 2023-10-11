const MIN_NUMBER = 1;
const MAX_NUMBER = 2;
var output;

function play() {
    output = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1) + MIN_NUMBER)

    if (output == 1) {
        document.getElementById("output").innerHTML = "Ha salido cara.<br>¡Has ganado!"
    } else if (output == 2) {
        document.getElementById("output").innerHTML = "Ha salido cruz.<br>¡Has perdido!"
    }
}

/*
INSTRUCCIONES:
Crear el juego cara o cruz.
Nosotros siempre seremos cara, que será el número 1.
El programa tiene que decidir un número aleatorio entre 1 y 2.
Si sale 1, ganamos. Si sale 2, perdemos.
*/
