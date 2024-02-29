// Creamos el provider que proveera el contexto de Auth

import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'


// Esta funcion lo que hara es que aunque se recargue el navegador, los datos del user prevaleceran, es decir se seguira mostrando "Mauricio Laratro" en el Navbar, porque lo que hace es obtener los datos del usuario que se encuentran almacenados en el LocalStorage, por el handleLogin
const init = () => {
    // Almacenamos el user como un json
    const user = JSON.parse( localStorage.getItem('user') );
    
    // Indicamos que la funcion debe de retornar, que si el usuario existe, cambiar el logged a true (Por eso la doble negación, que quiere decir que es true, en el caso de que no sea null el user) y luego retornamos la info del user como tal, es decir le JSON
    return{
        logged: !!user,
        user: user,
    }

}
export const AuthProvider = ({ children }) => {

    // Utilizamos el hook useReducer al cual le pasamos nuestro reducer que maneja los types y las acciones del mismo y como segundo argumento le pasamos su estado inicial que es un objeto vacio.
    // al principio hacemos la desestructuración del state "authReducar" y la función para hacer el dispatch que es la funcion que permite actualizar el estado a un valor diferente y activar una nueva renderización.
    // Como argumento tambien utilizamos la funcion inicializadora "init" que es un valor opcional del useReducer. Para poder recibir los datos del user almacenados en el local storage y setear el state.
    const [ authState, dispatch ] = useReducer( authReducer, {}, init )

    // Creamos la acción que vamos a recibir cuando se ejecute el login y establecemos el valor que le pasaremos al reducer, en este caso es el name del user
    const handleLogin = ( name = '' ) => {

        const user = { id: 'ABC', name: name }

        const action = { type: types.login, payload: user }

        // Grabamos la información del user cuando este disponiblem en el localStorage, siempre como string porque es lo unico que se puede almacenar en el localStorage
        localStorage.setItem('user', JSON.stringify( user ))

        // llamamos al dispatch con la action que creamos, como argumento, para que cada vez que se ejecute esta action, de tipo login, la funcion distpach acutalice el estado y ejecute un nuevo renderizado
        dispatch(action)
    }

    // Creamos la funcion que se ejecutara al hacer el logout, que borre los datos del usuario almacenados
    const handleLogout = () => {
        // Removemos los datos de user almacenados en localStorage
        localStorage.removeItem('user')
        // Indicamos cual es el action que disparara el dispatch y asi actualizara el state del context
        const action = { type: types.logout }

        dispatch(action)
    }

  return (
    // Pasamos como value al provider, la funcion de handleLogin que creamos para manejar la action del login en el reducer. Y tambien le pasamos el authState para pasarle todo el estado actual del mismo
    <AuthContext.Provider value={{
        ...authState,
        login: handleLogin,
        logout: handleLogout
    }}>
        { children }
    </AuthContext.Provider>
  )
}
