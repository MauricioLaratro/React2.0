import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el authReducer.js', () => { 
    
    test('Debe de retornar el estado por defecto', () => { 
        
        // Le pasamos el estado inicial que deberia retornar que es el logged en false y una "action reducer" vacia
        const state = authReducer({ logged: false }, {})
        // indicamos que, se espera que state sea equivalente a el objeto inicial que le proporcionamos. Debemos utilizar toEqual y no toBe porque estamos tratando con un objeto anonimo y daria un error al no ser exactamente el mismo en el spect, si no una copia identica del mismo objeto. Para usar toBe deberiamos crear el objeto dentro de una const fuera del scope del test, es decir dentro del describe.
        expect( state ).toEqual({ logged: false })

    });

    
    test('Debe de llamar el login a autenticar y establecer el usuario', () => { 
        
        // Creamos el action reducer, que disparara el login (importamos desde nuestro archivo types), con los datos que espera el user como payload.
        const action = {
            type: types.login,
            payload: {
                name: 'Javier',
                id: '123'
            }
        }

        // Creamos el state inicial pero esta vez el action reducer sera el action que acabamos de crear arriba, el cual llamara al login y deberia modificar el initial state, cambiando el logged a true y asignando los datos del user del payload.
        const state = authReducer({ logged: false }, action )

        // Indicamos que se espera que el state ahora sea igual al logged en true y el el user contenga los datos del payload del action qeu creamos, es decir el id y name del user
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })

    });


    test('Logout Debe de borrar el name del usuario y setear logged en false', () => { 
        
        // Creamos un estado inicial, simulando que el usuario esta logeado
        const state = {
            logged: true,
            user: {
                name: 'Javier',
                id: '123'
            }
        }

        // Almacenamos el action reducer que importamos de nuestro types y es el que debe realizar el logout
        const action = {
            type: types.logout
        }

        // Creamos un nuevo estado que llama al reducer, le pasa el estado inicial con el user logeado y el action que deberia hacer el logout
        const newState = authReducer({ state }, action)

        // Inidicamos que el estado al que se le pasa el action que creamos, debe tener el logged en false y nada mas, ya que debe de eliminar los datos del user.
        expect( newState ).toEqual({
            logged: false
        })

    });

 })