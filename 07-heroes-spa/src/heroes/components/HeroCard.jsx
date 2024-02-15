import { Link } from "react-router-dom"

// Pasamos todos los elementos que contiene cada objeto de un hero, como props para el componente
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    // Almacenamos la url de las imagenes de los heros, con el id como varible para que se coloque la imagen correspondiente al id de cada hero
    const heroImageUrl = `/assests/heroes/${id}.jpg`

    // Creamos la card pasandole la info de los heroes mediante las props del componente
  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">

                <div className="col-4">
                    <img src={ heroImageUrl } alt={ superhero } className="card-img"/>
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>

                        {/* Abrimos un fragmento de js donde indicamos una condicional que solo imprima el parrafo de characters, cuando el alter_ego es diferente a characters. Porque hay muchos heroes en donde se repiten un solo character que es el mismo que el alter_ego y de esta forma solo renderizamos los que son diferentes. */}
                        {
                            ( alter_ego !== characters ) && (<p>{ characters }</p>)
                        }

                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>

                        {/* Utilizamos el Link de reac-router-dom pasandole como la vista de hero y mas el id del hero al que se hace click en más información. Esto nos permitira ir a la pagina de hero individual, correspondiente al que hacemos click */}
                        <Link to={`/hero/${ id }`}>
                            Más información...
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}
