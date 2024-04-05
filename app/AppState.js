import { Image } from "./models/Image.js"
import { Quote } from "./models/Quote.js"
import { Todo } from "./models/Todo.js"
import { Weather } from "./models/Weather.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {Image[]} */
  images = []

  /**@type {Image} */
  activeImage = null

  /**@type {Quote[]} */
  quotes = []

  /**@type {Quote} */
  activeQuote = null

  /**@type {Weather[]} */
  weather = []

  /**@type {Weather} */
  activeWeather = null

  /**@type {Todo[]} */
  todos = []

  /**@type {Todo} */
  activeTodo = null
}

export const AppState = createObservableProxy(new ObservableAppState())