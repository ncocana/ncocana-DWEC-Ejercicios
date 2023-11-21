// Eventos

/*
    Función que se ejecuta después de que el usuario realice una acción en concreto (click, doble click, scroll, etc).

    ¿Cómo?

    1 - HTML -> <p onaction=""></p>
                <p onclick="function()"></p>
    2 - Listener.
*/

function makeRed() {
    document.querySelector("p").style.color = "red";
}

// document.querySelector("p").addEventListener("click", makeRed);

var parrafos = document.querySelectorAll("p");

// If "var i=0", returns always "4" because it has already executed when you open the page;
// If "let i=0", works correctly and returns always the right index;
for (let i=0; i<parrafos.length; i++) {
    parrafos[i].addEventListener("click", function(){
        console.log(i);
        parrafos[i].style.color = "red";
        // for (var j=0; j<arguments.length; j++) {
        //     console.log(arguments[j]);
        // }
    });
}

// Returns PointerEvent.
// for (var i=0; i<parrafos.length; i++) {
//     parrafos[i].addEventListener("click", function(ev){
//         console.log(ev);
//     });
// }

// for (var i=0; i<parrafos.length; i++) {
//     parrafos[i].addEventListener("click", function(){
//         console.log(i);
//         // parrafos[i].style.color = "red";
//         for (var j=0; j<arguments.length; j++) {
//             console.log(arguments[j]);
//         }
//     });
// }
