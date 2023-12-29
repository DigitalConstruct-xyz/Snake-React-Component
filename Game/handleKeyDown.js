const handleKeyDown = (e, direction, setDirection) => {
    e.preventDefault();
    switch (e.keyCode) {
        case 37: // left arrow
            if (direction !== 'RIGHT') {
                setDirection('LEFT');
            }
            break;
        case 38: // up arrow
            if (direction !== 'DOWN') {
                setDirection('UP');
            }
            break;
        case 39: // right arrow
            if (direction !== 'LEFT') {
                setDirection('RIGHT');
            }
            break;
        case 40: // down arrow
            if (direction !== 'UP') {
                setDirection('DOWN');
            }
            break;
        default:
            break;
    }
};

export default handleKeyDown;