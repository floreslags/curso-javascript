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

// ----- JS 53: Iterables - Iterators -----

/* const iterable = [1,2,3,4,5];

// Se accede al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

let next = iterador.next();

while(!next.done){
    console.log(next.value);
    next = iterador.next();
} */



// ----- JS 54: Generators -----

/* function* iterable(){
    yield "Hello";
    console.log("Hello console");
    yield "Hello 2";
    console.log("We keep working with more instructions");
    yield "Hello 3";
    yield "Hello 4";
}

let iterator = iterable();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

for (const y of iterator) {
    console.log(y);
}

const arr = [...iterable()];

console.log(arr);

function sqrt(value){

    setTimeout(() => {
       return console.log({value,result:value*value}) 
    }, Math.random() * 1000);
}

function* generator(){
    console.log("Generator start");
    yield sqrt(0);
    yield sqrt(1);
    yield sqrt(2);
    yield sqrt(3);
    yield sqrt(4);
    yield sqrt(5);
    console.log("Generator end");
}

let gen = generator();

for (const y of gen) {
    console.log(y)   
} */

// ----- JS 55: Proxies -----

/* const person = {
    name:"",
    lastName:"",
    age:0
}

const handler = {
    set(obj,prop,value){
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad ${prop} no existe en el objeto persona`)
        }
        if((prop === "name" || prop === "lastName") && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(value))){
            return console.error(`La propiedad ${prop} solo acepta letras y espacios en blanco.`)
        }
        obj[prop] = value;
    }
}

const sergio = new Proxy(person,handler);

sergio.name = "Sergio45";
sergio.lastName = "Flores+";
sergio.age = 29;
sergio.tw = "@sergiofols";

console.log(person);
console.log(sergio); */

// ----- JS 56: Propiedades dinámicas de los Objetos / Computed properties -----

/* const userObject = {
    [`id_${Math.round(Math.random()*100 + 5)}`]:"Valor aleatorio"
}

const users = ["Bruno","Brenda","William"];

users.forEach((user,index)=>userObject[`id_${index}`]=user);

console.log(userObject); */

// ----- JS 57: This -----
/* console.log(window);
console.log(this === window);

this.nombre = "contexto global";

function print(){
    console.log(this.nombre);
}

print();

const obj = {
    nombre:'contexto Objeto',
    imprimir:function(){
        console.log(this.nombre);
    }
}

obj.imprimir();

const obj2 = {
    nombre:'Contexto Objeto 2',
    print
}

obj2.print()

const obj3 = {
    nombre:'contexto Objeto 3',
    imprimir:()=>{
        console.log(this.nombre);
    }
}

obj3.imprimir();

function Persona (nombre){
    const that = this;
    that.nombre = nombre;
    // this.nombre = nombre;
    // return console.log(this.nombre);
    return function(){
        console.log(this.nombre);
    }
    return ()=>console.log(that.nombre,45);
}

let jon = new Persona("Jon");
jon();
 */


// ----- JS 58: Call - Apply - bind -----

/* this.lugar = "Contexto Global";

function saludar(saludo,who){
    console.log(`${saludo} ${who} desde el ${this.lugar}`);
}

saludar();

const obj={
    lugar:"Contexto Objeto"
}

saludar.call(null,"Hola","Sergio");
saludar.call(this,"Hola","Sergio");
saludar.call(obj,"Hola","Sergio");
saludar.apply(this,["Adios","Sergio"]);
saludar.apply(null,["Adios","Sergio"]);
saludar.apply(obj,["Adios","Sergio"]);

const persona = {
    nombre:"Sergio",
    saludar:function(){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();

const otraPersona = {
    saludar:persona.saludar.bind(persona)
}

otraPersona.saludar() */

// ----- JS 59: JSON (JavaScript Object Notation)  -----

/* const json = {
    string:"Sergio",
    number:29,
    boolean:true,
    array:["running","programing","body stretching"],
    object:{
        tw:"@sergiofols",
        email:"sergiofl@mail.com"
    },
    null:null
}

console.log(json);
console.log("{}");
console.log("[]");

console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("null"));
console.log(JSON.parse('{"string":"Sergio","number":29,"boolean":true,"array":["running","programing","body stretching"],"object":{"tw":"@sergiofols","email":"sergiofl@mail.com"},"null":null}'));

//console.log(JSON.parse("undefined"));


console.log(JSON.stringify([]));
console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({x:2,y:3}));

console.log(JSON.stringify(json)); */