// TODO: metodos de objetos

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
};

// con esto puedo obtener las propiedades del objeto
console.log(Object.keys(persona));

// con esto puedo obtener los valores del objeto
console.log(Object.values(persona));

// con esto puedo obtener las propiedades y valores del objeto
console.log(Object.entries(persona));
