import React from 'react';

const GridCell = ({ isSnake, isFood, coordinate, gridCellPixelSizeX = 15, gridCellPixelSizeY=15,
                  foodColor = 'red', snakeColor = 'green', backgroundColor = 'white'
                  }) => {
    // You can use the coordinate prop here if needed
    // For example, to display the coordinates (for debugging):
    // const [x, y] = coordinate;

  return (
    <div
      style={{
        width: gridCellPixelSizeX + 'px',
        height: gridCellPixelSizeY + 'px',
        backgroundColor: isSnake ? snakeColor : isFood ? foodColor : backgroundColor,
        fontSize: `${gridCellPixelSizeX}px`, // Set the font size to a percentage of the parent element's font size
        textAlign: 'center',
        textJustify: 'center',
        lineHeight: '1'
      }}
    >
      {/* Uncomment below line to display coordinates in each cell */}
       {`${x}`}

    </div>
  );
};

export default GridCell;
