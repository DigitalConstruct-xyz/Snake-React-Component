// generateFood.js

function generateFood(snake, gridSize) {
    let food;

    do {
        // Generate a random position within the grid
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);
        food = [x, y];

        // Check if the generated position is on the snake
    } while (snake.some(segment => segment[0] === food[0] && segment[1] === food[1]));

    return food;
}

export default generateFood;
