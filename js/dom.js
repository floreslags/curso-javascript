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

// ----- JS 64: DOM - estilos y variables  -----


/* const $DOMLink = document.querySelector(".link-dom");

console.log($DOMLink);

// Capturar los valores de los estilos
console.log($DOMLink.style);

console.log($DOMLink.getAttribute("style"));
console.log($DOMLink.style.backgroundColor);
console.log($DOMLink.style.color);

console.log(window.getComputedStyle($DOMLink));
console.log(window.getComputedStyle($DOMLink).getPropertyValue("color"));

// Asignar valores de los estilos
$DOMLink.style.setProperty("text-decoration","none");
$DOMLink.style.setProperty("display","block");

$DOMLink.style.width = "50%";
$DOMLink.style.textAlign = "center";
$DOMLink.style.marginLeft = "auto";
$DOMLink.style.marginRight = "auto";
$DOMLink.style.padding = "1rem";
$DOMLink.style.borderRadius = ".5rem";

console.log($DOMLink.style);
console.log($DOMLink.getAttribute("style"));
console.log(window.getComputedStyle($DOMLink));

// CSS Custom properties / Variables dinámicas

const $html = document.documentElement,
    $body = document.body;

let darkColorVar = getComputedStyle($html).getPropertyValue("--dark-color"),
    yellowColorVar = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(darkColorVar,yellowColorVar);



$body.style.backgroundColor = darkColorVar;
$body.style.color = yellowColorVar;

$html.style.setProperty("--dark-color","#000");
darkColorVar = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",darkColorVar); */

// ----- JS 65: DOM - Clases  -----

/* const $card = document.querySelector('.card');

// Visualizar clases

console.log($card);
console.log($card.className);
console.log($card.classList.contains('rotate-45'));

// Agregar clases

$card.classList.add('rotate-45')
console.log($card.className);
console.log($card.classList.contains('rotate-45'));

// Eliminar clases
$card.classList.remove('rotate-45')
console.log($card.classList.contains('rotate-45'));

// Intercambiar clases
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));
$card.classList.toggle('rotate-45');
console.log($card.classList.contains('rotate-45'));

// Reemplazar clases
$card.classList.toggle('rotate-45');
$card.classList.replace('rotate-45','rotate-135');


// Gestionar múltiples clases
$card.classList.add('opacity-80','sepia');
$card.classList.remove('opacity-80','sepia');
$card.classList.toggle('opacity-80','sepia'); */

// ----- JS 66: DOM - Texto & HTML  -----

/* const $whatIsDOM=document.getElementById('que-es');

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
</p>

<p>
Este proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>

<p>
<mark>El DOM no es parte de la especificación de Javascript, es una API para los navegadores.</mark>
</p>
`;

$whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; */