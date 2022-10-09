const Weather = document.querySelector("#weather");

function makeSpace (myTarget)
{
    const space = document.createElement("br");
    myTarget.appendChild(space);
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "01fcedbd1578cb6d256cf55190d95baa";
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const urlAir = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;


    fetch(urlWeather).then(response => response.json()).then(data => {

        const CurrentLocation = data.name;
        const temp = data.main.temp;

        const City = Weather.querySelector("span:first-child");
        City.innerText = CurrentLocation;
        makeSpace(City);
        

        const CurrentWeather = Weather.querySelector("span:nth-child(2)")
        CurrentWeather.innerText = `Current Weather : ${data.weather[0].main}, Current Temperature is ${temp} °C`;
        makeSpace(CurrentWeather);

    });

    fetch(urlAir).then(response => response.json()).then(data => {
        const AirInfo = document.createElement("span");

        Weather.appendChild(AirInfo);

        const AirState = data.list[0].main.aqi;

        const airQualititativeName = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];

        AirInfo.innerText = `Current Air quality is : ${airQualititativeName[AirState - 1]}`;


    });
    // console.log("You live in", lat, lng);
}




function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// ([info about target location, with [position] data ],[if there is an error])