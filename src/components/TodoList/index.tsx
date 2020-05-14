import React from "react"
import { Todos, TodoItem } from "core/entities"
import styles from "./index.module.scss"

interface TodoList {
  isLazyHandler: Function
  remove: Function
  router: Function
  todos: Todos
}

export const TodoList = ({ isLazyHandler, remove, router, todos }: any) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo: TodoItem) => {
        return (
          <li key={todo.id} onMouseLeave={isLazyHandler}>
            <div onClick={() => router(todo.id)}>{todo.title}</div>
            <span onClick={() => remove(todo.id)}>x</span>
          </li>
        )
      })}
    </ul>
  )
}
