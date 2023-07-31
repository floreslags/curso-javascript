
// ----- JS 44: setTimeOut() - setInterval()---

/* setTimeout(()=>{
    console.log("Se ejecuta una sola vez")
},3000); */

/* setInterval(() => {
    console.log("Se ejecuta de forma indefinida,después de un intervalo de tiempo")
}, 1000); */

/* setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000); */

/* let tempo = setTimeout(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);

clearTimeout(tempo);

console.log("Después del clear: "+tempo); */

/* let interval = setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);

clearInterval(interval);

console.log("Después del clearInterval: "+interval); */


// ----- JS 45: Asincronía y Evento Loop -----


// Código síncrono bloqueante

/* (()=>{
    console.log("Código Síncrono");
    console.log("Inicio");

    function dos(){
        console.log("Dos");
    }

    function uno(){
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");


})() */

// Código asíncrono no bloqueante

/* (()=>{
    console.log("Código Asincrono");
    console.log("Inicio");
    
    function dos(){
        setTimeout(() => {
            console.log("Dos");
        }, 1000);
    }
    
    function uno(){
        setTimeout(() => {
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }
    
    uno();
    console.log("Fin")

})() */