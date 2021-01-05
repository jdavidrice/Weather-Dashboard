
// jQuery wrapper
// $(document).ready(function () {

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
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  e.preventDefault()
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

// Change location event (on enter key)
// document.getElementById('city').addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     const city = document.getElementById('city').value;

//     // Change location
//     weather.changeLocation(city);

//     // Set location in LS
//     storage.setLocationData(city);

//     storage.setCitiesArray();

//     // Get and display weather
//     getWeather();

//     // Close modal
//     $('#locModal').modal('hide');
//   }
// });



function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

// getWeather()

// Below this line are the closing delimiters for the ready function at the top of the page
// })
