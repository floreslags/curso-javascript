
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


// ----- JS 46: Callbacks -----

/* function sqrtNumberCallback(value,callback){
    setTimeout(() => {
        callback(value,value*value)
    }, 0 | Math.random()*1000);
}

sqrtNumberCallback(0,(value,result)=>{
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);

    sqrtNumberCallback(1,(value,result)=>{
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);

    sqrtNumberCallback(2,(value,result)=>{
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`)

    sqrtNumberCallback(3,(value,result)=>{
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`)

});

});

});

}); */

// ----- JS 47: Promesas ----- 

/* function srqtNumberPromise(value){

    if(typeof value !=='number') return Promise.reject(`Error el valor ${value} NO es un número`);

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random()*1000);
    });
}


srqtNumberPromise(0)
    .then((resp)=>{
        console.log("Inicia la promesa");
        console.log(`Promise: ${resp.value} - ${resp.result}`);
        return srqtNumberPromise(1);
    })
    .then(resp => {
        console.log(`Promise: ${resp.value} - ${resp.result}`);
        return srqtNumberPromise(2);
    })
    .then(resp => {
        console.log(`Promise: ${resp.value} - ${resp.result}`);
        return srqtNumberPromise(3);
    })
    .then(resp => {
        console.log(`Promise: ${resp.value} - ${resp.result}`);
        return srqtNumberPromise(4);
    })
    .then(resp => {
        console.log(`Promise: ${resp.value} - ${resp.result}`);
        return srqtNumberPromise(5);
    })
    .then(resp => {
        console.log(`Promise: ${resp.value} - ${resp.result}`);
        console.log("Fin de la promesa");
    })
    .catch(err => console.error(err));

*/

