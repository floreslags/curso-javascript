// ----- JS 33: Módules -----

/* import  saludar, {PI, Saludar, user} from './constants.js';
import {arithmetic as calculate} from './arithmetics.js'
console.log('Module files');
console.log(PI,user);

console.log(calculate.sumar(3,4));
console.log(calculate.restar(3,4));

saludar();

let saludo = new Saludar();

saludo;
 */

// ----- JS 34: Ejercicios 1 -----

import {logicObject as logic} from './exercises.js';

//logic.stringCount('hello');

//logic.stringSlice("Sergio Flores",4);

//logic.stringSplit('Hi, my name is'," ");

//logic.stringRepeat("Sergio Flores",4);

// ----- 35: Ejercicios 5,6,7,8

// logic.invertedString("");
// logic.invertedString("Hola Sergio!");

// logic.stringCounter();
// logic.stringCounter("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero voluptatibus tempore, eos officiis ipsam tenetur inventore, ipsa deleniti sapiente, facilis mollitia non impedit soluta earum quaerat. Aperiam maxime voluptas ullam, perspiciatis, fugiat, nemo magni dolores reprehenderit quaerat atque deleniti. Consequatur laudantium accusamus, libero in voluptates quam nulla accusantium temporibus soluta porro alias maxime repellendus voluptas eligendi hic! Possimus, veniam corrupti? Aperiam distinctio temporibus explicabo? Ipsum earum voluptate dolorum deleniti dolore magnam nobis eveniet molestiae natus dignissimos labore, officia enim expedita cum! Id, magnam omnis ea explicabo enim consectetur culpa ducimus corporis suscipit sint consequatur quibusdam non doloribus quis, iste nobis.");
// logic.stringCounter("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero voluptatibus tempore, eos officiis ipsam tenetur inventore, ipsa deleniti sapiente, facilis mollitia non impedit soluta earum quaerat. Aperiam maxime voluptas ullam, perspiciatis, fugiat, nemo magni dolores reprehenderit quaerat atque deleniti. Consequatur laudantium accusamus, libero in voluptates quam nulla accusantium temporibus soluta porro alias maxime repellendus voluptas eligendi hic! Possimus, veniam corrupti? Aperiam distinctio temporibus explicabo? Ipsum earum voluptate dolorum deleniti dolore magnam nobis eveniet molestiae natus dignissimos labore, officia enim expedita cum! Id, magnam omnis ea explicabo enim consectetur culpa ducimus corporis suscipit sint consequatur quibusdam non doloribus quis, iste nobis.","non");

// logic.palindromeValidation();
// logic.palindromeValidation(false);
// logic.palindromeValidation("Jorge");
// logic.palindromeValidation("non");

// logic.characterPatternDeletion("Marc Van Linden");
// logic.characterPatternDeletion("Marc Van Linden","Marc");
// logic.characterPatternDeletion("Marc Van Linden","lINDE");

// ----- 36: Ejercicios 9,10,11

// logic.randomNumber();

// logic.palindromeNumber();
// logic.palindromeNumber(false);
// logic.palindromeNumber('451');
// logic.palindromeNumber(48);
// logic.palindromeNumber(101);
// logic.palindromeNumber(18.99);
// logic.palindromeNumber(99.99);

// logic.factorialNumber();
// logic.factorialNumber(false);
// logic.factorialNumber('tetxt');
// logic.factorialNumber(-10);
// logic.factorialNumber(0);
// logic.factorialNumber(5);

// logic.primeNumber();
// logic.primeNumber(false);
// logic.primeNumber(-4);
// logic.primeNumber(0);
// logic.primeNumber(1);
// logic.primeNumber(2);
// logic.primeNumber(3);
// logic.primeNumber(4);
// logic.primeNumber(5);
// logic.primeNumber(6);
// logic.primeNumber(7);

// logic.evenNumber();
// logic.evenNumber(false);
// logic.evenNumber('false');
// logic.evenNumber(0);
// logic.evenNumber(1);
// logic.evenNumber(4);

// logic.degreeConverter();
// logic.degreeConverter('4');
// logic.degreeConverter(4);
// logic.degreeConverter(4,true);
// logic.degreeConverter(4,'78');
// logic.degreeConverter(0,'C');
// logic.degreeConverter(100,'C');
// logic.degreeConverter(0,'F');
// logic.degreeConverter(100,'F');
// logic.degreeConverter(32,'F');

// ----- JS 38: Ejercicios 15-16-17 -----

// logic.decimalBinaryConverter();
// logic.decimalBinaryConverter('45');
// logic.decimalBinaryConverter(false);
// logic.decimalBinaryConverter(10,'10');
// logic.decimalBinaryConverter(10,5);
// logic.decimalBinaryConverter(100,2);
// logic.decimalBinaryConverter(1110010,2);
// logic.decimalBinaryConverter(114,10);

// logic.priceDiscount();
// logic.priceDiscount(true);
// logic.priceDiscount('47');
// logic.priceDiscount(50);
// logic.priceDiscount(50,true);
// logic.priceDiscount(50,'true');
// logic.priceDiscount(1000 ,-20);
// logic.priceDiscount(1000 ,20);

// logic.currentYearsCalculator();
// logic.currentYearsCalculator(false);
// logic.currentYearsCalculator({});
// logic.currentYearsCalculator(new Date());
// logic.currentYearsCalculator(new Date(1993,10,27));


// ----- JS 39: Ejercicios 18, 19 y 20 -----

// logic.vowelConsonatCounter();
// logic.vowelConsonatCounter(false);
// logic.vowelConsonatCounter(5);
// logic.vowelConsonatCounter('false');
// logic.vowelConsonatCounter("45s");

// logic.validateName();
// logic.validateName(false);
// logic.validateName(5);
// logic.validateName("_4");
// logic.validateName("Sergio");
// logic.validateName("Sergio Flores");
// logic.validateName("Sergio Flores, 29");

// logic.validateEmail();
// logic.validateEmail(false);
// logic.validateEmail(5);
// logic.validateEmail('45');
// logic.validateEmail('sergio');
// logic.validateEmail('sergio,flores@mail.es');
// logic.validateEmail('sergio.flores@mail.es');
// logic.validateEmail('sergio_flores@mail.es_');
// logic.validateEmail('sergio_flores@mail.es-');
// logic.validateEmail('sergio@mail.es');
// logic.validateEmail('sergio@mail.mx');
// logic.validateEmail('sergio@mail.edu.mx');

logic.validatePattern()
logic.validatePattern(false)
logic.validatePattern(5)
logic.validatePattern("Hello world",)
logic.validatePattern("Hello world",/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g)
logic.validatePattern("Hello world",new RegExp("/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/","g"))
logic.validatePattern("Hello world",/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/)
logic.validatePattern("sergio",/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/)
logic.validatePattern("sergio@mail.com",/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/)
logic.validatePattern("sergio@mail.com", new RegExp("/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/","i"))