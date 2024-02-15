import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { useMemo } from "react"

export const SingleHeroPage = () => {

  // useParams() es un hook propio de react router dom, que nos permite acceder a los parametros de la url para poder utilizarlos.
  // De los parametros que obtenemos, desestructuramos el heroId que es el que le pasamos como parametro a la route en el HeroeRoutes.jsx que a su vez es el mismo id que le pasamos en el HeroCard.jsx al link de "Más Información"
  const { heroId } = useParams()
  
  // Obtenemos el hero segun el id del parametro, con la funcion de getHeroById y lo almacenaoms
  // Utilizamos useMemo, porque cuando utilizamos una funcion en la raiz del componente, esta se ejecutara cada vez que el estado del componente cambie, por lo tanto puede ser un proceso pesado, entonces al utilizar useMemo evitamos esta nueva llamada a la funcion getHeroById, e indicamos que solo debe actualizarse cuando una dependencia se actualice. Que en este caso la dependencia que indica una actualización necesaria es ", [ heroId ]"
  const hero = useMemo( () => getHeroById( heroId ), [ heroId ] );


  // Utilizamos el hook useNavigate de react router dom, para utilizarlo en la funcion del boton de "regresar"
  const navigate = useNavigate()
  // Indicamos en una condicional que si el publisher del hero es dc, al precionar el boton de "regresar" dirija al usuarioa a la vista de todos los heroes de DC y en el caso que no sea, siempre regrese a marvel.
  const onNavigateBack = () => {
    // if( hero.publisher === 'DC Comics' ){
    //   navigate('/dc')
    // }
    // else{
    //   navigate('/marvel')
    // }

    navigate(-1);
  }


  // Creamos una condicional para el caso en el que el usuario escriba una url manualmente y pase como heroId el nombre de un hero inexistente. En ese caso la funcion se detendra en este punto y lo redirigira a la vista de /marvel. En el caso de que hero si sea valido, esta parte no se ejecutara y seguira la funcion normalmente, renderizando el componente que esta debajo.
  if ( !hero ) {
    return <Navigate to="/marvel"/>
  }

  // console.log(hero)

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assests/heroes/${ heroId }.jpg`}
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego } </li>
          <li className="list-group-item"><b>Publisher:</b> { hero.publisher } </li>
          <li className="list-group-item"><b>First appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p>

        <button
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>
    </div>
  )
}
