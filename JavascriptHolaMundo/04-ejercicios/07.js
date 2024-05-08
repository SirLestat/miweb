/**
 * Crear algoritmo que tome un array de objetos
 * y devuelva un array de pares
 */

let array = [{ //<----- Se declara el arreglo que se pasará como argumento en la función 'toPairs'
    id: 1,
    nombre: 'Alejandro'
}, {
    id: 2,
    nombre: 'Zaira'
}, {
    id: 3,
    nombre: 'Perrete'
}];


// let pares = [
//     [1, {id: 1, name: 'Alejandro'},
//     [2, {id: 2, name: 'Zaira'}],
//     [3, {id: 3, name: 'Perrete'}],
//     ]
// ];

function toPairs(arr) {
    let pairs = []; //<----- Se declara una variable que almacenará el arreglo antes declarado
    for (idx in arr) {  //<----- Se inicia un ciclo for que iterará sobre cada indice 
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);