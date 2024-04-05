import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class TodosController {
  constructor() {
    console.log('Todos');
    // this.getTodos()

  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      Pop.toast("Could not get your todos", 'error')
      console.error(error)
    }
  }
  drawTodos() {
    const todos = AppState.todos
    let todoTemplate = ''
    todos.forEach(todo => todoTemplate += todo.TodoTemplate)
    setHTML('todo-template', todoTemplate)
  }

  async createTodo() {
    try {
      event.preventDefault()
      console.log('creating a new todo');
      const form = event.target
      const todoData = getFormData(form)
      console.log(todoData);
      await todosService.createTodo(todoData)
    } catch (error) {
      Pop.toast("Could not create a todo", 'error')
      console.error(error)
    }
  }

}