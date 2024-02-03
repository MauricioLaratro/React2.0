import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en el useForm', () => { 

    // Establecemos un initialForm que es el estado por defecto de nuestro customHook
    const initialForm = {
        name: 'Mauricio',
        email: 'mauriciolaratro@gmail.com'
    }
    
    test('Debe de regresar los valores por defecto', () => { 
        
        // Obtenemos los datos current de nuestro customHook
        const { result } = renderHook( ()=> useForm(initialForm) )

        // Luego de utilizar console.log para saber que contiene result.current. Le pasamos ese mismo objeto pero cambiando los valores por initialForm.name por ejemplo y a la funciones le indicamos que se espera que sean funciones y listo, de esta forma testeamos de que si en el reutrn del useForm se elimina la desestructuración del estado inicial "...formState". El test arrojara un error.
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    })


    test('Debe de cambiar el nombre del formualrio', () => { 
        
        const newValue = 'Javier'

        // Desestructuramos la funcion que cambia el nombre del formulario
        const { result } = renderHook( ()=> useForm(initialForm) )
        const { onInputChange } = result.current

        // Llamamos a la funcion dentro de act. Debe contener la misma estructura que contiene en el CustomHook, por eso le pasamos: { target: { name: 'name', value: newValue } }
        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } })
        })

        // Indicamos que el test debe esperar que el nuevo valor del name debe ser igual al newValue al que cambiamos.
        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
     });

    test('Debe de realizar el reset del formulario', () => { 
        
        const newValue = 'Javier'

        const { result } = renderHook( ()=> useForm(initialForm) )
        const { onInputChange, onResetForm } = result.current

        // Esta vez llamamos ademas al onResetForm() para poder probar si efectivamente se resetea el formulario
        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm()
        })

        // Indicamos que el test debe esperar que el valor del name debe de ser el valor inicial del form, ya que lo reseteamos DESPUES de llamar al onInputChange()
        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
     });

 })