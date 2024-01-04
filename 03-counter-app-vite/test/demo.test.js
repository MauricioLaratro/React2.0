describe('Pruebas en <DemoComponent/>', () => { 
    test('Esta prueba no debe de fallar', () => {
        // 1. Inicialización
        const message1 = 'Hola Mundo'
    
        // 2. Estimular
        const message2 = message1.trim()
    
    
        // 3. Observar los resultados
        expect( message1 ).toBe( message2 )
    })
    
    // Expect es algo que viene incluido en Jest. Y .toBe significa que la condicion es que message1 debe ser igual a message2.
 })
