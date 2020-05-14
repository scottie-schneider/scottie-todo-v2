import { TodoItem } from "core/entities";

export interface RemoveTodoRequest {
  id: number
}

export interface AddTodoRequest extends TodoItem {}