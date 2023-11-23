let cards = [
    "2_of_clubs.png",
    "2_of_diamonds.png",
    "2_of_hearts.png",
    "2_of_spades.png",
    "3_of_clubs.png",
    "3_of_diamonds.png",
    "3_of_hearts.png",
    "3_of_spades.png",
    "4_of_clubs.png",
    "4_of_diamonds.png",
    "4_of_hearts.png",
    "4_of_spades.png",
    "5_of_clubs.png",
    "5_of_diamonds.png",
    "5_of_hearts.png",
    "5_of_spades.png",
    "6_of_clubs.png",
    "6_of_diamonds.png",
    "6_of_hearts.png",
    "6_of_spades.png",
    "7_of_clubs.png",
    "7_of_diamonds.png",
    "7_of_hearts.png",
    "7_of_spades.png",
    "8_of_clubs.png",
    "8_of_diamonds.png",
    "8_of_hearts.png",
    "8_of_spades.png",
    "9_of_clubs.png",
    "9_of_diamonds.png",
    "9_of_hearts.png",
    "9_of_spades.png",
    "10_of_clubs.png",
    "10_of_diamonds.png",
    "10_of_hearts.png",
    "10_of_spades.png",
    "ace_of_clubs.png",
    "ace_of_diamonds.png",
    "ace_of_hearts.png",
    "ace_of_spades.png",
    "ace_of_spades2.png",
    "black_joker.png",
    "jack_of_clubs.png",
    "jack_of_clubs2.png",
    "jack_of_diamonds.png",
    "jack_of_diamonds2.png",
    "jack_of_hearts.png",
    "jack_of_hearts2.png",
    "jack_of_spades.png",
    "jack_of_spades2.png",
    "king_of_clubs.png",
    "king_of_clubs2.png",
    "king_of_diamonds.png",
    "king_of_diamonds2.png",
    "king_of_hearts.png",
    "king_of_hearts2.png",
    "king_of_spades.png",
    "king_of_spades2.png",
    "queen_of_clubs.png",
    "queen_of_clubs2.png",
    "queen_of_diamonds.png",
    "queen_of_diamonds2.png",
    "queen_of_hearts.png",
    "queen_of_hearts2.png",
    "queen_of_spades.png",
    "queen_of_spades2.png",
    "red_joker.png",
];

/*
    Dado este array crea 5 botones que llamen (onclick) cada uno 
    a una función que haga lo siguiente:

    1. Pinten el nombre de las cartas que sean king.
    2. Pinten el nombre de las cartas que sean king o queen.
    3. Pinten el nombre de las cartas que sean números.
    4. Pinten el nombre de las cartas que NO sean jack o queen.
    5. Pinten el nombre de las cartas que NO sean números.

    Ahora debes eliminar el onclick del boton y añadir un event listener 
    al boton para que, cuando se haga click se llame cada uno a su función
*/

// 1. Pinten el nombre de las cartas que sean king.
function showKings() {
    let kings = [];
    for (let card of cards) {
        let value = card.split('_')[0];
        if (value == "king") {
            kings.push(card);
        }
    }
    document.getElementById("output").innerHTML = "";
    for (let king of kings) {
        document.getElementById("output").innerHTML += "<p>" + king + "</p>";
    }
}

// 2. Pinten el nombre de las cartas que sean king o queen.
function showKingsOrQueens() {
    let kingsQueens = [];
    for (let card of cards) {
        let value = card.split('_')[0];
        if (value == "king" || value == "queen") {
            kingsQueens.push(card);
        }
    }
    document.getElementById("output").innerHTML = "";
    for (let kingQueen of kingsQueens) {
        document.getElementById("output").innerHTML += "<p>" + kingQueen + "</p>";
    }
}

// 3. Pinten el nombre de las cartas que sean números.
function showNumbers() {
    let numbers = [];
    for (let card of cards) {
        let value = card.split('_')[0];
        if (!isNaN(value)) {
            numbers.push(card);
        }
    }
    document.getElementById("output").innerHTML = "";
    for (let number of numbers) {
        document.getElementById("output").innerHTML += "<p>" + number + "</p>";
    }
}

// 4. Pinten el nombre de las cartas que NO sean jack o queen.
function showNoJacksOrQueens() {
    let NoJacksOrQueens = [];
    for (let card of cards) {
        let value = card.split('_')[0];
        if (value != "jack" && value != "queen") {
            NoJacksOrQueens.push(card);
        }
    }
    document.getElementById("output").innerHTML = "";
    for (let NoJackOrQueen of NoJacksOrQueens) {
        document.getElementById("output").innerHTML += "<p>" + NoJackOrQueen + "</p>";
    }
}

// 5. Pinten el nombre de las cartas que NO sean números.
function showNoNumbers() {
    let noNumbers = [];
    for (let card of cards) {
        let value = card.split('_')[0];
        if (isNaN(value)) {
            noNumbers.push(card);
        }
    }
    document.getElementById("output").innerHTML = "";
    for (let noNumber of noNumbers) {
        document.getElementById("output").innerHTML += "<p>" + noNumber + "</p>";
    }
}

// Ahora debes eliminar el onclick del boton y añadir un event listener al boton
// para que, cuando se haga click, cada uno llame a su función.
let kingsButton = document.getElementById("kings");
let kingsOrQueensButton = document.getElementById("kingsOrQueens");
let numbersButton = document.getElementById("numbers");
let jacksOrQueensButton = document.getElementById("jacksOrQueens");
let noNumbersButton = document.getElementById("noNumbers");

kingsButton.addEventListener("click", showKings);
kingsOrQueensButton.addEventListener("click", showKingsOrQueens);
numbersButton.addEventListener("click", showNumbers);
jacksOrQueensButton.addEventListener("click", showNoJacksOrQueens);
noNumbersButton.addEventListener("click", showNoNumbers);
