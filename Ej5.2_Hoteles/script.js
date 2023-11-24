function getHoteles() {
    const HOTELES_PROMISE = fetch("http://34.90.153.139/ejercicios/hoteles.php").then(r => r.json());
    // console.log(HOTELES_PROMISE);
    Promise.resolve(HOTELES_PROMISE).then(hoteles => {
        for (let hotel of hoteles) {
            document.getElementById("outputHoteles").innerHTML += "<button type='button' id='" + hotel.id + "' onclick='getInfoHotel(this.id)'>" + hotel.nombre + "</button>";
            // console.log(hotel);
        }
    })
}

function getInfoHotel(idHotel) {
    const HOTEL_INFO_PROMISE = fetch("http://34.90.153.139/ejercicios/hotelinfo.php", {
        method:"POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "id=" + idHotel
    }).then(r => r.json());
    // console.log(HOTEL_INFO_PROMISE);
    Promise.resolve(HOTEL_INFO_PROMISE).then(hotelInfo => {
        console.log(hotelInfo);
        document.getElementById("outputInfoHotel").innerHTML = "<b>Nombre:</b> " + hotelInfo.nombre +
                    "<br><b>Tipo de hotel: </b>" + hotelInfo.tipo +
                    "<br><b>Estrellas: </b>" + hotelInfo.estrellas +
                    "<br><b>Localidad: </b>" + hotelInfo.localidad +
                    "<br><b>Direccion: </b>" + hotelInfo.direccion +
                    "<br><b>¿Tiene parking?: </b>" + (hotelInfo.tiene_parking? "Sí" : "No") +
                    "<br><b>Número de plantas: </b>" + hotelInfo.num_plantas +
                    "<br><b>Número de habitaciones: </b>" + hotelInfo.num_habitaciones +
                    "<br><b>Servicios: </b>" + formatArrayToString(hotelInfo.servicios);
    })
}

function formatArrayToString(array) {
    let string = "";
    for(let i = 0; i < array.length; i++) {
        string += array[i];
        if (i < array.length - 1) {
            string += ", ";
        }
    }
    return string;
}
