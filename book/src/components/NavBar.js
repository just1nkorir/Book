import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

function NavBar(){
    return(
        <>
        <NavLink to={'/library'} end>
            <a Library>Library</a>
        </NavLink>
        <NavLink to={'/booklist'} end>
        <a Library>Booklist</a>
        </NavLink>
        </>
    )
}

export default NavBar;