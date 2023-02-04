function getValue(){
    const apiKey = bd7474449235b2bf05180173b4c6fa51;
    var city = document.getElementById('city').value;
    console.log(city);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const weather = data.weather[0].description;
    
        document.getElementById('temperature').innerHTML = `Temperature: ${temperature}`;
        document.getElementById('humidity').innerHTML = `Humidity: ${humidity}`;
        document.getElementById('wind-speed').innerHTML = `Wind Speed: ${windSpeed}`;
        document.getElementById('weather').innerHTML = `Weather: ${weather}`;
      })
      .catch(error => console.error(error));

}

