export const generateNums = () => {
    let nums = [
        Math.floor((Math.random() * 6) + 1), Math.floor((Math.random() * 6) + 1)
    ];

    return nums
}

export const calculateDicePoints = (...arr) => {
    let total = 0;
    arr.forEach(el => {
        total += el;
    });

    return total
}

export const checkWinner = (totalScore, scr) => {
    if (totalScore >= scr) {
        return true
    }
}