// BOM (Browser Object Model)

/*
    BOM -> window
*/

// alert("Adios");
// window.alert("hola");

function historial() {
    // window.history.go(-2);
    history.go(-2); 
}

let myWindow;

// Abrir nueva ventana con la web del Borja Moll tamaño 250px x 300px
function openWindow() {
    myWindow = window.open("https://www.cifpfbmoll.eu/", "", "width=250,height=300");
}

// Cerrar ventana
function closeWindow() {
    if (myWindow !== undefined) {
        myWindow.close();
    }
}

// Refrescar la página.
function refreshPage() {
    location.reload();
}

// Pedir al usuario el nombre y saludarlo.
function askName() {
    var name = prompt("¿Cuál es tu nombre?");
    alert("¡Hola, " + name + "!");
}