const tweet = "Monitor de 20\"";
const producto2 = "Monitor HD";

// const producto2 = String("monitor 30 pulgadas");
// const producto3 = new String ("Monitor 40 Pulgadas");

//lenght es para saber la extension de un string
console.log(tweet.length);
console.log(producto2);

// INDEXOF es para encontrar un elemento en un string
// si es 0 o mayor significa que lo ha encontrado
// si es un numero negativo significa que no lo ha encontrado
console.log(tweet.indexOf("20"))
console.log(tweet.indexOf("20"))

// INCLUDES busca la cadena indicada y devuelve un valor booleano
//Dependiendo si fue encontrado o no
console.log(tweet.includes("de"))
console.log(producto2.includes("laptop"))

