import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"



export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const handleIncrement = useCallback(
      (value) => {
        setCounter( (c) => c + value )
      },
      [],
    )
    // le pasamos "value" como argumento al callback porque si al llamar la funcion utilizamos argumentos, coomo en este caso que en ShowIncrement, utilizamos la funcion pasandole el numero 5. Los argumentos deben estar definidos en la funcion, despues volvemos a pasar ese value como el valor que se sumara a "c" que representa el valor acutal del counter
    // useCallback es muy similar al useMemo, pero con la diferencia de que sirve para memorizar funciones. Y esa funcion memorizada solo se vuelve a ejecutar cuando alguna dependencia cambie

      

    // const handleIncrement = () => {
    //     setCounter( counter + 1 )
    // }

    return (
        <>
            <h1>UseCallBack Hook : { counter }</h1>
            <hr />
        
            <ShowIncrement increment={ handleIncrement }/>
        </>
    )
}

//  useMemo se utiliaza, cuando tu función devuelve un valor y este debe de guardarse en una constatante o variable y useCallback, cuando quieres que la referencia a una función se mantenga inalterable en cada render.