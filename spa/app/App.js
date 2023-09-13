import api from './helpers/wp_api.js';
import { ajax } from './helpers/ajax.js';

export function App(){
    document.getElementById('root').innerHTML = `<h1>Bienvenidos a mi primer SPA con Vanilla JS</h1>`;

    ajax({
        url:api.POSTS,
        success:(posts)=>{
            console.log(posts)
        }
    });

    ajax({
        url:api.CATEGORIES,
        success:(categories)=>{
            console.log(categories)
        }
    });


    console.log(api);
}