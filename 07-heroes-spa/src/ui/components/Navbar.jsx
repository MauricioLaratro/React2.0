import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    // Custom Hook propio de React Router Dom para facilitar la configuracion de la navegación de nuestras App
    const navigate = useNavigate()

    // Creamos la funcion que permita navegar hacia el login al precionar el boton de Logout, utilizando el custom Hook de react router dom
    const onLogout = () => {

        // Indicamos la ruta a la que debe navegar al llamar esta funcion "/login" y utilizamos replace: true que nos sirve para eliminar la ultima entrada del historial antes de presionar Logout, lo que evita que se pueda volver a la pagina anterior, utilizando el boton de atras, una vez se desloguee el usuario.
        navigate('/login', {
            replace: true
        })

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        // desestructuramos isActive para indicar que si es true se le añada la clase active y en el caso de ser false se le añada un string vacio. Para si dar el indicativo al link del nav bar que esta activo actualmente.
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` } 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': ''}` } 
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-primary'>
                        Mauricio
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}