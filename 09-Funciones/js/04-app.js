// TODO: Parametros y argumentos en funciones

// PARAMETROS - son representativos
const sumar = function (a, b) {
    return a + b;
};

// ARGUMENTOS - son valores reales
console.log(sumar(2, 2));

function saludar(nombre, apellido) {
    return `Hola ${nombre} ${apellido} bienvenido`;
}

saludar('Juan', 'Perez');
