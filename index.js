window.addEventListener('load', ()=> {
    let lon
    let lat

    let tempValor = document.getElementById('temp-valor');
    let tempDesc = document.getElementById('temp-descripcion');

    let ubi = document.getElementById('ubicacion');
    let icono = document.getElementById('icono-animado');

    let viento = document.getElementById('velocidad-viento');
    

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( posicion => {
            

             let city = prompt("¿De que ciudad buscas el clima?")

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=ffcd12950f620a5b8ddc5f3b67b07e12`;
            
            
            fetch (url)
                .then( response => {return response.json()})
                .then( data => {
                    let temp = Math.round(data.main.temp)
                    tempValor.textContent = `${temp} ºC`;
                    
                    tempDesc.textContent = (data.weather[0].description);
                    
                    ubi.textContent = (data.name);
                    
                    viento.textContent = `${(data.wind.speed)} m/s`;

                    switch (data.weather[0].main) {
                        case 'Clear':
                            icono.src = 'day.svg';
                            console.log('Despejado');
                            break;
                        case 'Clouds':
                            icono.src = 'cloudy.svg';
                            console.log('Nublado');
                            break;
                        case 'Atmosphere':
                            icono.src = 'cloudy-day-1.svg';
                            console.log('Atmosferico');
                            break;
                        case 'Snow':
                            icono.src = 'snowy-5.svg';
                            console.log('Nieve');
                            break;
                        case 'Thunderstorm':
                            icono.src = 'thunder.svg';
                            console.log('Tormenta');
                            break;
                        case 'Rain':
                            icono.src = 'rainy-6.svg';
                            console.log('Lluvia');
                            break;
                        case 'Drizzle':
                            icono.src = 'rainy-2.svg';
                            console.log('Llovizna');
                            break;
                        default:
                            icono.src = 'cloudy-day-2.svg';
                            console.log('Normal');
                    }
                    


                })
                .catch( error => {
                    console.log(error)
                })
        })
    }
})
