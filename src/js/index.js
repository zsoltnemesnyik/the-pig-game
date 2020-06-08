import 'bootstrap';
import '../scss/main.scss';

// import images to ./dist
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../img/', true, /\.(png|jpe?g|svg)$/));