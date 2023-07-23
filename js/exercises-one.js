// ----- JS 34: Ejercicios 1 -----

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function stringCount(text){
    try {
        console.log(text === undefined?"El campo está vacío":typeof(text)=== "string"?text.length:"El valor debe ser un texto");
    } catch (error) {
        console.log(error);
    }
}

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function stringSlice(text,number){
    try {
        console.log(text === undefined || number === undefined ? 'Ingrese un texto y un número':typeof(text)==="string" && typeof(number)==="number"?text.slice(0,number):"El tipo de datos son inválidos");
    } catch (error) {
        console.log(error);
    }
}
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function stringSplit(text,separator){
    try {
        console.log(text === undefined || separator === undefined ? 'Ingrese un texto y un caracter de separación ':typeof(text)==="string" && typeof(separator)==="string"?text.split(separator):"El tipo de datos son inválidos");
    } catch (error) {
        console.log(error)
    }
}
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function stringRepeat(text,times){
    try {

        console.log(text === undefined || times === undefined ? 'Ingrese un texto y un número':typeof(text)==="string" && typeof(times)==="number"?text.repeat(times):"El tipo de datos son inválidos");

    } catch (error) {
        console.log(error)
    }
}


export const logicObject = {
    stringCount,
    stringSlice,
    stringSplit,
    stringRepeat
}