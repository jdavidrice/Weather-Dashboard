// jQuery wrapper
// $(document).ready(function () {
class Storage {
  constructor() {
    this.city = '';
    this.history = ['London'];
    this.defaultCity = this.history[this.history.length - 1]
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
    this.city = city;
    localStorage.setItem('city', this.city);
  }

  getCitiesArray() {
    const citiesArray = localStorage.getItem('cities') ? JSON.parse(localStorage.getItem('cities')) : []
    this.history = citiesArray;
  }

  setCitiesArray() {
    this.getCitiesArray();
    this.history.push(this.city);
    localStorage.setItem('cities', JSON.stringify(this.history))
    ;
  }

}

// const input = document.getElementById('nameOfCity').value;
// const MAX_CITIES = 5
// // localStorage.setItem('cities', JSON.stringify(citiesArray))
// const data = JSON.parse(localStorage.getItem('cities'))

// citiesArray.push(city)
// localStorage.setItem('cities', JSON.stringify(citiesArray))
// liMaker(input.value)
// input.value = ''


// Below this line are the closing delimiters for the ready function at the top of the page
// })