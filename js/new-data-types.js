// ----- JS 49: Symbols ---

let id = Symbol("id");
let id2 = Symbol("id2");


console.log(id === id2);
console.log(id,id2);
console.log((typeof id),(typeof id2));

const NAME = Symbol();
const SAY_HELLO = Symbol();

const persona = {
    [NAME]:"Sergio"
};

console.log(persona);

persona.NOMBRE = "Sergio Flores";

console.log(persona);
console.log(persona[NAME]);

persona[SAY_HELLO] = function(){
    console.log("Hello friend!");
}

console.log(persona);
persona[SAY_HELLO]();

// Recorrer propiedades de un objeto

for (const prop in persona) {
    console.log(prop);
    console.log(persona[prop]);
}

// Método para obtener los simbolos de un objeto en forma de arreglo
console.log(Object.getOwnPropertySymbols(persona));