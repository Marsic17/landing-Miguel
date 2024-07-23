import { NavLink, Link } from "react-router-dom";
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/" className="logo">
                <h3>Ecommerce</h3>
            </Link>
            <div className="nav-links">
                <NavLink to={`/category/laptops`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Laptops</NavLink>
                <NavLink to={`/category/componentes de pc`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Componentes de PC</NavLink>
                <NavLink to={`/category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            </div>
            <div className="cartIcon">
                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
