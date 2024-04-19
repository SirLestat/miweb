function descargarNuevosclientes() {
    return new Promise( resolve => {
        console.log("Descargando clientes... Espere...");

        setTimeout( () => {
            resolve("Los clientes fueron descargados")
        },5000);

    })
}

async function app() {
    try {
        const resultado = await descargarNuevosclientes()
        console.log(resultado)
    } catch (error) {
        console.log(error);
    }
   
}

app();

