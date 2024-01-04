import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const QuotesComponent = ({ quote, author }) => {

  const pRef = useRef()
  // Utilizamos useRed para obtener la referencia del Parrafo

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })
  // Inicializamos el estado con 0 de ancho y alto

  useLayoutEffect(() => {

    const { width, height } = pRef.current.getBoundingClientRect()

    setBoxSize({ width, height })

  }, [quote])
  // Utilizamos el Hook useLayoutEffect y dentro de el desestructuramos el ancho y alto del elemento utilizando "getBoundingClientRect()" en el current del parrafo referenciado, ese get nos devuelve los valores del elemento html, por eso podemos obtener su width y su height.
  // Y luego simplemente seteamos el nuevo estado con ese width y height que obtenemos, para mostrarlo en el elemento <code/> del componente.


  return (
    <>
    
        <blockquote className="blockquote text-end" style={{display: 'flex'}}>
            <p ref={ pRef } className="mb-2"> {quote} </p>
            <footer className="blockquote-footer"> {author} </footer>
        </blockquote>

        <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}


QuotesComponent.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}