// objetos

const producto = {
    nombreProducto : "monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

// Forma antigua
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto);


//Destructuring

const {precio} = producto;