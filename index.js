import React, { useState } from 'react';
import Grid from './Components/Grid';
import useInterval from './Hooks/useInterval';
import useSnakeDirection from './Hooks/useSnakeDirection';
import game from "./Game";
import generateFood from "./Game/generateFood";

const initialSnake = [[0, 0]];
const initialDirection = 'RIGHT';



const SnakeGame = ({
                       msPerFrame = 600,
                       gridSize = [70, 6],
                       gridPixelSizeX = 8,
                       gridPixelSizeY = 8,
                       gridCellPixelSizeX = 6,
                       gridCellPixelSizeY =6
                   }) => {
    const [snake, setSnake] = useState(initialSnake);
    const initialFood = generateFood(initialSnake, gridSize)
    const [food, setFood] = useState(initialFood);
    const [direction, setDirection] = useSnakeDirection(initialDirection);

    useInterval(() => {
        game(snake, setSnake, food, setFood, direction, gridSize,
            () => {
            setSnake(initialSnake)
            setDirection(initialDirection)
        });
    }, msPerFrame);

    return <Grid gridSize={gridSize} snake={snake} food={food}


        gridPixelSizeY={gridPixelSizeY}
            gridCellPixelSizeX={gridCellPixelSizeX} gridCellPixelSizeY={gridCellPixelSizeY}
            gridPixelSizeX={gridPixelSizeX}
    />;
};

export default SnakeGame;
