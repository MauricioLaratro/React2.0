/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import { Props } from "../src/Props";

describe('Pruebas en Props', () => { 

    // test('Debe de hacer match con el snapshot', () => { 
        
    //     const title = 'Hola soy Goku';
    //     const { container } = render( <Props title={ title } /> );

    //     expect( container ).toMatchSnapshot()

    //     // Render es una funcionalidad propia de React Testing Library que sirve para renderizar el componente deseado en la memoria para poder testearlo, entre muchas otras cosas.
    //     // Container es un objeto que se encuentra dentro del render, por eso lo extraemos con la desestructuración.
    //     // Tambien nos brinda la posibilidad de tomarle una screen shot al componente, por eso aca utilizamos toMatchSnapshot que sirve para indicar que el componente debe hacer match con la screen shot, es decir debe ser identico.
    //     // Hacer esto nos creara un archivo llamado _snapshots_ al mismo nivel del archivo del test, en el podremos visualizar la captura del componente que se renderizo.
    //  });

     test('Debe de mostrar el título en un h1', () => { 
        
        const title = 'Hola soy Goku';
        const { container, getByText, getByTestId } = render( <Props title={ title } /> );

        expect( getByText(title) ).toBeTruthy()
        // getByText es un metodo de React Testing Library que indica que obtenga el nodo por un texto en especifico.
        // getByText(title) al pasarle esto al expect estamos indicando que en el componente renderizado el titulo debe hacer match con el title que indicamos arriba y .toBeTruthy quiere decir que se encuentre.


        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title )
        // En esta prueba estamos verificando que el title este colocado en un tag H1. .toContain quiere decir que el elemento debe Contenter ese title, no debe ser igual sin ninguna diferencia, con que contenga el mismo title aunque tenga cosas añadidas, hara match. A diferencia del toBe.
      
      
        expect( getByTestId('test-title').innerHTML ).toContain(title)
        //con getByTestId lo que hacemos es traer el elemento por el id que le pusimos en su data-id para poder testearlo, independientemente de que cambie de tag HTML en el futuro, por ejemplo si pasa de ser un H1 a un div, de esta manera el test seguira funcionando y es una forma mas flexible de hacerlo.
      });

      test('Debe de mostrar el subtitulo enviado por props', () => { 
        
        const title = 'Hola soy Goku';
        const subTitle = 'Hola soy un subtitulo';
        const { getAllByText } = render( <Props title={ title } subTitle={ subTitle } /> );

        expect( getAllByText(subTitle).length ).toBe(2)
        // Aqui utilizamos getAllByText porque poseemos 2 elementos iguales (2 subtitles) entonces si utilizamos el getByText el test fallaria ya que solo espera en contrar 1. De esta manera lo que retorna es un Array con los elementos encontrados, entonces podemos utilizar el metodo propio de JS de .length para testear la cantidad de esos elementos y en este caso poseemos solo 2 por eso el test pasaria, en el caso de que se añadan mas elementos iguales o se reste 1, el test dara un error.
       })

 })