import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../../src/03-example/MultipleCustomHooks"

describe('Pruebas en <MultipleCustomHooks/>', () => { 
    
    test('Debe de mostrar el componente por defecto', () => { 
        
        // Renderizamos el funcional component
        render( <MultipleCustomHooks/> );

        // Indicamos que debe contener los siguientes textos...
        expect( screen.getByText('Loading...') )
        expect( screen.getByText('BreakingBad Quotes') )

        // Almacenamos el boton que queremos testar dentro de una variable. Podemos utilizar el name, el label o el test-id, en el caso de que tengamos mas de un button, asi podes especificar cual queremos probar.
        const nextButton = screen.getByRole('button', {name : 'next Quote'});
        // Indicamos que el boton debe estar deshabilitado
        expect( nextButton.disabled ).toBeTruthy


        // screen.debug()
     })
    
 })