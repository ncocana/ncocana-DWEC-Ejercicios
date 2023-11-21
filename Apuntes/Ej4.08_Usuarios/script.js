/*
    Crear una tabla en html de usuarios recuperando los datos de:
    URL: http://95.39.145.183/ejercicios/usuarios.php
    URL Cloud: http://34.147.66.205/ejercicios/usuarios.php
    Method: GET
    Responde: JSON
    Tabla: Username, Name, Surname, Sex
*/
function getUsers() {
    // Remove table if it exists.
    var body = document.querySelector("body");
    body.removeChild(body.lastChild);

    // Table
    var table = document.createElement("table");

    // Header
    var trHeader = document.createElement("tr");
    table.appendChild(trHeader);

    var thUsername = document.createElement("th");
    thUsername.innerHTML = "Username";
    var thName = document.createElement("th");
    thName.innerHTML = "Name";
    var thSurname = document.createElement("th");
    thSurname.innerHTML = "Surname";
    var thSex = document.createElement("th");
    thSex.innerHTML = "Sex";

    trHeader.appendChild(thUsername);
    trHeader.appendChild(thName);
    trHeader.appendChild(thSurname);
    trHeader.appendChild(thSex);

    fetch("http://95.39.145.183/ejercicios/usuarios.php")
    .then(response1 => response1.json())
    .then(function(response2) {
        for (var i=0; i < response2.length; i++) {
            var trContent = document.createElement("tr");
            
            var tdUsername = document.createElement("td");
            tdUsername.innerHTML = response2[i].username;
            var tdName = document.createElement("td");
            tdName.innerHTML = response2[i].name;
            var tdSurname = document.createElement("td");
            tdSurname.innerHTML = response2[i].surname;
            var tdSex = document.createElement("td");
            tdSex.innerHTML = response2[i].sex;

            trContent.appendChild(tdUsername);
            trContent.appendChild(tdName);
            trContent.appendChild(tdSurname);
            trContent.appendChild(tdSex);

            table.appendChild(trContent);
            console.log(response2[i].username);
        }
    })

    fetch("http://95.39.145.183/ejercicios/color.php?min=10&max=50")
    .then(response1 => response1.json())
    .then(function(response2) {
        table.style.color = response2.color;
        table.style.backgroundColor = response2.background;
        table.style.fontSize = response2.width + "px";
    })
    
    table.className = "center";
    body.appendChild(table);
}

function getUsers2() {
    const colorPromise = fetch("http://95.39.145.183/ejercicios/color.php?min=10&max=50").then((r) => r.json());
    const usersPromise = fetch("http://95.39.145.183/ejercicios/usuarios.php").then((r) => r.json());
    Promise.all([colorPromise, usersPromise]). then(function(arrayResponses){
        const color = arrayResponses[0];
        const user = arrayResponses[1];
        showTable(color, user);
    });
}

function showTable(colorResponse, userResponse) {
    // Remove table if it exists.
    var body = document.querySelector("body");
    body.removeChild(body.lastChild);

    // Table
    var table = document.createElement("table");

    // Header
    var trHeader = document.createElement("tr");
    table.appendChild(trHeader);

    var thUsername = document.createElement("th");
    thUsername.innerHTML = "Username";
    var thName = document.createElement("th");
    thName.innerHTML = "Name";
    var thSurname = document.createElement("th");
    thSurname.innerHTML = "Surname";
    var thSex = document.createElement("th");
    thSex.innerHTML = "Sex";

    trHeader.appendChild(thUsername);
    trHeader.appendChild(thName);
    trHeader.appendChild(thSurname);
    trHeader.appendChild(thSex);

    for (var i=0; i < userResponse.length; i++) {
        var trContent = document.createElement("tr");
        
        var tdUsername = document.createElement("td");
        tdUsername.innerHTML = userResponse[i].username;
        var tdName = document.createElement("td");
        tdName.innerHTML = userResponse[i].name;
        var tdSurname = document.createElement("td");
        tdSurname.innerHTML = userResponse[i].surname;
        var tdSex = document.createElement("td");
        tdSex.innerHTML = userResponse[i].sex;

        trContent.appendChild(tdUsername);
        trContent.appendChild(tdName);
        trContent.appendChild(tdSurname);
        trContent.appendChild(tdSex);

        table.appendChild(trContent);
        console.log(userResponse[i].username);
    }

    table.style.color = colorResponse.color;
    table.style.backgroundColor = colorResponse.background;
    table.style.fontSize = colorResponse.width + "px";

    table.className = "center";
    body.appendChild(table);
}
/*
    10 peticiones a asincronos  pintando los resultados ordenados
    
    URL Cloud: http://34.147.66.205/ejercicios/usuarios.php
    Method: GET
    Params: num (numerico)
    Return: text
*/