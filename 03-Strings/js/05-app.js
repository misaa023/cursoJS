// TODO: METODOS PARA REMPLAZAR VALORES

const producto2 = 'Monitor 20 Pulgadas';

console.log(producto2);

// reemplazar un valor de la cadena por otro, primer parametro es el valor a reemplazar y el segundo es el valor por el que se reemplaza

console.log(producto2.replace('Pulgadas', '"'));

// reemplazar un valor de la cadena por otro

console.log(producto2.replace('Monitor', 'Monitor Curvo'));

// TODO: slice -> extrae una parte de la cadena (la corta)

console.log(producto2.slice(2, 10));

// TODO: substring -> extrae una parte de la cadena (alternativa a slice)
// substring es similar a slice, pero no permite usar indices negativos
// si se usa el indice alreves (10,2), se invierte la cadena (2,10)

console.log(producto2.substring(2, 10));

// TODO: charAt -> devuelve el caracter en el indice indicado

console.log(producto2.charAt(2));
