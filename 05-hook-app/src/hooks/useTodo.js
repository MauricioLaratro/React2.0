import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initialState = [
    // {
    //     id: crypto.randomUUID(),
    //     description: 'Recolectar la pierda del alma',
    //     done: false,
    // },

]

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
    // utilizamos JSON.parse para volver un objeto los items que se encuentren en el local storage con el nombre de 'todos', luego con || decimos que en el caso de que no encuentre ningun iteam, devuelva un array vacio []
}
// esta funcion init es la que utilizamos para iniciarlizar el reducer y asi no perder los datos alojados en el localstorage mediante el useEffect, aunque hagamos reload en la página.

export const useTodo = () => {

    const [ todos, dispatchTodos ] = useReducer( todoReducer, initialState, init )
    // El tercer argumento "init" es la funcion inicializadora del reducer, es la funcion que establecimos arriba

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos))
        // almacenamos los todos dentro del local storage, bajo el nombre de 'todos' y pasandolos de objeto a string con el JSON.stringify() ya que el localstorage solo almacena strings
    
    }, [todos])
    // Establecemos que el effecto se disparar cuando se monta el componente y ademas cada vez que haya un cambio en los todos.
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatchTodos( action )
    }

    const handleDeleteTodo = (id) => {
        dispatchTodos({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatchTodos({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    const handleProgressTodo = (id) => {
        dispatchTodos({
            type: '[TODO] InProgress Todo',
            payload: id
        })
    }


    return {
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleProgressTodo,
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
        inProgressCount: todos.filter( todo => todo.inProgress).length,
        doneTodosCount: todos.filter( todo => todo.done).length,
    }
}
