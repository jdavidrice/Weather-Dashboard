// jQuery wrapper
// $(document).ready(function () {

class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'Miami';

  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    return {
      city: this.city,
    }
  }

  setLocationData(city) {
    localStorage.setItem('city', city);
  }

}

let citiesArray = localStorage.getItem('cities') ? JSON.parse(localStorage.getItem('cities')) : []
const input = document.getElementById('nameOfCity.value');
const MAX_CITIES = 5
// localStorage.setItem('cities', JSON.stringify(citiesArray))
const data = JSON.parse(localStorage.getItem('cities'))

citiesArray.push(city)
localStorage.setItem('cities', JSON.stringify(citiesArray))
// liMaker(input.value)
// input.value = ''


// Below this line are the closing delimiters for the ready function at the top of the page
// })