/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { memo } from 'react'


export const Small = memo(({ value }) => {

    console.log('Me volvi a renderizar :C')
    // Demostramos que el componente solo se vuelve a renderizar cuando cambia alguna de sus props

  return (
    <small>{ value }</small>
  )
})

// Con memo, podemos memorizar el componente y hacer que solo se vuelva a rerenderizar cuando alguna de sus props cambien, en el caso de que cambien estados del padre, este no se redibujara, solamante cambiara cuando cambien algunas de sus props, como en este caso cuando cambia el valor de value