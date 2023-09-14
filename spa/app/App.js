import { Loader } from './components/loaderComponent.js';
import { Header } from './components/headerComponent.js';
import { Posts } from './components/postsComponent.js';
import { Router } from './components/router.js';

export function App(){

    // Variables del DOM
    const $root = document.getElementById('root');

    // Carga de componentes
    $root.appendChild(Header());
    $root.appendChild(Posts());
    $root.appendChild(Loader());

    // Invocación del router
    Router();
}