import { heroes } from "../data/heroes"

// Creamos una funcion que obtenga el hero que sea igual al id que le pasamos, con heroes.find, obtenemos solamente el primer resultado del array de heroes y es lo que necesitamos
export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id )

}