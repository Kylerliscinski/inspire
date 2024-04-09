
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
    <div class="row">
      <div class="col">
        <h4 class="m-3">Image by <br> ${this.author}</h4>
      </div>
      <div class="col">
      <button class="btn bg-dark-clear border border-light text-light rounded opacity-75 mt-3 ms-3 float-end me-3 align-items-start" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Todos</button>
    </div>
    </div>
      `
  }

}