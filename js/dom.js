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

// ----- JS 67: DOM - Recorriendo el DOM / DOM traversing  -----


/* // Referencia del elemento
const $cards = document.querySelector('.cards');

// Visualización de elementos INTERNOS del elemento padre

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);

// Visualización de elementos EXTERNOS del elemento padre
console.log($cards.parentElement);
console.log($cards.previousSibling);
console.log($cards.nextSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));

console.log($cards.children[3].closest("section")); */

// ----- JS 68: DOM - Creando elementos y fragmentos -----

/* const $figure = document.createElement('figure'),
    $img = document.createElement('img'),
    $figCaption = document.createElement('figcaption'),
    $figCaptionText = document.createTextNode('Animales'),
    $cards = document.querySelector('.cards'),
    $figure2 = document.createElement('figure');


// Método correcto

$img.setAttribute("src","https://loremflickr.com/320/240/animals");
$img.setAttribute("alt","Animales");

$figure.classList.add("card");

$figCaption.appendChild($figCaptionText);
$figure.appendChild($img);
$figure.appendChild($figCaption);
$cards.appendChild($figure);

// Método alternativo
$figure2.innerHTML = `
    <img src="https://loremflickr.com/320/240/people" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add('card');
$cards.appendChild($figure2);

// Creación de elementos de forma dinámica

const estaciones = ["Primavera","Verano","Otoño","Invierno"],
$ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");

document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

// Opción dinámica alternativa. No es lo ideal, debido a que hay muchas interacciones sobre el DOM.
const continentes = ["Africa","America","Asia","Europa","Oceania"],
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = ""; // Es importante iniciar el elemento como vacío

continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

// Creación de fragmentos

const $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach(el=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");

$ul3.appendChild($fragment);
document.body.appendChild($ul3); */

// ----- JS 69: DOM - Plantillas HTML -----

/* const $cards = document.querySelector(".cards"),
    $template = document.getElementById('card-template').content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title:"Tecnología",
            img:"https://loremflickr.com/320/240/computer"
        },
        {
            title:"Animales",
            img:"https://loremflickr.com/320/240/animals"
        },
        {
            title:"Arquitectura",
            img:"https://loremflickr.com/320/240/architecture"
        },
        {
            title:"Personas",
            img:"https://loremflickr.com/320/240/people"
        },
        {
            title:"Naturaleza",
            img:"https://loremflickr.com/320/240/nature"
        },
    ];

cardContent.forEach(el=>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent=el.title;

    let $clone = document.importNode($template,true);

    $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

// ----- JS 70: DOM - Modificando elementos (modo antiguo) -----

/* const $cards = document.querySelector('.cards'),
    $newCard = document.createElement('figure'),
    $cloneCards = $cards.cloneNode(true);


$newCard.innerHTML = `

    <img src="https://loremflickr.com/320/240/any" alt="Any">
    <figcaption>Any</figcaption>

`;

$newCard.classList.add("card");

// $cards.replaceChild($newCard,$cards.children[2]);
// $cards.insertBefore($newCard,$cards.firstElementChild);
// $cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards); */

// ----- JS 71: DOM - Modificando elementos (nuevo método) -----

/* const $cards = document.querySelector('.cards'),
    $newCard = document.createElement('figure');

let $contentCard = `

    <img src="https://loremflickr.com/320/240/any" alt="Any">
    <figcaption></figcaption>

`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector('figcaption').insertAdjacentText("afterbegin","Any");

// $cards.insertAdjacentElement("afterbegin",$newCard);

$cards.prepend($newCard);
$cards.before($newCard);
$cards.append($newCard);
$cards.after($newCard); */

// ----- JS 72: DOM - Manejadores de eventos -----

/* function helloWorld(){
    alert("Hello World");
    console.log(event);
}

const $eventoSemantico = document.getElementById('evento-semantico'),
$eventoMultiple = document.getElementById('evento-multiple');

$eventoSemantico.onclick = helloWorld;

$eventoSemantico.onclick = (e)=>{
    alert('Hello World, semantic event Handler');
    console.log(e);
}

$eventoMultiple.addEventListener('click',helloWorld);
$eventoMultiple.addEventListener('click',(e)=>{
    alert('Multiple Event Handler');
    console.log(e);
    console.log(e.type);
    console.log(e.target);
}); */

// ----- JS 73: DOM - Eventos con parámetros - remover eventos -----

/* function sayHello(name = "Unknown"){
    alert(`Hello ${name} - ${event}`);
    console.log(event);
}

const removeDbclick = (e)=>{
    alert(`Removing event ${e.type}`);
    console.log(e);
    $removeEvent.removeEventListener('dblclick',removeDbclick);
    $removeEvent.disabled = true;
}


const $eventoMultiple = document.getElementById('evento-multiple'),
    $removeEvent = document.getElementById('evento-remover');

$eventoMultiple.addEventListener('click',()=>{
    sayHello();
    sayHello('Sergio');
});

// Eliminar eventos de un elemento

$removeEvent.addEventListener('dblclick',removeDbclick); */

// ----- JS 74: DOM - Flujo de eventos - Burbuja - Captura -----

/* const $eventDivs =document.querySelectorAll('.event-flow div');

function eventFlow(e){
    console.log(`Hello from ${this.className}, click originated by ${e.target.className}`)
}

console.log($eventDivs);

$eventDivs.forEach(div =>{
    // Bubble fase
    //div.addEventListener('click',eventFlow);
    //div.addEventListener('click',eventFlow,false);
    
    // Capture fase
    //div.addEventListener('click',eventFlow,true);
    div.addEventListener('click',eventFlow,{
        capture:false,
        once:true
    });
}); */

// ----- JS 75: DOM - stopPropagation - preventDefault -----
/* const $eventDivs =document.querySelectorAll('.event-flow div'),
$eventLink = document.querySelector('.event-flow a');

function eventFlow(e){
    console.log(`Hello from ${this.className}, click originated by ${e.target.className}`);
    e.stopPropagation();
}

console.log($eventDivs);

$eventDivs.forEach(div =>{
    div.addEventListener('click',eventFlow);
});

$eventLink.addEventListener('click',(e)=>{
    alert('Hello from Link Event Element');
    e.preventDefault();
    e.stopPropagation();
}); */

// ----- JS 76: DOM - Delegación de eventos -----

/* const $eventDivs = document.querySelectorAll('.event-flow div'),
$eventLink = document.querySelector('.event-flow a');

function eventFlow(e){
    console.log(`Hello from ${e.target.className}, click originated by ${e.target.className}`);
}

// Delegación de los eventos sobre el "documento raíz"
document.addEventListener('click',(e)=>{
    console.log('Click en: ',e.target);

    if(e.target.matches('.event-flow div')){
        eventFlow(e);
    }

    if(e.target.matches('.event-flow a')){
        alert('Hello from Link Event Element');
        e.preventDefault();
    }
}); */

// ----- JS 77: BOM - Propiedades y eventos -----

/* window.addEventListener('resize',(e)=>{
    console.clear();
    console.log('***** Evento resize *****');
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});

window.addEventListener('scroll',e=>{
    console.clear();
    console.log('***** Evento scroll *****');
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener('load',e=>{
    console.log('***** Evento load *****');
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener('DOMContentLoaded',e=>{
    console.log('***** Evento DOM content load *****');
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
}); */

// ----- JS 78: BOM - Métodos -----

/* // window.alert('Alerta');
// window.confirm('Confirmación');
// window.prompt('Aviso');

let ventana;

const $btnAbrir = document.getElementById('abrir-ventana'),
    $btnCerrar = document.getElementById('cerrar-ventana'),
    $btnImprimir = document.getElementById('imprimir-ventana');


$btnAbrir.addEventListener('click',e=>{
    //window.open('https://jonmircha.com/');
    ventana = open('https://jonmircha.com/');
});

$btnCerrar.addEventListener('click',e=>{
    ventana.close();
});

$btnImprimir.addEventListener('click',e=>{
    window.print();
}); */

// ----- JS 79: BOM - objetos:(url, historial y navegador)  -----

/* console.log('***** OBJETO URL *****');
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.pathname);
console.log(location.hash);
console.log(location.search); */

/* console.log('***** OBJETO HISTORIAL *****');
console.log(history);
console.log(history.length);
console.log(history.back(3));
console.log(history.forward(3));
console.log(history.go(1)); */

/* console.log('***** OBJETO NAVEGADOR *****');

console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */