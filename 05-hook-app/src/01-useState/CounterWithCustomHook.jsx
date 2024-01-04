import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter()


  return (
    <>
    <h1>Counter with Hook: {counter}</h1>
    <hr />
    <button className="btn btn-primary" onClick={ () => increment(2) }>+1</button>
    <button className="btn btn-primary" onClick={ reset }>reset</button>
    <button className="btn btn-primary" onClick={ () => decrement(2) }>-1</button>
    {/* Utilizamos funcion de flecha para poder pasar el parametro "2" que es el valor que tomara value en la funcion de incremente y decrement en nuestro customHook de useCounter, de lo contrario obtendriamos un [object Object] al precionar el boton, ya que no estariamos sumando en 1 al hacer click, si no que estariamos pasando como argumento todo el evento click a la funcion y por lo tanto retornariamos un objecto transformado en string. Si en vez de tener "value" como un parametro opcional como lo tenemos en customHook useCounter, tuvieramos un +1 simplemente, podriamos pasar las funciones sin el arrow function ni el parametro "2" o el numero que sea, es decir pasariamos al igual que el reser un {increment} simplemente */}


    </>
  )
}
