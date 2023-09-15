import { postCard } from '../components/PostCardComponent.js';
import { SearchPostCard } from '../components/SearchPostCardComponent.js';
import { ajax } from './ajax.js';
import api  from './wp_api.js';

export async function infiniteScroll(){
    const d = document,
    w = window;

    // variables para evaluar la búsqueda High Order Components

    let query = localStorage['wpSearch'],
    apiUrl,
    component;


    // Eventos de la ventana
    w.addEventListener('scroll',async e =>{
        let {scrollTop, clientHeight, scrollHeight} = d.documentElement,
        {hash} = w.location;

        // Evaluación de la altura de la ventana
        if(scrollTop + clientHeight >= scrollHeight){
            api.page ++;

            if(!hash || hash === '#/'){
                apiUrl = `${api.POSTS}&page=${api.page}`;
                component = postCard;
            }else if(hash.includes('#/search')){
                apiUrl = `${api.SEARCH}${query}&page=${api.page}`;
                component = SearchPostCard;
            }else{
                return false;
            }

            // Carga del loader
            d.querySelector('.loader').style.display = 'block';
            // Invocacion de la función AJAX
            await ajax({
                url:apiUrl,
                success:(posts)=>{
                    // Carga de elementos desde la detección del scroll
                    let html = "";
                    posts.forEach(post => html +=component(post));
                    d.getElementById('main').insertAdjacentHTML('beforeend',html);

                    // Se oculta el loader
                    d.querySelector('.loader').style.display = 'none';
                }
    
            });
        }

    });


}