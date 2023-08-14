import hamburgerMenu from "./dom/hamburger-menu.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { shortCuts } from "./dom/key.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock('#reloj','#activar-reloj','#desactivar-reloj');
    alarm('assets/sound/alarm.wav','#activar-alarma','#desactivar-alarma');
});

d.addEventListener("keypress",e=>{
    shortCuts(e);
});
