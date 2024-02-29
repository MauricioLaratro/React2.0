import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"


// Realizamos un mock parcial de la libreria de react-router-dom
// Almacenamos nuestra funcion de navigate utilizada en el navbar, pero "mockeada" como una jest function
const mockedUseNavigate = jest.fn()

// Este es un mock parcial ya que si hicieramos simplmente jest.mock('react-router-dom') tendriamos problemas ya que tambien estamos utilizando el MemoryRouter de react-router-dom y si hacemos un mock completo, estariamos sobreescribiendo el funcionamiento de todo lo que viene dentro de react-router-dom, por lo tanto dejaria de funcionar MemoryRouter
// Entonces lo que hacemos es pasar la ruta de lo que queremos hacer el mock y como segundo argumento pasamos un callback. Este callback, se encarga de desestructurar todo lo de react-router, que jest esta utilizando actualmente (sin sobreescribir nada) y luego sobreescribirmos el hook de useNavigate y lo "transformamos" a nuestro mockedUseNavigate. De esta manera evitamos perder la funcionalidad de MemoryRouter o cualquier otra propiedad que utilicemos de react-router, haciendo este mock parcial.
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage/>', () => { 

    // Limpiamos los mocks para tenerlos en su estado inicial antes de cada test.
    beforeEach(() => jest.clearAllMocks)
    
    test('Debe de mostrarse correctamente con valores default', () => { 
        
        // Desestructuramos container desde el render para poder utilizar el snapshot
        const { container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        // Indicamos que el container debe ser igual al snapshot que grabamos render.
        expect( container ).toMatchSnapshot()

    })

    test('Debe de mostrar a batman y el input con el valor del query string', () => { 
        
        // Le pasamos como initialEntries, la ruta de search mas el query parameter de batman, para que la navegación comience desde esa url
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )

        // Almacenamos el input de la vista
        const inputValue = screen.getByRole('textbox')
        // Indicamos que el value del input debe de ser el valor del query parameter ('batman')
        expect( inputValue.value ).toBe('batman')

    })

    test('Debe de mostrar si no se encuentra el hero', () => { 
        
        // Pasamos como initial entries, el nombre de un hero inexistente
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        )
        // Almacenamos el mensaje de alerta que se renderiza cuando no se encuentra un heroe
        const alert = screen.getByLabelText('alert-danger')
        // Indicamos que el mensaje de alerta debe de existir ya que se paso el nombre de un heroe no valido, por lo tanto se debe de renderizar la alerta
        expect( alert ).toBeTruthy()

    })

    test('Debe de llamar el navigate a la nueva vista', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        )

        // Almacenamos el input para poder disparar un evento en el
        const input = screen.getByRole('textbox')
        // Disparamos el evento change sobre el input, para simular que estamos escribiendo "superman" en el, para eso necesitamos pasarle el mismo name que pusimos en ese input y el value, es el texto que deseamos introducir para la simulación.
        fireEvent.change(input, { target: {name: 'searchText', value: 'superman'} })

        const form = screen.getByLabelText('form')
        fireEvent.submit( form )

        // Indicamos que luego de lanzar el evento submit, nuestro mock de la funcion navigate debio de ser llamada con el valor proporcionado
        expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman')

    })

})