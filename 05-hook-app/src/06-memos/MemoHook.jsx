import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

// Mismo concepto que en <Memorize/> pero utilizando el Hook useMemo propio de react

const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i < iterationNumber; i++ ) {
        console.log('Ahí vamos...')
    }

    return `${ iterationNumber } iteraciones realizadas`
}


export const MemoHook = () => {

    const { counter, increment } = useCounter( 1000 )

    const [show, setShow] = useState(true)

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter] )
    // implementamos el hook useMemo de react para evitar re procesos indeseados, en este caso le pasamos la function heavyStuff para que la memorice, lleva como argumento el counter solo para establecer un numero. Luego de la coma entre corchetes, indicamos que solo actualice esa memoria cuando se actualice las dependencias del heavyStuff, que en este caso es "counter", si dejamos los corchetes vacios la memoria se actualizara solo 1 vez al momento del primer renderizado, como pasa al dejar los corchetes vacios en el hook useEffect.

  return (
    <>
        <h1>Counter: <small>{ counter }</small> </h1>
        <hr/>

        <h4>{ memorizedValue }</h4>

        <button
            className="btn btn-primary"
            onClick={ () => increment() }
        >
            +1

        </button>


        <button
            className="btn btn-outline-primary"
            onClick={ () => setShow( !show ) }
        >
            Show/Hide { JSON.stringify(show) }

        </button>
        {/* Este btn sirve solo para ejemplificar la implementación de "memo" en el componente <Small/> */}
    </>
  )
}
