import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks"



export const TodoApp = () => {

    const { todosCount, pendingTodosCount, inProgressCount, doneTodosCount, todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, handleProgressTodo } = useTodo()

  return (
        <>
            <h1>TodoApp: { todosCount }, <small>Pending: { pendingTodosCount }</small>, <small>In Progress: { inProgressCount }</small>, <small>Done: { doneTodosCount }</small> </h1>
            <hr />

            <div className="row justify-content-between">
                <div className="col-5">

                    <TodoList todos={ todos } onDeleteTodo={ id => handleDeleteTodo(id) } onToggleTodo={ handleToggleTodo } onProgressTodo={ handleProgressTodo }/>
                                                            {/* Esto es igual a pasar onDeleteTodo={handleDeleteTodo} ya que la funcion pasa el argumento id ambas veces */}
                </div>
            
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
        
            </div>
        </>
    )
}
