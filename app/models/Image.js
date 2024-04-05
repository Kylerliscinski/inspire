



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
    <div class="row justify-content-center text-light">
    <div class="col-md-7">
      <h1 class="text-end">2024-04-04</h1>
      <p>${this.author}</p>
    </div>
    </div>
    `
  }
}