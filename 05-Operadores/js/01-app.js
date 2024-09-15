// TODO: OPERADOR MATOR QUE Y MENOR QUE

const numero1 = 30;
const numero2 = 20;

console.log(numero1 > numero2);
console.log(numero1 < numero2);

// TODO: OPERADORES LOGICOS

const esAdmin = true;
const esSuperAdmin = false;
const esModerador = true;

console.log(esAdmin && esModerador); // => && = and (ambos tienen que ser verdaderos)
console.log(esAdmin || esModerador); // => || = or (alguno tiene que ser verdadero)
console.log(!esAdmin); // => ! = not (invierte el valor)

// TODO: OPERADOR TERNARIO

const activo = true;

/*
====================================================
el operador ternario es un if en una sola linea
en este caso el signo ? es el if y el signo : el else
====================================================
*/

console.log(activo ? 'Activo' : 'Inactivo');
