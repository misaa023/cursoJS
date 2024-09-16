// TODO: funciones en objetos y acceder a sus valores
// la palabra this hace referencia a la propiedad del objeto que estamos accediendo

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    //metodo
    mostrarInfo: function () {
        console.log(
            `El nombre es: ${this.nombre} y el precio es: ${this.precio}`,
        );
    },
};
// invocar el metodo
console.log(producto.mostrarInfo());
