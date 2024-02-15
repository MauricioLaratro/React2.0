import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard"

// Le pasamos como una prop necesaria "publisher" a nuestro componente, para que el padre del componente reutilizable pueda definir sobre que publisher desea obtener los heroes
export const HeroList = ({ publisher }) => {

    // Almacenamos la funcion getHeroesByPublisher pasandole la prop publisher
    // Utilizamos useMemo, porque cuando utilizamos una funcion en la raiz del componente, esta se ejecutara cada vez que el estado del componente cambie, por lo tanto puede ser un proceso pesado, entonces al utilizar useMemo evitamos esta nueva llamada a la funcion getHeroesByPublisher, e indicamos que solo debe actualizarse cuando una dependencia se actualice. Que en este caso la dependencia que indica una actualización necesaria es ", [ publisher ]"
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] )

    // Retornamos un ul y dentro de el mapeamos el array que nos trae la constante de arriba heroes. La funcion dentro de map recibe el argumento hero y renderiza un li por cada hero que encuentre en la data con el publisher que le pasemos en el padre que utilice el componente. Y por cada uno que encuentre renderizara un texto dentro del li con el nombre del super hero. Y tambien le pasamos un key que es el hero.id
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            heroes.map( hero => (
                <HeroCard
                    key={hero.id}
                    // Desestructuramos el "...hero" para obtener todas las props del componente HeroCard
                    { ...hero }
                />
            ))
        }
    </div>
  )
}
