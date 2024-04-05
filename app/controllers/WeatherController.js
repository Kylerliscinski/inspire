import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";




export class WeatherController {
  constructor() {
    console.log('Weather ☁️');
    this.getWeather()
    AppState.on('activeWeather', this.drawWeather)
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.toast("Could not get weather", 'error')
      console.error(error)
    }
  }

  drawWeather() {
    const activeWeather = AppState.activeWeather
    setHTML('active-weather', activeWeather.ActiveWeatherTemplate)
  }
}