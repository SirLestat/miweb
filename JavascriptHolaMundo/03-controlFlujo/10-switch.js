let accion = 'f';

switch (accion) {
    case 'listar':
        console.log('Accion de listar');
        break;  //  <----- 'Case' siempre debe finalizar con break, en caso contrario no podrá ejecutarce el siguiente case o bloque de código
    case 'guardar':
        console.log('Accion de guardar');
        break;
    default:    //  <----- Se utiliza cuando no se encuentra una variable que coincida con 'case'
        console.log('Acción no reconocida')
    
}