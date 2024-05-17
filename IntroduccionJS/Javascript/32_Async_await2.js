function hornearPastel() {
    return new Promise ((resolve) => {
        console.log("Horneando el pastel...");
        setTimeout(() => {
            resolve("Pastel horneado");
        }, 10000);
    });
}

function prepararEnsalada() {
    console.log("Preparando la ensalada...");
    return "Ensalada lista!"
}

async function prepararCena() {
    console.log("Empezando a preparar la cena...");

const pastel = await hornearPastel();
console.log(pastel);

const ensalada = prepararEnsalada();
console.log(ensalada);

console.log("Cena lista para servir")

}

prepararCena();

function hacerTarea(nombre) {
    return new Promise((resolve) => {
      console.log(`Haciendo la tarea ${nombre}...`);
      setTimeout(() => {
        resolve(`¡Tarea ${nombre} hecha!`);
      }, Math.random() * 3000); // Simula un tiempo aleatorio de hasta 3 segundos
    });
  }

  async function hacerTareas() {
    console.log("Empezando a hacer las tareas...");
  
    // Hacer la tarea 1 y esperar a que esté hecha
    const tarea1 = await hacerTarea("limpiar");
    console.log(tarea1);
  
    // Hacer la tarea 2 y esperar a que esté hecha
    const tarea2 = await hacerTarea("organizar");
    console.log(tarea2);
  
    console.log("¡Todas las tareas están hechas!");
  }
  
  hacerTareas();
  

  
  