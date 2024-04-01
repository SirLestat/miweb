                 
function sumar(numero1, numero2) {   //Parametros van dentro de función        
    console.log(numero1 + numero2);      
}

sumar(10,8); //Argumentos van en la llmada a la función   
sumar(9,9);


const sumar2 = function() {
    console.log(3+3);        
}
sumar2()

// Preparar pizza

function prepararPizza (tipomasa,tiposalsa,tipoqueso){
    console.log(`Preparando una pizza con masas ${tipomasa}, salsa de ${tiposalsa} y queso ${tipoqueso}.`);
}

prepararPizza("Delgada", "Tomate con pesto", "mozzarella");


// Calcular total de una compra

function calcularTotal (precioProducto,cantidad){

    return precioProducto * cantidad;

}

const total = calcularTotal(1000,3);

console.log(`El total de la compra es: $${total}`);

// Crea una función que calcule el área de un triángulo

function areaTriangulo(base,altura) {
    const area =  base * altura / 2;
    console.log(`El area del triángulo es: ${area}`)
}

areaTriangulo(2,16);


// Crea una función que convierta una temperatura de grados Celcius a grados Fahrenheit

function celciusFahrenheit (grados) {
    const fahrenheit = (grados * 9/5) + 32;
    console.log(`La temperatura de Celcius a Fahrenheit es: ${fahrenheit.toFixed(2)}°`);
}

celciusFahrenheit(37);

// Función con parametros predeterminados 

function sumarDosNumeros (num1,num2 = 10) {
    const suma = num1 + num2;
    console.log(`La suma ee: ${suma}`);
}

sumarDosNumeros(10);