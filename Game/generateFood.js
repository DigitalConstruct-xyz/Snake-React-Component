// generateFood.js

function generateFood(snake, gridSize) {
    let food;

    do {
        // Generate a random position within the grid
        const x = Math.floor(Math.random() * gridSize[0]);
        const y = Math.floor(Math.random() * gridSize[1]);
        food = [x, y];

        // Check if the generated position is on the snake
    } while (snake.some(segment => segment[0] === food[0] && segment[1] === food[1]));

    return food;
}

export default generateFood;
