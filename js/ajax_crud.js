const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$template = d.querySelector("#crud-template").content,
$fragment = d.createDocumentFragment();

// Crear función expresada para invocar las peticiones API REST

const ajax = (options)=>{
    let {url,method,success,error,data} = options;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', e =>{
        if(xhr.readyState !==4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText);
            success(json); 

        }else{
            let msg = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${msg}`);
        }
    });

    xhr.open(method || "GET",url);
    xhr.setRequestHeader("Content-Type","application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
}

// GET ALL

const getAll = ()=>{
    ajax({
        method:"GET",
        url:'http://localhost:5000/saints',
        success:(res)=>{
            console.log(res);
            res.forEach(el => {
                $template.querySelector(".name").textContent = el.name;
                $template.querySelector(".constellation").textContent = el.constellation;
                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.name = el.name;
                $template.querySelector(".edit").dataset.constellation = el.constellation;
                $template.querySelector(".delete").dataset.id = el.id;
                let $clone = d.importNode($template,true);
                $fragment.appendChild($clone);
            });

            $table.querySelector("tbody").appendChild($fragment);


        },
        error:(err)=>{
            console.log(err);
            $table.insertAdjacentHTML('afterend',`
                <p><b>${err}</b></p>
            `);
        }
    })
}

// Eventos

// Data loaded into a table
d.addEventListener("DOMContentLoaded",getAll);

// Data added or updated into a table uring a form
d.addEventListener('submit',e=>{
    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){

            // CREATE 
            ajax({
                url:'http://localhost:5000/saints',
                method:'POST',
                success:(res)=>location.reload(),
                error:(err)=>$form.insertAdjacentHTML('afterend',`
                <p><b>${err}</b></p>
                `),
                data:{
                    name:e.target.name.value,
                    constellation:e.target.constellation.value
                }
            });

        }else{

            // UPDATE
            ajax({
                url:`http://localhost:5000/saints/${e.target.id.value}`,
                method:'PUT',
                success:(res)=>location.reload(),
                error:(err)=>$form.insertAdjacentHTML('afterend',`
                <p><b>${err}</b></p>
                `),
                data:{
                    name:e.target.name.value,
                    constellation:e.target.constellation.value
                }
            });
        }
    }
});

// Button interactions
d.addEventListener('click',e=>{

    if(e.target.matches(".edit")){
        // alert('edit');
        $title.textContent = "Edit Saint";
        $form.name.value = e.target.dataset.name;
        $form.constellation.value = e.target.dataset.constellation;
        $form.id.value = e.target.dataset.id;
    }


    if(e.target.matches(".delete")){
        // alert('delete');

        let deleteEntry = confirm(`Would you like to remove the record: ${e.target.dataset.id}?`);

        //console.log(deleteEntry);

        if(deleteEntry){
            // DELETE

            ajax({
                url:`http://localhost:5000/saints/${e.target.dataset.id}`,
                method:'DELETE',
                success:(res)=>location.reload(),
                error:(err)=>alert(err)
            });
        }

    }
})