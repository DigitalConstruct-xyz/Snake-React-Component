import React, { useState, useEffect } from 'react';



const DecisionMakerHumanPlay = (direction, setDirection, event) => {

    const directions = {
        regular: {
            'I': { x: 0, y: -1 },  // Up
            'K': { x: 0, y: 1 },   // Down
            'J': { x: -1, y: 0 },  // Left
            'L': { x: 1, y: 0 },   // Right
        },
        tilted: {
            'I': { x: 1, y: -1 },  // Up-Right
            'K': { x: 1, y: 1 },   // Down-Right
            'J': { x: -1, y: 1 },  // Down-Left
            'L': { x: -1, y: -1 }, // Up-Left
        }
    };

    const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        let newDirectionVector;

        if (event.ctrlKey && directions.tilted[key]) {
            newDirectionVector = directions.tilted[key];
        } else if (directions.regular[key]) {
            newDirectionVector = directions.regular[key];
        } else {
            newDirectionVector = { x: direction[0], y: direction[1] };
        }

        setDirection([newDirectionVector.x, newDirectionVector.y]);
    };

    handleKeyPress(event)

};

export default DecisionMakerHumanPlay;
