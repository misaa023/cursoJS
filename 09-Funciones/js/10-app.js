// TODO: arrow function con foreach y map

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

const nuevoArreglo = carrito.map((producto) => {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.table(nuevoArreglo);

// podemos omitir las llaves y el return
carrito.forEach((producto) => console.log(`${producto.nombre}`));
