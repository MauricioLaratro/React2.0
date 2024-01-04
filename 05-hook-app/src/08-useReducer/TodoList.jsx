/* eslint-disable react/prop-types */
import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo, onProgressTodo }) => {



  return (
        <ul className="list-group">
            {
                todos.map( (todo, index) => (
                <TodoItem key={ todo.id } todo={todo} index={index} onDeleteTodo={ onDeleteTodo } onToggleTodo={ onToggleTodo } onProgressTodo={ onProgressTodo }/>
                ))
            }
        </ul>
  )
}
