// TODO: agregar funciones a objetos

const reproducto = {
    // esto se lo conoce como metodo de propiedades
    reproducir: function (id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },

    pausar: function (id) {
        console.log(`Pausando cancion con el id ${id}`);
    },
    borrar: function (id) {
        console.log(`Eliminando cancion con el id ${id}`);
    },

    crearPlaylist: function (nombre) {
        console.log(`creando la playlist ${nombre}`);
    },

    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la playlist con el nombre: ${nombre}`);
    },
};

reproducto.reproducir(30);
reproducto.pausar(30);
reproducto.borrar(30);

reproducto.crearPlaylist('Rock 90s');
reproducto.reproducirPlaylist('Rock 90s');
