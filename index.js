import React, {useEffect, useState} from 'react';
import Grid from './Components/Grid';
import useInterval from './Hooks/useInterval';
import useSnakeDirection from './Hooks/useSnakeDirection';
import game from "./Game";
import generateFood from "./Game/generateFood";
import decisionMakerAutoplay from "./decisionMakerAutoplay";
import decisionMakerHumanPlay from "./decisionMakerHumanPlay";


const SnakeGame = ({
                       msPerFrame = 500,
                       gridSize = [10, 10],
                       gridPixelSize = [8, 8],
                       gridCellPixelSize = [6,6],
                       backgroundColor = 'black',
                       snakeColor = 'yellow',
                       foodColor = 'red',
                        initialDirection = [1,0],
                        initialSnake = [[0, 0]],
                        decisionMakerMachine =
                            decisionMakerAutoplay
                       ,
                       decisionMakerHuman = decisionMakerHumanPlay,
                        autoplay = true
                   }) => {
    const [snake, setSnake] = useState(initialSnake);
    const initialFood = generateFood(initialSnake, gridSize)
    const [food, setFood] = useState(initialFood);
    const [direction, setDirection] = useSnakeDirection(initialDirection);

    useEffect(() => {

        if(!autoplay) {
            const eventListener = (event) => {
                decisionMakerHuman(direction, setDirection, event)
            }
            window.addEventListener("keydown", eventListener)
            return () => {
                window.removeEventListener("keydown", eventListener)
            }
        }

    });

    useInterval(() => {
        let newDirection =direction;
        if(autoplay) {
            newDirection = decisionMakerMachine(snake, food, direction, setDirection, gridSize);
            setDirection(newDirection);
        }
        // setDirection(newDirection);

        game(snake, setSnake, food, setFood,
            newDirection
            , gridSize,
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
