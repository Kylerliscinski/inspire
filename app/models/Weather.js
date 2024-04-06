


export class Weather {
  constructor(data) {
    this.name = data.name
    this.icon = data.weather.icon
    this.weather = data.weather[0].main
    this.temp = data.main.temp
    this.celcius = Math.round(data.main.temp - 273)
    this.fahrenheit = Math.round((data.main.temp - 273) * 9 / 5 + 32)
    this.displayTemp = true
  }

  changeTemp() {
    this.displayTemp = !this.displayTemp
  }

  get ActiveWeatherTemplate() {
    return `
    <div onclick="app.WeatherController.toggleWeather()" class="row border border-white rounded ms-3 selectable">
      <div id="temp" class="col-6 px-2 align-content-center">
      ${this.temperature}
      <br>
      ${this.weather}
      </div>
      <div class="col-6 align-content-center">
      <img width="50" src="${this.icon}" class="img-white" alt=""/>
      </div>
    </div>
    `
  }

  get temperature() {
    if (this.displayTemp) return `${this.fahrenheit} F`
    else return `${this.celcius} C`
  }
}