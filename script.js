const apiKey = '8ebc5c9241567dd4597709ae3c8e7332';

async function getWeather() {
  const city = document.getElementById('city-input').value;

  if (!city) {
    alert('Please enter a city name');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      displayWeather(data);
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    alert('An error occurred while fetching data');
  }
}

function displayWeather(data) {
  const weatherInfoElement = document.getElementById('weather-info');
  weatherInfoElement.innerHTML = `
    <h2>Weather in ${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
}