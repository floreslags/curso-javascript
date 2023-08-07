// console.log(window)
// console.log(Document)


/* let texto = "Hola, me llamo Sergio";

const talk = (text)=>speechSynthesis.speak(new SpeechSynthesisUtterance(text));

talk(texto); */

// ----- JS 61: DOM - Introducción -----

/* // Elementos del documento

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

document.write("<h2>Hello friend from DOM</h2>"); */

// ----- JS 62: DOM - nodos - elementos - selectores -----

/* // Métodos de selección de nodos ya no tan utilizados

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("name"));

console.log(document.getElementById("menu"));

// Nuevos métodos de selección
console.log(document.querySelector("#menu"))
console.log(document.querySelector("a"))
console.log(document.querySelectorAll("a").length)
console.log(document.querySelectorAll("a").forEach(el=>console.log(el)))
console.log(document.querySelector(".card"))
console.log(document.querySelectorAll(".card"))
console.log(document.querySelectorAll(".card")[2])
console.log(document.querySelectorAll("#menu li"))
console.log(document.querySelector("#menu li")) */

// ----- JS 63: DOM - attributes - data-attributes  -----

/* // Asignación e invocación de atributos

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href")); // Forma correcta

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const $DOMLink = document.querySelector(".link-dom");
$DOMLink.setAttribute("target","_blank");
$DOMLink.setAttribute("rel","noopener");
$DOMLink.setAttribute("href","https://jonmircha.com/");

// Eliminación de atributos
console.log($DOMLink.hasAttribute("rel"));
$DOMLink.removeAttribute("rel")
console.log($DOMLink.hasAttribute("rel"));

// Interacción con DATA-ATTRIBUTES
console.log($DOMLink.getAttribute("data-description"));
console.log($DOMLink.dataset);
console.log($DOMLink.dataset.description);

$DOMLink.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($DOMLink.getAttribute("data-description"));

$DOMLink.dataset.description = "Suscríbete a mi blog";
console.log($DOMLink.getAttribute("data-description"));
console.log($DOMLink.hasAttribute("data-id"));
$DOMLink.removeAttribute("data-id");
console.log($DOMLink.hasAttribute("data-id")); */