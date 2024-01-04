/* eslint-disable react/prop-types */

export const TodoItem = ({ todo, index, onDeleteTodo, onToggleTodo, onProgressTodo }) => {
  return (

        <li className={`list-group-item d-flex justify-content-between ${ (todo.inProgress) ? 'progress-todo' : '' } ${ (todo.done) ? 'todo-success' : '' }`}>
            <span 
                className={ `align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }` }
                // en el classname indicamos que si todo.done es true se agregue el tachado con el operador ternario, de lo contrario que agregue una clase vacia.
                // onClick={ () => onToggleTodo( todo.id ) }
            >
                { index + 1}. { todo.description }
            </span>

            <div>
                <button
                    className={`btn ${ (todo.done) ? 'btn-secondary' : 'btn-success' }`} 
                    onClick={ () => onToggleTodo( todo.id ) }
                    >
                        Done
                </button>
                <button
                    className={`btn ${ (todo.inProgress) ? 'btn-secondary' : 'btn-warning' }`} 
                    onClick={ () => onProgressTodo( todo.id ) }
                    >
                        InProgress
                </button>

                <button
                    className="btn btn-danger" 
                    onClick={ () => onDeleteTodo( todo.id ) }
                    >
                        X
                </button>
            </div>

        </li>
        
    )
}
