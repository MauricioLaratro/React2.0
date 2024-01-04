import { LoadingQuotes } from "../components/LoadingQuotes"
import { QuotesComponent } from "../components/QuotesComponent"
import { useFetch, useCounter } from "../hooks"
// reuitilizamos parte de nuestro custom hook del useCounter para por cambiar los quotes con un btn

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    
    // const [quoteNumber, setQuoteNumber] = useState(1)
    
    
    // const nextQuote = () =>{
    //     setQuoteNumber( quoteNumber + 1 )
    // }
    
    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    const { author, quote } = !!data && data[0]
    // Para poder desestructurar el author y el quote y almacenarlos en esta constante, debemos estableces la condicionar que utilizamos de doble negacion "!!" para transformar el undefined que obtenemos al principio de la peticion, a un FALSE, eso es lo que hace la doble negación para poder desestructurar, ya que de undefined/null no se puede desestructurar pero de false si. Mas el and logico, que le estamos diciendo es que si data is true, entonces que de la posicion 0 del mismo extraiga quote y autho, de lo contrario si data no posee nada, no hara ninguna accion. Esto lo hacemos porque data nos devuelve un array y en un momento del renderizado ese array es null hasta que termine de hacer la peticion exitosamente, por lo tanto si intentamos desestructurar algo de un elemento con valor null, la app se detendra por un error de JavaScript
    // Esto no es necesario si nos regresa un {objeto} en vez de un [array]

  return (
    <>
    
    <h1>BreakingBad Quotes</h1>
    <hr />

    {
        isLoading 
            ?<LoadingQuotes/>
            :<QuotesComponent author={ author } quote={ quote }/>

    }


    <button
        className="btn btn-primary"
        disabled={ isLoading }
        onClick={ () => increment(1)}>
        next Quote
    </button>
    {/* Con disabled={ isLoading } estamos inidicando que mientras este cargando la data, el boton estara deshabilitado */}

    </>
  )
}
