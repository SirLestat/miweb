let animales = ["chanchito","caballo"]; //<----- Array o Colección.

console.log(animales);
console.log(animales[0]);   //<----- Imprime el elmento almacenado en el índice seleccionado.

animales[2] = "dragón";     //<----- Agrega elementos en el índice seleccionado.
console.log(animales);

animales[10] = "pez";   //<----- Agrega elementos en el índice seleccionado dejando vacios los índices anteriores.
console.log(animales[7]);   //<-----si se intenta acceder a un índice vacio, se arrojará un mensaje de "Undefined".

console.log(typeof animales);   //<----- el tipo de dato de los arrays es de objeto.
console.log(animales.length);   //<----- Método para saber la longitud total del la colección o array.

