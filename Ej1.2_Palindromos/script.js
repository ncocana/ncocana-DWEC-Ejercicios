function checkPalindrome() {
    let inputText = normalizeString(document.getElementById("inputText").value);
    let textReversed = inputText.split('').reverse().join('');
    
    if (inputText == textReversed) {
        document.getElementById("output").innerHTML = "Es un palíndromo.";
    } else {
        document.getElementById("output").innerHTML = "No es un palíndromo.";
    }

}

// Converts to lowercase and removes white spaces, and accents from a given string.
function normalizeString(input) {
    return input.toLowerCase().replace(" ", "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
