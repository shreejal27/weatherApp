function getValue(){
    var city = document.getElementById('city').value;
    const apiKey = "bd7474449235b2bf05180173b4c6fa51";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const name = city;
        const icon = data.weather[0].icon;
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windspeed = data.wind.speed;
    
        console.log(name,icon, description,temperature,humidity, windspeed);
        document.getElementById('temperature').innerHTML = "Weather in " + name;
        document.getElementById('title').innerHTML =  temperature;
        document.getElementById('info').innerHTML =  icon + description;
        document.getElementById('humidity').innerHTML = "Humidity: " + humidity;
        document.getElementById('wind').innerHTML = "Wind speed: " + windspeed;
 
      })
      .catch(error => console.error(error));

}

