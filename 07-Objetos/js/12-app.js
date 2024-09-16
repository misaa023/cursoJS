// TODO: objeto constructor

//objeto literal
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 28,
    peso: 70,
};

// objeto constructor
function Persona(nombre, apellido, edad, peso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.peso = peso;
}

// creando un objeto
const persona2 = new Persona('Maria', 'Gonzalez', 20, 50);
console.log(persona2);
