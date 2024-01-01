
// Calculate the distance between two points
function calculateDistance(point1, point2) {
  const xDistance = Math.abs(point1[0] - point2[0]);
  const yDistance = Math.abs(point1[1] - point2[1]);
  return xDistance + yDistance;
}

// Check if the snake is approaching the food
function isApproachingFood(snake, food, direction) {
  const snakeHead = snake[snake.length -1];
  const nextSnakeHead = [
    snakeHead[0] + direction[0],
    snakeHead[1] + direction[1],
  ];
  const currentDistance = calculateDistance(snakeHead, food);
  const nextDistance = calculateDistance(nextSnakeHead, food);
  console.log(currentDistance, nextDistance)
  return nextDistance < currentDistance;
}

// Get the new direction that is approaching and not the current direction
/**
 * Calculates the new direction for the snake in the game.
 * @param {Array<Array<number>>} snake - The current positions of the snake's body segments.
 * @param {Array<number>} food - The position of the food in the game.
 * @param {Array<number>} direction - The current direction of the snake.
 * @returns {Array<number>} - The new direction for the snake.
 */
function getNewDirection(snake, food, direction) {
  const directions = [
    [0, -1], // Up
    [1, 0], // Right
    [0, 1], // Down
    [-1, 0], // Left
  ];

  let bestDirection = direction;
  let bestDistance = calculateDistance(snake[snake.length - 1], food);

  for (const newDirection of directions) {
    const nextSnakeHead = [
      snake[snake.length - 1][0] + newDirection[0],
      snake[snake.length - 1][1] + newDirection[1],
    ];
    const nextDistance = calculateDistance(nextSnakeHead, food);

    if (
      nextDistance <= bestDistance &&
      (newDirection[0] !== -direction[0] || newDirection[1] !== -direction[1])
    ) {
      bestDirection = newDirection;
      bestDistance = nextDistance;
    }
  }

  return bestDirection;
}

// Update the direction according to snake and food
function updateDirection(snake, food, direction) {
  if (isApproachingFood(snake, food, direction)) {
    // console.log("snake head", snake[snake.length - 1]);
    return direction;
  }

  const newDirection = getNewDirection(snake, food, direction);
  return newDirection;
}

export default updateDirection;