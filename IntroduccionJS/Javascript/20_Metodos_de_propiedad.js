//Métodos de propiedad

const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`)
    },

    pausar : function() {
        console.log(`La canción se ha pausado.`)
    },

    crearPlaylist : function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },

    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción: ${id}`)
}

reproductor.reproducir(88888);
reproductor.pausar();
reproductor.borrarCancion(656);
reproductor.crearPlaylist("Lo-fi");
reproductor.reproducirPlaylist("Lo-fi");

/*-------------------------------------------------------------------------------------*/

