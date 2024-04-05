


export class Weather {
  constructor(data) {
    this.name = data.name
    this.icon = data.weather.icon
    this.weather = data.weather[0].main
    this.temp = data.main.temp
    this.celcius = Math.round(data.main.temp - 273)
    this.fahrenheit = Math.round((data.main.temp - 273) * 9 / 5 + 32)


    // const temp = document.getElementById("clock")

    // function fahrenheit() {
    //   const toFahrenheit = `${this.fahrenheit}<i class="mdi mdi-temperature-fahrenheit"></i>`
    // }

    // function celcius() {
    //   const toCelcius = `${this.celcius}<i class="mdi mdi-temperature-celsius"></i>`
    // }

    // function switchTemp() {
    //   if (fahrenheit) temp.innerText = `${this.fahrenheit}<i class="mdi mdi-temperature-fahrenheit"></i>`
    // }
  }

  get ActiveWeatherTemplate() {
    return `
    <div onclick="switchTemp()" class="row border border-white rounded ms-3 selectable">
      <div id="temp" class="col-6 px-2 align-content-center">
      ${this.fahrenheit}<i class="mdi mdi-temperature-celsius"></i>
      <br>
      ${this.weather}
      </div>
      <div class="col-6 align-content-center">
      <img width="50" src="${this.icon}" class="img-white" alt=""/>
      </div>
    </div>
    `
  }
}