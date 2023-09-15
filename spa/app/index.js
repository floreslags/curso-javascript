import { App } from "./App.js";
import api from './helpers/wp_api.js'

// Eventos del DOM
document.addEventListener('DOMContentLoaded',App);

// Eventos de WINDOW
window.addEventListener('hashchange',e=>{
    api.page = 1,
    App();
});