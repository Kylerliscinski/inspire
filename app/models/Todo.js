


export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.creatorId = data.creatorId
    this.description = data.description
  }

  get TodoTemplate() {
    return `
    <div class="row bg-dark selectable border border-light rounded mb-1 text-light">
      <div class="col-3 align-content-center">
        <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.TodosController.toggleCompleted('${this.id}')">
      </div>
      <div class="col align-content-center">${this.description}</div>
      <button onclick="app.TodosController.deleteTodo('${this.id}')" class="col-2 btn btn-danger m-1"><i class="mdi mdi-delete"></i></button>
    </div>
  `
  }
}