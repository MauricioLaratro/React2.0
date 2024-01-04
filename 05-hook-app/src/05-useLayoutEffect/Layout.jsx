import { LoadingQuotes } from "../components/LoadingQuotes"
import { QuotesComponent } from "../components/QuotesComponent"
import { useFetch, useCounter } from "../hooks"

export const Layout = () => {

    const { counter, increment } = useCounter(1)

    const { data, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    const { author, quote } = !!data && data[0]

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
    </>
  )
}
