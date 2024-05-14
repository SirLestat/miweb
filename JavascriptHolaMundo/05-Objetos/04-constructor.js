function Usuario() {
    this.id = 1;
    this.recuperarClave = function() { //<----- Los métodos son funciones asignadas a propiedades de un objeto
        console.log('Recuperando clave...')
    }
}

let usuario = new Usuario();
console.log(usuario)

function Personaje(nombre, clase, nivel=0) {
    this.nombre = nombre;
    this.clase = clase;
    this.nivel = nivel;
    this.saludo = function () {console.log(`Mi nombre es ${this.nombre} y soy un ${this.clase} de nivel ${this.nivel}`)
    }
};

let mago = new Personaje('Lestat', 'Mago', 29);
mago.saludo();

let paladin = new Personaje('Zaira', 'Paladin', 28)
paladin.saludo();