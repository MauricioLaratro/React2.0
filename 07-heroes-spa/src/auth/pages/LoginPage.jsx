import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

  // Custom Hook propio de React Router Dom para facilitar la configuracion de la navegación de nuestras App
  const navigate = useNavigate()

  // Creamos la funcion que permita navegar hacia la raiz al precionar el boton de Login, utilizando el custom Hook de react router dom
  const onLogin = () => {

    // Indicamos la ruta a la que debe navegar al llamar esta funcion "/" y utilizamos replace: true que nos sirve para eliminar la ultima entrada del historial antes de presionar Login, lo que evita que se pueda volver a la pagina de Login volviendo hacia atras una vez se loguee el usuario.
    navigate("/", {
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
