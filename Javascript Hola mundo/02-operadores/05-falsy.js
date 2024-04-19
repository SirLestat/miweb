//short-circuit


//Falsy

//Falso
//false
//0
//''
//null
//undefined
//NaN

let nombre = 'Chanchito feliz';
let username = nombre || 'Anónimo';

console.log(username);

function fn1() {
    console.log('Soy funcion 1');
    return true;
}

function fn2() {
    console.log('Soy funcion 2');
    return true;
}
