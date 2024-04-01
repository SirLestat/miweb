const meses = ["Enero", "Febrero","Marzo","Abril","Mayo"];

const carrito = [
    {nombre: "Monitor 20\"", precio: 500},
    {nombre: "Pantalla 50\"", precio: 6000},
    {nombre: "Tablet", precio: 719},
    {nombre: "Bocinas", precio: 1440},
    {nombre: "teclado", precio: 560},

]

//foreach itera sobre cada elemento

 meses.forEach(function(mes) {
     if(mes == "Marzo"){ //Verifica que si existe 
         console.log("Marzo si existe")
     }
 });

//includes funciona bien con objetos planos no tanto con objetos
let resultado = meses.includes("Marzo");

//some ideal para arreglo de objetos
resultado = carrito.some(function(product){
    return product.nombre === "Tablet"
});

console.log(resultado);

//REDUCE toma todos los elementos y entraga un resultado 

resultado = carrito.reduce(function(total,producto){
    return total + producto.precio
},0);



//FILTER obtiene elementos dependiendo de la necesidad  

resultado = carrito.filter(function(producto){
    return producto.precio > 1000
});


console.log(resultado);