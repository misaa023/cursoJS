// TODO: multiples funciones que se pasan valores

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);

let total = 0;

function agregarCarrito(precio) {
    return (total += precio);
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(`total: ${total}`);
console.log(`total a pagar con impuesto: ${totalPagar}`);
