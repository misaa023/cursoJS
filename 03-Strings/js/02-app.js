// TODO : METODOS LENGHT - INCLUDES - INDEXOF

const producto = 'Monitor';

//con el metodo lenght veo el largo de la cadena de texto
console.log(producto.length);

/* con el metodo indexOf y includes compruebo si existe la palabra en mi cadena de texto
!! Ambos metodos respetan las mayusculas
* con indexOf me va devolver 0 (existe) y -1 (no existe)
*/

console.log(producto.indexOf('Monitor'));

// * con includes me va devolver True o False

console.log(producto.includes('Monitor'));
