/**
 * Nombre: ancho x alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1140
 * FHF 1920 X 1080
 * HD 1280 X 720
 */

function nombreResolucion(ancho, alto) {

    if (ancho > 7680 && alto > 4320) {
        return 'Resolución 8K';
    } else if (ancho >= 3840 && alto >= 2160) {
        return 'Resolución 4K';
    } else if (ancho >= 2560 && alto >= 1440) {
        return 'Resolución WQHD';
    } else if (ancho >= 1920 && alto >= 1080) {
        return 'Resolución FHD';
    } else if (ancho >= 1280 && alto >= 720) {
        return 'Resolución HD';
    } else {
        return false;
    }
}

let nombre = nombreResolucion(5000, 1440);
console.log(nombre);