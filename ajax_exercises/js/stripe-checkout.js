import stripeKeys from "./stripe-keys.js";

// console.log(stripeKeys);

const d = document,
$tacos = d.getElementById('tacos'),
$template = d.getElementById('taco-template').content,
$fragment = d.createDocumentFragment(),
fetchOptions = {
    headers:{
        Authorization:`bearer ${stripeKeys.secret}`
    }
};


// Consulta de la API de stripe y manejo de promesas

let prices, products;

// Formato del precio

const currencyFormat = num => `$${num.slice(0,-2)}.${num.slice(-2)}`;

Promise.all([
    fetch('https://api.stripe.com/v1/products',fetchOptions),
    fetch('https://api.stripe.com/v1/prices',fetchOptions),
])
.then(responses => Promise.all(responses.map(res =>res.json())))
.then(json => {

    // Almacenamiento de los productos y los precios
    products = json[0].data;
    prices = json[1].data;
    // console.log(products,prices);

    // Creacion de productos y precios
    prices.forEach(el => {
        let productData = products.filter((product) => product.id === el.product);
        // console.log(productData);
        $template.querySelector('.taco').setAttribute('data-price',el.id);
        $template.querySelector('img').src = productData[0].images[0];
        $template.querySelector('img').alt = productData[0].name;
        $template.querySelector('figcaption').innerHTML = `
            ${productData[0].name}
            <br>
            ${currencyFormat(el.unit_amount_decimal)} ${el.currency}
        `;
        let $clone = d.importNode($template,true);
        $fragment.appendChild($clone);
    });

    $tacos.appendChild($fragment);



})
.catch((error) => {
    console.log(error); 
    let msg = error.statusText || 'Ocurrio un error con la conexion a stripe API';
    $tacos.innerHTML = `<p>Error ${error.status}: ${msg}</p>`;
})



// Eventos del DOM


//  No funciona el proceso de checkout pide URL tipo HTTPS
d.addEventListener('click', e => {
    if (e.target.matches('.taco *')) {
        // alert('A comprar');

        let priceId = e.target.parentElement.getAttribute('data-price');
        // console.log(priceId);

        Stripe(stripeKeys.public)
        .redirectToCheckout({
            lineItems:[{priceId,quantity:1}],
            mode:'subscription',
            successURL:'http://127.0.0.1:5500/ajax_exercises/assets/stripe-success.html',
            cancelURL:'http://127.0.0.1:5500/ajax_exercises/assets/stripe-cancel.html'
        })
        .then(res => {
            if (res.error) {
                $tacos.insertAdjacentHTML('afterend',res.error.message)
            }
        })
        
    }
});