console.log(window)
console.log(Document)


/* let texto = "Hola, me llamo Sergio";

const talk = (text)=>speechSynthesis.speak(new SpeechSynthesisUtterance(text));

talk(texto); */

// ----- JS 61: DOM - Introducción -----

// Elementos del documento

console.log(window.document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

// Selección de elementos del DOM

setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Hello friend from DOM</h2>");
