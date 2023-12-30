import checkCollision from "../Helpers/checkCollision";
import isSnakeOutOfBounds from "../Helpers/isSnakeOutOfBounds";
import moveSnake from "./moveSnake";
import generateFood from "./generateFood";
import checkSnakeOverlap from "../Helpers/checkSnakeOverlap";

function gameLoop(snake, setSnake, food, setFood, direction, gridSize, resetSnake) {
    const tail = snake[snake.length - 1];
    let newSnake = moveSnake(snake, direction);

    //TODO
    // if snake collides with food, grow snake, set new food
    if(checkCollision(food, newSnake)) {
        //generate new food
        setFood(generateFood(newSnake, gridSize));
        //grow snake
        newSnake = [ tail, ...newSnake ];
    }else if (
        checkSnakeOverlap(newSnake) ||
        isSnakeOutOfBounds(newSnake, gridSize)) {
        // if snake collides with itself or goes out of bounds, reset snake
        resetSnake();
        return;
    }

    setSnake(newSnake);
}

export default gameLoop;