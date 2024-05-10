const user = {
    id: 1,
};

user.name = 'Alejandro';
user.guardar = function() {
    console.log('Guardando',user.name);
}


user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

user1 = Object.freeze({id: 1});