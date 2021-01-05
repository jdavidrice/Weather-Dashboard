// jQuery wrapper
// $(document).ready(function () {

class Weather {
  constructor(city) {
    this.apiKey = '857d8b3aed4b93541a08ad2a027ffb0c';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`);

    const responseData = await response.json();
    console.log("First Call", responseData)

    const lat = responseData.coord.lat
    const lon = responseData.coord.lon
    const UVresponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${this.apiKey}&units=imperial`);

    const UVresponseData = await UVresponse.json();
    console.log("Second Call", UVresponseData)
    responseData.uv = UVresponseData.current.uvi
    responseData.dayOne = UVresponseData.daily[1]
    responseData.dayTwo = UVresponseData.daily[2]
    responseData.dayThree = UVresponseData.daily[3]
    responseData.dayFour = UVresponseData.daily[4]
    responseData.dayFive = UVresponseData.daily[5]

    return responseData;
  }
  // Change weather location
  changeLocation(city) {
    this.city = city;
  }

  // The curly bracket below closes the Weather class from the top of the page
}

// Below this line are the closing delimiters for the ready function at the top of the page
// })