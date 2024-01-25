import { User } from "../model/User.js";

async function getTransport(id) {
    const transportPromise = await fetch(`http://34.90.153.139/ejercicios/transporte.php?id=${id}`).then((r) => r.json());
    return transportPromise;
}

export async function getUsers2() {
    let usersArray = [];

    const usersPromise = await fetch("http://34.90.153.139/ejercicios/usuarios.php").then((r) => r.json());
    // Promise.resolve(usersPromise).then(async function (arrayResponses) {
    //     for (const response of arrayResponses) {
    //         const transport = await getTransport(response.transport);
    //         const user = new User(response.iduser, response.username, response.name, response.surname, transport);
    //         usersArray.push(user);
    //     }
    //     // const promises = arrayResponses.map(async (response) => {
    //     //     const transport = await getTransport(response.transport);
    //     //     const user = new User(response.iduser, response.username, response.name, response.surname);
    //     //     usersArray.push(user);
    //     // });
    // });
    for (const response of usersPromise) {
        const transport = await getTransport(response.transport);
        const user = new User(response.iduser, response.username, response.name, response.surname, transport);
        usersArray.push(user);
    }
    // Promise.resolve(usersPromise). then(function(arrayResponses){
    //     arrayResponses.forEach(async (response) => {
    //         const transport = await getTransport(response.transport);
    //         const user = new User(response.iduser, response.username, response.name, response.surname, transport);
    //         usersArray.push(user);
    //     });
    // });

    // console.log(usersArray);
    return usersArray;
}

export async function getUsers() {
    const usersArray = [];

    const usersPromise = await fetch("http://34.90.153.139/ejercicios/usuarios.php").then((r) => r.json());

    const userPromises = usersPromise.map(async (response) => {
        const transport = await getTransport(response.transport);
        const user = new User(response.iduser, response.username, response.name, response.surname, transport);
        return user;
    });

    const sortedUsers = await Promise.all(userPromises).then(users => {
        return users.sort((a, b) => a.iduser - b.iduser);
    });

    sortedUsers.forEach(user => {
        usersArray.push(user);
    });

    // console.log(usersArray);
    return usersArray;
}
