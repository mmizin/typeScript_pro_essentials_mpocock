type Point = {
    x: number,
    y: number
};

function printCoordinates(point: Point) {
    console.log(`Coordinates: (${point.x}, ${point.y})`);
}

printCoordinates({x: 3, y: 1});

const printPoints = (coordinates: Point) => {
    console.log(`Coordinates: (${coordinates.x}, ${coordinates.y})`);
};

printPoints({x: 1, y: 3});


type ID = number | string;

