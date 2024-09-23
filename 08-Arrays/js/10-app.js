// TODO: map() para iterar un array

// crear un array de objetos
const carrito = [
    { nombre: 'Monitor 20 pulgadas', precio: 500 },
    { nombre: 'Televisión 50 pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// recorremos el array con .map
// * la diferencia con foreach es que map regresa un nuevo array

const nuevoArreglo = carrito.map((producto) => {
    return `${producto.nombre} -- Precio: ${producto.precio}`;
});

console.table(nuevoArreglo);
