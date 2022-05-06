var apiKey = "56441d601f3ab1f99b347d66b6005856";

function getDate() {
  //   const eventStartEl = document.querySelector("#event-date").innerHTML;
  const locationEl = document.querySelector("#event-location").innerHTML;
  return locationEl;
  //   console.log(locationEl, eventStartEl);

  //   let daysUntil = datefns.formatDistanceToNowStrict(locationEl, {
  //     unit: "day",
  //     roundingMethod: "ceil",
  //   });
}

async function getWeatherData(city) {
  const weatherURL = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey
  );
  var coordinates = await weatherURL.json();
  var lat = coordinates.coord.lat;
  var lon = coordinates.coord.lon;

  const requestURL = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=imperial&appid=" +
      apiKey
  );
  var weatherObject = await requestURL.json();

  console.log(weatherObject);

  renderToday(weatherObject);
  renderForecast(weatherObject);
}

function renderForecast(data) {
  let forecastCard = document.querySelector("#weatherData");
  console.log(forecastCard);
  $(forecastCard).empty();
  let forecastData = data.daily[1];

  let forecastDate = document.createElement("p");
  forecastDate.textContent = moment.unix(forecastData.dt).format("MM/DD/YY");
  console.log(forecastDate);

  let forecastIcon = document.createElement("img");
  forecastIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${forecastData.weather[0].icon}@2x.png`
  );

  let forecastTemp = document.createElement("p");
  forecastTemp.textContent =
    "Temperature: " + Math.round(forecastData.temp.day) + "°F";

  forecastCard.appendChild(forecastDate);
  forecastCard.appendChild(forecastIcon);
  forecastCard.appendChild(forecastTemp);
}
