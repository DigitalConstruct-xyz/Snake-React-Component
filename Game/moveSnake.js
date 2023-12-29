// moveSnake.js
const moveSnake = (snake, direction) => {
    let newSnake = [...snake];
    let head = [...newSnake[newSnake.length - 1]];

    switch (direction) {
        case 'RIGHT':
            head = [head[0] + 1, head[1]];
            break;
        case 'LEFT':
            head = [head[0] - 1, head[1]];
            break;
        case 'DOWN':
            head = [head[0], head[1] + 1];
            break;
        case 'UP':
            head = [head[0], head[1] - 1];
            break;
        default:
            break;
    }

    newSnake.push(head);
    newSnake.shift(); // Remove the tail
    return newSnake;
};

export default moveSnake;
