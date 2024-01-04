import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';


describe('Pruebas en 08-imp-exp', () => { 
    
    test('getHeroeById debe de retornar un héroe por id', () => { 
        
        const id = 1
        const hero = getHeroeById( id )

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

     });


    test('getHeroeById debe de retornar undefined si no existe el id', () => { 
        
        const id = 100;
        const hero = getHeroeById( id )

        expect( hero ).toBeFalsy();
        // toBeFalsy sirve para evaluar que el sujeto de pruebas retorne un valor falsy o "negativo", ya sea undefined como en este caso, null o simplemente false
     });


     // Trea: Evaluar getHeroesByOwner
     // Debe de rotornar un arreglo con los héroes de DC
     // Length === 3
     // ToEqual al arreglo filtrado

     test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => { 
        
        const owner = 'DC'
        const heroes = getHeroesByOwner( owner )
        console.log(heroes)

        expect( heroes.length ).toEqual( 3 );

        // expect( heroes ).toEqual( [
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        //   ] );
        //El siguiente metodo es lo mismo que lo de arriba pero mas dinamico ya que si cambia la data de heroes, esto seguira funcionando
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )

     });

})

