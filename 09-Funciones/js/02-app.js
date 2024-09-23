//TODO: diferencia entre funciones declarativas y expresivas

/**

* El hoisting nos permite no tener que declarar una variable y una funcion antes de usarla,
lo que pasa es que el navegador las lee dos veces, la primera vez es para la declaracion
y la segunda vez es para la ejecucion

* En el caso de una funcion declarativa se puede llamar antes de ser declarada

* En el caso de una funcion expresiva no se puede llamar antes de ser declarada

 */

sumar();
function sumar() {
    console.log(2 + 2);
}

sumar2();
const sumar2 = function () {
    console.log(3 + 3);
};
