const d = document;

export function shortCuts(e){
    console.log(e.type);
    console.log(e.key);
    console.log(`CTRL: ${e.ctrlKey}`);
    console.log(`ALT: ${e.altKey}`);
    console.log(`SHIFT: ${e.shiftKey}`);
    console.log(e);

    if((e.key === "a" )&& (e.ctrlKey)){
        alert('Se ha invocado una alerta desde el teclado');
    }

    if(e.key === "c" && e.ctrlKey){
        confirm('Se ha invocado una confirmación desde el teclado');
    }

    if(e.key === "p" && e.ctrlKey){
        prompt('Se ha invocado un aviso desde el teclado');
    }
}