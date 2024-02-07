import { todoReducer } from "../../../src/08-useReducer/todoReducer";

describe('Pruebas en todoReducer', () => { 

    // Creamos un estado incial para probar luego en el reducer, identico al initialState verdadero del reducer
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]
    
    test('Debe de regresar el estado inical', () => { 
        
        // Creamos un nuevo estado que es igual al todoReducer, mas el initalState que acabamos de crear y un objetvo vacio para que no pueda caer en ninguna condicion del switch del reducer y por lo tanto devolverta directamente el default, que es el return del initialState del reducer.
        const newState = todoReducer( initialState, {} )

        // Indicamos que se espera que el resultado de newState, debe ser identico al initalState que declaramos arriba.
        expect( newState ).toBe( initialState )

     });

    test('Debe de agregar un Todo', () => { 
        
        // Creamos el action para añadir correctamente el Todo
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false,
            }
        };

        // almacenamos el nuevo estado pasandole el initialState + el action
        const newState = todoReducer( initialState, action )

        // Corroboramos que la logintud de newState es de 2, primero el InitialState y segundo el Todo que acabamos de añadir con el action
        expect( newState.length ).toBe( 2 )
        // Corroboramos que el newState ahora contiene el nuevo objeto del payload del action.
        expect( newState ).toContain( action.payload )

     });

    test('Debe de eliminar un Todo', () => { 
        
        // Creamos el action para añadir correctamente el Todo
        const action = {
            type: '[TODO] Remove Todo',
            // Pasamos como payload el id del Todo que deseamos borrar
            payload: 1
        };

        // almacenamos el nuevo estado pasandole el initialState + el action
        const newState = todoReducer( initialState, action )

        // Corroboramos que la logintud de newState es de 0
        expect( newState.length ).toBe( 0 )

     });

    test('Debe de realizar el toggle del Todo', () => { 
        
        // Creamos el action para añadir correctamente el Todo
        const action = {
            type: '[TODO] Toggle Todo',
            // Pasamos como payload el id del Todo que deseamos cambiar el toggle
            payload: 1
        };

        // almacenamos el nuevo estado pasandole el initialState + el action
        const newState = todoReducer( initialState, action )

        // Indicamos que el done del primer elemento del array de newState "newState[0].done", ahora debe ser "true", ya que por defecto es false y estamos disparando el payload del toggle que deberia cambiar ese valor.
        expect( newState[0].done ).toBe( true )

     });

 })