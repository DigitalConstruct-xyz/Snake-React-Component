import React from 'react';

const GridCell = ({ isSnake, isFood, coordinate, GridCellPixelSizeX=15, GridCellPixelSizeY=15 }) => {
    // You can use the coordinate prop here if needed
    // For example, to display the coordinates (for debugging):
    // const [x, y] = coordinate;

    return (
        <div
            style={{
                width: GridCellPixelSizeX + 'px',
                height: GridCellPixelSizeY + 'px',
                backgroundColor: isSnake ? 'green' : isFood ? 'red' : 'white',
                border: '1px solid black',
                // Uncomment below line to display coordinates in each cell
                // fontSize: '10px', textAlign: 'center', lineHeight: '20px'
            }}
        >
            {/* Uncomment below line to display coordinates in each cell */}
            {/* {`${x},${y}`} */}
        </div>
    );
};

export default GridCell;
