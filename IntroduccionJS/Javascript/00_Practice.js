// Saludo simple

console.log("Hola Mundo");

const nombre = "Juan";
const edad = 30;

// Suma de 2 números
//console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);

const num1 = 5;
const num2 = 8;

const sum = num1 + num2;

console.log(`La suma es: ${sum}`);

// Saludo a usuario

/*const nombreU = prompt("Introduce tu nombre: ");

console.log(`¡Hola ${nombreU}!`)
*/

// Calcular el area de un triángulo

const base = 6;
const altura = 9;

const area = base * altura / 2;

console.log(`El area del triángulo es: ${area}`);

//Convertir temperatura de farenheit a celcius

const farenheit = 106

const celcius = (farenheit - 32) * 5/9;

console.log (`La temperatura en grados celcius es de: ${celcius.toFixed(2)}`);

// Lista de nombres y mostrarlo en pantalla

const lista = ["Juan", "Maria", "Pedro", "Ana"]

for (const nombre of lista) {
    console.log(nombre)
}

// Sentencias condicionales 

/* const edad1 = prompt("Introduce tu edad: ")

if (edad1 >= 18) {
    alert("Eres mayor de edad")
} else {
    alert("Eres menor de edad")
}
*/ 

//Descuento de producto

let precioProducto = 655

if (precioProducto > 100) {
    const descuento = precioProducto * 0.2

    console.log(`El producto tiene un descuento de $${descuento.toFixed(2)} y el precio final es: $${precioProducto - descuento}`);
} else {
    console.log(`El precio final es de: ${precioProducto}`);
};


//Escribe un programa que determine si un número es par o impar

const numero = 1;

if (numero % 2 === 0) {
    console.log("El numero es par");
} else {
    console.log("El número es impar");
}

// Dia de la semana

const numerodia = 2;

switch (numerodia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5: 
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("domingo");
        break;
}


// Bucle For 

    // for (let i=1; i<=10; i++){
    //     console.log(i);
    // }

// Bucle While

    // let num = 0
    // while (num < 10) {
    //     num++
    //     console.log(num)
    // }

// Escribe un programa que cálcule el promedio de de 5 calificaciones

//let calif = prompt("Digita una calificación:");

/*let contador = 1;
let suma = 0;

while (contador <= 5){
    let calif = prompt("Digita una calificación:");
    calif = parseInt(calif);
    suma += calif ;
    contador ++;
    
}
 
const promedio = suma / (contador - 1);
console.log(promedio.toFixed(2));
*/


//Crea una lista de frutas y muestra un mensaje que te recuerde una por una, las frutas que debes comprar!

let frutas = []

frutas.push("Naranja","Mandarina","Limón")
frutas.push("Sandía","Platano","Melocotón")

for (let fruta in frutas) {
    console.log(frutas[fruta])
}

//Crea una lista de 10 numeros entre el 1 y el 100, posteriormente obten su cuadrado y su cubo

let aleatorios = []

// Generar 10 números aleatorios entre 1 y 100
const numerosAleatorios = [];
for (let i = 0; i < 10; i++) {
  numerosAleatorios.push(Math.floor(Math.random() * 100) + 1);
}

// Mostrar una tabla con los números, su cuadrado y su cubo
console.table([
  ["Número", "Cuadrado", "Cubo"],
  ...numerosAleatorios.map((numero) => [numero, numero ** 2, numero ** 3]),
]);
