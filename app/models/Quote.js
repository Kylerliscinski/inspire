

export class Quote {
  constructor(data) {
    this.author = data.author
    this.authorSlug = data.authorSlug
    this.content = data.content
  }

  get ActiveQuoteTemplate() {
    return `
    <div class="text-shadow secret-hover">"${this.content}"</div>
    <div class="reveal"> ~ ${this.author}</div>
    `
  }
}