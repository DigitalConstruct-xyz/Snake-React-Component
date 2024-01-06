// moveSnake.js
const moveSnake = (snake, direction) => {
    let newSnake = [...snake];
    let head = [...newSnake[newSnake.length - 1]];

    head = [head[0]+direction[0], head[1]+direction[1]]

    newSnake.push(head);
    newSnake.shift(); // Remove the tail
    return newSnake;
};

export default moveSnake;
