const producto = {
    nombreProducto : "monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

//Object.freeze(producto); NO PERMITE AGREGAR, QUITAR O MODIFICAR PROPIEDADES DE LOS OBJETOS
//Object.seal(producto); // PERMITE MODIFICAR PERO NO QUITAR NI AGREGAR PROPIEDADES DE LOS OBJETOS

producto.precio = "Nuevo Precio";
console.log(producto.precio);