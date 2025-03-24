const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = 'fb64d7e55cc0f92ddc946d3b8ad81bb9';

weatherForm.addEventListener('submit', event => {

  event.preventDefault();

  const city = cityInput.value;

  if (city) {

  }
  else {
    displayError('Please enter a city');
  }
});

async function getWeatherData(city) {

}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {

  const errorDisplay = document.createElement('p');
  errorDisplay.textContent = message;
  errorDisplay.classList.add('errorDisplay');

  card.textContent = '';
  card.style.display = 'flex';
  card.appendChild(errorDisplay);
}