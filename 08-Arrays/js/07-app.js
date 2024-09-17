// TODO: eliminar elementos de un arreglo

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// eliminar un elemento del final
meses.pop(); // elimino julio

// eliminar un elemento del principio
meses.shift(); // elimino enero
console.table([meses]);

// ========================>

// TODO: eliminar elementos de un arreglo con splice

const carrito = [];

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

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [...resultado, producto3];

console.table(resultado);

// eliminar elementos de un arreglo con splice
// recibe dos parametros splice(), el primero es la posicion y el segundo es la cantidad de elementos a eliminar

resultado.splice(0, 1);
console.table(resultado);
