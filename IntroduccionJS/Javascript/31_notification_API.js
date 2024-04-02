const boton = document.querySelector("#boton");

boton.addEventListener("clic", () => {
    Notification.requestPermission()
})

