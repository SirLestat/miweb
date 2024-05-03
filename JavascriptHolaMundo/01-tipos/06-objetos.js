// Personaje de TV


let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

//Objeto Literal
//Par llave-valor
let personaje = {
    nombre: "Tanjiro",         // <-----  Propiedades
    anime: "Demon Sllayer",   // <-----   Propiedades  
    edad: 16,                 // <-----   Propiedades
};

console.log(personaje);
console.log(personaje.anime); // <----- Forma 1 de acceder a propiedades (Notación de punto))
console.log(personaje["nombre"]); // <----- Forma 2 de acceder a propiedades (Notación de corechetes)


//Editar propiedades de un objeto
personaje.edad = 17


//eliminar propiedades 
delete personaje.anime;

console.log(personaje);


//Ejercicios-------------------------------------------------------------------------------------------
/**
 * Crea un objeto literal llamado coche con las siguientes propiedades:
 * marca
 * modelo
 * color
 * 
 * 1. Muestra las propiedades del coche utilizando console.log y la notación de punto.
 * 2. Modifica la propiedad color del coche a "rojo".
 * 3. Muestra nuevamente las propiedades del coche para ver el cambio.
 * 4. Agrega una nueva propiedad llamada kilometraje con el valor 0.
 * 5. Muestra las propiedades del coche una vez más para ver la nueva propiedad.
 */

const coche = {
    marca: "Fiat",
    modelo: "Mobi",
    color: "Blanco"
};

console.log(coche.marca);
console.log(coche.color);

coche.color = "Gris";
console.log(coche.color);

coche.kilometraje = 0

console.log(coche);


/**Ejercicio 2
 * Crea un objeto literal llamado empleado con las siguientes propiedades:

nombre: 
apellido: 
departamento: 
salario: 

1. Muestra el nombre completo del empleado utilizando la concatenación de cadenas y la notación de punto.
2. Muestra el departamento del empleado utilizando la notación de punto.
3. Muestra el salario del empleado utilizando la notación de punto.
4. Aumenta el salario del empleado en un 10% utilizando la asignación aritmética y la notación de punto.
5. Muestra el nuevo salario del empleado utilizando la notación de punto.
 */

const empleado = {
    nombre: "Zaira",
    apellido: "Chavarín",
    departamento: "Data Analyst",
    salario: 60000
};

console.log(`Nombre: ${empleado.nombre} ${empleado.apellido} `);
console.log(`Departamento: ${empleado.departamento}`);
console.log(`Sueldo: ${empleado.salario}`);