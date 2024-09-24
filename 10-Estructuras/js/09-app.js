// TODO: operador ternario

const puntaje = 1000;
const puntaje2 = 500;

/*
 * el operador ternario es un if en una sola linea, en este caso el signo ? es  el if y el signo : el else
 */

const superaPuntaje =
    puntaje > puntaje2 ? 'Felicidades' : 'no ha superado el puntaje';

console.log(superaPuntaje);

const superaPuntaje2 =
    puntaje && !puntaje2 ? 'Felicidades' : 'no ha superado el puntaje';

console.log(superaPuntaje2);

// if anidado con el operador ternario

const superaPuntaje3 =
    puntaje < 1000
        ? puntaje2 == 500
            ? 'Felicidades cumpliste el puntaje' //si ambos son iguales
            : 'cumple con el primer puntaje'
        : 'solo cumple con el segundo puntaje';

console.log(superaPuntaje3);
