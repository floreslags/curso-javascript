export function SearchForm(){

    // Variables del DOM
    const d = document
    ,$form = d.createElement('form'),
    $input = d.createElement('input');

    // Declaracion de atributos
    $input.type = 'search';
    $input.name = 'search';
    $input.placeholder = 'Buscar...';
    $input.autocomplete = 'off';

    // Declaracion de clases
    $form.classList.add('search-form');

    // Carga de elementos hijos
    $form.appendChild($input);

    // Validación del localStorage
    if(location.hash.includes('#/search')){
        $input.value = localStorage['wpSearch'];
    }


    // Eventos del DOM
    d.addEventListener('submit', e =>{
        if(!e.target.matches('.search-form')) return false;

        e.preventDefault();
        localStorage.setItem('wpSearch',e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    });

    d.addEventListener('search',e =>{
        if(!e.target.matches('input[type="search"]')) return false;

        if(!e.target.value){
            localStorage.removeItem('wpSearch');
        }
    });

    // Retorno del elemento padre
    return $form;
}