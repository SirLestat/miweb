const carrito = [
    {nombre: "Monitor 20\"", precio: 500},
    {nombre: "Pantalla 50\"", precio: 6000},
    {nombre: "Tablet", precio: 719},
    {nombre: "Bocinas", precio: 1440},
    {nombre: "teclado", precio: 560},

];


//forEach, solo puede usarse en arreglos* (Métodos exclusivos de arreglos)

/* Es recomendable usar forEach solo para enviar elementos a la consola
o mostrarlos por pantalla*/

carrito.forEach(function(producto) {
    console.log(producto)
});

//map se recomienda para crear nuevos arreglos

const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2);