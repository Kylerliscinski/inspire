import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";




export class QuotesController {
  constructor() {
    // console.log('Quotes baby');
    this.getQuote()
    AppState.on('activeQuote', this.drawQuote)
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      Pop.toast("Could not get Quote", 'error')
      console.error(error)
    }
  }

  drawQuote() {
    const activeQuote = AppState.activeQuote
    setHTML('active-quote', activeQuote.ActiveQuoteTemplate)
  }
}