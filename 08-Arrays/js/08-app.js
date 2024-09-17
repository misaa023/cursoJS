// TODO: destructuring de arreglos

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// extraer elementos de un arreglo
/*

a diferencia de un objeto, en los arreglos se les peude poner cualquier nombre a los valores, ya que lso va tomar en el orden de sus indices
const [ene, feb, mar, abr, may, jun, jul] = meses;
console.table([ene, feb, mar, abr, may, jun, jul]);

*/

// si quiero un valor en especifico
//? pongo una coma para no obtener los valores que no quiero
const [ene2, , , , , jun2, jul2] = meses;
console.table([ene2, jun2, jul2]);

// si quiero tener un arreglo por separado

const [ene3, ...nuevosMeses] = meses;
console.log(nuevosMeses);
