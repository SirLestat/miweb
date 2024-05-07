/**
 * crear algoritmo que devuelva el precio del producto mas impuesto
 */


function precioFinal(precio, impuesto) {
    let total = precio * impuesto / 100;
    let final = precio + total;

return final;
}

let precioProducto = precioFinal(556, 15);
console.log(precioProducto);