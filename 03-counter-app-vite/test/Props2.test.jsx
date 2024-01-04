/** @jest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { Props } from "../src/Props";

describe('Pruebas en Props', () => { 
  
  const title = 'Hola , soy goku'
  const subTitle = 'Hola , soy un subtitulo'

    test('Debe de hacer match con el snapshot', () => { 


      const { container } = render( <Props title={ title } /> )
      expect( container ).toMatchSnapshot()

     })

     test('Debe de mostrar el mensaje "Hola, soy Goku"', () => { 
      
      render( <Props title={ title } /> )
      expect( screen.getByText(title) ).toBeTruthy()

      // Screen es un metodo que importamos de React Testing Library, que sirve para tener una copia actualizada en todo momento, de lo que estamos renderizando, es decir que siempre debe ir debajo del render si lo utilizamos como en este ejemplo. A diferencia del snapshot, screen se actualizara cuando haya cambios en el DOM por ejemplo cuando simulemos clicks que afectan al DOM de alguna manera. Es una manera mas dinamica y flexible de testear los componentes.
      })


      test('Debe de mostrar el titulo en un H1', () => { 
      
        render( <Props title={ title } /> )
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title )
  
        // con getByRole lo que hacemos es obtener el elemento mediante un tag HTML, en este caso le indicamos que es un H1 y que ese H1 debe contener "toContain" el title que almacena como valor nuestra constante title
        })


      test('Debe de mostrar el subTitulo enviado por props', () => { 
      
        render( <Props title={ title } subTitle={ subTitle } /> )  
        expect( screen.getAllByText(subTitle).length ).toBe(2)


      })

 })