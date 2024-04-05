import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class TodosController {
  constructor() {
    console.log('Todos');
    // this.getTodos()
    AppState.on('todos', this.drawTodos)
    AppState.on('account', this.getTodos)
  }


  async createTodo() {
    try {
      event.preventDefault()
      console.log('creating a new todo');
      const form = event.target
      const todoData = getFormData(form)
      console.log(todoData);
      await todosService.createTodo(todoData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.toast("Could not create a todo", 'error')
      console.error(error)
    }
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

  async deleteTodo(todoId) {
    try {
      const res = await Pop.confirm("Are you sure you wan't to delete this Todo?")
      if (res == false) return

      await todosService.deleteTodo(todoId)
    } catch (error) {
      Pop.toast("Could not delete todo", 'error')
      console.error(error)
    }
  }
}