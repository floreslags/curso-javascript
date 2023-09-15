
export function ContactFormComponent(){
    const d = document,
    $form = d.createElement('form'),
    $styles = d.getElementById('dynamic-styles');

    // Declaracion de clases CSS
    $form.classList.add('contact-form');

    // Declaración dinámica de estilos
    $styles.innerHTML = `
    /*----- Reset CSS -----*/

    html{
        box-sizing: border-box;
        font-family: sans-serif;
        font-size: 16px;
    }

    *,
    *::before,
    *::after{
        box-sizing: inherit;
    }

    /* Form Validations */

    .contact-form{
        --form-ok-color:#4caf5c;
        --form-error-color:#f44336;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }

    .contact-form > *{
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
    }

    .contact-form textarea{
        resize: none;
    }

    .contact-form legend,
    .contact-form-response{
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }

    .contact-form input,
    .contact-form textarea{
        font-size: 1rem;
        font-family: sans-serif;
    }

    .contact-form input[type="submit"]{
        cursor: pointer;
        width: 50%;
        font-weight: bold;
    }

    .contact-form ::placeholder{
        color: #000;
    }

    .contact-form [required]:valid{
        border: thin solid var(--form-ok-color);
    }
    .contact-form [required]:invalid{
        border: thin solid var(--form-error-color);
    }

    .contact-form-error{
        margin-top: -1rem;
        font-size: 80%;
        background-color: var(--form-error-color);
        color: #fff;
        transition: all 800ms ease;
    }

    .contact-form-error.is-active{
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
    }

    .none{
        display: none;
    }

    .contact-form-loader{
        text-align: center;
    }

    @keyframes show-message {
        0%{
            visibility: hidden;
            opacity: 0;
        }

        100%{
            visibility: visible;
            opacity: 1;
        }
        
    }
    
    `;

    $form.innerHTML = `
        <legend>Envíanos tus comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre"
                    title="El nombre solo acepta letras y espacios en blanco" required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$">
            
        <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto" required
                    pattern="^[a-z0-9]+(\\.[a-z0-9]+)*@[a-z0-9]+(\\.[a-z0-9]+)*(\\.[a-z0-9]{2,15})$">
            
        <input type="text" name="subject" placeholder="Asunto a tratar" title="El asunto es requerido" required>
            
        <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios" data-pattern="^.{1,255}$"
                    title="Tu comentario no debe exceder 255 caracteres" required></textarea>
            
        <input type="submit" value="Enviar">
            
        <div class="contact-form-loader none">
            <img src="../assets/img/spinning-circles.svg" alt="Cargando">
        </div>
            
        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
    `;


    function formValidation() {
        const $form = d.querySelector(".contact-form"),
            $inputs = d.querySelectorAll(".contact-form [required]");

        // console.log($inputs);

        $inputs.forEach(input => {
            const $span = d.createElement("span");
            $span.id = input.name;
            $span.textContent = input.title;
            input.insertAdjacentElement("afterend", $span);
            $span.classList.add("contact-form-error", "none");
        });

        // Lectura de escritura con teclado

        d.addEventListener("keyup", e => {
            if (e.target.matches(".contact-form [required]")) {
                let $input = e.target,
                    pattern = $input.pattern || $input.dataset.pattern;

                // console.log($input,pattern);

                if (pattern && $input.value !== "") {
                    let regex = new RegExp(pattern);
                    // console.log('Tiene patron');

                    return !regex.exec($input.value)
                        ? d.getElementById($input.name).classList.add("is-active")
                        : d.getElementById($input.name).classList.remove("is-active");
                }

                if (!pattern) {
                    return $input.value === ""
                        ? d.getElementById($input.name).classList.add("is-active")
                        : d.getElementById($input.name).classList.remove("is-active");
                }

            }
        });

        // Envío de formulario

        d.addEventListener("submit", e => {
            e.preventDefault();
            // alert('Enviando formulario');

            const $loader = d.querySelector(".contact-form-loader"),
                $response = d.querySelector(".contact-form-response");

            $loader.classList.remove("none");

/*                     setTimeout(() => {
                $loader.classList.add("none");
                $response.classList.remove("none");
                $form.reset();

                setTimeout(() => {
                    $response.classList.add("none");
                }, 3000);

            }, 3000); */

            // DATA SUBMIT WITH FETCH + formsubmit

            fetch('https://formsubmit.co/ajax/sergiofol1093@gmail.com',{
                method:'POST',
                body:new FormData(e.target),
                mode:'cors',
                headers:{
                    'content-type':'application/json',
                    'Access-Control-Allow-Origin':'*',

                }

            })
            .then(res => res.ok ? res.json():Promise.reject(res))
            .then(data => {
                console.log(data);
                $loader.classList.add("none");
                $response.classList.remove("none");
                $response.innerHTML = `<p>${data.message}</p>`;
                $form.reset();
            })
            .catch(err => {
                console.log(err);
                let msg = err.statusText || 'There was an error';
                $response.innerHTML = `
                    <p>
                        Error ${err.status}: ${msg}
                    </p>
                `;
            })
            .finally(()=>setTimeout(() => {
                $response.classList.add('none');
                $response.innerHTML = '';
                
            }, 3000));

        });

    }

    // Carga del formulario + la función de forma asincrona

    setTimeout(() => formValidation(), 100);

    return $form;
}