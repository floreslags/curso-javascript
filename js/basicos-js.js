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

