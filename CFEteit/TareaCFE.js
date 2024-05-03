const saludo = 'Hola';

console.log(saludo);


//Ciclo for que vaya del uno al cien
//Si el numero es divisible entre 3, mostrar en consola: 'Fizz'
//Si el numero es divisible entre 5, monstrar en consola: 'Buzz'
//Si el numero es divisible entre 3 y 5 mostrar en consnumero'Fizzb



for (let numero = 1; numero <= 100; numero++) {
    if (numero % 3 == 0 && numero % 5 === '0') {
        console.log(numero, 'FizzBuzz');
    } else if (numero % 3 == 0) {
        console.log(numero, 'Fizz');
    } else if (numero % 5 == 0) {
        console.log(numero, 'Buzz');
    } else {
        console.log(numero)
    }
        
}



