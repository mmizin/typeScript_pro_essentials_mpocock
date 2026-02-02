type Rectangel = {width: number, height: number}

const getRectangleArea = (rectangle: Rectangel) => {
    return rectangle.width * rectangle.height
}

console.log(`${getRectangleArea({width: 3, height: 4})}`)