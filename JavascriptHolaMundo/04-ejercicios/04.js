/**Crear algoritmo que devuelva el numero menor y mayor de un array */

// let array = [2, 5, 7, 15 , -5, -100, 55];


// function getMenorMayor(arr) {
//     let menor = arr[0];
//     let mayor = arr [0];

//     for (numero of arr) {   //<----- Bucle for of itera sobre cada elemento del arreglo, en comparación con el bucle simple for que recorre la posicion o el indice
//         menor = menor < numero ? menor : numero;
//         mayor = mayor > numero ? mayor : numero;
//     }
//     return[menor,mayor];
// }

// let numeros = getMenorMayor(array)
// console.log(numeros)


let arreglo = [2, 5, 10, -9, 1, 7, 90, 100,101];

function obtenerMenorMayor(arregl) {
    let nMayor = 0 //arreglo[0];
    let nMenor = 0 //arreglo[0];
    
    for (num of arregl) { //<----- Bucle 'FOR OF' itera sobre cada elemento del arreglo, en comparación con el bucle simple 'FOR' que recorre solo la posicion o el indice.
        if (nMenor < num) { // <----- Verifica que la variable 'nMenor' sea menor al primer elemento encontrado en el arreglo.
            nMenor = nMenor; 
        } else {
        nMenor = num //<----- como 2 no es menor que 2 se asigna el número 2.
        }

        if (nMayor > num) { //<----- verifica que la variable 'nMayor' sea mayor al primer elemento en este caso 2
            nMayor = nMayor; 
        } else {
        nMayor = num; //<----- como 2 no es mayor a 2 se asigna el número 2.
        }

        /*
        En el siguiente ciclo, se comparará el valor de la variable nMenor que es el numero 2 con el siguiente valor del arreglo que es el numero 5, 
        en este caso, si es menor así que conserva el mismo valor de 2

        la variable nMayor ahora comparará si el numero 2 es mayor que el número 5, como no se cumple la condición entonces se asigna el número 5 a la variable nMayor.

        se repite el ciclo hasta que se comparen todos los números del arreglo y se encuentre el mayor y el menor
        */
    }
    return [nMenor,nMayor]; //<----- retorna el valor asociado a cada variable.
}

let numeross = obtenerMenorMayor(arreglo);
console.log(numeross)