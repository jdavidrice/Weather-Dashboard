
// jQuery wrapper
// $(document).ready(function () {

// Solution 4

// Moment instance
const m = moment();

// Init weather object
const weather = new Weather('Honolulu');

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Hartford');

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(err => console.log(err));
}


  // Solution 3

  // Moment instance
  // const m = moment();

  // // Init storage
  // const storage = new Storage();
  // // Get stored location data
  // const weatherLocation = storage.getLocationData();
  // // Init weather object
  // const weather = new weather(weatherLocation.city);

  // This is our API key
  // var apiKey = "857d8b3aed4b93541a08ad2a027ffb0c";

  // This is the city variable
  // var city = "Detroit"

  // Daily Weather api (no UV index)
  // var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

  // Change to new city event listener
  // document.getElementById('w-change-btn').addEventListener('click', (e) => {
  //   const city = document.getElementById('city').value;

  //   weather.changeLocation('Miami');

  //   // Get and display weather
  //   getWeather();

  //   // Close modal
  //   $('#locModal').modal('hide');
  // });


  // // This is the most recent city chosen
  // var mostRecentCity = localStorage.getItem('mostRecentCity')

  // // This sets the most recent city from the text entered into the city textarea
  // city.innerText = mostRecentCity

  // // This is the save button
  // var saveChangesBtn = document.querySelector('#saveChangesBtn')

  // // This is the list of five most recently searched cities
  // var citiesList = JSON.parse(localStorage.getItem('citiesList')) || []
  // const MAX_CITIES = 5

  // // Save city function
  // saveCity = e => {
  //   e.preventDefault()

  //   const city = { 
  //     city: mostRecentCity
  //   }

  //   //Five most recent cities are saved
  //   citiesList.push(city)

  //   citiesList.sort((a, b) => {
  //     return b.city - a.city
  //   })

  //   citiesList.splice(5)

  //   // list of cities is saved in local storage
  //   localStorage.setItem('citiesList', JSON.stringify(citiesList))
  // }



  // Here we run our AJAX call to the OpenWeatherMap API

  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // })
  //   // We store all of the retrieved data inside of an object called "response"
  //   .then(function (response) {

      // Set the icon variable
      // var icon = `${response.weather[0].icon}`;

  //     // Transfer content to HTML
      // $('#city').html(`<h1>${response.name} Weather Details</h1>`);
      // $('#date').text(`${m.format('[Current conditions:] dddd, MMMM Do YYYY')}`);
      // $('#icon').attr("src", `${`http://openweathermap.org/img/wn/${icon}@2x.png`}`);
      // $('#temp').text(`Temperature: ${response.main.temp} Degrees F`);
      // $('#humidity').text(`Humidity: ${response.main.humidity}%`);
      // $('#windSpeed').text(`Wind Speed: ${response.wind.speed} MPH`);

  //     // Call UV data function using the lat and lon data passed in from the queryURL API call
  //     getUvData(response.coord.lat, response.coord.lon)

  //   });

  // // UV data function (with API call)

  // function getUvData(lat, lon) {
  //   const uvURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
  //   // console.log(uvURL)
  //   $.ajax({
  //     url: uvURL,
  //     method: "GET"
  //   })
  //     .then(function (uvData) {
  //       $('#uvIndex').text(`UV Index: ${uvData.current.uvi}`);

  //     })

  // }

  // Possibley use this for the UV data function with API call (from Chris B.)
  // async function getData() {
  //   try {
  //     const firstCall = await ajax()
  //     if (firstCall) {
  //       const secondCall = await ajax(`/url/${firstCall}`)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Solution 2 (incomplete and broken)

  // My API key
  // var APIKey = '857d8b3aed4b93541a08ad2a027ffb0c';

  // var city = city;

  // // Building the URL to query the database
  // var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;

  // // Run AJAX call to the OpenWeatherMap API
  // $.ajax({
  //   url: queryURL,
  //   method: 'GET'
  // })

  //   // Store retrieved data inside an object called 'repsonse'
  //   .then(function (response) {

  //     // Log the queryURL
  //     console.log(queryURL);

  //     // Log the resulting object
  //     console.log(response);

  //       // Need to display current weather conditions
  //       // city name
  //       // date
  //       // icon representing current weather conditions
  //       // temp
  //       // humidity
  //       // wind speed
  //       // UV index

  //     // Transfer content to HTML
  //     $('#city').html(`<h1>${response.name} Weather Details</h1>`);
  //     $('#date').text(`Date ${response.date}`);
  //     $('#icon').text(`${response.icon}`);
  //     $('#temp').text(`Temperature (K) ${response.main.temp}`);
  //     $('#tempF').text(`Temperature (F) ${tempF.tofixed(2)}`);
  //     $('#humidity').text(`Humidity ${response.main.humidity}`);
  //     $('#windSpeed').text(`Wind Speed ${response.wind.speed}`);
  //     $('#uvIndex').text(`UV Index ${response.main.uvindex}`);

  //     // Convert temp to F
  //     var tempF = (response.main.temp - 273.15) * 1.80 + 32;

  //     // Log the data in the console
  //     console.log(`<h1>${response.name} Weather Details</h1>`);
  //     console.log(`Date ${response.date}`);
  //     console.log(`${response.icon}`);
  //     console.log(`Temperature (K) ${response.main.temp}`);
  //     console.log(`Temperature (F) ${tempF.tofixed(2)}`);
  //     console.log(`Humidity ${response.main.humidity}`);
  //     console.log(`Wind Speed ${response.wind.speed}`);
  //     console.log(`UV Index ${response.main.uvindex}`);


  //   });



  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Solution 1 (incomplete)


  // Below this line are the closing "ready function" delimiters from the top of the page
// })
