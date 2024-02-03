import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark rounded-3">
      <div className="container-fluid justify-content-between">
        <Link className="navbar-brand" to="/">useContext</Link>

        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <NavLink to="/" className='nav-link'>
              Home
            </NavLink>

            <NavLink to="about" className='nav-link'>
              About
            </NavLink>

            <NavLink to="login" className='nav-link'>
              Login
            </NavLink>

          </ul>
        </div>
      </div>
</nav>
  )
}


// <NavLink/> se utiliza como un HOC que permite determinar automaticamente si el link debe tener la clase "active" si es que estamos en la vista que corresponde a ese link, a diferencia del tag <Link/> que no lo hace de manera automatica.