import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext )
    console.log(user)


    return (
      <>
          <h1>LoginPage<small>{ user?.name }</small></h1>
          <hr />

          <pre>
            { JSON.stringify(user, null, 3) }
          </pre>

          <button className="btn btn-primary" onClick={ () => setUser({ id: 123, name: 'Mauricio', email: 'mauriciolaratro@gmail.com' }) }>
            Establecer Usuario
          </button>
      </>
      // Utilizamos el setUser en el boton para setear la info y mandarla al provider, por eso es que al establecer la información del usuario en este login, tambien se vera reflejada esa info en el HomePage, porque aunque la este seteando un componente hermano, se esta enviado esa info directamente al Context.
    )
  }
  
// Para decirle a useContext en que contexto queremos buscar información simplemente debemos pasarle el contexto deseado, en este caso es el UserContext. Ya que queremos información del user para el login