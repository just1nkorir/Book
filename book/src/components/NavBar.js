import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <>
        <NavLink to={'/library'} end>
            Library
        </NavLink>
        <NavLink to={'/booklist'} end>
            Booklist
        </NavLink>
        </>
    )
}

export default NavBar;