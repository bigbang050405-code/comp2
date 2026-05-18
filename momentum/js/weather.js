const API_KEY = "7683415f6eb5970ffc86f1138b490362";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in",lat,lng);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.getElementById("weather");
            weather.innerHTML = `
                <span>${data.name}</span>
                <span>${Math.round(data.main.temp - 273.15)}°C</span>
            `;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
