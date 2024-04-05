import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { Weather } from "../models/Weather.js";


// @ts-ignore
export const api = axios.create({
  baseURL: baseURL,
  timeout: 8000,
  withCredentials: true
})

class WeatherService {
  async getWeather() {
    const res = await api.get('/api/weather')
    console.log('⛅', res.data);
    const weather = new Weather(res.data)
    AppState.activeWeather = weather
    console.log('🎬⛅', AppState.activeWeather);
  }

}

export const weatherService = new WeatherService