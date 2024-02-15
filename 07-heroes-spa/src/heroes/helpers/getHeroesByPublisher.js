import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) =>{

    // Almacenamos en una constante, un array con los unicos publisher adminitidos
    const validPublishers= ['DC Comics','Marvel Comics']

    // Añadimos una condicional que, en el caso de que el publisher pasado como argumento a la funcion no se encuentre dentro de los validPublishers, detenga la funcion y arroje un error indicando que no es un publisher admitido
    if ( !validPublishers.includes( publisher ) ){
        throw new Error(`${ publisher } no es un publisher valido`)
    }

    // Si el publisher pasado como argumento si se encuentra dentro de validPublishers, ejecuta el siguiente codigo
    // Lo que hace el codigo es filtrar los heroes, por el publisher que estamos recibiendo por argumento en la funcion getHeroesByPublisher
    return heroes.filter( heroe => heroe.publisher === publisher )

}