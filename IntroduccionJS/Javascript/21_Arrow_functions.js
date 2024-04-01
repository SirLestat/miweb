// Arrow functions

const sumar2 = (n1, n2) => {
    console.log(n1 + n2);
}

sumar2(5,9);


const aprendiendo = (tecnologia) => {
    console.log(`aprendiendo ${tecnologia}`)
}

aprendiendo("JavaScript");

/**-------------------------------------------------------------------------------- */
const meses = ["Enero", "Febrero","Marzo","Abril","Mayo"];

const carrito = [
    {nombre: "Monitor 20\"", precio: 500},
    {nombre: "Pantalla 50\"", precio: 6000},
    {nombre: "Tablet", precio: 719},
    {nombre: "Bocinas", precio: 1440},
    {nombre: "teclado", precio: 560},

];

//foreach itera sobre cada elemento

 meses.forEach(mes => {
     if(mes == "Marzo"){ //Verifica que si existe 
         console.log("Marzo si existe")
     }
 });


//some ideal para arreglo de objetos
resultado = carrito.some(product => {product.nombre === "Tablet"
});

console.log(resultado);

//REDUCE toma todos los elementos y entraga un resultado 

resultado = carrito.reduce((total,producto) => {total + producto.precio
},0);



//FILTER obtiene elementos dependiendo de la necesidad  

resultado = carrito.filter (producto => producto.precio > 1000);


console.log(resultado);