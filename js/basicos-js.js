/* JS-3: JS LET vs VAR*/
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

/* JS 4: Constantes */

const PI = 3.1416;
console.log(PI)

const objeto = {
    nombre:"Sergio",
    edad:29
}

const colores=['blanco','negro','azul'];

console.log(objeto)
console.log(colores)

objeto.correo='sergio@mail.com'
colores.push('naranja')

console.log(objeto)
console.log(colores)