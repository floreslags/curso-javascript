import api from '../helpers/wp_api.js';
import {ajax} from '../helpers/ajax.js';
import { postCard } from './PostCardComponent.js';
import { Post } from './PostComponent.js';

export async function Router(){

    const d = document,
    w = window,
    $main = d.getElementById('main');

    // Inicializar la seccion de $posts vacía
    $main.innerHTML = null;

    let {hash} = location;

    // Validaciones del Router
    if(!hash || hash === '#/'){
        await ajax({
            url:api.POSTS,
            success:(posts)=>{
                // console.log(posts);
                let html = '';

                // carga dinámica de $PostCards por cada post de la API
    
                posts.forEach(post => html+= postCard(post));
                $main.innerHTML = html;
            }
        });
        
    }else if(hash.includes('#/search')){
        $main.innerHTML = `<h2>Sección Búsqueda</h2>`
    }else if(hash === '#/contact'){
        $main.innerHTML = `<h2>Sección Contacto</h2>`
        
    }else{
        await ajax({
            url:`${api.POST}/${localStorage['wpPostId']}`,
            success:(post)=>{
                
                // console.log(post);

                // Carga del componente $post
                $main.innerHTML = Post(post);
            }
        });
    }

    d.querySelector('.loader').style.display = 'none';

}