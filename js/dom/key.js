const d = document;
let x = 0, y=0;

export function shortCuts(e){
    // console.log(e.type);
    // console.log(e.key);
    // console.log(`CTRL: ${e.ctrlKey}`);
    // console.log(`ALT: ${e.altKey}`);
    // console.log(`SHIFT: ${e.shiftKey}`);
    // console.log(e);

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

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        ballLimit = $ball.getBoundingClientRect(),
        stageLimit = $stage.getBoundingClientRect();

    // console.log(e.keyCode)
    // console.log(e.key);
    // console.log(ballLimit);
    // console.log(stageLimit);

    // const move = (direction)=>{}
    
    switch (e.keyCode) {
        case 119: // Up W
        if(ballLimit.top > stageLimit.top ){
            e.preventDefault();
            y--;
        }
        break;
        
        case 122: //Down Z
        if(ballLimit.bottom < stageLimit.bottom ){
            e.preventDefault();
            y++;
        }
        break;
        
        case 97: // left A
        if(ballLimit.left > stageLimit.left ){
            e.preventDefault();
            x--;
        }
        break;
        
        case 100:// Right D
        if(ballLimit.right < stageLimit.right ){
            e.preventDefault();
            x++;
        }
        break;
        
        default:
            break;
        }
        $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}