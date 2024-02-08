import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/09-useContext/LoginPage"
import { UserContext } from "../../../src/09-useContext/context/UserContext"

describe('Testing del componente <LoginPage/>', () => { 

    // Indicamos que setUserMock es una jest function y es la que vamos a establecer para poder llamar a la funcion de setUser sin obtener un error
    const setUserMock = jest.fn()

        // beforeEach sirve para aplicar una función que le pasemos como callback, antes de cada una de las pruebas. Tambien existe beforeAll que sirve para realizar una sola vez la funcion antes de todas las pruebas
        beforeEach( () =>{
            // jest.clearAllMocks() sirve para eliminar los mocks del ciclo de vida de las pruebas antes de cada de las pruebas. Lo utilizamos por si ya habiamos llamado la funcion de increment anteriormente y en una de las pruebas necesitamos que sea la primera vez que se llame a la funcion, por ejemplo.
            jest.clearAllMocks()
        })
    
    test('Debe de llamarse la función de setUser, con los datos por defecto', () => { 
        
        render(
            // Ademas de pasarle el user por defecto, debemos pasarle setUserMock para indicarle que es la funcion que se llamara como setUser, de lo contrario no podra leer la funcion del componente
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage/>
            </UserContext.Provider>
        )

        // Almacenamos el boton para luego disparar el evento click y poder llamar a la funcion de setUser
        const buttonUser = screen.getByLabelText('button-user')

        // Disparamos el evento click en el boton
        fireEvent.click(buttonUser)

        // Indicamos que la funcion setUserMock debio haberse llamado con el objeto que posee la funcion setUser del boton original en el componente.
        expect( setUserMock ).toHaveBeenCalledWith( {id: 123, name: 'Mauricio', email: 'mauriciolaratro@gmail.com'} )

    })

})