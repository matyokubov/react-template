import { Route, Routes, Navigate } from "react-router-dom"
import { navbar } from "./utils/navbar"
import Navbar     from "./components/Navbar"
import Page404    from "./pages/Page404"

function Root() {
    return (
        <Routes>
            <Route element={<Navbar/>}>
                {
                    navbar.map(({id, element, path}) => {
                        return <Route key={id} path={path} element={element}/>
                    })
                }
                <Route path="*" element={<Page404/>}/>
            </Route>
            <Route path="/" element={<Navigate to={"/home"}/>}/>
        </Routes>
    )
}

export default Root;