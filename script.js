function getValue(){
    var city = document.getElementById('city').value;
    const apiKey = "bd7474449235b2bf05180173b4c6fa51";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const name = data.name;
        const icon = data.weather[0].icon;
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windspeed = data.wind.speed;
    
        console.log(name,icon, description,temperature,humidity, windspeed);
        document.getElementById('temperature').innerHTML = "Weather in " + name;
        document.getElementById('title').innerHTML =  (temperature-273.15) + "C";
        document.getElementById('icon').src = "http://openweathermap.org/img/wn/"+ icon+ ".png";
        document.getElementById('description').innerHTML =  description;
        document.getElementById('humidity').innerHTML = "Humidity: " + humidity + "%";
        document.getElementById('wind').innerHTML = "Wind speed: " + windspeed + "km/hr";
 
      })
      .catch(error => console.error(error));

}

