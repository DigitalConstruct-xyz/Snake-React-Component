
// Get the new direction that is approaching and not the current direction

import checkCollision from "./Helpers/checkCollision";


function getDistance(p0, p1) {
  // Calculate Euclidean distance
  return Math.sqrt((p1[0] - p0[0]) ** 2 + (p1[1] - p0[1]) ** 2);
}
/**
 * Calculates the new direction for the snake in the game.
 * @param {Array<Array<number>>} snake - The current positions of the snake's body segments.
 * @param {Array<number>} food - The position of the food in the game.
 * @param {Array<number>} direction - The current direction of the snake.
 * @returns {Array<number>} - The new direction for the snake.
 */


function getNewDirection(snake, food, direction, setDirection) {

  const directions = [
    [0, -1], // Up
    [1, -1],
    [1, 0], // Right
    [1, 1],
    [0, 1], // Down
    [-1, 1],
    [-1, 0], // Left
    [-1, -1]
  ];

  let snakeHead = snake[snake.length - 1];
  const distances = [];

  for (let dir of directions) {
    const newSnakeHead = [snakeHead[0] + dir[0], snakeHead[1] + dir[1]];
    if (!(checkCollision(newSnakeHead, snake) || (dir[0] == -direction[0] && dir[1] == -direction[1]))) {
      const distance = getDistance(newSnakeHead, food);
      distances.push({ direction: dir, distance });
    }
  }

  distances.sort((a, b) => a.distance - b.distance);

  // The sorted directions by distance
  const sortedDirections = distances.map((item) => item.direction);
  console.log(sortedDirections)

  if(sortedDirections.length === 0) {
    return direction;
  }
  setDirection(sortedDirections[0])

  return sortedDirections[0];
  }

  export default getNewDirection;
