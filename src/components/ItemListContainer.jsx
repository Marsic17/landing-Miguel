import { useState, useEffect, useContext } from "react";
import './ItemListContainer.css';
import { useParams, Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const fetchProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const allProducts = [
                {id: '1', name: 'b450 pro max', price: 60, category: 'pc components', img: 'https://m.media-amazon.com/images/I/81cgZOTcrPL._AC_SX466_.jpg', stock: 30, description: 'motherboard b450 pro msi' },
                {id: '2', name: 'radeon rx6600', price: 200, category: 'pc components', img: 'https://m.media-amazon.com/images/I/81Vtsr0wIVL.__AC_SY300_SX300_QL70_FMwebp_.jpg', stock: 18, description: 'radeon graphics card'},
                {id: '3', name: 'amd ryzen 7 5700g', price: 180, category: 'pc components', img: 'https://m.media-amazon.com/images/I/51D3DrDmwkL.__AC_SX300_SY300_QL70_FMwebp_.jpg', stock: 22, description: 'processor amd'},
                {id: '4', name: 'Acer Nitro V Laptop', price: 900, category: 'laptop', img: 'https://m.media-amazon.com/images/I/71F-Wcriq4L._AC_SX679_.jpg', stock: 28, description: 'laptop'},
                {id: '5', name: 'ASUS TUF Gaming A15', price: 650, category: 'laptop', img: 'https://m.media-amazon.com/images/I/81kxce-AlLL.__AC_SX300_SY300_QL70_FMwebp_.jpg', stock: 12, description: 'laptop'},
                {id: '6', name: 'HyperX Cloud II', price: 90, category: 'accessories', img: 'https://m.media-amazon.com/images/I/71u77S3CdSL._AC_SY879_.jpg', stock: 22, description: 'audifonos hyperx'}
            ];
            if (category) {
                resolve(allProducts.filter(product => product.category === category));
            } else {
                resolve(allProducts);
            }
        }, 500);
    });
};

const ItemListContainer = ({ addToCart }) => {
    const {setCartCount, cartCount} = useContext(CartContext)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        fetchProducts(categoryId).then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, [categoryId]);

    if (loading) {
        return <div className="loading">Espere por favor</div>;
    }


    return (
        <div className="ItemsOnList">
            <h2>Productos</h2>
            <div className="infoBasicProd">
                
                {products.map(product => (
                  
                    <div key={product.id} className="CardProd">
                        <img src={product.img} alt={product.name} className="ImageProd" />
                        <div className="InfoProd">
                            <h3 className="NameProd">{product.name}</h3>
                            <p className="DescriptionProd">{product.description}</p>
                            <p className="PriceProd">${product.price}</p>
                            <div className="ActionsProd">
                                <button onClick={() => {addToCart(product); setCartCount(cartCount + 1)}} className="add-to-cart-button">Añadir al carrito</button>
                                <Link to={`/Item/${product.id}`} className="view-details-button">Descripción</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
