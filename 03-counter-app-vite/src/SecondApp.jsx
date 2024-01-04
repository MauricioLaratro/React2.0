
// Es un regla de react que si no se cambiara un elemento, o no se vera afectado por algun Hook, lo ubiquemos fuera de la function declarativa del componente, ya que evitamos re renderizados o reprocesos innecesarios. En el caso que el elemento se vea afectado por un useState por ejemplo, si deberia estar dentro de la function. (Al colocarlo fuera de la function no se coloca en el scope global, sigue estando encapsulado dentro del componente, nada mas que solo lo procesa en el primer renderizado).
// Simepre que no sea un Object, podemos utilizar nuestras variables en elementos dentro del componente para renderizarlos.
const appTitle = 'Second App!';

// Tambien podemos renderizar el resultado de una function, dentro del componente de React a renderizar
// A excepciones de las promesas y functiones async, ya que las promesas son en realidad Objetcs de JS por lo que no se pueden
// const getSaludo = ()=> 'Hola soy una function!'
// La siguiente function es lo mismo que la de arriba, pero utilizando los parametros para que sea variable, en vez de poner explicito el resultado en la function
const getSaludo = (a, b)=> a+b


export function SecondApp() {

    return (
        // Utiilzar <> vacio es una forma simplificada de utilizar Fragment de React, asi no tenemos que importarlo en el documento para poder utilizarlo.
        // Fragment sirve para tener 2 o mas elementos en el mismo nivel jerarquico, sin tener que envolverlos dentro de un <div>.
        <>
            <h2>
                { appTitle }
                <br/>
                { getSaludo('Hola ','Soy una function') }
            </h2>
            <p>
                Soy un P dentro del mismo componente utilizando Fragment de react
            </p>
        </>
    )
}


