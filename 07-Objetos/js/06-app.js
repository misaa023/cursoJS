// TODO: destruccion de objetos anidados

const autos = {
    auto1: {
        marca: 'Toyota',
        modelo: 'Corolla',
        color: 'Blanco',
        anio: 2020,
    },

    auto2: {
        marca: 'Chevrolet',
        modelo: 'Camaro',
        color: 'Rojo',
        anio: 2019,
    },
};

const { auto1, auto2 } = autos;

console.log(auto1.marca);

console.log(auto2.color);

// * Destructing de objetos anidados Multiples
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m',
        },
        fabricacion: {
            pais: 'China',
        },
    },
};

//  de esta forma accedo a los valores de los objetos anidados aplicando destructing
const {
    nombre,
    informacion: {
        fabricacion: { pais },
        medidas: { peso, medida },
    },
} = producto;

// cuando tengo que mostrar los valores, lo muestro de la siguiente forma
// lo imprimo en forma de tabla
console.table([nombre, pais, peso, medida]);
