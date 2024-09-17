// TODO: recorrer un arreglo

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.table([meses]);

//primera forma de recorrer un arreglo
// hay que recorrer la longitud de la matriz
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}

// segunda forma de recorrer un arreglo
for (let mes of meses) {
    console.log(mes);
}
