// jQuery wrapper
// $(document).ready(function () {

class Weather2 {
  constructor(lat, lon) {
    this.apiKey = '857d8b3aed4b93541a08ad2a027ffb0c';
    this.lat = lat;
    this.lon = lon;
  }


  // Second fetch to API that provides UV data
  async getWeather2() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=29.76&lon=-95.36&appid=${this.apiKey}`);

    const responseData = await response.json();
    
    return responseData;
    
  }

  // Change weather location
  changeLocation(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  

  // The curly bracket below closes the Weather2 class from the top of the page
}



// function getUvData() {
//   const uvURL = response2;
//   console.log(uvURL)
//     .then(function (uvData) {
//       $('#uvIndex').text(`UV Index: ${uvData.current.uvi}`);
//     })
// }

// getUvData(response2.coord.lat, response2.coord.lon)

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