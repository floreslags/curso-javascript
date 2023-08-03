// ----- JS 49: Symbols ---

/* let id = Symbol("id");
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
*/

// ----- JS 50: Sets -----

/* const set = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola","HOLA"]);

console.log(set);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

for (const item of set) {
    console.log(item);
}

set2.forEach(element => console.log(element));

let setArr = Array.from(set);
console.log(setArr[3])

set.delete("hola");
console.log(set);

console.log(set.has("HOLA"));
console.log(set.has(20));

set2.clear();
console.log(set2); */


// ----- JS 51: Map -----

/* const mapa = new Map();

mapa.set("name","Sergio");
mapa.set("lastName","Flores");
mapa.set("age",29);

console.log(mapa);

console.log(mapa.size);
console.log(mapa.has("email"));
console.log(mapa.has("name"));

console.log(mapa.get("name"));
console.log(mapa.set("name","Ezequiel"));

console.log(mapa);

mapa.delete("lastName");

mapa.set(19,"diecinueve")
mapa.set(false,"falso")
mapa.set({},{})

console.log(mapa);

for (const [key,value] of mapa) {
    console.log(`Clave: ${key} - Valor: ${value}`);
}

const mapa2 = new Map([
    ["name","Brenda"],
    ["age",1],
    ["animal","dog"],
    [null,"nulo"],
]);

console.log(mapa2);

const keysm2 = [...mapa2.keys()];
const valuesm2 = [...mapa2.values()];

console.log(keysm2);
console.log(valuesm2); */

// ----- JS 52: WeakSets - WeakMaps -----

/* const ws = new WeakSet();

let valor1 = {"valor1":1}
let valor2 = {"valor2":2}
let valor3 = {"valor3":3}

ws.add(valor1);
ws.add(valor2);

console.log(ws);
console.log(ws.has(valor1));
console.log(ws.has(valor3));

ws.delete(valor2);
console.log(ws);

ws.add(valor2);
ws.add(valor3);
console.log(ws);

setInterval(() => console.log(ws), 1000);

setTimeout(() => {
    valor1=null;
    valor2=null;
    valor3=null;
    
}, 5000); */

/* const wm = new WeakMap();

let key1 = {};
let key2 = {};
let key3 = {};

wm.set(key1,1);
wm.set(key2,2);
console.log(wm);

console.log(wm.has(key1));
console.log(wm.has(key3));

wm.delete(key2);
console.log(wm);

wm.set(key2,2);
wm.set(key3,3);
console.log(wm);


setInterval(() => console.log(wm), 1000);

setTimeout(() => {
    key1 = null;
    key2 = null;
    key3 = null;
}, 5000); */