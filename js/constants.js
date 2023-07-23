
// ----- JS 30: Módules -----

// Exportación de variables
export const PI = Math.PI;

export let user = 'sergio';
const pass = 'querty';

//export default pass;

const hello = ()=> console.log("Hola");

// Exportación por defecto
export default function saludar(){
    console.log('Hello +ES6 Modules')
}

export class Saludar{
    constructor(){
        console.log("Hello +ES6 Modules")
    }
}

