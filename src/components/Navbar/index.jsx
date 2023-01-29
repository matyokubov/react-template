import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer"
import { navbar } from "../../utils/navbar"
import { NavbarBox } from "./style"

function Navbar() {
    console.log("The Navbar");
    const getActiveClassName = ({isActive}) => isActive ? "active" : "notActive"
    return (
        <>
            <NavbarBox>
                <div className="navbar container">
                    <img src="#" alt="#"/>
                    <ul>
                        {
                           navbar.map(({title, path, hidden}, i) => {
                                return !hidden && <li key={i}>
                                    <NavLink key={i} to={path} className={getActiveClassName}>{title}</NavLink>
                                </li>
                           })
                        }
                    </ul>
                    <div>
                        <button>Button1</button>
                        <button>Button2</button>
                    </div>
                </div>
            </NavbarBox>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Navbar;