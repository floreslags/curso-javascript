// ----- JS 34: Ejercicios 1 -----

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

const stringCount = (text = "")=> 
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

const stringSplit = (text="",separator=undefined)=>
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




export const logicObject = {
    stringCount,
    stringSlice,
    stringSplit,
    stringRepeat
}