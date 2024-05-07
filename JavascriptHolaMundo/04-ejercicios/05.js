/**
 * Crea un algoritmo que devuelva la cantidad de numeros
 * positivos en un array
 */


let array = [2, 5, 7, 15, -5, -100, 55];    //<----- Se declara una variable que almacena un arreglo de numeros.

function nPositivos(arr) {      //<-----Función con parametro 'arr' que tomará como argumento el arreglo 'array' antes declarado.
    let n = 0;      //<----- Se inicializa un contador que almacenará la cantidad de números positivos identificados.
    for (num of arr) {  //<----- Ciclo FOR OF para iterar sobre cada elemento del arreglo.
        if (num > 0) {  //<----- Verifica que elemento es positivo si se cumple la condición 'num > 0'.
            n++;    //<----- Operador que suma 1 a la variable 'n'.
        }
    }
    return n    //<----- Valor de retorno de toda la función
}

let positivos = nPositivos(array);  //<----- Se declara una variable que almacenará el valor retornado de la función 'nPositivos'.
console.log(positivos); //<----- Imprime el valor almacenado.