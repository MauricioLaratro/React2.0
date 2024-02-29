import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

// Para crea las rutas privadas debemos crear un HOC que almacene a las rutas que solo se veran cuando el user este autenticado, por eso le pasamos children al componente
export const PrivateRoute = ({ children }) => {

    // Obtenemos el estado de nuesto contexto
    const { logged } = useContext( AuthContext )

    // Utilizamos el hook de useLocation para recordar la ultima vista antes de que el usuario haga logout, para que cuando vuelva a hacer login, se muestre en donde se habia quedado el user.
    const { pathname, search } = useLocation()
    // Concatenamos la ruta mas el search de la misma para almacenarlo como ultima ruta visitada a la que podamos volver.
    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)

    // Indicamos que si logged is true, se deben mostrar las rutas privadas, en el caso de que sea false, se redirecciona al usuario de manera automatica a la vista de login.
  return (logged)
    ? children
    : <Navigate to="/login" />
}
