
// jQuery wrapper
$(document).ready(function () {

  // Solution 3

  // Moment instance
  const m = moment();

  // This is our API key
  var apiKey = "857d8b3aed4b93541a08ad2a027ffb0c";

  // Here we are building the URL we need to query the database. May need to convert from city name to lat/long to use OneCall api.
  // OneCall api to get UV index
  // var queryURL = (`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=${apiKey}`);
  // City api (no UV index)
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Tokyo&appid=" + apiKey;


  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

      var icon = `${response.weather[0].icon}`;
      // console.log(icon);

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Convert the temp to fahrenheit
      var tempFar = (response.main.temp - 273.15) * 1.80 + 32;
      console.log(tempFar);

      // Transfer content to HTML
      $('#city').html(`<h1>${response.name} Weather Details</h1>`);
      $('#date').text(`${m.format('[Today is] dddd, MMMM Do YYYY')}`);
      $('#icon').attr("src", `${`http://openweathermap.org/img/wn/${icon}@2x.png`}`);
      $('#temp').text(`Temperature (K) ${response.main.temp}`);
      $('#tempF').text(`Temperature (F) ${tempFar.toFixed(2)}`);
      $('#humidity').text(`Humidity ${response.main.humidity}`);
      $('#windSpeed').text(`Wind Speed ${response.wind.speed}`);
      

      // add temp content to html
      $("#temp").text(`Temperature (K) ${response.main.temp}`);
      $("#tempF").text(`Temperature (F) ${tempFar.toFixed(2)}`);

      // Log the data in the console as well
      console.log(`<h1>${response.name} Weather Details</h1>`);
      console.log(`Date ${response.coord}`);
      console.log(`${response.icon}`);
      console.log(`Temperature (K) ${response.main.temp}`);
      // console.log(`Temperature (F) ${tempFar.tofixed(2)}`);
      console.log(`Humidity ${response.main.humidity}`);
      console.log(`Wind Speed ${response.wind.speed}`);
      // console.log(`UV Index ${response.main.uvindex}`);
      getUvData(response.coord.lat, response.coord.lon)
      
    });

  function getUvData(lat, lon) {
    const uvURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    console.log(uvURL)
    $.ajax({
      url: uvURL,
      method: "GET"
    })
      .then(function (uvData) {
        $('#uvIndex').text(`UV Index ${uvData.current.uvi}`);

    })

  }


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
