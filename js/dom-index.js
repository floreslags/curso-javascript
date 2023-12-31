import hamburgerMenu from "./dom/hamburger-menu.js";
import { digitalClock,alarm } from "./dom/reloj.js";
import { moveBall, shortCuts } from "./dom/key.js";
import countdown from "./dom/countdown.js";
import topScrollButton from "./dom/scroll-button.js";
import darkTheme from "./dom/dark-theme.js";
import responsiveMedia from "./dom/responsive-object.js";
import responsiveTester from "./dom/responsive-tester.js";
import deviceDetector from "./dom/device_detector.js";
import networkStatus from "./dom/network_detector.js";
import webcamDetector from "./dom/webcam_detector.js";
import geolocationDetector from "./dom/geolocation.js";
import searchFilters from "./dom/search_filter.js";
import digitalRaffle from "./dom/digital_raffle.js";
import responsiveSlider from "./dom/responsive-slider.js";
import scrollSpy from "./dom/scroll_spy.js";
import smartVideo from "./dom/smart_video.js";
import contactFormValidation from "./dom/form_validation.js";
import speechReader from "./dom/text_narrator.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock('#reloj','#activar-reloj','#desactivar-reloj');
    alarm('assets/sound/alarm.wav','#activar-alarma','#desactivar-alarma');
    countdown('countdown','Aug 15, 2023 16:17:00','Happy Birthday Sergio 🎂 !');
    topScrollButton('.scroll-top-btn');
    responsiveMedia(
        'youtube',
        '(min-width:1024px)',
        `<a href="https://www.youtube.com/embed/PHd3BW_TrYI" target="_blank" rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/PHd3BW_TrYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
        
        responsiveMedia(
            'gmap',
            '(min-width:1024px)',
            `<a href="https://goo.gl/maps/iXYvaV2PCnomDyzj9" target="_blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.330786071135!2d-99.16888681116183!3d19.427023124964307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sThe%20Angel%20of%20Independence!5e0!3m2!1sen!2smx!4v1692476776472!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

        responsiveTester('responsive-tester');
        deviceDetector('user-device');
        webcamDetector('webcam');
        geolocationDetector('geolocation');
        searchFilters('.card-filter','.card');
        digitalRaffle('#winner-btn','.player');
        responsiveSlider();
        scrollSpy();
        smartVideo();
        contactFormValidation();

});


/* d.addEventListener("keypress",e=>{
    shortCuts(e);
    moveBall(e,'.ball','.stage');
}); */

darkTheme('.dark-theme-btn','dark-mode');
networkStatus();
speechReader();