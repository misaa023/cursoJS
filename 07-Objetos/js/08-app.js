// TODO: congelar un objeto para que no se pueda modificar

'use strict';

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
};

// con esto congelamos el objeto para que no se pueda modificar
Object.freeze(persona);

// cuando queremos modificar el objeto, nos va a tirar un error
// !! cannot add property disponible, 'persona' is not extensible

persona.disponible = false;
persona.imagen = 'imagen.jpg';
delete persona.nombre;

console.log(persona);

// para saber si el objeto esta congelado
console.log(Object.isFrozen(persona));
