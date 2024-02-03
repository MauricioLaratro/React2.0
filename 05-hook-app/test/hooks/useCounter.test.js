import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el useCounter', () => { 
    
    test('Debe de retornar los valores por defecto', () =>{

        // Desestructuramos "result" para extraerlo de renderHook que es el metodo de react-testing-library que sirve para obtener los hooks a testear
        const { result } = renderHook( () => useCounter() )

        // Desesctructuramos los elementos que queremos testear del hook, desde el result.current. Para conocer que trae el result, podemos hacer un console.log del mismo antes para conocer los elementos que trae.
        const { counter, decrement, increment, reset } = result.current

        // Indicamos que se debe esperar que el valor por defecto del counter debe ser 10, ya que no le pasamos ningun valor nuevo al initalValue.
        expect( counter ).toBe(10)
        // Indicamos que decrement, increment y reset, deben ser funciones y no otro elemento como un 'String' por ejemplo
        expect( decrement ).toEqual( expect.any( Function ) )
        expect( increment ).toEqual( expect.any( Function ) )
        expect( reset ).toEqual( expect.any( Function ) )

    });

    test('Debe de generar el counter con el valor de 100', () =>{

        // Le pasamos un nuevo valor al initialVlaue "100"
        const { result } = renderHook( () => useCounter(100) )
        const { counter } = result.current

        // Corroboramos que el valor por defecto del counter ahora es 100
        expect( counter ).toBe(100)

    });

    test('Debe de incrementar el contador', () =>{

        const { result } = renderHook( () => useCounter(100) )
        const { counter, increment } = result.current

        // llamamos a la function increment, siempre envuelto en la function "act" que se utiliza para testear funciones que modifican el estado de un componente de react, ya que de lo contrario el test arrojaria un error. Para luego corroborar que realmente incrementa el contador
        act( () => {
            
            increment();
        })

        // Debemos utilizar el "result.current.counter" para el expect y no simplemente el "counter" desestructurado, ya que al trabajar con valores primitivos, como numeros o strings, lo que se genera es una nueva variable con el valor de 101 pero el counter inicial sigue siendo 100. Pero al pasarle "result.current.counter" estamos especificando que debe hacer el expect al valor actual, es decir al current value. Y no al counter inicial. Es decir que estamos expecteando la nueva variable del counter que creo el act-increment
        expect( result.current.counter ).toBe(101)

        // Las funciones dentro del act siempre toman como referencia el valor original, es decir el valor de counter que toma act en este caso siempre sera 100, esto quiere decir que si, dentro del act colocamos 2 llamadas a la funcion increment. El expect no resultara en 102, seguira siendo 101, porque cada increment toma como valor incial, el valor original del counter, y no se acumulan entre si, es decir que la segunda llamada no tomara el valor de 101 arrojado por la primer llamada al increment.
        // act( () => {
        //      increment();
        //      increment();
        //  })
        // Esto arrojaria 101 y no 102
    });

    test('Debe de disminuir el contador', () =>{

        const { result } = renderHook( () => useCounter(100) )
        const { decrement } = result.current

        act( () => {
            
            decrement();
        })

        expect( result.current.counter ).toBe(99)

    });

    test('Debe de re establecer el valor del counter, a su valor inicial', () =>{

        const { result } = renderHook( () => useCounter(100) )
        const { decrement, reset } = result.current

        act( () => {
            
            decrement(10);
            reset()
        })

        expect( result.current.counter ).toBe(100)

    });

 })