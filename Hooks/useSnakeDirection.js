// useSnakeDirection.js
import { useState, useEffect } from 'react';

const useSnakeDirection = (initialDirection) => {
    const [direction, setDirection] = useState(initialDirection);
    return [direction, setDirection];
};

export default useSnakeDirection;

