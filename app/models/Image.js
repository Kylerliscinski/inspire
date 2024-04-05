



export class Image {
  constructor(data) {
    this.author = data.author
    this.imgUrl = data.imgUrl
    this.largeImgUrl = data.largeImgUrl
    this.query = data.query
    this.tags = data.tags
    this.url = data.url
  }

  get ActiveImageTemplate() {
    return `
    <div class="row justify-content-center text-light align-content-center">
    <div class="col d-flex justify-content-between">
      <h4>Image by <br> ${this.author}</h4>
      <h1>Todos</h1>
    </div>
    </div>
    `
  }
}