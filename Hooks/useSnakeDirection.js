// useSnakeDirection.js
import { useState, useEffect } from 'react';
import handleKeyDown from "../Helpers/handleKeyDown";

const useSnakeDirection = (initialDirection) => {
    const [direction, setDirection] = useState(initialDirection);

    useEffect(() => {
        const handleKeyDownHandler = (e) => {
            handleKeyDown(e, direction, setDirection);
        };
        window.addEventListener('keydown', handleKeyDownHandler);
        return () => window.removeEventListener('keydown', handleKeyDownHandler);
    }, [direction]);

    return [direction, setDirection];
};

export default useSnakeDirection;

