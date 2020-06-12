export const changeActivePlayer = (activePlayer) => {
    activePlayer = activePlayer == 1 ? 0 : 1;

    return activePlayer
}

export const resetCurrentPoints = (currentPoint) => {
    currentPoint = 0;

    return currentPoint
}