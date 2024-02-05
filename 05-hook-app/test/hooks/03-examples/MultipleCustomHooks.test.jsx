import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../../src/03-example/MultipleCustomHooks"
import { useFetch } from "../../../src/hooks/useFetch";
import { useCounter } from "../../../src/hooks/useCounter";

// Hacemos un mock del customHook para poder simular su acción, luego dentro de cada test debemos utilizar el useFetch.mockReturnValue para retornar el valor que se espera de la llamada a ese customHook
jest.mock("../../../src/hooks/useFetch");
jest.mock("../../../src/hooks/useCounter.js");

describe('Pruebas en <MultipleCustomHooks/>', () => { 

    // Estas 2 declaraciones debemos ponerlas dentro de un describe y no dentro de un solo test porque de lo contrario nos arrojaran error los demas test, ya que estara esperando el counter y lo que se devolvera sera undefined. A menos que utilicemos el mock en todos los test
    // Almacenamos una variable para indicar que el "increment" traido de useCounter es una función
    const mockIncrement = jest.fn()
    // Indicamos la data que trae como resultado la llamada del useCounter
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    // beforeEach sirve para aplicar una función que le pasemos como callback, antes de cada una de las pruebas. Tambien existe beforeAll que sirve para realizar una sola vez la funcion antes de todas las pruebas
    beforeEach( () =>{
        // jest.clearAllMocks() sirve para eliminar los mocks del ciclo de vida de las pruebas antes de cada de las pruebas. Lo utilizamos por si ya habiamos llamado la funcion de increment anteriormente y en una de las pruebas necesitamos que sea la primera vez que se llame a la funcion, por ejemplo.
        jest.clearAllMocks()
    })
    
    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        
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
     });

    test('Debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'Mauricio', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        })
        
        render( <MultipleCustomHooks/> );
        // screen.debug()

        expect( screen.getByText('Hola mundo') ).toBeTruthy()
        expect( screen.getByText('Mauricio') ).toBeTruthy()

        const nextButton = screen.getByRole('button', {name : 'next Quote'});
        expect( nextButton.disabled ).toBeFalsy()
        
     });

    test('Debe de llamar la función de incrementar', () => { 

        // Almacenamos una variable para indicar que el "increment" traido de useCounter es una función
        const mockIncrement = jest.fn()

        // Indicamos la data que trae como resultado la llamada del useCounter
        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        })
        
        render( <MultipleCustomHooks/> );
        const nextButton = screen.getByRole('button', {name : 'next Quote'});

        // Disparamos el evento para realizar la llamada a la funcion de increment
        fireEvent.click( nextButton )
        
        // Indicamos que se espera que el mockIncrement ha sido llamado una vez que se hace click en el boton correspondiente
        expect( mockIncrement ).toHaveBeenCalled()
     });
    
 })