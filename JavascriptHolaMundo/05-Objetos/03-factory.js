
function crearUsuario(name,email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log(" recuperando clave...");
            },
        };  
}

let user1 = crearUsuario('Alejandro','alex@mail.com');
let user2 = crearUsuario('Zaira','zai@mail.com');


console.log(user1,user2)