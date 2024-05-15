let obj = {};
let obj2 = new Object();
/**
* new Array();[]
• new String(); "" "
* new Number(); 12
* new Boolean(); tRue false
*/

function Usuario() {
    this.name = "Chanchito"
}
let user = new Usuario();
console.log(user.constructor);