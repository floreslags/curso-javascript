/* JS-3: JS LET vs VAR*/
//var hola = "Hola mundo";
//console.log(hola)

//let hello = "Hello world";

//console.log(hola)
//console.log(hello)
//console.log(window.hola)
//console.log(window.hello)

/* Ejemplo con VAR */

//var musica = "Rock";
//console.log("Variable música antes del bloque", musica);

//{
//    var musica = "Pop";
//    console.log("Variable música dentro del bloque", musica);
//}
//console.log("Variable música después del bloque", musica);

/* Ejemplo con LET */

//let  musik = "Rock";
//console.log("Variable música antes del bloque", musik);

//{
//    let  musik = "Pop";
//    console.log("Variable música dentro del bloque", musik);
//}

//console.log("Variable música después del bloque", musik);

/* JS 4: Constantes */

//const PI = 3.1416;
//console.log(PI)

//const objeto = {
//    nombre:"Sergio",
//    edad:29
//}

//const colores=['blanco','negro','azul'];

//console.log(objeto)
//console.log(colores)

//objeto.correo='sergio@mail.com'
//colores.push('naranja')

//console.log(objeto)
//console.log(colores)

/* JS 5: Strings - Cadenas de texto */

/* let nombre = 'Sergio'; */
//let nombre = "Sergio";
//let apellido = "Flores";
//let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae. Facere natus impedit, placeat sunt voluptatibus porro aperiam nulla a eius vel, laboriosam repellendus harum deleniti perferendis reprehenderit exercitationem sequi."

//let saludo = new String("Hello world");

//console.log(nombre)
//console.log(apellido)
//console.log(saludo)

/* => Invocación de propiedades de tipo string */
//console.log(nombre.length)
//console.log(apellido.length)
//console.log(saludo.length)

/* => Invocación de métodos de tipo string */
//console.log(nombre.toUpperCase());
//console.log(apellido.toLowerCase());
//console.log(lorem.includes("amet"));
//console.log(lorem.includes("sergio"));
//console.log(lorem.trim()) // Quitar espacios en blanco
//console.log(lorem.split(" "))
//console.log(lorem.split(","))

/* JS 6: String templates |  Plantillas de las cadenas de texto */

//let concatenation = "Hola mi nombre es " + nombre + " " + apellido + ".";
//let interpolation = `Hola mi nombre es ${nombre} ${apellido}.`;

//console.log(concatenation);
//console.log(interpolation);

//let seasons =`
//    <ul>
//        <li>Primavera</li>
//        <li>Verano</li>
//        <li>Otoño</li>
//        <li>Inviern</li>
//    </ul>
//`;

//console.log(seasons)

/* JS 7: Números */

//let a = 2;
//let b = new Number(1);
//let c = 7.19;
//let d = "5.6";

//console.log(a);
//console.log(b);
//console.log(c);

/* Métodos con números */

//console.log(c.toFixed(1));
//console.log(c.toFixed(5));
//console.log(parseInt(c));
//console.log(parseFloat(c));
//console.log(typeof(c));
//console.log(typeof(d));
//console.log(a + b);
//console.log(c + d);
//console.log(c + parseInt(d));
//console.log(c + parseFloat(d));

/*JS 8: Booleans */

//let verdadero = true;
//let falso = false;

//console.log(verdadero);
//console.log(falso);

/*Valores truthy y falsy */

/*JS 9: Undefined-NaN-Null */

//let indefinida;

//console.log(indefinida);

//let nulo = null;
//console.log(nulo);

//let noEsUnNumero = "hola" * 3.7;
//console.log(noEsUnNumero)

/*JS 10: Funciones */

// Función simple

//function funcionSimple(){
//    console.log("Uno");
//    console.log("Dos");
//    console.log("Tres");
//}

//funcionSimple();

//Retorno de valores

//function retornarValor(){
//    return "La función devuelve una cadena de texto";
//}

//console.log(retornarValor());

// Función con parámetros

//function saludar(name,age){
//    console.log(`Hola, mi nombre es ${name} y tengo ${age}.`)
//}

//saludar('Sergio', 29);

// Funciones declaradas

//funcionDeclarada();

//function funcionDeclarada(){
//    console.log("Esto es una función declarada");
//}

//funcionDeclarada();

// Funciones anónimas o expresadas

 // funcionExpresada(); Este tipo de función no se puede invocar antes de ser declarada.

////const funcionExpresada = function (){
////    console.log("Esto es una función expresada")
////}

////funcionExpresada();

/*JS 11: Arreglos | Arrays */

// Arreglo vacío
//const empty = [];

//Arreglo con distintos valores

//const data = [1,true,"hola",["A","B","C"]];

//console.log(empty)
//console.log(data)

// Accediendo a los elementos de un arreglo
//console.log(data.length)
//console.log(data[2])
//console.log(data[3][2])

// Médodo Array.of()

//const dataDos = Array.of("X","Y","Z",9,8,7);
//console.log(dataDos)

// Método Array().fill() Llenar un arreglo con un determinado valor

//const data3 = Array(100).fill(false);
//console.log(data3);

// Método push() - Agrega elementos

//const colors = ["red","green","blue"];
//console.log(colors);
//colors.push("black");
//console.log(colors);

// Método pop() - Elimina el último elemento

// colors.pop()
// console.log(colors);

// Método Array.forEach()
// colors.forEach(function(item,index){
//     console.log(`<li id="${index}">${item}</li>`);
// })

/* JS 12: Objetos */
// const objeto1 = {

// }

// const alumno = {
//     nombre:'Sergio',
//     apellido:'Flores',
//     edad:29,
//     soltero:true,
//     pasatiempos:['Correr','Meditar','Programar','Ver Series y películas'],
//     contacto:{
//         email:'sergio@mail.com',
//         fb:'@sergiofol1093',
//         ig:'@sergiofol1093'
//     },
//     saludar:function(){
//         console.log("Hola!")
//     },
//     decirMiNombre:function(){
//         console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
//     }
// }

//Atributos del objeto
// console.log(alumno)
// console.log(alumno.nombre)
// console.log(alumno['apellido'])
// console.log(alumno.soltero)
// console.log(alumno.pasatiempos)
// console.log(alumno.pasatiempos[2])
// console.log(alumno.contacto)
// console.log(alumno.contacto.ig)

//Métodos del objeto

// alumno.saludar()
// alumno.decirMiNombre()

// console.log(Object.keys(alumno))
// console.log(Object.values(alumno))
// console.log(alumno.hasOwnProperty("nombre"))


/* 
// ***** JS 12: TIPOS DE OPERADORES *****

// --- Aritméticos: Suma, resta, producto, cociente, residuo, agrupación

// let aritmeticos = 5 + (5-10) *3;
// console.log(aritmeticos)

// let modulo = 5%2;
// console.log(modulo)
 
// --- Relacionales 

// console.log(8 > 9)
// console.log(9 > 8)
// console.log(8 >= 9)
// console.log(9 >= 8)
// console.log(7 < 7)
// console.log(7 <= 7)

// console.log(7 == 7)
// console.log('7' == 7)
// console.log(0 == false)

// console.log(7 === 7)
// console.log('7' === 7)
// console.log(0 === false)

// --- Incremento y decremento

// let incremento = 1;

// incremento+=2;
// console.log(incremento)

// incremento+=4;
// console.log(incremento)

// incremento *=3;
// console.log(incremento)

// console.log(incremento ++);
// console.log(incremento --)

// --- Lógicos

// console.log(true);
// console.log(!true);
// console.log(!true);

// console.log((9 === 9)|| ('9' === 9));
// console.log((9 === 9)&& ('9' === 9));
// console.log((9 === 9)&& ('9' === '9')); 
*/

// JS 14: Condicionales

// --- if --- else

//let edad = 17;
//edad = 29;

// if(edad > 17){
//     console.log("Eres mayor de edad");
// }else{
//     console.log("Eres menor de edad");
// }

// if(edad < 18){
//     console.log("Eres menor de edad");
// }else{
//     console.log("Eres mayor de edad");
// }

// if(edad >= 18){
//     console.log("Eres mayor de edad");
// }else{
//     console.log("Eres menor de edad");
// }

// if(edad <= 17){
//     console.log("Eres menor de edad");
// }else{
//     console.log("Eres mayor de edad");
// }

//let time = 4;

// if(time >= 0 && time <= 5){
//     console.log("Let me sleep :(");
// }else if(time >= 6 && time <= 11){
//     console.log("¡Buenos días!")
// }else if(time >= 12 && time <= 18){
//     console.log("¡Buenas tardes!");
// }else{
//     console.log("¡Buenas noches!");
// }

// if(time < 6){
//     console.log("Let me sleep :(");
// }else if(time > 5 && time < 12){
//     console.log("¡Buenos días!")
// }else if(time > 11 && time < 19){
//     console.log("¡Buenas tardes!");
// }else{
//     console.log("¡Buenas noches!");
// }

// --- Operador ternario: (condición)?verdadero:falso

// let edad = 17;
// edad = 29;

// let eresMayor = (edad >=18)?"Eres mayor de edad":"Eres menor de edad";
// console.log(eresMayor);

// --- Switch Case

// let dia = 1;

// switch (dia) {
//     case 0:
//         console.log('Domingo')
//         break;
//     case 1:
//         console.log('Lunes')
//         break;
//     case 2:
//         console.log('Martes')
//         break;
//     case 3:
//         console.log('Miércoles')
//         break;
//     case 4:
//         console.log('Jueves')
//         break;
//     case 5:
//         console.log('Viernes')
//         break;
//     case 6:
//         console.log('Sábado')
//         break;

//     default:
//         console.log('El día no existe')
//         break;
// }

/* 

// ----- JS 15: Loops / Ciclos -----

// --- Ciclo While

// let contador = 0;

// while(contador < 10){
//     console.log("While "+contador);
//     contador++;
// }

// --- Ciclo Do-While

// do{
//     console.log("Do While " + contador);
//     contador++;
// }while(contador<10)

// --- Ciclo for

// for (let i = 0; i < 10; i++) {
//     console.log("For " + i);
// }

// let numbers = [10,20,30,40,50,60,70,80,90];

// for (let n = 0; n<numbers.length;n++) { // Lectura de arreglos
//     console.log(numbers[n]);
// }

// --- For-in

// const sergio = {
//     name:'Sergio',
//     lastName:'Flores',
//     age:29
// }

// for (const propiedad in sergio) {
//     console.log(`key: ${propiedad} - Value: ${sergio[propiedad]}`);
// }

// --- For-Of

// let numbers = [10,20,30,40,50,60,70,80,90];

// for (const element of numbers) {
//     console.log(element);
// }

// let cadena = "Hola Mundo";

// for (const caracter of cadena) {
//     console.log(caracter);
// }
 */

// ----- JS 16: Manejo de errores / Error handling -----

// try {
//     noExiste;
// } catch (error) {
//     console.log(error)
// } finally {
//     console.log("Bloque finally")
// }

// --- Mensajes personalizados dentro de una estructura try-catch

// try {
//     let number = 'u';
//     if(isNaN(number)){
//         throw new Error('El caracter introducido no es un número')
//     }

//     console.log(number * number);

// } catch (error) {
//     console.log(`Se produjo el siguiente error: ${error}`)
// }

// ----- JS 17: Break & Continue

// let numbers = [10,20,30,40,50,60,70,80,90];

// for (let i = 0; i<numbers.length; i++) {
//     if(i === 5){
//         break;
//     }
    
//     console.log(numbers[i])
// }

// for (let i = 0; i<numbers.length; i++) {
//     if(i === 5){
//         continue;
//     }
    
//     console.log(numbers[i])
// }

// ----- JS 18: Destructuración

// const numbers = [1,2,3];

// Arreglo: Sin destructuración
// let uno = numbers[0],
// dos = numbers[1],
// tres = numbers[2];


// Arreglo: Con destructuración
// const [one,two,three] = numbers;

// console.log(uno,dos,tres);
// console.log(one, two, three);

// const person = {
//     name:'Sergio',
//     lastName:'Flores',
//     age:29
// }

// let {name,lastName,age} = person;
// console.log(name,age,lastName);

// ----- JS 19: Objetos Literales -----

// let nombre = "Will",
// edad = 3;

// const perro = {
//     nombre:nombre,
//     edad:edad,
//     ladrar:function(){
//         console.log('Guauu guauu!');
//     }
// }

// console.log(perro);
// perro.ladrar()

// const dog = {
//     nombre,
//     edad,
//     raza:'Callejero',
//     ladrar(){
//         console.log('Guau Guau Guauu')
//     }
// }

// console.log(dog)
// dog.ladrar()

// ----- JS 20: Parámetros REST & Operador Spread -----

// function sumar(a,b,...c){
//     let resultado = a+b;

//     c.forEach(function(n){
//         resultado +=n;
//     });

//     return resultado;
// }

// console.log(sumar(1,2));
// console.log(sumar(1,2,3));
// console.log(sumar(1,2,3,4));
// console.log(sumar(1,2,3,4,5));
// console.log(sumar(1,2,3,4,5,6));
// console.log(sumar(1,2,3,4,5,6,7));

// Spread operator

// const arr1 = [1,2,3,4,5],
// arr2 = [6,7,8,9,0];

// console.log(arr1,arr2);

// const arr3 = [...arr1,...arr2];
// console.log(arr3)


// ----- JS 21: Arrow Functions -----

// const saludo = function(){
//     console.log('Hola');
// }

// const saludo = ()=>{
//     console.log('Hola');
// }

//const saludo = ()=>console.log('Hola');

// const saludo = nombre =>console.log(`Hola ${nombre}`);

// saludo('Sergio');

// const sumar = function(a,b){
//     return a+b;
// }

// const sumar = (a,b) => a+b;

// console.log(sumar(9,9));

// const funcionRobusta = ()=>{
//     console.log('Uno');
//     console.log('Dos');
//     console.log('Tres');
// }

// funcionRobusta();


// Iteaciones con Arrow Functions
// const numbers = [1,2,3,4,5];

// numbers.forEach((el,index) => console.log(`${el} está en la posición ${index}`));

// Contexto "this"

// function perro(){
//     console.log(this)
// }

// perro()

// const perro = {
//     nombre:'Billy',
//     ladrar:function(){
//         console.log(this)
//     }
// }

// perro.ladrar()

// ----- JS 22: POO - Prototipos -----

/* const animal={
    nombre:'Snoopy',
    sonar(){
        console.log('Estoy vivo...');
    }
}

console.log(animal); */

/* const animal2={
    nombre:'Lola Bunny',
    sonar(){
        console.log('Estoy vivo...');
    }
}

console.log(animal2); */

// --- Función constructora con atributos y metodos

// function Animal(name,gender){
//     //Atributos
//     this.name = name;
//     this.gender = gender;
    
//     //Métodos
//     this.sound = function (){
//         console.log('Estoy vivo');
//     }
    
//     this.saludar = function(){
//         console.log(`Hola me llamo ${this.name}`)
//     }
// }

// const snoopy = new Animal('Snoopy','Male'),
// lolaBunny = new Animal('Lola Bunny','Female');

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sound();
// snoopy.saludar();

// lolaBunny.sound();
// lolaBunny.saludar();

// --- Función constructora con atributos
// function Animal(name,gender){
//     //Atributos
//     this.name = name;
//     this.gender = gender;

// }

// Agregación de los métodos a una función constructora

// Animal.prototype.sound = function (){
//     console.log('Estoy vivo');
// }

// Animal.prototype.saludar = function(){
//     console.log(`Hola me llamo ${this.name}`)
// }

// const snoopy = new Animal('Snoopy','Male'),
// lolaBunny = new Animal('Lola Bunny','Female');

// console.log(snoopy)
// console.log(lolaBunny)

// snoopy.sound();
// snoopy.saludar();

// lolaBunny.sound();
// lolaBunny.saludar();

/* 
// ----- JS 23: Prototype Heritage | Herencia Prototipica -----

function Animal(name,gender){
    //Atributos
    this.name = name;
    this.gender = gender;
}

// Agregación de los métodos a una función constructora

Animal.prototype.sound = function (){
    console.log('Estoy vivo');
}

Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.name}`)
}

// Herencia prototípica
function Dog(name,gender,size){
    this.super = Animal;
    this.super(name,gender);
    this.size = size;
}
// Creación de la instancia con la herenciade de atributos de la función padre
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

// Sobre escritura de los métodos de la función padre en el hijo
Dog.prototype.sound = function(){
    console.log("I am barking, I'm a Dog");
}

Dog.prototype.bark = function(){
    console.log("Guau Guau Guau!");
}

// Invocación de instancias del prototipo

const snoopy = new Dog("Snoopy","Male","Medium");
console.log(snoopy);

snoopy.bark();
snoopy.sound(); 
*/

/* 
// ----- JS 24: Classes & Heritage -----

// Creación de una clase
class Animal{
    constructor(name,gender){
        this.name = name;
        this.gender = gender;
    }

    sound(){
        console.log("I'm alive!");
    }

    sayHello(){
        console.log(`Hello, I'm ${this.name}`);
    }
}

// Herencia de una clase
class Dog extends Animal{

    constructor(name,gender,size){
        super(name,gender);
        this.size = size;
    }

    sound(){
        console.log("I'm a dog, I bark");
    }

    bark(){
        console.log('Wuuf! Wuuf!')
    }
}


//const mimi = new Animal('Mimi','Female');
//const scooby =  new Animal('Scooby','Male');

// console.log(mimi);
// console.log(scooby);

// mimi.sayHello();
// mimi.sound();

// scooby.sayHello();
// scooby.sound();

const scooby = new Dog('Scooby','Male','Giant');
console.log(scooby);

scooby.sound(); // Método sobreescrito en la clase "Perro"
scooby.bark(); // Método exclusivo de la clase "Perro"
scooby.sayHello(); // Método de la clase heredada de la clase padre "Animal"

 */

/* 
// ----- JS 25: Getters & Setters -----

// Creación de una clase
class Animal{
    constructor(name,gender){
        this.name = name;
        this.gender = gender;
    }

    sound(){
        console.log("I'm alive!");
    }

    sayHello(){
        console.log(`Hello, I'm ${this.name}`);
    }

}

// Herencia de una clase
class Dog extends Animal{

    constructor(name,gender,size){
        super(name,gender);
        this.size = size;
        this.breed = null;
    }

    sound(){
        console.log("I'm a dog, I bark");
    }

    bark(){
        console.log('Wuuf! Wuuf!')
    }

    static describe(){
        console.log("Dogs are mammalian animals that belong to the canine family. We are considered man's best friends.");
    }

    get getBreed(){
        return this.breed;
    }

    set setBreed(breed){
        this.breed = breed;
    }

}

const scooby =  new Animal('Scooby','Male');
console.log(scooby);

// No funcionó el llamado y declaración del atributo "breed" :(

 */

/* 
// ----- JS 26: Console Object -----

console.error('This is an error');
console.warn('This is a warning');
console.info('This is an info msg');
console.log("This is record or log msg");

let nombre = "Sergio",
apellido = "Flores",
edad = 29;

// Métodos de impresión e interpolación
console.log(nombre,apellido,edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);

console.log(`Hola mi nombre es %s %s y tengo %d años.`,nombre,apellido,edad); // %s = string; %d = digit

console.clear();

console.log(window);
console.log(document);
console.dir(window)
console.dir(document)
console.clear();

// Listas en consola
console.group('Cursos de @jonmircha en YT');
console.log("HTML");
console.log("CSS");
console.log("JS");
console.log("node JS");
console.groupEnd();

console.groupCollapsed('Cursos de @jonmircha en YT');
console.log("HTML");
console.log("CSS");
console.log("JS");
console.log("node JS");
console.groupEnd();

console.clear();

// Tablas en consola
console.table(Object.entries(console).sort());

// Tablas con arreglos
const numbers = [1,2,3,4,5];
const vowels = ["a","e","i","o","u"];

console.table(numbers)
console.table(vowels)

const dog = {
    name:'Bonnie',
    breed:'Boxer',
    color:'brown'
}

console.table(dog)

console.clear();

// Tiempo

console.time('Array eval');

// const arreglo = Array(1000000);

// for (let index = 0; index < arreglo.length; index++) {
//     arreglo[index] = index;    
// }

console.timeEnd('Array eval');

console.clear();

// .count() Mostrar cantidad de ejecuciones de un determinado bloque de código

// for (let index = 0; index < 100; index++) {
//     console.count('For Loop')
//     console.log(index);
// }

// Librerías de pruebas unitarias en JS 

let x = 3, 
y = 2,
testXY = "Se espera que X siempre sea MENOR QUE Y";

console.assert(x<y, {x,y,testXY});
 */

/* 
// ----- JS 27: Date Object -----

console.log(Date());

let fecha = new Date();

// Gestión de fechas
console.log(fecha);
console.log(fecha.getDate()); // Día del mes
console.log(fecha.getDay()); // Día de la semana
console.log(fecha.getMonth()); // Mes
console.log(fecha.getYear()); // NO ES UTIL 2023 - 1920
console.log(fecha.getFullYear()); // Año

// Gestión de tiempo
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

// Conversiones de fecha y tiempo en cadenas de texto
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());

// Gestión de fecha y tiempo en distintas zonas horarias
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

// TimeStamp 01-01-1970 
console.log(Date.now()); // Expresado en Segs.

let myBirthday = new Date(1993,9,27);
console.log(myBirthday); 

*/


/* // ----- JS 28: Math Object -----

console.log(Math);
console.log(Math.PI);

// Obtener el valor absoluto
console.log(Math.abs(-7,8)); 

// Redondeo de valores
console.log(Math.ceil(7.8));
console.log(Math.floor(7.8));
console.log(Math.round(7.8));
console.log(Math.round(7.2));

// Manejo de raices
console.log(Math.sqrt(8));

// Manejo de potencias
//console.log(Math.pow(base,exponente));
console.log(Math.pow(2,5));

// Identificar valores positivos o negativos
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));

// Valores aleatorios
console.log(Math.random()); // Valores entre 0 y 1
console.log(Math.random() * 1000); // Valores personalizados
console.log(Math.round(Math.random()*1000)); // Valores personalizados
 */


/* // ----- JS 29: OR/AND SHOR CIRCUIT -----

// --> OR

function sayHello(name){
    name = name || 'Unknown';
    console.log(`Hello ${name}`);
}

sayHello();
sayHello('Sergio');


// En estos casos se aplican los valores que tienen a VERDADERO posicionados a la IZQUIERDA.
console.log("String" || "Right value");
console.log(19 || "Right value");
console.log(true || "Right value");
console.log([] || "Right value");
console.log({} || "Right value");

// En estos casos se aplican los valores que tienen a VERDADERO posicionados a la DERECHA.
console.log(false || "Right value");
console.log(null || "Right value");
console.log(undefined || "Right value");
console.log(0 || "Right value");

// --> AND

// En estos casos se aplican los valores que tienen a FALSO posicionados a la IZQUIERDA.
console.log("String" && "Right value");
console.log(19 && "Right value");
console.log(true && "Right value");
console.log([] && "Right value");
console.log({} && "Right value");

// En estos casos se aplican los valores que tienen a FALSO posicionados a la DERECHA.
console.log(false && "Right value");
console.log(null && "Right value");
console.log(undefined && "Right value");
console.log(0 && "Right value"); */

/* 
// ----- JS 30: ALERT - CONFIRM - PROMP -----

//window.alert('This is an alert');
//window.confirm('This is a confirm msg');
//window.prompt('Ingrese un valor');

// Tratamiento de alertas
//let alerta = alert('Alert!');
//console.log(alerta);

// Tratamiento de confirmaciones
//let confirmacion = confirm('Confirmar?');
//console.log(confirmacion);


// Tratamiento de avisos
// let aviso = prompt('Ingrese un valor');
// console.log(aviso); 
*/

/* // ----- JS 31: Regular Expressions -----

let cadena="Lorem 85ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae quasi molestiae mollitia beatae natus earum, magnam iure doloremque a. Rem repudiandae quod est ullam neque numquam nemo, et animi?";

let expReg = new RegExp("lorem","ig");

//let expReg2 = /\d/ig;
let expReg2 = /lorem{1,}/ig;

// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

console.log(expReg2.test());
console.log(expReg2.exec()); */

/* // ----- JS 32: Immediately Invoked Function Expression -----

(
    function(){
        console.log("First IIFE")
    }
)();

(
    function(d,w,c){
        console.log("Second IIFE");
        console.log(d);
        console.log(w);
        c.log('Log desde alias');
    }
)(document,window,console); */

// ----- JS 33: Modules (import-export)
