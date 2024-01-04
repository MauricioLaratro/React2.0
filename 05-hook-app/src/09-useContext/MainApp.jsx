import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { Navbar } from "./Navbar"

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <Navbar/>
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="/login" element={ <LoginPage/> }/>
            <Route path="/about" element={ <AboutPage/> }/>

            {/* <Route path="/*" element={ <AboutPage/> }/> */}
            {/* Esto se hace para que cualquier path que no este implicitamente indicado (/*) en vez de dirigir a una pagina no encontrada, dirija a una que establezcamos, en este ejemplo usamos el AboutPage */}

            <Route path="/*" element={ <Navigate to="/about"/> }/>
            {/* Esto es lo mismo que lo de arriba pero al utilizar navigate lo que sucede es que al intentar navegar a esa ruta no especificada o inexistente, redirije al aboutpage en este caso y tambien CAMBIA el path al del about, ya que en el ejemplo anterior, esa ruta inexistente se mantiene aunque se muestra la vista del aboutpage */}

        </Routes>
    </>
  )
}
