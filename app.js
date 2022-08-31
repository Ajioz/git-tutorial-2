const add_number = (a, b) => {
    return (a + b) *1.2
}

const my_spaceship = (ship) => {
    X = 0;
    Y = 0;
    quadrant = 0;
    direction = "up";
    while(quadrant<ship.length){
        if(ship[quadrant] === "L"){
            if(direction === "right"){
                direction = "up"
            }else if(direction === "down"){
                direction = "right"
            }else if(direction === "up"){
                direction = "left"
            }else{
                direction = "down"
            }
        }

        if(ship[quadrant] === "R"){
            if(direction === "down"){
                direction = "left"
            }else if(direction === "left"){
                direction = "up"
            }else if(direction === "up"){
                direction = "right"
            }else{
                direction = "down"
            }
        }

        if(ship[quadrant] === "A"){
            if(direction === "up"){
                Y = Y - 1
            }else if(direction === "down"){
                Y = Y + 1
            }else if(direction === "left"){
                X = X - 1
            }else{
                X = X + 1
            }
        }
        quadrant++;
    }
    return `{ x: ${X}, y: ${Y}, direction: '${direction}' }`
}

console.log(my_spaceship('AAAA'));


let sub_number = (a, b, c) => {
    return (a - b)*c;
}