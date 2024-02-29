import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en <AppRouter/>', () => { 
    
    test('Debe de mostrar el login, si el user no esta autenticado', () => { 
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // Indicamos que lo que se debe encontrar la palabra login 2 veces para verificar que estamos renderizando la pagina del login por mas que nuestro initialEntries sea /marvel, ya que el usuario no se encuentra autenticado, por lo tanto estamos corroborando el redireccionamiento automatico a la pagina del login.
        expect( screen.getAllByText('Login').length ).toBe(2)
    })

    test('Debe de mostrar el componente de Marvel si esta autenticado', () => { 
        
        const contextValue = {
            logged: true,
            user: {
                id: '123ABC',
                name: 'Javier Laratro'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        // Indicamos que se debe de estar mostrando la pantalla de /marvel, por mas que pasemos como initialEntries /login, ya que el usuario se encuentra autenticado (logged: true) por lo tanto no puede visitar la pagina de login.
        expect( screen.getByText('Marvel Comics') ).toBeTruthy()
    })
    
})