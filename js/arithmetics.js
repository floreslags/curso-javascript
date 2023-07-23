// ----- JS 30: Módules -----

// Exportación de funciones
function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

// Exportación de objetos

export let arithmetic = {
    sumar,
    restar
}