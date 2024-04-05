import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { Quote } from "../models/Quote.js";


// @ts-ignore
export const api = axios.create({
  baseURL: baseURL,
  timeout: 8000,
  withCredentials: true
})

class QuotesService {
  async getQuote() {
    const res = await api.get('api/quotes')
    // console.log('💬', res.data);
    const quote = new Quote(res.data)
    AppState.activeQuote = quote
    // console.log('🎬💬', AppState.activeQuote);w
  }

}

export const quotesService = new QuotesService