const d = document;

export default function countdown(id,date,msg){

    const $countdown = d.getElementById(id),
    countdownDate = new Date(date).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime/(1000 * 60 * 60 * 24)),
        hours = Math.floor((limitTime%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)),
        minutes = Math.floor((limitTime%(1000 * 60 * 60))/(1000 * 60)),
        seconds = Math.floor((limitTime%(1000 * 60))/1000);

        $countdown.innerHTML = `<h3>Faltan: ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos</h3>`;

        //console.log(countdownDate, now,limitTime);

        if(limitTime < 0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${msg}</h3>`
        }

    }, 1000);
}