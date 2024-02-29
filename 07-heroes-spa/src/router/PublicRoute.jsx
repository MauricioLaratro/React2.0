import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate } from "react-router-dom"

// En este componente hacemos los contrario a PrivateRoute, para asi evitar que un usuario ya loggeado y autenticado, pueda ver la pagina de login, ya que podria dar impresiones de un falso logout. El unico caso en el que un user pueder ver la pantalla de login es cuando no esta logeado en la App.
export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext )

    // Aca indicamos que si logged es false (utilizando la negación !) devolvemos el children de PublicRoute que es justamente la pagina de login y en el caso de que logged sea true, lo enviamos directamente a la pantalla de home, que en este caso es /marvel
  return ( !logged )
    ? children
    : <Navigate to="/marvel"/>
}
