

export const todoReducer = (initialState = [], action) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            
            return [ ...initialState, action.payload ];
    
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );
            // utilizamos filter ya que este regresa un nuevo arreglo y no muta el original como si lo hace el metodo .push() por ejemplo. Y lo que indicamos es que devuelva un nuevo arreglo con todos los todos excepto el que tenga el id que acabamos de eliminar con el remove.

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if ( todo.id === action.payload ) { // id
                    return {
                        ...todo,
                        inProgress: false,
                        done: !todo.done,
                    }
                }
                // mapeamos el initial state y decimos que si el todo.id es igual al action.payload que es el id mismo, retornamos la desestructuración del todo, y ademas la negación del valor actual del done, es decir que si esta en true pasara a ser false y viceversa. Si no se cumple la condicion se pasa directamente al return que esta aca abajo que es el "todo" inicial.

            return todo
            } );

            case '[TODO] InProgress Todo':
                return initialState.map( todo => {
                    if ( todo.id === action.payload ) { // id
                        return {
                            ...todo,
                            done: false,
                            inProgress: !todo.inProgress,
                        }
                    }

                return todo
                } );
    
        default:
            return initialState;
    }

}