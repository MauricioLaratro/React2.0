const { render, screen } = require("@testing-library/react")
const { TodoApp } = require("../../../src/08-useReducer/TodoApp")
const { useTodo } = require("../../../src/hooks/useTodo")

jest.mock("../../../src/hooks/useTodo")

describe('Pruebas en <TodoApp/>', () => { 

    useTodo.mockReturnValue({
        todosCount: 2,
        pendingTodosCount: 1,
        inProgressCount: 0,
        doneTodosCount: 1,
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true },
        ],
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleProgressTodo: jest.fn()
    })
    
    test('Debe de mostrar el componente correctamente', () => { 
        
        render( <TodoApp/> )
        // screen.debug()

        expect( screen.getByText('1. Todo #1') ).toBeTruthy()
        expect( screen.getByText('2. Todo #2') ).toBeTruthy()
        expect( screen.getByRole('textbox') ).toBeTruthy()

     })

 })