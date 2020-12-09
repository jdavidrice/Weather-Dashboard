class Weather {
  constructor(city) {
    this.apiKey = '857d8b3aed4b93541a08ad2a027ffb0c';
    this.city = city
  }

  // Fetch weather
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }

}