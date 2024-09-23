// TODO: reproductor de musica con arrow functions

const reproductor = {
    reproducir: (id) => {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: (id) => {
        console.log(`Pausando cancion con el id ${id}`);
    },
    borrar: (id) => {
        console.log(`Eliminando cancion con el id ${id}`);
    },
    crearPlaylist: (nombre) => {
        console.log(`creando la playlist ${nombre}`);
    },

    reproducirPlaylist: (nombre) => {
        console.log(`Reproduciendo la playlist con el nombre: ${nombre}`);
    },

    set nuevaPlayist(nombre) {
        this.nombre = nombre;
        console.log(`Agregando la playlist ${nombre}`);
    },

    get obtenerPlaylist() {
        console.log(`El nombre de la playlist es: ${this.nombre}`);
    },
};

reproductor.nuevaPlayist = 'Pop 90s';
reproductor.obtenerPlaylist;

reproductor.reproducir(30);
reproductor.pausar(30);
reproductor.borrar(30);
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Rock 90s');
