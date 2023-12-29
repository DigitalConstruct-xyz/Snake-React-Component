import React, { useState } from 'react';
import Grid from './Components/Grid';
import useInterval from './Hooks/useInterval';
import useSnakeDirection from './Hooks/useSnakeDirection';
import gameLoop from "./Game";

const gridSize = 10;
const initialSnake = [[0, 0]];
const initialFood = [5, 5];
const msPerFrame = 600;
const initialDirection = 'RIGHT';



const SnakeGame = () => {
    const [snake, setSnake] = useState(initialSnake);
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
