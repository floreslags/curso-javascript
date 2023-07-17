/* Fundamentos JS LET vs VAR*/
var hola = "Hola mundo";
console.log(hola)

let hello = "Hello world";

console.log(hola)
console.log(hello)
console.log(window.hola)
console.log(window.hello)

/* Ejemplo con VAR */

var musica = "Rock";
console.log("Variable música antes del bloque", musica);

{
    var musica = "Pop";
    console.log("Variable música dentro del bloque", musica);
}
console.log("Variable música después del bloque", musica);

/* Ejemplo con LET */

let  musik = "Rock";
console.log("Variable música antes del bloque", musik);

{
    let  musik = "Pop";
    console.log("Variable música dentro del bloque", musik);
}

console.log("Variable música después del bloque", musik);