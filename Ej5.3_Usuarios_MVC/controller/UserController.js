import { User } from "../model/User.js";

export async function getUsers() {
    let usersArray = [];

    const usersPromise = await fetch("http://34.90.153.139/ejercicios/usuarios.php").then((r) => r.json());
    Promise.resolve(usersPromise). then(function(arrayResponses){
        arrayResponses.forEach(response => {
            const user = new User(response.iduser, response.username, response.name, response.surname);
            usersArray.push(user);
        });
    });

    // console.log(usersArray);
    return usersArray;
}
