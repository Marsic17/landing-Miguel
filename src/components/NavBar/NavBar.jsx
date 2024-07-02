import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <h3>Ecommerce</h3>
            <div>
                <button>Laptops</button>
                <button>Componentes de pc</button>
                <button>Consolas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar