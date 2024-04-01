const puntaje = 1000;

if(puntaje === 1000) {
    console.log("El puntaje es 1000");
} else {
    console.log("No es igual")
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log("El usuario puede pagar")
} else {
    console.log("Fondos insuficientes")
}

const rol = "administrador";
if(rol === "administrador") {
    console.log("Tiene acceso a todo el sistema");

} else if(rol === "editor") {
    console.log("Puedes entrar, pero el acceso es limitado")
   
} else {
    console.log("no tienes acceso")
}