import React from 'react';
import GridCell from './GridCell';
import checkCollision from "../Helpers/checkCollision";

const Grid = ({ gridSize, snake, food}) => {
    const renderGrid = () => {
        let grid = [];

        for (let i = 0; i < gridSize[1]; i++) {
            for (let j = 0; j < gridSize[0]; j++) {
                let isSnake = checkCollision([j, i], snake);
                let isFood = food[0] === j && food[1] === i;
                grid.push(
                    <GridCell key={`${i}-${j}`} isSnake={isSnake} isFood={isFood} coordinate={[i,j]} />
                );
            }
        }

        return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${gridSize[0]}, 20px)`,
                gridTemplateRows: `repeat(${gridSize[1]}, 20px)`,
                gap: '1px'
            }}>
                {grid}
            </div>
        );
    };

    return renderGrid();
};

export default Grid;
