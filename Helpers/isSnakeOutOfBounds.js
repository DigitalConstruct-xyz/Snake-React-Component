function isSnakeOutOfBounds(snake, gridSize) {
    // Assuming the snake's head is the first element in the array
    const head = snake[snake.length - 1];

    // Check if the snake's head is outside the grid
    return head[0] < 0 || head[1] < 0 || head[0] >= gridSize || head[1] >= gridSize;
}

export default isSnakeOutOfBounds;