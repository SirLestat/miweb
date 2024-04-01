//Arreglos o Arrays

const numeros = [10,20,30,40,50];

const meses = ["Enero", "Febrero","Marzo","Abril","Mayo"]

//Acceder a los valores de un objeto por su indice
console.log(numeros[0])

//conocer la extension de un arreglo

console.log(numeros.length)

numeros.forEach(function(numeros) {
    console.log(numeros);
})

// agregar elemntos a un arreglo

numeros[5] = 60; // Reemplaza elmento si el indice existe y si no, lo agrega
console.table(numeros);
numeros.push("Hola"); //agrega elementos al final del arreglo **se recomienda no modificar arreglos originales**

numeros.unshift("INICIO"); // agrega elementos al inicio del arreglo

// Eliminar elementos de un arreglo

meses.pop(); //Elimina el ultimo elemento del arreglo y lo devuelve
meses.shift(); // Elimina el primer elemento de un arreglo


meses.splice(2,1); // elimina elementos por indice, 2 indica el indice y 1 indica los elementos a eliminar

console.table(meses);


//Se reomienda crear nuevos arreglos en vez de modificar el original
//Rest Operator o Spread Operator nos ayuda para este objetivo

const nuevoArreglo = [...meses,"Junio",]; // "...meses" sirve para "copiar" el arreglo y agregarle otro valor al final
const enuevoArreglo = ["diciembre", ...meses]; // en este caso es similar, pero agrega el valor al inicio
console.log(enuevoArreglo);

/**/