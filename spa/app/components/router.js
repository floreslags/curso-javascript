import api from '../helpers/wp_api.js';
import {ajax} from '../helpers/ajax.js';
import { postCard } from './postCardComponent.js';

export function Router(){

    const d = document,
    w = window,
    $posts = d.getElementById('posts');

    // Inicializar la seccion de $posts vacía
    $posts.innerHTML = null;

    let {hash} = location;

    // Validaciones del Router
    if(!hash || hash === '#/'){
        ajax({
            url:api.POSTS,
            success:(posts)=>{
                // console.log(posts);
                let html = '';
    
                posts.forEach(post => html+= postCard(post));
                d.querySelector('.loader').style.display = 'none';
                $posts.innerHTML = html;
            }
        });
        
    }else if(hash.includes('#/search')){
        $posts.innerHTML = `<h2>Sección Búsqueda</h2>`
    }else if(hash === '#/contact'){
        $posts.innerHTML = `<h2>Sección Contacto</h2>`
        
    }else{
        $posts.innerHTML = `<h2>Carga del post seleccionado</h2>`
    }

/*     console.log(hash)
    ajax({
        url:api.POSTS,
        success:(posts)=>{
            // console.log(posts);
            let html = '';

            posts.forEach(post => html+= postCard(post));
            d.querySelector('.loader').style.display = 'none';
            d.getElementById('posts').innerHTML = html;
        }
    }); */

}