import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser;

        expect( testUser ).toEqual( user() );
     });

// .toEqual sirve para comprar objetos, es como toBr pero para objetos, ya que el toBe no sirve en objetos, porque por mas que sean identicos, a los objeto los comprar por el lugar de la memoria que ocupan, no por sus valores, entonces al ser 2 objetos por mas que sean identicos, dara error el test si utilizaoms toBe.

     test('getUsuarioActivo debe de retornan un objeto', () => { 
        
        const name = 'Fernando';

        const testUserActivo = {
            uid: 'ABC567',
            username: name
        }

        const userActivo = getUsuarioActivo( name )

        expect( testUserActivo ).toEqual( userActivo )

      })

 })