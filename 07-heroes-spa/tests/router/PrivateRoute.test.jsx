import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en el <PrivateRoute/>', () => { 
    
    test('Si el user esta autenticado, debe de retornar el children', () => { 

        // Storage.prototype.setItem es la forma de simular que se seteo data en el localStorage dentro de jest
        Storage.prototype.setItem = jest.fn()
        
        // Creamos el estado inicial que le proporcionaremos al contexto, simulando que estamos logeados
        const contextValue = {
            logged: true,
            user: {
                id: 'abc123',
                name: 'Juan Carlos'
            }
        }

        // Para poder acceder al componente de PrivateRoute y retornarlo, antes debemos establecer el contexto, ya que de lo contrario intentara leer "( !authState.logged ) ?" y logged seria undefined si no se lo provee el contexto.
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Esto representa un children de PrivateRoute</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // Indicamos que se debe poder acceder al h1 que creamos para representar un children de <PrivateRoute/>, ya que en el caso de no poder acceder, significa que aunque logged esta false, el componente no esta devolviendo su children, si no que estaria devolviendo "/marvel" y seria un error.
        expect( screen.getByText('Esto representa un children de PrivateRoute') ).toBeTruthy()

        // Indicamos que la funcion que asignamos arriba "Storage.prototype.setItem" debio de haber sido llamada con lastPath, como primer argumeto, que es lo que utilizamos para volver a la ultima ruta visitada antes de hacer logout y tambien con el segundo argumento de /search?q=batman que es la ruta que utilizamos para el initialEntries, es decir que en este teste la navegación comenzo desde ese punto de la App.
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=batman")
    })

})