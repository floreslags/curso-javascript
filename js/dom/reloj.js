const d = document;

let clockTempo;

export function digitalClock(clock,playBtn,stopBtn){
    d.addEventListener('click',e=>{
        if(e.target.matches(playBtn)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            
            e.target.disabled = true;
        }
        
        if(e.target.matches(stopBtn)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(playBtn).disabled = false;
        }

    })
}

export function alarm(){

}
