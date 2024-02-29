import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import { getHeroByName } from '../helpers';

export const SearchPage = () => {

  // Almacenamos el hook propio de react router dom, useNavigate() para manejar la navegación, aunque no iremos a ninguna otra pagnia, si estaremos cambiando los querys parameters de la url de la pagina de search
  const navigate = useNavigate()

  // Utilizamos el hook propio de reac router dom useSearchParams() para poder obtener por separado los diferentes querys parameters en el caso de tener mas de 1
  const [searchParams, setSearchParams] = useSearchParams();
  // Esta es la foroma de acceder a los diferentes querys parameters segun lo que nos retorna useSearchParams(), entonces lo almacenamos en la constante querys
  const querys = Object.fromEntries(searchParams.entries())
  // Luego desestructuramos la q de los querys porque siempre son opcionales y en el caso que no venga, lo seteamos como un string vacio. Y este mismo "q" es el que vamos a utilizar para renderizar la información correspondiente al hero o el error en el caso de que no sea un hero valido
  const { q = '' } = querys
  // console.log(querys);

  // Pasamos nuestra function de getHeroByName(q) con la q obtenida de los querys como parametro, para que cumpla el roll del name de la funcion.
  const heroes = getHeroByName(q)


  // Desestructuramos searchText y onInputChange de nuestro custom hook de useForm, recordemos que podemos añadir searchText directamente aqui, ya que en el return de nuestro custom hooks devolvemos "...formState" los que nos habilita a añadir cualqueir otro elemento directamente al utilizarlo como aqui.
  // Ese mismo searchText es el que por defecto sera el mismo q actual y se seteara con el texto que se coloque en el input de nuestro form, manejandolo con nuestro onInputChange.
  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  // Añadimos la funcion del submit para el form, en la que primero establecemos una condicional que evita que el form se envie con un texto vacio o un solo caracter.
  // En el caso de que el input no este vacio y se pueda enviar, lo que se hace es utilizar navigate para navegar a la misma pantalla, pero añadiendo un query parameter, que es el mismo searchText, pero pasando los metodos toLowerCase y trim para limpiar de mayusculas y espacios.
  const onSearchSubmit = (event) =>{

    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return

    navigate(`?q=${ searchText.toLowerCase().trim() }`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit } aria-label='form'>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>


        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            // indicamos que si q es igual a un string vacio, se renderice el div que indique que debes buscar un hero. En caso contrario añadimos otra condicional preguntando si heroes length es igual a 0, entendiendo ese heroes como el arreglo YA FILTRADO que obtuvimos mas arriba en este componente, eso quiere decir que si se busco algo, pero no coincide con ningun hero, entonces renderizamos el div que indica que no hay coincidencias con las busqueda
            // Y en el caso de que se pasen estas 2 condincionales, simplemente no se renderizaria ninguno de estos 2 divs y se pasaria a renderizar correctamente los heroes que se encuentren segun la busqueda, con el map que esta debajo.
            (q === '')
              ?
              <div className="alert alert-primary">Search a Hero</div>
              : ( heroes.length === 0 ) && <div aria-label='alert-danger' className="alert alert-danger">No hero with <b>{ q }</b></div>
          }


          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero }/>
            ))
          }


        </div>
      </div>

    </>

  )
}
