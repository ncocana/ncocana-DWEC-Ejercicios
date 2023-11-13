function paintSquare() {
    let heightMin = document.getElementById("heightMin").value;
    let heightMax = document.getElementById("heightMax").value;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            // console.log(xhttp.responseText);
            // console.log(JSON.parse(xhttp.responseText));
            let response = JSON.parse(xhttp.responseText);
            if (response.error) {
                document.getElementById("outputDiv").innerHTML = "<p>" + response.error + "</p>";
                document.getElementById("outputDiv").style = "";
                document.querySelector("body").style.backgroundColor = "";
            } else {
                document.getElementById("outputDiv").innerHTML = "";
                document.getElementById("outputDiv").style.width = response.width + "px";
                document.getElementById("outputDiv").style.height = response.height + "px";
                document.querySelector("body").style.backgroundColor = response.background;
                document.getElementById("outputDiv").style.backgroundColor = response.color;
            }
        }
    };
    xhttp.open("GET", "http://95.39.145.183/ejercicios/color.php?min=" + heightMin + "&max=" + heightMax, true);
    xhttp.send();
}
