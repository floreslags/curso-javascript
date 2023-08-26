(()=>{

    //Creación de instancias
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById('xhr'),
    $fragment = document.createDocumentFragment();

    // console.log(xhr);

    // Asignación de eventos
    xhr.addEventListener("readystatechange",e=>{

        if(xhr.readyState !== 4) return;
        // console.log(xhr);
        
        if(xhr.status >= 200 && xhr.status < 300){
            // console.log('Éxito');

            // Almacenamiento del la data
            let json = JSON.parse(xhr.responseText);
            // console.log(json);

            // Tratamiento e iteración de la data
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `
                    ${el.name} -- ${el.email} -- ${el.phone}
                `;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
            
        }else{
            // console.log('Error');
            let msg = xhr.statusText || "Ocurrión un error";

            $xhr.innerHTML = `Error: ${xhr.status} -- ${msg}`;
        }
    });

    // Definir el método de pétición y el recurso
    xhr.open('GET','https://jsonplaceholder.typicode.com/users'); // API Externa
    // xhr.open('GET','assets/users.json'); // Consumo local

    // Envío de la petición
    xhr.send();
})();


(()=>{
    const $fetch = document.getElementById('fetch'),
    $fragment = document.createDocumentFragment();

    let externo = 'https://jsonplaceholder.typicode.com/users',
    interno = 'assets/users.json';


    fetch(interno)
    .then((res)=>res.ok?res.json():Promise.reject(res))
    .then((data)=>{
        data.forEach(el=>{
            const $li = document.createElement('li');
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`; 
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);
    })
    .catch((err)=>{
        let msg = err.statusText || 'Ocurrió un error';
        $fetch.innerHTML = `Error ${err.status}: ${msg}`
    })
    .finally(()=>{
        console.log('Código de ejecución independiente a la respuesta FETCH')
    });
})()