// TODO: OBJETOS DENTRO DE OBJETOS

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
    // agregar objetos dentro de objetos
    direccion: {
        calle: 'Av. Principal',
        numero: 123,
    },
};

console.log(persona);

console.log(persona.direccion);
console.log(persona.direccion.calle);
