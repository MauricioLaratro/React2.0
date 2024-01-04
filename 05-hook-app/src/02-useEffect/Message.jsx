import { useEffect } from "react"

export const Message = () => {

    // useEffect(() => {
    //   console.log('Message montado')
    
    //   return () => {
    //     console.log('Message desmontado')
    //     // Esta funcion de retorno es el efecto que se dispara al destruir el componente, Es decir si se elimina el componente o la condicion que dispara al primer efecto, entonces se disparar este segundo efecto opcional, en el caso que lo tengamos.
    //   }
    // }, [])

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            const coords = { x, y }
            console.log(coords)
        }
        // Creamos una funcion externa para utilizarla en el addEventListener porque de esta manera la podemos utilizar de referencia para acceder a ese espacio de memoria luego para poder limpiarlo en la funcion de retorno. Si simplemente crearamos un arrow function en el listener, no tendriamos referencia por lo tanto no lo podriamos limpiar en la funcion de retorno.

        window.addEventListener( 'mousemove', onMouseMove )
    
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove )
        // removemos el listener para que el evento no siga siendo escuchado una vez que se destruya el componente. Y asi evitamos fugas de memoria.
        }
    }, [])
    

  return (
    <>
        <h3>Usuario Ya Existe</h3>
    </>
  )
}
