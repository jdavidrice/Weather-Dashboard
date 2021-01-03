// jQuery wrapper
// $(document).ready(function () {

class UI {
  constructor() {
    this.city = document.getElementById('nameOfCity');
    this.date = document.getElementById('date');
    this.date2 = document.getElementById('date2');
    this.icon = document.getElementById('icon');
    this.desc = document.getElementById('desc');
    this.temp = document.getElementById('temp');
    this.humidity = document.getElementById('humidity');
    this.windSpeed = document.getElementById('windSpeed');
    this.uvIndex = document.getElementById('uvIndex');
    this.recentLocations = document.getElementById('recentLocations');

    this.dayOneDesc = document.getElementById('dayOneDesc');
    this.dayOneDate = document.getElementById('dayOneDate');
    this.dayOneIcon = document.getElementById('dayOneIcon');
    this.dayOneTemp = document.getElementById('dayOneTemp');
    this.dayOneHumidity = document.getElementById('dayOneHumidity');

    this.dayTwoDesc = document.getElementById('dayTwoDesc');
    this.dayTwoDate = document.getElementById('dayTwoDate');
    this.dayTwoIcon = document.getElementById('dayTwoIcon');
    this.dayTwoTemp = document.getElementById('dayTwoTemp');
    this.dayTwoHumidity = document.getElementById('dayTwoHumidity');

    this.dayThreeDesc = document.getElementById('dayThreeDesc');
    this.dayThreeDate = document.getElementById('dayThreeDate');
    this.dayThreeIcon = document.getElementById('dayThreeIcon');
    this.dayThreeTemp = document.getElementById('dayThreeTemp');
    this.dayThreeHumidity = document.getElementById('dayThreeHumidity');

    this.dayFourDesc = document.getElementById('dayFourDesc');
    this.dayFourDate = document.getElementById('dayFourDate');
    this.dayFourIcon = document.getElementById('dayFourIcon');
    this.dayFourTemp = document.getElementById('dayFourTemp');
    this.dayFourHumidity = document.getElementById('dayFourHumidity');

    this.dayFiveDesc = document.getElementById('dayFiveDesc');
    this.dayFiveDate = document.getElementById('dayFiveDate');
    this.dayFiveIcon = document.getElementById('dayFiveIcon');
    this.dayFiveTemp = document.getElementById('dayFiveTemp');
    this.dayFiveHumidity = document.getElementById('dayFiveHumidity');

  }

  paint(weather) {
    // Current day 
    let now = new Date();
    let dayofweek = new Array(7);
    dayofweek[0] = "Sunday";
    dayofweek[1] = "Monday";
    dayofweek[2] = "Tuesday";
    dayofweek[3] = "Wednesday";
    dayofweek[4] = "Thursday";
    dayofweek[5] = "Friday";
    dayofweek[6] = "Saturday";
    let day = dayofweek[now.getDay()];

    this.city.textContent = `${weather.name}`;
    this.date.textContent = `${day}`
    this.date2.textContent = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
    // this.date.textContent = `${now.getDay()} `;
    this.desc.textContent = `${weather.weather[0].description}`;
    $('#icon').attr("src", `${`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}`);
    this.temp.textContent = `Temperature: ${weather.main.temp} Degrees F`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed} MPH`;
    this.uvIndex.textContent = `UV Index: ${weather.uv}`;

    storage.getCitiesArray()

    this.createCityButtons(storage.history)

    uvi = weather.uv;
    setUvColor(uvi);

    let dayOneUTC = weather.dayOne.dt;
    let dayOneJsTime = dayOneUTC * 1000;
    let dayOneDate = new Date(dayOneJsTime);
    let dayOne = dayofweek[dayOneDate.getDay()];

    let dayTwoUTC = weather.dayTwo.dt;
    let dayTwoJsTime = dayTwoUTC * 1000;
    let dayTwoDate = new Date(dayTwoJsTime);
    let dayTwo = dayofweek[dayTwoDate.getDay()];

    let dayThreeUTC = weather.dayThree.dt;
    let dayThreeJsTime = dayThreeUTC * 1000;
    let dayThreeDate = new Date(dayThreeJsTime);
    let dayThree = dayofweek[dayThreeDate.getDay()];

    let dayFourUTC = weather.dayFour.dt;
    let dayFourJsTime = dayFourUTC * 1000;
    let dayFourDate = new Date(dayFourJsTime);
    let dayFour = dayofweek[dayFourDate.getDay()];

    let dayFiveUTC = weather.dayFive.dt;
    let dayFiveJsTime = dayFiveUTC * 1000;
    let dayFiveDate = new Date(dayFiveJsTime);
    let dayFive = dayofweek[dayFiveDate.getDay()];

    this.dayOneDesc.textContent = `${weather.dayOne.weather[0].description}`;
    this.dayOneDate.textContent = `${dayOne}`;
    $('#dayOneIcon').attr("src", `${`http://openweathermap.org/img/wn/${weather.dayOne.weather[0].icon}@2x.png`}`);
    this.dayOneTemp.textContent = `Daytime Temp: ${weather.dayOne.temp.day} Degrees F`;
    this.dayOneHumidity.textContent = `Humidity: ${weather.dayOne.humidity}%`

    this.dayTwoDesc.textContent = `${weather.dayTwo.weather[0].description}`;
    this.dayTwoDate.textContent = `${dayTwo}`;
    $('#dayTwoIcon').attr("src", `${`http://openweathermap.org/img/wn/${weather.dayTwo.weather[0].icon}@2x.png`}`);
    this.dayTwoTemp.textContent = `Daytime Temp: ${weather.dayTwo.temp.day} Degrees F`;
    this.dayTwoHumidity.textContent = `Humidity: ${weather.dayTwo.humidity}%`

    this.dayThreeDesc.textContent = `${weather.dayThree.weather[0].description}`;
    this.dayThreeDate.textContent = `${dayThree}`;
    $('#dayThreeIcon').attr("src", `${`http://openweathermap.org/img/wn/${weather.dayThree.weather[0].icon}@2x.png`}`);
    this.dayThreeTemp.textContent = `Daytime Temp: ${weather.dayThree.temp.day} Degrees F`;
    this.dayThreeHumidity.textContent = `Humidity: ${weather.dayThree.humidity}%`

    this.dayFourDesc.textContent = `${weather.dayFour.weather[0].description}`;
    this.dayFourDate.textContent = `${dayFour}`;
    $('#dayFourIcon').attr("src", `${`http://openweathermap.org/img/wn/${weather.dayFour.weather[0].icon}@2x.png`}`);
    this.dayFourTemp.textContent = `Daytime Temp: ${weather.dayFour.temp.day} Degrees F`;
    this.dayFourHumidity.textContent = `Humidity: ${weather.dayFour.humidity}%`

    this.dayFiveDesc.textContent = `${weather.dayFive.weather[0].description}`;
    this.dayFiveDate.textContent = `${dayFive}`;
    $('#dayFiveIcon').attr("src", `${`http://openweathermap.org/img/wn/${weather.dayFive.weather[0].icon}@2x.png`}`);
    this.dayFiveTemp.textContent = `Daytime Temp: ${weather.dayFive.temp.day} Degrees F`;
    this.dayFiveHumidity.textContent = `Humidity: ${weather.dayFive.humidity}%`
  }
  createCityButtons(cities) {
    $("#recentLocations").empty();
    for (var i = 0; i < cities.length; i++) {
      const button = document.createElement("button")
      button.className = "btn btn-secondary btn-sm"
      button.textContent = cities[i]

      button.addEventListener("click", function () {
        const city = `${button.textContent}`;
        // Change location
        weather.changeLocation(city);
        // Set location in LS
        storage.setLocationData(city);
        getWeather(city)
      })

      this.recentLocations.appendChild(button)

    }
  }
}

// Change UV color
const LOW_THRESHOLD = 2;
const MODERATE_THRESHOLD = 5;
const HIGH_THRESHOLD = 7;
const VERYHIGH_THRESHOLD = 10;
const EXTREME_THRESHOLD = 11;
let uvi;

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