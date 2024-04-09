function obtenerEmpleados() {
    const archivo  = "empleados.json";
    
    fetch(archivo)
        .then(resultado => resultado.json())
        .then( datos => {
            console.log(datos);
        })
        .catch(error => {
            console.log("Error al obtener los empleados:", error)
        });
}

obtenerEmpleados();