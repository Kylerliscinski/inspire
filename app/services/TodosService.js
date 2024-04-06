import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js";

class TodosService {
  async createTodo(todoData) {
    const res = await api.post('/api/todos', todoData)
    // console.log('📃📷', res);
    const todo = new Todo(res.data)
    AppState.todos.push(todo)
  }
  async getTodos() {
    const res = await api.get('/api/todos')
    // console.log('📃', res);
    const myTodo = res.data.map(todo => new Todo(todo))
    AppState.todos = myTodo
  }

  async deleteTodo(todoId) {
    const res = await api.delete(`/api/todos/${todoId}`)
    // console.log('deleting', res);
    const todoToRemove = AppState.todos.findIndex(todo => todo.id == todoId)
    AppState.todos.splice(todoToRemove, 1)
  }

  async toggleCompleted(todoId) {
    const todoCompleted = AppState.todos.find(todo => todo.id == todoId)
    todoCompleted.completed = !todoCompleted.completed
    const res = await api.put(`api/todos/${todoId}`, todoCompleted)
    // console.log('response', res.data);
    AppState.emit('todos')
  }
}

export const todosService = new TodosService()