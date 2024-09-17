// TODO: crear un nuevo arreglo con el spread operator

// simulando un carrito de compras
const carrito = [];

//! Creando un objeto producto
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400,
};

const producto2 = {
    nombre: 'Televisión 50 pulgadas',
    precio: 700,
};

const producto3 = {
    nombre: 'Tablet',
    precio: 200,
};

// forma declarativa
// de esta forma creamos una copia de carrito
let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];

// de esta manera lo agregamos al principio

resultado = [producto3, ...resultado];

console.table(resultado);
