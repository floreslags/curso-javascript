// ----- JS 34: Ejercicios 1,2 3, 4 -----

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// function stringCount(text){
//     try {
//         console.log(text === undefined?"El campo está vacío":typeof(text)=== "string"?text.length:"El valor debe ser un texto");
//     } catch (error) {
//         console.log(error);
//     }
// }

// function stringCount(text = ""){
//     if(!text){
//         console.warn("No has ingresado un texto");
//     }else{
//         console.info(`La cadena "${text}" tiene ${text.length} caracteres.`)
//     }
// }

const stringCount = (text = "") => 
    (!text)
        ?console.warn("No has ingresado un texto")
        :console.info(`La cadena "${text}" tiene ${text.length} caracteres.`);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// function stringSlice(text,number){
//     try {
//         console.log(text === undefined || number === undefined ? 'Ingrese un texto y un número':typeof(text)==="string" && typeof(number)==="number"?text.slice(0,number):"El tipo de datos son inválidos");
//     } catch (error) {
//         console.log(error);
//     }
// }

const stringSlice = (text= "", long=undefined) => 
    (!text)
        ?console.warn("No ingresaste un texto")
        :(long === undefined)
            ?console.warn("No ingreaste la longitud para cortar el texto")
            :console.info(text.slice(0,long));

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// function stringSplit(text,separator){
//     try {
//         console.log(text === undefined || separator === undefined ? 'Ingrese un texto y un caracter de separación ':typeof(text)==="string" && typeof(separator)==="string"?text.split(separator):"El tipo de datos son inválidos");
//     } catch (error) {
//         console.log(error)
//     }
// }

const stringSplit = (text="",separator=undefined) =>
    (!text)
        ?console.warn("No ingresaste una cadena de texto")
        :(separator === undefined)
        ?console.warn("No ingresaste el caracter de separación del texto")
        :console.info(text.split(separator));

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

// function stringRepeat(text,times){
//     try {

//         console.log(text === undefined || times === undefined ? 'Ingrese un texto y un número':typeof(text)==="string" && typeof(times)==="number"?text.repeat(times):"El tipo de datos son inválidos");

//     } catch (error) {
//         console.log(error)
//     }
// }

const stringRepeat = (text="",times=undefined) => {
    if(!text)return console.warn("No ingresaste un texto");
    if(times === undefined) return console.warn("No ingresaste el número de veces de repeticion del texto");
    if(times === 0) return console.error("El número de veces no puede ser 0");
    if(Math.sign(times) === -1) return console.error("El número debe ser positivo");
    for (let i = 0; i < times; i++) console.info(`${text} ${i}`);
}


// ----- JS 35: Ejercicios 5,6,7,8

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertedString = (text="")=>
    (!text)
        ?console.warn("No ingresaste un texto")
        :console.info(text.split("").reverse().join(""));
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const stringCounter = (text="",word="")=>
    (!text)
        ?console.warn("No ingresaste un texto")
        :(!word)
            ?console.warn("No ingresaste una palabra de búsqueda")
            : console.info(`La palabra ${word} se repite ${text.split(" ").filter(el=>el===word).length}`);

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindromeValidation = (word="")=>
(!word)
  ?console.log("No ingresaste una palabra")
  :(word.split("").reverse().join("")===word)
    ?console.log("La palabra es un palíndromo")
    :console.log("La palabra no es un palíndromo");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. 

const characterPatternDeletion = (text = "",pattern = "") =>
    (!text)
        ?console.warn("No ingresaste un texto")
        :(!pattern)
            ?console.warn("No ingresaste el patrón de búsqueda")
            :console.log(text.replace(new RegExp(pattern,"ig"),""));


// JS 36: Ejercicios 9, 10 y 11

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const randomNumber = () => console.log(Math.floor(Math.random() * (600 - 501) + 501));

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const palindromeNumber = (number = 0) =>{
    if(!number) return console.warn("No ingresaste un número");
    if(typeof(number)!=="number") return console.error(`El valor ${number} NO es un número`);
    
    (number.toString().startsWith(number.toString()[0]) === number.toString().endsWith(number.toString()[0]))
        ?console.info(`El número ${number} es capicua`)
        :console.info(`El número ${number} no es capicua`)
}

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorialNumber = (number = undefined)=>{
    if(number===undefined) return console.warn("No ingresaste un número");
    if(typeof(number) !=='number') return console.error(`El valor ${number} NO es un número`);
    if(Math.sign(number) === -1) return console.error(`El valor ${number} debe ser positivo`);
    if(Math.sign(number) === 0) return console.error(`El valor ${number} debe ser mayor CERO`);

    let factorial = 1;

    for(let i = number; i>1; i--){
        factorial *= i;
    }

    console.log(`El factorial de ${number} es ${factorial}`)

}

// ----- JS 37: Ejercicios 12,13 y 14 -----

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const primeNumber = (number = undefined) =>{

    if(number === undefined) return console.warn("No ingresaste un número");
    if(typeof(number) !== 'number') return console.error(`El valor ${number} no es de tipo un numérico`);
    if(number ===0) return console.error('El número no puede ser cero');
    if(number ===1) return console.error('El número no puede ser 1');
    if(Math.sign(number) === -1) return console.error("El número no puede ser negativo");

    let divisible = false;

    for(let i = 2; i <number; i++){
        if(number % i === 0){
            divisible = true;
            break;
        }
    }

    return (divisible)
        ?console.info(`El número ${number} es primo`)
        :console.info(`El número ${number} no es primo`);
}
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const evenNumber =  (number = undefined) =>{
    if(number === undefined) return console.warn("No ingresaste un número");
    if(typeof(number) !== 'number') return console.error(`El valor ${number} no es de tipo un numérico`);
    
    return ((number % 2) === 0 )
    ? console.info(`El número ${number} es par`)
    : console.info(`El número ${number} es impar`);
    
}

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const degreeConverter = (number = undefined, unit= undefined)=>{
    if(number === undefined) return console.warn("No ingresaste un número");
    if(typeof(number) !== 'number') return console.error(`El valor ${number} no es de tipo un numérico`);
    if(unit === undefined) return console.warn("No ingresaste el tipo de grados a convertir");
    if(typeof(unit) !== 'string') return console.error(`El valor ${number} no es de tipo texto`);
    if( unit.length !== 1 || !/(C|F)/.test(unit)) return console.warn("Valor de unidad no reconocido");

    

    return (unit === "C")
        ? console.info(`${number} ºC es quivalente a ${Math.round((number * (9/5))+32)} ºF`)
        :console.info(`${number} ºF es quivalente a ${Math.round((number - 32)*(5/9))} ºC`);

}

// ----- JS 38: Ejercicios 15-16-17 -----
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const decimalBinaryConverter = (number = undefined,base = undefined) => {
    if(number === undefined) return console.warn("No ingresaste un número");
    if(typeof(number) !== 'number') return console.error(`El valor ${number} no es de tipo un numérico`);
    if(base === undefined) return console.warn("No ingresaste una base");
    if(typeof(base) !== 'number') return console.error(`El valor ${number} de la base no es de tipo un numérico`);

    
    if(base === 2){
        return console.info(`El número ${number} de base ${base} = ${parseInt(number,base)} base 10`);
    }else if(base === 10){
        return console.info(`El número ${number} de base ${base} = ${number.toString(base)} base 2`);
    }else{
        return console.error("El tipo de base a convertir no es válida");
    }
}

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const priceDiscount = (price = undefined, discount = 0)=>{

    if(price === undefined) return console.warn("No ingresaste el precio");
    if(typeof(price)!=='number') return console.error("El precio debe ser tipo numérico");
    if(discount === 0) return console.warn("El descuento no puede ser 0"); 
    if(typeof(discount)!=='number') return console.error("El descuento debe ser tipo numérico");
    if(Math.sign(discount) === -1) return console.error("El descuento no puede ser de valor negativo");
    
    return console.info(`El monto total es de ${price - ((price*discount)/100)}`);
    
} 

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const currentYearsCalculator = (date = undefined)=>{
    if(date === undefined) return console.warn("No ingresaste una fecha");
    if(!date instanceof Date) return console.error("No ingresaste una valor de fecha válido");
    
    let yearDiference = new Date().getTime() - date.getTime(),
    msYears = 1000 * 60 * 60 * 24 * 365,
    currentYears = Math.floor(yearDiference/msYears)

    return (Math.sign(currentYears) === -1)
        ?console.info(`Faltan ${Math.abs(currentYears)} años para ${date.getFullYear()}`)
        :(Math.sign(currentYears) === 1)
            ?console.info(`Han pasado ${currentYears} años desde ${date.getFullYear()}`)
            :console.info(`No hay diferencia, estamos en el año actual ${date.getFullYear()}`)

}

// ----- JS 39: Ejercicios 18, 19 y 20 -----

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.



export const logicObject = {
    stringCount,
    stringSlice,
    stringSplit,
    stringRepeat,
    invertedString,
    stringCounter,
    palindromeValidation,
    characterPatternDeletion,
    randomNumber,
    palindromeNumber,
    factorialNumber,
    primeNumber,
    evenNumber,
    degreeConverter,
    decimalBinaryConverter,
    priceDiscount,
    currentYearsCalculator
}