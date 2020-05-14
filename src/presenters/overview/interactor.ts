import { store } from "store"
import { TodoItem } from "core/entities"
import { AddTodo, RemoveTodo } from "store/actions"
import * as Models from "./models"
import * as Worker from "./worker"

export class Interactor {
  todos: Array<TodoItem> = []

  constructor() {
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.updateState = this.updateState.bind(this)
    this.trackInHubspot = this.trackInHubspot.bind(this)
  }

  addTodo(request: Models.AddTodoRequest) {
    const todo: TodoItem = {
      id: request.id,
      description: request.description,
      dueDate: request.dueDate,
      title: request.title,
    }
    store.dispatch(AddTodo(todo))
    this.updateState()
  }

  removeTodo(request: Models.RemoveTodoRequest) {
    store.dispatch(RemoveTodo(request.id))
    this.updateState()
  }

  trackInHubspot() {
    const isLazy = Worker.TrackInHubspot()
    console.log(isLazy)
  }

  updateState() {
    const state = store.getState()
    this.todos = state.todo.todos
  }
}
