const user = {
    id: 1,
};

user.name = 'Alejandro';    //<----- se usa la notación de punto para asignar propiedades a un objeto
user.guardar = function() {     //<----- tambien se le pueden agregar funciones como propiedad a un objeto
    console.log('Guardando',user.name);
}


user.guardar(); //<----- se puede acceder y usar las funciones de los objetos

delete user.name;   //<----- 'delete' sirve para eliminar propiedades de un objeto
delete user.guardar;

console.log(user);

//const user1 = Object.freeze({id: 1});     //<----- 'freeze' sirve para que no se puedan modificar las propiedades ni valores de un objeto
const user1 = Object.seal({id: 2}); //<----- se usa para no poder modificar sus propiedades, pero si sus valores.
user1.id = 2;
user1.name = 'Alex';
console.log(user1)