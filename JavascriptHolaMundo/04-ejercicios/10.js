/**
 * Crear array de longitud N y que sus elementos sean
 * numeros de 1 hasta N
 */



let longitud = -6;

function crearArray(n) {
    if (n <= 0){
        return 'Número incorrecto'
    }

    let numeros = [];
    for (let i = 0; i < n; i++) {
        numeros[i] = i + 1;
    }
    return numeros;
}   

let resultado = crearArray(longitud);
console.log(resultado);