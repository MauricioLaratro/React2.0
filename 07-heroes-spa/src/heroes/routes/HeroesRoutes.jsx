import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { DcPage, MarvelPage, SearchPage, SingleHeroPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="/" element={<Navigate to="marvel" />}/>
                <Route path="marvel" element={<MarvelPage />}/>
                <Route path="dc" element={<DcPage />}/>
                <Route path="search" element={<SearchPage />}/>

                {/* Pasamos /:heroId para enviar el id del hero al contexto del provider y poder renderizar una pagina individual por cada hero, sin tener que crear un link y una vista individual para cada uno de ellos */}
                <Route path="hero/:heroId" element={<SingleHeroPage />}/>
            </Routes>
        </div>
    </>
  )
}
