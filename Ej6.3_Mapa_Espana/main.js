//aquí el código JS
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, areaId) {
    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");
    var img = document.getElementById(data);
    var area = document.getElementById(areaId);

    if (img.getAttribute("alt") == area.getAttribute("title")) {
        img.style.position = 'absolute';
        img.style.left = area.getAttribute("data-left");
        img.style.top = area.getAttribute("data-top");

        ev.target.appendChild(img);
    } else {
        alert("La provincia no encaja en esta area.");
    }
}
