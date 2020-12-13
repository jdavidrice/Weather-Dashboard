class Forecast {
  constructor(city) {
    this.apiKey = '857d8b3aed4b93541a08ad2a027ffb0c';
    this.city = city;
  }


  // Fetch forecast from API
  async getForecast() {
    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${this.apiKey}&units=imperial`);

    const forecastResponseData = await forecastResponse.json();

    console.trace(forecastResponseData)
    return forecastResponseData;

  }


  // Change weather location
  // changeLocation(city) {
  //   this.city = city;
  }

  // The curly bracket below closes the Weather class from the top of the page
}  