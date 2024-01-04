import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas en 07-deses-arr', () => { 
    
    test('debe de retornar un string y un número', () => { 
        
        const [ letters, numbers ] = retornaArreglo();

        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 )

        expect( typeof letters ).toBe('string')
        expect( typeof numbers ).toBe('number')
     })
 })

// [letters, numbers] es simplemente la desestructuración del contenido de la funcion retornaArreglo.
// Lo que hacemos con typeof y luego del toBe 'string' o 'number' es indicarle que tipo de valor debe ser letters y numbers respectivamente, de esa manera se utiliza el typeof en los test
