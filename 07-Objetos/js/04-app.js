// TODO: destructuring de objetos

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
};

// extraer propiedades de un objeto
const { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);

// extraer propiedades de un objeto con alias
const { nombre: n, apellido: a, edad: e } = persona;
console.log(n, a, e);
