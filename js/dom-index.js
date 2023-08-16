import hamburgerMenu from "./dom/hamburger-menu.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { moveBall, shortCuts } from "./dom/key.js";
import countdown from "./dom/countdown.js";
import topScrollButton from "./dom/scroll-button.js";
import darkTheme from "./dom/dark-theme.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock('#reloj','#activar-reloj','#desactivar-reloj');
    alarm('assets/sound/alarm.wav','#activar-alarma','#desactivar-alarma');
    countdown('countdown','Aug 15, 2023 16:17:00','Happy Birthday Sergio 🎂 !');
    topScrollButton('.scroll-top-btn');
    darkTheme('.dark-theme-btn','dark-mode');
});


d.addEventListener("keypress",e=>{
    shortCuts(e);
    moveBall(e,'.ball','.stage');
});
