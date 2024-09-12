// TODO: METODOS CORTAR ESPACIOS EN BLANCO

// creo una variable con espacios en blanco

const producto = '      Monitor 20 Pulgadas      ';

console.log(producto);
console.log(producto.length);

// ELIMINAR EL ESPACIO DE LA CADENA
// producto.trimStart() -> elimina el espacio desde la izquierda
// producto.trimEnd() -> elimina el espacio desde la derecha
// producto.trim() -> elimina el espacio desde ambos lados

console.log(producto.trimStart());
console.log(producto.trimEnd());
console.log(producto.trim());
