console.log("Programa para calcular el area de un triangulo")

// Declaracion de la funcion

/* function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const areatriangulo = calcularAreaTriangulo(9,6);

console.log(`El area del triangulo es: ${areatriangulo}`);
*/

//Declaración de función
sumar();                     
function sumar() {           
    console.log(10 + 10);      
}


// Expresión de la función
sumar2()
const sumar2 = function() {
    console.log(3+3);        
}

//IIFE funciones que se invocan ellas mismas y sirven para proteger variables 
//y no se mezclen con otros archivos, (no se recomienda para reutilizacion)

(function() {
    console.log("Esto es una función");
})();

// Pregunta para trabajo //
/*JS tiene algo llamado HOISTING que son 2 etapas una de creación (donde se crean todas las funciones)
y otra de ejecucion, donde ejecutan todas las funciones declaradas 
en el siguiente ejemplo se puede ver el funcionamiento del hoisting:

sumar();                     
function sumar() {           
    console.log(10 + 10);      <------------- Si funciona, se ejecuta la función y arroja el resultado porque es una función
}


// Expresión de la función

sumar2();
const sumar2 = function() {
    console.log(3+3);         <--------------- No funciona porque se toma como variable
}



*/