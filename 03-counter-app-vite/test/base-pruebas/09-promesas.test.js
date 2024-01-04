import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => { 
    
    test('getHeroesByIdAsync debe de retornar un héroe', (done) => { 
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {

                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done();
            } );
     });


    test('getHeroesByIdAsync debe de obtener un error si héroe no existe', (done) => { 
        
        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {

                expect( error ).toBe(`No se pudo encontrar el héroe ${id}`);
                
                done();
                })
            } );
     });


 // el parametro done que pasamos y despues lo llamamos como una function dentro del testo es algo nativo de Jest que obliga al test a esperar a llegar al done() para dar como finalizado el test, y por eso se utiliza para testear promesas, ya que de lo contrario Jest toma todo los test como codigo sincrono, por lo tanto no esperar a la respuesta de la promesa y arrojara falsos positivos.