import { AnyAction } from "redux"
// import { Todos } from "core/entities"

const initialState = {
  site: [],
}

export const Site = (state: any = initialState, action: AnyAction) => {
  switch (action.type) {
    case "GET_SITE":
      return state
    default:
      return state
  }
}
