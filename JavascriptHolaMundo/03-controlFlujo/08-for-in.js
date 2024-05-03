let user = {
    id: 1,
    name: 'alejandro',
    edad: '25'
};

for (let prop in user) {  //<-- es una convencion para llamar a la variable iteradora de propiedades
    console.log(prop, user[prop]);
}