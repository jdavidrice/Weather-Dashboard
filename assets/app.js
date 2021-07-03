// Init storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event (on button click)
document.getElementById('w-change-btn').addEventListener('click', (event) => {
  // e.preventDefault()
  const city = document.getElementById('city').value.trim().toLowerCase()
  document.getElementById('city').value = ''
  console.log(city)
  if (city.length > 0) {
    // Change location
    weather.changeLocation(city);
    // Set location in LS as city and as array element
    storage.setLocationData(city);
    storage.setCitiesArray();
    // Get and display weather
    getWeather();
    // Close modal
    $('#locModal').modal('hide');
  }

});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

