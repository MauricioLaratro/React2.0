import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()
    // Utilizamos el hook useRef para obtener una referencia del elemento que queremos si lanzar un re renderizado del componente

    const onFocus = () =>{
        inputRef.current.select()
        // Establecemos que la funcion onFocus hara que al llamarla, tomara el elemento que tenga como valor de ref "inputRef" y le aplicara el select que es como un "focus" pero con la ventaja de que si ya hay texto escrito en el, lo selecciona por completo. (Current porque la referencia la buscamos hacer al valor actual del elemento siempre)
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input
        ref={ inputRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control" />

        <button className="btn btn-primary mt-2" onClick={ onFocus }>Set Focus</button>
    </>
    )
}
