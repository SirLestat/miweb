const producto = {
    nombre : "monitor 20 Pulgadas",
    precio : 300,
    disponible : true
}

const medidas = {
    peso : "1kg",
    medida : "1m"
}


const nuevoProducto = {...producto, ...medidas}; // sintaxis para unir 2 objetos

console.log(nuevoProducto);
