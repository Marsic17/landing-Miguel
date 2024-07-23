import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <link to='/'>
            <h3>Ecommerce</h3>
            </link>
            <div>
                <NavLink to={`/category/laptops`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>laptops</NavLink>
                <NavLink to={`/category/componentes de pc`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>componentes de pc</NavLink>
                <NavLink to={`/category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>accesorios</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar