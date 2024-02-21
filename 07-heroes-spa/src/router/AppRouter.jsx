import { Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes"

import { LoginPage } from "../auth/pages/LoginPage"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>

        {/* Le pasamos la página de login como children a nuestro HOC de PublicRoute, para evitar que el usuario ya autenticado pueda navegar a la página de login, la unica forma en la que pueda navegar a esta página es haciendo el logout */}
        <Route path="login" element={
          <PublicRoute>
              <LoginPage/>
          </PublicRoute>
        }/>

        {/* Creamos un route general, al que le pasamos como element, nuestro HOC que contiene las rutas privadas y como children el mismo, le pasamos nuestro componente que engloba a todas nuestras rutas que deseamos que sean privadas, en este caso es <HeroesRoutes/> */}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>
        }/>


      </Routes>
    </>
  )
}
