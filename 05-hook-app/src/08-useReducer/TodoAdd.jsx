/* eslint-disable react/prop-types */
import { useForm } from '../hooks/useForm';

// const newId = crypto.randomUUID()

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {

        const desctiptionTrimed = description.trim()

        event.preventDefault();
        if ( desctiptionTrimed.length <= 0 ) return;

        const newTodo = {
            id: crypto.randomUUID(),
            description: description,
            done: false,
            inProgress: false,
        }

        onNewTodo(newTodo)
        onResetForm()
    }

  return (
    <form onSubmit={ onFormSubmit }>
        <input 
            type="text"
            placeholder="¿Qué hay que hacer?"
            className="form-control"
            value={ description }
            onChange={ onInputChange }
            name='description'
        />

        <button 
            type="submit"
            className="btn btn-outline-primary mt-2"
        >
            Agregar
        </button>
    </form>

  )
}
