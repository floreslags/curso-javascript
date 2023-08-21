const d =  document,
n = navigator;

export default function geolocationDetector(id){
    const $id = d.getElementById(id),
     options = {
        enableHighAccuracy:true,
        timeOut:5000,
        maximumAge:0
    };

    const success = (position) =>{
        let coords = position.coords;

        $id.innerHTML = `
            <p>Tu posición actual es: </p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Precisión: <b>${coords.accuracy}</b> metros</li>
            </ul>
            <a href="https:www.google.com/maps/@${coords.latitude},@${coords.longitude},20z" target="_blank" rel="noopener">Ver en google maps</a>
        `;
        console.log(position);


    };

    const error = (err) =>{
        $id.innerHTML = `
            <p>
                <mark>Error ${err.code} : ${err.message}</mark>
            </p>
        `;
        console.log(err);
    };

    n.geolocation.getCurrentPosition(success,error,options);
}