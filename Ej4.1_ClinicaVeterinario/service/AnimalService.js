import { Animal } from "../model/Animal.js";

export function getAnimals() {
    const animal1 = new Animal(1, "Diluc", "M", null, "Cat");
    const animal2 = new Animal(2, "Xiao", "M", 324, "Cat");
    const animal3 = new Animal(3, "Ganyu", "F", 453, "Dog");
    const animal4 = new Animal(4, "Jean", "F", 234, "Dog");
    const animal5 = new Animal(5, "Souma", "M", null, "Cat");
    const animal6 = new Animal(6, "Furina", "F", 123, "Cat");
    const animal7 = new Animal(7, "Ajax", "M", null, "Cat");

    return [animal1, animal2, animal3, animal4, animal5, animal6, animal7];
}

export function getAnimal(idAnimal) {
    const animals = getAnimals();
    
    // for(let i=0; i<animals.length; i++) {
    //     if (animals[i].id == idAnimal) {
    //         return animals[i];
    //     }
    // };

    // animals.forEach(animal => {
    //     if (animal.id == idAnimal) {
    //         return animal;
    //     }
    // });

    return animals.find(animal => animal.id === idAnimal);
}

function getDogs() {
    const animals = getAnimals();

    return animals.filter(animal => animal.type === "Dog");
}
