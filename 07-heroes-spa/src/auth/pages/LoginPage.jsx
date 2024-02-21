import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {

  // Custom Hook propio de React Router Dom para facilitar la configuracion de la navegación de nuestras App
  const navigate = useNavigate()

  // Obtenemos acceso al contexto y mas especificamente la funcion del login (que es el mismo que colocamos en el value del provider en AuthProvider, es decir que su valor corresponder a la function de handleLogin), para poder hacer el dispatch al llamar a la funcion de onLogin que esta debajo y poder actualizar el estado del reducer.
  const { login } = useContext( AuthContext )

  // Creamos la funcion que permita navegar hacia la raiz al precionar el boton de Login, utilizando el custom Hook de react router dom
  const onLogin = () => {

    // Obtenemos la ultima ruta visitada que alacenamos en el localStorage y si es null, devolvemos la ruta raiz "/"
    const lastPath = localStorage.getItem('lastPath') || '/'

    // Pasamos nuestra función dispatch, y le pasamos como argumento lo que nos solicita, que en este caso es el name del user.
    login('Mauricio Laratro')

    // Indicamos la ruta a la que debe navegar al llamar esta funcion lastPath y utilizamos replace: true que nos sirve para eliminar la ultima entrada del historial antes de presionar Login, lo que evita que se pueda volver a la pagina de Login volviendo hacia atras una vez se loguee el usuario.
    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className="container mt-5">

      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
