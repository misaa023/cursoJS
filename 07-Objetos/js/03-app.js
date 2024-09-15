// TODO: AGREGAR O ELIMINAR PROPIEDADES DE UN OBJETO

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
};

// agregar propiedades
producto.imagen = 'imagen.jpg';
console.log(producto);

// eliminar propiedades
delete producto.disponible;
console.log(producto);
