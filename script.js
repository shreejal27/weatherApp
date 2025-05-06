const backgroundImages = [
  'cloudy.jpg',
  'lighting.jpg',
  'night.jpg',
  'rain.jpg',
  'sky.jpg',
  'sunny.jpg',
];

document.addEventListener('DOMContentLoaded', function () {
  let random = Math.floor(Math.random() * (5)) + 1;
  document.body.style.backgroundImage = "url('./images/" + backgroundImages[random] + "')";
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
  const apiKey = process.env.REACT_APP_API_KEY;
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

      document.getElementById('temperature').innerHTML = "Weather in " + name;
      document.getElementById('title').innerHTML = temperature + "°C";
      document.getElementById('subtitle').innerHTML = "Feels like " + feelslike + "°C";
      document.getElementById('icon').src = "http://openweathermap.org/img/wn/" + icon + ".png";
      document.getElementById('description').innerHTML = description;
      document.getElementById('humidity').innerHTML = "Humidity: " + humidity + "%";
      document.getElementById('wind').innerHTML = "Wind speed: " + windspeed + "km/hr";

      document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    })
    .catch(error => {
      // console.error(error);
      alert("\n" + city + "'s weather stats are not available. \n\n Search for another city ");
    });
}

