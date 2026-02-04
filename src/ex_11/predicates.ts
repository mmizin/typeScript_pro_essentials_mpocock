interface Cat {
    meow(): void;
}

interface Dog {
    bark(): void;
}

function isDog(animal: Cat | Dog): animal is Dog {
    return "bark" in animal;
}

function printAnimal(animal: Cat | Dog) {
    if (isDog(animal)) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}


function isStringArray(value: any): value is string[] {
    return Array.isArray(value) && value.every(item => typeof item === 'string')
}

function processInput(input: string[] | number) {
    if (isStringArray(input)) {
        input.map(item => item.toUpperCase());
    }
    else {
        input.toFixed(2);
    }
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface Guest {
    sessionId: string;
}

function isUser(user: User | Guest): user is User {
    return "id" in user && "name" in user;
}

function greet(user: User | Guest) {
    if (isUser(user)) {
        console.log(`Hello ${user.name}`);
    }
    else {
        console.log(`Hello guest ${user.sessionId}`);
    }
}