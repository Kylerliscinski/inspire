
const timeElement = document.getElementById("clock");

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  timeElement.innerText = clockStr;
}

updateTime();
setInterval(updateTime, 1000);


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
      <h4>Image by <br> ${this.author}</h4>
    `
  }

}