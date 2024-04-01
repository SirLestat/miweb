const metodoPago = "efectivo"

switch(metodoPago) {
    case "tarjeta":
        console.log("Pagaste con tarjeta");
        break; // Importante terminar con break para finalizar correctamente el bloque de código

    case "cheque":
        console.log("El usuario paga con cheque");
        break;
    
    case "efectivo":
        console.log("Efectivo es el método de pago seleccionado")
        break;

    default:
        console.log("Selecciona un método de pago valido");


}

// switch sirve para revisar multiples condiciones