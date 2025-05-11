document.addEventListener('DOMContentLoaded', function () {
  let random = Math.floor(Math.random() * 1000);
  document.body.style.backgroundImage = "url('https://picsum.photos/1600/900?random=" + random + "')";
});

var input = document.getElementById("city");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

function getValue() {
  var city = document.getElementById('city').value;
  const apiKey = "bd7474449235b2bf05180173b4c6fa51";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const name = data.name;
      const icon = data.weather[0].icon;
      const description = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windspeed = data.wind.speed;
      const feelslike = data.main.feels_like;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;

      const sunriseDate = new Date(sunrise * 1000);
      const sunsetDate = new Date(sunset * 1000);

      const options = {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };

      const randomizer = Math.floor(Math.random() * 1000);

      const backgroundImage = new Image();
      backgroundImage.src = "https://picsum.photos/1600/900?random=" + randomizer;
      //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" +name+ "')";

      backgroundImage.onload = function () {
        document.body.style.backgroundImage = "url('" + backgroundImage.src + "')";
        document.body.style.transition = "background-image 0.6s ease-in-out";

        document.getElementById('temperature').innerHTML = "Weather in " + name;
        document.getElementById('title').innerHTML = temperature + "°C";
        document.getElementById('subtitle').innerHTML = "Feels like " + feelslike + "°C";
        document.getElementById('icon').src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById('description').innerHTML = description;
        document.getElementById('humidity').innerHTML = "Humidity: " + humidity + "%";
        document.getElementById('wind').innerHTML = "Wind speed: " + windspeed + "km/hr";
        document.getElementById('sunrise').innerHTML = "Sunrise: " + sunriseDate.toLocaleTimeString('en-US', options);
        document.getElementById('sunset').innerHTML = "Sunset: " + sunsetDate.toLocaleTimeString('en-US', options);
      }

    })
    .catch(error => {
      // console.error(error);
      alert("\n" + city + "'s weather stats are not available. \n\n Search for another city ");
    });
}

