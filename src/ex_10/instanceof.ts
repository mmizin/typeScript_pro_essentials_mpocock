class Car {
    drive() {console.log('vroom')}
}

class Boat {
    sail() {console.log('zee')}
}

function useVechical(vechical: Car | Boat) {
    if (vechical instanceof Car) {
        vechical.drive();
    }
    else if (vechical instanceof Boat) {
        vechical.sail();
    }
}

useVechical(new Car());
useVechical(new Boat());