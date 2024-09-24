// TODO: detener la ejecucion de un if

const a = 10;
const b = 20;

function comparar() {
    if (a > b) {
        console.log('a es mayor que b');
        return;
    }

    if (a < b) {
        console.log('a es menor que b');
        return;
    }
}

comparar();
