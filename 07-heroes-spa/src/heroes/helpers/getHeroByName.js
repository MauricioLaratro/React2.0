import { heroes } from '../data/heroes'

// Creamos la funcion para obtener el hero segun su nombre escrito en la busqueda y le pasamos como argumento name que es igual a un string vacio
export const getHeroByName = ( name = '' ) => {

    // Limpiamos de mayusculas y tambien de espacios en blanco ya que podria saltarse la condicional de abajo si envia un espacio vacio, ya que el length no seria 0
    name = name.toLowerCase().trim()
    
    // Establecemos una condicional que en el caso que se busque un hero sin escribir ningun caracter, la funcion devuelva un array vacio y finalice su ejecucion en esta parte.
    if ( name.length === 0 ) return []

    // Utilizamos el metodo .filter en nuestro array de heroes que importamos desde la data. al filter le indicamos que si hero.superhero (que es el nombre del hero en nuestra data), incluye algo del name que le pasamos como argumento a esta función, devuelva el hero correspondiente.
    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes( name )
    );
}