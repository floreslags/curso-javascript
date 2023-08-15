import hamburgerMenu from "./dom/hamburger-menu.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { moveBall, shortCuts } from "./dom/key.js";
import countdown from "./dom/countdown.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock('#reloj','#activar-reloj','#desactivar-reloj');
    alarm('assets/sound/alarm.wav','#activar-alarma','#desactivar-alarma');
    countdown('countdown','Aug 15, 2023 16:17:00','Happy Birthday Sergio 🎂 !')
});

d.addEventListener("keypress",e=>{
    shortCuts(e);
    moveBall(e,'.ball','.stage');
});
