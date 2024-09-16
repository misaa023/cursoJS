// TODO: sellar un objeto

'use strict';

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
};

// con esto sellamos el objeto
Object.seal(persona);

// lo unico que se puede hacer es modificar una propiedad que existe
persona.edad = 20;
// persona.imagen = 'imagen.jpg';
// delete persona.nombre;

console.log(persona);

console.log(Object.isSealed(persona));
