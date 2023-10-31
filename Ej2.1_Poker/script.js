const CARDS = [
    'ace_of_diamonds', 'ace_of_hearts', 'ace_of_spades', 'ace_of_clubs',
    '2_of_diamonds', '2_of_hearts', '2_of_spades', '2_of_clubs',
    '3_of_diamonds', '3_of_hearts', '3_of_spades', '3_of_clubs',
    '4_of_diamonds', '4_of_hearts', '4_of_spades', '4_of_clubs',
    '5_of_diamonds', '5_of_hearts', '5_of_spades', '5_of_clubs',
    '6_of_diamonds', '6_of_hearts', '6_of_spades', '6_of_clubs',
    '7_of_diamonds', '7_of_hearts', '7_of_spades', '7_of_clubs',
    '8_of_diamonds', '8_of_hearts', '8_of_spades', '8_of_clubs',
    '9_of_diamonds', '9_of_hearts', '9_of_spades', '9_of_clubs',
    '10_of_diamonds', '10_of_hearts', '10_of_spades', '10_of_clubs',
    'jack_of_diamonds', 'jack_of_hearts', 'jack_of_spades', 'jack_of_clubs',
    'queen_of_diamonds', 'queen_of_hearts', 'queen_of_spades', 'queen_of_clubs',
    'king_of_diamonds', 'king_of_hearts', 'king_of_spades', 'king_of_clubs'
];
let myWindow;

// Swaps each card with a random card in the deck.
function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// Displays the image of the drawed cards.
function showHand(hand, document) {
    let cardElements = document.querySelectorAll('.card');
    for (let i = 0; i < cardElements.length; i++) {
        let img = document.createElement("img");
        cardElements[i].innerHTML = "";
        img.src = "./img/" + hand[i] + ".png";
        cardElements[i].appendChild(img);
        // console.log(i + " - " + hand[i] + " - " + cardElements[i].innerHTML);
    }
}

function checkOnePair(hand, document) {
    let cardValues = [];
    let countsValues = {};

    for (let card of hand) {
        // Gets a hand of 5 cards and saves their values in "cardValues".
        let value = card.split('_')[0];
        cardValues.push(value);
        
        // If the value is in "counts", sum +1 to its value.
        // Otherwise, assign 1 as its initial value.
        if (countsValues[value]) {
            countsValues[value]++;
        } else {
            countsValues[value] = 1;
        }
    }

    for (let value in countsValues) {
        if (countsValues[value] === 2) {
            document.getElementById('result').textContent = '¡Tienes una Pareja! ¡Has ganado!';
            return;
        }
    }

    document.getElementById('result').textContent = 'No hay ninguna mano ganadora... Intentalo de nuevo.';
}

function play(document = window.document) {
    let hand = shuffleDeck(CARDS).slice(0, 5);
    showHand(hand, document);
    checkOnePair(hand, document);
}

function openWindow() {
    myWindow = window.open("solution.html", "", "width=800,height=300");

    myWindow.onload = function () {
        play(myWindow.document);
    };
}

function closeEmergentWindow() {
    if (myWindow !== undefined) {
        myWindow.close();
    }
}

// Does not work due to security restrictions on the browser, unless there's no historial.
function closePrincipalWindow() {
    window.close();
}
