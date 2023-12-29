// checkCollision.js
const checkCollision = (item, snake) => {
    for (let segment of snake) {
        if (segment[0] === item[0] && segment[1] === item[1]) {
            return true;
        }
    }
    return false;
};

export default checkCollision;
