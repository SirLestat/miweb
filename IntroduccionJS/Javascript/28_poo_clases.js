// Clases

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

    //Escribir un metodo que retorne el precio
}

const producto2 = new Producto ("Monitor Curvo de 49 pulgadas",7000)
const producto3 = new Producto ("Tarjeta grafica AMD RX 7800 XT",12000)

//Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre,precio);  //"super" hace que la clase hija herede el constructor de la clase padre
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`
    }
}

const libro1 = new Libro ("Javascript la revolución", 300, 1913216540321030);

console.log(libro1.formatearProducto());
console.log(producto2.formatearProducto());