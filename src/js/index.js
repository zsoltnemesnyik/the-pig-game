import 'bootstrap';
import '../scss/main.scss';
import {elements} from './views/base';

// import images to ./dist
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../img/', true, /\.(png|jpe?g|svg)$/));

// Toggle classes
elements.rulesIcon.addEventListener('click', () => {
    elements.rulesIcon.classList.toggle('open');
    elements.rules.classList.toggle('open');
    elements.bodyNotRules.style.filter = elements.bodyNotRules.style.filter == 'blur(5px) brightness(30%)' ? '' : 'blur(5px) brightness(30%)';
});