import { combineReducers } from "redux"
import { Todo } from "./todo"
import { Site } from "./site"

export const rootReducer = combineReducers({
  todo: Todo,
  site: Site,
})
