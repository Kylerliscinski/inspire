import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";




export class ImagesController {
  constructor() {
    // console.log('hello');
    this.getImage()
    AppState.on('activeImage', this.drawImage)
  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      Pop.toast("Could not get Image", 'error')
      console.error(error)
    }
  }

  drawImage() {
    const activeImage = AppState.activeImage
    setHTML('active-image', activeImage.ActiveImageTemplate)
    document.body.style.backgroundImage = `url(${activeImage.largeImgUrl})`
  }

}
