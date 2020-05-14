import { AnyAction } from "redux"
import { Todos, TodoItem } from "core/entities"

const initialState: Todos = {
  todos: [],
}

export const Todo = (state: any = initialState, action: AnyAction) => {
  let newTodos: Array<TodoItem> = []
  switch (action.type) {
    case "ADD_TODO":
      const { description, dueDate, id, title } = action.payload
      const newTodo: TodoItem = {
        description,
        dueDate,
        id,
        title,
      }
      newTodos = [...state.todos, newTodo]
      return {
        ...initialState,
        todos: newTodos,
      }
    case "REMOVE_TODO":
      newTodos = state.todos.filter((todo: TodoItem) => {
        return todo.id !== action.payload.id
      })
      return {
        ...initialState,
        todos: newTodos,
      }
    case "EDIT_TODO":
      newTodos = [...state.todos]
      newTodos.forEach((todo: TodoItem) => {
        const { payload } = action
        if (payload.description) {
          todo.description = payload.description
        }
        if (payload.title) {
          todo.title = payload.title
        }
        if (payload.dueDate) {
          todo.dueDate = payload.dueDate
        }
      })
      return {
        ...initialState,
        todos: newTodos,
      }
    default:
      return state
  }
}
