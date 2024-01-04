import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

// Terea:
// Test: debe de hacer match con el snapshot
// Test: debe de mostrar el valor inicial de 100

describe('Pruebas en CounterApp.jsx', () => { 

    const initialValue = 10

    
    test('Debe de hacer match con el snapshot', () => { 
        
        const { container } = render( <CounterApp value={ initialValue }/> )
        expect( container ).toMatchSnapshot()


     });


    test('Debe de hacer match con el snapshot', () => { 
        
        render( <CounterApp value={ 100 } /> )
        expect( screen.getByText(100) ).toBeTruthy()

        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toBe('100')

     });


     // PRIMER TEST SIMULANDO EVENTOS. "EVENTO: CLICK"
     test('Debe de incrementar con el boton +1', () => { 
        
        render( <CounterApp value={ initialValue } /> )
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy()

        // fireEvent es un metodo propio de React Testing Library y lo que hace es simular eventos en los elementos renderizados que querramos, para poder aplicar un expect a la consecuencia de haber simulado ese evento.
     });


     test('Debe de disminuir con el boton -1', () => { 
        
        render( <CounterApp value={ initialValue } /> )
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('9') ).toBeTruthy()

        // fireEvent es un metodo propio de React Testing Library y lo que hace es simular eventos en los elementos renderizados que querramos, para poder aplicar un expect a la consecuencia de haber simulado ese evento.
     });


     test('Debe de funcionar el boton de reset', () => { 
        
        render( <CounterApp value={ 355 } /> )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )

        // fireEvent.click( screen.getByText('Reset') )
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))

        expect( screen.getByText( 355 ) ).toBeTruthy()

        // fireEvent es un metodo propio de React Testing Library y lo que hace es simular eventos en los elementos renderizados que querramos, para poder aplicar un expect a la consecuencia de haber simulado ese evento.
        // (screen.getByRole('button', { name: 'btn-reset' }) Lo que hacemos en esta linea es obtener la referencia al elemento que queremos por medio de su tag HTML 'button' y a su vez por su name, que lo modificamos en el HTML mediante el uso del atributo aria-label
    });
 })