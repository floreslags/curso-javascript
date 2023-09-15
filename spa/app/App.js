import { Loader } from './components/LoaderComponent.js';
import { Header } from './components/HeaderComponent.js';
import { Main } from './components/MainComponent.js';
import { Router } from './components/RouterComponent.js';
import { infiniteScroll } from './helpers/infitite_scroll.js';

export function App(){

    // Variables del DOM
    const $root = document.getElementById('root');
    $root.innerHTML = null; // Carga vacía del contenido en el elemento $root del documento

    // Carga de componentes
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    // Invocación del router
    Router();

    // Invocación del Scroll Infinito
    infiniteScroll();
}