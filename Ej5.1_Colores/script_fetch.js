function paintSquare() {
    let heightMin = document.getElementById("heightMin").value;
    let heightMax = document.getElementById("heightMax").value;

    fetch("http://95.39.145.183/ejercicios/color.php?min=" + heightMin + "&max=" + heightMax)
    .then(response1 => response1.json())
    .then(function(response2) {
        if (response2.error) {
            document.getElementById("outputDiv").innerHTML = "<p>" + response2.error + "</p>";
            document.getElementById("outputDiv").style = "";
            document.querySelector("body").style.backgroundColor = "";
        } else {
            document.getElementById("outputDiv").innerHTML = "";
            document.getElementById("outputDiv").style.width = response2.width + "px";
            document.getElementById("outputDiv").style.height = response2.height + "px";
            document.querySelector("body").style.backgroundColor = response2.background;
            document.getElementById("outputDiv").style.backgroundColor = response2.color;
        }
    })
}
