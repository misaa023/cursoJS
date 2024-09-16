// TODO: unir dos objetos

const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
};

const datos = {
    direccion: 'Av. Principal',
    numero: 2323,
    telefono: 4234234,
    email: 'qXp2I@example.com',
};

// spread operator, me permite unir dos objetos
//esto crea un nuevo objeto, con los valores de los objetos de persona y datos
const personaCompleta = { ...persona, ...datos };

console.log(personaCompleta);
console.log(persona);
console.log(datos);
