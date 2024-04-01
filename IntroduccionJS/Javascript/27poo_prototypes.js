// programacion orientada a objetos

//Object literal

const producto = {
    nobre : "Tablet",
    precio : 500,
}

//object constructor *Ya no es muy usado*

function Producto(nombre,precio,stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    
}

const producto2 = new Producto("Tarjeta Gráfica RX 7800 XT 16 GB", 12000,true);
const producto3 = new Producto("Ventilador 120mm Argb", 400, true);

const producto4 = new Producto("Fuente de poder 850W 80+ Platinum", 4000, true)
const producto5 = new Producto("Memoria RAM DDR4 1x16 Corsair Dominator", 1800, false)


console.log(producto2, producto3);

console.log(producto4, producto5);

console.log (producto);

//Crear funciones que solo se utilizan en un objeto especifico