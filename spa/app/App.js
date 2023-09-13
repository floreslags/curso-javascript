import {ajax} from './helpers/ajax.js';
import api from './helpers/wp_api.js';

import { Loader } from './components/loaderComponent.js';
import { Header } from './components/headerComponent.js';
import { Posts } from './components/postsComponent.js';
import { postCard } from './components/postCardComponent.js';

export function App(){

    // Variables del DOM
    const d = document,
    $root = d.getElementById('root');

    // Carga de componentes
    $root.appendChild(Header());
    $root.appendChild(Posts());
    $root.appendChild(Loader());

    ajax({
        url:api.POSTS,
        success:(posts)=>{
            console.log(posts);
            let html = '';

            posts.forEach(post => html+= postCard(post));
            d.querySelector('.loader').style.display = 'none';
            d.getElementById('posts').innerHTML = html;

        }
    });
}