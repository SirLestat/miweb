let i = 0;

while (i < 6) {
    i++;
    if (i === 2) {
        continue; //    <------ omite el valor encontrado y continua con el siguiente
    }
    if (i === 4) { 
        break; //   <----- interrumpe el ciclo cuando se cumple la consición
    }
    console.log(i);
}