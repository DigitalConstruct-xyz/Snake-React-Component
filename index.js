import React, { useState } from 'react';
import Grid from './Components/Grid';
import useInterval from './Hooks/useInterval';
import useSnakeDirection from './Hooks/useSnakeDirection';
import game from "./Game";
import generateFood from "./Game/generateFood";


const SnakeGame = ({
                       msPerFrame = 600,
                       gridSize = [70, 6],
                       gridPixelSize = [8, 8],
                       gridCellPixelSize = [6,6],
                       backgroundColor = 'black',
                       snakeColor = 'yellow',
                       foodColor = 'red',
                        initialDirection = 'RIGHT',
                        initialSnake = [[0, 0]]
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

            gridCellPixelSizeX={gridCellPixelSize[0]} gridCellPixelSizeY={gridCellPixelSize[1]}
            gridPixelSizeX={gridPixelSize[0]} gridPixelSizeY={gridPixelSize[1]}
            backgroundColor={backgroundColor}
            snakeColor={snakeColor}
            foodColor={foodColor}
    />;
};

export default SnakeGame;
