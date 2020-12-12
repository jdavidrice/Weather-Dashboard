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

// Below this line are the closing delimiters for the ready function at the top of the page
// })