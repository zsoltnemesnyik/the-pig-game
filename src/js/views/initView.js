export const displayInitValues = (viewObj, modelObj) => {
    viewObj.forEach((el,i) => {
        el.innerHTML = Object.values(modelObj)[i];
    });
}

export const hideElement = (el) => {
    el.style.visibility = 'hidden';
};