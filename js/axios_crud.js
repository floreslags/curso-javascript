const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.querySelector("#crud-template").content,
$fragment = d.createDocumentFragment();

// Comando para json-wervserver: json-server -w -p 5000 assets/db.json 


// Load DATA
const getAll = async ()=>{
    try {

        let res = await axios.get('http://localhost:5000/saints'),
        json = await res.data;

        // console.log(res)

        json.forEach(el => {
            $template.querySelector(".name").textContent = el.name;
            $template.querySelector(".constellation").textContent = el.constellation;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.name = el.name;
            $template.querySelector(".edit").dataset.constellation = el.constellation;
            $template.querySelector(".delete").dataset.id = el.id;

            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone);

        });
        
        $table.querySelector('tbody').appendChild($fragment);
        
    } catch (err) {
        let msg = err.statusText || 'Ocurrió un error';
        $table.insertAdjacentHTML('afterend',`
            <p><b>Error ${err.status}: ${msg}</b></p>
        `);
    }
}

// DOM EVENTS

d.addEventListener('DOMContentLoaded',getAll);

d.addEventListener('submit', async e=>{
    if(e.target === $form){
        e.preventDefault();


        if(!e.target.id.value){
            // CREATE / POST

            try {


                let options = {
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json; charset=utf-8'
                    },
                    data:JSON.stringify({
                        name:e.target.name.value,
                        constellation:e.target.constellation.value,
                    })
                },
                res = await axios('http://localhost:5000/saints',options),
                json = await res.data;

                location.reload();

                
            } catch (err) {

                let msg = err.statusText || 'Ocurrió un error';
                $form.insertAdjacentHTML('afterend',`
                    <p><b>Error ${err.status}: ${msg}</b></p>
                `);
                
            }

        }else{
            // UPDATE / PUT
            try {

                let options = {
                    method:'PUT',
                    headers:{
                        'Content-Type':'application/json; charset=utf-8'
                    },
                    data:JSON.stringify({
                        name:e.target.name.value,
                        constellation:e.target.constellation.value,
                    })
                },
                res = await axios(`http://localhost:5000/saints/${e.target.id.value}`,options),
                json = await res.data;
    
                location.reload();
                
            } catch (err) {

                let msg = err.statusText || 'Ocurrió un error';
                $form.insertAdjacentHTML('afterend',`
                    <p><b>Error ${err.status}: ${msg}</b></p>
                `);
                
            }

        }
    }
});

d.addEventListener('click', async e=>{

    if(e.target.matches('.edit')){

        $title.textContent = 'Edit Saint';
        $form.name.value = e.target.dataset.name;
        $form.constellation.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;
    }

    if(e.target.matches('.delete')){

        // DELETE
        let deleteEntry = confirm(`Would you like to remove the entry: ${e.target.dataset.id}`);

        if(deleteEntry){
            try {
                let options = {
                    method:'DELETE',
                    headers:{
                        'Content-Type':'application/json; charset=utf-8'
                    }
                },
                res = await axios(`http://localhost:5000/saints/${e.target.dataset.id}`,options),
                json = await res.data;
    
                location.reload();

                
            } catch (err) {
                let msg = err.statusText || 'Ocurrión un errro';
                alert(`Error ${err.status}: ${msg}`);
            }
        }

    }
});

