// To make API call

class Weather {
  constructor(city) {
    this.apiKey = '857d8b3aed4b93541a08ad2a027ffb0c';
    this.city = city;
    // this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Boston&appid=857d8b3aed4b93541a08ad2a027ffb0c');

    const responseData = await response.json();

    return responseData.list;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
    // this.state = state;
  }
}


// Init weather object
const weather = new Weather('Boston');

weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));



