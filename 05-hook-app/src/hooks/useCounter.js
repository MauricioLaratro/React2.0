import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue )

    const increment = ( value = 1 ) => {
        setCounter( counter + value )
    }
    // Cuando utilizamos los parametros de estas funciones, al momento de llamarlas, las debemos declarar con arrow function y pasarles el parametro opcional o dejar los () vacios. De lo contrario si llamamos simplemente a la funcion {increment} como lo hacemos al utilizar el reset en CounterAppWithCustomHook, lo que le estariamos pasando al llamar estas funciones con parametros, seria todo el evento click y por lo tanto no obtendriamos el resultado que esperamos. Por eso debemos llamarlas como lo hacemos en CounterAppWithCustomHook

    const decrement = ( value = 1) => {
        if (counter === 0) return

        setCounter( counter - value )
    }

    const reset = () => {
        setCounter ( initialValue )
    }


    return {
        counter,
        increment,
        decrement,
        reset,
    }
}