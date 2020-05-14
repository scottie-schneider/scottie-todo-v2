import React from "react"
import { TodoEmpty } from "components/TodoEmpty"
import { TodoList } from "components/TodoList"
import { Interactor } from "./interactor"
import { useInteractor } from "hooks/"
import styles from "./index.module.scss"

export const Overview = () => {
  const router = (arg: any) => {}
  const interactor = useInteractor(Interactor, ["todos"])
  const empty = interactor.todos.length === 0

  const add = (): void => {
    interactor.addTodo({
      id: 1,
      title: "Test",
      description: "test2",
      dueDate: "10/25/1020",
    })
  }
  const remove = (): void => {
    interactor.removeTodo({ id: 1 })
  }
  const lazy = (): void => {
    interactor.trackInHubspot()
  }

  return (
    <div className={styles.overview}>
      {empty ? (
        <TodoEmpty message={"No Todos"} />
      ) : (
        <TodoList isLazyHandler={lazy} remove={remove} router={router} todos={interactor.todos} />
      )}
      <button onClick={add}>Add New</button>
    </div>
  )
}
