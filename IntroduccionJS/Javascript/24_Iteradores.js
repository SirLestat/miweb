//For loop
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

for(let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`${i} Es par`);
    } else {
        console.log(`${i} Es impar`);
    }
    
}

const carrito = [
    {nombre: "Monitor 20\"", precio: 500},
    {nombre: "Pantalla 50\"", precio: 6000},
    {nombre: "Tablet", precio: 719},
    {nombre: "Bocinas", precio: 1440},
    {nombre: "teclado", precio: 560},

];

for(let j = 0; j < carrito.length; j++ ) {
    console.log(carrito[j].nombre);
}


//While loop

let num = 1

while(num <= 100) {
    console.log(num)
    num++;
}




//Do while loop

let num1 = 100;

do {
    console.log(num1);
    num1++;
} while(i < 10);