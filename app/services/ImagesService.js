import { AppState } from "../AppState.js";
import { baseURL } from '../env.js'
import { Image } from "../models/Image.js";

//@ts-ignore
export const api = axios.create({
  baseURL: baseURL,
  timeout: 8000,
  withCredentials: true
})

class ImagesService {
  async getImage() {
    const res = await api.get('/api/images')
    // console.log('📷', res.data);
    const img = new Image(res.data)
    AppState.activeImage = img
    // console.log('🖼️', AppState.activeImage);
  }
}

export const imagesService = new ImagesService()