// This 


const reservacion = {
    nombre : "Juan",
    apellido : "De la torre",
    total : 5000,
    pagado : false,
    informacion : function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}


const reservacion2 = {
    nombre : "Alejandro",
    apellido : "Santiago",
    total : 5000,
    pagado : false,
    informacion : function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion()
reservacion2.informacion()