import { baseURL } from "../env.js"


// @ts-ignore
export const api = axios.create({
  baseURL: baseURL,
  timeout: 8000,
  withCredentials: true
})

class TodosService {
  async createTodo(todoData) {
    const res = await api.post('/api/todos')
    console.log('📃📷', res);
  }
  async getTodos() {
    const res = await api.get('/api/todos')
    console.log('📃', res.data);
  }

}

export const todosService = new TodosService()