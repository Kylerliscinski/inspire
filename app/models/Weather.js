



export class Weather {
  constructor(data) {
    this.name = data.name
    this.icon = data.weather.icon
    this.weather = data.weather
    this.temp = data.main.temp

  }

  get ActiveWeatherTemplate() {
    return `
    <div class="row border border-white rounded ms-3">
      <div class="col-6">
      ${this.temp}<i class="mdi mdi-temperature-fahrenheit"></i>
      <br>
      ${this.weather}
      </div>
      <div class="col-6 align-content-center">
      <img src="${this.icon}" class="bg-white" alt=""/>
      </div>
    </div>
    `
  }
}