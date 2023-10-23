// Family members.
let familySastreMembers = ["Padre", "Madre", "Hijo", "Hija"];
let familyTorrensMembers = ["Padre", "Madre", "Hijo", "Hija"];
let familyMollMembers = ["Padre", "Madre", "Hijo", "Hija grande", "Hija pequeña"];

// Tasks.
let familySastreTasks = ["Poner la lavadora", "Limpiar la cocina", "Limpiar el baño"];
let familyTorrensTasks = ["Planchar", "Limpiar el baño"];
let familyMollTasks = ["Poner la lavadora", "Limpiar la cocina", "Limpiar el comedor", "Planchar", "Limpiar el baño"];

function FamilyTasks(members, tasks, numWeeks) {
    this.members = members;
    this.numMembers = members.length;
    this.tasks = tasks;
    this.numTasks = tasks.length;
    this.numWeeks = numWeeks;
}

// Creates the objects.
let familySastre = new FamilyTasks(familySastreMembers, familySastreTasks, 52);
let familyTorrens = new FamilyTasks(familyTorrensMembers, familyTorrensTasks, 4);
let familyMoll = new FamilyTasks(familyMollMembers, familyMollTasks, 12);

// Defines the variables beforehand to prevent them from returning null.
let familySelected;
let family;

function printTable() {

    // Retrieves the selected family value from the select menu inside the function.
    familySelected = document.getElementById("family").value;

    // Checks which family is selected and uses the corresponding family object.
    if (familySelected === "familySastre") {
        family = familySastre;
    } else if (familySelected === "familyTorrens") {
        family = familyTorrens;
    } else if (familySelected === "familyMoll") {
        family = familyMoll;
    }

    // Starts to form the table structure.
    let table;

    table = "<table class='center'>" +
        "<tr>" +
        "<th>Semana</th>";

    // Prints the headers for the tasks values.
    for (var i = 0; i < family.numTasks; i++) {
        table += printTasks(i);
    }

    table += "</tr>";

    // Prints the content of the table. First the week numbers, then the family members.
    for (var i = 1; i <= family.numWeeks; i++) {
        table += '<tr>';
        table += printWeeks(i);
        // console.log("semana " + i);

        for (var j = 0; j < family.numTasks; j++) {
            let index = (i - 1 + j) % family.numMembers;
            table += printMembers(index);
            // console.log("tarea " + j + " de " + family.numTasks + ". miembro " + index);
        }

        table += '</tr>';
    }

    table += "</table>";

    // Inserts all the table in the div.
    document.getElementById("outputDiv").innerHTML = table;
}

function printTasks(index) {
    return '<th>' + family.tasks[index] + '</th>';
}

function printWeeks(numWeeks) {
    return '<td>' + numWeeks + '</td>';
}

function printMembers(index) {
    return '<td>' + family.members[index] + '</td>';
}
