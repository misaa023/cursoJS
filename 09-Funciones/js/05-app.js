// TODO: parametros por default

function saludar(nombre = 'Desconocido', apellido = 'Desconocido') {
    return `Hola ${nombre} ${apellido} bienvenido`;
}

console.log(saludar('Juan', 'Perez'));
console.log(saludar('Carlos'));
console.log(saludar());
