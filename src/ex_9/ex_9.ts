interface Bird {
    fly(): void;
    layEggs: void;
}

interface Fish {
    swim(): void;
    layEggs: void;
}

function moveIn(pet: Bird | Fish): void {
    if ("fly" in pet) {
        pet.fly();
    } else {
        pet.swim();
    }
}