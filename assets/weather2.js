// jQuery wrapper
// $(document).ready(function () {

class Weather2 {
  constructor(lat, lon) {
    this.apiKey = '857d8b3aed4b93541a08ad2a027ffb0c';
    this.lat = lat;
    this.lon = lon;
  }


  // Second fetch to API that provides UV data and 5-day forcast
  async getWeather2() {
    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`);

    const responseData2 = await response2.json();

    return responseData2;

  }

  // Change weather location
  changeLocation(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }


  // The curly bracket below closes the Weather2 class from the top of the page
}


function getUvData() {
  const uvURL = response2;
  console.log(uvURL)
    .then(function (uvData) {
      $('#uvIndex').text(`UV Index: ${uvData.current.uvi}`);
    })
}

getUvData()

// let lat = weather.coord.lat
// let lon = weather.coord.lon
// getUvData(lat, lon)




  // UV data function (with API call)
//   function getUvData(lat, lon) {
//   const uvURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
//   console.log(uvURL)
//   $.ajax({
//     url: uvURL,
//     method: "GET"
//   })
//     .then(function (uvData) {
//       $('#uvIndex').text(`UV Index: ${uvData.current.uvi}`);

//     })

//   }

//  // Call UV data function using the lat and lon data passed in from the queryURL API call
// getUvData(response.coord.lat, response.coord.lon)