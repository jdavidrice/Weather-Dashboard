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

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
const input = document.getElementById('nameOfCity.value');
// localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
    
itemsArray.push(city)
localStorage.setItem('items', JSON.stringify(itemsArray))
// liMaker(input.value)
// input.value = ''


// Below this line are the closing delimiters for the ready function at the top of the page
// })