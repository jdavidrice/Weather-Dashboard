// jQuery wrapper
// $(document).ready(function () {
  
class UI {
  constructor() {
    this.city = document.getElementById('nameOfCity');
    this.date = document.getElementById('date');
    this.icon = document.getElementById('icon');
    this.desc = document.getElementById('desc');
    this.temp = document.getElementById('temp');
    this.humidity = document.getElementById('humidity');
    this.windSpeed = document.getElementById('windSpeed');
    this.uvIndex = document.getElementById('uvIndex');

  }

  paint(weather) {
    this.city.textContent = `${weather.name}`;
    this.date.textContent = `${m.format('dddd, MMMM Do YYYY')}`;
    this.desc.textContent = `${weather.weather[0].description}`;
    $('#icon').attr("src", `${`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}`);
    this.temp.textContent = `Temperature: ${weather.main.temp} Degrees F`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed} MPH`;
    // this.uvData.textContent = `UV Index: ${uvData.current.uvi}`;

  }

}

// Below this line are the closing delimiters for the ready function at the top of the page
// })


  //     // Transfer content to HTML
  //     this.city.textContent = $('#city').html(`<$>${response.name} Weather Details</$>`);
  //     $('#date').text(`${m.format('[Current conditions:] dddd, MMMM Do YYYY')}`);
  //     $('#icon').attr("src", `${`http://openweathermap.org/img/wn/${icon}@2x.png`}`);
  //     $('#temp').text(`Temperature: ${response.main.temp} Degrees F`);
  //     $('#humidity').text(`Humidity: ${response.main.humidity}%`);
  //     $('#windSpeed').text(`Wind Speed: ${response.wind.speed} MPH`);

  //     // Call UV data function using the lat and lon data passed in from the queryURL API call
  //     getUvData(response.coord.lat, response.coord.lon)


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