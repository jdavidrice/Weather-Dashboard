class Weather {
  constructor(city) {
    this.apiKey = '857d8b3aed4b93541a08ad2a027ffb0c';
    this.city = city
  }

  Fetch weather
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`);

    const responseData = await response.json();

    return responseData.current_observation;
  }


  // Change weather location
  changeLocation(city) {
    this.city = city;
  }

  // // This is our API key
  // var apiKey = "857d8b3aed4b93541a08ad2a027ffb0c";

  // // This is the city variable
  // var city = "Detroit"

  // // Daily Weather api (no UV index)
  // var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`


  // Here we run our AJAX call to the OpenWeatherMap API


// function getWeather() {
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     // We store all of the retrieved data inside of an object called "response"
//     .then(function (response) {

      // Set the icon variable
  //     var icon = `${response.weather[0].icon}`;

  //     // Transfer content to HTML
  //     $('#city').html(`<h1>${response.name} Weather Details</h1>`);
  //     $('#date').text(`${m.format('[Current conditions:] dddd, MMMM Do YYYY')}`);
  //     $('#icon').attr("src", `${`http://openweathermap.org/img/wn/${icon}@2x.png`}`);
  //     $('#temp').text(`Temperature: ${response.main.temp} Degrees F`);
  //     $('#humidity').text(`Humidity: ${response.main.humidity}%`);
  //     $('#windSpeed').text(`Wind Speed: ${response.wind.speed} MPH`);

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
  
// The curly bracket below closes the Weather class from the top of the page
}