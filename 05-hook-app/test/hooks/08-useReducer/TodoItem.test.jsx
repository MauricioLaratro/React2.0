const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../../src/08-useReducer/TodoItem");

describe('Pruebas en <TodoItem/>', () => { 

    // Almacenamos un todo para poder hacerle pruebas
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    // Almacenamos las funciones que son partes de las props que pasamos al componente <TodoItem/>
    const onDeleteTodomock = jest.fn()
    const onToggleTodoMock = jest.fn()

    // Limpiamos las llamadas a las funciones siempre antes de cada una de las pruebas.
    beforeEach( () => jest.clearAllMocks() )
    
    test('Debe de mostrar el Todo Pendiente de completar', () => { 
        
        // Renderizamos el componente pasandole las props almacenadas en el test
        render(
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodomock }
            /> 
        )

        // Creamos la referencia al elemento LI
        const liElement = screen.getByRole('listitem')
        // Indicamos que el elemento LI debe contener la clase d-flex
        expect( liElement.className ).toContain('d-flex')

        // Obtenemos el span por medio de su aria label ya que el elemento span no es admitido como un Role.
        const spanElement = screen.getByLabelText('span')
        // Indicamos que el spanElement debe contener la clase 'align-self-center'
        expect( spanElement.className ).toContain('align-self-center')
    });
     
     
    test('Debe de mostrar el Todo como realizado', () => { 
         
        // Cambiamos el valor del done del todo que creamos para testear
        todo.done = true

        // Renderizamos el componente pasandole las props almacenadas en el test
        render(
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodomock }
            /> 
        )

        // Obtenemos el span por medio de su aria label ya que el elemento span no es admitido como un Role.
        const spanElement = screen.getByLabelText('span')
        // Indicamos que el spanElement debe contener la clase 'text-decoration-line-through'
        expect( spanElement.className ).toContain('text-decoration-line-through')
    });


    test('Span debe de llamar el ToggleTodo caundo se hace click en el', () => { 
        

        // Renderizamos el componente pasandole las props almacenadas en el test
        render(
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodomock }
            /> 
        )
 
        // Obtenemos el Button que dispara el evento de Toggle.
        const buttonToggle = screen.getByLabelText('button-toggle')

        // Disparamos el evento click sobre el ButtonToggle
        fireEvent.click( buttonToggle )

        // Indicamos que se espera que se llame a la funcion de Toggle, con el id del todo item, es decir que el evento se dispare sobre el todo en el que se hizo el click
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )

    });


    test('ButtonDelete debe de llamar a la función onDeleteTodo', () => { 
        

        // Renderizamos el componente pasandole las props almacenadas en el test
        render(
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodomock }
            /> 
        )
 
        // Obtenemos el Button que dispara el evento de Delete.
        const buttonDelete = screen.getByLabelText('button-delete')

        // Disparamos el evento click sobre el buttonDelete
        fireEvent.click( buttonDelete )


        // Indicamos que se espera que se llame a la funcion de Delete, con el id del todo item, es decir que el evento se dispare sobre el todo en el que se hizo el click
        expect( onDeleteTodomock ).toHaveBeenCalledWith( todo.id )

    });

 })