import { useState } from "react"

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm )

    const onInputChange = (event) =>{
        
        const { name, value } = event.target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
        // desestructuramos ...formState, ademas de pasarle el formState completo, para asi luego contemple cualquier propiedad que se añada al estado y la podamos obtener en una desestructuración rapida como en FormWithCustomHook, ahorrandonos una linea de codigo que puede ser muy repetitiva si lo tenemos que utilizar en muchos lugares diferentes al mismo custom hook
    }

}
