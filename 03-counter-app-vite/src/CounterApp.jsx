//TAREA
import PropTypes from 'prop-types';
import { useState } from 'react'

// Lo que hacemos aca es pasar la prop del componente padre que es value, con su valor predeterminado de 10, ese valor lo pasamos como valor inicial de nuestro useState del counter y lo que realmente renderizamos en el H2 es el counter. Es decir que si en el use estate cambiamos el valor inicial de counter, por otro que no sea "value" se renderizara ese nuevo valor y la prop value ya no se estara utilizando en el renderizado.
export const CounterApp = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value );
    
    const handleAdd = () => {
        setCounter( counter + 1 )
    }

    const handleReduce = () => {
        setCounter( counter - 1 )
    }

    const handleReset = () => {
        setCounter( value )
    }

  return (
    <>
        <h1>
            CounterApp
        </h1>
        <h2>
            { counter }
        </h2>

        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleReduce }> -1 </button>
        <button aria-label='btn-reset' onClick={ handleReset }> Reset </button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}