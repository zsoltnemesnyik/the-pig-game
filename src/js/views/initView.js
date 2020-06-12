export const displayValues = (viewObj, modelObj) => {
    viewObj.forEach((el,i) => {
        el.innerHTML = Object.values(modelObj)[i];
    });
}

export const resetDices = (arr) => {
    arr.forEach(el => {
        el.setAttribute('src', `./img/dice-pig.png`)
    });
}

export const hideElement = (el) => {
    el.style.visibility = 'hidden';
};

export const showElement = (el) => {
    el.style.visibility = 'visible';
};