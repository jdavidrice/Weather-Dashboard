
// jQuery wrapper
$(document).ready(function () {
  
  // Need to display current weather conditions
  // city name
  // date
  // icon representing current weather conditions
  // temp
  // humidity
  // wind speed
  // UV index

  // Solution 2

  // My API key
  var APIKey = '857d8b3aed4b93541a08ad2a027ffb0c';
  var city = city;

  // Building the URL to query the database
  var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;

  // Run AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: 'GET'
  })

    // Store retrieved data inside an object called 'repsonse'
    .then(function (response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML
      $('#city').html(`<h1>${response.name} Weather Details</h1>`);
      $('#date').text(`Date ${response.date}`);
      $('#icon').text(`${response.icon}`);
      $('#temp').text(`Temperature (K) ${response.main.temp}`);
      $('#tempF').text(`Temperature (F) ${tempF.tofixed(2)}`);
      $('#humidity').text(`Humidity ${response.main.humidity}`);
      $('#windSpeed').text(`Wind Speed ${response.main.windspeed}`);
      $('#uvIndex').text(`UV Index ${response.main.uvindex}`);

      // Convert temp to F
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;

      // Log the data in the console
      console.log(`<h1>${response.name} Weather Details</h1>`);
      console.log(`Date ${response.date}`);
      console.log(`${response.icon}`);
      console.log(`Temperature (K) ${response.main.temp}`);
      console.log(`Temperature (F) ${tempF.tofixed(2)}`);
      console.log(`Humidity ${response.main.humidity}`);
      console.log(`Wind Speed ${response.main.windspeed}`);
      console.log(`UV Index ${response.main.uvindex}`);


    });



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Solution 1 (incomplete)

// To make API call

// class Weather {
//   constructor(city, state) {
//     this.apiKey = '857d8b3aed4b93541a08ad2a027ffb0c';
//     this.city = city;
//     this.state = state;
//   }

//   // Fetch weather from API
//   async getWeather() {
//     const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.state}&appid=${this.apiKey}`);

//     const responseData = await response.json();

//     return responseData;
//   }

//   // Change weather location
//   changeLocation(city, state) {
//     this.city = city;
//     this.state = state;
//   }
// }


// // Init weather object
// const weather = new Weather('Hartford');

// weather.getWeather()
//   .then(results => {
//     console.log(results);
//   })
//   .catch(err => console.log(err));






// Below this line are the closing "ready function" delimiters from the top of the page
})
