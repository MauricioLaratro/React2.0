import { render, screen } from "@testing-library/react"
import { HomePage } from "../../../src/09-useContext/HomePage"
import { UserContext } from "../../../src/09-useContext/context/UserContext"

describe('Pruebas en <HomePage/>', () => { 

    // Establecemos un user para probarlo en el segundo test
    const user = {
        id: 1,
        name: 'Mauricio',
    }
    
    test('Debe de mostrar el componente sin el usuario', () => { 
        
        //Debemos renderizar tanto el HomePage que es el componente que vamos a testear y el userContext.Provider que lo envuelve, ya que el HomePage utilizar información de su contexto y en caso de no renderizarlo estariamos tratando de leer información de undefined por lo que nos daria un error. En este caso lo que lee homePage de UserContext es la información de "user", por lo tanto lo pasamos como valor de null, que no nos da error como en el caso de undefined
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>
            </UserContext.Provider>
        )
        // screen.debug()

        // Almacenamos en una const el valor del user, que por defecto es null
        const preTag = screen.getByLabelText('pre')

        // Indicamos que se espera que el valor del preTag.innerHTML debe ser null
        expect( preTag.innerHTML ).toBe('null')

     });

     test('Debe de mostrar el componente sin el usuario', () => { 
        
        // Renderizamos el componente pero en este caso el valor del user, sera el user que creamos mas arriba para el testing
        render(
            <UserContext.Provider value={{ user: user }}>
                <HomePage/>
            </UserContext.Provider>
        )
        // screen.debug()

        // Almacenamos en una const el valor del user, que por defecto es null
        const preTag = screen.getByLabelText('pre')

        // Indicamos que el preTag debe contener un user.name
        expect( preTag.innerHTML ).toContain( user.name )
        // Indicamos que el preTag debe contener un user.id y le pasamos toString() porque interpreta el id dentro del objeto user como un string, si no lo pasamos a string dara un error.
        expect( preTag.innerHTML ).toContain( user.id.toString() )

     });

 })