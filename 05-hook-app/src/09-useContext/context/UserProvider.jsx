/* eslint-disable react/prop-types */
import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Mauricio Laratro',
//     email: 'mauriciolaratro@gmail.com'
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()


  return (
    <UserContext.Provider value={{ user, setUser }}>
        { children }
    </UserContext.Provider>
    // Utilizamos el useState para pasarle al value un valor seteable desde los componentes children, en este caso lo seteamos desde el Login
  )
}


// El Provider es el encargado de proveer, a sus hijos, toda la información que proporciona el Context.
// El Provider lo utilizamos generalmente en el punto mas alto de nuestra aplicación en el que creamos que los componentes necesitaran la información del Context. En este caso lo utilizamos en el MainApp.jsx y para utilizarlo solo devemos englobar los componentes del app dentro del HOC <UserProvider></UserProvider>
// El "Value" deñ .Provider es la información a la que podran acceder todos los componentes que esten dentro del UserProvider.