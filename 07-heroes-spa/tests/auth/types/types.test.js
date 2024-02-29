import { types } from "../../../src/auth/types/types"

describe('Pruebas en Types.js', () => { 
    
    test('Debe de regresar estos mismos types', () => { 
        
        // Esta prueba sirve para asegurarse que los types que utiliza el authReducer, sean los mismo que definimos y en el caso de que alguien borre accidentalmente o modifique el archivo de types, haciendo que nuestra app deje de funcionar, lo podemos rastrear facilmente con este test.
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })

    })

 })