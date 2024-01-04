import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {


  const {/*formState,*/ onInputChange, username, email, password, onResetForm} = useForm({
    username: '',
    email: '',
    password: ''
  })

  // const { username, email, password } = formState
  // Nos ahorramos esta linea gracias a que en el custom hooks retornamos el formState desestructurado con el spread operator. Entonces el mismo contemplara cualquier propiedad que añadamos al momento de utilizarlo

  return (
    <>
        <h1>Fomulario con Custom Hook</h1>
        <hr />

        <input
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={ onInputChange }
        />

        <input
            type="email" 
            className="form-control mt-2"
            placeholder="mauriciolaratro@gmail.com"
            name="email"
            value={email}
            onChange={ onInputChange }
        />
        <input
            type="password" 
            className="form-control mt-2"
            placeholder="Constraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />

        <button className="btn btn-primary mt-2" onClick={ onResetForm }>Borrar</button>
    </>
  )
}
