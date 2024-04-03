const boton = document.querySelector("#boton1");

boton.addEventListener("click", function () {
    Notification.requestPermission()
        .then(resultado => console.log( `El resultado es ${resultado}`))

});

if (Notification.permission == "granted")  {
    new Notification ("Esta es una notificación", {
        icon : "/img/le.png",
        body : "Lechuga"
    })
        
} 