import api from '../helpers/wp_api.js';
import {ajax} from '../helpers/ajax.js';
import { postCard } from './PostCardComponent.js';
import { Post } from './PostComponent.js';
import { SearchPostCard } from './SearchPostCardComponent.js';
import { ContactFormComponent } from './ContactFormComponent.js';

export async function Router(){

    const d = document,
    w = window,
    $main = d.getElementById('main');

    // Inicializar la seccion de $posts vacía
    $main.innerHTML = null;

    let {hash} = location;

    // Validaciones del Router
    if(!hash || hash === '#/'){
        // Carga de todos los POSTS
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
        // Carga de los POSTS de busqueda

        let query = localStorage['wpSearch'];
        if(!query){
            d.querySelector('.loader').style.display = 'none';
            return false;
        } 

        await ajax({
            url:`${api.SEARCH}${query}`,
            success:(search)=>{
                // console.log(search);

                let html = '';

                if(search.length === 0){
                    html = `<p class="error">Error, no se encontraron resultados de la búsqueda <mark>${query}</mark></p>`;
                }else{
                    // Carga de $SearchPostCards
                    search.forEach(post => html +=SearchPostCard(post));
                }

                $main.innerHTML = html;
            }
        });




    }else if(hash === '#/contact'){
        // Carga del FORMULARIO de contacto
        $main.appendChild(ContactFormComponent());
        
    }else{

        // Carga de un solo POST
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