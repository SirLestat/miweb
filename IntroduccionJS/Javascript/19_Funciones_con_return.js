function sumar(n1, n2) {
    return n1 + n2;
}

const resultado = sumar(8, 2);

console.log(resultado);


/*---------------------------------------------------*/

let total = 0;

function agregarCarrito(precio) {
    return(total += precio);
}

function impuesto (total) { 
    return 1.15 * total;
}

total = agregarCarrito(1000);
agregarCarrito(1000);
agregarCarrito(65);

const totalAPagar = impuesto(total);

console.log(`Total sin impuestos: $${total} 
Total espues de impuestos: $${totalAPagar}`);
