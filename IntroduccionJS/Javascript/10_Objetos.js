// objetos

const nombreProducto = "monitor 20 Pulgadas";
const precio = 300;
const disponible = true;


const producto = {
    nombreProducto : "monitor 20 Pulgadas",
    precio : 300,
    disponible : true

}

// console.log(producto);



// Agregar nuevas propiedades
producto.imagen = "imagen.jpg";

// Eliminar Propiedades 
delete producto.disponible;

console.log(producto);