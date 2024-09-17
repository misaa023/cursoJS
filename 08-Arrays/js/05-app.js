// TODO: agregar nuevos elementos al final y al principio de un array

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

// agregar un nuevo valor al final
carrito.push(producto);
carrito.push(producto2);

// agregar un nuevo valor al principio
carrito.unshift(producto3);

console.table(carrito);
