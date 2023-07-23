// ----- JS 30: Módules -----

import  saludar, {PI, Saludar, user} from './constants.js';
import {arithmetic as calculate} from './arithmetics.js'
console.log('Module files');
console.log(PI,user);

console.log(calculate.sumar(3,4));
console.log(calculate.restar(3,4));

saludar();

let saludo = new Saludar();

saludo;
