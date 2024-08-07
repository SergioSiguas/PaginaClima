// script.js
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '6ae2b52a51165e28039e732e1f42dff6'; 
    const searchBtn = document.getElementById('searchBtn');
    const cityInput = document.getElementById('city');
    const weatherInfo = document.getElementById('weatherInfo');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');

    searchBtn.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        weatherInfo.style.display = 'block';
                        cityName.textContent = data.name;
                        temperature.textContent = `Temperatura: ${data.main.temp} °C`;
                        description.textContent = `Condición: ${data.weather[0].description}`;
                        humidity.textContent = `Humedad: ${data.main.humidity} %`;
                    } else {
                        weatherInfo.style.display = 'none';
                        alert('Ciudad no encontrada.');
                    }
                })
                .catch(error => {
                    console.error('Error al obtener los datos del clima:', error);
                    alert('Error al obtener los datos del clima.');
                });
        } else {
            alert('Por favor, introduce una ciudad.');
        }
    });
});
