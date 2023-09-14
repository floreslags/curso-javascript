export function ajax(props){
    let {url,success} = props;

    fetch(url)
    .then(res => res.ok?res.json():Promise.reject(res))
    .then(data => success(data))
    .catch(err=>{
        let msg = err.statusText || 'Oucrrió un error al acceder al recurso';
        document.getElementById('posts').innerHTML = `
            <div class="error">
                <p>Error ${err.status}:${msg}</p>
            </div>
        `;
        document.querySelector('.loader').style.display('none');

        console.log(err);
    })
}