import { fireEvent, render, screen } from "@testing-library/react"
import { Navbar } from "../../../src/ui/components/Navbar"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth/context/AuthContext"

// Almacenamos nuestra funcion de navigate utilizada en el navbar, pero "mockeada" como una jest function
const mockedUseNavigate = jest.fn()

// Este es un mock parcial ya que si hicieramos simplmente jest.mock('react-router-dom') tendriamos problemas ya que tambien estamos utilizando el MemoryRouter de react-router-dom y si hacemos un mock completo, estariamos sobreescribiendo el funcionamiento de todo lo que viene dentro de react-router-dom, por lo tanto dejaria de funcionar MemoryRouter
// Entonces lo que hacemos es pasar la ruta de lo que queremos hacer el mock y como segundo argumento pasamos un callback. Este callback, se encarga de desestructurar todo lo de react-router, que jest esta utilizando actualmente (sin sobreescribir nada) y luego sobreescribirmos el hook de useNavigate y lo "transformamos" a nuestro mockedUseNavigate. De esta manera evitamos perder la funcionalidad de MemoryRouter o cualquier otra propiedad que utilicemos de react-router, haciendo este mock parcial.
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en el <Navbar/>', () => { 

    const contextValue = {
        logged: true,
        user: {
            id: '123ABC',
            name: 'Javier Laratro'
        },
        // Pasamos tambien al contexto nuestra funcion de logout que probaremos mas adelante
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() ) // Limpiamos todas nuestras funciones antes de cada test para que esten en su estado inicial
    
    test('Debe de mostrar el nombre del user si este esta autenticado', () => { 

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // Indicamos que el nombre del usuario debe de figurar. En este caso es 'Javier Laratro
        expect( screen.getByText(contextValue.user.name) ).toBeTruthy()

    })

    test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => { 

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButton = screen.getByText('Logout')

        fireEvent.click(logoutButton)

        // Indicamos que la funcion de logout que pasamos a nuestro contexto, debio de ser llamada luego de haber generado el evento click en el btn de logout
        expect( contextValue.logout ).toHaveBeenCalled()

        // Indicamos que nuestra function mocked de "navigate", debio de haber sido llamada, luego de presionar el boton de logout, con la ruta del login y el replace: true que es lo que se encarga de forzar la navegación, hacia la página de login.
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true})

    })

})