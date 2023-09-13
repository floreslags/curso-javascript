import api from './helpers/wp_api.js';
import { ajax } from './helpers/ajax.js';
import { Title } from './components/titleComponent.js';
import { Loader } from './components/loaderComponent.js';

export function App(){

    // Variables del DOM
    const d = document,
    $root = d.getElementById('root');

    // Carga de componentes
    $root.appendChild(Title());
    $root.appendChild(Loader())





}