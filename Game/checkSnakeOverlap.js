function checkSnakeOverlap(snake) {
    const uniqueSegments = new Set(snake.map(segment => segment.join(',')));

    // If there are duplicate segments, the size of the set will be less than the length of the snake array
    return uniqueSegments.size !== snake.length;
}

export default checkSnakeOverlap;