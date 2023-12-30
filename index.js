import React, { useState } from 'react';
import Grid from './Components/Grid';
import useInterval from './Hooks/useInterval';
import useSnakeDirection from './Hooks/useSnakeDirection';
import gameLoop from "./Game";
import generateFood from "./Game/generateFood";

const gridSize = [10,5];
const initialSnake = [[0, 0]];
// const initialFood = [5, 5];
const msPerFrame = 600;
const initialDirection = 'RIGHT';



const SnakeGame = () => {
    const [snake, setSnake] = useState(initialSnake);
    const initialFood = generateFood(initialSnake, gridSize)
    const [food, setFood] = useState(initialFood);
    const [direction, setDirection] = useSnakeDirection(initialDirection);

    useInterval(() => {
        gameLoop(snake, setSnake, food, setFood, direction, gridSize,
            () => {
            setSnake(initialSnake)
            setDirection(initialDirection)
        });

    }, msPerFrame);

    return <Grid gridSize={gridSize} snake={snake} food={food} />;
};

export default SnakeGame;
