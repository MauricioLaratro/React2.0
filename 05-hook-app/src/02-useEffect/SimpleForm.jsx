import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Mauricio',
        email: 'mauriciolaratro@gmail.com'
    })

    const { username, email } = formState
    // desestructuramos la elementos que necesitamos del objeto formState

    const onInputChange = (event) =>{
        
        const { name, value } = event.target
        // Desestructuramos name y value del event.target
        setFormState({
            ...formState,
            [ name ]: value
        })
        // Utilizamos el operador spread para mantener las propertis que no se necesitan modificar e indicamos que debe cambiar solo elemento que su name esta siendo modificado y el valor de esta va a ser igual al nuevo value que se ingrese en el input.
    }

    useEffect(() => {

      // console.log('Se llamo al useEffect')

    }, [])
    // si dejamos las dependencias de los useEffect, como un array vacio [], estaremos indicando que el callback del useEffect solo se tiene que lanzar en el primer renderizado del componente, una unica vez.
    

    useEffect(() => {

      // console.log('Se realizaron cambios en cualquier input de formState')

    }, [ formState ])
    // Utilizando esta dependencia, se lanzara el useEffect cada vez que haya un cambio en cualquier parte del formState

    useEffect(() => {

      // console.log('Se realizaron cambios en el input email de formState')

    }, [ email ])
    // Utilizando esta dependencia, se lanzara el useEffect unicamente cuando haya un cambio en el input email. Lo cual tambien lanzara el useEffect de arriba, ya que sigue siendo una parte del formState


  return (
    <>
        <h1>Fomulario Simple</h1>
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

        {
          (username === 'Mauricio1') && <Message />
          // Estamos inidicando dentro de las llaves que si el username escrito es Mauricio, se muestre el mensaje que ese usuario ya existe, de los contrario no se renderiza el mensaje, por ejemplo si escribimos mauricio2 no se mostrara este mensaje.
        }
    
    </>
  )
}
