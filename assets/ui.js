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
    this.recentLocations = document.getElementById('recentLocations');

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
    storage.getCitiesArray()
    this.recentLocations.textContent = `${storage.history}`;

  }
}

// Change UV color
const LOW_THRESHOLD = 2;
const MODERATE_THRESHOLD = 5;
const HIGH_THRESHOLD = 7;
const VERYHIGH_THRESHOLD = 10;
const EXTREME_THRESHOLD = 11;

// Colors for UV levels

// Green (<2, low) = rgb: 131, 197,1
// Orange (3-5, moderate) = rgb: 247, 178, 0
// Red (6-7, high) = rgb: 238, 63, 8
// Purple (8-10, very high) = rgb: 246, 7, 162
// Violet (11+, extreme) = rgb: 112, 182, 254

const COLOR_CODES = {
  low: {
    color: "green",
    threshold: LOW_THRESHOLD
  },
  moderate: {
    color: "orange",
    threshold: MODERATE_THRESHOLD
  },
  high: {
    color: "red",
    threshold: HIGH_THRESHOLD
  },
  veryHigh: {
    color: "purple",
    threshold: VERYHIGH_THRESHOLD
  },
  extreme: {
    color: "violet",
    threshold: EXTREME_THRESHOLD
  }
};

const uvi = 11;

function setUvColor(uvi) {
  const { low, moderate, high, veryHigh, extreme } = COLOR_CODES;
  if (uvi <= low.threshold) {
    document
      .getElementById('uvIndex')
      .classList.add(low.color);
  } else if (uvi <= moderate.threshold) {
    document
      .getElementById('uvIndex')
      .classList.remove(low.color);
    document
      .getElementById('uvIndex')
      .classList.add(moderate.color);
  } else if (uvi <= high.threshold) {
    document
      .getElementById('uvIndex')
      .classList.remove(moderate.color);
    document
      .getElementById('uvIndex')
      .classList.add(high.color);
  } else if (uvi <= veryHigh.threshold) {
    document
      .getElementById('uvIndex')
      .classList.remove(high.color);
    document
      .getElementById('uvIndex')
      .classList.add(veryHigh.color);
  } else if (uvi >= extreme.threshold) {
    document
      .getElementById('uvIndex')
      .classList.remove(veryHigh.color);
    document
      .getElementById('uvIndex')
      .classList.add(extreme.color)
  }
}

setUvColor(uvi);
console.log("running", setUvColor)
console.log("uvi", uvi)








// // Save name of city to list
// const input = this.city;
// const locations = document.getElementById('recentLocations');
// const saveBtn = document.getElementById('w-change-btn');

// const liMaker = (text) => {
//   const li = document.createElement('li')
//   li.textContent = text
//   locations.appendChild(li)
// }

// saveBtn.addEventListener('click', function (e) {
//   e.preventDefault()

//   liMaker(input.value)
//   input.value = ''

// })






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