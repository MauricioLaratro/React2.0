const { render, screen } = require("@testing-library/react")
const { AuthContext } = require("../../src/auth/context/AuthContext")
const { PublicRoute } = require("../../src/router/PublicRoute")
const { MemoryRouter, Routes, Route } = require("react-router-dom")

describe('Pruebas en <PublicRoute/>', () => { 
    
    test('Si el user no esta autenticado, debe de retornar el children', () => { 
        
        // Creamos el estado inicial que le proporcionaremos al contexto, simulando que no estamos logeados
        const contextValue = {
            logged: false
        }

        // Para poder acceder al componente de PublicRoute y retornarlo, antes debemos establecer el contexto, ya que de lo contrario intentara leer "( !authState.logged ) ?" y logged seria undefined si no se lo provee el contexto.
        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Esto representa un children de PublicRoute</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        // Indicamos que se debe poder acceder al h1 que creamos para representar un children de <PublicRoute/>, ya que en el caso de no poder acceder, significa que aunque logged esta false, el componente no esta devolviendo su children, si no que estaria devolviendo "/marvel" y seria un error.
        expect( screen.getByText('Esto representa un children de PublicRoute') ).toBeTruthy()

    })

    test('Debe de mostar el Navigate, si logged es true', () => { 
        
        // Creamos el estado inicial que le proporcionaremos al contexto, simulando que estamos logeados
        const contextValue = {
            logged: true,
            user: {
                name: 'Fulano',
                id: 'A1B'
            }
        }

        // Debemos proporcionar la utilidad MemoryRouter de react-router-dom, porque de lo contrario al intentar acceder a Navigate nos daria un error, ya que este solo se puede utilizar dentro de un <BrowserRouter/> o un <Router/>
        // Es indispensable proporcionar una nueva ruta antes de hacer el test, como en este caso le pasamos marvel, porque de lo contrario siempre volver al login que es el initialEntries y se crearia un bucle infinito en el test. Ya que no tendria nada mas que retornar
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        {/* Tambien debemos proporcionar nuestro initialEntries que en este caso es nuestra ruta publica */}
                        <Route path='login'element={
                            <PublicRoute>
                                <h1>Esto representa un children de PublicRoute</h1>
                            </PublicRoute>
                        }/>
                        <Route path='marvel' element={ <h1>Esta ruta representa a "/marvel"</h1> }/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // Indicamos que debe de encontrar la ruta que representa a marvel, que es la que debe de renderizar en el caso de que este autenticado y no la del login (PublicRoute), aunque hayamos intentado navegar a ella en nuestro initalEntries
        expect( screen.getByText('Esta ruta representa a "/marvel"') ).toBeTruthy()
 
    })

})