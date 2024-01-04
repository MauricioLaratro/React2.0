

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}]


const todoReducer = ( state = initialState, action = {} ) => {
    // Enviamos un objeto vacio al action porque de lo contrario nos daria un error ya que en el estado inicial no existe el action.type. Es decir que si no le pasamos nada, la accion no buscara el action.type que utilizamos en la condicion mas abajo.

    if ( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ]
    }
    // Esto quiere decir que si el action type es igual al del agregar un todo, devuelva un nuevo arreglo, con la desestructuración del estado antedior mas el payload, que es el agregado del nuevo todo.

    return state
}


let todos = todoReducer()


const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}
// El nuevo elemento que queremos añadir al todo list.

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}
// Lo que utilizamos para disparar el action en el reducer.

todos = todoReducer( todos, addTodoAction )

console.log(todos)