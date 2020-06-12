export const displayDice = (num, dice) => {
    dice.classList.add('controls-dice--shake');
    setTimeout(() => {
        dice.classList.remove('controls-dice--shake');
        dice.setAttribute('src', `./img/dice-${num}.png`)
    }, 500);
}