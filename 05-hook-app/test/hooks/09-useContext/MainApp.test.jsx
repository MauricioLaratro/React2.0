import { render, screen } from "@testing-library/react"
import { MainApp } from "../../../src/09-useContext/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en el router de <MainApp/>', () => { 
    
    test('Debe de mostrar el HomePage en la ruta inicial', () => { 
        
        render(
            // MemoryRouter es el equivalente al BrowserRoutter que envuelve al main.jsx. Ya que lo necesitamos para poder testean el MainApp.jsx, de lo contrario nos dara undefined porque no podra encontrar los hooks internos que utiliza BrowserRoutter para funcionar. 
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        )
        
        // Indicamos que el texto de HomePage debe existir para corroborar que estamos renderizando ese componente por defecto en MainApp.
        expect( screen.getByText('HomePage') ).toBeTruthy()

    })

    test('Debe de mostrar el LoginPage', () => { 
        
        render(
            // initialEntries recibe un array o un objeto, que representa el URL al que queremos navegar, es decir que lo podemos utilizar para cambiar las rutas del router para hacer pruebas en los diferentes renderizados de MainApp
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        )
        
        // Indicamos que el texto de LoginPage debe existir para corroborar que estamos renderizando ese componente por defecto en MainApp.
        expect( screen.getByText('LoginPage') ).toBeTruthy()

    })

    test('Debe de mostrar el AboutPage', () => { 
        
        render(
            // initialEntries recibe un array o un objeto, que representa el URL al que queremos navegar, es decir que lo podemos utilizar para cambiar las rutas del router para hacer pruebas en los diferentes renderizados de MainApp
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        )
        
        // Indicamos que el texto de AboutPage debe existir para corroborar que estamos renderizando ese componente por defecto en MainApp.
        expect( screen.getByText('AboutPage') ).toBeTruthy()

    })

})