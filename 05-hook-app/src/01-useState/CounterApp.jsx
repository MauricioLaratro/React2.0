import { useState } from "react"


export const CounterApp = () => {

    const [ state, setCounter ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })
    // creamos el state que inicialmente es un objeto con 3 valores distintos

    const { counter1, counter2, counter3 } = state
    // desestructuramos los valores que tiene el state para poder tratarlos por separado

  return (
    <>
        <h1>Counter: { counter1 }</h1>
        <h1>Counter: { counter2 }</h1>
        <h1>Counter: { counter3 }</h1>

        <hr />

        <button className="btn" onClick={ () => setCounter({
            ...state,
            counter1: counter1 + 1
        }) } >+1</button>
        {/* Utilizamos el spread operator en el set counter y luego aumentamos el counter1, ya que no queremos mutar los valores de los demas counter. */}
    </>
  )
}
