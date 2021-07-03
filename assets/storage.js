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
    if ($.inArray(this.city, this.history) == -1) {
      this.history.push(this.city);
    }
    localStorage.setItem('cities', JSON.stringify(this.history));
  }
}
